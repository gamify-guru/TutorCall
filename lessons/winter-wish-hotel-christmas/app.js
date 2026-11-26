const KEY = "tutorcall-winter-wish-hotel-christmas-v1";
const CODE = "WWH-XMS-CAKE";
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
    .replace(/\bwont\b/g, "won't");
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

const STORY = "High in the snowy mountains, far from busy towns, there is a warm light in the dark. That light belongs to Winter Wish Hotel. The hotel is old and beautiful. There is a fireplace in the lobby, a tall Christmas tree by the stairs, and wide windows that look out onto the pine forest. Every December, unusual guests arrive with suitcases, secrets and wishes. Some of them want the staff to work miracles. Some of them never let anyone rest. And some of them hear very strange things at night. This year the hotel is full. In Room 7, Granny Frost is already writing a list of things she expects the staff to do. In Room 12, Grumpy Elf Norbert is crossing his arms: the manager never lets him use the sauna after nine. In Room 3, Polar Bear Bob is almost asleep in his striped pyjamas — but he still hears every sound in the corridor. In Room 5, Little Penguin Pip is writing a letter: he wants Santa to visit the hotel. And at the reception desk stands Mr Blizzard, the manager, with a steaming mug of hot chocolate. He will make you work hard today. He will also let you have a cup of cocoa when the shift is over. Something strange is going to happen tonight. Guests will hear footsteps. Someone will see a shadow near the kitchen. And in the morning, the Christmas banquet cake will be gone.";

const TIMELINE = [
  { time: "18:00", text: "Mr Blizzard makes the chef leave the banquet cake on the kitchen table." },
  { time: "00:15", text: "A crash in the kitchen. He heard it from the reception desk." },
  { time: "00:15", text: "A shadow moving near the kitchen door. Granny saw / Norbert saw Bob." },
  { time: "07:00", text: "Crumbs on the floor. A smear of chocolate on a striped thread." }
];

const GUESTS = [
  { id: "granny", name: "Granny Frost", room: "Room 7", img: "granny-frost",
    role: "The strict regular",
    quote: "I expect the maids to clean my room before 8!",
    personality: ["Chronically early", "Fan of extra blankets", "Notices everything"],
    likes: "Calm corridors, hot tea at 7 a.m., golden stars",
    dislikes: "Messy rooms, small talk, late breakfasts",
    complexObject: "“I expect the maids to clean my room before 8 a.m.”",
    politeness: 62, patience: 18, suspicion: 45 },
  { id: "norbert", name: "Grumpy Elf Norbert", room: "Room 12", img: "norbert",
    role: "The grumbler with a suitcase of stickers",
    quote: "The manager never lets me use the sauna after nine!",
    personality: ["Allergic to waiting", "Collector of stickers", "Secretly soft-hearted"],
    likes: "Saunas after 10 p.m., fixed heating, peace and quiet",
    dislikes: "Cold showers, mouse in the lobby, early bedtime",
    complexObject: "“Yesterday the waiter made me wait for forty minutes.”",
    politeness: 24, patience: 8, suspicion: 72 },
  { id: "bob", name: "Polar Bear Bob", room: "Room 3", img: "polar-bob",
    role: "The sleepy corridor witness",
    quote: "I heard someone singing in the corridor at midnight.",
    personality: ["Half-asleep always", "Striped pyjamas, plus one", "Candle connoisseur"],
    likes: "Breakfast in bed after eleven, silence, an extra blanket",
    dislikes: "Midnight carol singers, early risers, crumbs",
    complexObject: "“I saw Norbert walking to the kitchen after midnight.”",
    politeness: 88, patience: 55, suspicion: 90 },
  { id: "pip", name: "Little Penguin Pip", room: "Room 5", img: "pip",
    role: "The dreamer with a letter",
    quote: "I want Santa to visit our hotel this Christmas.",
    personality: ["Hopelessly hopeful", "Sings when nervous", "Writes 4 letters a day"],
    likes: "Jingle Bells in the lobby, fish-shaped cookies, carol singers",
    dislikes: "Silence, sad endings, anyone who stops the singing",
    complexObject: "“I would like the chef to bake fish-shaped cookies.”",
    politeness: 95, patience: 70, suspicion: 25 },
  { id: "blizzard", name: "Mr Blizzard", room: "Reception", img: "blizzard",
    role: "The manager — strict, but secretly kind",
    quote: "I'll make you work hard — but I'll let you have hot chocolate.",
    personality: ["Rules are rules (mostly)", "Hot chocolate, always", "Heart of marshmallow"],
    likes: "A spotless lobby, early staff, one perfect Christmas cake",
    dislikes: "Shouting, unlocked kitchens, disappearing cakes",
    complexObject: "“I made the chef leave the cake on the kitchen table.”",
    politeness: 74, patience: 42, suspicion: 10 }
];

const RULES = [
  { id: 1, text: "I want you to be polite to every guest.", pattern: "want sb to do", type: "want" },
  { id: 2, text: "I expect you to smile at reception.", pattern: "expect sb to do", type: "want" },
  { id: 3, text: "I will make you work hard today.", pattern: "make sb do", type: "make" },
  { id: 4, text: "I will let you have hot chocolate after the shift.", pattern: "let sb do", type: "make" },
  { id: 5, text: "I don't want anyone to be late.", pattern: "want sb to do", type: "want" },
  { id: 6, text: "I expect you to listen carefully.", pattern: "expect sb to do", type: "want" },
  { id: 7, text: "I will never let you shout at a guest.", pattern: "let sb do", type: "make" },
  { id: 8, text: "I want you to help each other.", pattern: "want sb to do", type: "want" }
];
const BRIEF_SCRIPT = "Welcome to Winter Wish Hotel. I am glad to see you. Today I will make you work hard — but I will also let you have the best hot chocolate in the mountains. Listen carefully. These are the rules of my hotel. Rule one: I want you to be polite to every guest. Rule two: I expect you to smile at reception. Rule three: I will make you work hard today. Rule four: I will let you have hot chocolate after the shift. Rule five: I don’t want anyone to be late. Rule six: I expect you to listen carefully. Rule seven: I will never let you shout at a guest. Rule eight: I want you to help each other. Now — off you go, the guests are waiting!";
const REBUILD = [
  { id: "r1", prefix: "Mr Blizzard wants us to", answer: "be polite to every guest" },
  { id: "r2", prefix: "He expects us to", answer: "smile at reception" },
  { id: "r3", prefix: "He will make us", answer: "work hard today" },
  { id: "r4", prefix: "He will let us", answer: "have hot chocolate after the shift" }
];
const REBUILD_BANK = ["be polite to every guest", "smile at reception", "work hard today", "have hot chocolate after the shift", "shout at a guest", "arrive late on purpose"];

const NOTES = [
  { id: 1, from: "Granny Frost", room: "Room 7", text: "“I expect the maids to clean my room before 8 a.m.!”", group: "want" },
  { id: 2, from: "Granny Frost", room: "Room 7", text: "“I want the staff to bring extra blankets to my room.”", group: "want" },
  { id: 3, from: "Elf Norbert", room: "Room 12", text: "“The manager never lets me use the sauna after nine!”", group: "make" },
  { id: 4, from: "Elf Norbert", room: "Room 12", text: "“Yesterday the waiter made me wait for forty minutes.”", group: "make" },
  { id: 5, from: "Polar Bear Bob", room: "Room 3", text: "“I heard someone singing in the corridor at midnight.”", group: "see" },
  { id: 6, from: "Polar Bear Bob", room: "Room 3", text: "“I saw a shadow moving near the kitchen door.”", group: "see" },
  { id: 7, from: "Little Penguin Pip", room: "Room 5", text: "“I want Santa to visit our hotel this Christmas.”", group: "want" },
  { id: 8, from: "Little Penguin Pip", room: "Room 5", text: "“I would like the chef to bake fish-shaped cookies.”", group: "want" },
  { id: 9, from: "Little Penguin Pip", room: "Room 5", text: "“Please don’t make the carol singers stop — I love them!”", group: "make" },
  { id: 10, from: "Granny Frost", room: "Room 7", text: "“I saw Norbert walking to the kitchen after midnight.”", group: "see" },
  { id: 11, from: "Polar Bear Bob", room: "Room 3", text: "“They never let me have breakfast after eleven.”", group: "make" },
  { id: 12, from: "Elf Norbert", room: "Room 12", text: "“I expect the staff to fix the heating in my room today!”", group: "want" }
];
const BASKETS = [
  { id: "want", title: "want · expect · would like", sub: "+ somebody + to do" },
  { id: "make", title: "make · let", sub: "+ somebody + do (no to!)" },
  { id: "see", title: "see · hear", sub: "+ somebody + do / doing" }
];
const DISCOVERY = [
  { q: "After want / expect / would like we use…", options: ["to + infinitive", "infinitive without to", "-ing only"], answer: "to + infinitive",
    why: "После want / expect / would like всегда нужен to + инфинитив: somebody to do." },
  { q: "After make / let we use…", options: ["to + infinitive", "infinitive without to", "the past simple"], answer: "infinitive without to",
    why: "После make / let глагол идёт без to: somebody do." },
  { q: "After see / hear we use…", options: ["do only", "doing only", "do or doing"], answer: "do or doing",
    why: "После see / hear — do (целое действие) или doing (процесс)." }
];

