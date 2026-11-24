/* Spaceship Home · Room Scanner Mission */
(() => {
"use strict";

const STORAGE_KEY = "tutorcall-spaceship-home-scanner-v1";
const RESET_MSG = "Начать заново? Все ответы на этом устройстве сотрутся.";
const CASE_CODE = "SCAN-U9L1-HOME";
const HW_CODE = "HOME-U9L1-STAR";
const ALT = "A cheerful junior astronaut in a white suit with orange and lilac accents stands in a spaceship hall and holds a scanner. Four rounded doors open onto a pink living room with a sofa, a blue bathroom with a glass shower capsule, a purple bedroom with a bookcase, and a yellow kitchen with food.";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const range = n => [...Array(n).keys()];

const WORDS = [
  { id: "living", en: "living room", ru: "гостиная", ipa: "/ˈlɪvɪŋ ruːm/", room: 1, ex: "This is the living room.", tip: "«лИвин рум» — ng звучит в нос, без «г»." },
  { id: "kitchen", en: "kitchen", ru: "кухня", ipa: "/ˈkɪtʃɪn/", room: 1, ex: "This is the kitchen.", tip: "«кИчин» — два слога, tch = «ч»." },
  { id: "bathroom", en: "bathroom", ru: "ванная", ipa: "/ˈbɑːθruːm/", room: 1, ex: "This is the bathroom.", tip: "th — кончик языка между зубами." },
  { id: "bedroom", en: "bedroom", ru: "спальня", ipa: "/ˈbedruːm/", room: 1, ex: "This is the bedroom.", tip: "«бЕд-рум» — короткое «э»." },
  { id: "dining", en: "dining room", ru: "столовая", ipa: "/ˈdaɪnɪŋ ruːm/", room: 1, ex: "This is the dining room.", tip: "«дАйнин рум» — буква i читается «ай»." },
  { id: "hall", en: "hall", ru: "коридор, холл", ipa: "/hɔːl/", room: 1, ex: "This is the hall.", tip: "«хоол» — долгое «о», h — лёгкий выдох." },
  { id: "sofa", en: "sofa", ru: "диван", ipa: "/ˈsəʊfə/", ex: "There is a sofa in the living room.", tip: "«сОуфэ» — ударение на первый слог." },
  { id: "shower", en: "shower", ru: "душ", ipa: "/ˈʃaʊə/", ex: "There is a shower in the bathroom.", tip: "«шАуэ» — sh = «ш», r в конце почти не слышно." },
  { id: "bookcase", en: "bookcase", ru: "книжный шкаф", ipa: "/ˈbʊkkeɪs/", ex: "There is a bookcase in the bedroom.", tip: "«бУк-кейс» — короткое «у»." }
];
const W = {}; WORDS.forEach(w => W[w.id] = w);
const IDS = WORDS.map(w => w.id);
const VOCAB_RE = /\b(bathroom|dining room|hall|kitchen|living room|bookcase|shower|sofa|bedroom|scanner|lamp|fridge|bed|table)\b/i;

const sv = b => `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">${b}</svg>`;
const rm = (w, f, b) => sv(`<rect x="6" y="8" width="108" height="104" rx="18" fill="${w}"/><path d="M6 84h108v10a18 18 0 0 1-18 18H24A18 18 0 0 1 6 94z" fill="${f}"/>${b}`);
const books = y => ["#ee5d6c", "#6fa8f0", "#f6bd3f", "#3fbf8a", "#9a7be0", "#f58a2e"].map((c, i) => `<rect x="${36 + i * 8}" y="${y + 3 + (i % 2) * 3}" width="6" height="${21 - (i % 2) * 3}" rx="1.5" fill="${c}"/>`).join("");
const star = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s || 1})"><polygon points="0,-8 2.4,-2.5 8.4,-2.2 3.6,1.6 5.2,7.6 0,4.4 -5.2,7.6 -3.6,1.6 -8.4,-2.2 -2.4,-2.5" fill="${c || "#ffd95a"}"/></g>`;

const ICON = {
  living: rm("#fbd0e0", "#f3a9c4", `<circle cx="84" cy="34" r="12" fill="#2b2a6e" stroke="#ee8fb5" stroke-width="4"/><path d="M26 86V50" stroke="#c98a4a" stroke-width="3"/><path d="M15 50h22l-4-17H19z" fill="#ffe08a"/><ellipse cx="74" cy="99" rx="30" ry="6" fill="#ee7aa2"/><rect x="44" y="56" width="58" height="26" rx="10" fill="#ec6f98"/><rect x="40" y="68" width="66" height="22" rx="9" fill="#f48aae"/>`),
  kitchen: rm("#fde9b8", "#e9c77a", `<rect x="20" y="52" width="40" height="42" rx="6" fill="#6f93bf"/><rect x="26" y="66" width="28" height="20" rx="4" fill="#2f3f66"/><circle cx="30" cy="59" r="2.5" fill="#fff"/><circle cx="40" cy="59" r="2.5" fill="#fff"/><rect x="28" y="40" width="24" height="12" rx="3" fill="#f58a2e"/><path d="M34 34q-3-5 0-9M44 34q-3-5 0-9" stroke="#c9a85a" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="68" y="26" width="32" height="68" rx="7" fill="#eef3fa" stroke="#9db7dc" stroke-width="3"/><path d="M68 50h32" stroke="#9db7dc" stroke-width="3"/><path d="M75 36v8M75 58v12" stroke="#6f93bf" stroke-width="3" stroke-linecap="round"/>`),
  bathroom: rm("#cfe6fb", "#9cc5ee", `<rect x="22" y="22" width="24" height="30" rx="11" fill="#fff" stroke="#6fa8f0" stroke-width="3"/><path d="M98 68V50a6 6 0 0 0-12 0" stroke="#7f93b8" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M30 66h76v6a20 20 0 0 1-20 20H50a20 20 0 0 1-20-20z" fill="#fff" stroke="#6fa8f0" stroke-width="3"/><circle cx="50" cy="62" r="6" fill="#fff" stroke="#bcd9f7" stroke-width="2"/><circle cx="62" cy="58" r="4" fill="#fff" stroke="#bcd9f7" stroke-width="2"/><circle cx="74" cy="62" r="5" fill="#ffd95a"/><path d="M40 92v8M96 92v8" stroke="#6fa8f0" stroke-width="4" stroke-linecap="round"/>`),
  bedroom: rm("#d9ccf7", "#b29cea", `<circle cx="86" cy="34" r="13" fill="#2b2a6e" stroke="#9a7be0" stroke-width="4"/><path d="M91 28a7 7 0 1 1-9 10 8 8 0 0 0 9-10z" fill="#ffd95a"/><rect x="16" y="48" width="10" height="46" rx="4" fill="#6b4fc0"/><rect x="22" y="66" width="84" height="22" rx="7" fill="#8a68dc"/><rect x="29" y="57" width="26" height="14" rx="6" fill="#fff"/><path d="M102 88v8" stroke="#6b4fc0" stroke-width="5" stroke-linecap="round"/>`),
  dining: rm("#cdeedd", "#93d4b4", `<path d="M60 8v16" stroke="#6aa98b" stroke-width="3"/><path d="M47 35a13 13 0 0 1 26 0z" fill="#f6bd3f"/><path d="M20 50v44M20 72h12v22M100 50v44M100 72H88v22" stroke="#f58a2e" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="62" width="60" height="8" rx="4" fill="#b9773f"/><path d="M40 70v26M80 70v26" stroke="#8f5a2a" stroke-width="5" stroke-linecap="round"/><ellipse cx="48" cy="59" rx="9" ry="3" fill="#fff"/><ellipse cx="72" cy="59" rx="9" ry="3" fill="#fff"/>`),
  hall: rm("#e9e4f6", "#c3bbe6", `<rect x="47" y="32" width="26" height="48" rx="11" fill="#8e84c6"/><path d="M14 28 36 40v42L14 100z" fill="#f48fb8"/><path d="M106 28 84 40v42l22 18z" fill="#f6bd3f"/><path d="M47 80 28 110M73 80l19 30" stroke="#fff" stroke-width="3" opacity=".8"/><path d="M56 90v12M64 90v12" stroke="#ffe08a" stroke-width="3" stroke-linecap="round"/><ellipse cx="60" cy="16" rx="12" ry="4" fill="#fff5d8"/>`),
  sofa: sv(`<ellipse cx="60" cy="104" rx="46" ry="6" fill="#2a2350" opacity=".1"/><rect x="20" y="34" width="80" height="46" rx="16" fill="#ec6f98"/><rect x="26" y="62" width="68" height="28" rx="10" fill="#f9a9c4"/><rect x="8" y="52" width="24" height="42" rx="11" fill="#f48aae"/><rect x="88" y="52" width="24" height="42" rx="11" fill="#f48aae"/>${star(60, 58, 1.1)}<path d="M26 94v8M94 94v8" stroke="#a8556f" stroke-width="5" stroke-linecap="round"/>`),
  shower: sv(`<path d="M34 108V30a17 17 0 0 1 34 0v8" stroke="#8fa3c8" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M50 38h40l-7 15H57z" fill="#6fa8f0"/><path d="M62 62v40M72 62v40M82 62v40" stroke="#4fc3f0" stroke-width="5" stroke-linecap="round" stroke-dasharray="8 9"/><circle cx="34" cy="70" r="6" fill="#f58a2e"/>`),
  bookcase: sv(`<rect x="26" y="10" width="68" height="100" rx="8" fill="#c58a4e"/><rect x="33" y="18" width="54" height="24" rx="3" fill="#7a4a22"/><rect x="33" y="48" width="54" height="24" rx="3" fill="#7a4a22"/><rect x="33" y="78" width="54" height="24" rx="3" fill="#7a4a22"/>${books(18)}${books(48)}${books(78)}`),
  bed: sv(`<rect x="10" y="34" width="12" height="62" rx="5" fill="#6b4fc0"/><rect x="16" y="60" width="96" height="26" rx="8" fill="#8a68dc"/><rect x="24" y="48" width="32" height="18" rx="8" fill="#fff" stroke="#d9ccf7" stroke-width="2"/><path d="M106 86v10" stroke="#6b4fc0" stroke-width="6" stroke-linecap="round"/>${star(84, 72, .7)}`),
  table: sv(`<rect x="14" y="48" width="92" height="12" rx="6" fill="#c58a4e"/><path d="M28 60v40M92 60v40" stroke="#8f5a2a" stroke-width="8" stroke-linecap="round"/><ellipse cx="60" cy="44" rx="20" ry="5" fill="#fff" stroke="#d5cdef" stroke-width="2"/><circle cx="60" cy="40" r="7" fill="#f58a2e"/>`),
  fridge: sv(`<rect x="34" y="10" width="52" height="100" rx="10" fill="#eef3fa" stroke="#9db7dc" stroke-width="4"/><path d="M34 46h52" stroke="#9db7dc" stroke-width="4"/><path d="M44 22v14M44 58v22" stroke="#6f93bf" stroke-width="5" stroke-linecap="round"/>`),
  lamp: sv(`<path d="M60 54v46" stroke="#c98a4a" stroke-width="6"/><rect x="40" y="98" width="40" height="9" rx="4.5" fill="#a86c35"/><path d="M32 56h56L75 16H45z" fill="#ffd95a"/><path d="M45 16h30l3 9H42z" fill="#ffe9a0"/>`),
  scanner: sv(`<rect x="28" y="28" width="64" height="68" rx="12" fill="#dfe6f4" stroke="#6f93bf" stroke-width="4"/><rect x="38" y="38" width="44" height="32" rx="6" fill="#2b6caf"/><rect x="44" y="44" width="16" height="8" rx="2" fill="#6fe0ff"/><rect x="66" y="44" width="10" height="8" rx="2" fill="#ffd95a"/><rect x="40" y="78" width="40" height="8" rx="3" fill="#f58a2e"/><path d="M60 20v10" stroke="#8d9ab8" stroke-width="4"/>`)
};

