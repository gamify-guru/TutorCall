(() => {
  "use strict";

  const STORAGE_KEY = "tutorcall-shadow-school-agnes-notes-v1";
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const QUESTIONS = {
    key: { number: "01", title: "Who received the spare key?", short: "The spare key", startLead: "No witness admitted taking it.", classLead: "Agnes names Mr Abernathy. His earlier report now needs another look.", homeworkLead: "The key ledger adds one unclear word: “RETURNED?”" },
    ghosts: { number: "02", title: "Why were there three ghosts — or one?", short: "Three ghosts — or one", startLead: "Three voices, three shadows, one figure?", classLead: "Echoes and lamp positions may explain the number three.", homeworkLead: "Agnes made three shadows with one hand and two lamps." },
    eye: { number: "03", title: "Whose was the eye-symbol note?", short: "The eye-symbol note", startLead: "No one claimed the strange handwriting.", classLead: "The note was in Theo’s notebook, but its writer is unknown.", homeworkLead: "A second, older eye sketch makes Theo’s story more likely." }
  };

  const WITNESSES = {
    voss: { name: "Professor Voss", role: "Science teacher", reports: 2, photo: "voss", alt: "Professor Voss, the science teacher, holding a Shadow School ledger." },
    theo: { name: "Theo Hale", role: "Student · Library", reports: 2, photo: "theo", alt: "Theo Hale, a student in a Shadow School hoodie, standing in a corridor of lockers." },
    abernathy: { name: "Mr Abernathy", role: "Caretaker", reports: 2, photo: "abernathy", alt: "Mr Abernathy, the caretaker, holding a book called Secrets of Shadow School." },
    lila: { name: "Lila Moreau", role: "Student · Music room", reports: 1, photo: "lila", alt: "Lila Moreau, a student in a school blazer with a Witness badge." }
  };

  const REPORTS = [
    { id: "r1", witness: "voss", no: "Report 01", time: "16:00 · Laboratory", text: "At 4:00 I closed my ink bottle and left the laboratory. I wrote no more notes." },
    { id: "r2", witness: "voss", no: "Report 02", time: "16:03 · West corridor", text: "I saw one tall shadow beside the storage-room window. Only one." },
    { id: "r3", witness: "theo", no: "Report 03", time: "16:08 · Library", text: "My blue notebook was in my bag all afternoon. The eye-symbol paper was not mine." },
    { id: "r4", witness: "theo", no: "Report 04", time: "16:12 · Library", text: "At 4:12 I heard three knocks while I was still in the library." },
    { id: "r5", witness: "abernathy", no: "Report 05", time: "15:45 · Caretaker’s office", text: "The spare key was on my hook at 3:45. I never received it after that, and I never signed it out." },
    { id: "r6", witness: "abernathy", no: "Report 06", time: "16:09 · Storage room", text: "The storage lock is small. The large archive key could never fit it." },
    { id: "r7", witness: "lila", no: "Report 07", time: "16:05 · Music room", text: "I heard three thin voices near the music room, then one knock. I saw nobody." }
  ];

  const NOTES = [
    { id: "n1", title: "The key tag", date: "Tuesday · 4:10 p.m.", match: "key", useful: ["key"], parts: [
      { t: "The west corridor was " }, { id: "n1a", t: "too dark", grammar: true, candidate: true },
      { t: " to read the tag on the spare key. I walked " }, { id: "n1d1", t: "very quietly", candidate: true },
      { t: " to the office. I gave the key to " }, { t: "Mr Abernathy", bold: true },
      { t: ". He said the lock was " }, { id: "n1b", t: "small enough", grammar: true, candidate: true },
      { t: " for the cabinet, but not for the archive door. He put the key in his " }, { id: "n1d2", t: "brown coat", candidate: true },
      { t: " pocket." }
    ]},
    { id: "n2", title: "One shadow?", date: "Tuesday · 4:12 p.m.", match: "ghosts", useful: ["ghosts"], parts: [
      { t: "I heard three knocks, but there was only one shadow on the frosted glass. The lamps stood " }, { id: "n2d1", t: "almost together", candidate: true },
      { t: ". One lamp was " }, { id: "n2a", t: "too close", grammar: true, candidate: true },
      { t: " to the wall. If the lamps are " }, { id: "n2b", t: "far enough apart", grammar: true, candidate: true },
      { t: ", one person can make three shadows. Lila’s three voices may have been echoes. I must test this " }, { id: "n2d2", t: "very soon", candidate: true },
      { t: "." }
    ]},
    { id: "n3", title: "The folded eye", date: "Tuesday · 4:15 p.m.", match: "eye", useful: ["eye"], parts: [
      { t: "The note with the eye was folded inside " }, { t: "Theo’s blue notebook", bold: true },
      { t: ". The paper was " }, { id: "n3a", t: "too thin", grammar: true, candidate: true },
      { t: " to be from the office. The writing looked " }, { id: "n3b", t: "neat enough", grammar: true, candidate: true },
      { t: " to be Professor Voss’s, but he always crosses his capital I. This note does not. The ink smelled " }, { id: "n3d1", t: "rather strange", candidate: true },
      { t: ", like the library dust." }
    ]},
    { id: "n4", title: "Four movements", date: "Tuesday · 4:18 p.m.", match: "key", useful: ["key", "ghosts"], parts: [
      { t: "Voss left the lab at 4:00. Lila reached the music room at 4:05. Mr Abernathy had " }, { id: "n4a", t: "enough time", grammar: true, candidate: true },
      { t: " to reach the storage room before 4:10. Theo stayed in the library until 4:12. Then the three knocks stopped " }, { id: "n4d1", t: "all at once", candidate: true },
      { t: ". The timeline is " }, { id: "n4d2", t: "really odd", candidate: true },
      { t: ": one person could move the key, but could one person make every sound?" }
    ]}
  ];

  const DETAILS = [
    { id: "d1", text: "Received the spare key from Agnes", answer: "abernathy" },
    { id: "d2", text: "Heard three voices near the music room", answer: "lila" },
    { id: "d3", text: "Owned the blue notebook with the folded note", answer: "theo" },
    { id: "d4", text: "Always crosses a capital I", answer: "voss" }
  ];

  const HOME_NOTES = [
    { id: "h1", time: "4:00", title: "The closed ink bottle", text: "Professor Voss closed his ink bottle. The lab was quiet enough to hear the clock.", witness: "voss", relation: "supports", question: "eye" },
    { id: "h2", time: "4:05", title: "One note, three times", text: "Lila practised one note three times. The corridor was too empty for three separate singers.", witness: "lila", relation: "explains", question: "ghosts" },
    { id: "h3", time: "4:09", title: "The key ledger", text: "Mr Abernathy signed the key ledger: SPARE — RETURNED? The last word was too faint to read.", witness: "abernathy", relation: "challenges", question: "key" },
    { id: "h4", time: "4:11", title: "An older eye", text: "Theo found a second eye sketch under his notebook. This one was old enough to crumble.", witness: "theo", relation: "supports", question: "eye" },
    { id: "h5", time: "4:14", title: "The lamp test", text: "I tested the lamps. With two lamps, my one hand made three shadows. Three shadows are not proof of three ghosts.", witness: "voss", relation: "explains", question: "ghosts", asideOnly: true }
  ];

  const GRAMMAR_QUESTIONS = [
    { id: "g1", options: ["The ink was too faint to read.", "The ink was enough faint to read."], answer: "The ink was too faint to read." },
    { id: "g2", options: ["Lila was enough careful to hear the echo.", "Lila was careful enough to hear the echo."], answer: "Lila was careful enough to hear the echo." },
    { id: "g3", options: ["The key was too small for the archive door.", "The key was small too for the archive door."], answer: "The key was too small for the archive door." },
    { id: "g4", options: ["Voss did not write clearly enough.", "Voss did not write enough clearly."], answer: "Voss did not write clearly enough." },
    { id: "g5", options: ["There were many too shadows for one lamp.", "There were too many shadows for one lamp."], answer: "There were too many shadows for one lamp." },
    { id: "g6", options: ["The lock was enough small for the cabinet.", "The lock was small enough for the cabinet."], answer: "The lock was small enough for the cabinet." }
  ];

  const CONCLUSIONS = [
    { id: "key", options: ["Theo received the key and hid it in the library.", "Mr Abernathy received the key, but we do not know if it was returned.", "Nobody touched the spare key after 3:45."], answer: "Mr Abernathy received the key, but we do not know if it was returned." },
    { id: "ghosts", options: ["Three sounds and shadows are not proof of three ghosts; echoes and lamps may explain them.", "There were exactly three ghosts because Lila heard three voices.", "There was no sound and no shadow in the storage room."], answer: "Three sounds and shadows are not proof of three ghosts; echoes and lamps may explain them." },
    { id: "eye", options: ["Theo certainly wrote both eye-symbol notes.", "Professor Voss wrote the note because his writing is neat.", "The note was in Theo’s notebook, but its writer is still unknown."], answer: "The note was in Theo’s notebook, but its writer is still unknown." }
  ];

  const CLUES = [
    { id: "c1", mission: "Class · Note 01", question: "key", title: "A name for the spare key", text: "Agnes wrote that she gave the spare key to Mr Abernathy. This challenges his Report 05." },
    { id: "c2", mission: "Class · Note 02", question: "ghosts", title: "Three knocks, one shadow", text: "Three knocks did not match three visible figures. Only one shadow appeared on the glass." },
    { id: "c3", mission: "Class · Note 03", question: "eye", title: "The note’s hiding place", text: "The eye-symbol note was folded inside Theo Hale’s blue notebook." },
    { id: "c4", mission: "Class · Grammar search", question: "ghosts", title: "Lamps and echoes matter", text: "A lamp was too close to the wall. Lamps far enough apart can make extra shadows, and voices may echo." },
    { id: "c5", mission: "Class · Evidence check", question: "eye", title: "The missing line in capital I", text: "Professor Voss crosses his capital I. The eye-symbol note does not, so his handwriting is uncertain." },
    { id: "c6", mission: "Class · Witness links", question: "key", title: "A possible route to the storage room", text: "Abernathy had enough time to reach the storage room before 4:10. Theo stayed in the library until 4:12." },
    { id: "c7", mission: "Homework · 4:09", question: "key", title: "SPARE — RETURNED?", text: "Abernathy signed the key ledger. The final word is too faint to read, so a return is not confirmed." },
    { id: "c8", mission: "Homework · 4:05", question: "ghosts", title: "One note repeated three times", text: "Lila practised a single note three times. This may explain her earlier report of three thin voices." },
    { id: "c9", mission: "Homework · 4:11", question: "eye", title: "A second, older eye sketch", text: "An old eye sketch was under Theo’s notebook. It supports his statement that the paper was not his." },
    { id: "c10", mission: "Homework · 4:14", question: "ghosts", title: "The two-lamp experiment", text: "Agnes used one hand and two lamps to make three shadows. The number three is no longer proof of three ghosts." }
  ];

  const CLUE_BY_TASK = { match: ["c1", "c2", "c3"], highlight: ["c4"], useful: ["c5"], links: ["c6"], sort: ["c7", "c8", "c9", "c10"] };
  const GRAMMAR_IDS = NOTES.flatMap((n) => n.parts.filter((p) => p.grammar).map((p) => p.id));
  const QIDS = Object.keys(QUESTIONS);
  const RELATIONS = ["supports", "challenges", "explains"];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function esc(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }
  function sameSet(a, b) {
    return a.length === b.length && a.every((item) => b.includes(item));
  }
  function portrait(id, extraClass, imgId) {
    const w = WITNESSES[id];
    const iid = imgId ? ` id="${imgId}"` : "";
    return `<picture><source srcset="images/${w.photo}.webp" type="image/webp"><img class="${extraClass || "portrait"}"${iid} src="images/${w.photo}.jpg" width="784" height="1168" alt="${esc(w.alt)}"></picture>`;
  }
  function notePlainText(note) {
    return note.parts.map((p) => p.t).join("");
  }
  function speak(text) {
    try {
      if (!window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-GB";
      u.rate = 0.88;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  function defaultOrders() {
    const grammar = {};
    const conclusions = {};
    GRAMMAR_QUESTIONS.forEach((q) => { grammar[q.id] = shuffle(q.options); });
    CONCLUSIONS.forEach((q) => { conclusions[q.id] = shuffle(q.options); });
    return { grammar, conclusions, sort: shuffle(HOME_NOTES.map((n) => n.id)) };
  }

  function defaultState() {
    return {
      classAnswers: { match: {}, highlights: [], useful: {}, links: {} },
      classChecked: { match: false, highlight: false, useful: false, links: false },
      homeworkAnswers: { grammar: {}, reportLinks: {}, conclusions: {} },
      homeworkChecked: { sort: false, grammar: false, reportLinks: false, conclusions: false },
      clues: [],
      selectedDetail: null,
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
      const so = saved.orders && typeof saved.orders === "object" ? saved.orders : {};
      state = Object.assign({}, base, saved);
      state.orders = {
        grammar: Object.assign({}, base.orders.grammar, so.grammar || {}),
        conclusions: Object.assign({}, base.orders.conclusions, so.conclusions || {}),
        sort: Array.isArray(so.sort) && so.sort.length === 5 && HOME_NOTES.every((n) => so.sort.includes(n.id)) ? so.sort.slice() : base.orders.sort.slice()
      };
      state.classAnswers = {
        match: Object.assign({}, saved.classAnswers && saved.classAnswers.match),
        highlights: Array.isArray(saved.classAnswers && saved.classAnswers.highlights) ? saved.classAnswers.highlights.slice() : [],
        useful: Object.assign({}, saved.classAnswers && saved.classAnswers.useful),
        links: Object.assign({}, saved.classAnswers && saved.classAnswers.links)
      };
      state.classChecked = Object.assign({}, base.classChecked, saved.classChecked || {});
      state.homeworkAnswers = {
        grammar: Object.assign({}, saved.homeworkAnswers && saved.homeworkAnswers.grammar),
        reportLinks: Object.assign({}, saved.homeworkAnswers && saved.homeworkAnswers.reportLinks),
        conclusions: Object.assign({}, saved.homeworkAnswers && saved.homeworkAnswers.conclusions)
      };
      state.homeworkChecked = Object.assign({}, base.homeworkChecked, saved.homeworkChecked || {});
      state.clues = Array.isArray(saved.clues) ? saved.clues.filter((id) => CLUES.some((c) => c.id === id)) : [];
      state.selectedDetail = null;
    } catch (e) { state = defaultState(); }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); $("#saveLabel").textContent = "Saved in this browser"; }
    catch (e) { $("#saveLabel").textContent = "Save unavailable"; }
  }

  const classDoneCount = () => Object.values(state.classChecked).filter(Boolean).length;
  const homeworkDoneCount = () => Object.values(state.homeworkChecked).filter(Boolean).length;

  function addClues(ids) { state.clues = [...new Set([...state.clues, ...ids])]; }

  function leadFor(id) {
    const q = QUESTIONS[id];
    if (state.homeworkChecked.conclusions || state.homeworkChecked.sort) return q.homeworkLead;
    if (classDoneCount() === 4) return q.classLead;
    return q.startLead;
  }

  function renderQuestions() {
    $("#questionGrid").innerHTML = QIDS.map((id) => {
      const q = QUESTIONS[id];
      const n = state.clues.filter((c) => CLUES.find((x) => x.id === c).question === id).length;
      return `<article class="q-card"><span class="pill">${q.number}</span><h3>${esc(q.title)}</h3><p>${esc(leadFor(id))}</p><p class="tip">${n} Agnes ${n === 1 ? "clue" : "clues"} · still open</p></article>`;
    }).join("");
  }

  function renderWitnesses() {
    $("#witnessRow").innerHTML = Object.keys(WITNESSES).map((id, i) => {
      const w = WITNESSES[id];
      const imgId = i === 0 ? "img-voss" : id === "theo" ? "img-theo" : id === "abernathy" ? "img-abernathy" : "img-lila";
      return `<a class="person-card" href="#rep-${id}">${portrait(id, "portrait", imgId)}<div class="person-meta"><strong>${esc(w.name)}</strong><span>${esc(w.role)} · ${w.reports} ${w.reports === 1 ? "report" : "reports"}</span></div></a>`;
    }).join("");
  }

  function renderReports() {
    $("#reportGrid").innerHTML = REPORTS.map((r) => {
      const w = WITNESSES[r.witness];
      return `<article class="report-card" id="rep-${r.id}"><div id="${r.id === "r1" ? "rep-voss" : r.id === "r3" ? "rep-theo" : r.id === "r5" ? "rep-abernathy" : r.id === "r7" ? "rep-lila" : ""}">${portrait(r.witness)}</div><div class="report-body"><p class="report-meta">${esc(r.no)} · ${esc(r.time)}</p><strong>${esc(w.name)}</strong><blockquote>“${esc(r.text)}”</blockquote></div></article>`;
    }).join("");
  }

  function renderNotes() {
    const checked = state.classChecked.highlight;
    const selected = state.classAnswers.highlights;
    $("#noteStack").innerHTML = NOTES.map((note, i) => {
      const body = note.parts.map((p) => {
        if (p.candidate) {
          const on = selected.includes(p.id);
          let cls = on ? "on" : "";
          if (checked && on && p.grammar) cls = "hit";
          else if (checked && on && !p.grammar) cls = "miss";
          else if (checked && !on && p.grammar) cls = "";
          return `<span data-phrase="${p.id}" class="${cls}">${esc(p.t)}</span>`;
        }
        return p.bold ? `<b>${esc(p.t)}</b>` : esc(p.t);
      }).join("");
      return `<article class="note-card" id="note-${note.id}"><p class="note-date">0${i + 1} · ${esc(note.date)}</p><h4>${esc(note.title)}</h4><p class="note-body">${body}</p><div class="actions"><button type="button" class="btn" data-listen="${note.id}">Listen</button></div></article>`;
    }).join("");
    const hits = selected.filter((id) => GRAMMAR_IDS.includes(id)).length;
    $("#highlightCount").textContent = `${selected.length} phrases selected · ${hits} correct targets found so far`;
  }

  function renderMatch() {
    const answers = state.classAnswers.match;
    const checked = state.classChecked.match;
    $("#matchList").innerHTML = NOTES.map((note, i) => {
      const value = answers[note.id] || "";
      let row = "";
      if (checked && value) row = value === note.match ? "ok" : "bad";
      const opts = QIDS.map((id) => `<option value="${id}" ${value === id ? "selected" : ""}>${esc(QUESTIONS[id].short)}</option>`).join("");
      return `<div class="match-row ${row}"><div><strong>0${i + 1} · ${esc(note.title)}</strong><p class="sub">${esc(notePlainText(note).slice(0, 90))}…</p></div><select class="field" data-match="${note.id}" aria-label="Open question for ${esc(note.title)}"><option value="">Choose a question…</option>${opts}</select></div>`;
    }).join("");
  }

  function renderUseful() {
    const answers = state.classAnswers.useful;
    const checked = state.classChecked.useful;
    const head = `<tr><th>Agnes’s note</th>${QIDS.map((q) => `<th>${esc(QUESTIONS[q].short)}</th>`).join("")}</tr>`;
    const body = NOTES.map((note, i) => {
      const cells = QIDS.map((q) => {
        const selected = (answers[note.id] || []).includes(q);
        const should = note.useful.includes(q);
        let cls = selected ? "on" : "";
        if (checked) {
          if (should && selected) cls = "ok";
          else if (selected && !should) cls = "bad";
          else if (!selected && should) cls = "bad";
          else cls = "";
        }
        return `<td><button class="toggle ${cls}" type="button" data-useful-note="${note.id}" data-question="${q}" aria-pressed="${selected}" aria-label="${esc(note.title)}: useful for ${esc(QUESTIONS[q].short)}?">${selected ? "✓" : "·"}</button></td>`;
      }).join("");
      return `<tr><td>0${i + 1} · ${esc(note.title)}</td>${cells}</tr>`;
    }).join("");
    $("#usefulTable").innerHTML = `<table class="matrix"><thead>${head}</thead><tbody>${body}</tbody></table>`;
  }

  function renderLinks() {
    const answers = state.classAnswers.links;
    const checked = state.classChecked.links;
    const unassigned = DETAILS.filter((d) => !answers[d.id]);
    const chip = (d) => `<button class="chip ${state.selectedDetail === d.id ? "on" : ""}" type="button" draggable="true" data-detail="${d.id}">${esc(d.text)}</button>`;
    $("#detailTray").innerHTML = unassigned.length ? unassigned.map(chip).join("") : `<span class="tip">All four details have a witness.</span>`;
    $("#linkStatus").textContent = `${unassigned.length} detail${unassigned.length === 1 ? "" : "s"} waiting to be connected.`;
    $("#witnessDrops").innerHTML = Object.keys(WITNESSES).map((id) => {
      const w = WITNESSES[id];
      const assigned = DETAILS.filter((d) => answers[d.id] === id);
      let extra = "";
      if (checked) extra = assigned.length && assigned.every((d) => d.answer === id) ? "ok" : assigned.length ? "bad" : "bad";
      return `<div class="drop-card ${extra}" data-drop="${id}">${portrait(id, "thumb")}<strong>${esc(w.name)}</strong><p class="sub">${esc(w.role)}</p><div class="drop-zone" data-assign="${id}">${assigned.length ? assigned.map(chip).join("") : "<span class='tip'>Drop or tap here</span>"}</div></div>`;
    }).join("");
  }

  function renderSort() {
    const order = state.orders.sort;
    const checked = state.homeworkChecked.sort;
    $("#sortList").innerHTML = order.map((id, index) => {
      const note = HOME_NOTES.find((n) => n.id === id);
      const right = HOME_NOTES[index].id === id;
      const cls = checked ? (right ? "ok" : "bad") : "";
      const time = checked ? `<span class="time">${esc(note.time)}</span>` : "";
      return `<article class="sort-item ${cls}" draggable="true" data-sort-id="${id}"><span aria-hidden="true">☰</span><p><strong>${esc(note.title)}:</strong> ${esc(note.text)}${time}</p><span><button class="btn" type="button" data-move="${id}" data-dir="-1" ${index === 0 ? "disabled" : ""} aria-label="Move ${esc(note.title)} earlier">↑</button> <button class="btn" type="button" data-move="${id}" data-dir="1" ${index === order.length - 1 ? "disabled" : ""} aria-label="Move ${esc(note.title)} later">↓</button></span></article>`;
    }).join("");
  }

  function renderGrammarHW() {
    const answers = state.homeworkAnswers.grammar;
    const checked = state.homeworkChecked.grammar;
    $("#grammarList").innerHTML = GRAMMAR_QUESTIONS.map((q, i) => {
      const selected = answers[q.id] || "";
      const opts = (state.orders.grammar[q.id] || q.options).map((option) => {
        let cls = selected === option ? "selected" : "";
        if (checked && selected === option) cls = option === q.answer ? "ok" : "bad";
        return `<button class="opt ${cls}" type="button" data-grammar="${q.id}" data-option="${esc(option)}" aria-pressed="${selected === option}">${esc(option)}</button>`;
      }).join("");
      return `<fieldset class="gq"><legend>0${i + 1} · Choose one sentence</legend><div>${opts}</div></fieldset>`;
    }).join("");
  }

  function renderReportLinks() {
    const notes = HOME_NOTES.filter((n) => !n.asideOnly);
    const answers = state.homeworkAnswers.reportLinks;
    const checked = state.homeworkChecked.reportLinks;
    $("#reportLinkList").innerHTML = notes.map((note) => {
      const value = answers[note.id] || {};
      const ok = checked && value.witness === note.witness && value.relation === note.relation;
      const cls = checked ? (ok ? "ok" : "bad") : "";
      const wopts = Object.keys(WITNESSES).map((id) => `<option value="${id}" ${value.witness === id ? "selected" : ""}>${esc(WITNESSES[id].name)}</option>`).join("");
      const ropts = RELATIONS.map((rel) => `<option value="${rel}" ${value.relation === rel ? "selected" : ""}>${rel[0].toUpperCase() + rel.slice(1)}</option>`).join("");
      return `<article class="link-row ${cls}">${portrait(value.witness || "voss", "portrait")}<div><p><strong>${esc(note.time)} · ${esc(note.title)}</strong><br>${esc(note.text)}</p><div class="actions"><label>Connects to <select class="field" data-report-witness="${note.id}"><option value="">Choose witness…</option>${wopts}</select></label><label>Effect on report <select class="field" data-report-relation="${note.id}"><option value="">Choose effect…</option>${ropts}</select></label></div></div></article>`;
    }).join("");
    // The portrait before select is a bit awkward if no witness chosen — show a generic first? Better: show portrait only when witness selected, otherwise skip image or show blank card. If no witness, I used voss as fallback which is wrong.
  }

  function renderConclusions() {
    const answers = state.homeworkAnswers.conclusions;
    const checked = state.homeworkChecked.conclusions;
    $("#conclusionList").innerHTML = CONCLUSIONS.map((item) => {
      const q = QUESTIONS[item.id];
      const selected = answers[item.id] || "";
      const opts = (state.orders.conclusions[item.id] || item.options).map((option) => {
        let cls = selected === option ? "selected" : "";
        if (checked && selected === option) cls = option === item.answer ? "ok" : "bad";
        return `<button class="opt ${cls}" type="button" data-conclusion="${item.id}" data-option="${esc(option)}" aria-pressed="${selected === option}">${esc(option)}</button>`;
      }).join("");
      return `<article class="conclusion"><h4>${esc(q.title)}</h4><div>${opts}</div></article>`;
    }).join("");
  }

  function renderClues() {
    const filed = CLUES.filter((c) => state.clues.includes(c.id));
    $("#clueCount").textContent = `${filed.length} Agnes ${filed.length === 1 ? "clue" : "clues"} filed`;
    $("#clueList").innerHTML = filed.length
      ? filed.map((c) => `<article class="clue-card"><p class="clue-src">${esc(c.mission)} · ${esc(QUESTIONS[c.question].short)}</p><h4>${esc(c.title)}</h4><p>${esc(c.text)}</p></article>`).join("")
      : `<p class="tip">No new clues filed yet. Complete a Class Mission task to add Agnes’s first note.</p>`;
  }

  function renderProgress() {
    const c = classDoneCount();
    const h = homeworkDoneCount();
    $("#classProgressText").textContent = `${c} / 4 tasks`;
    $("#classProgressFill").style.width = `${(c / 4) * 100}%`;
    $("#homeworkProgressText").textContent = `${h} / 4 tasks`;
    $("#homeworkProgressFill").style.width = `${(h / 4) * 100}%`;
    ["match", "highlight", "useful", "links"].forEach((id) => $("#task-" + id).classList.toggle("ok", state.classChecked[id]));
    ["sort", "grammar", "reportLinks", "conclusions"].forEach((id) => $("#task-" + id).classList.toggle("ok", state.homeworkChecked[id]));
    const started = c > 0 || h > 0 || Object.keys(state.classAnswers.match).length;
    $("#continueBtn").textContent = c === 4 && h === 4 ? "Review the investigation" : started ? "Continue the investigation" : "Begin the class investigation";
  }

  function score(id, text, good) {
    const el = $("#score-" + id);
    el.textContent = text;
    el.classList.toggle("good", !!good);
  }

  function checkClass(task) {
    if (task === "match") {
      const answers = state.classAnswers.match;
      if (NOTES.some((n) => !answers[n.id])) { score("match", "Choose a question for every note before you check."); return; }
      const right = NOTES.filter((n) => answers[n.id] === n.match).length;
      const ok = right === 4;
      score("match", ok ? "All four notes are matched. Three new clues have been added to the Case File." : `${right} of 4 matches are correct. Read the object or event in each note, then try again.`, ok);
      state.classChecked.match = ok;
      if (ok) addClues(CLUE_BY_TASK.match);
    } else if (task === "highlight") {
      const selected = state.classAnswers.highlights;
      const hits = selected.filter((id) => GRAMMAR_IDS.includes(id)).length;
      const ok = sameSet(selected, GRAMMAR_IDS);
      score("highlight", ok ? "Exactly right: 7 phrases. The lamp clue is now filed under the ghost question." : `You found ${hits} of 7 correct phrases and selected ${selected.length - hits} distractions. Check every note and include the whole phrase.`, ok);
      state.classChecked.highlight = ok;
      if (ok) addClues(CLUE_BY_TASK.highlight);
    } else if (task === "useful") {
      const answers = state.classAnswers.useful;
      let cells = 0;
      NOTES.forEach((n) => QIDS.forEach((q) => { if ((answers[n.id] || []).includes(q) === n.useful.includes(q)) cells++; }));
      const ok = cells === 12;
      score("useful", ok ? "The evidence map is complete. The handwriting detail is now in the Case File." : `${cells} of 12 evidence decisions are correct. Note 04 connects to both the key and the ghost question.`, ok);
      state.classChecked.useful = ok;
      if (ok) addClues(CLUE_BY_TASK.useful);
    } else if (task === "links") {
      const answers = state.classAnswers.links;
      if (Object.keys(answers).length < 4) { score("links", "Connect all four details to witnesses before you check."); return; }
      const right = DETAILS.filter((d) => answers[d.id] === d.answer).length;
      const ok = right === 4;
      score("links", ok ? "Every detail is back with the right witness. The timeline clue has been filed." : `${right} of 4 connections are correct. Compare the object, place, and handwriting detail.`, ok);
      state.classChecked.links = ok;
      if (ok) addClues(CLUE_BY_TASK.links);
    }
    save(); renderAll();
  }

  function checkHomework(task) {
    if (task === "sort") {
      const order = state.orders.sort;
      const right = order.filter((id, index) => HOME_NOTES[index].id === id).length;
      const ok = right === 5;
      score("sort", ok ? "The timeline is complete. Four new homework clues have been added to the Case File." : `${right} of 5 notes are in the correct position. The lamp test is the final event; the closed ink bottle is the first.`, ok);
      state.homeworkChecked.sort = ok;
      if (ok) addClues(CLUE_BY_TASK.sort);
    } else if (task === "grammar") {
      const answers = state.homeworkAnswers.grammar;
      if (GRAMMAR_QUESTIONS.some((q) => !answers[q.id])) { score("grammar", "Choose one sentence in every pair before you check."); return; }
      const right = GRAMMAR_QUESTIONS.filter((q) => answers[q.id] === q.answer).length;
      const ok = right === GRAMMAR_QUESTIONS.length;
      score("grammar", ok ? "All six sentences are correct. Your field notebook is clear enough to file." : `${right} of ${GRAMMAR_QUESTIONS.length} sentences are correct. Check whether enough describes an adjective or a noun.`, ok);
      state.homeworkChecked.grammar = ok;
    } else if (task === "reportLinks") {
      const notes = HOME_NOTES.filter((n) => !n.asideOnly);
      const answers = state.homeworkAnswers.reportLinks;
      if (!notes.every((n) => answers[n.id]?.witness && answers[n.id]?.relation)) { score("reportLinks", "Choose a witness and an effect for every note."); return; }
      const right = notes.filter((n) => answers[n.id].witness === n.witness && answers[n.id].relation === n.relation).length;
      const ok = right === 4;
      score("reportLinks", ok ? "All four comparisons are correct. You separated supporting evidence from a contradiction." : `${right} of 4 comparisons are fully correct. Look again at who signed the ledger and who practised the music.`, ok);
      state.homeworkChecked.reportLinks = ok;
    } else if (task === "conclusions") {
      const answers = state.homeworkAnswers.conclusions;
      if (CONCLUSIONS.some((q) => !answers[q.id])) { score("conclusions", "Choose a conclusion for each open question."); return; }
      const right = CONCLUSIONS.filter((q) => answers[q.id] === q.answer).length;
      const ok = right === 3;
      score("conclusions", ok ? "Excellent: every conclusion follows the evidence without guessing. The updated Case File is ready." : `${right} of 3 conclusions are supported. Be careful with words like “certainly” and “exactly”—the notes do not prove everything.`, ok);
      state.homeworkChecked.conclusions = ok;
    }
    save(); renderAll();
  }

  function moveSort(id, dir) {
    if (state.homeworkChecked.sort) return;
    const order = state.orders.sort.slice();
    const i = order.indexOf(id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= order.length) return;
    [order[i], order[j]] = [order[j], order[i]];
    state.orders.sort = order;
    state.homeworkChecked.sort = false;
    save(); renderSort();
  }

  function renderReportLinksFixed() {
    const notes = HOME_NOTES.filter((n) => !n.asideOnly);
    const answers = state.homeworkAnswers.reportLinks;
    const checked = state.homeworkChecked.reportLinks;
    $("#reportLinkList").innerHTML = notes.map((note) => {
      const value = answers[note.id] || {};
      const ok = checked && value.witness === note.witness && value.relation === note.relation;
      const cls = checked ? (ok ? "ok" : "bad") : "";
      const wopts = Object.keys(WITNESSES).map((id) => `<option value="${id}" ${value.witness === id ? "selected" : ""}>${esc(WITNESSES[id].name)}</option>`).join("");
      const ropts = RELATIONS.map((rel) => `<option value="${rel}" ${value.relation === rel ? "selected" : ""}>${rel[0].toUpperCase() + rel.slice(1)}</option>`).join("");
      const pic = value.witness ? portrait(value.witness, "portrait") : `<div class="portrait" style="background:#1A2434"></div>`;
      return `<article class="link-row ${cls}">${pic}<div><p><strong>${esc(note.time)} · ${esc(note.title)}</strong><br>${esc(note.text)}</p><div class="actions"><label>Connects to <select class="field" data-report-witness="${note.id}"><option value="">Choose witness…</option>${wopts}</select></label><label>Effect on report <select class="field" data-report-relation="${note.id}"><option value="">Choose effect…</option>${ropts}</select></label></div></div></article>`;
    }).join("");
  }

  function renderAll() {
    renderQuestions();
    renderWitnesses();
    renderReports();
    renderNotes();
    renderMatch();
    renderUseful();
    renderLinks();
    renderSort();
    renderGrammarHW();
    renderReportLinksFixed();
    renderConclusions();
    renderClues();
    renderProgress();
  }

  function openGrammar(open) {
    const m = $("#grammar-modal");
    m.classList.toggle("open", open);
    m.setAttribute("aria-hidden", String(!open));
    if (open) $("#grammar-close").focus();
  }

  function init() {
    load();
    if (!state.orders || !state.orders.sort) state.orders = defaultOrders();
    save();
    renderAll();

    document.addEventListener("click", (e) => {
      const listen = e.target.closest("[data-listen]");
      if (listen) {
        const note = NOTES.find((n) => n.id === listen.dataset.listen);
        if (note) speak(`${note.title}. ${notePlainText(note)}. Agnes.`);
        return;
      }
      const phrase = e.target.closest("[data-phrase]");
      if (phrase) {
        const id = phrase.dataset.phrase;
        const set = new Set(state.classAnswers.highlights);
        if (set.has(id)) set.delete(id); else set.add(id);
        state.classAnswers.highlights = [...set];
        state.classChecked.highlight = false;
        save(); renderNotes(); $("#highlightCount").textContent = `${state.classAnswers.highlights.length} phrases selected · ${state.classAnswers.highlights.filter((x) => GRAMMAR_IDS.includes(x)).length} correct targets found so far`;
        return;
      }
      const useful = e.target.closest("[data-useful-note]");
      if (useful) {
        const nid = useful.dataset.usefulNote;
        const q = useful.dataset.question;
        const cur = new Set(state.classAnswers.useful[nid] || []);
        if (cur.has(q)) cur.delete(q); else cur.add(q);
        state.classAnswers.useful[nid] = [...cur];
        state.classChecked.useful = false;
        save(); renderUseful();
        return;
      }
      const detail = e.target.closest("[data-detail]");
      if (detail) {
        state.selectedDetail = state.selectedDetail === detail.dataset.detail ? null : detail.dataset.detail;
        renderLinks();
        return;
      }
      const assign = e.target.closest("[data-assign], [data-drop]");
      if (assign && state.selectedDetail) {
        const wid = assign.dataset.assign || assign.dataset.drop;
        state.classAnswers.links[state.selectedDetail] = wid;
        state.selectedDetail = null;
        state.classChecked.links = false;
        save(); renderLinks();
        return;
      }
      const gbtn = e.target.closest("[data-grammar]");
      if (gbtn) {
        state.homeworkAnswers.grammar[gbtn.dataset.grammar] = gbtn.dataset.option;
        state.homeworkChecked.grammar = false;
        save(); renderGrammarHW();
        return;
      }
      const cbtn = e.target.closest("[data-conclusion]");
      if (cbtn) {
        state.homeworkAnswers.conclusions[cbtn.dataset.conclusion] = cbtn.dataset.option;
        state.homeworkChecked.conclusions = false;
        save(); renderConclusions();
        return;
      }
      const mv = e.target.closest("[data-move]");
      if (mv) { moveSort(mv.dataset.move, Number(mv.dataset.dir)); return; }
      const chk = e.target.closest("[data-check]");
      if (chk) {
        const [scope, task] = chk.dataset.check.split("-");
        if (scope === "class") checkClass(task);
        else checkHomework(task);
      }
    });

    document.addEventListener("change", (e) => {
      const m = e.target.closest("[data-match]");
      if (m) {
        state.classAnswers.match[m.dataset.match] = m.value;
        state.classChecked.match = false;
        save(); renderMatch();
        return;
      }
      const rw = e.target.closest("[data-report-witness]");
      if (rw) {
        const cur = state.homeworkAnswers.reportLinks[rw.dataset.reportWitness] || {};
        cur.witness = rw.value;
        state.homeworkAnswers.reportLinks[rw.dataset.reportWitness] = cur;
        state.homeworkChecked.reportLinks = false;
        save(); renderReportLinksFixed();
        return;
      }
      const rr = e.target.closest("[data-report-relation]");
      if (rr) {
        const cur = state.homeworkAnswers.reportLinks[rr.dataset.reportRelation] || {};
        cur.relation = rr.value;
        state.homeworkAnswers.reportLinks[rr.dataset.reportRelation] = cur;
        state.homeworkChecked.reportLinks = false;
        save(); renderReportLinksFixed();
      }
    });

    document.addEventListener("dragstart", (e) => {
      const d = e.target.closest("[data-detail]");
      if (d) { state.selectedDetail = d.dataset.detail; e.dataTransfer.setData("text/plain", d.dataset.detail); }
      const s = e.target.closest("[data-sort-id]");
      if (s) e.dataTransfer.setData("text/sort", s.dataset.sortId);
    });
    document.addEventListener("dragover", (e) => {
      if (e.target.closest("[data-drop], [data-assign], [data-sort-id]")) e.preventDefault();
    });
    document.addEventListener("drop", (e) => {
      const zone = e.target.closest("[data-drop], [data-assign]");
      if (zone) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain") || state.selectedDetail;
        if (!id) return;
        const wid = zone.dataset.assign || zone.dataset.drop;
        state.classAnswers.links[id] = wid;
        state.selectedDetail = null;
        state.classChecked.links = false;
        save(); renderLinks();
        return;
      }
      const item = e.target.closest("[data-sort-id]");
      const dragged = e.dataTransfer.getData("text/sort");
      if (item && dragged && dragged !== item.dataset.sortId) {
        e.preventDefault();
        const order = state.orders.sort.slice();
        const from = order.indexOf(dragged);
        const to = order.indexOf(item.dataset.sortId);
        if (from < 0 || to < 0) return;
        order.splice(from, 1);
        order.splice(to, 0, dragged);
        state.orders.sort = order;
        state.homeworkChecked.sort = false;
        save(); renderSort();
      }
    });

    $("#reset-btn").addEventListener("click", () => {
      if (!confirm("Начать заново? Все ответы на этом устройстве сотрутся.")) return;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch (e) {}
      state = defaultState();
      save(); renderAll();
    });
    $("#grammar-btn").addEventListener("click", () => openGrammar(true));
    $("#grammar-close").addEventListener("click", () => openGrammar(false));
    $("#grammar-modal").addEventListener("click", (e) => { if (e.target.id === "grammar-modal") openGrammar(false); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