const CALLS = [
  { id: 1, room: "7", guest: "Granny Frost", img: "granny-frost",
    request: "You want the staff to bring extra blankets and expect them to hurry.",
    report: "Room 7 wants us to bring extra blankets.",
    accepts: ["Room 7 wants us to bring extra blankets.", "Room 7 wants the staff to bring extra blankets.", "Room 7 expects us to bring extra blankets."],
    need: ["room 7", "blanket"] },
  { id: 2, room: "7", guest: "Granny Frost", img: "granny-frost",
    request: "You expect the maid to clean your room immediately and want tea at 7 a.m.",
    report: "Room 7 expects the maid to clean the room immediately.",
    accepts: ["Room 7 expects the maid to clean the room immediately.", "Room 7 wants the maid to clean the room immediately.", "Room 7 expects the staff to clean the room immediately."],
    need: ["room 7", "clean"] },
  { id: 3, room: "12", guest: "Grumpy Elf Norbert", img: "norbert",
    request: "You want the manager to let you use the sauna after 10 p.m.",
    report: "Room 12 wants the manager to let him use the sauna after ten.",
    accepts: ["Room 12 wants the manager to let him use the sauna after ten.", "Room 12 wants Mr Blizzard to let him use the sauna after 10 p.m.", "Room 12 wants the manager to let him use the sauna after 10 p.m.", "Room 12 would like the manager to let him use the sauna after ten."],
    need: ["room 12", "sauna"] },
  { id: 4, room: "12", guest: "Grumpy Elf Norbert", img: "norbert",
    request: "The cold shower made you shout. You want the staff to fix the heating today.",
    report: "Room 12 wants us to fix the heating today.",
    accepts: ["Room 12 wants us to fix the heating today.", "Room 12 wants the staff to fix the heating today.", "Room 12 expects us to fix the heating today."],
    need: ["room 12", "heating"] },
  { id: 5, room: "12", guest: "Grumpy Elf Norbert", img: "norbert",
    request: "You saw a mouse in the lobby and want the staff to do something about it.",
    report: "Room 12 wants us to do something about the mouse.",
    accepts: ["Room 12 wants us to do something about the mouse.", "Room 12 wants the staff to do something about the mouse.", "Room 12 expects us to do something about the mouse."],
    need: ["room 12", "mouse"] },
  { id: 6, room: "3", guest: "Polar Bear Bob", img: "polar-bob",
    request: "You heard singing in the corridor and want the staff to stop the noise.",
    report: "Room 3 wants us to stop the noise so he can sleep.",
    accepts: ["Room 3 wants us to stop the noise so he can sleep.", "Room 3 wants the staff to stop the noise.", "Room 3 wants us to stop the noise."],
    need: ["room 3", "noise"] },
  { id: 7, room: "3", guest: "Polar Bear Bob", img: "polar-bob",
    request: "You want the staff to let you have breakfast in bed after eleven.",
    report: "Room 3 wants us to let him have breakfast in bed after eleven.",
    accepts: ["Room 3 wants us to let him have breakfast in bed after eleven.", "Room 3 would like us to let him have breakfast in bed after eleven.", "Room 3 wants the staff to let him have breakfast in bed after eleven."],
    need: ["room 3", "breakfast"] },
  { id: 8, room: "5", guest: "Little Penguin Pip", img: "pip",
    request: "You want the chef to bake a small fish cake and would like Santa to find your letter.",
    report: "Room 5 wants the chef to bake a small fish cake.",
    accepts: ["Room 5 wants the chef to bake a small fish cake.", "Room 5 would like the chef to bake a small fish cake.", "Room 5 wants the chef to bake a fish cake."],
    need: ["room 5", "chef", "cake"] },
  { id: 9, room: "5", guest: "Little Penguin Pip", img: "pip",
    request: "You would like the pianist to play Jingle Bells. Please don’t make the carol singers stop.",
    report: "Room 5 would like the pianist to play Jingle Bells.",
    accepts: ["Room 5 would like the pianist to play Jingle Bells.", "Room 5 wants the pianist to play Jingle Bells."],
    need: ["room 5", "pianist"] },
  { id: 10, room: "7", guest: "Granny Frost", img: "granny-frost",
    request: "You expect the staff to decorate the Christmas tree before lunch and want someone to hang your golden star at the top.",
    report: "Room 7 expects us to decorate the Christmas tree before lunch.",
    accepts: ["Room 7 expects us to decorate the Christmas tree before lunch.", "Room 7 expects the staff to decorate the Christmas tree before lunch.", "Room 7 wants us to decorate the Christmas tree before lunch."],
    need: ["room 7", "tree"] }
];
const REPORT_BANK = [
  "Room 7", "Room 12", "Room 3", "Room 5",
  "wants us to", "wants the staff to", "expects us to", "expects the maid to", "expects the staff to",
  "would like us to", "wants the manager to", "wants Mr Blizzard to", "wants the chef to", "would like the chef to",
  "wants the pianist to", "would like the pianist to", "wants the staff to let him",
  "bring extra blankets", "clean the room immediately",
  "let him use the sauna after ten", "fix the heating today",
  "do something about the mouse", "stop the noise", "stop the noise so he can sleep",
  "let him have breakfast in bed after eleven",
  "bake a small fish cake", "play Jingle Bells",
  "decorate the Christmas tree before lunch",
  "open the gift shop", "sing in the lobby", "carry the suitcase"
];

const ANNOUNCE = "Attention, new staff. The Christmas banquet cake has disappeared. I made the chef leave it on the kitchen table last night. I let the kitchen door stay unlocked because I expected the early staff to decorate the cake at 6 a.m. At about 12:15 I heard a crash in the kitchen. This morning I saw crumbs on the floor — and a smear of chocolate on a blue-and-white striped thread. Find out who took it!";
const WITNESSES = [
  { id: "granny", room: "7", name: "Granny Frost", img: "granny-frost",
    statements: [
      "I couldn’t sleep. At about midnight I saw Norbert walking towards the kitchen. He was holding something small — maybe a key? A few minutes later I heard the kitchen door creak. I didn’t see him come back. I didn’t hear anyone singing — my door was almost closed."
    ] },
  { id: "norbert", room: "12", name: "Grumpy Elf Norbert", img: "norbert",
    statements: [
      "The manager never lets me use the sauna after nine, but I still wanted someone to open it for me. At midnight I walked down the corridor — past the kitchen, towards the sauna. I saw Bob standing near the kitchen door with a candle. He looked half-asleep. I heard a quiet munching sound… or was it snoring? I did NOT go into the kitchen, and I did not take any cake!"
    ] },
  { id: "bob", room: "3", name: "Polar Bear Bob", img: "polar-bob",
    statements: [
      "I heard someone singing in the corridor around midnight — a happy, quiet Christmas song. I got up with my candle. I saw Pip walking towards the lobby. Later I heard someone opening the fridge… I think. I was very, very sleepy. I don’t remember going to the kitchen at all. This morning I found some crumbs in my bed. How strange!"
    ] },
  { id: "pip", room: "5", name: "Little Penguin Pip", img: "pip",
    statements: [
      "I wanted Santa to visit, so I went to the lobby to look at the Christmas tree. I was singing a Christmas song. I saw Norbert going down the corridor (towards the sauna, I think). Later I saw Bob coming back from the kitchen. There was something brown on his striped pyjamas — I thought it was hot chocolate! I heard someone in the kitchen, but I didn’t go in. I would like you to believe me!"
    ] }
];
const EVIDENCE_BANK = [
  "Norbert walking towards the kitchen",
  "the kitchen door creak",
  "Bob standing near the kitchen door with a candle",
  "a quiet munching sound",
  "someone singing in the corridor",
  "Pip walking towards the lobby",
  "Norbert going down the corridor",
  "Bob coming back with something brown on his pyjamas",
  "someone opening the fridge",
  "Santa climbing the tree"
];
const PLACE_BANK = ["near the kitchen", "in the corridor", "on the way to the sauna", "in the lobby", "in his room"];
const ACCUSE_WHO = ["Granny Frost", "Grumpy Elf Norbert", "Polar Bear Bob", "Little Penguin Pip"];
const ACCUSE_WHY = [
  { id: "ev-granny", label: "I heard the kitchen door creak after midnight (Granny)", correct: false },
  { id: "ev-norbert", label: "I heard a quiet munching sound near the kitchen (Norbert)", correct: false },
  { id: "ev-crash", label: "I heard a crash in the kitchen at 12:15 (Mr Blizzard)", correct: false },
  { id: "ev-pyjamas", label: "I saw Bob coming back from the kitchen — something brown on his striped pyjamas (Pip)", correct: true },
  { id: "ev-crumbs", label: "I found cake crumbs in my bed this morning (Bob)", correct: true }
];