const SPOTS = [
  { id: "living", x: 1.6, y: 7, w: 24.6, h: 84 },
  { id: "bathroom", x: 27.4, y: 15, w: 13.2, h: 68 },
  { id: "bedroom", x: 63.4, y: 15, w: 13.4, h: 70 },
  { id: "kitchen", x: 77.2, y: 7, w: 21.4, h: 86 },
  { id: "hall", x: 41, y: 10, w: 22, h: 80 },
  { id: "sofa", x: 5.5, y: 51, w: 17.5, h: 26, item: 1 },
  { id: "shower", x: 29.4, y: 22, w: 9.2, h: 36, item: 1 },
  { id: "bookcase", x: 64.6, y: 22, w: 8.2, h: 28, item: 1 }
];

const MC = [
  { q: "What is it? It is a ___.", ru: "Что это?", icon: "shower", o: ["shower", "sofa", "bookcase"], a: "shower", why: "This is a shower — we use it to wash. In the picture it is the blue capsule in the bathroom." },
  { q: "What room is it? It is the ___.", ru: "Какая это комната?", icon: "living", o: ["living room", "dining room", "bathroom"], a: "living room", why: "The pink door is the living room. There is a pink sofa there." },
  { q: "We cook in the ___.", ru: "Мы готовим еду в …", o: ["kitchen", "hall", "bedroom"], a: "kitchen", why: "We cook in the kitchen — the yellow door, with food on the table." },
  { q: "I sleep in the ___.", ru: "Я сплю в …", o: ["bedroom", "kitchen", "dining room"], a: "bedroom", why: "We sleep in the bedroom — the purple door, with a bed and a bookcase." },
  { q: "The books are in the ___.", ru: "Книги стоят в …", icon: "bookcase", o: ["bookcase", "shower", "sofa"], a: "bookcase", why: "Books stand in a bookcase. You can see one in the purple bedroom." },
  { q: "We eat dinner in the ___.", ru: "Мы ужинаем в …", o: ["dining room", "bathroom", "hall"], a: "dining room", why: "We eat dinner in the dining room. That room is on Deck 2 — it is not in this photo." },
  { q: "The shower is in the ___.", ru: "Душ находится в …", o: ["bathroom", "living room", "kitchen"], a: "bathroom", why: "The shower (the blue capsule) is in the bathroom — the blue door." },
  { q: "Look! The astronaut is in the ___.", ru: "Посмотри на картинку. Где астронавт?", icon: "hero", o: ["hall", "kitchen", "bedroom"], a: "hall", why: "The astronaut stands in the hall, between the four doors, with a scanner." }
];

const G = [
  { t: "There is a pink ___ in the living room.", a: "sofa", why: "The sofa in the living room is pink." },
  { t: "There is a ___ in the bathroom.", a: "shower", why: "The blue capsule in the bathroom is the shower." },
  { t: "The books are in the ___.", a: "bookcase", why: "The books are in the bookcase in the bedroom." },
  { t: "We cook in the ___.", a: "kitchen", why: "We cook in the kitchen." },
  { t: "I sleep in the ___.", a: "bedroom", why: "We sleep in the bedroom." },
  { t: "We eat dinner in the ___.", a: "dining room", why: "We eat dinner in the dining room (Deck 2)." },
  { t: "The astronaut is in the ___.", a: "hall", why: "The astronaut is standing in the hall." },
  { t: "The sofa is in the ___.", a: "living room", why: "The sofa is in the living room — the pink door." }
];

const D = [
  { id: "sofa", en: "sofa", room: "living" },
  { id: "lamp", en: "lamp", room: "living" },
  { id: "shower", en: "shower", room: "bathroom" },
  { id: "bookcase", en: "bookcase", room: "bedroom" },
  { id: "bed", en: "bed", room: "bedroom" },
  { id: "table", en: "table", room: "living" },
  { id: "fridge", en: "fridge", room: "kitchen" },
  { id: "scanner", en: "scanner", room: "hall" }
];
D.forEach(d => { d.s = `There is a ${d.en} in the ${W[d.room].en}.`; });

const O = [
  "This is the kitchen.",
  "There is a sofa in the living room.",
  "There is a shower in the bathroom.",
  "The bookcase is in the bedroom.",
  "The kitchen is next to the hall.",
  "There are four doors in the hall."
];

const T = [
  { s: "The sofa is in the living room.", a: true, why: "Yes — the pink sofa is in the pink living room." },
  { s: "The sofa is blue.", a: false, f: ["The sofa is ", "."], o: ["pink", "green", "yellow"], c: "pink", why: "Look at the picture: the sofa is pink, not blue." },
  { s: "There is a shower in the kitchen.", a: false, f: ["There is a shower in the ", "."], o: ["bathroom", "bedroom", "hall"], c: "bathroom", why: "The shower (the blue capsule) is in the bathroom, not in the kitchen." },
  { s: "The astronaut is in the hall.", a: true, why: "Yes — the astronaut is standing in the hall." },
  { s: "There is a bookcase in the bedroom.", a: true, why: "Yes — the bookcase is in the purple bedroom." },
  { s: "The kitchen door is pink.", a: false, f: ["The kitchen door is ", "."], o: ["yellow", "blue", "purple"], c: "yellow", why: "Look at the doors: the kitchen door is yellow, not pink. The pink door is the living room." },
  { s: "There is a bed in the bathroom.", a: false, f: ["There is a bed in the ", "."], o: ["bedroom", "kitchen", "living room"], c: "bedroom", why: "The bed is in the bedroom — the purple door." },
  { s: "There is food in the kitchen.", a: true, why: "Yes — you can see a burger and vegetables in the kitchen." }
];

const SP = [
  { st: "This is the", ex: "This is the kitchen." },
  { st: "There is a sofa in the", ex: "There is a sofa in the living room." },
  { st: "There is a shower in the", ex: "There is a shower in the bathroom." },
  { st: "There is a bookcase in the", ex: "There is a bookcase in the bedroom." },
  { st: "The kitchen is next to the", ex: "The kitchen is next to the bedroom." },
  { st: "We eat in the", ex: "We eat in the dining room." },
  { st: "I can see a", ex: "I can see a sofa in the living room." },
  { st: "My favourite room is the", ex: "My favourite room is the bedroom." }
];

const MEMORY_IDS = ["living", "kitchen", "bathroom", "bedroom", "hall", "sofa", "shower", "bookcase"];
const LISTEN = [
  { id: "living", door: "living" },
  { id: "kitchen", door: "kitchen" },
  { id: "bathroom", door: "bathroom" },
  { id: "bedroom", door: "bedroom" },
  { id: "dining", door: "dining" },
  { id: "hall", door: "hall" },
  { id: "sofa", door: "living" },
  { id: "shower", door: "bathroom" }
];
const SPELL_IDS = ["living", "kitchen", "bathroom", "bedroom", "dining", "hall", "sofa", "bookcase"];
const DOORS = [
  { id: "living", label: "Pink door", sub: "living room" },
  { id: "bathroom", label: "Blue door", sub: "bathroom" },
  { id: "bedroom", label: "Purple door", sub: "bedroom" },
  { id: "kitchen", label: "Yellow door", sub: "kitchen" },
  { id: "hall", label: "The hall", sub: "the corridor" },
  { id: "dining", label: "Deck 2", sub: "dining room" }
];
const IN_ROOM = { sofa: "living", shower: "bathroom", bookcase: "bedroom" };
const HW = [
  { id: "hwHome", short: "My home", tag: "Homework A", min: 8, title: "My Home", lead: "Write 6 sentences about your home.", ru: "Напиши 6 предложений о своём доме.", keys: range(6), total: 6, href: "#hw-home" },
  { id: "hwOdd", short: "Odd one", tag: "Homework B", min: 6, title: "Odd One Out", lead: "Read four words. Tap the word that does not belong.", ru: "Прочитай четыре слова и нажми то, которое лишнее.", keys: range(8), total: 8, href: "#hw-odd" },
  { id: "hwRiddle", short: "Riddles", tag: "Homework C", min: 6, title: "Room Riddles", lead: "Read the riddle and choose the word.", ru: "Прочитай загадку и выбери слово.", keys: range(8), total: 8, href: "#hw-riddle" },
  { id: "hwPost", short: "Postcard", tag: "Homework D", min: 8, title: "Ship Postcard", lead: "Read the postcard and answer the questions.", ru: "Прочитай открытку с корабля и ответь на вопросы.", keys: range(6), total: 6, href: "#hw-post" }
];
const ODD = [
  { q: "Which word is the odd one out?", opts: ["sofa", "bookcase", "shower", "banana"], a: "banana", why: "Banana is not furniture. Sofa, bookcase and shower are things in the rooms." },
  { q: "Which word is the odd one out?", opts: ["kitchen", "bathroom", "hall", "fridge"], a: "fridge", why: "Fridge is not a room. Kitchen, bathroom and hall are rooms." },
  { q: "Which word is the odd one out?", opts: ["pink", "yellow", "purple", "sofa"], a: "sofa", why: "Sofa is not a door colour. Pink, yellow and purple are door colours on the ship." },
  { q: "Which word is the odd one out?", opts: ["bed", "bookcase", "lamp", "kitchen"], a: "kitchen", why: "Kitchen is a room, not furniture. Bed, bookcase and lamp are things." },
  { q: "Which word is the odd one out?", opts: ["dining room", "living room", "bedroom", "shower"], a: "shower", why: "Shower is not a room. The other three words are rooms." },
  { q: "Which word is the odd one out?", opts: ["cook", "sleep", "eat", "sofa"], a: "sofa", why: "Sofa is not an action. Cook, sleep and eat are things we do." },
  { q: "Which word is the odd one out?", opts: ["hall", "kitchen", "bathroom", "apple"], a: "apple", why: "Apple is not a room. Hall, kitchen and bathroom are rooms." },
  { q: "Which word is the odd one out?", opts: ["There is", "There are", "This is", "bookcase"], a: "bookcase", why: "Bookcase is a thing, not a sentence starter. We use There is, There are and This is to make sentences." }
];
const RIDDLES = [
  { q: "I have a pink sofa and a lamp. What room am I?", a: "living" },
  { q: "We cook here. The door is yellow. What room am I?", a: "kitchen" },
  { q: "The blue capsule (the shower) is here. What room am I?", a: "bathroom" },
  { q: "I have a bed and a bookcase. The door is purple. What room am I?", a: "bedroom" },
  { q: "We eat dinner here. This room is on Deck 2. What room am I?", a: "dining" },
  { q: "The astronaut stands here, between the doors. What room am I?", a: "hall" },
  { q: "I am pink. You can sit on me in the living room. What am I?", a: "sofa" },
  { q: "Books are in me. I am in the bedroom. What am I?", a: "bookcase" }
];
const POST_TEXT = "Hello from Spaceship Home!\n\nToday I scanned four doors in the hall. The pink door is the living room. There is a sofa there. The blue door is the bathroom. The shower is a blue capsule! The purple door is the bedroom, and the yellow door is the kitchen. There is food in the kitchen. We eat dinner in the dining room on Deck 2.\n\nLove,\nJunior Astronaut";
const POST = [
  { q: "How many doors are in the hall?", why: "The postcard says: I scanned four doors in the hall.", test: s => /\b(4|four)\b/.test(s) },
  { q: "What colour is the living room door?", why: "The postcard says: The pink door is the living room.", test: s => /pink/.test(s) },
  { q: "Where is the shower?", why: "The shower is in the bathroom. It is a blue capsule.", test: s => /bathroom|capsule|blue/.test(s) },
  { q: "Is there food in the kitchen?", why: "The postcard says: There is food in the kitchen.", test: s => /^(yes|yeah|yep)\b|food/.test(s) },
  { q: "Where do they eat dinner?", why: "They eat dinner in the dining room on Deck 2.", test: s => /dining|deck 2|deck two/.test(s) },
  { q: "Who wrote the postcard?", why: "The postcard is from Junior Astronaut.", test: s => /astronaut|junior/.test(s) }
];

