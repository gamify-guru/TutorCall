(() => {
  "use strict";

  const STORAGE_KEY = "tutorcall-shattered-timeline-v1";
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const cap = (text) => text[0].toUpperCase() + text.slice(1);
  const opposite = (era) => (era === "past" ? "present" : "past");
  const toBe = (group, era) => (era === "past" ? (group === "many" ? "were" : "was") : ({ i: "am", one: "is", many: "are" })[group]);
  const beForms = ["am", "is", "are", "was", "were"];
  const PAST_TIMES = ["yesterday", "last Saturday"];
  const PRESENT_TIMES = ["today", "now"];
  const eraOf = (when) => (PAST_TIMES.includes(when) ? "past" : "present");

  const placeList = [
    { id: "cinema", name: "Cinema", word: "cinema" },
    { id: "library", name: "Library", word: "library" },
    { id: "pool", name: "Pool", word: "swimming pool" },
    { id: "centre", name: "Centre", word: "shopping centre" },
    { id: "hospital", name: "Hospital", word: "hospital" },
    { id: "cafe", name: "Café", word: "café" },
    { id: "station", name: "Station", word: "train station" },
    { id: "bank", name: "Bank", word: "bank" },
    { id: "supermarket", name: "Supermarket", word: "supermarket" },
    { id: "bus", name: "Bus Stop", word: "bus stop" }
  ];
  const places = Object.fromEntries(placeList.map((p) => [p.id, p]));
  const dictationOrder = ["cafe", "station", "cinema", "bus", "centre", "pool", "library", "hospital", "supermarket", "bank"];
  const word = (place) => places[place].word;

  const witnesses = [
    { id: "mia", name: "Mia", pronoun: "She", group: "one", past: ["cinema", "yesterday"], present: ["library", "today"] },
    { id: "leo", name: "Leo and Ben", pronoun: "They", group: "many", past: ["centre", "last Saturday"], present: ["pool", "now"] },
    { id: "ava", name: "Ava", pronoun: "She", group: "one", past: ["hospital", "yesterday"], present: ["cafe", "today"] },
    { id: "sam", name: "Sam", pronoun: "He", group: "one", past: ["station", "yesterday"], present: ["bank", "now"] },
    { id: "ella", name: "Oliver and Ella", pronoun: "They", group: "many", past: ["supermarket", "last Saturday"], present: ["bus", "today"] },
    { id: "nia", name: "Nia and I", pronoun: "We", group: "many", past: ["cafe", "yesterday"], present: ["cinema", "now"] }
  ];
  const people = Object.fromEntries(witnesses.map((p) => [p.id, p]));

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function same(a, b) {
    return normalise(a) === normalise(b);
  }
  function normalise(text) {
    return String(text || "")
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().replace(/\u2019/g, "'")
      .replace(/[^a-z0-9'\s]/g, " ")
      .replace(/\bcenter\b/g, "centre")
      .replace(/\s+/g, " ").trim();
  }
  function esc(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }

  function entry(id, era, options = {}) {
    const person = people[id];
    const [place, when] = person[era];
    const group = options.group || person.group;
    return {
      id: `${id}-${era}`,
      era, place, when, group,
      subject: options.subject || (options.pronoun ? person.pronoun : person.name),
      verb: toBe(group, era),
      context: options.context
    };
  }
  function sentence(item, verb = item.verb, when = item.when) {
    return `${item.subject} ${verb} at the ${word(item.place)}${when ? " " + when : ""}.`;
  }
  function timeMatch(id, era, options = {}) {
    return { ...entry(id, era, options), kind: "match", choices: [people[id].past[1], people[id].present[1]] };
  }
  function rebuild(id, era) {
    return { ...entry(id, era, { pronoun: true }), kind: "pair", given: sentence(entry(id, opposite(era))) };
  }
  function timeSwitch(subject, group, place, from, when, era) {
    return {
      kind: "change", subject, group, place, when, era, verb: toBe(group, era),
      given: sentence({ subject, place, when: from, verb: toBe(group, opposite(era)) })
    };
  }
  function timeFix(subject, group, place, wrong, when, era) {
    return {
      kind: "fix", subject, group, place, when, era, verb: toBe(group, era),
      given: sentence({ subject, place, when, verb: wrong })
    };
  }

  const tasks = {
    dictation: {
      title: "City Word Intercept", nav: "City Word Intercept", tag: "Warm-up / Dictation",
      done: "Vocabulary logged. Use it to read the city clues.",
      items: dictationOrder.map((place) => ({ kind: "word", place }))
    },
    signals: {
      title: "Signals from the Square", nav: "Signals from the Square", tag: "Mission 01 / Choose",
      done: "Mia, Leo, Ben and Ava are back on the timeline.",
      items: [entry("mia", "past"), entry("mia", "present", { pronoun: true }), entry("leo", "past"), entry("leo", "present", { pronoun: true }), entry("ava", "past"), entry("ava", "present", { subject: "I", group: "i", context: "Ava says:" })].map((item) => ({ ...item, kind: "select" }))
    },
    statements: {
      title: "Witness Statements", nav: "Witness Statements", tag: "Mission 02 / Fill the gap",
      done: "The statements are back in the case file.",
      items: [entry("sam", "past"), entry("sam", "present", { pronoun: true }), entry("ella", "past"), entry("ella", "present", { pronoun: true }), entry("nia", "past"), entry("nia", "present", { pronoun: true })].map((item) => ({ ...item, kind: "type" }))
    },
    sort: {
      title: "Sort the Time Chips", nav: "Sort the Time Chips", tag: "Mission 03 / Match",
      done: "Every record has its time label again.",
      items: [timeMatch("sam", "past"), timeMatch("ella", "present"), timeMatch("ava", "present"), timeMatch("leo", "past"), timeMatch("nia", "past", { subject: "I", group: "i", context: "Nia says:" }), timeMatch("mia", "present")]
    },
    pairs: {
      title: "Rebuild the Pairs", nav: "Rebuild the Pairs", tag: "Mission 04 / Build a sentence",
      done: "Past and present are linked for all six witnesses.",
      items: [rebuild("mia", "present"), rebuild("leo", "past"), rebuild("ava", "past"), rebuild("sam", "present"), rebuild("ella", "past"), rebuild("nia", "present")]
    },
    report: {
      title: "Timeline Report", nav: "Timeline Report", tag: "Final mission / Report",
      done: "Report filed. Read it aloud to close your case."
    },
    switch: {
      title: "Switch the Time", nav: "A. Switch the time", tag: "Assignment A / Transform",
      done: "All six sentences have switched time correctly.",
      items: [
        timeSwitch("Clara", "one", "library", "today", "yesterday", "past"),
        timeSwitch("Max and Noor", "many", "station", "yesterday", "now", "present"),
        timeSwitch("I", "i", "bank", "now", "yesterday", "past"),
        timeSwitch("We", "many", "hospital", "last Saturday", "today", "present"),
        timeSwitch("You", "many", "supermarket", "today", "last Saturday", "past"),
        timeSwitch("Ruby", "one", "cinema", "yesterday", "today", "present")
      ]
    },
    fix: {
      title: "Fix Glitch’s Errors", nav: "B. Fix the errors", tag: "Assignment B / Edit",
      done: "All six errors have been repaired.",
      items: [
        timeFix("Dad", "one", "bus", "were", "yesterday", "past"),
        timeFix("We", "many", "centre", "is", "now", "present"),
        timeFix("I", "i", "pool", "is", "today", "present"),
        timeFix("Emma", "one", "cafe", "are", "today", "present"),
        timeFix("They", "many", "cinema", "was", "last Saturday", "past"),
        timeFix("You", "many", "library", "was", "yesterday", "past")
      ]
    },
    write: {
      title: "Your Own Witness File", nav: "C. Write a witness file", tag: "Assignment C / Write",
      done: "Your six sentences use the right forms and times. Share your file with your teacher.",
      items: ["past", "present", "past", "present", "past", "present"].map((era, index) => ({ kind: "write", era, person: Math.floor(index / 2) + 1 }))
    }
  };

  for (const task of Object.values(tasks)) {
    task.items?.forEach((item, index) => { item.id = "q" + (index + 1); });
  }

  const caseIds = ["dictation", "signals", "statements", "sort", "pairs", "report"];
  const homeIds = ["switch", "fix", "write"];
  const taskIds = [...caseIds, ...homeIds];

  function reportItems(ids) {
    return ids.flatMap((id) => ["past", "present"].map((era) => ({
      ...entry(id, era, { pronoun: era === "present" }),
      kind: "select"
    })));
  }
  const allReportItems = reportItems(witnesses.map((p) => p.id));
  const vocabHtml = dictationOrder.map(word).join(" · ");

  function defaultOrders() {
    const verbs = {};
    const chips = {};
    const assignVerbs = (taskId, items) => {
      verbs[taskId] = {};
      items.forEach((item) => { verbs[taskId][item.id] = shuffle(beForms); });
    };
    assignVerbs("signals", tasks.signals.items);
    assignVerbs("report", allReportItems);
    tasks.sort.items.forEach((item) => { chips[item.id] = shuffle(item.choices.slice()); });
    return { verbs, chips };
  }

  function defaultState() {
    return {
      answers: {},
      checks: {},
      seals: [],
      picked: [],
      wordBank: false,
      filed: false,
      orders: defaultOrders()
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
      state.orders = { verbs: Object.assign({}, base.orders.verbs, savedOrders.verbs || {}), chips: Object.assign({}, base.orders.chips, savedOrders.chips || {}) };
      state.orders.verbs.signals = Object.assign({}, base.orders.verbs.signals, (savedOrders.verbs || {}).signals || {});
      state.orders.verbs.report = Object.assign({}, base.orders.verbs.report, (savedOrders.verbs || {}).report || {});
      if (Array.isArray(saved.seals)) state.seals = [...new Set(saved.seals.filter((s) => places[s]))];
      if (Array.isArray(saved.picked)) state.picked = [...new Set(saved.picked.filter((id) => people[id]))].slice(0, 4);
      state.wordBank = saved.wordBank === true;
      state.filed = saved.filed === true && state.picked.length >= 3;
      state.answers = {};
      state.checks = {};
      for (const id of taskIds) {
        const itemSet = tasks[id].items || allReportItems;
        for (const item of itemSet) {
          const answer = saved.answers?.[id]?.[item.id];
          if (typeof answer === "string") (state.answers[id] ||= {})[item.id] = answer.slice(0, 240);
          if (["correct", "missing", "retry"].includes(saved.checks?.[id]?.[item.id])) {
            (state.checks[id] ||= {})[item.id] = assess(item, state.answers[id]?.[item.id] || "").status;
          }
        }
      }
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  const itemsFor = (id) => (id === "report" ? reportItems(state.picked) : tasks[id].items);
  const answerFor = (id, key) => state.answers[id]?.[key] || "";
  const statusFor = (id, key) => state.checks[id]?.[key] || "";
  const allCorrect = (id) => itemsFor(id).length > 0 && itemsFor(id).every((item) => statusFor(id, item.id) === "correct");
  const taskDone = (id) => allCorrect(id) && (id !== "report" || (state.filed && state.picked.length >= 3));

  const good = (message = "Correct.") => ({ status: "correct", message });
  const retry = (message) => ({ status: "retry", message });
  const eraTip = (era) => (era === "past" ? "A past time needs was or were." : "A present time needs am, is or are.");
  const subjectTip = (item) => `Check which form goes with ${item.subject}.`;

  function assess(item, raw) {
    if (!String(raw || "").trim()) {
      return { status: "missing", message: item.kind === "match" ? "Choose a time label." : "Add an answer to check this clue." };
    }
    const value = normalise(raw);
    if (item.kind === "word") {
      const expected = word(item.place);
      return value.replace(/^the\s+/, "") === normalise(expected) ? good("Place logged.") : retry("Check the spelling.");
    }
    if (item.kind === "match") {
      return value === normalise(item.when) ? good("Time restored: " + item.when + ".") : retry(`Look at '${item.verb}'. Is it a past or present form?`);
    }
    if (item.kind === "select" || item.kind === "type") {
      if (value === item.verb) return good();
      if (!beForms.includes(value)) return retry("Use one form: am, is, are, was or were.");
      return retry(["was", "were"].includes(value) !== (item.era === "past") ? eraTip(item.era) : subjectTip(item));
    }
    if (item.kind === "write") return assessWriting(item, value);
    const straight = normalise(sentence(item));
    const fronted = `${normalise(item.when)} ${normalise(sentence(item, item.verb, ""))}`;
    if (value === straight || value === fronted) return good("Sentence restored.");
    const verb = value.split(" ").find((part) => beForms.includes(part));
    if (!verb) return retry("Write a full sentence with am, is, are, was or were.");
    if (!value.includes(normalise(item.when))) return retry(`Use the time clue '${item.when}'.`);
    if (["was", "were"].includes(verb) !== (item.era === "past")) return retry(eraTip(item.era));
    if (verb !== item.verb) return retry(subjectTip(item));
    return retry("Keep the subject and use at the + the place from the clue.");
  }

  function assessWriting(item, value) {
    const timePattern = "last saturday|yesterday|today|now";
    const before = value.match(new RegExp("^(" + timePattern + ")\\s+"));
    const after = value.match(new RegExp("\\s+(" + timePattern + ")$"));
    const time = before?.[1] || after?.[1];
    const required = item.era === "past" ? "yesterday or last Saturday" : "today or now";
    if (!time || (before && after) || /^(yesterday|last saturday)$/.test(time) !== (item.era === "past")) {
      return retry(`Use ${required} at the start or end.`);
    }
    const body = before ? value.slice(before[0].length) : value.slice(0, -after[0].length);
    const parts = body.match(/^(.+?)\s+(am|is|are|was|were)\s+(at|in)\s+(.+)$/);
    if (!parts || /^(the|a|an)$/.test(parts[4])) return retry("Use a subject + a full form of to be + at or in + a place.");
    const [, subject, verb] = parts;
    const plural = /^(we|you|they)$|\band\b|\b(friends|parents|grandparents|children|kids|siblings|brothers|sisters|cousins|aunts|uncles|daughters|sons|classmates|neighbours|neighbors)$/.test(subject);
    const group = subject === "i" ? "i" : plural ? "many" : "one";
    if (["was", "were"].includes(verb) !== (item.era === "past")) return retry(eraTip(item.era));
    return verb === toBe(group, item.era) ? good("Time and verb match. Ask your teacher to check your idea.") : retry("Check whether your subject is I, one person, or more than one.");
  }

  function number(n) { return String(n).padStart(2, "0"); }
  function timeWord(when, era) { return `<strong class="time-word" data-era="${era}">${esc(when)}</strong>`; }

  function verbOptions(taskId, item) {
    const list = state.orders.verbs[taskId]?.[item.id] || beForms;
    return `<option value="">...</option>` + list.map((v) => `<option value="${esc(v)}">${esc(v)}</option>`).join("");
  }

  function rowMarkup(task, item, index) {
    const label = number(index + 1);
    const key = `${task}-${item.id}`;
    const feedback = `${key}-feedback`;
    const context = item.context ? `<span class="clue-context">${esc(item.context)}</span>` : "";
    let content;
    if (item.kind === "word") {
      content = `<label class="sr-only" for="${key}">Place ${label}</label><input id="${key}" class="field word-field" data-answer="${item.id}" aria-describedby="${feedback}" placeholder="Type a place" maxlength="45" autocomplete="off" spellcheck="false" autocapitalize="none">`;
    } else if (item.kind === "select" || item.kind === "type") {
      const cue = `${item.context || ""} ${item.subject} at the ${word(item.place)} ${item.when}`.trim();
      const attr = `id="${key}" class="field verb-field" data-answer="${item.id}" aria-label="Form of to be: ${esc(cue)}" aria-describedby="${feedback}"`;
      const field = item.kind === "select"
        ? `<select ${attr}>${verbOptions(task, item)}</select>`
        : `<input ${attr} placeholder="..." maxlength="12" autocomplete="off" spellcheck="false" autocapitalize="none">`;
      content = `<div class="clue-main">${context}<span>${item.context ? "“" : ""}${esc(item.subject)}</span>${field}<span>at the ${esc(word(item.place))} ${timeWord(item.when, item.era)}.${item.context ? "”" : ""}</span></div>`;
    } else if (item.kind === "match") {
      const choices = (state.orders.chips[item.id] || item.choices).map((when) =>
        `<button type="button" class="time-chip" data-time="${esc(when)}" data-era="${eraOf(when)}" aria-pressed="false">${esc(cap(when))}</button>`
      ).join("");
      content = `<div class="clue-main">${context}<span id="${key}">${item.context ? "“" : ""}${esc(item.subject)} <b>${esc(item.verb)}</b> at the ${esc(word(item.place))}.${item.context ? "”" : ""}</span><div class="time-choices" role="group" aria-labelledby="${key}" aria-describedby="${feedback}">${choices}</div></div>`;
    } else {
      let prompt = "";
      let cue = "";
      if (item.kind === "write") {
        prompt = `Witness ${item.person} / ${item.era === "past" ? "Past" : "Present"}`;
        cue = item.era === "past" ? "Where were they yesterday or last Saturday?" : "Where are they today or now?";
      } else {
        prompt = item.given;
        if (item.kind === "pair") cue = `${item.subject} / at the ${word(item.place)} / ${item.when}`;
        if (item.kind === "change") cue = "New time: " + item.when;
      }
      content = `<label class="clue-label" for="${key}">${esc(prompt)}</label>${cue ? `<span class="clue-cue" id="${key}-cue">${cue}</span>` : ""}<textarea class="field sentence-field" data-answer="${item.id}" id="${key}" aria-describedby="${feedback}" rows="2" maxlength="240" placeholder="Write the full sentence" autocomplete="off" autocapitalize="sentences" spellcheck="${item.kind === "write"}"></textarea>`;
    }
    return `<li class="clue" data-clue="${item.id}"><span class="clue-number" aria-hidden="true">${label}</span><div class="clue-content">${content}<p class="row-feedback" id="${feedback}"></p></div></li>`;
  }

  function setAnswer(id, key, value) {
    const item = itemsFor(id).find((clue) => clue.id === key);
    if (!item || answerFor(id, key) === value) return;
    const answers = state.answers[id] ||= {};
    if (value) answers[key] = value;
    else delete answers[key];
    if (state.checks[id]) delete state.checks[id][key];
    if (id === "report") state.filed = false;
    save();
    paintRow(id, item);
    paintSummary(id);
    paintNav();
  }

  function paintRow(id, item) {
    const form = $(`form[data-task="${id}"]`);
    if (!form) return;
    const row = $(`[data-clue="${item.id}"]`, form);
    if (!row) return;
    const status = statusFor(id, item.id);
    const value = answerFor(id, item.id);
    row.dataset.result = status;
    $$("[data-time]", row).forEach((chip) => chip.setAttribute("aria-pressed", String(value === chip.dataset.time)));
    const field = $("[data-answer]", row);
    if (field && field.value !== value) field.value = value;
    if (field) {
      if (status === "retry" || status === "missing") field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
    }
    const feedback = $(".row-feedback", row);
    if (status) {
      const result = assess(item, value);
      feedback.textContent = result.message;
    } else feedback.textContent = "";
  }

  function paintSummary(id) {
    const form = $(`form[data-task="${id}"]`);
    if (!form) return;
    const items = itemsFor(id);
    const statuses = items.map((item) => statusFor(id, item.id));
    const correct = statuses.filter((s) => s === "correct").length;
    const checked = statuses.some(Boolean);
    const complete = taskDone(id);
    const isReport = id === "report";
    const canCheck = !isReport || state.picked.length >= 3;
    const summary = $("[data-summary]", form);
    const checkBtn = $("[type=submit]", form);
    let message = "";
    if (checked && canCheck) {
      const count = `${correct} of ${items.length} ${id === "write" ? "match the form and time" : "correct"}.`;
      const detail = complete ? tasks[id].done : correct === items.length ? "Check and file this set to finish." :
        statuses.includes("missing") ? "Fill in the remaining clues and try again." : "Use the clues and try again when you are ready.";
      message = `${count} ${detail}`;
    } else if (isReport && state.picked.length < 3) {
      message = "Pick at least 3 witnesses to file the report.";
    }
    summary.textContent = message;
    summary.classList.toggle("good", complete);
    if (checkBtn) checkBtn.disabled = !canCheck;
    if (id === "dictation") $("#word-bank-dictation").hidden = !state.wordBank;
    $$(".lookup-bank").forEach((el) => { el.hidden = !state.wordBank; });
    if (isReport) $("#report-document").hidden = !complete;
    const mission = $("#m-" + id);
    if (mission) mission.classList.toggle("ok", complete);
  }

  function checkTask(id) {
    const items = itemsFor(id);
    if (id === "report" && state.picked.length < 3) return;
    const newSeals = [];
    const earnsSeals = true;
    const results = {};
    const answers = state.answers[id] ||= {};
    const checks = state.checks[id] ||= {};
    const form = $(`form[data-task="${id}"]`);
    if (form) {
      $$("[data-answer]", form).forEach((field) => {
        if (field.value) answers[field.dataset.answer] = field.value;
        else delete answers[field.dataset.answer];
      });
    }
    for (const item of items) {
      const result = assess(item, answerFor(id, item.id));
      results[item.id] = result.status;
      checks[item.id] = result.status;
      if (earnsSeals && result.status === "correct" && item.place && !state.seals.includes(item.place)) {
        state.seals.push(item.place);
        newSeals.push(item.place);
      }
      paintRow(id, item);
    }
    if (id === "dictation" && items.every((item) => results[item.id] !== "missing")) state.wordBank = true;
    if (id === "report") state.filed = allCorrect(id);
    save();
    paintSummary(id);
    paintNav();
    paintStability();
    paintLookups();
    if (id === "report") renderReportDoc();
  }

  function paintLookups() {
    $$(".lookup-bank").forEach((el) => {
      el.hidden = !state.wordBank;
      el.innerHTML = state.wordBank ? `<strong>Look up a city place</strong><p>${esc(vocabHtml)}</p>` : "";
    });
    $("#word-bank-text").textContent = vocabHtml;
    $("#word-bank-dictation").hidden = !state.wordBank;
  }

  function paintStability() {
    const count = state.seals.length;
    const percent = Math.round((count / placeList.length) * 100);
    $("#seal-count").textContent = `${count} / ${placeList.length} seals`;
    $("#stability-percent").textContent = `${percent}%`;
    $("#stability-fill").style.width = `${percent}%`;
    const meter = $("#stability-meter");
    meter.setAttribute("aria-valuenow", String(percent));
    meter.setAttribute("aria-valuetext", `${count} of ${placeList.length} seals recovered`);
    $$(".seal").forEach((seal) => {
      const earned = state.seals.includes(seal.dataset.place);
      seal.dataset.earned = String(earned);
      const status = earned ? "Recovered" : "Not yet recovered";
      seal.title = `${places[seal.dataset.place].name}: ${status}`;
    });
  }

  function paintNav() {
    $$("[data-view]").forEach((btn) => {
      const done = taskDone(btn.dataset.view);
      btn.dataset.done = String(done);
      btn.classList.toggle("btn-gold", done);
    });
    const started = caseIds.some((id) => Object.keys(state.answers[id] || {}).length > 0) || state.seals.length > 0;
    $("#begin-case").textContent = caseIds.every(taskDone) ? "Review investigation" : started ? "Continue investigation" : "Start investigation";
  }

  function renderSeals() {
    $("#city-seals").innerHTML = placeList.map((p) =>
      `<li class="seal" data-place="${p.id}"><span aria-hidden="true">◆</span><span>${esc(p.name)}</span></li>`
    ).join("");
  }
  function renderNav() {
    $("#mission-nav").innerHTML = caseIds.map((id) =>
      `<a class="btn" data-view="${id}" href="#m-${id}">${esc(tasks[id].nav)}</a>`
    ).join("");
    $("#home-nav").innerHTML = homeIds.map((id) =>
      `<a class="btn" data-view="${id}" href="#m-${id}">${esc(tasks[id].nav)}</a>`
    ).join("");
    taskIds.forEach((id) => {
      const tag = $("#tag-" + id);
      if (tag) tag.textContent = tasks[id].tag;
    });
  }

  function renderTask(id) {
    if (id === "report") return renderReport();
    const list = $("#list-" + id);
    if (!list) return;
    list.innerHTML = tasks[id].items.map((item, index) => rowMarkup(id, item, index)).join("");
    const form = $(`form[data-task="${id}"]`);
    $$("[data-answer]", form).forEach((field) => { field.value = answerFor(id, field.dataset.answer); });
    tasks[id].items.forEach((item) => paintRow(id, item));
    paintSummary(id);
  }

  function renderReport() {
    $("#pick-label").textContent = `${state.picked.length} / 4 selected · pick at least 3`;
    $("#witness-picker").innerHTML = witnesses.map((person) => {
      const picked = state.picked.includes(person.id);
      return `<button class="witness-pick" type="button" data-pick="${person.id}" aria-pressed="${picked}">${esc(person.name)}</button>`;
    }).join("");
    const rows = $("#report-rows");
    rows.innerHTML = state.picked.map((id) =>
      `<fieldset class="report-witness"><legend>${esc(people[id].name)}</legend><ol class="clues">${reportItems([id]).map((item, i) => rowMarkup("report", item, i)).join("")}</ol></fieldset>`
    ).join("");
    const form = $('form[data-task="report"]');
    $$("[data-answer]", form).forEach((field) => { field.value = answerFor("report", field.dataset.answer); });
    itemsFor("report").forEach((item) => paintRow("report", item));
    paintSummary("report");
    renderReportDoc();
  }

  function renderReportDoc() {
    if (!taskDone("report")) { $("#report-document").hidden = true; return; }
    $("#report-text").innerHTML = state.picked.map((id) =>
      `<li>${esc(reportItems([id]).map((item) => sentence(item)).join(" "))}</li>`
    ).join("");
    $("#report-document").hidden = false;
  }

  function pickWitness(id) {
    const index = state.picked.indexOf(id);
    if (index >= 0) state.picked.splice(index, 1);
    else if (state.picked.length < 4) state.picked.push(id);
    else {
      $("#pick-label").textContent = "Four selected. Deselect one to choose a different witness.";
      return;
    }
    state.filed = false;
    save();
    renderReport();
    paintNav();
  }

  function renderAll() {
    renderSeals();
    renderNav();
    caseIds.concat(homeIds).forEach((id) => { if (id !== "report") renderTask(id); });
    renderReport();
    paintLookups();
    paintStability();
    paintNav();
  }

  function openGrammar(open) {
    const m = $("#grammar-modal");
    m.classList.toggle("open", open);
    m.setAttribute("aria-hidden", String(!open));
    if (open) $("#grammar-close").focus();
  }

  function init() {
    load();
    if (!state.orders.chips || !Object.keys(state.orders.chips).length) state.orders = defaultOrders();
    save();
    renderAll();

    document.addEventListener("submit", (e) => {
      const form = e.target.closest("form[data-task]");
      if (!form) return;
      e.preventDefault();
      checkTask(form.dataset.task);
    });
    document.addEventListener("input", (e) => {
      const field = e.target.closest("[data-answer]");
      if (!field) return;
      const form = field.closest("form[data-task]");
      if (form) setAnswer(form.dataset.task, field.dataset.answer, field.value);
    });
    document.addEventListener("change", (e) => {
      const field = e.target.closest("[data-answer]");
      if (!field) return;
      const form = field.closest("form[data-task]");
      if (form) setAnswer(form.dataset.task, field.dataset.answer, field.value);
    });
    document.addEventListener("click", (e) => {
      const chip = e.target.closest(".time-chip");
      if (chip) {
        const form = chip.closest("form[data-task]");
        const row = chip.closest("[data-clue]");
        if (form && row) setAnswer(form.dataset.task, row.dataset.clue, chip.dataset.time);
        return;
      }
      const pick = e.target.closest("[data-pick]");
      if (pick) { pickWitness(pick.dataset.pick); return; }
    });

    $("#reset-btn").addEventListener("click", () => {
      if (!confirm("Начать заново? Все ответы на этом устройстве сотрутся.")) return;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      state = defaultState();
      save();
      renderAll();
    });
    $("#grammar-btn").addEventListener("click", () => openGrammar(true));
    $("#grammar-close").addEventListener("click", () => openGrammar(false));
    $("#grammar-modal").addEventListener("click", (e) => { if (e.target.id === "grammar-modal") openGrammar(false); });
    $("#copy-report").addEventListener("click", async () => {
      if (!taskDone("report")) return;
      const text = "Timeline Report\n" + state.picked.map((id) => reportItems([id]).map((item) => sentence(item)).join(" ")).join("\n");
      try {
        if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(text); return; }
      } catch (e) {}
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