const REVIEW_STEMS = [
  { chip: "want / expect sb to do", prefix: "I want / I expect the hotel (or the staff)…", kind: "to", why: "После want / expect нужен to + глагол." },
  { chip: "want / would like sb to do", prefix: "I also want / would like someone…", kind: "to", why: "После would like someone нужен to + глагол." },
  { chip: "make / let sb do — no “to”!", prefix: "The manager makes us / lets us…", kind: "bare", why: "После make / let глагол идёт без to." },
  { chip: "see / hear sb do / doing", prefix: "Last night I saw / I heard…", kind: "sense", why: "После saw / heard — глагол без to или с -ing." },
  { chip: "favourite thing", prefix: "My favourite thing about the hotel was…", kind: "free", why: "Закончи фразу словами из банка." },
  { chip: "would / would not return", prefix: "I would / would not come back because…", kind: "free", why: "Напиши причину из банка." }
];
const REVIEW_BANK = [
  "to clean my room before eight", "to bring extra blankets", "to listen carefully",
  "to bake fish-shaped cookies", "to play Jingle Bells", "to decorate the Christmas tree",
  "have hot chocolate after the shift", "wait at reception", "use the sauna after nine",
  "someone singing in the corridor", "Norbert walking to the kitchen", "Bob coming back from the kitchen",
  "the quiet breakfast", "the Christmas tree", "the cocoa", "the corridor was too noisy"
];
const VOTE_REVIEWS = [
  { id: "rev-granny", author: "Granny Frost", handle: "room_7_strictly", img: "granny-frost", rating: 4,
    text: "I expect the maids to clean my room before 8 — and they did, mostly. I would like the staff to bring extra blankets sooner next time. The manager lets us have a quiet breakfast after ten, which is decent of him. Last night I saw a shadow moving near the kitchen — I heard the door creak at midnight. Someone clearly had cake business. Would I come back? Of course — I expect turndown service by six." },
  { id: "rev-pip", author: "Little Penguin Pip", handle: "pip_writes_letters", img: "pip", rating: 5,
    text: "I want Santa to visit this hotel and I think the chef would like him to join for dinner. The pianist plays Jingle Bells and the manager lets the carol singers stay — nobody makes me stop singing, which is good because I am never quiet. I heard someone singing in the corridor at midnight — it was lovely. I saw a candle near the kitchen. I would like to come back every Christmas forever." },
  { id: "rev-norbert", author: "Grumpy Elf Norbert", handle: "norbert_strikes_back", img: "norbert", rating: 2,
    text: "The waiter made me wait forty minutes for a cold shower, so the staff know me by name now — the angry one. I wanted the manager to let me use the sauna after nine and he — well. I expect the heating to be FIXED, not discussed. I saw Bob walking past the kitchen with a candle at midnight, half-asleep. I heard munching. I would like my sticker suitcase to travel alone next time. Would I come back? Maybe, but I would expect better." }
];
const VOTE_FRAMES = [
  "I would like Granny Frost to win because her review is careful and polite.",
  "I would like Little Penguin Pip to win because his Christmas wishes are sweet.",
  "I would like Grumpy Elf Norbert to win because his review made me laugh.",
  "I voted for this review because I heard a real hotel voice in it.",
  "This writer used see / hear somebody doing really well.",
  "I expect this review to hang by the reception desk."
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
  "Fireside Fox Mira", "Bellhop Badger Theo", "Cocoa Owl Vera", "Sleigh Mouse Nikki",
  "8", "9", "11", "14", "16",
  "bring a midnight cocoa", "hang a golden star", "warm the room at six",
  "let them use the sauna", "play quiet carols", "have breakfast after eleven",
  "wait by the Christmas tree", "sing in the lobby",
  "someone walking to the kitchen", "a door creaking after midnight", "Bob coming back with a candle"
];

const GRAMMAR = [
  { n: "Type 1", label: "Wishes, plans & expectations", header: "bg-navy-700",
    formula: "want / expect / would like + somebody + to do",
    examples: [
      { tag: "WANT", text: "Pip wants Santa to visit the hotel." },
      { tag: "EXPECT", text: "Granny expects the maids to clean her room before 8." },
      { tag: "WOULD LIKE", text: "I would like the pianist to play Jingle Bells." }
    ],
    footnote: "After these verbs we always use to + infinitive. We do not say “I want that he…”." },
  { n: "Type 2", label: "Obligation & permission", header: "bg-brick-500",
    formula: "make / let + somebody + do — no “to”!",
    examples: [
      { tag: "MAKE", text: "The waiter made Norbert wait for forty minutes." },
      { tag: "LET", text: "The manager never lets Norbert use the sauna after nine." },
      { tag: "MAKE / LET", text: "I’ll make you work hard, but I’ll let you have hot chocolate." }
    ],
    footnote: "Make = force or cause to do something. Let = allow. Never “make him to wait” or “let me to sleep”." },
  { n: "Type 3", label: "What we see & hear", header: "bg-pine-600",
    formula: "see / hear / watch + somebody + do or doing",
    examples: [
      { tag: "HEAR + -ING", text: "Bob heard someone singing in the corridor. — part of the action, still in progress" },
      { tag: "SEE + -ING", text: "Granny saw Norbert walking to the kitchen. — in the middle of it" },
      { tag: "SEE + DO", text: "I saw the chef leave the kitchen. — the whole action, start to end" }
    ],
    footnote: "Infinitive without to = complete action. -ing = action in progress. Never “I saw him to go”." }
];
const SLIPS = [
  { wrong: "I want that he brings blankets.", right: "I want him to bring blankets." },
  { wrong: "The manager made me to wait.", right: "The manager made me wait." },
  { wrong: "He never lets me to use the sauna.", right: "He never lets me use the sauna." },
  { wrong: "I heard someone to sing / I heard he singing.", right: "I heard someone sing / singing." }
];

function emptySuspects() {
  return Object.fromEntries(WITNESSES.map((w) => [w.id, { evidence: "", place: "", suspicious: "" }]));
}
function emptyNotes() { return Object.fromEntries(NOTES.map((n) => [n.id, ""])); }

function defaults() {
  return {
    soundOn: true,
    ruleType: Array(RULES.length).fill(""),
    ruleTypeChecked: false,
    rebuild: { r1: null, r2: null, r3: null, r4: null },
    rebuildFocus: "r1",
    rebuildChecked: false,
    rebuildBank: shuffle(REBUILD_BANK.slice()),
    notes: emptyNotes(),
    notePick: null,
    notesChecked: false,
    discovery: [null, null, null],
    discoveryChecked: false,
    call: 0,
    reports: Array(CALLS.length).fill(null).map(() => []),
    reportsChecked: Array(CALLS.length).fill(false),
    reportBank: shuffle(REPORT_BANK.slice()),
    suspects: emptySuspects(),
    accuseWho: "",
    accuseWhy: "",
    accuseChecked: false,
    reviewGuest: "Granny Frost · Room 7",
    review: Array(REVIEW_STEMS.length).fill(null).map(() => []),
    reviewChecked: false,
    reviewBank: shuffle(REVIEW_BANK.slice()),
    votePick: "",
    voteReason: "",
    homework: Array(HW_LINES.length).fill(null).map(() => []),
    hwChecked: false,
    hwBank: shuffle(HW_BANK.slice()),
    reflect: "",
    codeOpen: false,
    modal: null
  };
}

let state = defaults();
try {
  const raw = JSON.parse(localStorage.getItem(KEY) || "null");
  if (raw && typeof raw === "object") {
    const fresh = defaults();
    state = Object.assign({}, fresh, raw);
    state.soundOn = state.soundOn !== false;
    if (!Array.isArray(state.ruleType) || state.ruleType.length !== RULES.length) state.ruleType = fresh.ruleType;
    if (!state.rebuild || Object.keys(state.rebuild).length !== 4) state.rebuild = fresh.rebuild;
    if (!Array.isArray(state.rebuildBank) || state.rebuildBank.length !== REBUILD_BANK.length) state.rebuildBank = fresh.rebuildBank;
    if (!state.notes || Object.keys(state.notes).length !== NOTES.length) state.notes = fresh.notes;
    if (!Array.isArray(state.discovery) || state.discovery.length !== 3) state.discovery = fresh.discovery;
    if (!Array.isArray(state.reports) || state.reports.length !== CALLS.length) state.reports = fresh.reports;
    if (!Array.isArray(state.reportBank) || state.reportBank.length !== REPORT_BANK.length) state.reportBank = fresh.reportBank;
    if (!state.suspects || Object.keys(state.suspects).length !== WITNESSES.length) state.suspects = fresh.suspects;
    if (!Array.isArray(state.review) || state.review.length !== REVIEW_STEMS.length) state.review = fresh.review;
    if (!Array.isArray(state.homework) || state.homework.length !== HW_LINES.length) state.homework = fresh.homework;
    if (!Array.isArray(state.hwBank) || state.hwBank.length !== HW_BANK.length) state.hwBank = fresh.hwBank;
    state.modal = null;
    state.notePick = null;
  }
} catch (e) { state = defaults(); }

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
}

function ruleTypeN() { return RULES.filter((r, i) => state.ruleType[i] === r.type).length; }
function ruleTypeDone() { return ruleTypeN() === RULES.length; }
function rebuildN() { return REBUILD.filter((r) => state.rebuild[r.id] === r.answer).length; }
function rebuildDone() { return rebuildN() === REBUILD.length; }
function briefingDone() { return ruleTypeDone() && rebuildDone(); }
function notesN() { return NOTES.filter((n) => state.notes[n.id] === n.group).length; }
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
    return s.evidence && s.place && s.suspicious;
  });
}
function accuseOk() {
  const who = norm(state.accuseWho);
  const ev = ACCUSE_WHY.find((e) => e.label === state.accuseWhy);
  return who.includes("bob") && !!(ev && ev.correct);
}
function mysteryDone() { return tableFilled() && accuseOk(); }
function reviewLineOk(i) {
  const text = joinTokens(state.review[i] || []);
  const n = norm(text);
  if (!n || n.split(" ").length < 2) return false;
  const k = REVIEW_STEMS[i].kind;
  if (k === "to") return /\bto\b/.test(n) || /^(warm|bring|listen|find|bake|play|keep|help|clean|decorate|hang)/.test(n);
  if (k === "bare") return !/\bto\b/.test(n);
  return true;
}
function reviewN() { return REVIEW_STEMS.filter((_, i) => reviewLineOk(i)).length; }
function reviewDone() { return reviewN() === REVIEW_STEMS.length; }
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
function nextLink(href, text) {
  return `<p class="next-row"><a class="btn-gold" href="${href}" style="text-decoration:none">${esc(text)}</a></p>`;
}

let reviewFocus = 0;
let hwFocus = 0;

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

