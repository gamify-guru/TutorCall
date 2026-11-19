(function () {
  "use strict";

  const STORAGE_KEY = "tutorcall-sketchbook-knows-more-v1";
  const TIMER_MAX = 2700;

  const LINES_EN = [
    "I notice what others ignore.",
    "That is not a gift, it is a responsibility.",
    "The sketchbook already knows more than the report.",
    "The truth isn’t always loud.",
    "They called us to the main hall as if it were an honor.",
    "I watched their faces, not the speech.",
    "People hear the prize, they do not hear what is missing.",
    "My sketchbook is not for art class.",
    "I draw what does not fit, a look, a pause, a name that should not be in the room.",
    "Someone in this academy smiles too easily.",
    "I wrote a line I am not supposed to show yet.",
    "Do not trust the easy story they tell us.",
    "The official report will sound complete, it will not be.",
    "The sketchbook already knows more than the invitation.",
    "If they ask where I was, Main Hall.",
    "If they ask what I saw, not enough, not yet."
  ];
  const LINES_RU = [
    "Я замечаю то, что другие игнорируют.",
    "Это не дар, это ответственность.",
    "Скетчбук уже знает больше, чем отчёт.",
    "Правда не всегда громкая.",
    "Нас позвали в главный зал так, будто это честь.",
    "Я смотрела на их лица, а не слушала речь.",
    "Люди слышат про приз, они не слышат, чего не хватает.",
    "Мой скетчбук — не для уроков рисования.",
    "Я рисую то, что не вписывается: взгляд, паузу, имя, которого не должно быть в комнате.",
    "Кто-то в этой академии улыбается слишком легко.",
    "Я написала строку, которую пока нельзя показывать.",
    "Не верь удобной истории, что нам рассказывают.",
    "Официальный отчёт прозвучит полно, но полным не будет.",
    "Скетчбук уже знает больше, чем приглашение.",
    "Если спросят, где я была, — Главный зал.",
    "Если спросят, что я видела, — недостаточно. Пока нет."
  ];

  const CLUES = [
    { id: "c1", code: "УЛИКА 01", title: "Приз — это ширма", text: "Церемония в Main Hall — прикрытие. Приз нужен, чтобы все смотрели на сцену, а не по сторонам.", detail: "«People hear the prize, they do not hear what is missing»", mission: "Миссия 01" },
    { id: "c2", code: "УЛИКА 02", title: "Отчёт будет ложью", text: "Официальный отчёт академии прозвучит «полно», но правды там не будет. Властям верить нельзя.", detail: "«The official report will sound complete, it will not be»", mission: "Миссия 01" },
    { id: "c3", code: "УЛИКА 03", title: "В зале — чужой", text: "В комнате было имя, которого там быть не должно. Кто-то лишний присутствовал на церемонии.", detail: "«a name that should not be in the room»", mission: "Миссия 02" },
    { id: "c4", code: "УЛИКА 04", title: "Подозреваемый улыбается", text: "Кто-то в академии притворяется. Улыбка «too easily» — маска. Героиня уже следит за ним.", detail: "«Someone in this academy smiles too easily»", mission: "Миссия 02" },
    { id: "c5", code: "УЛИКА 05", title: "Доказательство спрятано", text: "В скетчбуке есть строка-доказательство. Показывать её опасно — героиня ждёт момента.", detail: "«I wrote a line I am not supposed to show yet»", mission: "Миссия 03" },
    { id: "c6", code: "УЛИКА 06", title: "Допрос неизбежен", text: "Её будут допрашивать. Она уже готовит короткие ответы: «Main Hall. Not enough, not yet».", detail: "«If they ask what I saw, not enough, not yet»", mission: "Финал" }
  ];

  const HELP = [
    { id: "h1", tab: "strategy", tag: "АУДИРОВАНИЕ", title: "Слушай смысл, а не слова", body: "Не пытайся понять 100% слов. Лови ключевые слова: кто? где? что чувствует? В ЕГЭ вопрос почти всегда перефразирован синонимами.", example: "«I watched their faces, not the speech» → вопрос скажет looks / expressions, а не faces.", exampleRu: "Ищи синонимы, а не те же слова.", tip: "Первое прослушивание — общий смысл. Второе — детали." },
    { id: "h2", tab: "ege", tag: "ЛОВУШКА ЕГЭ", title: "True / False / Not Stated", body: "TRUE — сказано прямо или синонимами. FALSE — противоречит тексту. NOT STATED — этого в тексте вообще нет (даже если «похоже на правду»).", example: "«The meeting was on Monday» — в записи нет дня → NOT STATED, не False!", exampleRu: "Нет информации = Not Stated. Не додумывай.", tip: "ЕГЭ любит Not Stated: 30% ошибок — додумывание." },
    { id: "h3", tab: "ege", tag: "ЛОВУШКА ЕГЭ", title: "Отрицание переворачивает всё", body: "not, never, no, nothing меняют смысл на противоположный. В записи героиня постоянно отрицает «удобную» версию.", example: "«It is NOT a gift» / «I did NOT hear» / «will NOT be»", exampleRu: "Услышал not — ставь метку: смысл обратный.", tip: "Подчеркни все not в утверждении перед ответом." },
    { id: "h4", tab: "vocab", tag: "ЛЕКСИКА", title: "notice ≠ note", body: "notice (v) — заметить что-то важное. ignore — намеренно не обращать внимания. Пара дня: замечать vs игнорировать.", example: "«I notice what others ignore» — Я замечаю то, что другие игнорируют.", exampleRu: "notice a look / a pause / a detail" },
    { id: "h5", tab: "vocab", tag: "ЛЕКСИКА", title: "8 слов-ключей записи", body: "responsibility — ответственность • missing — отсутствующий • invitation — приглашение • official report — официальный отчёт • trust — доверять • pause — пауза • prize — приз • sketchbook — скетчбук.", example: "«Do not trust the easy story» — Не доверяй удобной истории.", exampleRu: "trust ↔ doubt (сомневаться)", tip: "missing = what is NOT there. Ключ к Улике 01." },
    { id: "h6", tab: "grammar", tag: "ГРАММАТИКА", title: "Present Simple = факт", body: "Героиня говорит фактами: I notice, The truth isn’t, People hear. Present Simple — для правды, которая всегда верна.", example: "«The truth isn’t always loud» — Правда не всегда громкая (факт).", exampleRu: "I draw / She smiles / They tell — привычки и факты." },
    { id: "h7", tab: "grammar", tag: "ГРАММАТИКА", title: "as if + were — «как будто»", body: "Конструкция нереальности: было НЕ честью, но притворились. После as if — were для всех лиц (сослагательное).", example: "«as if it were an honor» — как будто это была честь (а это была не честь).", exampleRu: "She smiles as if she were innocent. — Как ни в чём не бывало." },
    { id: "h8", tab: "grammar", tag: "ГРАММАТИКА", title: "If they ask… — условие", body: "Conditional 1: If + Present Simple, … (will / повелит.). Героиня репетирует допрос заранее.", example: "«If they ask where I was, [say] Main Hall»", exampleRu: "If they ask what I saw — условие реального будущего.", tip: "Обрати внимание: короткий ответ = скрывает информацию." },
    { id: "h9", tab: "grammar", tag: "ГРАММАТИКА", title: "Do not trust + will", body: "Отрицательный императив: Do not + verb — запрет/предупреждение. Will — предсказание о будущем отчёте.", example: "«Do not trust the easy story» + «The report will sound complete»", exampleRu: "will sound — прозвучит (но не будет правдой)." },
    { id: "h10", tab: "strategy", tag: "ПОДТЕКСТ", title: "Как читать между строк", body: "Маркеры скрытого смысла: too (слишком), not yet (пока нет), already (уже), as if (как будто). За ними всегда прячется улика.", example: "«smiles TOO easily» → притворяется. «not YET» → скоро покажет.", exampleRu: "already knows MORE than… → сравнение = что-то скрывают." }
  ];

  const TF = [
    { id: "t1", text: "The speaker thinks her ability is a gift.", textRu: "Героиня считает свою способность даром.", answer: "F", explain: "False: «That is NOT a gift, it is a responsibility» — прямое противоречие.", clue: null },
    { id: "t2", text: "The sketchbook knows more than the official report.", textRu: "Скетчбук знает больше, чем официальный отчёт.", answer: "T", explain: "True: «The sketchbook already knows more than the report».", clue: "c2" },
    { id: "t3", text: "The meeting in the main hall was a punishment.", textRu: "Собрание в главном зале было наказанием.", answer: "F", explain: "False: их позвали «as if it were an honor» — как на честь, а не наказание.", clue: null },
    { id: "t4", text: "The speaker listened carefully to the speech.", textRu: "Героиня внимательно слушала речь.", answer: "F", explain: "False: «I watched their faces, NOT the speech».", clue: null },
    { id: "t5", text: "Most people noticed what was missing.", textRu: "Большинство заметили, чего не хватало.", answer: "F", explain: "False: «they do NOT hear what is missing».", clue: "c1" },
    { id: "t6", text: "The girl uses her sketchbook only for art class.", textRu: "Девочка использует скетчбук только для уроков ИЗО.", answer: "F", explain: "False: «My sketchbook is NOT for art class».", clue: null },
    { id: "t7", text: "The girl trusts everyone in the academy.", textRu: "Героиня доверяет всем в академии.", answer: "F", explain: "False: «Someone smiles TOO easily» + «Do not trust…».", clue: null },
    { id: "t8", text: "The girl is ready to show everything she wrote.", textRu: "Героиня готова показать всё, что написала.", answer: "F", explain: "False: «I am NOT supposed to show YET» — пока нельзя.", clue: null },
    { id: "t9", text: "The ceremony in the main hall took place on Monday evening.", textRu: "Церемония прошла в понедельник вечером.", answer: "NS", explain: "Not Stated: день и время в записи не названы. Классическая ловушка ЕГЭ!", clue: null },
    { id: "t10", text: "The speaker has already given her sketchbook to the teachers.", textRu: "Героиня уже отдала скетчбук учителям.", answer: "NS", explain: "Not Stated: она прячет скетчбук, про передачу учителям — ни слова.", clue: null }
  ];

  const VOCAB = [
    { id: "m1", en: "notice", ru: "замечать важное" },
    { id: "m2", en: "ignore", ru: "игнорировать, не замечать" },
    { id: "m3", en: "responsibility", ru: "ответственность" },
    { id: "m4", en: "missing", ru: "отсутствующий, пропавший" },
    { id: "m5", en: "invitation", ru: "приглашение" },
    { id: "m6", en: "official report", ru: "официальный отчёт" },
    { id: "m7", en: "trust", ru: "доверять" },
    { id: "m8", en: "pause", ru: "пауза, заминка" }
  ];

  const GAPS = [
    { id: "g1", before: "I notice what others", answer: "ignore", after: ".", hint: "игнорируют" },
    { id: "g2", before: "That is not a gift, it is a", answer: "responsibility", after: ".", hint: "ответственность" },
    { id: "g3", before: "The truth isn’t always", answer: "loud", after: ".", hint: "громкая" },
    { id: "g4", before: "I watched their faces, not the", answer: "speech", after: ".", hint: "речь" },
    { id: "g5", before: "People hear the prize, they do not hear what is", answer: "missing", after: ".", hint: "отсутствует" },
    { id: "g6", before: "Someone in this academy smiles too", answer: "easily", after: ".", hint: "легко" },
    { id: "g7", before: "Do not trust the", answer: "easy", after: " story they tell us.", hint: "удобной" },
    { id: "g8", before: "If they ask where I was,", answer: "Main Hall", after: ".", hint: "Главный зал" }
  ];
  const BANK = ["ignore", "responsibility", "loud", "speech", "missing", "easily", "easy", "Main Hall"];

  const MCQ = [
    { id: "h1", quote: "They called us to the main hall as if it were an honor.", quoteRu: "Нас позвали в главный зал так, будто это честь.", options: ["It was a great honour for everyone.", "They forced us to come and pretended it was an honour.", "Nobody came to the main hall."], optionsRu: ["Это была большая честь.", "Нас заставили прийти и притворились, что это честь.", "Никто не пришёл."], correct: "They forced us to come and pretended it was an honour.", explain: "as if = «как будто». Чести не было — было принуждение.", clueId: "c1" },
    { id: "h2", quote: "I watched their faces, not the speech.", quoteRu: "Я смотрела на лица, а не слушала речь.", options: ["The speech was very interesting.", "She didn’t understand English.", "The speech was a lie; faces showed the truth."], optionsRu: ["Речь была интересной.", "Она не понимала английский.", "Речь была ложью; лица выдали правду."], correct: "The speech was a lie; faces showed the truth.", explain: "Детектив смотрит на лица: микромимика не врёт.", clueId: "c3" },
    { id: "h3", quote: "People hear the prize, they do not hear what is missing.", quoteRu: "Люди слышат про приз, но не слышат, чего не хватает.", options: ["The prize is a distraction from something important.", "Everyone got a prize.", "The prize was very expensive."], optionsRu: ["Приз — отвлекающий манёвр.", "Все получили приз.", "Приз был дорогим."], correct: "The prize is a distraction from something important.", explain: "Пока все смотрят на приз — главное происходит за кадром.", clueId: "c1" },
    { id: "h4", quote: "Someone in this academy smiles too easily.", quoteRu: "Кто-то в академии улыбается слишком легко.", options: ["Someone is very friendly and kind.", "Someone is pretending and hiding something.", "Everyone is happy at the academy."], optionsRu: ["Кто-то очень дружелюбный.", "Кто-то притворяется и что-то скрывает.", "Все счастливы."], correct: "Someone is pretending and hiding something.", explain: "too easily = чрезмерно, неестественно. Маркер лжи.", clueId: "c4" },
    { id: "h5", quote: "The official report will sound complete, it will not be.", quoteRu: "Отчёт прозвучит полно, но полным не будет.", options: ["The report will tell the whole truth.", "The academy will hide the truth in the report.", "There will be no report at all."], optionsRu: ["Отчёт расскажет всю правду.", "Академия скроет правду в отчёте.", "Отчёта не будет."], correct: "The academy will hide the truth in the report.", explain: "will sound complete ≠ will BE complete. Звучать ≠ быть.", clueId: "c2" },
    { id: "h6", quote: "If they ask what I saw — not enough, not yet.", quoteRu: "Если спросят, что я видела, — недостаточно. Пока нет.", options: ["She saw nothing at all.", "She knows everything and will tell everyone.", "She hides information and waits for the right moment."], optionsRu: ["Она ничего не видела.", "Она всё знает и всем расскажет.", "Она прячет информацию и ждёт момента."], correct: "She hides information and waits for the right moment.", explain: "not yet = «пока». Она готовит короткие ответы для допроса.", clueId: "c6" }
  ];

  const PROTO = [
    { id: "s1", q: "Why does the girl draw in her sketchbook?", qRu: "Зачем героиня рисует в скетчбуке?", hint: "Начни с: She draws to… / Because she wants to record…", keywords: ["draw", "fit", "record", "look", "pause", "name", "evidence", "remember", "does not fit", "not fit"], model: "She draws what does not fit — a look, a pause, a name. The sketchbook is her secret evidence, not art.", clues: ["c3", "c5"] },
    { id: "s2", q: "Why doesn’t she trust «the easy story»?", qRu: "Почему она не верит «удобной истории»?", hint: "Используй: because / report / complete / lie / missing…", keywords: ["report", "complete", "lie", "missing", "hide", "truth", "not complete", "not true"], model: "Because the official report will sound complete but will hide the truth.", clues: ["c2"] },
    { id: "s3", q: "Who does she suspect and why?", qRu: "Кого она подозревает и почему?", hint: "Someone who… / because he/she smiles…", keywords: ["someone", "smile", "easily", "too", "academy", "pretend", "hide"], model: "She suspects someone in the academy who smiles too easily — that person is pretending.", clues: ["c4"] },
    { id: "s4", q: "What will she say if teachers ask her questions?", qRu: "Что она ответит учителям на допросе?", hint: "If they ask… she will say…", keywords: ["main hall", "not enough", "not yet", "hall", "enough"], model: "If they ask where she was — «Main Hall». If they ask what she saw — «Not enough, not yet».", clues: ["c6"] }
  ];

  const HW_A = [
    { id: "e1", wrong: "She nottice what others ignore.", correct: "She notices what others ignore.", rule: "3-е лицо ед.ч.: +s. notice → notices." },
    { id: "e2", wrong: "That is not a gift, it is a responsible.", correct: "That is not a gift, it is a responsibility.", rule: "После a нужен noun: responsibility (сущ.), а responsible — прилагательное." },
    { id: "e3", wrong: "They called we to the main hall.", correct: "They called us to the main hall.", rule: "После глагола — объектное местоимение: us, а не we." },
    { id: "e4", wrong: "She watched to their faces.", correct: "She watched their faces.", rule: "watch — без предлога to. Watch + object." },
    { id: "e5", wrong: "Do not to trust the easy story.", correct: "Do not trust the easy story.", rule: "Императив: Do not + V без to." },
    { id: "e6", wrong: "If they will ask, say Main Hall.", correct: "If they ask, say Main Hall.", rule: "В if-части Conditional 1 — Present Simple, без will." }
  ];

  const HW_B = [
    { id: "tr1", task: "Rewrite with the opposite idea (B1): «The truth is always loud.»", taskRu: "Исправь на правду из монолога", start: "The truth …", model: "The truth isn’t always loud." },
    { id: "tr2", task: "Rewrite starting with She: «I draw what does not fit.»", taskRu: "Передай от 3-го лица", start: "She …", model: "She draws what does not fit." },
    { id: "tr3", task: "Make it negative: «Trust the easy story.»", taskRu: "Сделай запретом", start: "Do …", model: "Do not trust the easy story." },
    { id: "tr4", task: "Combine with as if: «They called us. It was an honour. (But it wasn’t.)»", taskRu: "Объедини через as if", start: "They called us as if …", model: "They called us as if it were an honor." }
  ];

  const TABS = [
    { id: "all", label: "Все" },
    { id: "strategy", label: "Стратегия" },
    { id: "ege", label: "ЕГЭ" },
    { id: "vocab", label: "Лексика" },
    { id: "grammar", label: "Грамматика" }
  ];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[’‘`´]/g, "'")
      .replace(/[“”«»]/g, '"')
      .replace(/ё/g, "е")
      .replace(/[.,!?;:…—–\-_/\\()[\]{}]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\bis not\b/g, "isn't")
      .replace(/\bhonour\b/g, "honor")
      .replace(/\bwhilst\b/g, "while");
  }

  function words(s) {
    return String(s || "").trim().split(/\s+/).filter(Boolean);
  }

  function hasKeyword(text, list) {
    const n = norm(text);
    return list.some((k) => n.includes(norm(k)));
  }

  function rankOf(xp, clues) {
    if (clues >= 6 && xp >= 220) return { title: "Главный архивариус", en: "HEAD ARCHIVIST" };
    if (clues >= 4 && xp >= 140) return { title: "Детектив-расшифровщик", en: "CODEBREAKER" };
    if (clues >= 2) return { title: "Младший агент", en: "JUNIOR AGENT" };
    return { title: "Стажёр архива", en: "ARCHIVE TRAINEE" };
  }

  function defaultState() {
    const mcqOrder = {};
    MCQ.forEach((q) => { mcqOrder[q.id] = shuffle(q.options.slice()); });
    return {
      tf: {},
      tfChecked: false,
      matchEn: shuffle(VOCAB.map((v) => v.id)),
      matchRu: shuffle(VOCAB.map((v) => v.id)),
      matchPairs: {},
      gaps: {},
      gapBank: shuffle(BANK.slice()),
      gapChecked: false,
      mcq: {},
      mcqOrder,
      mcqChecked: false,
      proto: {},
      protoChecked: false,
      side: null,
      clues: [],
      xp: 0,
      plays: 0,
      awarded: {},
      transcriptOpen: false,
      showRu: false,
      hwA: {},
      hwAChecked: false,
      hwB: {},
      hwBChecked: false,
      hwC: "",
      hwD: "",
      hwSealed: false,
      helpTab: "all",
      timerLeft: TIMER_MAX,
      timerOn: false,
      activeGap: "g1"
    };
  }

  let state = defaultState();
  let timerId = null;
  let saving = false;

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      state = Object.assign(defaultState(), saved);
      if (!state.mcqOrder || Object.keys(state.mcqOrder).length < MCQ.length) {
        const order = {};
        MCQ.forEach((q) => { order[q.id] = (saved.mcqOrder && saved.mcqOrder[q.id]) || shuffle(q.options.slice()); });
        state.mcqOrder = order;
      }
      if (!Array.isArray(state.matchEn) || state.matchEn.length !== 8) state.matchEn = shuffle(VOCAB.map((v) => v.id));
      if (!Array.isArray(state.matchRu) || state.matchRu.length !== 8) state.matchRu = shuffle(VOCAB.map((v) => v.id));
      if (!Array.isArray(state.gapBank) || state.gapBank.length !== 8) state.gapBank = shuffle(BANK.slice());
    } catch (e) {}
  }

  function save() {
    if (saving) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function addXp(key, n) {
    if (state.awarded[key]) return;
    state.awarded[key] = true;
    state.xp += n;
  }

  function unlockClue(id) {
    if (!id) return;
    if (!state.clues.includes(id)) state.clues.push(id);
  }

  function fmtTime(s) {
    const m = Math.floor(Math.max(0, s) / 60);
    const r = Math.max(0, s) % 60;
    return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
  }

  function renderChrome() {
    const r = rankOf(state.xp, state.clues.length);
    const chip = document.getElementById("timer-chip");
    chip.textContent = (state.timerOn ? "⏱ " : "▶ ") + fmtTime(state.timerLeft);
    chip.classList.toggle("warn", state.timerOn && state.timerLeft < 300);
    document.getElementById("xp-chip").textContent = "XP " + state.xp;
    document.getElementById("rank-chip").textContent = r.title;
    document.getElementById("clue-chip").textContent = "Улики " + state.clues.length + "/6";
    document.getElementById("stat-timer").textContent = fmtTime(state.timerLeft);
    document.getElementById("stat-rank").textContent = r.title;
    document.getElementById("play-count").textContent = "просмотрено раз: " + state.plays;
    document.getElementById("clue-title-count").textContent = state.clues.length + "/6";
    document.getElementById("reflect-rank").textContent = r.title + " · " + r.en;
    document.getElementById("reflect-xp").textContent = "XP " + state.xp + " · улики " + state.clues.length + "/6";
    const text = document.getElementById("reflect-text");
    if (state.clues.length >= 4) text.textContent = "Архив принимает дело. Минимум 4 улики собраны. Звание: " + r.title + ".";
    else text.textContent = "Собери минимум 4 улики из миссий — архив вынесет звание. Сейчас: " + state.clues.length + "/6.";
  }

  function videoSlotHtml() {
    return '<figure class="video-stage"><video controls playsinline preload="metadata" poster="images/poster.jpg"><source src="video/recording-07.mp4" type="video/mp4"></video></figure><p class="video-note">Видео свидетеля — та же запись, что в брифинге. Пересмотри, если нужно, прямо здесь, над заданием.</p>';
  }

  function bindVideos() {
    document.querySelectorAll("video").forEach((v) => {
      if (v.dataset.bound) return;
      v.dataset.bound = "1";
      v.addEventListener("play", () => {
        document.querySelectorAll("video").forEach((o) => { if (o !== v) o.pause(); });
        if (!v.dataset.counted) {
          v.dataset.counted = "1";
          state.plays += 1;
          if (state.plays <= 3) addXp("play" + state.plays, 5);
          save();
          renderChrome();
        }
      });
    });
  }

  function renderHelp(grid, tabsEl, tab) {
    tabsEl.innerHTML = "";
    TABS.forEach((t) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "tab";
      b.textContent = t.label;
      b.setAttribute("aria-selected", String(t.id === tab));
      b.addEventListener("click", () => {
        state.helpTab = t.id;
        save();
        renderHelp(document.getElementById("help-grid"), document.getElementById("help-tabs"), t.id);
        renderHelp(document.getElementById("help-modal-grid"), document.getElementById("help-modal-tabs"), t.id);
      });
      tabsEl.appendChild(b);
    });
    const items = HELP.filter((h) => tab === "all" || h.tab === tab);
    grid.innerHTML = items.map((h) =>
      '<article class="help-card"><div class="tag">' + h.tag + '</div><h3 style="margin-top:.4rem;font-size:1.2rem">' + h.title + "</h3><p>" + h.body + "</p><div class=\"ex\">" + h.example + (h.exampleRu ? "<br>" + h.exampleRu : "") + "</div>" + (h.tip ? "<p>" + h.tip + "</p>" : "") + "</article>"
    ).join("");
  }

  function renderTF() {
    const box = document.getElementById("tf-list");
    box.innerHTML = TF.map((t, i) => {
      const chosen = state.tf[t.id] || "";
      const checked = state.tfChecked;
      const ok = checked && chosen === t.answer;
      const bad = checked && chosen && chosen !== t.answer;
      return '<article class="tf-item' + (checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + t.id + '">' +
        '<div class="en">' + (i + 1) + ". " + t.text + "</div>" +
        '<div class="ru">' + t.textRu + "</div>" +
        '<div class="choices">' + ["T", "F", "NS"].map((v) =>
          '<button type="button" class="choice" data-val="' + v + '" aria-pressed="' + String(chosen === v) + '">' + (v === "T" ? "True" : v === "F" ? "False" : "Not Stated") + "</button>"
        ).join("") + "</div>" +
        '<div class="explain">' + (checked ? t.explain : "") + "</div></article>";
    }).join("");
    box.querySelectorAll(".tf-item").forEach((el) => {
      el.querySelectorAll(".choice").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.tf[el.dataset.id] = btn.dataset.val;
          state.tfChecked = false;
          save();
          renderTF();
        });
      });
    });
    const n = Object.keys(state.tf).length;
    const score = document.getElementById("tf-score");
    if (state.tfChecked) {
      const ok = TF.filter((t) => state.tf[t.id] === t.answer).length;
      score.textContent = ok + " / 10";
    } else {
      score.textContent = n < 10 ? "Отметь все (" + n + "/10)" : "Все 10 отмечены — можно проверять";
    }
  }

  let matchPick = { side: null, id: null };

  function renderMatch() {
    const box = document.getElementById("match-box");
    const paired = state.matchPairs;
    const usedEn = new Set(Object.keys(paired));
    const usedRu = new Set(Object.values(paired));
    const left = state.matchEn.map((id) => {
      const v = VOCAB.find((x) => x.id === id);
      const on = usedEn.has(id);
      const sel = matchPick.side === "en" && matchPick.id === id;
      return '<button type="button" class="pair' + (on ? " ok" : "") + (sel ? " selected" : "") + '" data-side="en" data-id="' + id + '"' + (on ? " disabled" : "") + ">" + v.en + "</button>";
    }).join("");
    const right = state.matchRu.map((id) => {
      const v = VOCAB.find((x) => x.id === id);
      const on = usedRu.has(id);
      const sel = matchPick.side === "ru" && matchPick.id === id;
      return '<button type="button" class="pair' + (on ? " ok" : "") + (sel ? " selected" : "") + '" data-side="ru" data-id="' + id + '"' + (on ? " disabled" : "") + ">" + v.ru + "</button>";
    }).join("");
    box.innerHTML = '<div class="pair-col">' + left + '</div><div class="pair-col">' + right + "</div>";
    const ok = Object.keys(paired).length;
    document.getElementById("match-score").textContent = ok + " / 8 пар";
    if (ok === 8) {
      unlockClue("c3");
      addXp("match", 16);
    }
    box.querySelectorAll(".pair").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.disabled) return;
        const side = btn.dataset.side;
        const id = btn.dataset.id;
        if (!matchPick.id || matchPick.side === side) {
          matchPick = { side, id };
          renderMatch();
          return;
        }
        const enId = side === "en" ? id : matchPick.id;
        const ruId = side === "ru" ? id : matchPick.id;
        if (enId === ruId) {
          state.matchPairs[enId] = ruId;
          matchPick = { side: null, id: null };
          save();
          renderMatch();
          renderClues();
          renderChrome();
        } else {
          btn.classList.add("flash-bad");
          matchPick = { side: null, id: null };
          setTimeout(() => renderMatch(), 280);
        }
      });
    });
  }

  function usedBankWords() {
    const used = new Set();
    GAPS.forEach((g) => {
      const val = (state.gaps[g.id] || "").trim();
      if (val) used.add(val);
    });
    return used;
  }

  function renderGaps() {
    const used = usedBankWords();
    const bank = document.getElementById("gap-bank");
    bank.innerHTML = state.gapBank.map((w) => {
      const u = used.has(w);
      const picked = state._bankPick === w;
      return '<button type="button" class="' + (u ? "used" : "") + (picked ? " picked" : "") + '" data-word="' + w.replace(/"/g, "&quot;") + '"' + (u ? " disabled" : "") + ">" + w + "</button>";
    }).join("");
    bank.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        if (b.disabled) return;
        state._bankPick = b.dataset.word;
        const active = state.activeGap || "g1";
        if (active) {
          state.gaps[active] = b.dataset.word;
          const idx = GAPS.findIndex((g) => g.id === active);
          state.activeGap = (GAPS[idx + 1] || GAPS[0]).id;
          state._bankPick = null;
          state.gapChecked = false;
          save();
        }
        renderGaps();
      });
    });
    const list = document.getElementById("gap-list");
    list.innerHTML = GAPS.map((g, i) => {
      const val = state.gaps[g.id] || "";
      const checked = state.gapChecked;
      const ok = checked && norm(val) === norm(g.answer);
      const bad = checked && val && !ok;
      return '<div class="gap-item' + (checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '">' +
        '<div class="gap-line">' + (i + 1) + ". " + g.before + " " +
        '<span class="gap-slot" tabindex="0" data-id="' + g.id + '" role="button">' + (val || "______") + "</span> " +
        g.after + ' <span class="hint">(' + g.hint + ")</span></div></div>";
    }).join("");
    list.querySelectorAll(".gap-slot").forEach((slot) => {
      slot.addEventListener("click", () => {
        const id = slot.dataset.id;
        if (state._bankPick) {
          state.gaps[id] = state._bankPick;
          state._bankPick = null;
        } else if (state.gaps[id]) {
          delete state.gaps[id];
        }
        state.activeGap = id;
        state.gapChecked = false;
        save();
        renderGaps();
      });
    });
    const n = Object.keys(state.gaps).filter((k) => state.gaps[k]).length;
    const score = document.getElementById("gap-score");
    if (state.gapChecked) {
      const ok = GAPS.filter((g) => norm(state.gaps[g.id]) === norm(g.answer)).length;
      score.textContent = ok + " / 8";
    } else score.textContent = n + " / 8 заполнены";
  }

  function renderMCQ() {
    const box = document.getElementById("mcq-list");
    box.innerHTML = MCQ.map((q, i) => {
      const order = state.mcqOrder[q.id] || q.options;
      const chosen = state.mcq[q.id] || "";
      const checked = state.mcqChecked;
      const ok = checked && chosen === q.correct;
      const bad = checked && chosen && !ok;
      return '<article class="mcq-item' + (checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + q.id + '">' +
        '<div class="en">' + (i + 1) + ". «" + q.quote + "»</div>" +
        '<div class="ru">' + q.quoteRu + "</div>" +
        '<div class="choices" style="flex-direction:column">' + order.map((opt, oi) => {
          const ru = q.optionsRu[q.options.indexOf(opt)] || "";
          return '<button type="button" class="choice" data-val="' + opt.replace(/"/g, "&quot;") + '" aria-pressed="' + String(chosen === opt) + '">' + opt + '<span class="ru" style="display:block;font-weight:400">' + ru + "</span></button>";
        }).join("") + "</div>" +
        '<div class="explain">' + (checked ? q.explain : "") + "</div></article>";
    }).join("");
    box.querySelectorAll(".mcq-item").forEach((el) => {
      el.querySelectorAll(".choice").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.mcq[el.dataset.id] = btn.dataset.val;
          state.mcqChecked = false;
          save();
          renderMCQ();
        });
      });
    });
    const n = Object.keys(state.mcq).length;
    const score = document.getElementById("mcq-score");
    if (state.mcqChecked) {
      const ok = MCQ.filter((q) => state.mcq[q.id] === q.correct).length;
      score.textContent = ok + " / 6";
    } else score.textContent = n + " / 6 выбраны";
  }

  function renderClues() {
    const grid = document.getElementById("clue-grid");
    grid.innerHTML = CLUES.map((c) => {
      const open = state.clues.includes(c.id);
      return '<article class="clue' + (open ? " open" : "") + '">' +
        (open ? "" : '<div class="clue-lock">🔒</div>') +
        '<div class="clue-body' + (open ? "" : " locked") + '"><div style="display:flex;justify-content:space-between"><span class="clue-code">' + c.code + '</span><span class="hint">' + c.mission + "</span></div>" +
        "<h3 style=\"margin-top:.45rem;font-size:1.25rem\">" + c.title + "</h3><p>" + c.text + "</p><div class=\"quote\">" + c.detail + "</div></div></article>";
    }).join("");
  }

  function renderTranscript() {
    const ol = document.getElementById("transcript-list");
    ol.innerHTML = LINES_EN.map((line, i) =>
      "<li><span class=\"n\">" + String(i + 1).padStart(2, "0") + "</span><div><em>" + line + "</em><div class=\"tr\">" + LINES_RU[i] + "</div></div></li>"
    ).join("");
    const open = state.transcriptOpen;
    ol.classList.toggle("blurred", !open);
    ol.setAttribute("aria-hidden", String(!open));
    document.getElementById("safe-lock").style.display = open ? "none" : "flex";
    document.getElementById("safe-tools").hidden = !open;
    document.getElementById("safe-box").classList.toggle("open", open);
    document.getElementById("safe-box").classList.toggle("show-ru", state.showRu);
    document.getElementById("safe-ru").textContent = state.showRu ? "Скрыть перевод" : "Показать перевод";
  }

  function renderSide() {
    document.getElementById("side-report").setAttribute("aria-pressed", String(state.side === "report"));
    document.getElementById("side-sketch").setAttribute("aria-pressed", String(state.side === "sketchbook"));
    const note = document.getElementById("side-note");
    if (!state.side) { note.hidden = true; return; }
    note.hidden = false;
    note.textContent = state.side === "report"
      ? "Смело. Архив помечает тебя как «адвоката академии». В финале тебе придётся особенно постараться: протокол всё равно пишется по записи, а не по отчёту."
      : "Архив одобряет. Ты выбрал(а) сторону свидетеля. В финале опирайся на цитаты: faces, missing, too easily, not yet — это твои доказательства.";
  }

  function renderProto() {
    const box = document.getElementById("proto-list");
    box.innerHTML = PROTO.map((p, i) => {
      const val = state.proto[p.id] || "";
      const checked = state.protoChecked;
      const ok = checked && hasKeyword(val, p.keywords) && words(val).length >= 5;
      const bad = checked && val && !ok;
      return '<article class="proto-item' + (checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '">' +
        '<div class="en">' + (i + 1) + ". " + p.q + "</div>" +
        '<div class="ru">' + p.qRu + "</div>" +
        '<p class="hint">' + p.hint + "</p>" +
        '<textarea rows="3" data-id="' + p.id + '" placeholder="Write 1–2 sentences in English…">' + val.replace(/</g, "&lt;") + "</textarea>" +
        (checked ? '<div class="explain">Образец: ' + p.model + "</div>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll("textarea").forEach((ta) => {
      ta.addEventListener("input", () => {
        state.proto[ta.dataset.id] = ta.value;
        state.protoChecked = false;
        save();
      });
    });
    const score = document.getElementById("proto-score");
    if (state.protoChecked) {
      const ok = PROTO.filter((p) => hasKeyword(state.proto[p.id], p.keywords) && words(state.proto[p.id]).length >= 5).length;
      score.textContent = ok + " / 4";
    } else score.textContent = "";
  }

  function renderHWA() {
    const box = document.getElementById("hw-a");
    box.innerHTML = HW_A.map((e, i) => {
      const val = state.hwA[e.id] || "";
      const checked = state.hwAChecked;
      const ok = checked && norm(val) === norm(e.correct);
      const bad = checked && val && !ok;
      return '<div class="hw-item' + (checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '">' +
        '<div class="en">' + (i + 1) + ". " + e.wrong + "</div>" +
        '<input type="text" data-id="' + e.id + '" value="' + val.replace(/"/g, "&quot;") + '" placeholder="Type the corrected sentence">' +
        (checked ? '<div class="explain">Правило: ' + e.rule + (ok ? "" : " Попробуй ещё раз.") + "</div>" : "") +
        "</div>";
    }).join("");
    box.querySelectorAll("input").forEach((inp) => {
      inp.addEventListener("input", () => {
        state.hwA[inp.dataset.id] = inp.value;
        state.hwAChecked = false;
        save();
      });
    });
    const score = document.getElementById("hwa-score");
    if (state.hwAChecked) {
      const ok = HW_A.filter((e) => norm(state.hwA[e.id]) === norm(e.correct)).length;
      score.textContent = ok + " / 6";
    } else score.textContent = "";
  }

  function renderHWB() {
    const box = document.getElementById("hw-b");
    box.innerHTML = HW_B.map((t, i) => {
      const val = state.hwB[t.id] || "";
      const checked = state.hwBChecked;
      const ok = checked && norm(val) === norm(t.model);
      const bad = checked && val && !ok;
      return '<div class="hw-item' + (checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '">' +
        '<div class="en">' + (i + 1) + ". " + t.task + "</div>" +
        '<div class="ru">' + t.taskRu + " · Start: " + t.start + "</div>" +
        '<input type="text" data-id="' + t.id + '" value="' + val.replace(/"/g, "&quot;") + '" placeholder="' + t.start + '">' +
        (checked && !ok ? '<div class="explain">Проверь форму и смысл. Ключ — у учителя, если не получится со второго раза.</div>' : "") +
        (checked && ok ? '<div class="explain">Верно.</div>' : "") +
        "</div>";
    }).join("");
    box.querySelectorAll("input").forEach((inp) => {
      inp.addEventListener("input", () => {
        state.hwB[inp.dataset.id] = inp.value;
        state.hwBChecked = false;
        save();
      });
    });
    const score = document.getElementById("hwb-score");
    if (state.hwBChecked) {
      const ok = HW_B.filter((t) => norm(state.hwB[t.id]) === norm(t.model)).length;
      score.textContent = ok + " / 4";
    } else score.textContent = "";
  }

  function renderHWCD() {
    const c = document.getElementById("hw-c");
    const d = document.getElementById("hw-d");
    if (c.value !== state.hwC) c.value = state.hwC;
    if (d.value !== state.hwD) d.value = state.hwD;
    const cw = words(state.hwC).length;
    const dw = words(state.hwD).length;
    const cEl = document.getElementById("hwc-wc");
    const dEl = document.getElementById("hwd-wc");
    cEl.textContent = cw + " / 40+ words";
    dEl.textContent = dw + " / 20+ words";
    cEl.classList.toggle("word-count-ok", cw >= 40);
    dEl.classList.toggle("word-count-ok", dw >= 20);
    document.getElementById("hw-stamp").hidden = !state.hwSealed;
    document.getElementById("hw-seal").disabled = !(cw >= 40 && dw >= 20);
  }

  function startTimer() {
    if (state.timerOn) return;
    state.timerOn = true;
    save();
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      if (!state.timerOn) return;
      if (state.timerLeft > 0) state.timerLeft -= 1;
      if (state.timerLeft <= 0) state.timerOn = false;
      save();
      renderChrome();
    }, 1000);
    renderChrome();
  }

  function checkTF() {
    if (Object.keys(state.tf).length < 10) {
      document.getElementById("tf-score").textContent = "Отметь все 10 утверждений.";
      return;
    }
    state.tfChecked = true;
    let n = 0;
    TF.forEach((t) => {
      if (state.tf[t.id] === t.answer) {
        n++;
        if (t.clue) unlockClue(t.clue);
      }
    });
    addXp("tf", n * 4);
    if (n >= 6) { unlockClue("c1"); unlockClue("c2"); }
    save();
    renderTF();
    renderClues();
    renderChrome();
  }

  function checkGaps() {
    state.gapChecked = true;
    let n = 0;
    GAPS.forEach((g) => { if (norm(state.gaps[g.id]) === norm(g.answer)) n++; });
    addXp("gaps", n * 3);
    if (n >= 6) unlockClue("c4");
    save();
    renderGaps();
    renderClues();
    renderChrome();
  }

  function checkMCQ() {
    state.mcqChecked = true;
    let n = 0;
    MCQ.forEach((q) => {
      if (state.mcq[q.id] === q.correct) {
        n++;
        unlockClue(q.clueId);
      }
    });
    addXp("mcq", n * 8);
    save();
    renderMCQ();
    renderClues();
    renderChrome();
  }

  function checkProto() {
    state.protoChecked = true;
    let n = 0;
    PROTO.forEach((p) => {
      const val = state.proto[p.id] || "";
      if (hasKeyword(val, p.keywords) && words(val).length >= 5) {
        n++;
        (p.clues || []).forEach(unlockClue);
      }
    });
    addXp("proto", n * 10);
    save();
    renderProto();
    renderClues();
    renderChrome();
  }

  function checkHWA() {
    state.hwAChecked = true;
    const n = HW_A.filter((e) => norm(state.hwA[e.id]) === norm(e.correct)).length;
    addXp("hwa", n * 4);
    save();
    renderHWA();
    renderChrome();
  }

  function checkHWB() {
    state.hwBChecked = true;
    const n = HW_B.filter((t) => norm(state.hwB[t.id]) === norm(t.model)).length;
    addXp("hwb", n * 5);
    save();
    renderHWB();
    renderChrome();
  }

  function sealHW() {
    if (words(state.hwC).length < 40 || words(state.hwD).length < 20) return;
    state.hwSealed = true;
    addXp("hwseal", 60);
    save();
    renderHWCD();
    renderChrome();
  }

  function resetLesson() {
    if (!confirm("Начать заново? Все ответы на этом устройстве сотрутся.")) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    state = defaultState();
    matchPick = { side: null, id: null };
    if (timerId) { clearInterval(timerId); timerId = null; }
    save();
    renderAll();
  }

  function openHelp(open) {
    const m = document.getElementById("help-modal");
    m.classList.toggle("open", open);
    m.setAttribute("aria-hidden", String(!open));
    if (open) document.getElementById("help-close").focus();
  }

  function renderAll() {
    document.querySelectorAll("[data-video-slot]").forEach((el) => { el.innerHTML = videoSlotHtml(); });
    renderChrome();
    renderHelp(document.getElementById("help-grid"), document.getElementById("help-tabs"), state.helpTab);
    renderHelp(document.getElementById("help-modal-grid"), document.getElementById("help-modal-tabs"), state.helpTab);
    renderTF();
    renderMatch();
    renderGaps();
    renderMCQ();
    renderClues();
    renderTranscript();
    renderSide();
    renderProto();
    renderHWA();
    renderHWB();
    renderHWCD();
    bindVideos();
  }

  function init() {
    load();
    renderAll();
    if (state.timerOn) {
      state.timerOn = false;
      startTimer();
    }

    document.getElementById("timer-chip").addEventListener("click", () => {
      if (state.timerOn) {
        state.timerOn = false;
        if (timerId) { clearInterval(timerId); timerId = null; }
        save();
        renderChrome();
      } else startTimer();
    });
    document.getElementById("reset-btn").addEventListener("click", resetLesson);
    document.getElementById("help-btn").addEventListener("click", () => openHelp(true));
    document.getElementById("help-btn-hero").addEventListener("click", () => openHelp(true));
    document.getElementById("help-close").addEventListener("click", () => openHelp(false));
    document.getElementById("help-modal").addEventListener("click", (e) => {
      if (e.target.id === "help-modal") openHelp(false);
    });
    document.getElementById("tf-check").addEventListener("click", checkTF);
    document.getElementById("gap-check").addEventListener("click", checkGaps);
    document.getElementById("mcq-check").addEventListener("click", checkMCQ);
    document.getElementById("proto-check").addEventListener("click", checkProto);
    document.getElementById("hwa-check").addEventListener("click", checkHWA);
    document.getElementById("hwb-check").addEventListener("click", checkHWB);
    document.getElementById("hw-seal").addEventListener("click", sealHW);
    document.getElementById("safe-open").addEventListener("click", () => {
      state.transcriptOpen = true;
      addXp("safe", 5);
      save();
      renderTranscript();
      renderChrome();
    });
    document.getElementById("safe-hide").addEventListener("click", () => {
      state.transcriptOpen = false;
      save();
      renderTranscript();
    });
    document.getElementById("safe-ru").addEventListener("click", () => {
      state.showRu = !state.showRu;
      save();
      renderTranscript();
    });
    document.getElementById("side-report").addEventListener("click", () => {
      if (!state.side) addXp("side", 5);
      state.side = "report";
      save();
      renderSide();
      renderChrome();
    });
    document.getElementById("side-sketch").addEventListener("click", () => {
      if (!state.side) addXp("side", 10);
      state.side = "sketchbook";
      save();
      renderSide();
      renderChrome();
    });
    document.getElementById("hw-c").addEventListener("input", () => {
      state.hwC = document.getElementById("hw-c").value;
      state.hwSealed = false;
      save();
      renderHWCD();
    });
    document.getElementById("hw-d").addEventListener("input", () => {
      state.hwD = document.getElementById("hw-d").value;
      state.hwSealed = false;
      save();
      renderHWCD();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
