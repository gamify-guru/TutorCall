(function () {
  "use strict";
  const STORAGE_KEY = "tutorcall-shadow-school-forgotten-locker-v1";

  const VOCAB = [
    { en: "locker", ru: "школьный шкафчик", tr: "[ˈlɒkə]", example: "Behind the abandoned locker, we found a hidden key." },
    { en: "vanish", ru: "исчезать", tr: "[ˈvænɪʃ]", example: "She had vanished before anyone could ask her name." },
    { en: "curse", ru: "проклятие", tr: "[kɜːs]", example: "The curse had affected every student in the century." },
    { en: "secret", ru: "секрет", tr: "[ˈsiːkrɪt]", example: "They had kept the secret for fifty years." },
    { en: "diary", ru: "дневник", tr: "[ˈdaɪəri]", example: "The diary had been hidden inside the locker." },
    { en: "century", ru: "век, столетие", tr: "[ˈsentʃəri]", example: "The school had stood for over a century." },
    { en: "key", ru: "ключ", tr: "[kiː]", example: "She had locked the key inside before she disappeared." },
    { en: "warning", ru: "предупреждение", tr: "[ˈwɔːnɪŋ]", example: "The warning had been written in old ink." },
    { en: "trace", ru: "след", tr: "[treɪs]", example: "We found a trace of chalk behind the abandoned locker." },
    { en: "abandoned", ru: "заброшенный", tr: "[əˈbændənd]", example: "The abandoned wing had not been opened since 1974." }
  ];

  const RULES = [
    { title: "Past Perfect — Формула", formula: "had + V₃ (Past Participle)", example: "She had locked the door before she vanished.", desc: "Показывает действие, завершённое до другого момента в прошлом" },
    { title: "Past Perfect vs Past Simple", formula: "Past Perfect ← earlier → Past Simple ← later", example: "I had never seen the locker before I found it.", desc: "Past Perfect = раньше, Past Simple = позже, оба в прошлом" },
    { title: "Ключевые слова", formula: "before / after / by the time / already / never / ever / when", example: "By the time we arrived, the diary had already disappeared.", desc: "Маркеры подсказывают, что нужно Past Perfect" },
    { title: "Отрицательная форма", formula: "had + not + V₃", example: "We had not expected to find anything.", desc: "hadn't + причастие для отрицания" },
    { title: "Вопросительная форма", formula: "Had + Subject + V₃?", example: "Had she locked the key before she left?", desc: "had в начале предложения для вопроса" }
  ];

  const SEALS = {
    1: { title: "Хронология восстановлена", text: "Теперь ясно: Лилия сначала нашла проклятый дневник, потом спрятала ключ в шкафчике и только потом исчезла. Ты восстановила хронологию, которую школа пыталась стереть на протяжении десятилетий. В стене появилась надпись: «Ключ всё ещё здесь»." },
    2: { title: "Страницы дневника сшиты", text: "Дневник Лилии рассказывает о том, что произошло за день до её исчезновения. Она уже знала о проклятии и уже приготовила план. Чернила высохли, но послание осталось." },
    3: { title: "Улики собраны", text: "На доске улик видна картина: шкафчик был открыт до полуночи, ключ спрятан до закрытия дверей, предупреждение написано до исчезновения. Каждое ‘had done’ — шаг к разгадке." },
    4: { title: "Записки призрака исправлены", text: "Призрак благодарит: «Теперь мой рассказ правдив. Я уже исчезла до рассвета, я уже знала о проклятии, я уже спрятала ключ...» Слова обрели правильную форму времени." },
    5: { title: "Хроника пятидесяти лет", text: "История интерната записана: основание, первое проклятие, тайный дневник, исчезновение Лилии, запечатанный шкафчик. Fifty years of secrets — and you uncovered them all." }
  };

  const T1 = [
    { id: "a1", before: "Lily _____ (discover) the cursed diary", after: "before she _____ (hide) the key in the locker", beforeOpts: ["had discovered", "discovered", "has discovered", "was discovering"], afterOpts: ["hid", "had hidden", "has hidden", "was hiding"], beforeAns: "had discovered", afterAns: "hid" },
    { id: "a2", before: "She _____ (write) a warning on the last page", after: "after she _____ (realize) the truth about the curse", beforeOpts: ["had written", "wrote", "has written", "wrote had"], afterOpts: ["had realized", "realized", "has realized", "realizes"], beforeAns: "had written", afterAns: "had realized" },
    { id: "a3", before: "The librarian _____ (lock) the abandoned wing", after: "when she _____ (notice) that Lily was gone", beforeOpts: ["locked", "had locked", "has locked", "was locking"], afterOpts: ["had noticed", "noticed", "has noticed", "noticing"], beforeAns: "locked", afterAns: "noticed" },
    { id: "a4", before: "Before anyone _____ (search) the corridor", after: "the ghost _____ (already / vanish) without a trace", beforeOpts: ["searched", "had searched", "has searched", "was searching"], afterOpts: ["had already vanished", "already vanished", "has already vanished", "already vanishing"], beforeAns: "searched", afterAns: "had already vanished" },
    { id: "a5", before: "The key _____ (be) hidden for fifty years", after: "until we _____ (open) the locker", beforeOpts: ["had been", "was", "has been", "is"], afterOpts: ["opened", "had opened", "have opened", "were opening"], beforeAns: "had been", afterAns: "opened" },
    { id: "a6", before: "Lily _____ (prepare) everything before midnight", after: "and she _____ (already / leave) by the time dawn came", beforeOpts: ["had prepared", "prepared", "has prepared", "was preparing"], afterOpts: ["had already left", "already left", "has already left", "was already leaving"], beforeAns: "had prepared", afterAns: "had already left" },
    { id: "a7", before: "The curse _____ (begin) long before Lily arrived", after: "and it _____ (affect) every student since the 19th century", beforeOpts: ["had begun", "began", "has begun", "begins"], afterOpts: ["had affected", "affected", "has affected", "affecting"], beforeAns: "had begun", afterAns: "had affected" },
    { id: "a8", before: "Nobody _____ (see) the warning until we _____ (find) the diary", after: "", oneLine: true, beforeOpts: ["had seen", "saw", "has seen", "seeing"], afterOpts: ["found", "had found", "have found", "were finding"], beforeAns: "had seen", afterAns: "found" }
  ];

  const T2 = [
    { id: "b1", parts: ["I ", " (already / read) the old warning before I ", " (decide) to open the locker."], opts: [["had already read", "already read", "have already read", "was already reading"], ["decided", "had decided", "have decided", "was deciding"]], ans: ["had already read", "decided"] },
    { id: "b2", parts: ["By the time the moon ", " (rise), I ", " (hide) the key behind the diary."], opts: [["rose", "had risen", "has risen", "was rising"], ["had hidden", "hid", "have hidden", "was hiding"]], ans: ["rose", "had hidden"] },
    { id: "b3", parts: ["Before the curse ", " (take) effect, Lily ", " (already / prepare) a secret passage."], opts: [["took", "had taken", "has taken", "was taking"], ["had already prepared", "already prepared", "has already prepared", "already preparing"]], ans: ["took", "had already prepared"] },
    { id: "b4", parts: ["The ghost ", " (vanish) after it ", " (deliver) its final warning."], opts: [["vanished", "had vanished", "has vanished", "was vanishing"], ["had delivered", "delivered", "has delivered", "was delivering"]], ans: ["vanished", "had delivered"] },
    { id: "b5", parts: ["No one ", " (ever / see) the abandoned wing before we ", " (find) the old key."], opts: [["had ever seen", "ever saw", "has ever seen", "ever seen"], ["found", "had found", "have found", "were finding"]], ans: ["had ever seen", "found"] },
    { id: "b6", parts: ["She ", " (write) a secret note before the door ", " (lock) forever."], opts: [["had written", "wrote", "has written", "was writing"], ["locked", "had locked", "was locked", "has locked"]], ans: ["had written", "locked"] },
    { id: "b7", parts: ["The century-old curse ", " (begin) before anyone ", " (realize) its power."], opts: [["had begun", "began", "has begun", "begins"], ["realized", "had realized", "has realized", "realizing"]], ans: ["had begun", "realized"] }
  ];

  const T3 = [
    { id: "c1", words: ["Lily", "had", "hidden", "the", "key", "before", "she", "vanished"], hint: "Лилия спрятала ключ до того, как исчезла." },
    { id: "c2", words: ["We", "entered", "the", "corridor", "before", "the", "moon", "had", "risen"], hint: "Мы вошли в коридор до того, как луна взошла." },
    { id: "c3", words: ["She", "had", "warned", "everyone", "about", "the", "curse", "before", "it", "began"], hint: "Она предупредила всех о проклятии до того, как оно началось." },
    { id: "c4", words: ["The", "ghost", "had", "already", "found", "the", "diary", "when", "we", "arrived"], hint: "Призрак уже нашёл дневник, когда мы пришли." },
    { id: "c5", words: ["They", "had", "locked", "the", "wing", "before", "they", "found", "any", "evidence"], hint: "Они заперли крыло до того, как нашли улики." },
    { id: "c6", words: ["The", "school", "had", "stood", "for", "a", "century", "before", "it", "happened"], hint: "Школа простояла век до того, как случилось." }
  ];

  const T4 = [
    { id: "d1", wrong: "I already left the room before I had found the key.", options: ["I had already left the room before I found the key.", "I already left the room before I had found the key.", "I have already left the room before I found the key."], ans: "I had already left the room before I found the key.", explain: "had + V₃ для раннего действия, Past Simple для позднего; already стоит после had." },
    { id: "d2", wrong: "The ghost was vanished before dawn had arrived.", options: ["The ghost had vanished before dawn arrived.", "The ghost was vanished before dawn had arrived.", "The ghost vanished before dawn has arrived."], ans: "The ghost had vanished before dawn arrived.", explain: "vanish — исчезнуть, не пассив; had vanished раньше, arrived позже." },
    { id: "d3", wrong: "She hid the key after she has hidden the diary.", options: ["She hid the key after she had hidden the diary.", "She hid the key after she has hidden the diary.", "She had hid the key after she hidden the diary."], ans: "She hid the key after she had hidden the diary.", explain: "hidden — причастие; had hidden (diary) раньше, hid (key) позже." },
    { id: "d4", wrong: "By the time we arrive, the locker already locked.", options: ["By the time we arrived, the locker had already been locked.", "By the time we arrive, the locker already locked.", "By the time we arrived, the locker has already locked."], ans: "By the time we arrived, the locker had already been locked.", explain: "Пассив: had already been locked; arrived — Past Simple для фиксированного момента." },
    { id: "d5", wrong: "The warning had written in the diary before the curse begins.", options: ["The warning had been written in the diary before the curse began.", "The warning had written in the diary before the curse begins.", "The warning has been written in the diary before the curse began."], ans: "The warning had been written in the diary before the curse began.", explain: "Пассив: had been written; began — Past Simple, не Present Simple." },
    { id: "d6", wrong: "No one never seen the abandoned wing until we opened it.", options: ["No one had ever seen the abandoned wing until we opened it.", "No one never seen the abandoned wing until we opened it.", "No one has never seen the abandoned wing until we opened it."], ans: "No one had ever seen the abandoned wing until we opened it.", explain: "Нужно had ever seen, не never seen; opened — Past Simple." },
    { id: "d7", wrong: "Lily was already gone before we had searched the corridor.", options: ["Lily had already gone before we searched the corridor.", "Lily was already gone before we had searched the corridor.", "Lily has already gone before we searched the corridor."], ans: "Lily had already gone before we searched the corridor.", explain: "had already gone (раньше); searched (позже, Past Simple)." },
    { id: "d8", wrong: "The curse had begun before Lily arrived to the school and she had already aware.", options: ["The curse had begun before Lily arrived at the school, and she had already been aware.", "The curse had begun before Lily arrived to the school and she had already aware.", "The curse begun before Lily arrived to the school and she had already been aware."], ans: "The curse had begun before Lily arrived at the school, and she had already been aware.", explain: "arrived at (не to); had already been aware." }
  ];

  const T5 = [
    { id: "e1", text: "The Shadow School _____ (open) its doors for the first time in 1876.", opts: ["opened", "had opened", "has opened", "was opening"], ans: ["opened"] },
    { id: "e2", text: "Before the first students _____ (arrive), the founders _____ (already / establish) the library.", parts: ["Before the first students ", " (arrive), the founders ", " (already / establish) the library."], opts: [["arrived", "had arrived", "have arrived", "were arriving"], ["had already established", "already established", "has already established", "already establishing"]], ans: ["arrived", "had already established"] },
    { id: "e3", text: "The curse _____ (begin) after someone _____ (steal) the forbidden book.", parts: ["The curse ", " (begin) after someone ", " (steal) the forbidden book."], opts: [["began", "had begun", "has begun", "begins"], ["had stolen", "stole", "has stolen", "was stealing"]], ans: ["began", "had stolen"] },
    { id: "e4", text: "Lily _____ (enroll) at the school fifty years ago. She _____ (already / hear) rumors about the ghost.", parts: ["Lily ", " (enroll) at the school fifty years ago. She ", " (already / hear) rumors about the ghost."], opts: [["enrolled", "had enrolled", "has enrolled", "was enrolling"], ["had already heard", "already heard", "has already heard", "already hearing"]], ans: ["enrolled", "had already heard"] },
    { id: "e5", text: "She _____ (find) the cursed diary in the abandoned wing before anyone _____ (stop) her.", parts: ["She ", " (find) the cursed diary in the abandoned wing before anyone ", " (stop) her."], opts: [["had found", "found", "has found", "was finding"], ["stopped", "had stopped", "has stopped", "were stopping"]], ans: ["had found", "stopped"] },
    { id: "e6", text: "The librarian _____ (lock) the wing after Lily _____ (vanish) without a trace.", parts: ["The librarian ", " (lock) the wing after Lily ", " (vanish) without a trace."], opts: [["locked", "had locked", "has locked", "was locking"], ["had vanished", "vanished", "has vanished", "was vanishing"]], ans: ["locked", "had vanished"] },
    { id: "e7", text: "No one _____ (enter) the wing for fifty years until we _____ (discover) the locker.", parts: ["No one ", " (enter) the wing for fifty years until we ", " (discover) the locker."], opts: [["had entered", "entered", "has entered", "was entering"], ["discovered", "had discovered", "have discovered", "were discovering"]], ans: ["had entered", "discovered"] },
    { id: "e8", text: "We _____ (open) the locker and _____ (find) the hidden diary.", opts: ["opened … found", "had opened … had found", "has opened … has found", "was opening … was finding"], ans: ["opened … found"] }
  ];

  const HARD = [
    "Грамматика (Past Perfect)",
    "Запоминание слов",
    "Понимание на слух",
    "Говорение / произношение",
    "Страх ошибки",
    "Мотивация и регулярность",
    "Письмо на английском",
    "Разница времен"
  ];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) { return String(s || "").replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim(); }
  function same(a, b) { return norm(a).toLowerCase() === norm(b).toLowerCase(); }
  function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }

  function speak(text) {
    if (!("speechSynthesis" in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.85;
      u.pitch = 1;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  function defaultOrders() {
    const t1 = {};
    T1.forEach((it) => { t1[it.id] = { before: shuffle(it.beforeOpts), after: shuffle(it.afterOpts) }; });
    const t2 = {};
    T2.forEach((it) => { t2[it.id] = it.opts.map((o) => shuffle(o)); });
    const t3 = {};
    T3.forEach((it) => { t3[it.id] = shuffle(it.words); });
    const t4 = {};
    T4.forEach((it) => { t4[it.id] = shuffle(it.options); });
    const t5 = {};
    T5.forEach((it) => {
      t5[it.id] = it.opts[0] && Array.isArray(it.opts[0]) ? it.opts.map((o) => shuffle(o)) : shuffle(it.opts);
    });
    return { t1, t2, t3, t4, t5 };
  }

  function emptyAnswers() {
    const t1 = {}, t2 = {}, t3 = {}, t4 = {}, t5 = {};
    T1.forEach((it) => { t1[it.id] = { before: "", after: "" }; });
    T2.forEach((it) => { t2[it.id] = ["", ""]; });
    T3.forEach((it) => { t3[it.id] = []; });
    T4.forEach((it) => { t4[it.id] = ""; });
    T5.forEach((it) => { t5[it.id] = it.ans.length === 1 ? "" : ["", ""]; });
    return { t1, t2, t3, t4, t5 };
  }

  function defaultState() {
    return {
      vocabOpen: null,
      orders: defaultOrders(),
      answers: emptyAnswers(),
      checked: { t1: false, t2: false, t3: false, t4: false, t5: false },
      finale: { hard: [], text: "", sent: false }
    };
  }

  let state = defaultState();

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      const base = defaultState();
      state = Object.assign(base, saved);
      state.orders = Object.assign(base.orders, saved.orders || {});
      ["t1", "t2", "t3", "t4", "t5"].forEach((k) => {
        state.orders[k] = Object.assign(base.orders[k], (saved.orders || {})[k] || {});
      });
      state.answers = Object.assign(base.answers, saved.answers || {});
      ["t1", "t2", "t3", "t4", "t5"].forEach((k) => {
        state.answers[k] = Object.assign(base.answers[k], (saved.answers || {})[k] || {});
      });
      state.checked = Object.assign(base.checked, saved.checked || {});
      state.finale = Object.assign(base.finale, saved.finale || {});
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function t1Ok(it) {
    const a = state.answers.t1[it.id] || {};
    return same(a.before, it.beforeAns) && same(a.after, it.afterAns);
  }
  function t2Ok(it) {
    const a = state.answers.t2[it.id] || ["", ""];
    return same(a[0], it.ans[0]) && same(a[1], it.ans[1]);
  }
  function t3Ok(it) {
    const a = state.answers.t3[it.id] || [];
    return a.length === it.words.length && a.every((w, i) => same(w, it.words[i]));
  }
  function t4Ok(it) { return same(state.answers.t4[it.id], it.ans); }
  function t5Ok(it) {
    const a = state.answers.t5[it.id];
    if (it.ans.length === 1) return same(a, it.ans[0]);
    return same((a || [])[0], it.ans[0]) && same((a || [])[1], it.ans[1]);
  }
  function count(list, okfn, key) {
    if (!state.checked[key]) return 0;
    return list.filter(okfn).length;
  }
  function passed(list, okfn, key) { return state.checked[key] && count(list, okfn, key) === list.length; }

  function optsHtml(options, value, attrs) {
    return '<div class="opts">' + options.map((op) =>
      '<button type="button" class="opt" ' + attrs + ' data-val="' + esc(op) + '" aria-pressed="' + String(same(value, op)) + '">' + esc(op) + "</button>"
    ).join("") + "</div>";
  }

  function renderVocab() {
    const box = document.getElementById("vocab-list");
    box.innerHTML = VOCAB.map((w, i) => {
      const open = state.vocabOpen === i;
      return '<button type="button" class="vocab-btn" data-i="' + i + '" aria-expanded="' + String(open) + '">' +
        '<div class="vocab-head"><span><span class="num">' + String(i + 1).padStart(2, "0") + "</span><span class=\"vocab-en\">" + esc(w.en) + "</span></span>" +
        (open ? '<span class="tr">' + esc(w.tr) + "</span>" : "<span>▾</span>") + "</div>" +
        (open ? '<p class="ru">' + esc(w.ru) + '</p><p class="ex">' + esc(w.example) + "</p>" : "") +
        "</button>";
    }).join("");
    box.querySelectorAll(".vocab-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const i = +b.dataset.i;
        const open = state.vocabOpen === i;
        state.vocabOpen = open ? null : i;
        if (!open) speak(VOCAB[i].en + ". " + VOCAB[i].example);
        save(); renderVocab();
      });
    });
  }

  function renderRules() {
    document.getElementById("rules-list").innerHTML = RULES.map((r) =>
      '<article class="rule"><h3>' + esc(r.title) + '</h3><p class="formula">' + esc(r.formula) + '</p><p class="example">' + esc(r.example) + '</p><p class="sub">' + esc(r.desc) + "</p></article>"
    ).join("");
  }

  function renderT1() {
    const box = document.getElementById("t1-list");
    box.innerHTML = T1.map((it, i) => {
      const a = state.answers.t1[it.id] || { before: "", after: "" };
      const ord = state.orders.t1[it.id];
      const checked = state.checked.t1;
      const ok = checked && t1Ok(it);
      const bad = checked && !ok;
      const line = it.oneLine
        ? '<p class="en">Nobody ' + (a.before ? "<strong>" + esc(a.before) + "</strong>" : "_____") + " the warning until we " + (a.after ? "<strong>" + esc(a.after) + "</strong>" : "_____") + " the diary.</p>"
        : '<p class="en">' + esc(it.before.replace("_____", a.before ? a.before : "_____")) + (it.after ? " " + esc(it.after.replace("_____", a.after ? a.after : "_____")) : "") + "</p>";
      return '<article class="item' + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + it.id + '">' +
        '<p class="kicker">Пара ' + (i + 1) + (it.oneLine ? "" : " · раньше / позже") + "</p>" + line +
        (it.oneLine ? "" : '<div class="pair"><p class="lab">Раньше (Past Perfect) / первая форма</p>') +
        optsHtml(ord.before, a.before, 'data-slot="before"') +
        (it.oneLine ? '<p class="lab" style="margin-top:.55rem">Второй глагол</p>' : '</div><div class="pair"><p class="lab">Позже (Past Simple) / вторая форма</p>') +
        optsHtml(ord.after, a.after, 'data-slot="after"') +
        (it.oneLine ? "" : "</div>") +
        (checked ? '<p class="hint">' + (ok ? "Верно!" : "Проверь, какое действие было раньше: там нужен Past Perfect.") + "</p>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.closest(".item").dataset.id;
        const slot = b.dataset.slot;
        state.answers.t1[id][slot] = b.dataset.val;
        state.checked.t1 = false;
        save(); renderT1(); renderFinale();
      });
    });
    const n = count(T1, t1Ok, "t1");
    document.getElementById("t1-score").textContent = state.checked.t1 ? "Результат: " + n + " / " + T1.length + (n === T1.length ? " · " + SEALS[1].title : "") : "8 пар";
    document.getElementById("m1").classList.toggle("ok", passed(T1, t1Ok, "t1"));
  }

  function renderCloze(list, key, okfn, boxId, scoreId, label, seal) {
    const box = document.getElementById(boxId);
    box.innerHTML = list.map((it, i) => {
      const checked = state.checked[key];
      const ok = checked && okfn(it);
      const bad = checked && !ok;
      const a = state.answers[key][it.id];
      const ord = state.orders[key][it.id];
      const two = it.ans.length > 1;
      let body = "";
      if (two) {
        body = '<p class="en">' + esc(it.parts[0]) + "<strong>" + esc((a && a[0]) || "_____") + "</strong>" + esc(it.parts[1]) + "<strong>" + esc((a && a[1]) || "_____") + "</strong>" + esc(it.parts[2] || "") + "</p>" +
          '<div class="pair"><p class="lab">Пропуск 1</p>' + optsHtml(ord[0], (a && a[0]) || "", 'data-slot="0"') + "</div>" +
          '<div class="pair"><p class="lab">Пропуск 2</p>' + optsHtml(ord[1], (a && a[1]) || "", 'data-slot="1"') + "</div>";
      } else {
        body = '<p class="en">' + esc(it.text) + "</p>" + optsHtml(ord, a || "", 'data-slot="0"');
      }
      return '<article class="item' + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + it.id + '">' +
        '<p class="kicker">' + label + " " + (i + 1) + "</p>" + body +
        (checked ? '<p class="hint">' + (ok ? "Верно!" : "Подумай: что случилось раньше? Там had + V₃.") + "</p>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.closest(".item").dataset.id;
        const slot = b.dataset.slot;
        const item = list.find((x) => x.id === id);
        if (item.ans.length > 1) {
          if (!Array.isArray(state.answers[key][id])) state.answers[key][id] = ["", ""];
          state.answers[key][id][+slot] = b.dataset.val;
        } else {
          state.answers[key][id] = b.dataset.val;
        }
        state.checked[key] = false;
        save(); renderCloze(list, key, okfn, boxId, scoreId, label, seal); renderFinale();
      });
    });
    const n = count(list, okfn, key);
    document.getElementById(scoreId).textContent = state.checked[key] ? label + ": " + n + " / " + list.length + (n === list.length && seal ? " · " + SEALS[seal].title : "") : list.length + " записей";
    const mid = key === "t2" ? "m2" : "m5";
    document.getElementById(mid).classList.toggle("ok", passed(list, okfn, key));
  }

  function renderT3() {
    const box = document.getElementById("t3-list");
    box.innerHTML = T3.map((it, i) => {
      const built = state.answers.t3[it.id] || [];
      const bank = state.orders.t3[it.id] || it.words;
      const left = bank.slice();
      built.forEach((w) => {
        const ix = left.findIndex((x) => x === w);
        if (ix >= 0) left.splice(ix, 1);
      });
      const checked = state.checked.t3;
      const ok = checked && t3Ok(it);
      const bad = checked && !ok;
      return '<article class="item' + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + it.id + '">' +
        '<p class="kicker">Улика #' + (i + 1) + "</p>" +
        '<div class="built" data-built="1">' + (built.length ? built.map((w, wi) => '<button type="button" class="chip" data-from="built" data-i="' + wi + '">' + esc(w) + "</button>").join("") : '<span class="placeholder">Собери предложение...</span>') + "</div>" +
        '<div class="bank" style="margin-top:.45rem">' + left.map((w, wi) => '<button type="button" class="chip" data-from="bank" data-w="' + esc(w) + '">' + esc(w) + "</button>").join("") +
        ' <button type="button" class="chip" data-clear="1" style="opacity:.8">↺</button></div>' +
        '<p class="sub" style="margin-top:.45rem">' + esc(it.hint) + "</p>" +
        (checked ? '<p class="hint">' + (ok ? "Верно!" : "Попробуй ещё раз. Подсказка уже под строкой.") + "</p>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".item").forEach((el) => {
      const id = el.dataset.id;
      el.querySelectorAll("[data-from=bank]").forEach((b) => {
        b.addEventListener("click", () => {
          state.answers.t3[id] = (state.answers.t3[id] || []).concat([b.dataset.w]);
          state.checked.t3 = false;
          save(); renderT3(); renderFinale();
        });
      });
      el.querySelectorAll("[data-from=built]").forEach((b) => {
        b.addEventListener("click", () => {
          const arr = (state.answers.t3[id] || []).slice();
          arr.splice(+b.dataset.i, 1);
          state.answers.t3[id] = arr;
          state.checked.t3 = false;
          save(); renderT3(); renderFinale();
        });
      });
      const clr = el.querySelector("[data-clear]");
      if (clr) clr.addEventListener("click", () => {
        state.answers.t3[id] = [];
        state.checked.t3 = false;
        save(); renderT3(); renderFinale();
      });
    });
    const n = count(T3, t3Ok, "t3");
    document.getElementById("t3-score").textContent = state.checked.t3 ? "Собрано: " + n + " / " + T3.length + (n === T3.length ? " · " + SEALS[3].title : "") : "Собери все 6 улик";
    document.getElementById("m3").classList.toggle("ok", passed(T3, t3Ok, "t3"));
  }

  function renderT4() {
    const box = document.getElementById("t4-list");
    box.innerHTML = T4.map((it, i) => {
      const a = state.answers.t4[it.id] || "";
      const checked = state.checked.t4;
      const ok = checked && t4Ok(it);
      const bad = checked && !ok;
      return '<article class="item' + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + it.id + '">' +
        '<p class="kicker">Записка призрака #' + (i + 1) + "</p>" +
        '<p class="en">«' + esc(it.wrong) + '»</p>' +
        optsHtml(state.orders.t4[it.id], a, "data-slot=0") +
        (checked ? '<p class="hint">' + (ok ? "Верно! " + it.explain : it.explain) + "</p>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        state.answers.t4[b.closest(".item").dataset.id] = b.dataset.val;
        state.checked.t4 = false;
        save(); renderT4(); renderFinale();
      });
    });
    const n = count(T4, t4Ok, "t4");
    document.getElementById("t4-score").textContent = state.checked.t4 ? "Исправлено: " + n + " / " + T4.length + (n === T4.length ? " · " + SEALS[4].title : "") : "8 записок";
    document.getElementById("m4").classList.toggle("ok", passed(T4, t4Ok, "t4"));
  }

  function renderFinale() {
    const n = ["t1", "t2", "t3", "t4", "t5"].filter((k, i) => {
      const maps = [ [T1, t1Ok], [T2, t2Ok], [T3, t3Ok], [T4, t4Ok], [T5, t5Ok] ];
      return passed(maps[i][0], maps[i][1], k);
    }).length;
    document.getElementById("finale-progress").textContent = "Испытания пройдены: " + n + " / 5. Форма открыта всегда.";
    const box = document.getElementById("finale-hard");
    box.innerHTML = HARD.map((h) => {
      const on = state.finale.hard.indexOf(h) >= 0;
      return '<label class="hard" data-on="' + String(on) + '"><input type="checkbox" data-h="' + esc(h) + '"' + (on ? " checked" : "") + "> " + esc(h) + "</label>";
    }).join("");
    box.querySelectorAll("input").forEach((inp) => {
      inp.addEventListener("change", () => {
        const h = inp.dataset.h;
        const set = new Set(state.finale.hard);
        if (inp.checked) set.add(h); else set.delete(h);
        state.finale.hard = Array.from(set);
        state.finale.sent = false;
        save(); renderFinale();
      });
    });
    const ta = document.getElementById("finale-text");
    if (ta.value !== state.finale.text) ta.value = state.finale.text;
    const note = document.getElementById("finale-note");
    if (state.finale.sent) {
      note.innerHTML = '<span class="thanks" style="display:block">Спасибо! Твой ответ сохранён в архиве Shadow School на этом устройстве. Следующая глава откроется скоро.</span>';
    } else {
      note.textContent = "Твои данные останутся только в дневнике Shadow School, на этом устройстве.";
    }
  }

  function renderAll() {
    renderVocab();
    renderRules();
    renderT1();
    renderCloze(T2, "t2", t2Ok, "t2-list", "t2-score", "Страниц восстановлено", 2);
    renderT3();
    renderT4();
    renderCloze(T5, "t5", t5Ok, "t5-list", "t5-score", "Хроника", 5);
    renderFinale();
  }

  function init() {
    load();
    renderAll();
    document.getElementById("reset-btn").addEventListener("click", () => {
      if (!confirm("Начать заново? Все ответы на этом устройстве сотрутся.")) return;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
      state = defaultState();
      save(); renderAll();
    });
    document.getElementById("t1-btn").addEventListener("click", () => { state.checked.t1 = true; save(); renderT1(); renderFinale(); });
    document.getElementById("t2-btn").addEventListener("click", () => { state.checked.t2 = true; save(); renderCloze(T2, "t2", t2Ok, "t2-list", "t2-score", "Страниц восстановлено", 2); renderFinale(); });
    document.getElementById("t3-btn").addEventListener("click", () => { state.checked.t3 = true; save(); renderT3(); renderFinale(); });
    document.getElementById("t4-btn").addEventListener("click", () => { state.checked.t4 = true; save(); renderT4(); renderFinale(); });
    document.getElementById("t5-btn").addEventListener("click", () => { state.checked.t5 = true; save(); renderCloze(T5, "t5", t5Ok, "t5-list", "t5-score", "Хроника", 5); renderFinale(); });
    document.getElementById("finale-text").addEventListener("input", (e) => {
      state.finale.text = e.target.value;
      state.finale.sent = false;
      save();
    });
    document.getElementById("finale-btn").addEventListener("click", () => {
      state.finale.sent = true;
      save(); renderFinale();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