function stageWrap(id, n, time, title, skills, grammar, inner) {
  const doneMap = { s1: briefingDone(), s2: notesDone() && discoveryDone(), s3: reportsDone(), s4: mysteryDone(), s5: reviewDone(), "stage-6": voteDone() };
  const done = !!doneMap[id];
  return `<section id="${id}" class="scroll-mt-24 mt-8" tabindex="-1">
    <div class="paper-card relative overflow-hidden ${done ? "shadow-[0_0_0_2px_rgba(71,106,85,.65),0_30px_70px_rgba(4,12,24,.6)]" : ""}">
      <span aria-hidden="true" class="pointer-events-none absolute -right-3 -top-7 select-none font-display text-[7.5rem] font-black leading-none text-gold-600/15 sm:text-[9rem]">${n}</span>
      <header class="relative border-b border-gold-600/30 p-5 sm:p-7 sm:pb-5">
        <p class="kicker text-gold-700">Stage ${n} · ${esc(time)}</p>
        <h3 class="script mt-1.5 text-3xl leading-tight text-navy-800 sm:text-5xl">${esc(title)}</h3>
        <p class="mt-2 font-sans text-[9px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-ink-soft sm:text-[9.5px]">
          <span class="text-navy-700">Skills</span> ${esc(skills)}
          <span class="mx-2 text-gold-600">◆</span>
          <span class="text-brick-500">Grammar</span> ${esc(grammar)}
        </p>
        ${done ? `<p class="mt-2 font-sans text-[10px] font-extrabold uppercase tracking-[0.2em] text-pine-600">Stage complete</p>` : ""}
      </header>
      <div class="relative p-5 sm:p-7">${inner}</div>
    </div>
  </section>`;
}

