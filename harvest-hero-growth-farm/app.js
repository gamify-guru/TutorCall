(function () {
  "use strict";
  const STORAGE_KEY = "tutorcall-harvest-hero-growth-farm-v1";

  const FOODS = [
    { id: "apple", name: "apple", article: "an", phrase: "an apple", place: "on a tree", color: "#FEE2E2", icon: "🍎", fact: "Apples grow on trees." },
    { id: "orange", name: "orange", article: "an", phrase: "an orange", place: "on a tree", color: "#FFEDD5", icon: "🍊", fact: "Oranges grow on trees." },
    { id: "lemon", name: "lemon", article: "a", phrase: "a lemon", place: "on a tree", color: "#FEF9C3", icon: "🍋", fact: "Lemons grow on trees." },
    { id: "coconut", name: "coconut", article: "a", phrase: "a coconut", place: "on a tree", color: "#F5F5F4", icon: "🥥", fact: "Coconuts grow on palm trees." },
    { id: "grapes", name: "grapes", article: "some", phrase: "some grapes", place: "on a vine", color: "#F3E8FF", icon: "🍇", fact: "Grapes grow on a vine." },
    { id: "potato", name: "potato", article: "a", phrase: "a potato", place: "in the ground", color: "#FEF3C7", icon: "🥔", fact: "Potatoes grow in the ground." },
    { id: "watermelon", name: "watermelon", article: "a", phrase: "a watermelon", place: "in the ground", color: "#DCFCE7", icon: "🍉", fact: "Watermelons grow in the ground." },
    { id: "onion", name: "onion", article: "an", phrase: "an onion", place: "in the ground", color: "#FAE8FF", icon: "🧅", fact: "Onions grow in the ground." },
    { id: "peas", name: "peas", article: "some", phrase: "some peas", place: "on a bush", color: "#BBF7D0", icon: "🫛", fact: "Peas grow on a bush." },
    { id: "beans", name: "beans", article: "some", phrase: "some beans", place: "on a bush", color: "#D1FAE5", icon: "🫘", fact: "Beans grow on a bush." },
    { id: "pepper", name: "pepper", article: "a", phrase: "a pepper", place: "on a bush", color: "#FEE2E2", icon: "🌶️", fact: "Peppers grow on a bush." },
    { id: "tomato", name: "tomato", article: "a", phrase: "a tomato", place: "on a bush", color: "#FFE4E6", icon: "🍅", fact: "Tomatoes grow on a bush." },
    { id: "strawberry", name: "strawberry", article: "a", phrase: "a strawberry", place: "on a bush", color: "#FCE7F3", icon: "🍓", fact: "Strawberries grow on a bush." }
  ];
  const PLACES = [
    { place: "on a tree", color: "#FEF3C7", dark: "#7A4A0A", example: "apple, orange, lemon, coconut" },
    { place: "on a vine", color: "#F3E8FF", dark: "#6B21A8", example: "grapes" },
    { place: "on a bush", color: "#DCFCE7", dark: "#14532D", example: "tomato, pepper, peas, beans, strawberry" },
    { place: "in the ground", color: "#FFEDD5", dark: "#9A3412", example: "potato, onion, watermelon" }
  ];
  const VERBS = [
    { verb: "feed the lambs", icon: "🐑" },
    { verb: "pick strawberries", icon: "🍓" },
    { verb: "ride on a tractor", icon: "🚜" },
    { verb: "go to the market", icon: "🛒" },
    { verb: "pick apples", icon: "🍎" },
    { verb: "dig potatoes", icon: "🥔" },
    { verb: "water the plants", icon: "💧" },
    { verb: "ride a horse", icon: "🐴" }
  ];
  const RULES = [
    { title: "Would you like a / an / some + food?", explain: "We ask a question to offer food. Use a for one thing, an for one thing starting with a vowel (a, e, i, o, u), some for many things.", examples: ["Would you like a lemon?", "Would you like an orange?", "Would you like some grapes?"], answer: "Answer: Yes, please. / No, thanks." },
    { title: "I'd like a / an / some + food, please.", explain: "We use I'd like (= I would like) to say what we want. It is polite. Add please at the end.", examples: ["I'd like a potato, please.", "I'd like an apple, please.", "I'd like some peas, please."], answer: "I'd = I would. Say it fast: “I'd like…”" },
    { title: "Would you like to + verb?", explain: "We invite a friend to do an activity. After to, use the verb (no -s, no -ing).", examples: ["Would you like to feed the lambs?", "Would you like to pick strawberries?", "Would you like to ride on a tractor?"], answer: "More verbs: go to the market, dig potatoes, water the plants, ride a horse." },
    { title: "How does food grow?", explain: "Food grows in 4 places. Say: It grows on a tree / on a vine / on a bush / in the ground.", examples: ["Apples grow on a tree.", "Grapes grow on a vine.", "Tomatoes grow on a bush.", "Potatoes grow in the ground."], answer: "Seeds → flowers → bees help → fruit grows!" }
  ];
  const STORY = [
    "Hello! I am Sam. I live on the Growth Farm.",
    "In spring, I plant orange seeds in the ground.",
    "The seeds need water and sun. They grow into small plants.",
    "Then the plants grow flowers. The flowers are white and sweet.",
    "Bees come to the flowers. Bees help the flowers grow fruit.",
    "In summer, the flowers become small oranges on a tree.",
    "The oranges grow big and orange. Now I can pick them!",
    "Would you like an orange? Yes, please. It is sweet and juicy!"
  ];
  const READ = [
    { id: "r1", q: "Where does Sam plant the seeds?", opts: ["in the ground", "on a tree", "on a vine"], ans: "in the ground" },
    { id: "r2", q: "What do the seeds need?", opts: ["water and sun", "snow", "a tractor"], ans: "water and sun" },
    { id: "r3", q: "What colour are the flowers?", opts: ["white", "purple", "red"], ans: "white" },
    { id: "r4", q: "Who helps the flowers?", opts: ["bees", "cows", "fish"], ans: "bees" },
    { id: "r5", q: "Where do oranges grow?", opts: ["on a tree", "in the ground", "on a bush"], ans: "on a tree" },
    { id: "r6", q: "Sam says: “Would you like an orange?” — What is the answer?", opts: ["Yes, please.", "No, thanks.", "Goodbye."], ans: "Yes, please." }
  ];
  const COMPARE = [
    { id: "c1", prompt: "Size", opts: ["A potato is small.", "A potato is big.", "A potato is long."], ans: "A potato is small." },
    { id: "c2", prompt: "Size", opts: ["A watermelon is big.", "A watermelon is small.", "A watermelon is tiny."], ans: "A watermelon is big." },
    { id: "c3", prompt: "Where it grows", opts: ["Potatoes grow in the ground.", "Potatoes grow on a tree.", "Potatoes grow on a vine."], ans: "Potatoes grow in the ground." },
    { id: "c4", prompt: "Where it grows", opts: ["Watermelons grow in the ground.", "Watermelons grow on a bush.", "Watermelons grow on a tree."], ans: "Watermelons grow in the ground." },
    { id: "c5", prompt: "Seeds", opts: ["Watermelons have seeds.", "Watermelons have no seeds.", "Watermelons have flowers only."], ans: "Watermelons have seeds." },
    { id: "c6", prompt: "Compare", opts: ["A watermelon is bigger than a potato.", "A potato is bigger than a watermelon.", "They are the same size."], ans: "A watermelon is bigger than a potato." }
  ];
  const WRITE = [
    { id: "w1", type: "ask", food: "lemon" },
    { id: "w2", type: "ask", food: "orange" },
    { id: "w3", type: "ask", food: "grapes" },
    { id: "w4", type: "want", food: "apple" },
    { id: "w5", type: "want", food: "potato" },
    { id: "w6", type: "want", food: "peas" },
    { id: "w7", type: "ask", food: "strawberry" },
    { id: "w8", type: "want", food: "onion" }
  ];
  const MARKET = [
    { id: "k1", who: "Customer", line: "Hello! Would you like an apple?", opts: ["Yes, please. I'd like an apple.", "No, thanks. Goodbye.", "I am a potato."], ans: "Yes, please. I'd like an apple." },
    { id: "k2", who: "Shopkeeper", line: "Here you are. Would you like some grapes too?", opts: ["No, thanks.", "Yes, please. Some grapes, please.", "I don't like food."], ans: "Yes, please. Some grapes, please." },
    { id: "k3", who: "Customer", line: "Thank you! Would you like a lemon?", opts: ["Yes, please.", "No, thanks. I have a lemon.", "Lemons are trees."], ans: "Yes, please." },
    { id: "k4", who: "Shopkeeper", line: "Great! Would you like to go to the market tomorrow?", opts: ["Yes, please. I'd like to go.", "No, thanks.", "I am the market."], ans: "Yes, please. I'd like to go." },
    { id: "k5", who: "Customer", line: "Would you like some peas?", opts: ["Yes, please. I'd like some peas.", "No, thanks.", "Peas grow on a tree."], ans: "Yes, please. I'd like some peas." },
    { id: "k6", who: "Shopkeeper", line: "Here you are. Would you like a pepper?", opts: ["No, thanks.", "Yes, please.", "Peppers are big."], ans: "Yes, please." },
    { id: "k7", who: "Customer", line: "Thank you! Would you like to pick strawberries?", opts: ["Yes, please. I'd like to pick strawberries.", "No, thanks.", "Strawberries grow in the ground."], ans: "Yes, please. I'd like to pick strawberries." },
    { id: "k8", who: "Shopkeeper", line: "Wonderful! Have a great day at the farm!", opts: ["Thank you! Goodbye!", "I want a tractor.", "Where is the moon?"], ans: "Thank you! Goodbye!" }
  ];
  const GAP = [
    { id: "g1", s: "Would you like ___ lemon?", opts: ["a", "an", "some"], ans: ["a"] },
    { id: "g2", s: "Would you like ___ orange?", opts: ["a", "an", "some"], ans: ["an"] },
    { id: "g3", s: "Would you like ___ grapes?", opts: ["a", "an", "some"], ans: ["some"] },
    { id: "g4", s: "I'd like ___ apple, please.", opts: ["a", "an", "some"], ans: ["an"] },
    { id: "g5", s: "I'd like ___ peas, please.", opts: ["a", "an", "some"], ans: ["some"] },
    { id: "g6", s: "Would you like ___ onion?", opts: ["a", "an", "some"], ans: ["an"] },
    { id: "g7", s: "Would you like to feed the lambs? — ___", opts: ["Yes, please.", "No, thanks.", "Good morning."], ans: ["Yes, please.", "No, thanks."] },
    { id: "g8", s: "Would you like a potato? — ___", opts: ["Yes, please.", "No, thanks.", "I am a potato."], ans: ["Yes, please.", "No, thanks."] }
  ];
  const WHO = ["Grandma", "my friend Tom", "my teacher", "my cousin Mia"];
  const WHEN = ["on Saturday", "on Sunday", "tomorrow", "after school"];
  const BANK = [
    { text: "Hello, Guardian! I am a Harvest Hero.", cat: "Greet" },
    { text: "I see a potato. It grows in the ground.", cat: "How it grows" },
    { text: "I see an orange. It grows on a tree.", cat: "How it grows" },
    { text: "I see some grapes. They grow on a vine.", cat: "How it grows" },
    { text: "I see a tomato. It grows on a bush.", cat: "How it grows" },
    { text: "Would you like a lemon?", cat: "Would you like…?" },
    { text: "Would you like an orange?", cat: "Would you like…?" },
    { text: "Would you like some grapes?", cat: "Would you like…?" },
    { text: "I'd like a potato, please.", cat: "I'd like…" },
    { text: "I'd like some peas, please.", cat: "I'd like…" },
    { text: "Would you like to feed the lambs?", cat: "Would you like to…?" },
    { text: "Would you like to pick strawberries?", cat: "Would you like to…?" },
    { text: "Would you like to ride on a tractor?", cat: "Would you like to…?" },
    { text: "Yes, please. Thank you, Guardian!", cat: "Thank you" }
  ];
  const CANDO = [
    "I can name 13 foods.",
    "I can say how food grows: on a tree, on a vine, on a bush, in the ground.",
    "I can ask: Would you like a / an / some…?",
    "I can say: I'd like…, please.",
    "I can invite: Would you like to + verb?"
  ];
  const MISSIONS = [
    { id: "sort", title: "Sort the Harvest", prod: false },
    { id: "read", title: "How Oranges Grow", prod: false },
    { id: "compare", title: "Potato vs Watermelon", prod: true },
    { id: "write", title: "Would You Like…?", prod: true },
    { id: "market", title: "Market Role-Play", prod: true },
    { id: "invite", title: "Party Invitation", prod: true },
    { id: "match", title: "Match Farm Activities", prod: false },
    { id: "drag", title: "Where Does It Grow?", prod: false },
    { id: "gap", title: "At the Harvest Feast", prod: false }
  ];
  const WARM_FOODS = ["potato", "lemon", "orange", "grapes", "watermelon", "pepper", "peas", "tomato"];
  const GUARDIAN_SPEECH = "Hello, Harvest Hero! I am the Seasonal Guardian. The gates to the Harvest Feast are closed. Collect three Keys of Growth, then invite me to the feast. Good luck!";

  function food(id) { return FOODS.find((f) => f.id === id); }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function same(a, b) { return String(a || "").replace(/\s+/g, " ").trim() === String(b || "").replace(/\s+/g, " ").trim(); }
  function esc(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function speak(text) {
    if (!("speechSynthesis" in window) || !text) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.82;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  function writeTarget(item) {
    const f = food(item.food);
    return item.type === "ask" ? "Would you like " + f.phrase + "?" : "I'd like " + f.phrase + ", please.";
  }
  function writeOptions(item) {
    const f = food(item.food);
    if (item.type === "ask") {
      return ["Would you like " + f.phrase + "?", "Would you like to " + f.phrase + "?", "I like " + f.phrase + "."];
    }
    return ["I'd like " + f.phrase + ", please.", "Would you like " + f.phrase + "?", "I'd like to " + f.phrase + "."];
  }

  function defaultOrders() {
    const read = {}, compare = {}, write = {}, market = {}, gap = {};
    READ.forEach((it) => { read[it.id] = shuffle(it.opts); });
    COMPARE.forEach((it) => { compare[it.id] = shuffle(it.opts); });
    WRITE.forEach((it) => { write[it.id] = shuffle(writeOptions(it)); });
    MARKET.forEach((it) => { market[it.id] = shuffle(it.opts); });
    GAP.forEach((it) => { gap[it.id] = shuffle(it.opts); });
    return {
      read, compare, write, market, gap,
      sortFoods: shuffle(FOODS.map((f) => f.id)).slice(0, 8),
      dragFoods: shuffle(FOODS.map((f) => f.id)).slice(0, 8),
      matchLeft: shuffle(VERBS.map((v) => v.verb)),
      matchRight: shuffle(VERBS.map((v) => v.verb)),
      who: shuffle(WHO), when: shuffle(WHEN),
      inviteFoods: shuffle(FOODS.slice(0, 6).map((f) => f.phrase)),
      inviteActs: shuffle(VERBS.slice(0, 4).map((v) => v.verb)),
      warmOrder: shuffle(WARM_FOODS.slice())
    };
  }

  function defaultState() {
    return {
      name: "",
      orders: defaultOrders(),
      warmSeen: [],
      warmQ: 0,
      warmScore: 0,
      warmDoneQ: false,
      sort: {},
      sortPick: null,
      drag: {},
      dragPick: null,
      read: {},
      readChecked: false,
      compare: {},
      compareChecked: false,
      write: {},
      writeOwn: "",
      market: {},
      marketChecked: false,
      invite: { who: "", when: "", food: "", act: "", own: "" },
      match: {},
      matchPick: null,
      gap: {},
      gapChecked: false,
      guard: [],
      guardOwn: "",
      cando: {}
    };
  }

  let state = defaultState();

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) || {};
      const base = defaultState();
      const savedOrders = saved.orders && typeof saved.orders === "object" ? saved.orders : {};
      state = Object.assign({}, base, saved);
      state.orders = Object.assign({}, base.orders, savedOrders);
      ["read", "compare", "write", "market", "gap"].forEach((k) => {
        state.orders[k] = Object.assign({}, base.orders[k] || {}, savedOrders[k] || {});
      });
      if (!Array.isArray(state.orders.sortFoods) || state.orders.sortFoods.length !== 8) state.orders.sortFoods = base.orders.sortFoods.slice();
      if (!Array.isArray(state.orders.dragFoods) || state.orders.dragFoods.length !== 8) state.orders.dragFoods = base.orders.dragFoods.slice();
      ["matchLeft","matchRight","who","when","inviteFoods","inviteActs","warmOrder"].forEach((k) => {
        if (!Array.isArray(state.orders[k]) || !state.orders[k].length) state.orders[k] = base.orders[k].slice();
      });
      state.sort = Object.assign({}, saved.sort || {});
      state.drag = Object.assign({}, saved.drag || {});
      state.read = Object.assign({}, saved.read || {});
      state.compare = Object.assign({}, saved.compare || {});
      state.write = Object.assign({}, saved.write || {});
      state.market = Object.assign({}, saved.market || {});
      state.invite = Object.assign({}, base.invite, saved.invite || {});
      state.match = Object.assign({}, saved.match || {});
      state.gap = Object.assign({}, saved.gap || {});
      state.cando = Object.assign({}, saved.cando || {});
      if (!Array.isArray(state.warmSeen)) state.warmSeen = [];
      if (!Array.isArray(state.guard)) state.guard = [];
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function sortDone() { return state.orders.sortFoods.every((id) => state.sort[id] === food(id).place); }
  function dragDone() { return state.orders.dragFoods.every((id) => state.drag[id] === food(id).place); }
  function readCount() { return state.readChecked ? READ.filter((it) => same(state.read[it.id], it.ans)).length : 0; }
  function readDone() { return state.readChecked && readCount() === READ.length; }
  function compareCount() { return state.compareChecked ? COMPARE.filter((it) => same(state.compare[it.id], it.ans)).length : 0; }
  function compareDone() { return state.compareChecked && compareCount() === COMPARE.length; }
  function writeCount() { return WRITE.filter((it) => same(state.write[it.id], writeTarget(it))).length; }
  function writeDone() { return writeCount() === WRITE.length; }
  function marketCount() { return state.marketChecked ? MARKET.filter((it) => same(state.market[it.id], it.ans)).length : 0; }
  function marketDone() { return state.marketChecked && marketCount() === MARKET.length; }
  function inviteDone() {
    const v = state.invite;
    return [v.who, v.when, v.food, v.act, v.own].filter(Boolean).length >= 4;
  }
  function matchDone() { return VERBS.every((v) => state.match[v.verb] === v.verb); }
  function gapOk(it) { return (it.ans || []).some((a) => same(state.gap[it.id], a)); }
  function gapCount() { return state.gapChecked ? GAP.filter(gapOk).length : 0; }
  function gapDone() { return state.gapChecked && gapCount() === GAP.length; }

  const DONE_FN = { sort: sortDone, read: readDone, compare: compareDone, write: writeDone, market: marketDone, invite: inviteDone, match: matchDone, drag: dragDone, gap: gapDone };
  function completedIds() { return MISSIONS.filter((m) => DONE_FN[m.id]()).map((m) => m.id); }
  function keyCount() {
    const done = completedIds();
    const prod = done.filter((id) => MISSIONS.find((m) => m.id === id).prod);
    let keys = Math.min(3, done.length);
    if (keys >= 3 && prod.length === 0) keys = 2;
    return keys;
  }
  function prodDone() { return completedIds().some((id) => MISSIONS.find((m) => m.id === id).prod); }

  function guardMeta() {
    const lines = state.guard;
    const grow = lines.some((s) => /grow/i.test(s));
    const like = lines.some((s) => /^Would you like a\b|^Would you like an\b|^Would you like some\b/i.test(s));
    const to = lines.some((s) => /^Would you like to\b/i.test(s));
    const idlike = lines.some((s) => /^I['’]d like\b/i.test(s));
    const ok = lines.length >= 6 && grow && like && to;
    return { grow, like, to, idlike, ok, n: lines.length };
  }

  function foodBtn(f, extra, pressed) {
    return '<button type="button" class="food-chip" data-id="' + f.id + '" aria-pressed="' + String(!!pressed) + '" ' + (extra || "") + ' style="--chip-bg:' + f.color + '"><span class="food-ico">' + f.icon + "</span> " + esc(f.phrase) + "</button>";
  }
  function optsHtml(options, value, attrs) {
    return '<div class="opts">' + options.map((op) =>
      '<button type="button" class="opt" ' + (attrs || "") + ' data-val="' + esc(op) + '" aria-pressed="' + String(same(value, op)) + '">' + esc(op) + "</button>"
    ).join("") + "</div>";
  }
  function basketsHtml(placed, pickAttr) {
    return PLACES.map((p) => {
      const items = Object.entries(placed).filter(([, pl]) => pl === p.place).map(([id]) => food(id));
      return '<button type="button" class="place-btn" data-place="' + esc(p.place) + '" ' + (pickAttr || "") + ' style="background:' + p.color + ';border-color:' + p.dark + '">' +
        '<strong style="color:' + p.dark + '">' + esc(p.place) + "</strong>" +
        '<span class="ex">' + esc(p.example) + "</span>" +
        '<div class="placed">' + items.map((f) => "<span>" + f.icon + " " + esc(f.name) + "</span>").join("") + "</div></button>";
    }).join("");
  }

  function renderChrome() {
    const k = keyCount();
    document.getElementById("keys-hud").innerHTML = "Keys of Growth: " + [0, 1, 2].map((i) => '<span class="key' + (i < k ? " on" : "") + '">🔑</span>').join("") + " " + k + " / 3" + (k >= 3 && prodDone() ? " · ready for the feast!" : k >= 3 && !prodDone() ? " · add a speaking/writing mission" : "");
    MISSIONS.forEach((m) => {
      const el = document.getElementById("m-" + m.id);
      if (el) el.classList.toggle("ok", DONE_FN[m.id]());
    });
    const nav = document.getElementById("mission-nav");
    nav.innerHTML = MISSIONS.map((m) =>
      '<a class="btn' + (DONE_FN[m.id]() ? " btn-green" : "") + '" href="#m-' + m.id + '">' + (DONE_FN[m.id]() ? "✓ " : "") + esc(m.title) + (m.prod ? " ✏️" : "") + "</a>"
    ).join("");
  }

  function renderWords() {
    document.getElementById("word-bank").innerHTML = FOODS.map((f) => foodBtn(f, 'data-word="1"')).join("");
    document.getElementById("word-bank").querySelectorAll("[data-word]").forEach((b) => {
      b.addEventListener("click", () => {
        const f = food(b.dataset.id);
        speak(f.name + ". " + f.fact);
      });
    });
    document.getElementById("place-legend").innerHTML = PLACES.map((p) =>
      '<div class="place-btn" style="background:' + p.color + ';border-color:' + p.dark + ';cursor:default"><strong style="color:' + p.dark + '">' + esc(p.place) + '</strong><span class="ex">' + esc(p.example) + "</span></div>"
    ).join("");
  }

  function renderWarm() {
    const foods = WARM_FOODS.map(food);
    document.getElementById("warm-foods").innerHTML = foods.map((f) => foodBtn(f, 'data-warm="1"', state.warmSeen.indexOf(f.id) >= 0)).join("");
    document.getElementById("warm-foods").querySelectorAll("[data-warm]").forEach((b) => {
      b.addEventListener("click", () => {
        const f = food(b.dataset.id);
        if (state.warmSeen.indexOf(f.id) < 0) state.warmSeen.push(f.id);
        speak(f.phrase + ". It grows " + f.place + ".");
        save(); renderWarm();
      });
    });
    document.getElementById("warm-explored").textContent = state.warmSeen.length + " / 8 foods explored";
    const qi = Math.min(state.warmQ, 3);
    const qFood = food(state.orders.warmOrder[qi] || WARM_FOODS[qi]);
    const boxQ = document.getElementById("warm-q");
    const boxO = document.getElementById("warm-opts");
    if (state.warmQ >= 4) {
      boxQ.textContent = "Warm-up complete! Score " + state.warmScore + " / 4. You are ready!";
      boxO.innerHTML = "";
    } else {
      boxQ.innerHTML = "Where does <strong>" + esc(qFood.phrase) + "</strong> grow?  Question " + (state.warmQ + 1) + " of 4.";
      boxO.innerHTML = PLACES.map((p) => '<button type="button" class="opt" data-place="' + esc(p.place) + '">' + esc(p.place) + "</button>").join("");
      boxO.querySelectorAll(".opt").forEach((b) => {
        b.addEventListener("click", () => {
          if (state.warmQ >= 4) return;
          const ok = b.dataset.place === qFood.place;
          if (ok) { state.warmScore += 1; speak("Correct!"); }
          state.warmQ += 1;
          save(); renderWarm();
        });
      });
    }
    document.getElementById("warm-score").textContent = "Score " + state.warmScore + " / 4";
  }

  function renderSort() {
    const left = state.orders.sortFoods.filter((id) => !state.sort[id]).map(food);
    document.getElementById("sort-foods").innerHTML = left.length
      ? left.map((f) => foodBtn(f, 'data-sort="1"', state.sortPick === f.id)).join("")
      : '<p class="score">All foods sorted!</p>';
    document.getElementById("sort-foods").querySelectorAll("[data-sort]").forEach((b) => {
      b.addEventListener("click", () => {
        state.sortPick = b.dataset.id;
        speak(food(b.dataset.id).phrase);
        save(); renderSort(); renderChrome();
      });
    });
    document.getElementById("sort-baskets").innerHTML = basketsHtml(state.sort, 'data-sort-place="1"');
    document.getElementById("sort-baskets").querySelectorAll("[data-sort-place]").forEach((b) => {
      b.addEventListener("click", () => {
        if (!state.sortPick) return;
        const f = food(state.sortPick);
        if (f.place === b.dataset.place) {
          state.sort[f.id] = f.place;
          speak(f.phrase + " grows " + f.place + ".");
          state.sortPick = null;
          save(); renderSort(); renderChrome(); renderFeast();
        }
      });
    });
    const n = Object.keys(state.sort).length;
    document.getElementById("sort-score").textContent = n + " / 8 foods sorted" + (sortDone() ? " · key progress saved" : "");
  }

  function renderDrag() {
    const left = state.orders.dragFoods.filter((id) => !state.drag[id]).map(food);
    const box = document.getElementById("drag-foods");
    box.innerHTML = left.length
      ? left.map((f) => foodBtn(f, 'data-drag="1" draggable="true"', state.dragPick === f.id)).join("")
      : '<p class="score">All foods placed!</p>';
    box.querySelectorAll("[data-drag]").forEach((b) => {
      b.addEventListener("click", () => { state.dragPick = b.dataset.id; save(); renderDrag(); });
      b.addEventListener("dragstart", () => { state.dragPick = b.dataset.id; });
    });
    document.getElementById("drag-baskets").innerHTML = basketsHtml(state.drag, 'data-drag-place="1"');
    document.getElementById("drag-baskets").querySelectorAll("[data-drag-place]").forEach((b) => {
      const place = (id) => {
        if (!id) return;
        const f = food(id);
        if (f && f.place === b.dataset.place) {
          state.drag[f.id] = f.place;
          speak(f.phrase + " grows " + f.place + ".");
          state.dragPick = null;
          save(); renderDrag(); renderChrome(); renderFeast();
        }
      };
      b.addEventListener("click", () => place(state.dragPick));
      b.addEventListener("dragover", (e) => e.preventDefault());
      b.addEventListener("drop", (e) => { e.preventDefault(); place(state.dragPick); });
    });
    document.getElementById("drag-score").textContent = Object.keys(state.drag).length + " / 8 foods placed" + (dragDone() ? " · key progress saved" : "");
  }

  function renderMc(list, ansMap, orders, checked, okfn, boxId, scoreId, label, checkFlag) {
    const box = document.getElementById(boxId);
    box.innerHTML = list.map((it, i) => {
      const val = ansMap[it.id] || "";
      const ok = checked && okfn(it);
      const bad = checked && !ok;
      const q = it.q || it.s || it.line || it.prompt;
      const who = it.who ? '<p class="kicker">' + esc(it.who) + "</p>" : '<p class="kicker">' + label + " " + (i + 1) + (it.prompt ? " · " + esc(it.prompt) : "") + "</p>";
      return '<article class="item' + (ok ? " ok" : "") + (bad ? " bad" : "") + '" data-id="' + it.id + '">' + who +
        '<p class="en">' + esc(q) + "</p>" +
        optsHtml(orders[it.id], val) +
        (checked ? '<p class="hint">' + (ok ? "Correct!" : "Try again.") + "</p>" : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        ansMap[b.closest(".item").dataset.id] = b.dataset.val;
        if (checkFlag === "compare") { state.compareChecked = false; speak(b.dataset.val); }
        if (checkFlag === "read") state.readChecked = false;
        if (checkFlag === "market") state.marketChecked = false;
        if (checkFlag === "gap") state.gapChecked = false;
        save();
        if (checkFlag === "read") renderRead();
        else if (checkFlag === "compare") renderCompare();
        else if (checkFlag === "market") renderMarket();
        else if (checkFlag === "gap") renderGap();
        renderChrome(); renderFeast();
      });
    });
  }

  function renderRead() {
    document.getElementById("read-story").innerHTML = STORY.map((s, i) =>
      '<p><button type="button" class="speak" data-line="' + i + '" aria-label="Listen">🔊</button> ' + esc(s) + "</p>"
    ).join("");
    document.getElementById("read-story").querySelectorAll("[data-line]").forEach((b) => {
      b.addEventListener("click", () => speak(STORY[+b.dataset.line]));
    });
    renderMc(READ, state.read, state.orders.read, state.readChecked, (it) => same(state.read[it.id], it.ans), "read-list", "read-score", "Question", "read");
    document.getElementById("read-score").textContent = state.readChecked ? "Score: " + readCount() + " / 6" + (readDone() ? " · well done!" : "") : "6 questions";
  }
  function renderCompare() {
    renderMc(COMPARE, state.compare, state.orders.compare, state.compareChecked, (it) => same(state.compare[it.id], it.ans), "compare-list", "compare-score", "Sentence", "compare");
    document.getElementById("compare-score").textContent = state.compareChecked ? "Score: " + compareCount() + " / 6" : "Choose 6 true sentences";
  }
  function renderWrite() {
    const box = document.getElementById("write-list");
    box.innerHTML = WRITE.map((it, i) => {
      const f = food(it.food);
      const target = writeTarget(it);
      const val = state.write[it.id] || "";
      const ok = same(val, target);
      return '<article class="item' + (val ? (ok ? " ok" : " bad") : "") + '" data-id="' + it.id + '">' +
        '<p class="kicker">' + (it.type === "ask" ? "Ask about" : "Say you want") + " " + esc(f.phrase) + "</p>" +
        optsHtml(state.orders.write[it.id], val) +
        (ok ? '<p class="hint">Correct! Now say it aloud.</p>' : "") +
        "</article>";
    }).join("");
    box.querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.closest(".item").dataset.id;
        const item = WRITE.find((w) => w.id === id);
        state.write[id] = b.dataset.val;
        if (same(b.dataset.val, writeTarget(item))) speak(b.dataset.val);
        save(); renderWrite(); renderChrome(); renderFeast();
      });
    });
    const own = document.getElementById("write-own");
    if (own.value !== state.writeOwn) own.value = state.writeOwn;
    document.getElementById("write-score").textContent = writeCount() + " / 8 sentences" + (writeDone() ? " · key progress saved" : "");
  }
  function renderMarket() {
    renderMc(MARKET, state.market, state.orders.market, state.marketChecked, (it) => same(state.market[it.id], it.ans), "market-list", "market-score", "Line", "market");
    document.getElementById("market-score").textContent = state.marketChecked ? "Score: " + marketCount() + " / 8" : "8 lines";
  }
  function renderGap() {
    renderMc(GAP, state.gap, state.orders.gap, state.gapChecked, gapOk, "gap-list", "gap-score", "Gap", "gap");
    document.getElementById("gap-score").textContent = state.gapChecked ? "Score: " + gapCount() + " / 8" : "8 gaps";
  }

  function renderInvite() {
    const v = state.invite;
    const blocks = [
      { key: "who", label: "1. Who?", opts: state.orders.who },
      { key: "when", label: "2. When?", opts: state.orders.when },
      { key: "food", label: "3. Food?", opts: state.orders.inviteFoods },
      { key: "act", label: "4. Activity?", opts: state.orders.inviteActs }
    ];
    document.getElementById("invite-build").innerHTML = '<div class="grid-2">' + blocks.map((b) =>
      '<div class="card"><p class="kicker">' + b.label + "</p>" + optsHtml(b.opts, v[b.key], 'data-inv="' + b.key + '"') + "</div>"
    ).join("") +
      '<div class="card" style="grid-column:1/-1"><p class="kicker">5. Your words</p>' +
      '<input type="text" id="invite-own" placeholder="e.g. I\'d like some strawberries, please!" value="' + esc(v.own) + '"></div></div>';
    document.getElementById("invite-build").querySelectorAll(".opt").forEach((b) => {
      b.addEventListener("click", () => {
        state.invite[b.dataset.inv] = b.dataset.val;
        save(); renderInvite(); renderChrome(); renderFeast();
      });
    });
    const own = document.getElementById("invite-own");
    own.addEventListener("input", () => { state.invite.own = own.value; save(); renderInvitePreview(); renderChrome(); renderFeast(); });
    renderInvitePreview();
  }
  function inviteLines() {
    const v = state.invite;
    return [
      v.who ? "Dear " + v.who + "," : "Dear friend,",
      v.when ? "Come to the Harvest Feast " + v.when + "!" : "Come to the Harvest Feast!",
      v.food ? "Would you like " + v.food + "?" : "Would you like some grapes?",
      v.act ? "Would you like to " + v.act + "?" : "Would you like to feed the lambs?",
      v.own || "Yes, please! See you at the farm!"
    ];
  }
  function renderInvitePreview() {
    const lines = inviteLines();
    document.getElementById("invite-preview").innerHTML =
      '<div class="invite-preview"><p class="kicker" style="color:#FDE68A">Harvest Feast Invitation</p>' +
      lines.map((l) => "<p>" + esc(l) + "</p>").join("") +
      '<p style="margin-top:.7rem"><button type="button" class="btn btn-gold" id="invite-read">🔊 Read my invitation</button></p>' +
      '<p class="sub" style="color:#FFF7ED">' + (inviteDone() ? "Invitation complete — key progress saved." : "Choose at least 4 parts, then read your invitation aloud.") + "</p></div>";
    document.getElementById("invite-read").addEventListener("click", () => speak(lines.join(" ")));
  }

  function renderMatch() {
    const left = state.orders.matchLeft;
    const right = state.orders.matchRight;
    const used = Object.values(state.match);
    const htmlL = left.map((v) => {
      const done = !!state.match[v];
      const picked = state.matchPick === v;
      return '<button type="button" class="match-btn' + (done ? " done" : picked ? " picked" : "") + '" data-left="' + esc(v) + '">Would you like to ' + esc(v) + "?</button>";
    }).join("");
    const htmlR = right.map((v) => {
      const done = used.indexOf(v) >= 0;
      return '<button type="button" class="match-btn' + (done ? " done" : "") + '" data-right="' + esc(v) + '">' + esc(v) + "</button>";
    }).join("");
    document.getElementById("match-grid").innerHTML = "<div>" + htmlL + "</div><div>" + htmlR + "</div>";
    document.getElementById("match-grid").querySelectorAll("[data-left]").forEach((b) => {
      b.addEventListener("click", () => {
        if (state.match[b.dataset.left]) return;
        state.matchPick = b.dataset.left;
        save(); renderMatch();
      });
    });
    document.getElementById("match-grid").querySelectorAll("[data-right]").forEach((b) => {
      b.addEventListener("click", () => {
        const pick = state.matchPick;
        if (!pick || state.match[pick]) return;
        if (pick === b.dataset.right) {
          state.match[pick] = pick;
          speak("Would you like to " + pick + "?");
          state.matchPick = null;
          save(); renderMatch(); renderChrome(); renderFeast();
        } else {
          b.classList.add("bad");
          setTimeout(() => b.classList.remove("bad"), 450);
        }
      });
    });
    const n = Object.keys(state.match).length;
    document.getElementById("match-score").textContent = n + " / 8 pairs" + (matchDone() ? " · key progress saved" : "");
  }

  function renderGuard() {
    const meta = guardMeta();
    const checks = [
      { ok: meta.grow, label: "Say how food grows (on a tree / vine / bush / in the ground)" },
      { ok: meta.like, label: "Ask: Would you like a / an / some…?" },
      { ok: meta.to, label: "Invite: Would you like to + verb?" },
      { ok: meta.idlike, label: "Bonus: I'd like a / an / some…, please." }
    ];
    document.getElementById("guard-checks").innerHTML = checks.map((c) =>
      '<p class="item' + (c.ok ? " ok" : "") + '">' + (c.ok ? "✓ " : "○ ") + esc(c.label) + "</p>"
    ).join("");
    document.getElementById("guard-count").textContent = String(meta.n);
    document.getElementById("guard-lines").innerHTML = state.guard.length
      ? state.guard.map((s, i) => "<li style='margin:.35rem 0;font-weight:800'>" + esc(s) + " <button type='button' class='speak' data-g='" + i + "'>🔊</button> <button type='button' class='speak' data-del='" + i + "' aria-label='Remove'>✕</button></li>").join("")
      : "<p class='sub'>Tap sentences below to build your invitation. You need at least 6 sentences.</p>";
    document.getElementById("guard-lines").querySelectorAll("[data-g]").forEach((b) => b.addEventListener("click", () => speak(state.guard[+b.dataset.g])));
    document.getElementById("guard-lines").querySelectorAll("[data-del]").forEach((b) => {
      b.addEventListener("click", () => { state.guard.splice(+b.dataset.del, 1); save(); renderGuard(); renderFeast(); });
    });
    document.getElementById("guard-bank").innerHTML = BANK.map((s) =>
      '<button type="button" class="chip' + (state.guard.indexOf(s.text) >= 0 ? " on" : "") + '" data-bank="' + esc(s.text) + '">' + esc(s.text) + " <small>" + esc(s.cat) + "</small></button>"
    ).join("");
    document.getElementById("guard-bank").querySelectorAll("[data-bank]").forEach((b) => {
      b.addEventListener("click", () => {
        if (state.guard.indexOf(b.dataset.bank) >= 0) return;
        state.guard.push(b.dataset.bank);
        speak(b.dataset.bank);
        save(); renderGuard(); renderFeast();
      });
    });
    const own = document.getElementById("guard-own");
    if (own.value !== state.guardOwn) own.value = state.guardOwn;
    document.getElementById("guard-ready").textContent = meta.ok
      ? "Perfect! You named food, said how it grows, and invited the Guardian. The feast is ready."
      : "Add " + Math.max(0, 6 - meta.n) + " more sentence(s). Include how food grows, Would you like a/an/some…, and Would you like to…";
  }

  function renderFeast() {
    const keys = keyCount();
    const g = guardMeta();
    const open = keys >= 3 && prodDone() && g.ok;
    document.getElementById("feast-title").textContent = open ? "The gates are open!" : "The gates are almost open";
    document.getElementById("feast-note").textContent = open
      ? "You are a true Harvest Hero. The Guardian is at the feast!"
      : "The feast is always open to visit. The certificate fills when you have 3 keys (including a speaking or writing mission) and a complete Guardian invitation. Now: " + keys + " / 3 keys" + (g.ok ? ", invitation ready" : ", invitation still in progress") + ".";
    document.getElementById("cando-list").innerHTML = CANDO.map((c) =>
      '<button type="button" data-cando="' + esc(c) + '" aria-pressed="' + String(!!state.cando[c]) + '">' + (state.cando[c] ? "✓ " : "○ ") + esc(c) + "</button>"
    ).join("");
    document.getElementById("cando-list").querySelectorAll("[data-cando]").forEach((b) => {
      b.addEventListener("click", () => { state.cando[b.dataset.cando] = !state.cando[b.dataset.cando]; save(); renderFeast(); });
    });
    const t = CANDO.filter((c) => state.cando[c]).length;
    document.getElementById("cando-score").textContent = t + " / 5 — " + (t === 5 ? "Amazing! You can do everything!" : t >= 3 ? "Great job, Harvest Hero!" : "Keep practising with Rules & Help!");
    const name = (state.name || "").trim();
    const inp = document.getElementById("hero-name");
    if (inp.value !== state.name) inp.value = state.name;
    document.getElementById("hero-line").textContent = name ? name + ", Harvest Hero!" : "Harvest Hero";
  }

  function renderHelp() {
    document.getElementById("help-body").innerHTML = RULES.map((r) =>
      '<article class="rule"><h3>' + esc(r.title) + "</h3><p class='sub'>" + esc(r.explain) + "</p>" +
      r.examples.map((e) => '<p class="example">' + esc(e) + " <button type='button' class='speak' data-ex='" + esc(e) + "'>🔊</button></p>").join("") +
      "<p class='note'>" + esc(r.answer) + "</p></article>"
    ).join("");
    document.getElementById("help-body").querySelectorAll("[data-ex]").forEach((b) => b.addEventListener("click", () => speak(b.dataset.ex)));
  }

  function openHelp(open) {
    const m = document.getElementById("help-modal");
    m.classList.toggle("open", open);
    m.setAttribute("aria-hidden", String(!open));
    if (open) document.getElementById("help-close").focus();
  }

  function renderAll() {
    renderChrome();
    renderWords();
    renderWarm();
    renderSort();
    renderRead();
    renderCompare();
    renderWrite();
    renderMarket();
    renderInvite();
    renderMatch();
    renderDrag();
    renderGap();
    renderGuard();
    renderFeast();
    renderHelp();
  }

  function init() {
    load();
    save();
    renderAll();
    document.getElementById("reset-btn").addEventListener("click", () => {
      if (!confirm("Начать заново? Все ответы на этом устройстве сотрутся.")) return;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
      state = defaultState();
      save(); renderAll();
    });
    document.getElementById("help-btn").addEventListener("click", () => openHelp(true));
    document.getElementById("help-btn-2").addEventListener("click", () => openHelp(true));
    document.getElementById("help-close").addEventListener("click", () => openHelp(false));
    document.querySelector("[data-close=help]").addEventListener("click", () => openHelp(false));
    document.getElementById("guardian-speak").addEventListener("click", () => speak(GUARDIAN_SPEECH));
    document.getElementById("read-btn").addEventListener("click", () => { state.readChecked = true; save(); renderRead(); renderChrome(); renderFeast(); });
    document.getElementById("compare-btn").addEventListener("click", () => { state.compareChecked = true; save(); renderCompare(); renderChrome(); renderFeast(); });
    document.getElementById("market-btn").addEventListener("click", () => { state.marketChecked = true; save(); renderMarket(); renderChrome(); renderFeast(); });
    document.getElementById("gap-btn").addEventListener("click", () => { state.gapChecked = true; save(); renderGap(); renderChrome(); renderFeast(); });
    document.getElementById("write-own").addEventListener("input", (e) => { state.writeOwn = e.target.value; save(); });
    document.getElementById("write-own-say").addEventListener("click", () => { if (state.writeOwn.trim()) speak(state.writeOwn); });
    document.getElementById("guard-own").addEventListener("input", (e) => { state.guardOwn = e.target.value; save(); });
    document.getElementById("guard-add").addEventListener("click", () => {
      const t = (state.guardOwn || "").trim();
      if (t.length > 3) { state.guard.push(t); speak(t); state.guardOwn = ""; save(); renderGuard(); renderFeast(); }
    });
    document.getElementById("guard-listen").addEventListener("click", () => { if (state.guard.length) speak(state.guard.join(" ")); });
    document.getElementById("hero-name").addEventListener("input", (e) => { state.name = e.target.value.slice(0, 28); save(); renderFeast(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
