const KEY = "tutorcall-winter-wish-hotel-v1";
const CODE = "WWH-CO-COCOA";
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fixApos(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/['’]/g, "'")
    .replace(/\bdidnt\b/g, "didn't")
    .replace(/\bisnt\b/g, "isn't")
    .replace(/\bdont\b/g, "don't")
    .replace(/\bwont\b/g, "won't")
    .replace(/\bil\b/g, "i'll")
    .replace(/\bwell\b/g, "we'll");
}
function norm(s) {
  return fixApos(s).replace(/[^a-z0-9']+/g, " ").replace(/\s+/g, " ").trim();
}
function sameAny(input, list) {
  const n = norm(input);
  return (list || []).some((x) => norm(x) === n);
}
function hasAll(text, words) {
  const n = " " + norm(text) + " ";
  return (words || []).every((w) => n.includes(" " + norm(w) + " ") || norm(text).includes(norm(w)));
}
function joinTokens(tokens) { return (tokens || []).join(" ").replace(/\s+/g, " ").trim(); }

function speak(text, opts = {}) {
  if (!state.soundOn || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text));
  u.lang = "en-GB";
  u.rate = opts.rate ?? 0.95;
  u.pitch = opts.pitch ?? 1;
  const voices = speechSynthesis.getVoices();
  const v = voices.find((x) => /en-GB/i.test(x.lang)) || voices.find((x) => /^en/i.test(x.lang));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

function pic(name, alt, extra = "") {
  return `<picture><source srcset="./images/${name}.webp" type="image/webp"><img src="./images/${name}.jpg" alt="${esc(alt)}" ${extra}></picture>`;
}

const CORNER = `<svg class="corner-mark" viewBox="0 0 57 57" fill="none" aria-hidden="true"><path d="M2 53V2h52M2 2c22 0 37 13 42 37M2 2c1 22 14 37 37 42"/><path d="M8 9c12 2 21 9 26 21M9 9c2 12 9 21 21 26M24 6l4 8-8-2M6 24l8 4-2-8"/><circle cx="3" cy="3" r="1.8" fill="currentColor" stroke="none"/></svg><svg class="corner-mark corner-mark-right" viewBox="0 0 57 57" fill="none" aria-hidden="true"><path d="M2 53V2h52M2 2c22 0 37 13 42 37M2 2c1 22 14 37 37 42"/><path d="M8 9c12 2 21 9 26 21M9 9c2 12 9 21 21 26M24 6l4 8-8-2M6 24l8 4-2-8"/><circle cx="3" cy="3" r="1.8" fill="currentColor" stroke="none"/></svg>`;

function pageWrap(id, label, trailing, className, titleId, inner) {
  return `<section id="${id}" class="paper-page ${className || ""}" aria-labelledby="${titleId}" tabindex="-1">
    ${CORNER}
    <div class="page-inner">
      <header class="page-masthead">
        <span>${esc(label)}</span>
        <a href="#story" aria-label="Back to Winter Wish Hotel story">Winter Wish Hotel</a>
        <span>${esc(trailing)}</span>
      </header>
      ${inner}
    </div>
  </section>`;
}
function nextLink(href, text) {
  return `<p class="next-row"><a class="action-button" href="${href}" style="text-decoration:none;display:inline-flex;align-items:center">${esc(text)}</a></p>`;
}

const GUESTS = [
  { id: "granny", name: "Granny Frost", room: "Room 7", img: "granny-frost",
    description: "A regular guest with high standards, a kind heart, and a very long list of wishes.",
    quote: "I expect the staff to keep my room warm." },
  { id: "norbert", name: "Grumpy Elf Norbert", room: "Room 12", img: "norbert",
    description: "A hard-to-please traveler who never goes anywhere without his sticker-covered suitcase.",
    quote: "The manager never lets me use the sauna late." },
  { id: "bob", name: "Polar Bear Bob", room: "Room 3", img: "bob",
    description: "A sleepy guest who hears everything at night but remembers very little in the morning.",
    quote: "I heard someone humming in the corridor." },
  { id: "pip", name: "Little Penguin Pip", room: "Room 5", img: "pip",
    description: "A little dreamer writing a letter and waiting for a Christmas miracle.",
    quote: "I want Santa to find my letter." },
  { id: "blizzard", name: "Mr Blizzard", room: "Hotel manager", img: "manager",
    description: "The proud, secretly soft-hearted manager of the hotel, usually carrying hot cocoa.",
    quote: "I'll make you work hard, but I'll let you have cocoa." }
];

const RULES = [
  { before: "I want you to", answer: "greet", after: "every guest warmly." },
  { before: "I expect you to", answer: "welcome", after: "new arrivals with a smile." },
  { before: "I will make you", answer: "tidy", after: "the lobby today." },
  { before: "I will let you", answer: "taste", after: "the chef's cocoa when the shift ends." },
  { before: "I don't want anyone to", answer: "be", after: "late for breakfast." },
  { before: "I expect you to", answer: "listen", after: "to every request carefully." },
  { before: "I will never let you", answer: "ignore", after: "a guest who needs help." },
  { before: "I want you to", answer: "help", after: "one another tonight." }
];
const RULE_BANK = ["greet", "welcome", "tidy", "taste", "be", "listen", "ignore", "help", "greeting", "tidying", "tasting", "listening", "work", "enjoy", "make", "come"];
const RULE_SCRIPT = RULES.map((r) => `${r.before} ${r.answer} ${r.after}`).join(" ");

const NOTES = [
  { guest: "Granny Frost", room: "Room 7", text: "I expect the housekeepers to warm my room before breakfast.", pattern: "wishes" },
  { guest: "Granny Frost", room: "Room 7", text: "I would like the staff to carry another blanket upstairs.", pattern: "wishes" },
  { guest: "Norbert", room: "Room 12", text: "The manager never lets me enter the sauna late.", pattern: "actions" },
  { guest: "Norbert", room: "Room 12", text: "That icy shower made me shout for help.", pattern: "actions" },
  { guest: "Bob", room: "Room 3", text: "I heard a door creaking after midnight.", pattern: "senses" },
  { guest: "Bob", room: "Room 3", text: "I saw a dark shape moving near the kitchen.", pattern: "senses" },
  { guest: "Pip", room: "Room 5", text: "I want Santa to find my letter beneath the tree.", pattern: "wishes" },
  { guest: "Pip", room: "Room 5", text: "Please don't make the carol singers leave.", pattern: "actions" }
];
const PATTERNS = [
  { value: "wishes", label: "want / expect / would like" },
  { value: "actions", label: "make / let" },
  { value: "senses", label: "see / hear" }
];
const DISCOVERY = [
  { stem: "After want / expect / would like we use", answer: "somebody to do", options: ["somebody to do", "somebody do", "somebody doing"], why: "После want / expect / would like нужен инфинитив с to: somebody to do." },
  { stem: "After make / let we use", answer: "somebody do", options: ["somebody to do", "somebody do", "somebody doing"], why: "После make / let нет to: somebody do." },
  { stem: "After see / hear we use", answer: "somebody do / doing", options: ["somebody to do", "somebody do / doing", "somebody must do"], why: "После see / hear — somebody do (всё действие) или doing (процесс)." }
];

const CALLS = [
  { guest: "Granny Frost", room: "7", img: "granny-frost",
    request: "Ask the staff to bring extra blankets and expect them to hurry.",
    report: "Room 7 wants us to bring extra blankets.",
    accepts: [
      "Room 7 wants us to bring extra blankets.",
      "Room 7 wants the staff to bring extra blankets.",
      "Room 7 expects us to bring extra blankets."
    ],
    need: ["room 7", "blanket"] },
  { guest: "Granny Frost", room: "7", img: "granny-frost",
    request: "Expect the maid to clean your room before breakfast and ask for tea at seven.",
    report: "Room 7 expects the maid to clean the room before breakfast.",
    accepts: [
      "Room 7 expects the maid to clean the room before breakfast.",
      "Room 7 expects the maid to clean her room before breakfast.",
      "Room 7 wants the maid to clean the room before breakfast."
    ],
    need: ["room 7", "maid", "clean"] },
  { guest: "Grumpy Elf Norbert", room: "12", img: "norbert",
    request: "Ask Mr Blizzard to let you use the sauna after ten tonight.",
    report: "Room 12 wants Mr Blizzard to let him use the sauna after ten.",
    accepts: [
      "Room 12 wants Mr Blizzard to let him use the sauna after ten.",
      "Room 12 wants Mr Blizzard to let Norbert use the sauna after ten.",
      "Room 12 would like Mr Blizzard to let him use the sauna after ten."
    ],
    need: ["room 12", "sauna"] },
  { guest: "Grumpy Elf Norbert", room: "12", img: "norbert",
    request: "Explain that the icy shower made you shout and ask the staff to fix the heating.",
    report: "Room 12 wants us to fix the heating today.",
    accepts: [
      "Room 12 wants us to fix the heating today.",
      "Room 12 wants the staff to fix the heating.",
      "Room 12 wants us to fix the heating."
    ],
    need: ["room 12", "heating"] },
  { guest: "Polar Bear Bob", room: "3", img: "bob",
    request: "Say you heard singing at midnight and want someone to quiet the corridor.",
    report: "Room 3 wants us to keep the corridor quiet.",
    accepts: [
      "Room 3 wants us to keep the corridor quiet.",
      "Room 3 wants someone to keep the corridor quiet.",
      "Room 3 wants the staff to keep the corridor quiet."
    ],
    need: ["room 3", "corridor"] },
  { guest: "Polar Bear Bob", room: "3", img: "bob",
    request: "Ask the staff to let you have breakfast in bed after eleven.",
    report: "Room 3 would like us to bring breakfast to his room after eleven.",
    accepts: [
      "Room 3 would like us to bring breakfast to his room after eleven.",
      "Room 3 would like the staff to bring breakfast to his room after eleven.",
      "Room 3 wants us to let him have breakfast in bed after eleven.",
      "Room 3 would like us to let him have breakfast in bed after eleven."
    ],
    need: ["room 3", "breakfast"] },
  { guest: "Little Penguin Pip", room: "5", img: "pip",
    request: "Ask the chef to bake a fish-shaped cake and Santa to find your letter.",
    report: "Room 5 would like the chef to bake a fish-shaped cake.",
    accepts: [
      "Room 5 would like the chef to bake a fish-shaped cake.",
      "Room 5 wants the chef to bake a fish-shaped cake.",
      "Room 5 would like the chef to bake a fish shaped cake."
    ],
    need: ["room 5", "chef", "cake"] },
  { guest: "Little Penguin Pip", room: "5", img: "pip",
    request: "Ask the pianist to play Jingle Bells and do not let the carol singers stop.",
    report: "Room 5 wants the pianist to play Jingle Bells.",
    accepts: [
      "Room 5 wants the pianist to play Jingle Bells.",
      "Room 5 would like the pianist to play Jingle Bells.",
      "Room 5 wants the pianist to play jingle bells."
    ],
    need: ["room 5", "pianist"] }
];

const REPORT_BANK = [
  "Room 7", "Room 12", "Room 3", "Room 5",
  "wants us to", "wants the staff to", "expects the maid to", "wants Mr Blizzard to",
  "would like us to", "would like the chef to", "wants the pianist to", "wants someone to",
  "bring extra blankets", "clean the room before breakfast",
  "let him use the sauna after ten", "fix the heating today",
  "keep the corridor quiet", "bring breakfast to his room after eleven",
  "let him have breakfast in bed after eleven",
  "bake a fish-shaped cake", "play Jingle Bells",
  "open the gift shop", "sing in the lobby", "carry the suitcase"
];

const WITNESSES = [
  { id: "granny", name: "Granny Frost", room: "7", img: "granny-frost",
    statements: [
      "Around midnight, I saw Norbert walk towards the kitchen with something shiny in his hand.",
      "I heard the door creak, but I never saw him go inside."
    ],
    evidence: ["Norbert walk towards the kitchen", "the door creak"],
    place: ["near the kitchen", "in the corridor"],
    suspicious: "Maybe" },
  { id: "norbert", name: "Grumpy Elf Norbert", room: "12", img: "norbert",
    statements: [
      "I was going to the sauna when I saw Bob standing by the kitchen with a candle.",
      "A moment later, I heard someone munching behind the door."
    ],
    evidence: ["Bob standing by the kitchen with a candle", "someone munching behind the door"],
    place: ["by the kitchen", "on the way to the sauna"],
    suspicious: "Yes" },
  { id: "bob", name: "Polar Bear Bob", room: "3", img: "bob",
    statements: [
      "I heard Pip singing as she walked towards the lobby.",
      "I barely remember the night, but I found cake crumbs in my bed this morning."
    ],
    evidence: ["Pip singing", "cake crumbs in my bed"],
    place: ["in the lobby", "in his room"],
    suspicious: "Yes" },
  { id: "pip", name: "Little Penguin Pip", room: "5", img: "pip",
    statements: [
      "I saw Norbert pass the kitchen on his way to the sauna.",
      "Later, I saw Bob return from the kitchen with chocolate on his blue-and-white striped pyjamas."
    ],
    evidence: ["Norbert pass the kitchen", "Bob return with chocolate on his pyjamas"],
    place: ["near the kitchen", "in the corridor"],
    suspicious: "No" }
];
const EVIDENCE_BANK = [
  "Norbert walk towards the kitchen", "the door creak",
  "Bob standing by the kitchen with a candle", "someone munching behind the door",
  "Pip singing", "cake crumbs in my bed",
  "Norbert pass the kitchen", "Bob return with chocolate on his pyjamas",
  "Santa climbing the tree", "the chef dancing"
];
const PLACE_BANK = ["near the kitchen", "by the kitchen", "on the way to the sauna", "in the lobby", "in his room", "in the corridor", "in the sauna", "in the garden"];
const ACCUSE_WHO = ["Granny Frost", "Grumpy Elf Norbert", "Polar Bear Bob", "Little Penguin Pip"];
const ACCUSE_BANK = [
  "Norbert saw him at the kitchen with a candle",
  "Pip saw him return with chocolate on his pyjamas",
  "he found cake crumbs in his bed",
  "the striped thread matches Mr Blizzard's clue",
  "he was going to the sauna",
  "she was writing a letter"
];
const ANNOUNCE = "The Christmas banquet cake has vanished! I made the chef leave it on the kitchen table, and I let the door stay unlocked because I expected the morning team to decorate it at six. At 12:15 I heard a crash; at dawn I saw crumbs and chocolate on a blue-and-white striped thread.";

const REVIEW_STEMS = [
  { stem: "I want the staff to", needTo: true, why: "После want нужен to + глагол, например: warm my room." },
  { stem: "I expect the manager to", needTo: true, why: "После expect нужен to + глагол, например: listen carefully." },
  { stem: "I would like someone to", needTo: true, why: "После would like someone нужен to + глагол." },
  { stem: "The manager made / let me", needTo: false, bare: true, why: "После make / let нет to: let me have cocoa, made me wait." },
  { stem: "Last night I saw someone", sense: true, why: "После saw someone — глагол без to или с -ing: return / returning." },
  { stem: "I also heard someone", sense: true, why: "После heard someone — глагол без to или с -ing: singing / sing." },
  { stem: "I would / would not return because", reason: true, why: "Напиши причину: because the staff kept the room warm." }
];
const REVIEW_BANK = [
  "warm my room before breakfast", "bring extra blankets", "listen carefully",
  "find my letter", "bake a small cake", "play quiet music",
  "have cocoa after the shift", "wait in the lobby", "use the sauna",
  "return from the kitchen", "singing in the corridor", "munching behind the door",
  "the room was warm", "the cocoa was perfect", "the corridor was too noisy"
];

const VOTE_REVIEWS = [
  { id: "granny", name: "Granny Frost", text: "I want the staff to keep my room warm. I expect the maid to bring tea at seven. Last night I saw Norbert walking towards the kitchen." },
  { id: "norbert", name: "Grumpy Elf Norbert", text: "The manager never lets me use the sauna late. The icy shower made me shout. I would like Mr Blizzard to fix the heating today." },
  { id: "bob", name: "Polar Bear Bob", text: "I heard someone singing at midnight. The hotel lets me have breakfast in bed. I would return because the cocoa is wonderful." },
  { id: "pip", name: "Little Penguin Pip", text: "I want Santa to find my letter. I would like the pianist to play Jingle Bells. Last night I saw Bob return with chocolate on his pyjamas." }
];
const VOTE_FRAMES = [
  "I would like Granny Frost to win because her review is careful and polite.",
  "I would like Grumpy Elf Norbert to win because his review made me laugh.",
  "I would like Polar Bear Bob to win because he used see / hear really well.",
  "I would like Little Penguin Pip to win because her wish for Santa is sweet.",
  "My favourite line was about the warm cocoa after the shift.",
  "This writer used want somebody to do really well."
];

const HW_LINES = [
  { stem: "My new guest is called", kind: "name" },
  { stem: "They are staying in Room", kind: "room" },
  { stem: "They want the staff to", kind: "to" },
  { stem: "They expect the manager to", kind: "to" },
  { stem: "The hotel lets / makes them", kind: "bare" },
  { stem: "Last night they saw / heard", kind: "sense" }
];
const HW_BANK = [
  "Snow Fox Lila", "Reindeer Max", "Ice Owl Olga", "Tiny Seal Niko",
  "2", "4", "6", "8", "9", "11", "14",
  "bring a second pillow", "leave a letter for Santa", "warm the room at six",
  "let them use the sauna", "play quiet music", "have breakfast in bed",
  "wait by the fire", "sing in the lobby", "someone walking to the kitchen",
  "a door creaking after midnight", "the pianist playing Jingle Bells"
];

function emptySuspects() {
  return Object.fromEntries(WITNESSES.map((w) => [w.id, { evidence: "", place: "", suspicious: "", reason: "" }]));
}
function defaults() {
  return {
    soundOn: true,
    briefing: Array(RULES.length).fill(""),
    briefFocus: 0,
    briefChecked: false,
    ruleBank: shuffle(RULE_BANK.slice()),
    notes: Array(NOTES.length).fill(""),
    notesChecked: false,
    discovery: Array(DISCOVERY.length).fill(""),
    discoveryChecked: false,
    call: 0,
    reports: Array(CALLS.length).fill(null).map(() => []),
    reportsChecked: Array(CALLS.length).fill(false),
    reportBank: shuffle(REPORT_BANK.slice()),
    suspects: emptySuspects(),
    accuseWho: "",
    accuseWhy: [],
    accuseChecked: false,
    reviewGuest: "",
    review: Array(REVIEW_STEMS.length).fill(null).map(() => []),
    reviewChecked: false,
    reviewBank: shuffle(REVIEW_BANK.slice()),
    votePick: "",
    voteReason: "",
    voteChecked: false,
    homework: Array(HW_LINES.length).fill(null).map(() => []),
    hwChecked: false,
    hwBank: shuffle(HW_BANK.slice()),
    reflect: "",
    codeOpen: false
  };
}

let state = defaults();
try {
  const raw = JSON.parse(localStorage.getItem(KEY) || "null");
  if (raw && typeof raw === "object") {
    const fresh = defaults();
    state = Object.assign({}, fresh, raw);
    state.soundOn = state.soundOn !== false;
    if (!Array.isArray(state.briefing) || state.briefing.length !== RULES.length) state.briefing = fresh.briefing;
    if (!Array.isArray(state.ruleBank) || state.ruleBank.length !== RULE_BANK.length) state.ruleBank = fresh.ruleBank;
    if (!Array.isArray(state.notes) || state.notes.length !== NOTES.length) state.notes = fresh.notes;
    if (!Array.isArray(state.discovery) || state.discovery.length !== DISCOVERY.length) state.discovery = fresh.discovery;
    if (!Array.isArray(state.reports) || state.reports.length !== CALLS.length) state.reports = fresh.reports;
    if (!Array.isArray(state.reportBank) || state.reportBank.length !== REPORT_BANK.length) state.reportBank = fresh.reportBank;
    if (!state.suspects || Object.keys(state.suspects).length !== WITNESSES.length) state.suspects = fresh.suspects;
    if (!Array.isArray(state.review) || state.review.length !== REVIEW_STEMS.length) state.review = fresh.review;
    if (!Array.isArray(state.homework) || state.homework.length !== HW_LINES.length) state.homework = fresh.homework;
    if (!Array.isArray(state.hwBank) || state.hwBank.length !== HW_BANK.length) state.hwBank = fresh.hwBank;
  }
} catch (e) { state = defaults(); }

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
}

function briefingN() { return RULES.filter((r, i) => norm(state.briefing[i]) === r.answer).length; }
function briefingDone() { return briefingN() === RULES.length; }
function notesN() { return NOTES.filter((n, i) => state.notes[i] === n.pattern).length; }
function notesDone() { return notesN() === NOTES.length; }
function discoveryN() { return DISCOVERY.filter((d, i) => state.discovery[i] === d.answer).length; }
function discoveryDone() { return discoveryN() === DISCOVERY.length; }
function reportOk(i) {
  const built = joinTokens(state.reports[i] || []);
  const c = CALLS[i];
  return sameAny(built, c.accepts) || (built && hasAll(built, c.need) && /want|expect|would like/.test(norm(built)) && /\bto\b/.test(norm(built)));
}
function reportsN() { return CALLS.filter((_, i) => reportOk(i)).length; }
function reportsDone() { return reportsN() === CALLS.length; }
function tableFilled() {
  return WITNESSES.every((w) => {
    const s = state.suspects[w.id] || {};
    return s.evidence && s.place && s.suspicious && s.reason;
  });
}
function accuseOk() {
  const why = joinTokens(state.accuseWhy);
  const who = norm(state.accuseWho);
  const clue = hasAll(why, ["candle"]) || hasAll(why, ["pyjamas"]) || hasAll(why, ["pajamas"]) || hasAll(why, ["crumbs"]) || hasAll(why, ["chocolate"]) || hasAll(why, ["thread"]);
  return who.includes("bob") && clue;
}
function mysteryDone() { return tableFilled() && accuseOk(); }
function reviewLineOk(i) {
  const text = joinTokens(state.review[i] || []);
  const n = norm(text);
  if (!n || n.split(" ").length < 2) return false;
  const t = REVIEW_STEMS[i];
  if (t.needTo) return /\bto\b/.test(n) || /^(warm|bring|listen|find|bake|play|keep|help|greet|welcome)/.test(n);
  if (t.bare) return !/\bto\b/.test(n) && n.split(" ").length >= 1;
  if (t.sense) return n.split(" ").length >= 2;
  if (t.reason) return n.split(" ").length >= 2;
  return true;
}
function reviewN() { return REVIEW_STEMS.filter((_, i) => reviewLineOk(i)).length; }
function reviewDone() { return !!state.reviewGuest && reviewN() === REVIEW_STEMS.length; }
function voteDone() { return !!(state.votePick && state.voteReason); }
function hwLineOk(i) {
  const text = joinTokens(state.homework[i] || []);
  const n = norm(text);
  if (!n) return false;
  const k = HW_LINES[i].kind;
  if (k === "name") return n.split(" ").length >= 2;
  if (k === "room") return /\d/.test(n);
  if (k === "to") return n.split(" ").length >= 2;
  if (k === "bare") return n.split(" ").length >= 2 && !/^to\b/.test(n);
  if (k === "sense") return n.split(" ").length >= 2;
  return true;
}
function hwN() { return HW_LINES.filter((_, i) => hwLineOk(i)).length; }
function hwDone() { return hwN() === HW_LINES.length; }
function progressBits() {
  return [briefingDone(), notesDone(), discoveryDone(), reportsDone(), mysteryDone(), reviewDone(), voteDone(), hwDone()];
}
function progressN() { return progressBits().filter(Boolean).length; }
function allDone() { return progressN() === 8; }

function whyBox(ok, text) {
  if (!text) return "";
  return `<p class="why ${ok ? "ok" : "bad"}">${esc(text)}</p>`;
}

function renderTiles(bank, prefix) {
  return `<div class="tile-bank" role="list">${bank.map((t, i) =>
    `<button type="button" class="tile" data-${prefix}="${i}">${esc(t)}</button>`
  ).join("")}</div>`;
}
function renderBuilt(tokens, kind, placeholder, line) {
  if (!tokens || !tokens.length) return `<span class="built-placeholder">${esc(placeholder || "Tap words to build your answer.")}</span>`;
  return tokens.map((t, i) =>
    `<button type="button" class="built-chip" data-rm="${esc(kind)}" data-rm-i="${i}"${line != null ? ` data-line="${line}"` : ""}>${esc(t)}</button>`
  ).join("");
}

function renderStory() {
  return pageWrap("story", "THE SETTING", "COMPLEX OBJECT", "story-page", "story-title", `
    <h1 id="story-title" class="script-title cover-title">Welcome to Winter Wish Hotel</h1>
    <p class="page-subtitle">Read the hotel story. Then close the page and tell yourself three things you remember.</p>
    <p class="cover-meta">A2+/B1 English <span></span> Grade 7 <span></span> 45-minute mystery lesson</p>
    <div class="goal-box">Цель урока: научиться строить <b>Complex Object</b> — want / expect / would like somebody <i>to do</i>, make / let somebody <i>do</i> и see / hear somebody <i>do / doing</i>. Ты новая смена в Winter Wish Hotel: слушай мистера Близзарда, помогай гостям и найди, кто взял праздничный торт.</div>
    <div class="story-copy">
      <p>Beyond the last snowy mountain road, a warm light glows between the pine trees. It comes from <strong>Winter Wish Hotel</strong>.</p>
      <p>Inside, a fire crackles beside the Christmas tree, candles shine on the tables, and wide windows look out onto falling snow. Each winter, unusual guests arrive with luggage, secrets, and impossible wishes. Some expect the staff to work miracles; others never let anyone rest.</p>
      <p>In <strong>Room 7</strong>, <strong>Granny Frost</strong> is writing another letter for reception. In <strong>Room 12</strong>, <strong>Grumpy Elf Norbert</strong> is guarding his sticker-covered suitcase. <strong>Polar Bear Bob</strong> is already sleepy in <strong>Room 3</strong>, while <strong>Little Penguin Pip</strong> writes a Christmas wish in <strong>Room 5</strong>.</p>
      <p>At the front desk, <strong>Mr Blizzard</strong> warms his hands around a mug of cocoa. He wants his new staff to listen carefully, and he promises to let them enjoy hot chocolate after their shift.</p>
    </div>
    ${nextLink("#guests", "Дальше → гости")}
  `);
}

function renderGuests() {
  const cards = GUESTS.map((g) => `
    <figure class="guest-portrait">
      <div class="guest-image-wrap">${pic(g.img, `${g.name} at Winter Wish Hotel`, 'loading="lazy"')}</div>
      <figcaption>
        <div class="guest-name-line"><h3>${esc(g.name)}</h3><span>${esc(g.room)}</span></div>
        <p>${esc(g.description)}</p>
        <blockquote>${esc(g.quote)}</blockquote>
      </figcaption>
    </figure>`).join("");
  return pageWrap("guests", "THE GUESTS", "FIVE CHARACTERS", "guests-page", "guests-title", `
    <h2 id="guests-title" class="script-title">Meet the guests</h2>
    <p class="page-subtitle">Look at each guest. Notice how they already use Complex Object in their quotes.</p>
    <div class="guest-grid">${cards}</div>
    ${nextLink("#quest", "Дальше → начало квеста")}
  `);
}

function renderQuest() {
  return pageWrap("quest", "THE QUEST", "FIRST SHIFT", "quest-page", "quest-title", `
    <h2 id="quest-title" class="script-title">Your first shift</h2>
    <p class="page-subtitle">The reception bell is about to ring.</p>
    <figure class="quest-intro-figure">
      <picture>
        <source srcset="./images/quest-intro.webp" type="image/webp">
        <img src="./images/quest-intro.jpg" alt="Mr Blizzard stands behind the Winter Wish Hotel reception desk with a brass bell and a mug of cocoa. Granny Frost, Little Penguin Pip, Grumpy Elf Norbert and Polar Bear Bob wait in the festive lobby." width="1280" height="720">
      </picture>
      <figcaption>Your first shift begins at Mr Blizzard's reception desk.</figcaption>
    </figure>
    <p class="quest-intro-ru">Добро пожаловать на первую смену: мистер Близзард уже ждёт тебя у стойки рецепции Winter Wish Hotel. Познакомься с гостями и будь готов записать его правила.</p>
    ${nextLink("#briefing", "Дальше → Welcome briefing")}
  `);
}

function renderBriefing() {
  const n = briefingN();
  const rows = RULES.map((r, i) => {
    const val = state.briefing[i] || "";
    const ok = state.briefChecked && norm(val) === r.answer;
    const bad = state.briefChecked && val && !ok;
    return `<li class="${ok ? "answer-correct" : bad ? "answer-incorrect" : ""}">
      <span class="list-number">${String(i + 1).padStart(2, "0")}</span>
      <label>
        <span>${esc(r.before)}</span>
        <button type="button" class="gap-slot${state.briefFocus === i ? " is-focus" : ""}" data-gap="${i}">${esc(val)}</button>
        <span>${esc(r.after)}</span>
      </label>
      ${state.briefChecked && !ok ? whyBox(false, `Нужен глагол «${r.answer}». После want / expect / would like — to + глагол; после make / let — глагол без to.`) : ""}
    </li>`;
  }).join("");
  return pageWrap("briefing", "TASK 01 / LISTENING", "08 MINUTES", "task-page", "briefing-title", `
    <h2 id="briefing-title" class="script-title">Welcome briefing</h2>
    <p class="page-subtitle">Your first shift begins at Mr Blizzard's reception desk.</p>
    <p class="task-instruction">Послушай правила мистера Близзарда (кнопка ниже). Потом выбери глагол из банка слов и поставь его в пропуск. Нажми на пропуск, затем на слово.</p>
    <blockquote class="manager-line"><span>Mr Blizzard says</span>"Welcome to the team. I will make you work hard today, but I will let you enjoy the best cocoa in the mountains. Here are my rules."</blockquote>
    <p><button type="button" class="action-button" id="btnBriefTts">🔊 Listen to the eight rules</button></p>
    <h3>Word bank</h3>
    ${renderTiles(state.ruleBank, "rule")}
    <ol class="briefing-rules">${rows}</ol>
    <div class="activity-actions">
      <button type="button" class="action-button" id="btnBriefCheck">Check the rules</button>
      <span class="activity-feedback" role="status">${state.briefChecked ? `${n} of 8 verbs correct.` : "Choose a verb for each rule."}</span>
    </div>
    ${state.briefChecked && briefingDone() ? whyBox(true, "Отлично: все восемь глаголов на месте.") : ""}
    ${nextLink("#notes", "Дальше → записки гостей")}
  `);
}

function renderNotes() {
  const items = NOTES.map((n, i) => {
    const pick = state.notes[i];
    const cls = state.notesChecked && pick ? (pick === n.pattern ? "is-correct" : "is-incorrect") : "";
    const opts = PATTERNS.map((p) =>
      `<button type="button" class="choice${pick === p.value ? " is-on" : ""}${state.notesChecked && pick === p.value ? (p.value === n.pattern ? " is-ok" : " is-bad") : ""}" data-note="${i}" data-val="${p.value}">${esc(p.label)}</button>`
    ).join("");
    return `<li class="guest-note ${cls}">
      <div class="guest-note-head">
        <span class="list-number">${String(i + 1).padStart(2, "0")}</span>
        <span>FROM ${esc(n.guest.toUpperCase())}</span>
        <span>${esc(n.room.toUpperCase())}</span>
      </div>
      <p>"${esc(n.text)}"</p>
      <p>Pattern</p>
      <div class="choice-row">${opts}</div>
      ${state.notesChecked && pick !== n.pattern ? whyBox(false, n.pattern === "wishes" ? "Это wish / expectation: want, expect или would like + somebody to do." : n.pattern === "actions" ? "Это make / let + somebody do (без to)." : "Это see / hear + somebody do / doing.") : ""}
    </li>`;
  }).join("");
  const disc = DISCOVERY.map((d, i) => {
    const pick = state.discovery[i];
    const opts = d.options.map((o) =>
      `<button type="button" class="choice${pick === o ? " is-on" : ""}${state.discoveryChecked && pick === o ? (o === d.answer ? " is-ok" : " is-bad") : ""}" data-disc="${i}" data-val="${esc(o)}">${esc(o)}</button>`
    ).join("");
    return `<div>
      <p><strong>${i + 1}. ${esc(d.stem)}</strong></p>
      <div class="choice-row">${opts}</div>
      ${state.discoveryChecked && pick !== d.answer ? whyBox(false, d.why) : ""}
    </div>`;
  }).join("");
  return pageWrap("notes", "TASK 02 / READING", "08 MINUTES", "task-page", "notes-title", `
    <h2 id="notes-title" class="script-title">Guests' notes</h2>
    <p class="page-subtitle">Eight messages have arrived at reception. Can you find the three patterns?</p>
    <p class="task-instruction">Прочитай каждую записку и выбери семью: wishes, make/let или see/hear. Потом открой правила внизу — тоже выбором варианта.</p>
    <ol class="notes-grid">${items}</ol>
    <div class="activity-actions">
      <button type="button" class="action-button" id="btnNotesCheck">Check the sorting</button>
      <span class="activity-feedback">${state.notesChecked ? `${notesN()} of 8 in the right family.` : `${state.notes.filter(Boolean).length} of 8 notes sorted.`}</span>
    </div>
    <div class="discovery-section">
      <h3>Discover the rule</h3>
      ${disc}
      <div class="activity-actions">
        <button type="button" class="action-button" id="btnDiscCheck">Check the rules</button>
        <span class="activity-feedback">${state.discoveryChecked ? `${discoveryN()} of 3 rules correct.` : "Choose one option for each rule."}</span>
      </div>
    </div>
    ${nextLink("#reference", "Дальше → грамматика")}
  `);
}

function renderGrammar() {
  return pageWrap("reference", "GRAMMAR REFERENCE", "COMPLEX OBJECT", "grammar-page", "reference-title", `
    <h2 id="reference-title" class="script-title">Complex Object at the hotel</h2>
    <p class="page-subtitle">Keep this page open while you play. All three patterns appear in today's tasks.</p>
    <div class="grammar-stack">
      <section class="grammar-block grammar-blue" aria-label="Type 1">
        <h3>Type 1 / Wishes, plans and expectations</h3>
        <div class="grammar-block-body">
          <p class="grammar-formula">want / expect / would like <span>+ somebody +</span> <em>to do</em></p>
          <ul>
            <li><span class="grammar-tag">WANT</span><span>Pip wants Santa <strong>to visit</strong> the hotel.</span></li>
            <li><span class="grammar-tag">EXPECT</span><span>Granny expects the maids <strong>to clean</strong> her room early.</span></li>
            <li><span class="grammar-tag">WOULD LIKE</span><span>I would like the pianist <strong>to play</strong> Jingle Bells.</span></li>
          </ul>
          <p class="grammar-note">After these verbs, use to + infinitive. Say: I want him to bring blankets.</p>
        </div>
      </section>
      <section class="grammar-block grammar-red" aria-label="Type 2">
        <h3>Type 2 / Obligation and permission</h3>
        <div class="grammar-block-body">
          <p class="grammar-formula">make / let <span>+ somebody +</span> <em>do</em> <small>(no to!)</small></p>
          <ul>
            <li><span class="grammar-tag">MAKE</span><span>The cold shower made Norbert <strong>shout</strong>.</span></li>
            <li><span class="grammar-tag">LET</span><span>The manager lets Bob <strong>have</strong> breakfast in bed.</span></li>
            <li><span class="grammar-tag">MAKE / LET</span><span>He'll make us <strong>work</strong>, but let us <strong>have</strong> cocoa.</span></li>
          </ul>
          <p class="grammar-note">Make means cause or force; let means allow. There is no to after make or let.</p>
        </div>
      </section>
      <section class="grammar-block grammar-green" aria-label="Type 3">
        <h3>Type 3 / What we see and hear</h3>
        <div class="grammar-block-body">
          <p class="grammar-formula">see / hear / watch <span>+ somebody +</span> <em>do</em> or <em>doing</em></p>
          <ul>
            <li><span class="grammar-tag">HEAR + -ING</span><span>Bob heard someone <strong>singing</strong> in the corridor.</span></li>
            <li><span class="grammar-tag">SEE + -ING</span><span>Granny saw Norbert <strong>walking</strong> to the kitchen.</span></li>
            <li><span class="grammar-tag">SEE + DO</span><span>Pip saw the chef <strong>leave</strong> the lobby.</span></li>
          </ul>
          <p class="grammar-note">Use do for a whole action; use doing when you notice an action in progress.</p>
        </div>
      </section>
    </div>
    <div class="grammar-warning">
      <h3>Look out! Typical slips</h3>
      <p><s>I want that he brings blankets.</s> <span>→</span> <strong>I want him to bring blankets.</strong></p>
      <p><s>The manager made me to wait.</s> <span>→</span> <strong>The manager made me wait.</strong></p>
      <p><s>He never lets me to use the sauna.</s> <span>→</span> <strong>He never lets me use the sauna.</strong></p>
    </div>
    ${nextLink("#roleplay", "Дальше → ресепшен")}
  `);
}

function renderRoleplay() {
  const i = state.call;
  const q = CALLS[i];
  const cards = CALLS.map((c, n) => `
    <button type="button" class="role-card${n === i ? " is-selected" : ""}" data-call="${n}" aria-pressed="${n === i}">
      <span class="role-card-top"><span>CALL ${String(n + 1).padStart(2, "0")}</span><span>ROOM ${esc(c.room)}</span></span>
      <strong>${esc(c.guest)}</strong>
      <span class="role-request">${esc(c.request)}</span>
    </button>`).join("");
  const built = state.reports[i] || [];
  const checked = state.reportsChecked[i];
  const ok = reportOk(i);
  return pageWrap("roleplay", "TASK 03 / SPEAKING", "12 MINUTES", "task-page", "roleplay-title", `
    <h2 id="roleplay-title" class="script-title">Room service role-play</h2>
    <p class="page-subtitle">The reception bell is ringing. Every guest has a request.</p>
    <p class="task-instruction">Открой карточку гостя и собери рапорт для мистера Близзарда из банка фраз. Не копируй готовое предложение: составь его из кусочков. ${reportsN()}/8</p>
    <div class="role-grid" aria-label="Eight guest request cards">${cards}</div>
    <div class="reception-desk">
      <div class="reception-heading">
        ${pic(q.img, q.guest, 'alt=""')}
        <div>
          <span>THE RECEPTION DESK / CALL ${String(i + 1).padStart(2, "0")}</span>
          <h3>Report to Mr Blizzard</h3>
        </div>
      </div>
      <p>What does Room ${esc(q.room)} want or expect someone to do?</p>
      <h3>Phrase bank for reception staff</h3>
      ${renderTiles(state.reportBank, "rep")}
      <div class="built" id="reportBuilt">${renderBuilt(built, "report", "Room " + q.room + " wants us to …")}</div>
      <p>Use a complete Complex Object in your report.</p>
      <div class="activity-actions">
        <button type="button" class="action-button" id="btnReportCheck">Check this report</button>
        <button type="button" class="action-button" id="btnReportTts" style="background:transparent;color:var(--ink)">🔊 Listen to the request</button>
        <span class="activity-feedback">${checked ? (ok ? "This report is ready." : "Try another combination from the bank.") : `${reportsN()} of 8 reports ready.`}</span>
      </div>
      ${checked && !ok ? whyBox(false, "Собери рапорт в третьем лице, например: «" + q.report + "». Нужны номер комнаты, want / expect / would like и to + глагол.") : ""}
      ${checked && ok ? whyBox(true, "Верно: " + q.report) : ""}
    </div>
    ${nextLink("#mystery", "Дальше → ночная загадка")}
  `);
}

function renderMystery() {
  const cards = WITNESSES.map((z) => `
    <article class="witness-card is-open">
      <div class="witness-trigger" style="cursor:default">
        ${pic(z.img, z.name, 'loading="lazy" alt=""')}
        <span class="witness-identity">
          <small>WITNESS / ROOM ${esc(z.room)}</small>
          <strong>${esc(z.name)}</strong>
        </span>
      </div>
      <div class="witness-secret" id="witness-${z.id}">
        ${z.statements.map((s) => `<p>${esc(s)}</p>`).join("")}
      </div>
    </article>`).join("");
  const rows = WITNESSES.map((z) => {
    const g = state.suspects[z.id] || {};
    const ev = EVIDENCE_BANK.map((t) =>
      `<button type="button" class="choice${g.evidence === t ? " is-on" : ""}" data-ev="${z.id}" data-val="${esc(t)}">${esc(t)}</button>`
    ).join("");
    const pl = PLACE_BANK.map((t) =>
      `<button type="button" class="choice${g.place === t ? " is-on" : ""}" data-pl="${z.id}" data-val="${esc(t)}">${esc(t)}</button>`
    ).join("");
    const sus = ["Yes", "No", "Maybe"].map((t) =>
      `<button type="button" class="choice${g.suspicious === t ? " is-on" : ""}" data-su="${z.id}" data-val="${t}">${t}</button>`
    ).join("");
    const why = ACCUSE_BANK.map((t) =>
      `<button type="button" class="choice${g.reason === t ? " is-on" : ""}" data-rs="${z.id}" data-val="${esc(t)}">${esc(t)}</button>`
    ).join("");
    return `<tr>
      <th scope="row">${esc(z.name)}</th>
      <td data-label="Saw or heard"><div class="choice-row">${ev}</div></td>
      <td data-label="Where?"><div class="choice-row">${pl}</div></td>
      <td data-label="Suspicious?"><div class="choice-row">${sus}</div></td>
      <td data-label="Why?"><div class="choice-row">${why}</div></td>
    </tr>`;
  }).join("");
  const who = ACCUSE_WHO.map((t) =>
    `<button type="button" class="choice${state.accuseWho === t ? " is-on" : ""}" data-who="${esc(t)}">${esc(t)}</button>`
  ).join("");
  return pageWrap("mystery", "TASK 04 / DETECTIVE WORK", "10 MINUTES", "task-page mystery-page", "mystery-title", `
    <h2 id="mystery-title" class="script-title">The night mystery</h2>
    <p class="page-subtitle">The Christmas banquet cake is missing. Follow the clues, not the rumours.</p>
    <p class="task-instruction">Послушай объявление мистера Близзарда, прочитай показания всех свидетелей (они открыты) и заполни таблицу из банка фраз. Потом выбери, кто взял торт, и собери причину из банка.</p>
    <p><button type="button" class="action-button" id="btnAnnounceTts">🔊 Listen to Mr Blizzard</button></p>
    <details class="announcement" open>
      <summary><span>Mr Blizzard's announcement</span></summary>
      <p>"${esc(ANNOUNCE)}"</p>
    </details>
    <div class="subsection-heading"><h3>Witness cards</h3><span>Four cards / eight statements</span></div>
    <div class="witness-grid">${cards}</div>
    <div class="subsection-heading suspect-heading"><h3>Detective's evidence table</h3><span>Choose before you accuse</span></div>
    <div class="table-wrap">
      <table class="suspect-table">
        <thead><tr><th scope="col">Guest</th><th scope="col">Saw or heard</th><th scope="col">Where?</th><th scope="col">Suspicious?</th><th scope="col">Why?</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <label class="accusation-label">Our accusation</label>
    <p>I think</p>
    <div class="choice-row">${who}</div>
    <p>took the cake because</p>
    ${renderTiles(ACCUSE_BANK, "acc")}
    <div class="built" id="accuseBuilt">${renderBuilt(state.accuseWhy, "accuse", "Tap clues to finish the accusation.")}</div>
    <div class="activity-actions">
      <button type="button" class="action-button" id="btnAccuseCheck">Check the accusation</button>
      <span class="activity-feedback">${state.accuseChecked ? (accuseOk() ? "The evidence points to the right guest." : "Look again at the candle, the pyjamas and the crumbs.") : (tableFilled() ? "Table complete — now accuse." : "Fill the table, then accuse.")}</span>
    </div>
    ${state.accuseChecked && !accuseOk() ? whyBox(false, "Торт взял Polar Bear Bob, пока он почти спал. Нужны улики: свеча, пижама в полоску или крошки в кровати.") : ""}
    ${state.accuseChecked && accuseOk() ? whyBox(true, "Polar Bear Bob took the cake while half-asleep. Norbert saw him with a candle; Pip saw him return with chocolate on his pyjamas; Bob found crumbs in his bed.") : ""}
    ${nextLink("#review", "Дальше → книга отзывов")}
  `);
}

function renderReview() {
  const guestOpts = GUESTS.slice(0, 4).map((g) =>
    `<button type="button" class="choice${state.reviewGuest === g.name ? " is-on" : ""}" data-rg="${esc(g.name)}">${esc(g.name)}</button>`
  ).join("");
  const lines = REVIEW_STEMS.map((s, i) => `
    <label class="writing-row">
      <span class="writing-number">${String(i + 1).padStart(2, "0")}</span>
      <span class="writing-prompt">${esc(s.stem)}</span>
      <div class="built${reviewFocus === i ? " is-focus" : ""}" data-revfocus="${i}">${renderBuilt(state.review[i], "review", "…", i)}</div>
    </label>
    ${state.reviewChecked && !reviewLineOk(i) ? whyBox(false, s.why) : ""}
  `).join("");
  return pageWrap("review", "TASK 05 / WRITING", "07 MINUTES", "task-page", "review-title", `
    <h2 id="review-title" class="script-title">The hotel review book</h2>
    <p class="page-subtitle">Write as a guest. Tell the hotel what you wished for and what happened last night.</p>
    <p class="task-instruction">Выбери гостя и закончи семь предложений из банка фраз. В отзыве должны быть wishes, make/let и see/hear. ${reviewN()}/7</p>
    <div class="review-form">
      <div class="review-form-heading"><span>WINTER WISH HOTEL</span><strong>Guest Review Book</strong><span>YOUR STAY</span></div>
      <p>Writing as</p>
      <div class="choice-row">${guestOpts}</div>
      <h3>Phrase bank</h3>
      ${renderTiles(state.reviewBank, "rev")}
      <div class="writing-lines">${lines}</div>
    </div>
    <div class="activity-actions">
      <button type="button" class="action-button" id="btnReviewCheck">Check my review</button>
      <span class="activity-feedback">${state.reviewChecked ? `${reviewN()} of 7 lines ready.` : "Tap a line, then tap phrases from the bank."}</span>
    </div>
    ${nextLink("#vote", "Дальше → голосование")}
  `);
}

function renderVote() {
  const cards = VOTE_REVIEWS.map((r) => `
    <article class="guest-note">
      <div class="guest-note-head"><strong>${esc(r.name)}</strong></div>
      <p>${esc(r.text)}</p>
      <button type="button" class="choice${state.votePick === r.id ? " is-on" : ""}" data-vote="${r.id}">Vote for ${esc(r.name)}</button>
    </article>`).join("");
  const frames = VOTE_FRAMES.map((f) =>
    `<button type="button" class="choice${state.voteReason === f ? " is-on" : ""}" data-vreason="${esc(f)}">${esc(f)}</button>`
  ).join("");
  return pageWrap("vote", "TASK 06 / SPEAKING", "03 MINUTES", "task-page", "vote-title", `
    <h2 id="vote-title" class="script-title">The guest review vote</h2>
    <p class="page-subtitle">Read four short reviews and choose a winner.</p>
    <p class="task-instruction">Это задание для одного ученика: прочитай отзывы, выбери победителя и отметь одну готовую фразу-объяснение.</p>
    <div class="notes-grid">${cards}</div>
    <h3>Why this review?</h3>
    <div class="choice-row" style="flex-direction:column;align-items:stretch">${frames}</div>
    ${state.voteChecked && !voteDone() ? whyBox(false, "Нужно выбрать и отзыв, и фразу, почему он тебе нравится.") : ""}
    ${voteDone() ? whyBox(true, "Голос принят.") : ""}
    ${nextLink("#homework", "Дальше → домашка")}
  `);
}

function renderHomework() {
  const lines = HW_LINES.map((s, i) => `
    <li>
      <span>${String(i + 1).padStart(2, "0")}</span>
      <strong>${esc(s.stem)}</strong>
      <div class="built${hwFocus === i ? " is-focus" : ""}" data-hwfocus="${i}" style="flex:1">${renderBuilt(state.homework[i], "homework", "…", i)}</div>
    </li>
    ${state.hwChecked && !hwLineOk(i) ? `<li style="border:0;min-height:0;padding:0 4px 10px">${whyBox(false, s.kind === "name" ? "Выбери имя нового гостя из банка." : s.kind === "room" ? "Выбери номер комнаты." : s.kind === "to" ? "После want / expect нужен to + глагол — возьми фразу из банка." : s.kind === "bare" ? "После lets / makes глагол идёт без to." : "После saw / heard — действие без to или с -ing.")}</li>` : ""}
  `).join("");
  return pageWrap("homework", "AFTER THE LESSON", "HOMEWORK", "homework-page", "homework-title", `
    <h2 id="homework-title" class="script-title">One more guest arrives</h2>
    <p class="page-subtitle">Invent a new visitor for Winter Wish Hotel and give them a secret of their own.</p>
    <p class="task-instruction">Complete these six lines. Use the phrase bank — tap a line, then tap words. Your guest needs a new name, a room, three wishes or rules, and one clue about the night. ${hwN()}/6</p>
    <h3>Homework phrase bank</h3>
    ${renderTiles(state.hwBank, "hw")}
    <ol class="homework-lines">${lines}</ol>
    <div class="extension-columns">
      <div>
        <h3>If you need a little help</h3>
        <p>Use the patterns <strong>I want somebody to...</strong>, <strong>They let me...</strong>, and <strong>I heard somebody singing...</strong>. Choose familiar hotel words from the phrase bank.</p>
      </div>
      <div>
        <h3>Ready for an extra challenge?</h3>
        <p>Add <strong>would like somebody to do</strong> and a passive clue such as <strong>I saw the cake being taken</strong>.</p>
      </div>
    </div>
    <div class="activity-actions">
      <button type="button" class="action-button" id="btnHwCheck">Check my guest</button>
      <span class="activity-feedback">${state.hwChecked ? `${hwN()} of 6 lines ready.` : "Build all six lines from the bank."}</span>
    </div>
    ${nextLink("#ending", "Дальше → финал")}
  `);
}

function renderEnding() {
  if (allDone()) state.codeOpen = true;
  return pageWrap("ending", "THE ENDING", "YOUR CODE", "ending-page", "ending-title", `
    <h2 id="ending-title" class="script-title">See you at Winter Wish Hotel</h2>
    <p class="page-subtitle">When every task is ready, the hotel code will open.</p>
    <ul>
      <li>Welcome briefing: <b>${briefingN()}/8</b></li>
      <li>Guests' notes: <b>${notesN()}/8</b> · Rules: <b>${discoveryN()}/3</b></li>
      <li>Reception reports: <b>${reportsN()}/8</b></li>
      <li>Night mystery: <b>${mysteryDone() ? "ready" : "…"}</b></li>
      <li>Review book: <b>${reviewN()}/7</b> · Vote: <b>${voteDone() ? "ready" : "…"}</b></li>
      <li>Homework: <b>${hwN()}/6</b></li>
      <li>Progress: <b>${progressN()}/8</b></li>
    </ul>
    <div class="code-box">
      ${state.codeOpen ? `<p>Код для учителя</p><strong id="finalCode">${CODE}</strong><p>Mr Blizzard will let you have cocoa now, won't he?</p>`
        : `<p>Код ещё закрыт. Дойди до 8/8: брифинг, записки, рапорты, загадка, отзыв, голос и домашка.</p>`}
    </div>
    <h3>Рефлексия</h3>
    <label>Что было самым трудным — want somebody to do, make / let без to, или see / hear?
      <textarea id="reflect" rows="3" style="width:100%;margin-top:8px;border:1px solid var(--line);border-radius:8px;padding:10px;background:#fff;color:var(--ink)">${esc(state.reflect)}</textarea>
    </label>
    <footer class="book-ending"><span></span>See you at Winter Wish Hotel<span></span></footer>
  `);
}

let reviewFocus = 0;
let hwFocus = 0;

function updateChrome() {
  const b = $("btnSound");
  if (b) {
    b.textContent = state.soundOn ? "🔊" : "🔇";
    b.setAttribute("aria-pressed", String(!!state.soundOn));
    b.title = state.soundOn ? "Озвучка включена" : "Озвучка выключена";
  }
  const p = $("prog");
  if (p) p.textContent = progressN() + "/8";
}

function renderAll() {
  const y = window.scrollY;
  $("main").innerHTML = [
    renderStory(),
    renderGuests(),
    renderQuest(),
    renderBriefing(),
    renderNotes(),
    renderGrammar(),
    renderRoleplay(),
    renderMystery(),
    renderReview(),
    renderVote(),
    renderHomework(),
    renderEnding()
  ].join("\n");
  updateChrome();
  bindDynamic();
  window.scrollTo(0, y);
}

function bindDynamic() {}

function fillCorrect() {
  state.briefing = RULES.map((r) => r.answer);
  state.briefChecked = true;
  state.notes = NOTES.map((n) => n.pattern);
  state.notesChecked = true;
  state.discovery = DISCOVERY.map((d) => d.answer);
  state.discoveryChecked = true;
  CALLS.forEach((c, i) => {
    state.reports[i] = [c.accepts[0].replace(/\.$/, "")];
    state.reportsChecked[i] = true;
  });
  WITNESSES.forEach((w) => {
    state.suspects[w.id] = {
      evidence: w.evidence[0],
      place: w.place[0],
      suspicious: w.suspicious,
      reason: ACCUSE_BANK[0]
    };
  });
  state.accuseWho = "Polar Bear Bob";
  state.accuseWhy = [ACCUSE_BANK[0]];
  state.accuseChecked = true;
  state.reviewGuest = "Granny Frost";
  state.review = [
    ["warm my room before breakfast"],
    ["listen carefully"],
    ["bring extra blankets"],
    ["have cocoa after the shift"],
    ["return from the kitchen"],
    ["singing in the corridor"],
    ["the cocoa was perfect"]
  ];
  state.reviewChecked = true;
  state.votePick = "pip";
  state.voteReason = VOTE_FRAMES[3];
  state.voteChecked = true;
  state.homework = [
    ["Snow Fox Lila"],
    ["4"],
    ["bring a second pillow"],
    ["play quiet music"],
    ["have breakfast in bed"],
    ["someone walking to the kitchen"]
  ];
  state.hwChecked = true;
  state.codeOpen = true;
  save();
}

function onMainClick(e) {
  const btn = e.target.closest("button");
  if (!btn || ! $("main").contains(btn)) return;
  const ds = btn.dataset;
  let dirty = false;

  if (ds.gap != null) {
    state.briefFocus = Number(ds.gap);
    dirty = true;
  } else if (ds.rule != null) {
    const word = state.ruleBank[Number(ds.rule)];
    if (word != null) {
      state.briefing[state.briefFocus] = word;
      state.briefChecked = false;
      const next = state.briefing.findIndex((v, i) => i > state.briefFocus && !v);
      const firstEmpty = state.briefing.findIndex((v) => !v);
      state.briefFocus = next >= 0 ? next : (firstEmpty >= 0 ? firstEmpty : state.briefFocus);
      dirty = true;
    }
  } else if (btn.id === "btnBriefCheck") {
    state.briefChecked = true;
    dirty = true;
  } else if (btn.id === "btnBriefTts") {
    speak("Welcome to the team. " + RULE_SCRIPT);
  } else if (ds.note != null) {
    state.notes[Number(ds.note)] = ds.val;
    state.notesChecked = false;
    dirty = true;
  } else if (btn.id === "btnNotesCheck") {
    state.notesChecked = true;
    dirty = true;
  } else if (ds.disc != null) {
    state.discovery[Number(ds.disc)] = ds.val;
    state.discoveryChecked = false;
    dirty = true;
  } else if (btn.id === "btnDiscCheck") {
    state.discoveryChecked = true;
    dirty = true;
  } else if (ds.call != null) {
    state.call = Number(ds.call);
    dirty = true;
  } else if (ds.rep != null) {
    const word = state.reportBank[Number(ds.rep)];
    if (word != null) {
      state.reports[state.call] = (state.reports[state.call] || []).concat(word);
      state.reportsChecked[state.call] = false;
      dirty = true;
    }
  } else if (btn.id === "btnReportCheck") {
    state.reportsChecked[state.call] = true;
    dirty = true;
  } else if (btn.id === "btnReportTts") {
    speak(CALLS[state.call].request);
  } else if (btn.id === "btnAnnounceTts") {
    speak(ANNOUNCE);
  } else if (ds.ev != null) {
    state.suspects[ds.ev].evidence = ds.val;
    dirty = true;
  } else if (ds.pl != null) {
    state.suspects[ds.pl].place = ds.val;
    dirty = true;
  } else if (ds.su != null) {
    state.suspects[ds.su].suspicious = ds.val;
    dirty = true;
  } else if (ds.rs != null) {
    state.suspects[ds.rs].reason = ds.val;
    dirty = true;
  } else if (ds.who != null) {
    state.accuseWho = ds.who;
    state.accuseChecked = false;
    dirty = true;
  } else if (ds.acc != null) {
    const word = ACCUSE_BANK[Number(ds.acc)];
    if (word != null) {
      state.accuseWhy = state.accuseWhy.concat(word);
      state.accuseChecked = false;
      dirty = true;
    }
  } else if (btn.id === "btnAccuseCheck") {
    state.accuseChecked = true;
    dirty = true;
  } else if (ds.rg != null) {
    state.reviewGuest = ds.rg;
    dirty = true;
  } else if (ds.rev != null) {
    const word = state.reviewBank[Number(ds.rev)];
    if (word != null) {
      state.review[reviewFocus] = (state.review[reviewFocus] || []).concat(word);
      state.reviewChecked = false;
      dirty = true;
    }
  } else if (ds.revfocus != null) {
    reviewFocus = Number(ds.revfocus);
    dirty = true;
  } else if (btn.id === "btnReviewCheck") {
    state.reviewChecked = true;
    dirty = true;
  } else if (ds.vote != null) {
    state.votePick = ds.vote;
    if (state.votePick && state.voteReason) state.voteChecked = true;
    dirty = true;
  } else if (ds.vreason != null) {
    state.voteReason = ds.vreason;
    if (state.votePick && state.voteReason) state.voteChecked = true;
    dirty = true;
  } else if (ds.hw != null) {
    const word = state.hwBank[Number(ds.hw)];
    if (word != null) {
      state.homework[hwFocus] = (state.homework[hwFocus] || []).concat(word);
      state.hwChecked = false;
      dirty = true;
    }
  } else if (ds.hwfocus != null) {
    hwFocus = Number(ds.hwfocus);
    dirty = true;
  } else if (btn.id === "btnHwCheck") {
    state.hwChecked = true;
    dirty = true;
  }

  if (ds.rm != null) {
    const i = Number(ds.rmI);
    const line = ds.line != null ? Number(ds.line) : null;
    if (ds.rm === "report") {
      state.reports[state.call].splice(i, 1);
      state.reportsChecked[state.call] = false;
      dirty = true;
    } else if (ds.rm === "accuse") {
      state.accuseWhy.splice(i, 1);
      state.accuseChecked = false;
      dirty = true;
    } else if (ds.rm === "review") {
      reviewFocus = line != null ? line : reviewFocus;
      state.review[reviewFocus].splice(i, 1);
      state.reviewChecked = false;
      dirty = true;
    } else if (ds.rm === "homework") {
      hwFocus = line != null ? line : hwFocus;
      state.homework[hwFocus].splice(i, 1);
      state.hwChecked = false;
      dirty = true;
    }
  }

  if (dirty) {
    save();
    renderAll();
  }
}

function bindStatic() {
  $("main").addEventListener("click", onMainClick);
  $("main").addEventListener("click", (e) => {
    if (e.target.closest("button.built-chip, button.tile, button.choice")) return;
    const rev = e.target.closest("[data-revfocus]");
    const hw = e.target.closest("[data-hwfocus]");
    if (rev) {
      const n = Number(rev.dataset.revfocus);
      if (n !== reviewFocus) { reviewFocus = n; renderAll(); }
    } else if (hw) {
      const n = Number(hw.dataset.hwfocus);
      if (n !== hwFocus) { hwFocus = n; renderAll(); }
    }
  });
  $("main").addEventListener("input", (e) => {
    if (e.target && e.target.id === "reflect") {
      state.reflect = e.target.value;
      save();
    }
  });
  $("btnSound").addEventListener("click", () => {
    state.soundOn = !state.soundOn;
    if (!state.soundOn && window.speechSynthesis) speechSynthesis.cancel();
    save();
    updateChrome();
  });
  $("btnReset").addEventListener("click", () => {
    if (!confirm("Начать урок заново? Весь прогресс будет сброшен.")) return;
    if (window.speechSynthesis) speechSynthesis.cancel();
    const soundOn = state.soundOn;
    state = defaults();
    state.soundOn = soundOn;
    reviewFocus = 0;
    hwFocus = 0;
    save();
    renderAll();
    location.hash = "#story";
    window.scrollTo(0, 0);
  });
}

function boot() {
  bindStatic();
  renderAll();
}

window.__wwhqa = {
  get state() { return state; },
  setState(patch) { Object.assign(state, patch); save(); },
  defaults, fillCorrect, save, renderAll,
  KEY, CODE,
  briefingN, briefingDone, notesN, notesDone, discoveryN, discoveryDone,
  reportOk, reportsN, reportsDone, tableFilled, accuseOk, mysteryDone,
  reviewLineOk, reviewN, reviewDone, voteDone, hwLineOk, hwN, hwDone,
  progressN, allDone
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