const STAGES = [
  { id: "memory", short: "Pairs", tag: "Warm-up", group: "warm", min: 4, title: "Memory Pairs", lead: "Flip two cards. Find the word and its picture. Listen when a card opens.", ru: "Переверни две карточки. Найди слово и его картинку. Когда карточка открывается, слово звучит.", keys: MEMORY_IDS },
  { id: "listen", short: "Doors", tag: "Warm-up", group: "warm", min: 4, title: "Listen and Tap the Door", lead: "Press Play, listen, then tap the right door. Furniture lives behind a coloured door.", ru: "Нажми Play, послушай слово и нажми нужную дверь. Диван — за розовой, душ — за синей.", keys: range(8) },
  { id: "spell", short: "Spell", tag: "Warm-up", group: "warm", min: 5, title: "Listen and Spell", lead: "Press Listen, then build the word with the letters. The game does not start a timer.", ru: "Нажми Listen, потом собери слово из букв. Таймер сам не запускается.", keys: SPELL_IDS },
  { id: "flip", short: "Cards", tag: "On the ship", min: 3, title: "Scanner Cards", lead: "Tap a card. Look, listen and say the word.", ru: "Нажми на карточку. Посмотри, послушай и повтори слово вслух.", keys: IDS },
  { id: "find", short: "Find", tag: "On the ship", min: 4, title: "Find the Room", lead: "Tap the scan points and listen. Then find the rooms for the scanner.", ru: "Нажимай на точки и слушай слова. Потом найди то, что просит сканер.", keys: IDS },
  { id: "match", short: "Match", tag: "Mission 1", min: 3, title: "Match the Scan", lead: "Tap a word, then tap its picture.", ru: "Нажми на слово, потом на его картинку.", keys: IDS.filter(i => i !== "hall") },
  { id: "mc", short: "Choose", tag: "Mission 2", min: 4, title: "Choose the Word", lead: "Read and choose the right word.", ru: "Прочитай и выбери правильное слово.", keys: range(8) },
  { id: "gaps", short: "Gaps", tag: "Mission 3", min: 4, title: "Fix the Ship Log", lead: "Tap a word to fill the gap.", ru: "Заполни пропуски: выбери пропуск и нажми на нужное слово.", keys: range(8) },
  { id: "dnd", short: "Furniture", tag: "Mission 4", min: 4, title: "Lock the Furniture", lead: "Read the scanner. Drag the furniture to the right room, or tap the thing and then the room.", ru: "Прочитай подсказку сканера и перетащи предмет в комнату (или нажми на предмет, потом на комнату).", keys: D.map(d => d.id) },
  { id: "order", short: "Order", tag: "Mission 5", min: 5, title: "Build the Sentence", lead: "Tap the words in the right order.", ru: "Собери предложение: нажимай слова по порядку.", keys: range(6) },
  { id: "tf", short: "True?", tag: "Mission 6", min: 4, title: "True or False?", lead: "Look at the picture. True or false? Fix the false sentences.", ru: "Посмотри на картинку. Верно или неверно? Исправь неверные предложения.", keys: range(8) },
  { id: "speak", short: "Speak", tag: "Mission 7", min: 7, total: 6, title: "Radio Report", lead: "Say or write 6–8 sentences about the rooms.", ru: "Скажи вслух или напиши 6–8 предложений о комнатах. Кнопка «Example» покажет пример.", keys: range(8) },
  { id: "final", short: "Report", tag: "Final mission", min: 5, total: 2, title: "Captain’s Report", lead: "Describe 2–3 rooms of the ship in your own words.", ru: "Опиши 2–3 комнаты корабля своими словами — письменно или устно.", keys: range(3) }
];
STAGES.forEach(s => { s.total = s.total || s.keys.length; });

function defaultState() {
  return { v: 1, name: "", score: 0, solved: {}, data: {}, sound: true, reflect: [] };
}
function load() {
  const base = defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const s = JSON.parse(raw);
    const out = Object.assign(base, s);
    if (!out.solved || typeof out.solved !== "object") out.solved = {};
    if (!out.data || typeof out.data !== "object") out.data = {};
    if (!Array.isArray(out.reflect)) out.reflect = [];
    out.score = Number(out.score) || 0;
    out.sound = out.sound !== false;
    out.name = typeof out.name === "string" ? out.name : "";
    return out;
  } catch (e) { return base; }
}
let S = load();
const tries = {};
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(S));
const solvedArr = id => S.solved[id] || (S.solved[id] = []);
const isSolved = (id, k) => solvedArr(id).some(x => String(x) === String(k));
const stDone = st => Math.min(st.total, solvedArr(st.id).length);
const stComplete = st => stDone(st) >= st.total;
const classStages = () => STAGES.filter(s => s.group !== "warm");
const gravity = () => {
  const arr = classStages();
  return Math.round(100 * arr.filter(stComplete).length / arr.length);
};
const roomsOf = () => WORDS.filter(w => w.room);

