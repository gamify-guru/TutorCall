(function () {
  "use strict";
  const STORAGE_KEY = "tutorcall-animal-fact-file-lab-v1";
  const TIMER_MAX = 2700;

  const M1 = [
    { id: "t1", given: "This is a tiger.", target: "This is a tiger.", hint: "Проверь: первая буква большая и в конце точка.", okHint: "Всё на месте: большая буква в начале и точка в конце." },
    { id: "t2", given: "there are tigers in china and india", target: "There are tigers in China and India.", hint: "Начни предложение с There. Страны China и India тоже пишутся с большой буквы. Не забудь точку.", okHint: "Верно: There, China и India с большой буквы, точка на месте." },
    { id: "t3", given: "There aren't any tigers in Australia.", target: "There aren't any tigers in Australia.", hint: "Australia — название страны, поэтому оно с большой буквы. Нужны заглавная в начале и точка.", okHint: "Верно! Australia — название страны, поэтому оно с большой буквы." },
    { id: "t4", given: "Tigers are orange, black and white", target: "Tigers are orange, black and white.", hint: "В конце предложения не хватает точки.", okHint: "Верно: точка стоит в конце." },
    { id: "t5", given: "they've got long tails.", target: "They've got long tails.", hint: "Первое слово предложения всегда начинается с большой буквы.", okHint: "Верно: предложение начинается с They've." },
    { id: "t6", given: "They can jump and swim.", target: "They can jump and swim.", hint: "Нужны заглавная T в начале и точка в конце.", okHint: "Отлично: заглавная T и точка на месте." },
    { id: "t7", given: "tigers are big cats", target: "Tigers are big cats.", hint: "Проверь две вещи: первая буква — большая, в конце — точка.", okHint: "Верно: большая буква и точка на месте." }
  ];

  const CHIPS = [
    { id: "c1", text: "a crocodile", category: "animal" },
    { id: "c2", text: "a tiger", category: "animal" },
    { id: "c3", text: "Australia and India", category: "country" },
    { id: "c4", text: "Russia", category: "country" },
    { id: "c5", text: "China and India", category: "country" },
    { id: "c6", text: "green and brown", category: "look" },
    { id: "c7", text: "blue and grey", category: "look" },
    { id: "c8", text: "big teeth", category: "look" },
    { id: "c9", text: "long tails", category: "look" },
    { id: "c10", text: "swim and run", category: "can" },
    { id: "c11", text: "fly and sing", category: "can" }
  ];
  const SLOTS = [
    { id: "s1", lead: "This is", trail: ".", correctChipId: "c1", sentence: "This is a crocodile.", hint: "Досье посвящено крокодилу." },
    { id: "s2", lead: "There are crocodiles in", trail: ".", correctChipId: "c3", sentence: "There are crocodiles in Australia and India.", hint: "В учебнике отмечено: Australia and India ✓." },
    { id: "s3", lead: "There aren't any crocodiles in", trail: ".", correctChipId: "c4", sentence: "There aren't any crocodiles in Russia.", hint: "В учебнике Russia стоит с крестиком ✗." },
    { id: "s4", lead: "Crocodiles are", trail: ".", correctChipId: "c6", sentence: "Crocodiles are green and brown.", hint: "Какого цвета крокодил? Посмотри на портрет и на подсказку в учебнике." },
    { id: "s5", lead: "They've got", trail: ".", correctChipId: "c8", sentence: "They've got big teeth.", hint: "У крокодила очень заметные… зубы!" },
    { id: "s6", lead: "They can", trail: ".", correctChipId: "c10", sentence: "They can swim and run.", hint: "Крокодилы делают это в воде и на берегу." }
  ];
  const PROOF = [
    { id: "a", text: "there are crocodiles in Australia and India", correct: false },
    { id: "b", text: "There are crocodiles in Australia and India.", correct: true },
    { id: "c", text: "There are crocodiles in australia and India", correct: false }
  ];

  const ANIMALS = [
    { id: "panda", name: "panda", plural: "pandas", article: "a", portrait: "images/panda.jpg", country: "China", countryOptions: ["China", "Australia", "Antarctica"], notIn: "Australia", notInOptions: ["Australia", "China", "India"], colour: "black and white", colourOptions: ["black and white", "brown and red", "grey"], body: "big paws", bodyOptions: ["big paws", "a long trunk", "strong legs"], ability: "climb trees", abilityOptions: ["climb trees", "fly high", "sing songs"], starter: "Pandas eat bamboo." },
    { id: "kangaroo", name: "kangaroo", plural: "kangaroos", article: "a", portrait: "images/kangaroo.jpg", country: "Australia", countryOptions: ["Australia", "Russia", "Antarctica"], notIn: "China", notInOptions: ["China", "Australia", "India"], colour: "brown and red", colourOptions: ["brown and red", "black and white", "green"], body: "strong legs", bodyOptions: ["strong legs", "big paws", "a hump"], ability: "jump high", abilityOptions: ["jump high", "climb trees", "fly high"], starter: "Baby kangaroos live in a pouch." },
    { id: "camel", name: "camel", plural: "camels", article: "a", portrait: "images/camel.jpg", country: "Africa and Asia", countryOptions: ["Africa and Asia", "Australia", "Europe"], notIn: "Antarctica", notInOptions: ["Antarctica", "Africa", "Asia"], colour: "brown", colourOptions: ["brown", "black and white", "green"], body: "a hump", bodyOptions: ["a hump", "a long trunk", "big paws"], ability: "walk on sand", abilityOptions: ["walk on sand", "fly high", "climb trees"], starter: "Camels can drink a lot of water." },
    { id: "elephant", name: "elephant", plural: "elephants", article: "an", portrait: "images/elephant.jpg", country: "Africa and India", countryOptions: ["Africa and India", "Australia", "Antarctica"], notIn: "Australia", notInOptions: ["Australia", "Africa", "India"], colour: "grey", colourOptions: ["grey", "brown and red", "black and white"], body: "big ears", bodyOptions: ["big ears", "a hump", "strong legs"], ability: "use their trunks", abilityOptions: ["use their trunks", "fly high", "jump high"], starter: "Elephants are very clever." }
  ];

  const HW1 = [
    { id: "w1", given: "this is a wolf.", target: "This is a wolf.", hint: "Первая буква предложения — большая.", okHint: "Верно: This начинается с большой буквы." },
    { id: "w2", given: "Wolves are grey and white", target: "Wolves are grey and white.", hint: "Точка в конце предложения.", okHint: "Верно: точка на месте." },
    { id: "w3", given: "There are wolves in canada and russia.", target: "There are wolves in Canada and Russia.", hint: "Canada и Russia — страны. Их названия пишем с большой буквы.", okHint: "Верно: Canada и Russia с большой буквы." },
    { id: "w4", given: "there aren't any wolves in australia.", target: "There aren't any wolves in Australia.", hint: "Большая буква в начале + Australia с большой буквы. Точка уже есть.", okHint: "Верно: There и Australia с большой буквы." },
    { id: "w5", given: "They've got sharp teeth.", target: "They've got sharp teeth.", hint: "Нужны заглавная буква в начале и точка в конце.", okHint: "Здесь всё правильно: Capital letter + full stop." },
    { id: "w6", given: "they can run fast.", target: "They can run fast.", hint: "Замени t на T в первом слове.", okHint: "Верно: They с большой буквы." }
  ];

  const HW3 = [
    { id: "tf1", statement: "Pandas live in China.", answer: true, model: "Pandas live in China.", keyword: "china", hint: "Панды — жители Китая." },
    { id: "tf2", statement: "Kangaroos are from Australia.", answer: true, model: "Kangaroos are from Australia.", keyword: "australia", hint: "Кенгуру — символ Австралии." },
    { id: "tf3", statement: "There are crocodiles in Russia.", answer: false, model: "There aren't any crocodiles in Russia.", keyword: "russia", hint: "В учебнике Russia стоит с крестиком ✗. Исправь на отрицание." },
    { id: "tf4", statement: "Camels live in Antarctica.", answer: false, model: "Camels live in Africa and Asia.", keyword: "africa", hint: "Верблюды живут в жарких странах: Africa and Asia." },
    { id: "tf5", statement: "Tigers are green.", answer: false, model: "Tigers are orange, black and white.", keyword: "orange", hint: "Тигр не зелёный! Вспомни цвета из миссии 1." },
    { id: "tf6", statement: "Elephants have got big ears.", answer: true, model: "Elephants have got big ears.", keyword: "ears", hint: "У слонов действительно большие уши." }
  ];

  const STARTERS = [
    "This is a", "There are", "There aren't any", "are", "They've got", "They can"
  ];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function splitWords(s) {
    const t = String(s || "").replace(/\.+$/, "");
    return t.trim() ? t.trim().split(/\s+/) : [];
  }
  function hasStop(s) { return /\.$/.test(String(s || "").trim()); }
  function rebuild(words, stop) { return words.join(" ") + (stop ? "." : ""); }
  function apo(s) { return String(s || "").replace(/[’‘`]/g, "'"); }
  function sameSentence(a, b) {
    return apo(a).trim().replace(/\s+/g, " ") === apo(b).trim().replace(/\s+/g, " ");
  }
  function fmtTime(s) {
    const m = Math.floor(Math.max(0, s) / 60);
    const r = Math.max(0, s) % 60;
    return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
  }
  function sentencesOf(text) {
    return (String(text || "").replace(/\r/g, "").match(/[^.!?\n]+[.!?]*/g) || []).map((x) => x.trim()).filter(Boolean);
  }

  function parseGiven(item) {
    return { words: splitWords(item.given), stop: hasStop(item.given), checked: false };
  }

  function defaultM3Orders() {
    const o = {};
    ANIMALS.forEach((a) => {
      o[a.id] = {
        country: shuffle(a.countryOptions.slice()),
        notIn: shuffle(a.notInOptions.slice()),
        colour: shuffle(a.colourOptions.slice()),
        body: shuffle(a.bodyOptions.slice()),
        ability: shuffle(a.abilityOptions.slice())
      };
    });
    return o;
  }

  function defaultState() {
    const m1 = {}; M1.forEach((it) => { m1[it.id] = parseGiven(it); });
    const hw1 = {}; HW1.forEach((it) => { hw1[it.id] = parseGiven(it); });
    const hw3 = {}; HW3.forEach((it) => { hw3[it.id] = { choice: null, correction: "", checked: false }; });
    return {
      name: "",
      timerLeft: TIMER_MAX,
      timerOn: false,
      m1, m2: { chipOrder: shuffle(CHIPS.map((c) => c.id)), placed: {}, proofOrder: shuffle(PROOF.map((p) => p.id)), proof: null, proofChecked: false, sealed: false, pick: null, slot: "s1" },
      m3: { animalId: null, animalName: "", country: "", notIn: "", colour: "", body: "", ability: "", caps: {}, dots: {}, freeText: "", orders: defaultM3Orders(), checked: false },
      hw1, hw2: { text: "", checked: false }, hw3
    };
  }

  let state = defaultState();
  let timerId = null;

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      const base = defaultState();
      state = Object.assign(base, saved);
      state.m1 = Object.assign(base.m1, saved.m1 || {});
      state.m2 = Object.assign(base.m2, saved.m2 || {});
      if (!Array.isArray(state.m2.chipOrder) || state.m2.chipOrder.length !== CHIPS.length) state.m2.chipOrder = shuffle(CHIPS.map((c) => c.id));
      if (!Array.isArray(state.m2.proofOrder) || state.m2.proofOrder.length !== PROOF.length) state.m2.proofOrder = shuffle(PROOF.map((p) => p.id));
      state.m3 = Object.assign(base.m3, saved.m3 || {});
      if (!state.m3.orders) state.m3.orders = defaultM3Orders();
      state.hw1 = Object.assign(base.hw1, saved.hw1 || {});
      state.hw2 = Object.assign(base.hw2, saved.hw2 || {});
      state.hw3 = Object.assign(base.hw3, saved.hw3 || {});
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function m1Count() { return M1.filter((it) => sameSentence(rebuild(state.m1[it.id].words, state.m1[it.id].stop), it.target) && state.m1[it.id].checked).length; }
  function hw1Count() { return HW1.filter((it) => sameSentence(rebuild(state.hw1[it.id].words, state.hw1[it.id].stop), it.target) && state.hw1[it.id].checked).length; }
  function m2Placed() { return SLOTS.filter((s) => state.m2.placed[s.id] === s.correctChipId).length; }
  function proofOk() {
    const sel = PROOF.find((p) => p.id === state.m2.proof);
    return !!(state.m2.proofChecked && sel && sel.correct);
  }
  function m2Complete() { return m2Placed() === 6 && proofOk() && state.m2.sealed; }
  function m1Complete() { return m1Count() === M1.length; }

  function animal() { return ANIMALS.find((a) => a.id === state.m3.animalId) || null; }
  function m3LineOk(key, expected) {
    const a = animal();
    if (!a) return false;
    const val = state.m3[key];
    return val === expected && state.m3.caps[key] && state.m3.dots[key];
  }
  function m3Results() {
    const a = animal();
    if (!a) return { n: 0, rows: {} };
    const rows = {};
    const name = (state.m3.animalName || "").trim().toLowerCase();
    rows.line1 = name === a.name;
    rows.line2 = m3LineOk("country", a.country);
    rows.line3 = m3LineOk("notIn", a.notIn);
    rows.line4 = m3LineOk("colour", a.colour);
    rows.line5 = m3LineOk("body", a.body);
    rows.line6 = m3LineOk("ability", a.ability);
    const ft = (state.m3.freeText || "").trim();
    rows.line7 = ft.split(/\s+/).length >= 4 && /^[A-ZА-ЯЁ]/.test(ft) && /\.$/.test(ft);
    const n = Object.values(rows).filter(Boolean).length;
    return { n, rows };
  }
  function m3Complete() { return state.m3.checked && m3Results().n === 7; }

  function hw2Meta() {
    const list = sentencesOf(state.hw2.text);
    const caps = list.length > 0 && list.every((s) => /^[A-ZА-ЯЁ]/.test(s));
    const dots = list.length > 0 && list.every((s) => /\.$/.test(s));
    const where = /there are/i.test(state.hw2.text) && /there aren'?t any/i.test(apo(state.hw2.text));
    const body = /they'?ve got/i.test(apo(state.hw2.text)) && /they can/i.test(state.hw2.text);
    const items = [
      { id: "count", label: "6 sentences", ok: list.length >= 6 },
      { id: "caps", label: "Capital letter in each", ok: caps },
      { id: "dots", label: "Full stop in each", ok: dots },
      { id: "where", label: "There are / There aren't any", ok: where },
      { id: "body", label: "They've got / They can", ok: body }
    ];
    return { items, ok: items.every((x) => x.ok) };
  }

  function hw3ItemOk(it) {
    const row = state.hw3[it.id];
    if (!row || row.choice === null) return false;
    if (row.choice !== it.answer) return false;
    if (it.answer) return true;
    const w = (row.correction || "").trim();
    return /^[A-ZА-ЯЁ]/.test(w) && /\.$/.test(w) && w.split(/\s+/).length >= 4 && w.toLowerCase().includes(it.keyword);
  }
  function hw3Count() { return HW3.filter(hw3ItemOk).length; }

  function renderChrome() {
    const chip = document.getElementById("timer-chip");
    chip.textContent = (state.timerOn ? "⏱ " : "▶ ") + fmtTime(state.timerLeft);
    chip.classList.toggle("warn", state.timerOn && state.timerLeft < 300);
    const name = document.getElementById("agent-name");
    if (name.value !== state.name) name.value = state.name;
  }

  function renderMap() {
    const items = [
      { href: "#m1", img: "images/tiger.jpg", alt: "Тигр", num: "01", title: "Разоблачи фейки о тигре", en: "The Tiger Files", done: m1Complete(), score: m1Count() + "/7" },
      { href: "#m2", img: "images/crocodile.jpg", alt: "Крокодил", num: "02", title: "Собери досье крокодила", en: "The Crocodile Dossier", done: m2Complete(), score: m2Placed() + "/6" },
      { href: "#m3", img: "images/panda.jpg", alt: "Панда", num: "03", title: "Создай свой animal fact file", en: "Your Own Fact File", done: m3Complete(), score: (state.m3.checked ? m3Results().n : 0) + "/7" }
    ];
    document.getElementById("map-grid").innerHTML = items.map((it) =>
      '<a class="map-card' + (it.done ? " done" : "") + '" href="' + it.href + '"><img src="' + it.img + '" alt="' + it.alt + '"><div class="body"><p class="kicker" style="color:var(--clay)">Mission ' + it.num + ' · ' + it.score + '</p><h3>' + it.title + '</h3><p class="sub">' + it.en + (it.done ? " · штамп получен" : "") + "</p></div></a>"
    ).join("");
  }

  function renderFixList(boxId, scoreId, items, storeKey, prefix) {
    const box = document.getElementById(boxId);
    box.innerHTML = items.map((it, i) => {
      const st = state[storeKey][it.id];
      const built = rebuild(st.words, st.stop);
      const ok = st.checked && sameSentence(built, it.target);
      const bad = st.checked && !ok;
      return '<article class="sent' + (st.checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + it.id + '">' +
        '<div class="words">' + st.words.map((w, wi) => {
          const cap = w[0] && w[0] === w[0].toUpperCase();
          return '<button type="button" class="word' + (cap ? " cap" : "") + '" data-i="' + wi + '">' + w + "</button>";
        }).join(" ") +
        ' <button type="button" class="dot-btn' + (st.stop ? " on" : "") + '" data-dot="1">.</button></div>' +
        '<div class="actions" style="margin-top:.45rem"><button type="button" class="btn" data-check="1">Проверить предложение</button></div>' +
        (st.checked ? '<p class="hint">' + (ok ? (it.okHint || "Верно: большая буква и точка на месте.") : it.hint) + "</p>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".sent").forEach((el) => {
      const id = el.dataset.id;
      el.querySelectorAll(".word").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = +btn.dataset.i;
          const w = state[storeKey][id].words[i];
          const ch = w[0];
          const flipped = (ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()) + w.slice(1);
          state[storeKey][id].words[i] = flipped;
          state[storeKey][id].checked = false;
          save(); renderFixList(boxId, scoreId, items, storeKey, prefix); renderMap(); renderCert();
        });
      });
      el.querySelector("[data-dot]").addEventListener("click", () => {
        state[storeKey][id].stop = !state[storeKey][id].stop;
        state[storeKey][id].checked = false;
        save(); renderFixList(boxId, scoreId, items, storeKey, prefix); renderMap(); renderCert();
      });
      el.querySelector("[data-check]").addEventListener("click", () => {
        state[storeKey][id].checked = true;
        save(); renderFixList(boxId, scoreId, items, storeKey, prefix); renderMap(); renderChrome(); renderCert();
      });
    });
    const n = storeKey === "m1" ? m1Count() : hw1Count();
    document.getElementById(scoreId).textContent = n + " / " + items.length + (n === items.length ? " · штамп заработан" : "");
  }

  function renderM2() {
    const used = new Set(Object.values(state.m2.placed));
    document.getElementById("m2-bank").innerHTML = state.m2.chipOrder.map((id) => {
      const c = CHIPS.find((x) => x.id === id);
      const u = used.has(id);
      const p = state.m2.pick === id;
      return '<button type="button" class="fact-chip' + (u ? " used" : "") + (p ? " picked" : "") + '" data-id="' + id + '"' + (u ? " disabled" : "") + ">" + c.text + "</button>";
    }).join("");
    document.getElementById("m2-bank").querySelectorAll(".fact-chip").forEach((b) => {
      b.addEventListener("click", () => {
        if (b.disabled) return;
        state.m2.pick = b.dataset.id;
        state.m2.flashHint = "";
        save(); renderM2();
      });
    });
    document.getElementById("m2-slots").innerHTML = SLOTS.map((s) => {
      const chipId = state.m2.placed[s.id];
      const chip = CHIPS.find((c) => c.id === chipId);
      const ok = chipId === s.correctChipId;
      const active = state.m2.slot === s.id;
      const showHint = (chip && !ok) || (active && state.m2.flashHint && !chip);
      return '<div class="slot' + (chip ? " filled" : "") + (active ? " active" : "") + '" data-id="' + s.id + '">' +
        s.lead + " " + (chip ? "<strong>" + chip.text + "</strong>" : "______") + " " + s.trail +
        (showHint ? '<p class="hint" style="display:block">' + (state.m2.flashHint || s.hint) + "</p>" : "") +
        "</div>";
    }).join("");
    document.getElementById("m2-slots").querySelectorAll(".slot").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.id;
        if (state.m2.placed[id] && !state.m2.pick) {
          delete state.m2.placed[id];
          state.m2.sealed = false;
          state.m2.flashHint = "";
        } else if (state.m2.pick) {
          const sl = SLOTS.find((s) => s.id === id);
          if (state.m2.pick === sl.correctChipId) {
            state.m2.placed[id] = state.m2.pick;
            state.m2.pick = null;
            state.m2.sealed = false;
            state.m2.flashHint = "";
          } else {
            state.m2.flashHint = sl.hint;
          }
        }
        state.m2.slot = id;
        save(); renderM2(); renderMap();
      });
    });
    const proofBox = document.getElementById("m2-proof");
    proofBox.innerHTML = state.m2.proofOrder.map((id) => {
      const p = PROOF.find((x) => x.id === id);
      const on = state.m2.proof === id;
      return '<button type="button" class="opt" data-id="' + id + '" aria-pressed="' + String(on) + '" style="display:block;width:100%;text-align:left;border-radius:.7rem;margin-top:.35rem">' + p.text + "</button>";
    }).join("");
    proofBox.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        state.m2.proof = b.dataset.id;
        state.m2.proofChecked = true;
        state.m2.sealed = false;
        save(); renderM2(); renderMap();
      });
    });
    if (state.m2.proofChecked) {
      proofBox.insertAdjacentHTML("beforeend", proofOk()
        ? '<p class="score">Идеально. Теперь можно запечатать досье.</p>'
        : '<p class="hint" style="display:block">Это предложение написано неверно. Нужны большие буквы в начале и в названиях стран.</p>');
    }
    document.getElementById("m2-score").textContent = m2Placed() + " / 6 фактов" + (proofOk() ? " · proof-check верный" : "");
    document.getElementById("m2-stamp").hidden = !state.m2.sealed;
    document.getElementById("m2-seal").disabled = !(m2Placed() === 6 && proofOk());
  }
  function renderM3() {
    document.getElementById("m3-pick").innerHTML = ANIMALS.map((a) =>
      '<button type="button" class="animal-btn" data-id="' + a.id + '" aria-pressed="' + String(state.m3.animalId === a.id) + '"><img src="' + a.portrait + '" alt="Портрет: ' + a.name + '"><strong style="display:block;margin-top:.35rem;text-transform:capitalize">' + a.name + "</strong></button>"
    ).join("");
    document.getElementById("m3-pick").querySelectorAll(".animal-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.m3.animalId = b.dataset.id;
        state.m3.checked = false;
        save(); renderM3(); renderMap();
      });
    });
    const a = animal();
    const pic = document.getElementById("m3-pic");
    const lines = document.getElementById("m3-lines");
    if (!a) { pic.hidden = true; lines.innerHTML = '<p class="sub">Сначала выбери животное — портрет появится над строками досье.</p>'; document.getElementById("m3-score").textContent = ""; return; }
    pic.hidden = false;
    pic.innerHTML = '<img src="' + a.portrait + '" alt="Портрет: ' + a.name + '"><p>В строках 2–6 нажми факт, затем Aa (первая буква) и точку в конце. Седьмое предложение напиши сам(а). Пример факта: ' + a.starter + "</p>";
    const res = state.m3.checked ? m3Results().rows : {};
    const order = state.m3.orders[a.id];
    const fields = [
      { key: "country", label: "2. There are " + a.plural + " in", after: ".", options: order.country, expected: a.country },
      { key: "notIn", label: "3. There aren't any " + a.plural + " in", after: ".", options: order.notIn, expected: a.notIn },
      { key: "colour", label: "4. " + a.plural[0].toUpperCase() + a.plural.slice(1) + " are", after: ".", options: order.colour, expected: a.colour },
      { key: "body", label: "5. They've got", after: ".", options: order.body, expected: a.body },
      { key: "ability", label: "6. They can", after: ".", options: order.ability, expected: a.ability }
    ];
    let html = '<div class="line' + (state.m3.checked ? (res.line1 ? " ok" : " bad") : "") + '"><label>1. This is ' + a.article + ' …</label>' +
      '<input type="text" id="m3-name" placeholder="' + a.name + '" value="' + (state.m3.animalName || "").replace(/"/g, "&quot;") + '">' +
      (state.m3.checked && !res.line1 ? '<p class="hint" style="display:block">Впиши название животного: ' + a.name + ".</p>" : "") + "</div>";
    fields.forEach((f, i) => {
      const val = state.m3[f.key] || "";
      const ok = res["line" + (i + 2)];
      html += '<div class="line' + (state.m3.checked ? (ok ? " ok" : " bad") : "") + '"><div>' + f.label + " <strong>" + (val || "______") + "</strong> " + f.after + "</div>" +
        '<div class="opts">' + f.options.map((op) => '<button type="button" class="opt" data-key="' + f.key + '" data-val="' + op.replace(/"/g, "&quot;") + '" aria-pressed="' + String(val === op) + '">' + op + "</button>").join("") + "</div>" +
        '<div class="actions"><button type="button" class="btn' + (state.m3.caps[f.key] ? " btn-gold" : "") + '" data-cap="' + f.key + '">Aa · Capital letter</button>' +
        '<button type="button" class="btn' + (state.m3.dots[f.key] ? " btn-gold" : "") + '" data-dot="' + f.key + '">. · Full stop</button></div>' +
        (state.m3.checked && !ok ? '<p class="hint" style="display:block">Нужны факт, большая буква и точка.</p>' : "") +
        "</div>";
    });
    html += '<div class="line' + (state.m3.checked ? (res.line7 ? " ok" : " bad") : "") + '"><label>7. Своё седьмое предложение</label>' +
      '<textarea id="m3-free" rows="2" placeholder="' + a.starter + '">' + (state.m3.freeText || "").replace(/</g, "&lt;") + "</textarea>" +
      '<p class="sub">Не забудь про большую букву в начале и точку в конце. Напиши не меньше 4 слов.</p></div>';
    lines.innerHTML = html;
    const nameInp = document.getElementById("m3-name");
    if (nameInp) nameInp.addEventListener("input", () => { state.m3.animalName = nameInp.value; state.m3.checked = false; save(); });
    const free = document.getElementById("m3-free");
    if (free) free.addEventListener("input", () => { state.m3.freeText = free.value; state.m3.checked = false; save(); });
    lines.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        state.m3[b.dataset.key] = b.dataset.val;
        state.m3.checked = false;
        save(); renderM3();
      });
    });
    lines.querySelectorAll("[data-cap]").forEach((b) => {
      b.addEventListener("click", () => { state.m3.caps[b.dataset.cap] = !state.m3.caps[b.dataset.cap]; state.m3.checked = false; save(); renderM3(); });
    });
    lines.querySelectorAll("[data-dot]").forEach((b) => {
      b.addEventListener("click", () => { state.m3.dots[b.dataset.dot] = !state.m3.dots[b.dataset.dot]; state.m3.checked = false; save(); renderM3(); });
    });
    const score = document.getElementById("m3-score");
    if (state.m3.checked) {
      const n = m3Results().n;
      score.textContent = n + " / 7 строк готовы" + (n === 7 ? " · штамп миссии 03 заработан!" : "");
    } else score.textContent = "";
  }

  function renderHW2() {
    const box = document.getElementById("hw2-starters");
    box.innerHTML = STARTERS.map((s) => '<button type="button" class="fact-chip" data-s="' + s + '">' + s + " …</button>").join("");
    box.querySelectorAll(".fact-chip").forEach((b) => {
      b.addEventListener("click", () => {
        const t = state.hw2.text;
        state.hw2.text = (t + (t && !t.endsWith(" ") && !t.endsWith("\n") ? " " : "") + b.dataset.s + " ").replace(/^\s+/, "");
        state.hw2.checked = false;
        save(); renderHW2();
      });
    });
    const ta = document.getElementById("hw2-text");
    if (ta.value !== state.hw2.text) ta.value = state.hw2.text;
    const meta = hw2Meta();
    document.getElementById("hw2-check").innerHTML = meta.items.map((it) => '<span class="' + (it.ok ? "ok" : "") + '">' + it.label + "</span>").join("");
    document.getElementById("hw2-score").textContent = state.hw2.checked ? (meta.ok ? "Mini fact file complete" : "Check the list: something is still missing.") : "";
  }

  function renderHW3() {
    const box = document.getElementById("hw3-list");
    box.innerHTML = HW3.map((it, i) => {
      const row = state.hw3[it.id];
      const checked = row.checked;
      const ok = checked && hw3ItemOk(it);
      const bad = checked && !ok;
      return '<article class="sent' + (checked ? " checked" : "") + (ok ? " ok" : "") + (bad ? " bad" : "") + '">' +
        '<div class="en" style="font-weight:800">' + (i + 1) + ". " + it.statement + "</div>" +
        '<div class="checkrow" style="margin-top:.4rem">' +
        '<button type="button" class="opt" data-id="' + it.id + '" data-val="true" aria-pressed="' + String(row.choice === true) + '">True</button>' +
        '<button type="button" class="opt" data-id="' + it.id + '" data-val="false" aria-pressed="' + String(row.choice === false) + '">False</button></div>' +
        (row.choice === false ? '<input type="text" data-corr="' + it.id + '" placeholder="Write the correct sentence" value="' + (row.correction || "").replace(/"/g, "&quot;") + '">' : "") +
        (checked ? '<p class="hint">' + (ok ? "Верно!" : it.hint) + "</p>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        state.hw3[b.dataset.id].choice = b.dataset.val === "true";
        state.hw3[b.dataset.id].checked = false;
        save(); renderHW3();
      });
    });
    box.querySelectorAll("[data-corr]").forEach((inp) => {
      inp.addEventListener("input", () => {
        state.hw3[inp.dataset.corr].correction = inp.value;
        state.hw3[inp.dataset.corr].checked = false;
        save();
      });
    });
    document.getElementById("hw3-score").textContent = HW3.some((it) => state.hw3[it.id].checked) ? hw3Count() + " / 6 done" : "";
  }

  function renderCert() {
    const stamps = [
      { n: "01", title: "Tiger", done: m1Complete() },
      { n: "02", title: "Crocodile", done: m2Complete() },
      { n: "03", title: "My file", done: m3Complete() }
    ];
    const got = stamps.filter((s) => s.done).length;
    document.getElementById("cert-path").innerHTML = stamps.map((s) =>
      '<div class="card"><p class="kicker" style="color:var(--clay)">Mission ' + s.n + '</p><h3>' + s.title + "</h3><p class='sub'>" + (s.done ? "Штамп получен" : "Ещё в работе") + "</p></div>"
    ).join("");
    document.getElementById("cert-note").textContent = got === 3
      ? "Все три штампа собраны. Вот твой именной сертификат."
      : "Раздел открыт всегда. Именной сертификат появляется, когда собраны все три штампа. Сейчас: " + got + " из 3.";
    const who = (state.name || "").trim() || "Junior Agent";
    if (got === 3) {
      document.getElementById("diploma").innerHTML =
        '<p class="kicker">Certificate no. AS2 · 01 · 08</p>' +
        '<p style="letter-spacing:.22em;text-transform:uppercase;font-weight:900;font-size:10px;color:var(--clay);margin:.7rem 0 0">Certificate of achievement</p>' +
        '<p class="font-hand" style="font-size:1.5rem;margin:.6rem 0 0;color:var(--forest)">This certifies that</p>' +
        '<p class="who">' + who.replace(/</g, "&lt;") + "</p>" +
        '<p class="sub" style="max-width:32rem;margin:.7rem auto 0">has successfully completed the 45-minute mission “Write an animal fact file” — Academy Stars 2, Unit 1, Lesson 8, Level A1.</p>' +
        '<p class="sub">Capital letters · Full stop · Animal fact file из 6–7 предложений</p>' +
        '<p class="stamp" style="margin-top:.8rem">Fact file · expert agent</p>';
    } else {
      document.getElementById("diploma").innerHTML =
        '<p class="font-display" style="font-size:1.4rem;margin:0">Сертификат почти готов</p>' +
        '<p class="sub">Собери штампы всех трёх миссий — раздел уже открыт, диплом заполнится сам.</p>';
    }
  }

  function renderRules() {
    document.getElementById("rules-body").innerHTML =
      '<div class="rule"><strong>Rule 01 · Capital letters</strong><p class="sub">Начинай каждое предложение с большой буквы. Названия стран тоже пишутся с большой буквы.</p><p style="font-weight:800;margin:.4rem 0 0">There are tigers in China and India.</p><p class="sub">✗ there are tigers in china → ✓ There are tigers in China.</p></div>' +
      '<div class="rule"><strong>Rule 02 · Full stop</strong><p class="sub">В конце обычного предложения ставим точку. Она говорит: «Предложение закончилось».</p><p class="sub">✗ Tigers are big cats  →  ✓ Tigers are big cats.</p></div>' +
      '<div class="rule"><strong>Rule 03 · Animal fact file</strong><p class="sub">6–7 коротких предложений: This is a… · There are… in… · There aren\'t any… in… · … are… · They\'ve got… · They can… · My own fact.</p></div>' +
      '<div class="rule"><strong>Bonus · Word bank</strong><p class="sub">Countries: China, India, Australia, Russia, Canada, Africa. Colours: orange, black, white, green, brown, grey. Body: paws, teeth, tails, legs, ears, a hump. Actions: run, jump, swim, climb, walk, fly.</p></div>';
  }

  function renderBook() {
    document.getElementById("book-body").innerHTML =
      '<div class="task-pic"><img src="images/tiger.jpg" alt="Tiger illustration from the coursebook activity"><p><strong>Tiger fact file</strong><br>This is a tiger.<br>There are tigers in China and India.<br>There aren\'t any tigers in Australia.<br>Tigers are orange, black and white.<br>They\'ve got long tails.<br>They can jump and swim.</p></div>' +
      '<div class="task-pic"><img src="images/crocodile.jpg" alt="Crocodile"><p><strong>Crocodile facts, p.17</strong><br>✓ Australia and India<br>✗ Russia<br>✓ green and brown<br>✓ big teeth<br>✓ swim, run</p></div>';
  }

  function openModal(id, open) {
    const m = document.getElementById(id);
    m.classList.toggle("open", open);
    m.setAttribute("aria-hidden", String(!open));
    if (open) {
      const close = m.querySelector(".modal-card .btn");
      if (close) close.focus();
    }
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
      save(); renderChrome();
    }, 1000);
    renderChrome();
  }

  function renderAll() {
    renderChrome();
    renderMap();
    renderFixList("m1-list", "m1-score", M1, "m1");
    renderM2();
    renderM3();
    renderFixList("hw1-list", "hw1-score", HW1, "hw1");
    renderHW2();
    renderHW3();
    renderCert();
    renderRules();
    renderBook();
  }

  function init() {
    load();
    renderAll();
    if (state.timerOn) { state.timerOn = false; startTimer(); }
    document.getElementById("agent-name").addEventListener("input", (e) => { state.name = e.target.value.slice(0, 26); save(); renderCert(); });
    document.getElementById("timer-chip").addEventListener("click", () => {
      if (state.timerOn) { state.timerOn = false; if (timerId) { clearInterval(timerId); timerId = null; } save(); renderChrome(); }
      else startTimer();
    });
    document.getElementById("reset-btn").addEventListener("click", () => {
      if (!confirm("Начать заново? Все ответы на этом устройстве сотрутся.")) return;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      state = defaultState();
      if (timerId) { clearInterval(timerId); timerId = null; }
      save(); renderAll();
    });
    document.getElementById("rules-btn").addEventListener("click", () => openModal("rules-modal", true));
    document.getElementById("rules-close").addEventListener("click", () => openModal("rules-modal", false));
    document.getElementById("book-btn").addEventListener("click", () => openModal("book-modal", true));
    document.getElementById("book-close").addEventListener("click", () => openModal("book-modal", false));
    document.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", () => openModal(el.dataset.close + "-modal", false));
    });
    document.getElementById("m2-seal").addEventListener("click", () => {
      if (m2Placed() === 6 && proofOk()) { state.m2.sealed = true; save(); renderM2(); renderMap(); renderCert(); }
    });
    document.getElementById("m3-check").addEventListener("click", () => { state.m3.checked = true; save(); renderM3(); renderMap(); renderCert(); });
    document.getElementById("hw2-text").addEventListener("input", (e) => { state.hw2.text = e.target.value; state.hw2.checked = false; save(); renderHW2(); });
    document.getElementById("hw2-btn").addEventListener("click", () => { state.hw2.checked = true; save(); renderHW2(); });
    document.getElementById("hw3-btn").addEventListener("click", () => {
      HW3.forEach((it) => { state.hw3[it.id].checked = true; });
      save(); renderHW3();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