function renderHero() {
  return `<section id="top" class="relative overflow-hidden">
    ${pic("hero-lobby", "The grand lobby of Winter Wish Hotel at night — fireplace, Christmas tree and snow beyond the windows", 'class="absolute inset-0 h-full w-full object-cover object-[62%_center]"')}
    <div class="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/5"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/70"></div>
    <canvas id="snow" class="pointer-events-none absolute inset-0" aria-hidden="true"></canvas>
    <div class="relative mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-28 pt-24 sm:px-8 sm:pt-28 lg:grid-cols-12 lg:gap-6 lg:pb-32 lg:pt-20">
      <div class="lg:col-span-7">
        <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/35 bg-navy-950/60 px-4 py-1.5 backdrop-blur">
          <span class="font-sans text-[9.5px] font-bold uppercase tracking-[0.28em] text-gold-300">A 45-minute Christmas detective · A2+/B1 · Grade 7</span>
        </div>
        <h1 class="select-none">
          <span class="script block -rotate-1 text-4xl leading-[1.05] text-gold-300 drop-shadow-[0_2px_14px_rgba(217,188,110,.35)] sm:text-6xl lg:text-[4.6rem]">Welcome to</span>
          <span class="block font-display text-[3.4rem] font-black leading-[0.95] tracking-tight text-paper drop-shadow-[0_6px_30px_rgba(0,0,0,.65)] sm:text-8xl lg:text-[7.2rem]">Winter<br>Wish <span class="bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent">Hotel</span></span>
        </h1>
        <p class="mt-6 max-w-md font-serif text-base italic leading-relaxed text-paper/90 sm:text-lg">The Christmas banquet cake has vanished, every guest wants you to do something about it — and your shift has only just begun.</p>
        <div class="goal-box !bg-navy-900/80 !text-paper !border-l-gold-400" style="background:#12233a;color:#fbf7ec;border-left:3px solid #d9bc6e">Цель урока: научиться строить <b>Complex Object</b> — want / expect / would like somebody <i>to do</i>, make / let somebody <i>do</i> и see / hear somebody <i>do / doing</i>. Ты новая смена в Winter Wish Hotel: слушай мистера Близзарда, помогай гостям и найди, кто взял рождественский торт.</div>
        <div class="mt-8 flex flex-wrap items-center gap-4">
          <a href="#story" class="btn-gold">Begin the lesson</a>
          <a href="#guests" class="btn-ghost">Meet the guests</a>
        </div>
        <div class="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-paper/15 pt-6 text-paper/80">
          <span class="font-sans text-[10px] font-semibold uppercase tracking-[0.18em]">45 minutes</span>
          <span class="font-sans text-[10px] font-semibold uppercase tracking-[0.18em]">7th grade</span>
          <span class="font-sans text-[10px] font-semibold uppercase tracking-[0.18em]">Complex Object</span>
        </div>
      </div>
      <div class="relative hidden justify-center lg:col-span-5 lg:flex">
        <div class="relative w-[21rem] xl:w-[23.5rem]">
          <div class="overflow-hidden rounded-b-xl rounded-t-[999px] border-[3px] border-gold-500/70 bg-navy-900 shadow-[0_0_0_1px_rgba(0,0,0,.6),0_40px_80px_rgba(0,0,0,.6)]">
            ${pic("blizzard", "Mr Blizzard — the strict, secretly kind manager of Winter Wish Hotel, holding hot chocolate", 'class="aspect-[3/4.15] w-full object-cover object-top"')}
          </div>
          <div class="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 border border-gold-500/70 bg-navy-950/95 px-6 py-2 text-center shadow-[0_10px_30px_rgba(0,0,0,.6)] backdrop-blur">
            <p class="font-display text-base font-bold text-gold-300">Mr Blizzard</p>
            <p class="font-sans text-[8px] font-semibold uppercase tracking-[0.3em] text-paper/60">Manager · Reception</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderStory() {
  const paras = STORY.split(/(?<=\.)\s+(?=[A-Z“])/).reduce((acc, s) => {
    if (!acc.length || acc[acc.length-1].length > 360) acc.push(s);
    else acc[acc.length-1] += " " + s;
    return acc;
  }, []);
  return `<section id="story" class="relative bg-paper py-16 text-ink sm:py-24" tabindex="-1">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <p class="kicker text-center text-gold-700">The Setting · The Hotel Story</p>
      <h2 class="script mt-3 text-center text-4xl text-navy-800 sm:text-6xl">Welcome to Winter Wish Hotel</h2>
      <p class="mt-4 text-center font-serif text-base italic text-ink-soft">Read the story. Then close the page and tell yourself three things you remember.</p>
      <p class="mt-4 text-center"><button type="button" class="btn-gold" id="btnStoryTts">🔊 Listen to the story</button></p>
      <article class="paper-card relative mt-10 p-6 sm:p-10">
        ${paras.map((p) => `<p class="font-serif text-base leading-relaxed text-ink mb-4 last:mb-0">${esc(p)}</p>`).join("")}
        <ol class="mt-8 grid gap-3 sm:grid-cols-2">
          ${TIMELINE.map((t) => `<li class="border-l-2 border-gold-500 pl-3"><span class="kicker text-gold-700">${esc(t.time)}</span><p class="font-serif text-sm text-ink">${esc(t.text)}</p></li>`).join("")}
        </ol>
      </article>
      ${nextLink("#guests", "Дальше → гости")}
    </div>
  </section>`;
}

function renderGuests() {
  const cards = GUESTS.map((g, i) => `
    <button type="button" class="group relative block h-full w-full overflow-hidden rounded-md border border-gold-500/25 bg-navy-900 text-left shadow-[0_24px_60px_rgba(0,0,0,.5)] ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}" data-open="${g.id}" aria-label="Open guest file for ${esc(g.name)}">
      <div class="relative h-52 overflow-hidden sm:h-60 lg:h-64">
        ${pic(g.img, g.name, 'loading="lazy" class="h-full w-full object-cover object-[50%_12%] transition-transform duration-700 group-hover:scale-[1.06]"')}
        <div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/25 to-transparent"></div>
        <div class="absolute left-3 top-3 rounded-sm border border-paper/20 bg-navy-950/70 px-2 py-1 font-sans text-[8px] font-bold uppercase tracking-[0.25em] text-gold-300">${esc(g.room)}</div>
      </div>
      <div class="relative p-4 sm:p-5">
        <h3 class="font-display text-xl font-bold text-paper">${esc(g.name)}</h3>
        <p class="mt-0.5 font-sans text-[8.5px] font-semibold uppercase tracking-[0.2em] text-paper/80">${esc(g.role)}</p>
        <p class="mt-3 border-l border-brick-400/50 pl-3 font-serif text-[12px] italic leading-snug text-brick-400">“${esc(g.quote)}”</p>
        <span class="mt-3 inline-flex font-sans text-[8.5px] font-bold uppercase tracking-[0.28em] text-gold-400">Open guest file</span>
      </div>
    </button>`).join("");
  const g = state.modal ? GUESTS.find((x) => x.id === state.modal) : null;
  const modal = g ? `<div class="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Guest file: ${esc(g.name)}">
    <button type="button" class="absolute inset-0 bg-navy-950/80" data-closemodal="1" aria-hidden="true" tabindex="-1"></button>
    <div class="relative flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden border border-gold-500/40 bg-navy-900 text-paper shadow-[0_40px_100px_rgba(0,0,0,.7)] sm:flex-row">
      <button type="button" id="btnCloseGuest" class="absolute right-3 top-3 z-10 rounded-full border border-paper/20 bg-navy-950/60 p-2 text-paper" aria-label="Close">✕</button>
      <div class="relative h-48 shrink-0 sm:h-auto sm:w-64">
        ${pic(g.img, g.name, 'class="absolute inset-0 h-full w-full object-cover object-[50%_15%]"')}
      </div>
      <div class="nice-scroll overflow-y-auto p-5 sm:p-6">
        <p class="kicker text-gold-400">Guest File · ${esc(g.room)}</p>
        <h3 class="font-display mt-1 text-2xl font-black text-paper">${esc(g.name)}</h3>
        <p class="mt-0.5 font-serif text-xs italic text-paper/80">${esc(g.role)}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">${g.personality.map((p) => `<span class="rounded-full border border-paper/15 px-2.5 py-1 font-sans text-[8.5px] font-semibold uppercase tracking-[0.14em] text-paper/80">${esc(p)}</span>`).join("")}</div>
        <div class="mt-4 border-l-2 border-gold-500/60 pl-3">
          <p class="font-sans text-[8px] font-bold uppercase tracking-[0.28em] text-gold-500">Complex Object in hiding</p>
          <p class="mt-1 font-serif text-[13px] italic text-gold-300">${esc(g.complexObject)}</p>
        </div>
        <p class="mt-4 text-[11.5px] text-paper/80"><strong>Likes:</strong> ${esc(g.likes)}</p>
        <p class="mt-2 text-[11.5px] text-paper/80"><strong>Hates:</strong> ${esc(g.dislikes)}</p>
      </div>
    </div>
  </div>` : "";
  return `<section id="guests" class="relative overflow-hidden bg-navy-950 py-16 sm:py-24" tabindex="-1">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <p class="kicker text-center text-gold-500">Characters · The Residents of the Hotel</p>
      <h2 class="script mt-3 text-center text-4xl text-gold-300 sm:text-6xl">Meet the guests</h2>
      <p class="mx-auto mt-4 max-w-xl text-center font-serif text-sm italic text-paper/80 sm:text-base">Five residents you will know by the end of the lesson. Their quotes each hide a Complex Object — spot it before they spot the cake.</p>
      <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">${cards}</div>
      ${nextLink("#grammar", "Дальше → грамматика")}
    </div>
    ${modal}
  </section>`;
}

function renderGrammar() {
  const cards = GRAMMAR.map((g) => `
    <div class="flex h-full flex-col overflow-hidden rounded-md border border-gold-600/40 bg-paper2 shadow-[0_20px_50px_rgba(20,30,45,.35)]" style="background-color:var(--color-paper2)">
      <div class="flex items-center justify-between gap-3 ${g.header} px-5 py-3.5 text-paper">
        <div>
          <p class="font-sans text-[8px] font-bold uppercase tracking-[0.32em] opacity-75">${esc(g.n)}</p>
          <p class="font-display text-lg font-bold">${esc(g.label)}</p>
        </div>
      </div>
      <div class="p-5 text-ink">
        <p class="font-serif text-sm font-semibold text-navy-800">${esc(g.formula)}</p>
        <ul class="mt-3 space-y-2">${g.examples.map((e) => `<li class="flex gap-2"><span class="kicker text-gold-700">${esc(e.tag)}</span> <button type="button" class="text-left font-serif text-[13px] text-ink" data-say="${esc(e.text)}">${esc(e.text)}</button></li>`).join("")}</ul>
        <p class="mt-3 font-serif text-xs italic text-ink-soft">${esc(g.footnote)}</p>
      </div>
    </div>`).join("");
  return `<section id="grammar" class="relative bg-paper py-16 text-ink sm:py-24" tabindex="-1">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <p class="kicker text-center text-gold-700">Grammar Reference · Keep Open All Lesson</p>
      <h2 class="script mt-3 text-center text-4xl text-navy-800 sm:text-6xl">Complex Object at the Hotel</h2>
      <p class="mt-4 text-center font-serif text-base italic text-ink-soft">Keep this page open while you play. Tap a sentence to hear it.</p>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">${cards}</div>
      <div class="paper-card mt-8 p-5">
        <h3 class="font-display text-xl font-bold text-navy-800">Look out! Typical slips</h3>
        ${SLIPS.map((s) => `<p class="mt-2 font-serif text-sm"><s>${esc(s.wrong)}</s> <span>→</span> <strong>${esc(s.right)}</strong></p>`).join("")}
      </div>
      ${nextLink("#lesson", "Дальше → смена")}
    </div>
  </section>`;
}

function renderLessonNav() {
  const stages = [
    { id: "s1", n: "01", title: "Welcome Briefing", done: briefingDone() },
    { id: "s2", n: "02", title: "Guests’ Notes", done: notesDone() && discoveryDone() },
    { id: "s3", n: "03", title: "Room Service", done: reportsDone() },
    { id: "s4", n: "04", title: "Night Mystery", done: mysteryDone() },
    { id: "s5", n: "05", title: "Hotel Review", done: reviewDone() },
    { id: "stage-6", n: "06", title: "The Big Vote", done: voteDone() }
  ];
  return `<section id="lesson" class="relative overflow-hidden bg-navy-950 py-16 sm:py-10" tabindex="-1">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <p class="kicker text-center text-gold-500">The Lesson · 45 minutes · One cake</p>
      <h2 class="script mt-3 text-center text-4xl leading-[1.15] text-gold-300 sm:text-6xl">Six stages of the perfect shift</h2>
      <p class="mx-auto mt-4 max-w-xl text-center font-serif text-sm italic text-paper/80">Listening first, grammar by discovery, speaking that never sits down — and a cake with a striped-pyjama-shaped hole in it.</p>
      <nav class="mt-10 flex flex-wrap justify-center gap-3" aria-label="Lesson stages">
        ${stages.map((s) => `<a href="#${s.id}" class="flex flex-col items-center gap-1 text-center no-underline">
          <span class="grid h-9 w-9 place-items-center rounded-full border font-sans text-[10px] font-extrabold ${s.done ? "border-pine-400 bg-pine-500 text-paper" : "border-gold-500/60 bg-navy-900 text-gold-300"}">${s.done ? "✓" : s.n}</span>
          <span class="font-sans text-[7.5px] font-extrabold uppercase tracking-[0.18em] text-paper/80">${esc(s.title)}</span>
        </a>`).join("")}
      </nav>
    </div>
  </section>`;
}

function renderBriefing() {
  const types = RULES.map((r, i) => {
    const pick = state.ruleType[i];
    const opts = [
      { v: "want", l: "want / expect / would like + to do" },
      { v: "make", l: "make / let + do (no to)" }
    ].map((o) => `<button type="button" class="choice${pick === o.v ? " is-on" : ""}${state.ruleTypeChecked && pick === o.v ? (pick === r.type ? " is-ok" : " is-bad") : ""}" data-rtype="${i}" data-val="${o.v}">${esc(o.l)}</button>`).join("");
    return `<li class="border-b border-gold-600/20 py-3">
      <p class="font-serif text-[15px] text-ink"><span class="kicker text-gold-700">${String(i + 1).padStart(2, "0")}</span> ${esc(r.text)}</p>
      <div class="choice-row">${opts}</div>
      ${state.ruleTypeChecked && pick !== r.type ? whyBox(false, r.type === "want" ? "Здесь want / expect / would like, поэтому нужен to + глагол." : "Здесь make / let, поэтому глагол без to.") : ""}
    </li>`;
  }).join("");
  const rows = REBUILD.map((r) => {
    const val = state.rebuild[r.id];
    const ok = state.rebuildChecked && val === r.answer;
    const bad = state.rebuildChecked && val && !ok;
    return `<li class="py-2 ${ok ? "answer-correct" : bad ? "answer-incorrect" : ""}">
      <span class="font-serif text-ink">${esc(r.prefix)}</span>
      <button type="button" class="gap-slot${state.rebuildFocus === r.id ? " is-focus" : ""}" data-rgap="${r.id}">${esc(val || "")}</button>
      ${state.rebuildChecked && !ok ? whyBox(false, `Нужна фраза «${r.answer}».`) : ""}
    </li>`;
  }).join("");
  const inner = `
    <p class="font-serif text-[13px] text-ink-soft"><strong class="text-navy-800">Your mission:</strong> послушай восемь правил мистера Близзарда, отметь схему каждого правила и собери четыре фразы из банка.</p>
    <p class="mt-3"><button type="button" class="btn-gold" id="btnBriefTts">🔊 Listen to the briefing</button></p>
    <blockquote class="mt-4 border-l-4 border-gold-500 bg-navy-900 p-4 font-serif italic text-paper" style="background:#12233a;color:#fbf7ec">“Today I will make you work hard — but I will also let you have the best hot chocolate in the mountains.”</blockquote>
    <h4 class="mt-6 font-display text-xl font-bold text-navy-800">The eight rules — choose the pattern</h4>
    <ol>${types}</ol>
    <div class="mt-3 flex items-center gap-3">
      <button type="button" class="btn-gold" id="btnRuleTypeCheck">Check the patterns</button>
      <span class="font-sans text-xs text-ink-soft">${state.ruleTypeChecked ? `${ruleTypeN()} of 8 patterns correct.` : `${state.ruleType.filter(Boolean).length} of 8 chosen.`}</span>
    </div>
    <h4 class="mt-8 font-display text-xl font-bold text-navy-800">Reconstruct four rules</h4>
    <p class="font-serif text-sm text-ink-soft">Нажми на пропуск, потом на фразу из банка. Есть две ловушки.</p>
    <h5 class="mt-3 kicker text-gold-700">Phrase bank</h5>
    ${renderTiles(state.rebuildBank, "rbank")}
    <ol>${rows}</ol>
    <div class="mt-3 flex items-center gap-3">
      <button type="button" class="btn-gold" id="btnRebuildCheck">Check the rules</button>
      <span class="font-sans text-xs text-ink-soft">${state.rebuildChecked ? `${rebuildN()} of 4 phrases correct.` : "Choose a phrase for each rule."}</span>
    </div>
    ${nextLink("#s2", "Дальше → записки гостей")}
  `;
  return `<div class="bg-navy-950 px-5 pb-4 sm:px-8"><div class="mx-auto max-w-7xl">${stageWrap("s1", "01", "5 min", "Welcome Briefing", "Listening · Speaking", "want / expect / make / let", inner)}</div></div>`;
}

function renderNotes() {
  const notes = NOTES.map((n) => {
    const g = state.notes[n.id];
    const picked = state.notePick === n.id;
    const ok = state.notesChecked && g === n.group;
    const bad = state.notesChecked && g && g !== n.group;
    return `<button type="button" class="note-card paper-card-flat p-3 ${picked ? "is-picked" : ""} ${ok ? "is-ok" : ""} ${bad ? "is-bad" : ""}" data-notepick="${n.id}">
      <p class="kicker text-gold-700">${esc(n.from)} · ${esc(n.room)}</p>
      <p class="mt-1 font-serif text-[13px] italic text-ink">${esc(n.text)}</p>
      ${g ? `<p class="mt-2 font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-navy-700">${esc(g)}</p>` : ""}
    </button>`;
  }).join("");
  const baskets = BASKETS.map((b) => `
    <button type="button" class="basket paper-card-flat p-4 text-left" data-basket="${b.id}">
      <p class="kicker text-gold-700">${esc(b.title)}</p>
      <p class="font-serif text-xs italic text-ink-soft">${esc(b.sub)}</p>
      <p class="mt-2 font-sans text-[10px] font-bold text-navy-700">${NOTES.filter((n) => state.notes[n.id] === b.id).length} notes</p>
    </button>`).join("");
  const disc = DISCOVERY.map((d, i) => {
    const pick = state.discovery[i];
    const opts = d.options.map((o) =>
      `<button type="button" class="choice${pick === o ? " is-on" : ""}${state.discoveryChecked && pick === o ? (o === d.answer ? " is-ok" : " is-bad") : ""}" data-disc="${i}" data-val="${esc(o)}">${esc(o)}</button>`
    ).join("");
    return `<div class="mt-3"><p class="font-serif font-semibold text-ink">${i + 1}. ${esc(d.q)}</p><div class="choice-row">${opts}</div>${state.discoveryChecked && pick !== d.answer ? whyBox(false, d.why) : ""}</div>`;
  }).join("");
  const inner = `
    <p class="font-serif text-[13px] text-ink-soft"><strong class="text-navy-800">Your mission:</strong> нажми на записку, потом на корзину. Все 12 записок открыты сразу. Потом открой правила внизу — тоже выбором варианта.</p>
    <div class="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 xl:grid-cols-4">${notes}</div>
    <div class="mt-4 grid gap-3 md:grid-cols-3">${baskets}</div>
    <div class="mt-3 flex items-center gap-3">
      <button type="button" class="btn-gold" id="btnNotesCheck">Check the sorting</button>
      <span class="font-sans text-xs text-ink-soft">${state.notesChecked ? `${notesN()} of 12 in the right basket.` : `${NOTES.filter((n) => state.notes[n.id]).length} of 12 filed.`}</span>
    </div>
    <div class="mt-8 border-t border-gold-600/30 pt-5">
      <h4 class="font-display text-xl font-bold text-navy-800">Discover the rule</h4>
      ${disc}
      <div class="mt-3 flex items-center gap-3">
        <button type="button" class="btn-gold" id="btnDiscCheck">Check the rules</button>
        <span class="font-sans text-xs text-ink-soft">${state.discoveryChecked ? `${discoveryN()} of 3 rules correct.` : "Choose one option for each rule."}</span>
      </div>
    </div>
    ${nextLink("#s3", "Дальше → ресепшен")}
  `;
  return `<div class="bg-navy-950 px-5 pb-4 sm:px-8"><div class="mx-auto max-w-7xl">${stageWrap("s2", "02", "8 min", "Guests’ Notes", "Reading · Grammar discovery", "All three types", inner)}</div></div>`;
}

function renderRoleplay() {
  const i = state.call;
  const q = CALLS[i];
  const cards = CALLS.map((c, n) => `
    <button type="button" class="paper-card-flat p-3 text-left ${n === i ? "is-picked" : ""}" data-call="${n}" aria-pressed="${n === i}">
      <span class="kicker text-gold-700">CALL ${String(n + 1).padStart(2, "0")} · ROOM ${esc(c.room)}</span>
      <strong class="mt-1 block font-display text-ink">${esc(c.guest)}</strong>
      <span class="mt-1 block font-serif text-[12px] italic text-ink-soft">${esc(c.request)}</span>
    </button>`).join("");
  const built = state.reports[i] || [];
  const checked = state.reportsChecked[i];
  const ok = reportOk(i);
  const inner = `
    <p class="font-serif text-[13px] text-ink-soft"><strong class="text-navy-800">Your mission:</strong> открой карточку гостя и собери рапорт из банка фраз. Не копируй готовое предложение: составь его из кусочков. ${reportsN()}/10</p>
    <div class="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">${cards}</div>
    <div class="mt-5 overflow-hidden rounded-md border border-navy-700 bg-navy-900 p-4 text-paper" style="background:#12233a;color:#fbf7ec">
      <div class="flex items-center gap-3">
        ${pic(q.img, q.guest, 'class="h-14 w-14 rounded-full object-cover object-top"')}
        <div>
          <p class="kicker text-gold-300">The reception desk · Call ${String(i + 1).padStart(2, "0")}</p>
          <h4 class="font-display text-xl font-bold">Report to Mr Blizzard</h4>
        </div>
      </div>
      <p class="mt-3 font-serif italic">What does Room ${esc(q.room)} want or expect someone to do?</p>
      <p class="mt-2"><button type="button" class="btn-ghost" id="btnReportTts">🔊 Listen to the request</button></p>
      <h5 class="mt-4 kicker text-gold-300">Phrase bank for reception staff</h5>
      ${renderTiles(state.reportBank, "rep")}
      <div class="built mt-2" id="reportBuilt" style="background:#fff;color:#2c2721">${renderBuilt(built, "report", "Room " + q.room + " wants us to …")}</div>
      <div class="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" class="btn-gold" id="btnReportCheck">Check this report</button>
        <span>${checked ? (ok ? "This report is ready." : "Try another combination from the bank.") : `${reportsN()} of 10 reports ready.`}</span>
      </div>
      ${checked && !ok ? whyBox(false, "Собери рапорт в третьем лице, например: «" + q.report + "». Нужны номер комнаты, want / expect / would like и to + глагол.") : ""}
      ${checked && ok ? whyBox(true, "Верно: " + q.report) : ""}
    </div>
    ${nextLink("#s4", "Дальше → ночная загадка")}
  `;
  return `<div class="bg-navy-950 px-5 pb-4 sm:px-8"><div class="mx-auto max-w-7xl">${stageWrap("s3", "03", "12 min", "Room Service Role-Play", "Speaking · Listening", "want / expect / would like / let", inner)}</div></div>`;
}

function renderMystery() {
  const cards = WITNESSES.map((z) => `
    <article class="paper-card-flat p-3">
      <div class="flex items-center gap-3">
        ${pic(z.img, z.name, 'class="h-14 w-14 rounded-full object-cover object-top" loading="lazy"')}
        <div>
          <p class="kicker text-gold-700">Witness · Room ${esc(z.room)}</p>
          <strong class="font-display text-ink">${esc(z.name)}</strong>
        </div>
      </div>
      ${z.statements.map((s) => `<p class="mt-2 font-serif text-[13px] leading-snug text-ink">${esc(s)}</p>`).join("")}
    </article>`).join("");
  const rows = WITNESSES.map((z) => {
    const g = state.suspects[z.id] || {};
    const ev = EVIDENCE_BANK.map((t) => `<button type="button" class="choice${g.evidence === t ? " is-on" : ""}" data-ev="${z.id}" data-val="${esc(t)}">${esc(t)}</button>`).join("");
    const pl = PLACE_BANK.map((t) => `<button type="button" class="choice${g.place === t ? " is-on" : ""}" data-pl="${z.id}" data-val="${esc(t)}">${esc(t)}</button>`).join("");
    const su = ["Yes", "No", "Maybe"].map((t) => `<button type="button" class="choice${g.suspicious === t ? " is-on" : ""}" data-su="${z.id}" data-val="${t}">${t}</button>`).join("");
    return `<tr>
      <th scope="row" class="p-2 text-left font-display text-ink">${esc(z.name)}</th>
      <td class="p-2"><div class="choice-row">${ev}</div></td>
      <td class="p-2"><div class="choice-row">${pl}</div></td>
      <td class="p-2"><div class="choice-row">${su}</div></td>
    </tr>`;
  }).join("");
  const who = ACCUSE_WHO.map((t) => `<button type="button" class="choice${state.accuseWho === t ? " is-on" : ""}" data-who="${esc(t)}">${esc(t)}</button>`).join("");
  const why = ACCUSE_WHY.map((t) => `<button type="button" class="choice${state.accuseWhy === t.label ? " is-on" : ""}" data-awhy="${esc(t.label)}">${esc(t.label)}</button>`).join("");
  const inner = `
    <p class="font-serif text-[13px] text-ink-soft"><strong class="text-navy-800">Your mission:</strong> послушай объявление, прочитай показания всех свидетелей (они открыты) и заполни таблицу из банка. Потом выбери, кто взял торт, и улику.</p>
    <p class="mt-3"><button type="button" class="btn-gold" id="btnAnnounceTts">🔊 Listen to Mr Blizzard</button></p>
    <blockquote class="mt-3 border-l-4 border-brick-500 bg-navy-900 p-4 font-serif italic text-paper" style="background:#12233a;color:#fbf7ec">"${esc(ANNOUNCE)}"</blockquote>
    <h4 class="mt-6 font-display text-xl font-bold text-navy-800">Witness cards</h4>
    <div class="mt-3 grid gap-3 md:grid-cols-2">${cards}</div>
    <h4 class="mt-6 font-display text-xl font-bold text-navy-800">Detective’s evidence table</h4>
    <div class="mt-3 overflow-auto">
      <table class="min-w-[640px] w-full text-sm">
        <thead><tr class="text-left kicker text-gold-700"><th class="p-2">Guest</th><th class="p-2">Saw or heard</th><th class="p-2">Where?</th><th class="p-2">Suspicious?</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <h4 class="mt-6 font-display text-xl font-bold text-navy-800">Our accusation</h4>
    <p class="font-serif text-ink">I think</p>
    <div class="choice-row">${who}</div>
    <p class="font-serif text-ink">took the cake because</p>
    <div class="choice-row" style="flex-direction:column;align-items:stretch">${why}</div>
    <div class="mt-3 flex items-center gap-3">
      <button type="button" class="btn-gold" id="btnAccuseCheck">Check the accusation</button>
      <span class="font-sans text-xs text-ink-soft">${state.accuseChecked ? (accuseOk() ? "The evidence points to the right guest." : "Look again at the striped pyjamas and the crumbs in the bed.") : (tableFilled() ? "Table complete — now accuse." : "Fill the table, then accuse.")}</span>
    </div>
    ${state.accuseChecked && !accuseOk() ? whyBox(false, "Торт взял Polar Bear Bob, пока он почти спал. Нужна улика про полосатую пижаму (Pip) или крошки в кровати (Bob).") : ""}
    ${state.accuseChecked && accuseOk() ? whyBox(true, "Polar Bear Bob took the cake while half-asleep. Pip saw him coming back from the kitchen with something brown on his striped pyjamas; Bob found crumbs in his bed. The striped thread matches Mr Blizzard’s clue.") : ""}
    ${nextLink("#s5", "Дальше → книга отзывов")}
  `;
  return `<div class="bg-navy-950 px-5 pb-4 sm:px-8"><div class="mx-auto max-w-7xl">${stageWrap("s4", "04", "10 min", "Night Mystery", "Speaking · Listening · Logic", "see / hear sb do / doing", inner)}</div></div>`;
}

function renderReview() {
  const guestOpts = ["Granny Frost · Room 7", "Grumpy Elf Norbert · Room 12", "Polar Bear Bob · Room 3", "Little Penguin Pip · Room 5"].map((t) =>
    `<button type="button" class="choice${state.reviewGuest === t ? " is-on" : ""}" data-rg="${esc(t)}">${esc(t)}</button>`
  ).join("");
  const lines = REVIEW_STEMS.map((s, i) => `
    <label class="mt-4 block">
      <span class="kicker text-gold-700">${esc(s.chip)}</span>
      <span class="mt-1 block font-serif font-semibold text-ink">${esc(s.prefix)}</span>
      <div class="built mt-2${reviewFocus === i ? " is-focus" : ""}" data-revfocus="${i}">${renderBuilt(state.review[i], "review", "…", i)}</div>
    </label>
    ${state.reviewChecked && !reviewLineOk(i) ? whyBox(false, s.why) : ""}
  `).join("");
  const inner = `
    <p class="font-serif text-[13px] text-ink-soft"><strong class="text-navy-800">Your mission:</strong> пиши от лица гостя. Выбери персонажа и закончи шесть предложений из банка фраз. ${reviewN()}/6</p>
    <p class="mt-3 font-serif text-ink">Writing as</p>
    <div class="choice-row">${guestOpts}</div>
    <h5 class="mt-4 kicker text-gold-700">Phrase bank</h5>
    ${renderTiles(state.reviewBank, "rev")}
    ${lines}
    <div class="mt-4 flex items-center gap-3">
      <button type="button" class="btn-gold" id="btnReviewCheck">Check my review</button>
      <span class="font-sans text-xs text-ink-soft">${state.reviewChecked ? `${reviewN()} of 6 lines ready.` : "Tap a line, then tap phrases from the bank."}</span>
    </div>
    ${nextLink("#stage-6", "Дальше → голосование")}
  `;
  return `<div class="bg-navy-950 px-5 pb-4 sm:px-8"><div class="mx-auto max-w-7xl">${stageWrap("s5", "05", "7 min", "The Hotel Review", "Writing · Speaking", "All three types", inner)}</div></div>`;
}

function renderVote() {
  const cards = VOTE_REVIEWS.map((r) => `
    <article class="paper-card-flat p-4">
      <div class="flex items-center gap-3">
        ${pic(r.img, r.author, 'class="h-12 w-12 rounded-full object-cover object-top"')}
        <div>
          <strong class="font-display text-ink">${esc(r.author)}</strong>
          <p class="font-sans text-[10px] text-ink-soft">★ ${r.rating} / 5 · ${esc(r.handle)}</p>
        </div>
      </div>
      <p class="mt-3 font-serif text-[13px] leading-snug text-ink">${esc(r.text)}</p>
      <button type="button" class="choice mt-3${state.votePick === r.id ? " is-on" : ""}" data-vote="${r.id}">Vote for ${esc(r.author)}</button>
    </article>`).join("");
  const frames = VOTE_FRAMES.map((f) =>
    `<button type="button" class="choice${state.voteReason === f ? " is-on" : ""}" data-vreason="${esc(f)}">${esc(f)}</button>`
  ).join("");
  const inner = `
    <p class="font-serif text-[13px] text-ink-soft"><strong class="text-navy-800">Your mission:</strong> это задание для одного ученика. Прочитай три готовых отзыва, выбери победителя и отметь одну фразу-объяснение с Complex Object.</p>
    <div class="mt-4 grid gap-4 lg:grid-cols-3">${cards}</div>
    <h4 class="mt-6 font-display text-xl font-bold text-navy-800">Why this review?</h4>
    <div class="choice-row" style="flex-direction:column;align-items:stretch">${frames}</div>
    ${voteDone() ? whyBox(true, "Голос принят.") : ""}
    ${nextLink("#homework", "Дальше → домашка")}
  `;
  return `<div class="bg-navy-950 px-5 pb-8 sm:px-8"><div class="mx-auto max-w-7xl">${stageWrap("stage-6", "06", "3 min", "The Big Vote", "Speaking · Voting", "All three types", inner)}</div></div>`;
}

function renderHomework() {
  const lines = HW_LINES.map((s, i) => `
    <li class="mt-3">
      <span class="kicker text-gold-700">${String(i + 1).padStart(2, "0")}</span>
      <strong class="ml-2 font-serif text-ink">${esc(s.stem)}</strong>
      <div class="built mt-2${hwFocus === i ? " is-focus" : ""}" data-hwfocus="${i}">${renderBuilt(state.homework[i], "homework", "…", i)}</div>
    </li>
    ${state.hwChecked && !hwLineOk(i) ? whyBox(false, s.kind === "name" ? "Выбери имя нового гостя из банка." : s.kind === "room" ? "Выбери номер комнаты." : s.kind === "to" ? "После want / expect нужен to + глагол — возьми фразу из банка." : s.kind === "bare" ? "После lets / makes глагол идёт без to." : "После saw / heard — действие без to или с -ing.") : ""}
  `).join("");
  return `<section id="homework" class="relative bg-paper py-16 text-ink sm:py-24" tabindex="-1">
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <p class="kicker text-gold-700">After the lesson · Homework</p>
      <h2 class="script mt-3 text-4xl text-navy-800 sm:text-6xl">The New Guest</h2>
      <p class="mt-3 max-w-2xl font-serif text-base italic text-ink-soft">Invent a new visitor for Winter Wish Hotel and give them a secret of their own. This task is different from the class review: you invent a brand-new guest.</p>
      <p class="task-instruction mt-3 font-serif">Complete these six lines. Tap a line, then tap words from the homework phrase bank. ${hwN()}/6</p>
      <h3 class="mt-5 font-display text-xl font-bold text-navy-800">Homework phrase bank</h3>
      ${renderTiles(state.hwBank, "hw")}
      <ol>${lines}</ol>
      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <div class="paper-card-flat p-4">
          <h3 class="font-display text-lg font-bold text-navy-800">Extra challenge</h3>
          <p class="font-serif text-sm text-ink">The Passive Detective: rewrite one sentence with <em>would like somebody to do</em> and a passive clue such as <strong>I saw the cake being taken</strong>.</p>
        </div>
        <div class="paper-card-flat p-4">
          <h3 class="font-display text-lg font-bold text-navy-800">Video option</h3>
          <p class="font-serif text-sm text-ink">Inspector Snowflake: record a 30-second report. Use at least five Complex Objects and one striped-pyjama alibi.</p>
        </div>
      </div>
      <div class="mt-4 flex items-center gap-3">
        <button type="button" class="btn-gold" id="btnHwCheck">Check my guest</button>
        <span class="font-sans text-xs text-ink-soft">${state.hwChecked ? `${hwN()} of 6 lines ready.` : "Build all six lines from the bank."}</span>
      </div>
      ${nextLink("#ending", "Дальше → финал")}
    </div>
  </section>`;
}

function renderEnding() {
  if (allDone()) state.codeOpen = true;
  return `<section id="ending" class="relative overflow-hidden bg-navy-950 py-16 sm:py-24" tabindex="-1">
    <div class="relative mx-auto max-w-3xl px-5 sm:px-8">
      <p class="kicker text-center text-gold-500">The Ending · Your code</p>
      <h2 class="script mt-3 text-center text-4xl text-gold-300 sm:text-6xl">See you at Winter Wish Hotel</h2>
      <ul class="mt-8 font-serif text-paper/90 space-y-1">
        <li>Welcome briefing: <b>${ruleTypeN()}/8</b> patterns · <b>${rebuildN()}/4</b> phrases</li>
        <li>Guests’ notes: <b>${notesN()}/12</b> · Rules: <b>${discoveryN()}/3</b></li>
        <li>Reception reports: <b>${reportsN()}/10</b></li>
        <li>Night mystery: <b>${mysteryDone() ? "ready" : "…"}</b></li>
        <li>Review book: <b>${reviewN()}/6</b> · Vote: <b>${voteDone() ? "ready" : "…"}</b></li>
        <li>Homework: <b>${hwN()}/6</b></li>
        <li>Progress: <b>${progressN()}/8</b></li>
      </ul>
      <div class="code-box mt-8">
        ${state.codeOpen ? `<p>Код для учителя</p><strong id="finalCode">${CODE}</strong><p>Mr Blizzard will let you have cocoa now, won't he?</p>`
          : `<p>Код ещё закрыт. Дойди до 8/8: брифинг, записки, рапорты, загадка, отзыв, голос и домашка.</p>`}
      </div>
      <h3 class="mt-8 font-display text-2xl font-bold text-gold-300">Рефлексия</h3>
      <label class="mt-2 block font-serif text-paper/90">Что было самым трудным — want somebody to do, make / let без to, или see / hear?
        <textarea id="reflect" rows="3" class="mt-2 w-full rounded-md border border-gold-500/40 p-3 text-ink" style="background:#fbf7ec;color:#2c2721">${esc(state.reflect)}</textarea>
      </label>
      <p class="mt-10 text-center script text-3xl text-gold-300">See you at Winter Wish Hotel</p>
    </div>
  </section>`;
}

function renderModalOnly() { return ""; }

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

let snowRaf = 0;
function startSnow() {
  if (snowRaf) cancelAnimationFrame(snowRaf);
  const d = $("snow");
  if (!d || !d.getContext) return;
  const E = d.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let A = 0, q = 0, D = 0, C = 0;
  const x = () => {
    const ae = d.parentElement?.getBoundingClientRect();
    const ee = Math.min(2, window.devicePixelRatio || 1);
    A = ae?.width ?? d.clientWidth;
    q = ae?.height ?? d.clientHeight;
    d.width = Math.floor(A * ee);
    d.height = Math.floor(q * ee);
    d.style.width = A + "px";
    d.style.height = q + "px";
    E.setTransform(ee, 0, 0, ee, 0, 0);
  };
  x();
  const R = Array.from({ length: 90 }, () => ({
    x: Math.random() * (A || 1200), y: Math.random() * (q || 800),
    r: 0.8 + Math.random() * 2.2, vy: 0.35 + Math.random() * 0.9,
    drift: 8 + Math.random() * 22, phase: Math.random() * Math.PI * 2,
    opacity: 0.35 + Math.random() * 0.55
  }));
  const I = () => {
    C += 0.008;
    E.clearRect(0, 0, A, q);
    for (const ae of R) {
      const ee = Math.sin(C * 1.6 + ae.phase) * ae.drift;
      ae.y += ae.vy;
      if (ae.y > q + 4) { ae.y = -4; ae.x = Math.random() * A; }
      E.beginPath();
      E.arc(ae.x + ee, ae.y, ae.r, 0, Math.PI * 2);
      E.fillStyle = `rgba(255,255,255,${ae.opacity})`;
      E.fill();
    }
    if (!reduce) { D = requestAnimationFrame(I); snowRaf = D; }
  };
  I();
}

function renderAll() {
  const y = window.scrollY;
  $("main").innerHTML = [
    renderHero(),
    renderStory(),
    renderGuests(),
    renderGrammar(),
    renderLessonNav(),
    renderBriefing(),
    renderNotes(),
    renderRoleplay(),
    renderMystery(),
    renderReview(),
    renderVote(),
    renderHomework(),
    renderEnding()
  ].join("\n");
  updateChrome();
  startSnow();
  window.scrollTo(0, y);
}

function fillCorrect() {
  state.ruleType = RULES.map((r) => r.type);
  state.ruleTypeChecked = true;
  REBUILD.forEach((r) => { state.rebuild[r.id] = r.answer; });
  state.rebuildChecked = true;
  NOTES.forEach((n) => { state.notes[n.id] = n.group; });
  state.notesChecked = true;
  state.discovery = DISCOVERY.map((d) => d.answer);
  state.discoveryChecked = true;
  CALLS.forEach((c, i) => {
    state.reports[i] = [c.accepts[0].replace(/\.$/, "")];
    state.reportsChecked[i] = true;
  });
  WITNESSES.forEach((w) => {
    state.suspects[w.id] = {
      evidence: EVIDENCE_BANK[0],
      place: PLACE_BANK[0],
      suspicious: w.id === "pip" ? "No" : w.id === "granny" ? "Maybe" : "Yes"
    };
  });
  state.accuseWho = "Polar Bear Bob";
  state.accuseWhy = ACCUSE_WHY.find((e) => e.correct).label;
  state.accuseChecked = true;
  state.reviewGuest = "Granny Frost · Room 7";
  state.review = [
    ["to clean my room before eight"],
    ["to bring extra blankets"],
    ["have hot chocolate after the shift"],
    ["someone singing in the corridor"],
    ["the Christmas tree"],
    ["the cocoa"]
  ];
  state.reviewChecked = true;
  state.votePick = "rev-pip";
  state.voteReason = VOTE_FRAMES[1];
  state.homework = [
    ["Fireside Fox Mira"],
    ["9"],
    ["bring a midnight cocoa"],
    ["play quiet carols"],
    ["have breakfast after eleven"],
    ["someone walking to the kitchen"]
  ];
  state.hwChecked = true;
  state.codeOpen = true;
  save();
}

function onMainClick(e) {
  const btn = e.target.closest("button");
  if (!btn || !$("main").contains(btn)) return;
  const ds = btn.dataset;
  let dirty = false;

  if (btn.id === "btnCloseGuest" || ds.closemodal) { state.modal = null; dirty = true; }
  else if (ds.open) { state.modal = ds.open; dirty = true; }
  else if (btn.id === "btnStoryTts") speak(STORY, { rate: 0.98 });
  else if (btn.id === "btnBriefTts") speak(BRIEF_SCRIPT, { rate: 0.95 });
  else if (btn.id === "btnAnnounceTts") speak(ANNOUNCE, { rate: 0.92 });
  else if (btn.id === "btnReportTts") speak(CALLS[state.call].request);
  else if (ds.say) speak(ds.say);
  else if (ds.rtype != null) { state.ruleType[Number(ds.rtype)] = ds.val; state.ruleTypeChecked = false; dirty = true; }
  else if (btn.id === "btnRuleTypeCheck") { state.ruleTypeChecked = true; dirty = true; }
  else if (ds.rgap) { state.rebuildFocus = ds.rgap; dirty = true; }
  else if (ds.rbank != null) {
    const word = state.rebuildBank[Number(ds.rbank)];
    if (word) { state.rebuild[state.rebuildFocus] = word; state.rebuildChecked = false; dirty = true; }
  } else if (btn.id === "btnRebuildCheck") { state.rebuildChecked = true; dirty = true; }
  else if (ds.notepick) {
    const id = Number(ds.notepick);
    state.notePick = state.notePick === id ? null : id;
    dirty = true;
  } else if (ds.basket) {
    if (state.notePick != null) {
      state.notes[state.notePick] = ds.basket;
      state.notePick = null;
      state.notesChecked = false;
      dirty = true;
    }
  } else if (btn.id === "btnNotesCheck") { state.notesChecked = true; dirty = true; }
  else if (ds.disc != null) { state.discovery[Number(ds.disc)] = ds.val; state.discoveryChecked = false; dirty = true; }
  else if (btn.id === "btnDiscCheck") { state.discoveryChecked = true; dirty = true; }
  else if (ds.call != null) { state.call = Number(ds.call); dirty = true; }
  else if (ds.rep != null) {
    const word = state.reportBank[Number(ds.rep)];
    if (word) {
      state.reports[state.call] = (state.reports[state.call] || []).concat(word);
      state.reportsChecked[state.call] = false;
      dirty = true;
    }
  } else if (btn.id === "btnReportCheck") { state.reportsChecked[state.call] = true; dirty = true; }
  else if (ds.ev) { state.suspects[ds.ev].evidence = ds.val; dirty = true; }
  else if (ds.pl) { state.suspects[ds.pl].place = ds.val; dirty = true; }
  else if (ds.su) { state.suspects[ds.su].suspicious = ds.val; dirty = true; }
  else if (ds.who) { state.accuseWho = ds.who; state.accuseChecked = false; dirty = true; }
  else if (ds.awhy) { state.accuseWhy = ds.awhy; state.accuseChecked = false; dirty = true; }
  else if (btn.id === "btnAccuseCheck") { state.accuseChecked = true; dirty = true; }
  else if (ds.rg) { state.reviewGuest = ds.rg; dirty = true; }
  else if (ds.rev != null) {
    const word = state.reviewBank[Number(ds.rev)];
    if (word) {
      state.review[reviewFocus] = (state.review[reviewFocus] || []).concat(word);
      state.reviewChecked = false;
      dirty = true;
    }
  } else if (btn.id === "btnReviewCheck") { state.reviewChecked = true; dirty = true; }
  else if (ds.vote) { state.votePick = ds.vote; dirty = true; }
  else if (ds.vreason) { state.voteReason = ds.vreason; dirty = true; }
  else if (ds.hw != null) {
    const word = state.hwBank[Number(ds.hw)];
    if (word) {
      state.homework[hwFocus] = (state.homework[hwFocus] || []).concat(word);
      state.hwChecked = false;
      dirty = true;
    }
  } else if (btn.id === "btnHwCheck") { state.hwChecked = true; dirty = true; }

  if (ds.rm != null) {
    const i = Number(ds.rmI);
    const line = ds.line != null ? Number(ds.line) : null;
    if (ds.rm === "report") {
      state.reports[state.call].splice(i, 1);
      state.reportsChecked[state.call] = false;
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

  if (dirty) { save(); renderAll(); }
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
    location.hash = "#top";
    window.scrollTo(0, 0);
  });
}

function boot() {
  bindStatic();
  renderAll();
}

window.__wwhxqa = {
  get state() { return state; },
  setState(patch) { Object.assign(state, patch); save(); },
  defaults, fillCorrect, save, renderAll,
  KEY, CODE,
  ruleTypeN, rebuildN, briefingDone, notesN, notesDone, discoveryN, discoveryDone,
  reportOk, reportsN, reportsDone, tableFilled, accuseOk, mysteryDone,
  reviewLineOk, reviewN, reviewDone, voteDone, hwLineOk, hwN, hwDone,
  progressN, allDone
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