function say(t) {
  if (!S.sound || !("speechSynthesis" in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    const vs = speechSynthesis.getVoices();
    u.lang = "en-GB";
    u.rate = 0.85;
    const v = vs.find(v => /^en[-_]GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {}
}

function tone(ok) {}
function shake(el) { if (!el) return; el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
function fb(root, text, cls, why) {
  const p = root.querySelector(".fb") || root;
  const box = root.querySelector(".fb") || null;
  if (box) { box.textContent = text; box.className = "fb" + (cls ? " " + cls : ""); }
  let w = root.querySelector(".why");
  if (why) {
    if (!w) { w = document.createElement("p"); w.className = "why"; (box || p).after(w); }
    w.innerHTML = `<strong>Why.</strong> ${esc(why)}`;
  } else if (w) w.remove();
}
let toastT = 0;
function toast(msg) {
  const el = $("#toast"); el.textContent = msg; el.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("show"), 2200);
}
function miss(id, k) { tries[id + "|" + k] = (tries[id + "|" + k] || 0) + 1; tone(false); }
function solve(id, k) {
  if (isSolved(id, k)) return;
  const st = STAGES.find(s => s.id === id); const was = stComplete(st);
  solvedArr(id).push(k); S.score += tries[id + "|" + k] ? 5 : 10; tone(true); save(); hud(); renderPlan();
  const tag = document.querySelector(`#stage-${id} .done-tag-slot`);
  if (tag) tag.innerHTML = stComplete(st) ? '<span class="done-tag">Готово</span>' : "";
  const foot = document.querySelector(`#stage-${id} .foot-msg`);
  if (foot && stComplete(st)) foot.textContent = `Stage complete! Gravity ${gravity()}%.`;
  if (!was && stComplete(st)) setTimeout(() => toast(`Stage complete! Gravity ${gravity()}%`), 400);
  renderEnding();
}

function scene(compact) {
  const cls = compact ? "scene compact" : "scene";
  return `<figure class="${cls}"><picture><source srcset="images/${compact ? "hero-sm.webp" : "hero.webp"}" type="image/webp" /><img src="images/${compact ? "hero-sm.jpg" : "hero.jpg"}" width="1168" height="784" alt="${esc(ALT)}" /></picture><figcaption>Look at the four doors and the hall. The blue capsule is the shower.</figcaption></figure>`;
}

function hud() {
  const g = gravity();
  const fill = $("#gfill"), val = $("#gval"), bar = $("#gbar"), sc = $("#score");
  if (fill) fill.style.width = g + "%";
  if (val) val.textContent = g + "%";
  if (bar) bar.setAttribute("aria-valuenow", g);
  if (sc) sc.textContent = S.score;
  const snd = $("#snd");
  if (snd) { snd.textContent = S.sound ? "🔊" : "🔇"; snd.setAttribute("aria-pressed", S.sound ? "true" : "false"); }
}

function renderWords() {
  $("#word-bank").innerHTML = WORDS.map(w => `<button type="button" class="chip" data-say="${esc(w.en)}"><span class="ico">${ICON[w.id]}</span>${esc(w.en)}</button>`).join("");
}

function ex(s, hi) {
  const html = hi ? s.replace(hi, `<b>${hi}</b>`) : s;
  return `<li>${html}</li>`;
}
const HELP = [
  { t: "There is / are", h: `<h3>There is / There are</h3><p>Так мы говорим, <b>что где находится</b>.</p><div class="rule"><div><b>There is a …</b>одна вещь (1)</div><div><b>There are …s</b>много вещей (2+)</div></div><ul class="exl">${ex("There is a sofa in the living room.", "There is")}${ex("There is a shower in the bathroom.", "There is")}${ex("There are books in the bookcase.", "There are")}${ex("There are four doors in the hall.", "There are")}</ul><p>Подсказка: <b>is</b> = один, <b>are</b> = два и больше (слово с <b>-s</b>).</p>` },
  { t: "in · on · next to", h: `<h3>Предлоги места</h3><div class="prep"><div>in<small>в, внутри</small></div><div>on<small>на</small></div><div>next to<small>рядом с</small></div></div><ul class="exl">${ex("The sofa is in the living room.", "in")}${ex("The star is on the sofa.", "on")}${ex("The kitchen is next to the bedroom.", "next to")}${ex("The bathroom is next to the living room.", "next to")}</ul>` },
  { t: "Sentences", h: `<h3>Простые предложения</h3><p><b>This is the …</b> — «Это …» (называем комнату).</p><ul class="exl">${ex("This is the kitchen.", "This is")}${ex("This is the hall.", "This is")}</ul><p><b>The … is in the …</b> — «… находится в …».</p><ul class="exl">${ex("The sofa is in the living room.")}${ex("The bookcase is in the bedroom.")}</ul><p>Комнаты — с <b>the</b>: the kitchen, the hall. Вещь называем в первый раз — с <b>a</b>: a sofa, a shower.</p>` },
  { t: "Mission chant", h: `<h3>Речёвка миссии</h3><p>Читаем ритмично, как команды сканера (без пения).</p><div class="chant" lang="en">Scan, scan, scan the ship!<br>This is the <b>kitchen</b>. Beep!<br>This is the <b>hall</b>. Beep!<br>There is a <b>sofa</b> in the <b>living room</b>.<br>There is a <b>shower</b> in the <b>bathroom</b>.<br>There is a <b>bookcase</b> in the <b>bedroom</b>.<br>We eat in the <b>dining room</b>.<br>Gravity — one hundred percent!</div><p style="margin-top:.8rem"><button type="button" class="mini" data-say="Scan, scan, scan the ship! This is the kitchen. This is the hall. There is a sofa in the living room. There is a shower in the bathroom. There is a bookcase in the bedroom. We eat in the dining room. Gravity, one hundred percent!">🔊 Послушать</button></p>` },
  { t: "Pronunciation", h: `<h3>Как произносить</h3><table class="pron"><tbody>${WORDS.map(w => `<tr><td><button type="button" class="sayb" data-say="${esc(w.en)}" aria-label="Listen: ${esc(w.en)}">🔊</button></td><td lang="en">${esc(w.en)}<i>${esc(w.ipa)}</i></td><td>${esc(w.tip)}</td></tr>`).join("")}</tbody></table>` }
];
let helpTab = 0;
function renderHelp() {
  $("#help-tabs").innerHTML = HELP.map((h, i) => `<button type="button" class="chip" role="tab" aria-selected="${i === helpTab}" data-help="${i}">${esc(h.t)}</button>`).join("");
  $("#help-body").innerHTML = HELP[helpTab].h;
}

function planItems(arr) {
  return `<ol class="plan">${arr.map((s, i) => `<li><a class="plan-card ${stComplete(s) ? "done" : ""}" href="${s.href || ("#stage-" + s.id)}"><span class="n">${stComplete(s) ? "✓" : i + 1}</span><span class="t"><small>${esc(s.tag)} · ${s.min} min</small><b>${esc(s.title)}</b><i class="pbar"><i style="width:${100 * stDone(s) / s.total}%"></i></i></span></a></li>`).join("")}</ol>`;
}
function renderPlan() {
  const warm = STAGES.filter(s => s.group === "warm");
  const ship = STAGES.filter(s => s.group !== "warm");
  $("#plan-list").innerHTML = `
    <div class="plan-group"><h3>Warm-up · Тренировка слов</h3><p class="ru" lang="ru">Три игры на новые слова. Можно начать с любой.</p>${planItems(warm)}</div>
    <div class="plan-group"><h3>Missions on the ship</h3><p class="ru" lang="ru">Классные миссии. Gravity считает только их.</p>${planItems(ship)}</div>
    <div class="plan-group"><h3>Домашняя миссия</h3><p class="ru" lang="ru">Бонусная миссия со своим кодом. Всегда открыта.</p>${planItems(HW)}</div>`;
}

function nextBar(st) {
  const i = STAGES.indexOf(st);
  const next = i < STAGES.length - 1 ? STAGES[i + 1] : null;
  const prev = i ? STAGES[i - 1] : null;
  return `<footer class="foot">${prev ? `<a class="btn" href="#stage-${prev.id}">← ${esc(prev.short)}</a>` : `<a class="btn" href="#plan">← План</a>`}<p class="foot-msg" role="status">${stComplete(st) ? `Stage complete! Gravity ${gravity()}%.` : ""}</p>${next ? `<a class="btn btn-pink" href="#stage-${next.id}">Дальше: ${esc(next.title)}</a>` : `<a class="btn btn-pink" href="#ending">К финалу</a>`}</footer>`;
}

function renderStages() {
  $("#stages").innerHTML = STAGES.map(st => {
    const banner = st.id === "flip" ? `<div class="group-banner"><h3>On the ship · Миссии</h3></div>` : "";
    return `${banner}<section class="stage s-${st.id}" id="stage-${st.id}"><header class="st-head"><span class="badge">${esc(st.tag)} · ${st.min} min</span><h2>${esc(st.title)} <span class="done-tag-slot">${stComplete(st) ? '<span class="done-tag">Готово</span>' : ""}</span></h2><p class="lead">${esc(st.lead)}</p><p class="ru" lang="ru">${esc(st.ru)}</p></header><div id="task-${st.id}"></div>${nextBar(st)}</section>`;
  }).join("");
  STAGES.forEach(st => R[st.id]($("#task-" + st.id), st));
}

function persistShuffle(key, ids) {
  const d = S.data;
  if (!Array.isArray(d[key]) || d[key].length !== ids.length) {
    d[key] = shuffle(ids);
    save();
  }
  return d[key];
}

const R = {};


R.memory = el => {
  const ids = persistShuffle("memoryIds", MEMORY_IDS);
  const deck = persistShuffle("memoryDeck", ids.flatMap(id => [id + "|word", id + "|pic"]));
  let open = [], lock = false;
  const paint = () => {
    el.innerHTML = `<div class="mem-grid">${deck.map((key, i) => {
      const [id, side] = key.split("|");
      const w = W[id];
      const done = isSolved("memory", id);
      const isOpen = done || open.includes(i);
      const label = side === "word" ? `${w.en} ${w.ipa}` : `Picture: ${w.en}`;
      return `<button type="button" class="mem-card ${done ? "ok" : ""} ${isOpen ? "on" : ""}" data-i="${i}" ${done ? "disabled" : ""} aria-pressed="${isOpen}" aria-label="${isOpen ? esc(label) : "Hidden card. Tap to flip."}"><span class="mem-face mem-back" aria-hidden="true">✦</span><span class="mem-face mem-front">${side === "word" ? `<b>${esc(w.en)}</b><i>${esc(w.ipa)}</i>` : ICON[id]}</span></button>`;
    }).join("")}</div><p class="fb" role="status">${isSolved && MEMORY_IDS.every(id => isSolved("memory", id)) ? "All pairs found!" : "Flip two cards."}</p>`;
  };
  el.onclick = e => {
    if (lock) return;
    const b = e.target.closest(".mem-card"); if (!b || b.disabled) return;
    const i = +b.dataset.i;
    if (open.includes(i) || open.length >= 2) return;
    open.push(i);
    const [id] = deck[i].split("|");
    say(W[id].en);
    paint();
    if (open.length < 2) return;
    const [ka, kb] = open.map(n => deck[n]);
    const [ida, sa] = ka.split("|"), [idb, sb] = kb.split("|");
    if (ida === idb && sa !== sb) {
      fb(el, `A pair! ${W[ida].en}.`, "ok", `${W[ida].en} — ${W[ida].ru}. ${W[ida].ex}`);
      solve("memory", ida);
      open = [];
      paint();
    } else {
      miss("memory", ida);
      lock = true;
      fb(el, "Not a pair. Try again!", "bad", `One card was ${W[ida].en}, the other was ${W[idb].en}. Find the word and its picture.`);
      setTimeout(() => { open = []; lock = false; paint(); }, 1000);
    }
  };
  paint();
};

R.listen = el => {
  const order = persistShuffle("listenOrder", range(LISTEN.length));
  const doorOf = id => DOORS.find(d => d.id === id);
  const draw = () => {
    const left = order.filter(i => !isSolved("listen", i));
    const i = left[0];
    const p = i == null ? null : LISTEN[i];
    const doneDoors = new Set(order.filter(n => isSolved("listen", n)).map(n => LISTEN[n].door));
    el.innerHTML = `<div class="listen-layout">${scene(true)}<div class="listen-box">
      <p class="listen-prompt">${p ? "Press Play, then tap the door." : "All doors found! ✓"}</p>
      <div class="play-row">${p ? `<button type="button" class="btn btn-pink" id="play-word">▶ Play the word</button><span lang="ru" class="ru">Слово само не звучит — нажми Play.</span>` : ""}</div>
      <div class="door-pad">${DOORS.map(d => `<button type="button" class="door-btn c-${d.id}" data-door="${d.id}"><b>${esc(d.label)}</b><small>${esc(d.sub)}</small></button>`).join("")}</div>
      <p class="fb" role="status">${p ? `Word ${8 - left.length + 1} of 8.` : "Stage complete!"}</p>
    </div></div>`;
  };
  el.onclick = e => {
    if (e.target.closest("#play-word")) {
      const left = order.filter(i => !isSolved("listen", i));
      if (!left.length) return;
      say(W[LISTEN[left[0]].id].en);
      return;
    }
    const b = e.target.closest("[data-door]"); if (!b) return;
    const left = order.filter(i => !isSolved("listen", i));
    if (!left.length) return;
    const i = left[0], p = LISTEN[i], door = b.dataset.door;
    if (door === p.door) {
      const d = doorOf(p.door);
      const same = p.id === p.door;
      fb(el, same ? `Yes! ${W[p.id].en}.` : `Yes! The ${W[p.id].en} is in the ${W[p.door].en}.`, "ok",
        same ? `${W[p.id].en} is the ${d.label.toLowerCase()} (${d.sub}).` : `The ${W[p.id].en} is behind the ${d.label.toLowerCase()} — the ${d.sub}.`);
      say(W[p.id].en);
      solve("listen", i);
      b.classList.add("ok");
      setTimeout(draw, 800);
    } else {
      const want = doorOf(p.door), got = doorOf(door);
      miss("listen", i); shake(b);
      fb(el, `That is the ${got.sub}. Try again!`, "bad", `Listen again. The word was not the ${got.sub}. Tap the ${want.label.toLowerCase()} (${want.sub}).`);
    }
  };
  draw();
};

R.spell = el => {
  const order = persistShuffle("spellOrder", SPELL_IDS);
  S.data.spellBuilt = S.data.spellBuilt || {};
  const lettersOf = id => [...W[id].en];
  const mixOf = id => {
    const letters = lettersOf(id);
    const key = "spellMix_" + id;
    let p = S.data[key];
    if (!Array.isArray(p) || p.length !== letters.length) {
      p = shuffle(range(letters.length));
      if (p.every((k, j) => k === j)) p = p.slice().reverse();
      S.data[key] = p; save();
    }
    return p;
  };
  const draw = () => {
    const left = order.filter(id => !isSolved("spell", id));
    const id = left[0];
    if (!id) { el.innerHTML = `<p class="fb ok">All words built! ✓</p>`; return; }
    const w = W[id], letters = lettersOf(id), mix = mixOf(id);
    const built = Array.isArray(S.data.spellBuilt[id]) ? S.data.spellBuilt[id] : (S.data.spellBuilt[id] = []);
    const used = new Set(built);
    const hint = (tries["spell|" + id] || 0) > 0 ? `<div class="tile">${ICON[id]}</div>` : "";
    el.innerHTML = `<div class="spell-box">
      <p class="listen-prompt">Word ${SPELL_IDS.length - left.length + 1} of ${SPELL_IDS.length}.</p>
      <div class="play-row"><button type="button" class="btn btn-pink" id="play-word">▶ Listen</button><span lang="ru" class="ru">Слово само не звучит — нажми Listen, потом собери его из букв.</span></div>
      ${hint}
      <div class="spell-slots" id="slots">${built.map((idx, n) => `<button type="button" class="let in-slot ${letters[mix[idx]] === " " ? "space" : ""}" data-pop="${n}">${letters[mix[idx]] === " " ? "space" : esc(letters[mix[idx]])}</button>`).join("") || `<span class="ph">Tap the letters.</span>`}</div>
      <div class="spell-bank">${mix.map((src, i) => `<button type="button" class="let ${letters[src] === " " ? "space" : ""}" data-add="${i}" ${used.has(i) ? "disabled" : ""}>${letters[src] === " " ? "space" : esc(letters[src])}</button>`).join("")}</div>
      <p class="fb" role="status"></p>
    </div>`;
  };
  const check = id => {
    const letters = lettersOf(id), mix = mixOf(id);
    const built = S.data.spellBuilt[id] || [];
    if (built.length !== letters.length) return;
    const got = built.map(i => letters[mix[i]]).join("");
    if (got === letters.join("")) {
      fb(el, `Yes! ${W[id].en}.`, "ok", `${W[id].en} — ${W[id].ru}. ${W[id].ex}`);
      say(W[id].en);
      solve("spell", id);
      setTimeout(draw, 800);
    } else {
      miss("spell", id);
      fb(el, "Not yet. Listen again and try a new order.", "bad", `The word is ${letters.length} letters long${letters.includes(" ") ? " and has a space" : ""}.`);
    }
  };
  el.onclick = e => {
    const left = order.filter(id => !isSolved("spell", id));
    const id = left[0]; if (!id) return;
    if (e.target.closest("#play-word")) { say(W[id].en); return; }
    const add = e.target.closest("[data-add]");
    if (add && !add.disabled) {
      S.data.spellBuilt[id] = S.data.spellBuilt[id] || [];
      S.data.spellBuilt[id].push(+add.dataset.add); save();
      draw(); check(id); return;
    }
    const pop = e.target.closest("[data-pop]");
    if (pop) {
      S.data.spellBuilt[id].splice(+pop.dataset.pop, 1); save();
      draw();
    }
  };
  draw();
};

R.flip = el => {
  el.innerHTML = `<div class="cards">${WORDS.map(w => `<button type="button" class="flip ${isSolved("flip", w.id) ? "seen" : ""}" data-id="${w.id}" aria-pressed="false" aria-label="Picture card. Tap to scan."><span class="flip-in"><span class="face front">${ICON[w.id]}<em>Tap to scan</em></span><span class="face back c-${w.id}"><b>${esc(w.en)}</b><i>${esc(w.ipa)}</i><small lang="ru">${esc(w.ru)}</small><q>${esc(w.ex)}</q></span></span></button>`).join("")}</div>`;
  el.onclick = e => {
    const b = e.target.closest(".flip"); if (!b) return;
    const w = W[b.dataset.id], on = !b.classList.contains("on");
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on);
    b.setAttribute("aria-label", on ? `${w.en} — ${w.ru}` : "Picture card. Tap to scan.");
    if (on) { say(w.en); b.classList.add("seen"); solve("flip", w.id); }
  };
};

R.find = (el, st) => {
  const d = S.data; d.seen = d.seen || [];
  let target = null;
  const mark = id => d.phase === "quiz" ? (isSolved("find", id) ? "ok" : "") : (d.seen.includes(id) ? "seen" : "");
  const ro = html => { const n = $("#ro", el); if (n) n.innerHTML = html; };
  const ask = () => {
    const left = shuffle(IDS.filter(id => !isSolved("find", id)));
    if (!left.length) { target = null; ro("<div><small>Scanner</small><b>All rooms found!</b><span>Tap any tag to listen again.</span></div>"); return; }
    target = left[0]; const w = W[target];
    ro(`<div><small>Scanner asks</small><b>Find the ${esc(w.en)}</b><span lang="ru">Нажми на картинке${target === "dining" ? " или на камере Deck 2" : ""}.</span><br><button type="button" class="mini" data-say="Find the ${esc(w.en)}">🔊 Listen</button></div>`);
    say("Find the " + w.en);
  };
  const draw = () => {
    const q = d.phase === "quiz";
    const spots = SPOTS.map(s => `<button type="button" class="spot ${s.item ? "item" : ""} ${mark(s.id)}" data-spot="${s.id}" style="left:${s.x}%;top:${s.y}%;width:${s.w}%;height:${s.h}%" aria-label="Scan point: ${esc(W[s.id].en)}"><span class="dot" aria-hidden="true"></span><span class="tag">${esc(W[s.id].en)}</span></button>`).join("");
    el.innerHTML = `<div class="find"><div><figure class="scene"><picture><source srcset="images/hero.webp" type="image/webp" /><img src="images/hero.jpg" width="1168" height="784" alt="${esc(ALT)}" /></picture>${spots}</figure><p class="ru" lang="ru">Розовая дверь — гостиная, синяя — ванная (капсула = душ), сиреневая — спальня, жёлтая — кухня. Астронавт стоит в холле.</p></div>
      <div class="side"><div class="readout" id="ro" role="status" aria-live="polite"></div>
      <button type="button" class="cam ${mark("dining")}" data-spot="dining"><span class="cam-pic">${ICON.dining}</span><span><small>Deck 2 camera</small><b class="cam-tag">${mark("dining") ? "dining room" : "Tap to scan"}</b></span></button>
      ${q ? "" : `<button type="button" class="btn btn-pink" id="test">Start scanner test →</button><p class="ru" lang="ru" id="hint">${d.seen.length >= 9 ? "Отлично! Теперь нажми «Start scanner test»." : "Сначала нажми на все 9 точек: 8 на картинке и камеру Deck 2. Тест можно начать и раньше."}</p>`}
      <p class="fb" role="status"></p></div></div>`;
    if (q) ask(); else ro('<div><small>Scanner ready</small><b>Tap a scan point</b><span lang="ru">Нажми на светящуюся точку.</span></div>');
  };
  el.onclick = e => {
    if (e.target.closest("#test")) { d.phase = "quiz"; save(); draw(); return; }
    const b = e.target.closest("[data-spot]"); if (!b) return; const id = b.dataset.spot;
    if (d.phase !== "quiz") {
      b.classList.add("seen"); if (id === "dining") { const t = $(".cam-tag", b); if (t) t.textContent = "dining room"; }
      ro(`<div class="tile">${ICON[id]}</div><div><small>Scanner</small><b>${esc(W[id].en)}</b><span>${esc(W[id].ipa)} · <span lang="ru">${esc(W[id].ru)}</span></span></div>`);
      say(W[id].en);
      if (!d.seen.includes(id)) { d.seen.push(id); save(); }
      const hint = $("#hint", el); if (hint) hint.textContent = d.seen.length >= 9 ? "Отлично! Теперь нажми «Start scanner test»." : `Сканов: ${d.seen.length} / 9. Можно продолжить или начать тест.`;
      return;
    }
    if (isSolved("find", id) || !target) { say(W[id].en); return; }
    const markOk = spotId => {
      const n = el.querySelector(`[data-spot="${spotId}"]`);
      if (n) { n.classList.add("ok"); if (spotId === "dining") { const tg = $(".cam-tag", n); if (tg) tg.textContent = "dining room"; } }
    };
    if (id === target) {
      markOk(id); say(W[id].en); fb(el, `Yes! This is the ${W[id].en}.`, "ok"); solve("find", id); target = null;
      setTimeout(() => { if (d.phase === "quiz") ask(); }, 900);
    } else if (IN_ROOM[id] === target) {
      markOk(target); say(W[target].en);
      fb(el, `Yes! The ${W[id].en} is in the ${W[target].en}.`, "ok", `You tapped the ${W[id].en}. That is inside the ${W[target].en}.`);
      solve("find", target); target = null;
      setTimeout(() => { if (d.phase === "quiz") ask(); }, 900);
    } else if (IN_ROOM[target] === id) {
      miss("find", target); shake(b);
      fb(el, `This is the ${W[id].en}. The ${W[target].en} is in here — tap it!`, "bad", `Look inside the ${W[id].en} for the ${W[target].en}.`);
    } else {
      miss("find", target); shake(b);
      fb(el, `This is the ${W[id].en}. Try again!`, "bad", `The scanner asked for the ${W[target].en}.`);
    }
  };
  draw();
};

R.match = (el, st) => {
  const ids = st.keys;
  const words = persistShuffle("matchWords", ids);
  const pics = persistShuffle("matchPics", ids);
  let sw = null, sp = null;
  el.innerHTML = `<div class="match"><div class="m-words">${words.map(id => `<button type="button" class="chip" data-w="${id}">${esc(W[id].en)}</button>`).join("")}</div><div class="m-pics">${pics.map(id => `<button type="button" class="pic" data-p="${id}" aria-label="Picture">${ICON[id]}<span class="pic-tag"></span></button>`).join("")}</div></div><p class="fb" role="status"></p>`;
  const paint = () => {
    $$("[data-w]", el).forEach(b => { const ok = isSolved("match", b.dataset.w); b.disabled = ok; b.classList.toggle("ok", ok); b.classList.toggle("sel", b.dataset.w === sw); });
    $$("[data-p]", el).forEach(b => { const ok = isSolved("match", b.dataset.p); b.disabled = ok; b.classList.toggle("ok", ok); b.classList.toggle("sel", b.dataset.p === sp); $(".pic-tag", b).textContent = ok ? W[b.dataset.p].en : ""; if (ok) b.setAttribute("aria-label", W[b.dataset.p].en); });
  };
  el.onclick = e => {
    const w = e.target.closest("[data-w]"), p = e.target.closest("[data-p]"); if (!w && !p) return;
    if (w) { sw = w.dataset.w; say(W[sw].en); } if (p) sp = p.dataset.p;
    if (sw && sp) {
      if (sw === sp) { solve("match", sw); fb(el, `Correct! ${W[sw].en}.`, "ok"); }
      else { miss("match", sw); shake($(`[data-w="${sw}"]`, el)); shake($(`[data-p="${sp}"]`, el)); fb(el, "No match. Try again!", "bad", "The word and the picture must be the same thing. Look again and try a new pair."); }
      sw = sp = null;
    }
    paint();
  };
  paint();
};

function seq(el, st, n, draw, review) {
  const i = range(n).find(k => !isSolved(st.id, k));
  const pips = `<ol class="pips" aria-label="Progress">${range(n).map(k => `<li class="${isSolved(st.id, k) ? "d" : k === i ? "c" : ""}" aria-hidden="true"></li>`).join("")}</ol>`;
  if (i === undefined) { el.innerHTML = pips + `<div class="review"><h3>✓ All scanned! Read and say:</h3><ul>${review.map(r => `<li><button type="button" class="sayb" data-say="${esc(r)}" aria-label="Listen">🔊</button><span>${esc(r)}</span></li>`).join("")}</ul></div>`; return; }
  el.innerHTML = pips + '<div class="q-card" id="q"></div>';
  draw(i, $("#q", el), () => setTimeout(() => seq(el, st, n, draw, review), 1100));
}

R.mc = (el, st) => seq(el, st, MC.length, (i, box, next) => {
  const m = MC[i]; if (!m.icon) box.classList.add("one");
  const opts = persistShuffle("mcOpts" + i, m.o);
  box.innerHTML = `${m.icon ? `<div class="q-media">${m.icon === "hero" ? scene(true) : `<div class="tile">${ICON[m.icon]}</div>`}</div>` : ""}<div class="q-body"><p class="q-num">Question ${i + 1} / ${MC.length}</p><p class="q-text">${m.q.replace("___", '<span class="blank">?</span>')}</p><p class="ru" lang="ru">${esc(m.ru)}</p><div class="opts">${opts.map(o => `<button type="button" class="btn opt" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div><p class="fb" role="status"></p></div>`;
  box.onclick = e => {
    const b = e.target.closest(".opt"); if (!b || box.dataset.lock) return;
    if (b.dataset.o === m.a) { box.dataset.lock = "1"; b.classList.add("ok"); const bl = $(".blank", box); bl.textContent = m.a; bl.classList.add("ok"); say(m.q.replace("___", m.a)); fb(box, "Correct!", "ok"); solve("mc", i); next(); }
    else { miss("mc", i); b.classList.add("no"); b.disabled = true; shake(b); fb(box, "Not this one. Try again!", "bad", m.why); }
  };
}, MC.map(m => m.q.replace("___", m.a)));

R.gaps = el => {
  let act = -1;
  const bank = persistShuffle("gapBank", WORDS.map(w => w.en));
  el.innerHTML = `<ol class="g-list">${G.map((g, i) => { const p = g.t.split("___"); return `<li data-i="${i}"><span>${esc(p[0])}</span><button type="button" class="gap" data-i="${i}" aria-label="Gap ${i + 1}">?</button><span>${esc(p[1] || "")}</span><button type="button" class="sayb" data-say="${esc(g.t.replace("___", g.a))}" aria-label="Listen" hidden>🔊</button></li>`; }).join("")}</ol><div class="bank" aria-label="Word bank">${bank.map(w => `<button type="button" class="chip" data-w="${esc(w)}">${esc(w)}</button>`).join("")}</div><p class="fb" role="status"></p>`;
  const paint = () => {
    G.forEach((g, i) => { const li = $(`li[data-i="${i}"]`, el), b = $(".gap", li), ok = isSolved("gaps", i); li.classList.toggle("ok", ok); li.classList.toggle("act", i === act); b.textContent = ok ? g.a : "?"; b.disabled = ok; $(".sayb", li).hidden = !ok; });
    $$(".chip", el).forEach(c => { c.disabled = G.some((g, i) => g.a === c.dataset.w && isSolved("gaps", i)); });
  };
  const nextAct = () => { act = G.findIndex((g, i) => !isSolved("gaps", i)); paint(); };
  el.onclick = e => {
    const g = e.target.closest(".gap"); if (g) { act = +g.dataset.i; paint(); return; }
    const c = e.target.closest(".chip"); if (!c || act < 0) return;
    if (G[act].a === c.dataset.w) { const i = act; say(G[i].t.replace("___", G[i].a)); fb(el, "Correct!", "ok"); solve("gaps", i); nextAct(); }
    else { miss("gaps", act); shake(c); fb(el, "Not here. Read the sentence again.", "bad", G[act].why); }
  };
  nextAct();
};

R.dnd = el => {
  let sel = null; const rooms = roomsOf();
  el.innerHTML = `${scene(true)}<div class="tray" id="tray" aria-label="Furniture"></div><div class="scanline" role="status" aria-live="polite"><small>Scanner</small><b id="sl">Tap or drag a thing.</b></div>
    <div class="zones">${rooms.map(r => `<button type="button" class="zone c-${r.id}" data-room="${r.id}" aria-label="${esc(r.en)}"><span class="zone-h">${ICON[r.id]}${esc(r.en)}</span><span class="zone-in"></span></button>`).join("")}</div><p class="fb" role="status"></p>`;
  const paint = () => {
    $("#tray", el).innerHTML = D.filter(d => !isSolved("dnd", d.id)).map(d => `<button type="button" class="item ${sel === d.id ? "sel" : ""}" data-id="${d.id}">${ICON[d.id]}${esc(d.en)}</button>`).join("") || '<p class="ph">All furniture is locked. ✓</p>';
    rooms.forEach(r => { $(`.zone[data-room="${r.id}"] .zone-in`, el).innerHTML = D.filter(d => d.room === r.id && isSolved("dnd", d.id)).map(d => `<span>${ICON[d.id]}${esc(d.en)}</span>`).join(""); });
  };
  const pick = id => {
    if (sel === id) return; sel = id; const d = D.find(x => x.id === id);
    $$(".item", el).forEach(b => b.classList.toggle("sel", b.dataset.id === id));
    $("#sl", el).innerHTML = `${esc(d.s)} <button type="button" class="sayb" data-say="${esc(d.s)}" aria-label="Listen">🔊</button>`; say(d.s);
  };
  const drop = room => {
    if (!sel) return; const d = D.find(x => x.id === sel);
    if (d.room === room) { sel = null; fb(el, `Locked! ${d.s}`, "ok"); $("#sl", el).textContent = "Tap or drag the next thing."; solve("dnd", d.id); paint(); }
    else { miss("dnd", d.id); shake($(`.zone[data-room="${room}"]`, el)); fb(el, `Not the ${W[room].en}. Read the scanner again.`, "bad", `${d.s} Look at the picture key if you need help.`); }
  };
  el.onclick = e => {
    if (el._dragged) { el._dragged = false; return; }
    const b = e.target.closest(".item"); if (b) { pick(b.dataset.id); return; }
    const z = e.target.closest(".zone"); if (z) { if (sel) drop(z.dataset.room); else fb(el, "First tap a thing, then tap a room."); }
  };
  let ghost = null, dragId = null, startX = 0, startY = 0;
  const clearGhost = () => { if (ghost) ghost.remove(); ghost = null; dragId = null; };
  el.addEventListener("pointerdown", e => {
    const it = e.target.closest(".item"); if (!it) return;
    pick(it.dataset.id);
    dragId = it.dataset.id; startX = e.clientX; startY = e.clientY;
    it.setPointerCapture(e.pointerId);
  });
  el.addEventListener("pointermove", e => {
    if (!dragId) return;
    if (!ghost && (Math.abs(e.clientX - startX) > 6 || Math.abs(e.clientY - startY) > 6)) {
      const it = el.querySelector(`.item[data-id="${dragId}"]`);
      ghost = (it || document.createElement("div")).cloneNode(true);
      ghost.classList.add("drag-ghost");
      ghost.setAttribute("aria-hidden", "true");
      document.body.appendChild(ghost);
    }
    if (ghost) {
      ghost.style.left = (e.clientX - 40) + "px";
      ghost.style.top = (e.clientY - 20) + "px";
    }
  });
  el.addEventListener("pointerup", e => {
    if (!dragId) return;
    const moved = !!ghost;
    const z = document.elementFromPoint(e.clientX, e.clientY)?.closest?.(".zone");
    if (moved && z) { el._dragged = true; drop(z.dataset.room); }
    clearGhost();
  });
  el.addEventListener("pointercancel", clearGhost);
  paint();
};

R.order = (el, st) => seq(el, st, O.length, (i, box, next) => {
  const words = O[i].slice(0, -1).split(" ");
  const mix = () => { let p = shuffle(range(words.length)); if (p.every((k, j) => k === j)) p.reverse(); return p; };
  const d = S.data; d.orderPool = d.orderPool || {};
  if (!Array.isArray(d.orderPool[i])) { d.orderPool[i] = mix(); save(); }
  let pool = [...d.orderPool[i]], ans = []; box.classList.add("one");
  const paint = () => { box.innerHTML = `<p class="q-num">Sentence ${i + 1} / ${O.length}</p><div class="line" aria-label="Your sentence">${ans.map(k => `<button type="button" class="chip w" data-a="${k}">${esc(words[k])}</button>`).join("") || '<span class="ph">Tap the words…</span>'}<span class="dotend">.</span></div><div class="pool">${pool.map(k => `<button type="button" class="chip w" data-p="${k}">${esc(words[k])}</button>`).join("")}</div><div class="row"><button type="button" class="btn" data-clear>↺ Clear</button><button type="button" class="btn btn-pink" data-check ${pool.length ? "disabled" : ""}>Check ✓</button></div><p class="fb" role="status"></p>`; };
  paint();
  box.onclick = e => {
    if (box.dataset.lock) return; const t = e.target; let b;
    if (b = t.closest("[data-p]")) { const k = +b.dataset.p; pool = pool.filter(x => x !== k); ans.push(k); paint(); }
    else if (b = t.closest("[data-a]")) { const k = +b.dataset.a; ans = ans.filter(x => x !== k); pool.push(k); paint(); }
    else if (t.closest("[data-clear]")) { d.orderPool[i] = mix(); pool = [...d.orderPool[i]]; ans = []; save(); paint(); }
    else if (t.closest("[data-check]")) {
      if (ans.map(k => words[k]).join(" ") + "." === O[i]) { box.dataset.lock = "1"; $(".line", box).classList.add("ok"); say(O[i]); fb(box, "Correct! " + O[i], "ok"); solve("order", i); next(); }
      else { miss("order", i); shake($(".line", box)); fb(box, `Not yet. Start with “${words[0]}”. Tap a word to move it back.`, "bad", `The first word is “${words[0]}”. Build the sentence in order.`); }
    }
  };
}, O);

R.tf = (el, st) => seq(el, st, T.length, (i, box, next) => {
  const t = T[i];
  box.innerHTML = `<div class="q-media">${scene(true)}</div><div class="q-body"><p class="q-num">Scan ${i + 1} / ${T.length}</p><p class="q-text" id="tfs">${esc(t.s)}</p><div class="opts" id="tfo"><button type="button" class="btn opt" data-v="1">✓ True</button><button type="button" class="btn opt" data-v="0">✗ False</button></div><div class="fix" hidden></div><p class="fb" role="status"></p></div>`;
  box.onclick = e => {
    let b;
    if (b = e.target.closest("[data-v]")) {
      if (box.dataset.lock) return;
      if ((b.dataset.v === "1") !== t.a) { miss("tf", i); shake(b); fb(box, "Look at the picture again.", "bad", t.why); return; }
      box.dataset.lock = "1"; b.classList.add("ok");
      if (t.a) { say(t.s); fb(box, "Yes, it is true!", "ok", t.why); solve("tf", i); next(); }
      else {
        $("#tfs", box).classList.add("strike");
        const f = $(".fix", box); f.hidden = false;
        const opts = persistShuffle("tfOpts" + i, t.o);
        f.innerHTML = `<p class="q-num">Correct the sentence</p><p class="q-text">${esc(t.f[0])}<span class="blank">?</span>${esc(t.f[1])}</p><div class="opts">${opts.map(o => `<button type="button" class="btn opt" data-fx="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
        fb(box, "Right, it is false. Now fix it!", "ok", t.why);
      }
    } else if (b = e.target.closest("[data-fx]")) {
      if (box.dataset.done) return;
      if (b.dataset.fx === t.c) { box.dataset.done = "1"; b.classList.add("ok"); const bl = $(".fix .blank", box); bl.textContent = t.c; bl.classList.add("ok"); say(t.f[0] + t.c + t.f[1]); fb(box, "Fixed!", "ok"); solve("tf", i); next(); }
      else { miss("tf", i); b.classList.add("no"); b.disabled = true; shake(b); fb(box, "Look at the picture and try again.", "bad", t.why); }
    }
  };
}, T.map(t => t.a ? t.s : t.f[0] + t.c + t.f[1]));

R.speak = (el, st) => {
  const d = S.data.speak || (S.data.speak = []); let last = null, sv;
  el.innerHTML = `<div class="bank" aria-label="Word bank">${WORDS.map(w => `<button type="button" class="chip" data-ins="${esc(w.en)}">${esc(w.en)}</button>`).join("")}</div><p class="ru" lang="ru" style="margin-top:.5rem">Нажми на слово — оно добавится в предложение, где стоит курсор.</p><p class="count" id="spc"></p>
    <ol class="sp-list">${SP.map((s, i) => { const ok = isSolved("speak", i); return `<li data-i="${i}" class="${ok ? "ok" : ""}"><label class="sp-st" for="sp${i}">${i + 1}. ${esc(s.st)} …</label><input id="sp${i}" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="${esc(s.st)} …" value="${esc(d[i] || "")}" ${ok ? "readonly" : ""}><div class="sp-btns"><button type="button" class="mini" data-ex="${i}">💡 Example</button><button type="button" class="mini" data-oral="${i}">🎤 I said it</button><button type="button" class="mini go" data-chk="${i}">✓ Send</button></div><p class="ex" hidden></p></li>`; }).join("")}</ol><p class="fb" role="status"></p>`;
  const count = () => { const n = solvedArr("speak").length; $("#spc", el).textContent = `Sentences: ${n} / 6${n >= 6 ? " ✓  (7–8 = bonus stars)" : ""}`; };
  const accept = i => { const li = $(`li[data-i="${i}"]`, el); li.classList.add("ok"); $("input", li).readOnly = true; solve("speak", i); count(); fb(el, "Report received!", "ok"); };
  el.addEventListener("input", e => { const li = e.target.closest("li[data-i]"); if (!li) return; d[+li.dataset.i] = e.target.value; clearTimeout(sv); sv = setTimeout(save, 400); });
  el.addEventListener("focusin", e => { if (e.target.matches(".sp-list input")) last = e.target; });
  el.onclick = e => {
    const t = e.target; let b;
    if (b = t.closest("[data-ins]")) { say(b.dataset.ins); const inp = last && !last.readOnly ? last : $(".sp-list li:not(.ok) input", el); if (inp) { inp.value = (inp.value.trim() ? inp.value.trim() + " " : SP[+inp.closest("li").dataset.i].st + " ") + b.dataset.ins; d[+inp.closest("li").dataset.i] = inp.value; save(); inp.focus(); } }
    else if (b = t.closest("[data-ex]")) { const i = +b.dataset.ex, p = $(".ex", b.closest("li")); p.hidden = false; p.textContent = "Example: " + SP[i].ex; say(SP[i].ex); }
    else if (b = t.closest("[data-oral]")) accept(+b.dataset.oral);
    else if (b = t.closest("[data-chk]")) {
      const i = +b.dataset.chk, v = (d[i] || "").trim();
      if (v.split(/\s+/).length < 3) { miss("speak", i); shake(b.closest("li")); fb(el, "Write a full sentence: 3 words or more.", "bad", "Start with the words in the prompt and add a mission word, like kitchen or sofa."); }
      else if (!VOCAB_RE.test(v)) { miss("speak", i); shake(b.closest("li")); fb(el, "Use a mission word: kitchen, hall, sofa, shower…", "bad", "Your sentence needs a room or furniture word from the mission list."); }
      else { say(v); accept(i); }
    }
  };
  count();
};

R.final = el => {
  const rooms = roomsOf();
  const d = S.data.final || (S.data.final = [{}, {}, {}]);
  let sv;
  el.innerHTML = `${scene(true)}<div class="final-cards">${[0, 1, 2].map(i => { const ok = isSolved("final", i); d[i] = d[i] || {}; return `<section class="rep ${ok ? "ok" : ""}" data-i="${i}"><h3>Room ${i + 1} ${i === 2 ? "<small>· bonus</small>" : ""}</h3><div class="bank">${rooms.map(r => `<button type="button" class="chip ${d[i].room === r.id ? "sel" : ""}" data-room="${r.id}" aria-pressed="${d[i].room === r.id}">${esc(r.en)}</button>`).join("")}</div><label class="vh" for="fr${i}">Describe room ${i + 1}</label><textarea id="fr${i}" rows="3" spellcheck="false" placeholder="This is the … There is a … in the … It is next to the …" ${ok ? "readonly" : ""}>${esc(d[i].text || "")}</textarea><div class="sp-btns"><button type="button" class="mini" data-oral>🎤 I said it</button><button type="button" class="mini go" data-chk>✓ Send report</button></div><p class="fb" role="status"></p></section>`; }).join("")}</div>`;
  el.addEventListener("input", e => { const c = e.target.closest(".rep"); if (!c) return; d[+c.dataset.i].text = e.target.value; clearTimeout(sv); sv = setTimeout(save, 400); });
  el.onclick = e => {
    const c = e.target.closest(".rep"); if (!c) return; const i = +c.dataset.i, r = d[i]; let b;
    const accept = () => { c.classList.add("ok"); $("textarea", c).readOnly = true; solve("final", i); };
    if (b = e.target.closest("[data-room]")) { if (isSolved("final", i)) return; r.room = b.dataset.room; save(); say(W[r.room].en); $$("[data-room]", c).forEach(x => { const on = x === b; x.classList.toggle("sel", on); x.setAttribute("aria-pressed", on); }); }
    else if (e.target.closest("[data-oral]")) { if (!r.room) { shake(c); fb(c, "Choose a room first."); return; } accept(); }
    else if (e.target.closest("[data-chk]")) {
      const v = (r.text || "").trim();
      if (!r.room) { shake(c); fb(c, "Choose a room first.", "bad", "Tap a room name, then write 2 sentences about it."); }
      else if (v.split(/\s+/).length < 6) { miss("final", i); shake(c); fb(c, "Write more: 2 sentences or more.", "bad", "Use This is the … and There is a … in the …"); }
      else if (!v.toLowerCase().includes(W[r.room].en)) { miss("final", i); shake(c); fb(c, `Use the room name: ${W[r.room].en}.`, "bad", `Write the words “${W[r.room].en}” in your report.`); }
      else accept();
    }
  };
};


const norm = s => String(s || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
function solveHw(id, k) {
  if (isSolved(id, k)) return;
  solvedArr(id).push(k);
  S.score += tries[id + "|" + k] ? 5 : 10;
  save(); hud(); renderPlan(); renderHwCard();
  const tag = document.querySelector(`#${HW.find(h => h.id === id).href.slice(1)} .done-tag-slot`);
  const st = HW.find(h => h.id === id);
  if (tag) tag.innerHTML = stComplete(st) ? '<span class="done-tag">Готово</span>' : "";
}
function hwAllDone() { return HW.every(stComplete); }
function renderHwCard() {
  const el = $("#hw-card"); if (!el) return;
  const n = HW.filter(stComplete).length, full = hwAllDone();
  el.className = "panel closed-card" + (full ? "" : " pending");
  el.innerHTML = `<span class="big-stamp">${full ? "Homework complete" : "In progress"}</span>
    <p class="eyebrow">Домашняя миссия</p>
    <h3>${full ? "Bonus mission complete!" : "Bonus mission"} <span>${n} / ${HW.length}</span></h3>
    <p class="lead">${full ? "Well done! Here is your homework code." : "This mission is always open. You can read the bonus code now."}</p>
    <p class="case-code">${HW_CODE}</p>
    <p class="note-gap">${full ? `Код домашней миссии: ${HW_CODE}.` : "Части можно выполнять в любом порядке. Ответы сохраняются."}</p>`;
}

function homeOk(s) {
  const t = norm(s);
  if (t.length < 10) return false;
  const start = /^(there is|there are|there's|there is a|there is an|there are some)\b/.test(t) || /\bthere is\b|\bthere are\b|\bthere's\b/.test(t);
  const place = /\bin my\b|\bin the\b|\bin a\b|\bin an\b/.test(t) || /\b(living room|kitchen|bathroom|bedroom|dining room|hall|home|house|flat|apartment)\b/.test(t);
  return start && place;
}

function renderHomework() {
  const box = $("#hw-parts"); if (!box) return;
  renderHwCard();
  S.data.hwHome = Array.isArray(S.data.hwHome) ? S.data.hwHome : ["", "", "", "", "", ""];
  S.data.hwPost = Array.isArray(S.data.hwPost) ? S.data.hwPost : ["", "", "", "", "", ""];
  const home = HW[0];
  const oddMix = k => persistShuffle("oddOpts" + k, range(ODD[k].opts.length));
  const ridMix = k => persistShuffle("ridOpts" + k, IDS);
  box.innerHTML = `
    <article class="hw-part" id="hw-home">
      <header><span class="badge">${esc(home.tag)} · ${home.min} min</span><h3>My Home <span class="done-tag-slot">${stComplete(home) ? '<span class="done-tag">Готово</span>' : ""}</span></h3>
        <p class="lead">Write 6 sentences about your home. Use <b>There is</b> or <b>There are</b> and <b>in my</b>.</p>
        <p class="ru" lang="ru">Пиши свои предложения, например: There is a sofa in my living room.</p></header>
      <ol class="hw-home">${range(6).map(i => `<li><label for="hm-${i}">Sentence ${i + 1}</label><textarea id="hm-${i}" data-home="${i}" rows="2" maxlength="160" placeholder="There is a … in my …">${esc(S.data.hwHome[i] || "")}</textarea></li>`).join("")}</ol>
      <button type="button" class="btn btn-pink" id="check-home">Check my sentences</button>
      <p class="fb" role="status"></p>
    </article>
    <article class="hw-part" id="hw-odd">
      <header><span class="badge">Homework B · 6 min</span><h3>Odd One Out <span class="done-tag-slot">${stComplete(HW[1]) ? '<span class="done-tag">Готово</span>' : ""}</span></h3>
        <p class="lead">Read four words. Tap the word that does not belong.</p>
        <p class="ru" lang="ru">Найди лишнее слово и нажми на него.</p></header>
      ${ODD.map((o, i) => `<div class="odd-row" data-odd="${i}"><p>${i + 1}. ${esc(o.q)}</p><div class="odd-opts">${oddMix(i).map(k => { const w = o.opts[k]; const done = isSolved("hwOdd", i); const ok = done && w === o.a; return `<button type="button" class="chip ${ok ? "ok" : ""}" data-odd-opt="${esc(w)}" ${done ? "disabled" : ""}>${esc(w)}</button>`; }).join("")}</div><p class="fb ${isSolved("hwOdd", i) ? "ok" : ""}" role="status">${isSolved("hwOdd", i) ? "Correct. " + o.why : ""}</p></div>`).join("")}
    </article>
    <article class="hw-part" id="hw-riddle">
      <header><span class="badge">Homework C · 6 min</span><h3>Room Riddles <span class="done-tag-slot">${stComplete(HW[2]) ? '<span class="done-tag">Готово</span>' : ""}</span></h3>
        <p class="lead">Read the riddle and choose the word.</p>
        <p class="ru" lang="ru">Прочитай загадку и выбери слово из девяти.</p></header>
      ${scene(true)}
      ${RIDDLES.map((r, i) => `<div class="riddle-q" data-rid="${i}"><blockquote>${i + 1}. ${esc(r.q)}</blockquote><div class="odd-opts">${ridMix(i).map(id => { const done = isSolved("hwRiddle", i); const ok = done && id === r.a; return `<button type="button" class="chip ${ok ? "ok" : ""}" data-rid-opt="${id}" ${done ? "disabled" : ""}><span class="ico">${ICON[id]}</span>${esc(W[id].en)}</button>`; }).join("")}</div><p class="fb ${isSolved("hwRiddle", i) ? "ok" : ""}" role="status">${isSolved("hwRiddle", i) ? "Yes! " + W[r.a].en + "." : ""}</p></div>`).join("")}
    </article>
    <article class="hw-part" id="hw-post">
      <header><span class="badge">Homework D · 8 min</span><h3>Ship Postcard <span class="done-tag-slot">${stComplete(HW[3]) ? '<span class="done-tag">Готово</span>' : ""}</span></h3>
        <p class="lead">Read the postcard and answer in English.</p>
        <p class="ru" lang="ru">Прочитай открытку и напиши короткие ответы.</p></header>
      ${scene(true)}
      <div class="postcard">${POST_TEXT.split("\n").map(line => line ? `<p>${esc(line)}</p>` : "<p></p>").join("")}</div>
      ${POST.map((q, i) => `<div class="hw-q"><label for="pq-${i}">${i + 1}. ${esc(q.q)}</label><input id="pq-${i}" type="text" maxlength="80" data-post="${i}" value="${esc(S.data.hwPost[i] || "")}" ${isSolved("hwPost", i) ? "readonly" : ""} autocomplete="off" /></div>`).join("")}
      <button type="button" class="btn btn-pink" id="check-post">Check my answers</button>
      <p class="fb" role="status" id="post-fb"></p>
    </article>`;

  const homeFb = box.querySelector("#hw-home .fb");
  box.querySelectorAll("[data-home]").forEach(ta => {
    ta.addEventListener("input", () => {
      S.data.hwHome[+ta.dataset.home] = ta.value; save();
    });
  });
  box.querySelector("#check-home").addEventListener("click", () => {
    let n = 0, bad = 0;
    S.data.hwHome.forEach((s, i) => {
      const ta = box.querySelector(`[data-home="${i}"]`);
      if (homeOk(s)) { solveHw("hwHome", i); ta.classList.add("ok"); n++; }
      else { if (norm(s)) { miss("hwHome", i); bad++; } ta.classList.toggle("bad", !!norm(s)); }
    });
    if (n === 6) fb(box.querySelector("#hw-home"), "Great! Six sentences about your home.", "ok");
    else fb(box.querySelector("#hw-home"), `I can read ${n} of 6. Write: There is a sofa in my living room.`, "bad", "Use There is / There are and in my / in the plus a room or a thing.");
  });

  box.querySelectorAll("[data-odd]").forEach(row => {
    row.addEventListener("click", e => {
      const b = e.target.closest("[data-odd-opt]"); if (!b || b.disabled) return;
      const i = +row.dataset.odd, o = ODD[i];
      if (b.dataset.oddOpt === o.a) {
        fb(row, "Correct!", "ok", o.why);
        solveHw("hwOdd", i);
        row.querySelectorAll("[data-odd-opt]").forEach(x => { x.disabled = true; if (x.dataset.oddOpt === o.a) x.classList.add("ok"); });
      } else {
        miss("hwOdd", i); shake(b);
        fb(row, "Not this word. Try again!", "bad", "Look again. Which word is not like the others?");
      }
    });
  });

  box.querySelectorAll("[data-rid]").forEach(row => {
    row.addEventListener("click", e => {
      const b = e.target.closest("[data-rid-opt]"); if (!b || b.disabled) return;
      const i = +row.dataset.rid, r = RIDDLES[i];
      if (b.dataset.ridOpt === r.a) {
        say(W[r.a].en);
        fb(row, `Yes! ${W[r.a].en}.`, "ok", r.q + " — " + W[r.a].en + ".");
        solveHw("hwRiddle", i);
        row.querySelectorAll("[data-rid-opt]").forEach(x => { x.disabled = true; if (x.dataset.ridOpt === r.a) x.classList.add("ok"); });
      } else {
        miss("hwRiddle", i); shake(b);
        fb(row, `That is the ${W[b.dataset.ridOpt].en}. Try again!`, "bad", "Read the riddle again. Look at the picture key if you need help.");
      }
    });
  });

  box.querySelectorAll("[data-post]").forEach(inp => {
    inp.addEventListener("input", () => { S.data.hwPost[+inp.dataset.post] = inp.value; save(); });
  });
  box.querySelector("#check-post").addEventListener("click", () => {
    let n = 0;
    POST.forEach((q, i) => {
      const inp = box.querySelector(`[data-post="${i}"]`);
      const val = norm(inp.value);
      if (q.test(val)) { solveHw("hwPost", i); inp.readOnly = true; n++; inp.style.borderColor = "#3fbf8a"; }
      else if (val) { miss("hwPost", i); inp.style.borderColor = "#d4536a"; }
    });
    const host = box.querySelector("#hw-post");
    if (n === 6) fb(host, "Well done! You read the postcard.", "ok");
    else {
      const first = POST.findIndex((q, i) => !isSolved("hwPost", i));
      fb(host, `I can read ${n} of 6. Look at the postcard again.`, "bad", first >= 0 ? POST[first].why : "");
    }
  });
}

function renderEnding() {
  const g = gravity(), full = g >= 100;
  const max = STAGES.reduce((a, s) => a + s.total, 0) * 10;
  const stars = S.score >= max * 0.85 ? 3 : S.score >= max * 0.6 ? 2 : 1;
  const who = S.name ? " " + esc(S.name) : "";
  $("#closed-card").className = "panel closed-card" + (full ? "" : " pending");
  $("#closed-card").innerHTML = `<span class="big-stamp">${full ? "Mission complete" : "In progress"}</span>
    <p class="eyebrow">${full ? "All rooms scanned" : "Mission report"}</p>
    <h3>${full ? "Mission Complete!" : "Mission in progress"} <span>Gravity ${g}%</span></h3>
    <div class="stars" aria-label="${stars} stars of 3">${[1, 2, 3].map(n => `<i class="${n > stars ? "off" : ""}">★</i>`).join("")}</div>
    <p class="lead">${full ? `Well done, Junior Astronaut${who}! The ship is stable.` : "Scan all the rooms to make the gravity 100% stable. You can still read the mission code now."}</p>
    <div class="stats"><div><b>${S.score}</b><small>Score</small></div><div><b>${classStages().filter(stComplete).length} / ${classStages().length}</b><small>Stages</small></div></div>
    <p class="case-code">${CASE_CODE}</p>
    ${full ? `<p class="note-gap">Все комнаты просканированы. Код миссии: ${CASE_CODE}.</p>` : `<p class="note-gap">Некоторые задания ещё не закончены. Можно продолжить в любом порядке — финал уже открыт.</p>`}
    <p><a class="btn btn-pink" href="#homework">Дальше: Домашняя миссия</a></p>`;
  $("#rf").innerHTML = WORDS.map(w => `<button type="button" class="chip ${S.reflect.includes(w.id) ? "sel" : ""}" data-r="${w.id}" aria-pressed="${S.reflect.includes(w.id)}"><span class="ico">${ICON[w.id]}</span>${esc(w.en)}</button>`).join("");
  const cert = () => { $("#cert").textContent = S.reflect.length === 3 ? `My top 3 words: ${S.reflect.map(id => W[id].en).join(", ")}.` : `Choose ${3 - S.reflect.length} more.`; };
  cert();
}

function boot() {
  hud();
  const nm = $("#nm"); if (nm) nm.value = S.name || "";
  renderWords(); renderHelp(); renderPlan(); renderStages(); renderEnding(); renderHomework();

  document.addEventListener("click", e => {
    const sayb = e.target.closest("[data-say]"); if (sayb) { say(sayb.getAttribute("data-say")); return; }
    const hb = e.target.closest("[data-help]"); if (hb) { helpTab = +hb.dataset.help; renderHelp(); return; }
    const rb = e.target.closest("[data-r]"); if (rb) {
      const id = rb.dataset.r, i = S.reflect.indexOf(id);
      if (i >= 0) S.reflect.splice(i, 1);
      else if (S.reflect.length < 3) { S.reflect.push(id); say(W[id].en); }
      else { shake(rb); return; }
      save(); renderEnding(); if (S.reflect.length === 3) toast("Top 3 words locked in!");
    }
  });
  $("#nm").addEventListener("input", e => { S.name = e.target.value.trim(); save(); renderEnding(); });
  $("#snd").addEventListener("click", () => { S.sound = !S.sound; if (!S.sound && window.speechSynthesis) speechSynthesis.cancel(); save(); hud(); });
  $("#reset-btn").addEventListener("click", () => {
    if (!confirm(RESET_MSG)) return;
    if (window.speechSynthesis) speechSynthesis.cancel();
    localStorage.removeItem(STORAGE_KEY);
    S = defaultState();
    location.hash = "#top";
    hud(); $("#nm").value = "";
    renderWords(); renderHelp(); renderPlan(); renderStages(); renderEnding(); renderHomework();
    window.scrollTo(0, 0);
  });
  const tog = $("#nav-toggle"), nav = $("#site-nav"), head = $("#site-header");
  tog.addEventListener("click", () => { const on = head.classList.toggle("is-open"); tog.setAttribute("aria-expanded", on ? "true" : "false"); });
  nav.addEventListener("click", e => { if (e.target.closest("a")) { head.classList.remove("is-open"); tog.setAttribute("aria-expanded", "false"); } });

  if ("speechSynthesis" in window) speechSynthesis.getVoices();

  window.__qa = { STORAGE_KEY, CASE_CODE, HW_CODE, STAGES, HW, WORDS, MEMORY_IDS, LISTEN, SPELL_IDS, ODD, RIDDLES, POST, MC, G, D, O, T, SP, SPOTS, getState: () => S, save, solve, solveHw, isSolved, stComplete, gravity, hwAllDone, say, homeOk, norm };
}

document.addEventListener("DOMContentLoaded", boot);
})();
