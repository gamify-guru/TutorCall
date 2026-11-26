const KEY = "tutorcall-shadow-school-interview-witness-v1";
const CODE = "SS-TAG-PAGE13";
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
function wc(s) { return String(s || "").trim().split(/\s+/).filter(Boolean).length; }

function fixApos(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/['’]/g, "'")
    .replace(/\bdidnt\b/g, "didn't")
    .replace(/\bwasnt\b/g, "wasn't")
    .replace(/\bwerent\b/g, "weren't")
    .replace(/\bisnt\b/g, "isn't")
    .replace(/\barent\b/g, "aren't")
    .replace(/\bdont\b/g, "don't")
    .replace(/\bdoesnt\b/g, "doesn't")
    .replace(/\bcant\b/g, "can't")
    .replace(/\bhavent\b/g, "haven't")
    .replace(/\bhasnt\b/g, "hasn't")
    .replace(/\bwont\b/g, "won't")
    .replace(/\bim\b/g, "i'm")
    .replace(/\byoure\b/g, "you're")
    .replace(/\btheyre\b/g, "they're")
    .replace(/\bits\b/g, "it's")
    .replace(/\boclock\b/g, "o'clock");
}
function norm(s) {
  return fixApos(s).replace(/[^a-z0-9']+/g, " ").replace(/\s+/g, " ").trim();
}
function stripQ(s) { return norm(s).replace(/\?$/g, "").trim(); }

const TAG_AUX = "isn't|aren't|wasn't|weren't|don't|doesn't|didn't|can't|haven't|hasn't|won't|shan't|mightn't|couldn't|wouldn't|shouldn't|is|are|was|were|do|does|did|can|have|has|will|shall|might|could|would|should";
const TAG_PRON = "i|you|he|she|it|we|they|there";
const TAG_RE = new RegExp(`^(${TAG_AUX})\\s+(${TAG_PRON})$`);

function parseTagQ(input) {
  const n = stripQ(input);
  const m = n.match(new RegExp(`^(.*?)\\s+(${TAG_AUX})\\s+(${TAG_PRON})$`));
  if (!m || m[1].split(" ").filter(Boolean).length < 3) return null;
  return { body: m[1].trim(), tag: `${m[2]} ${m[3]}`, aux: m[2], pron: m[3] };
}
function tagNeg(aux) { return /n't$/.test(aux); }
function bodyNeg(body) { return /\b(not|never)\b/.test(body) || /n't\b/.test(body); }

function sameAny(input, list) {
  const n = stripQ(input);
  return (list || []).some((x) => stripQ(x) === n);
}
function hasNeed(text, need) {
  const b = " " + stripQ(text) + " ";
  const has = (w) => b.includes(" " + stripQ(w) + " ") || stripQ(text).includes(stripQ(w));
  if (!need || !need.length) return true;
  if (Array.isArray(need[0])) return need.some((g) => g.every(has));
  const hits = need.filter(has);
  return hits.length >= Math.min(2, need.length);
}

function speak(text, opts = {}) {
  if (!state.soundOn || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(String(text));
  u.lang = "en-GB";
  u.rate = opts.rate ?? 0.92;
  u.pitch = opts.pitch ?? 1;
  const voices = speechSynthesis.getVoices();
  const v = voices.find((x) => /en-GB/i.test(x.lang) && /female|google uk english female|serena|kate/i.test(x.name))
    || voices.find((x) => /en-GB/i.test(x.lang))
    || voices.find((x) => /^en/i.test(x.lang));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
function speakTag(stem, tag, tone, pitch) {
  if (!state.soundOn || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const a = new SpeechSynthesisUtterance(stem);
  a.lang = "en-GB"; a.rate = 0.95; a.pitch = pitch ?? 1;
  const b = new SpeechSynthesisUtterance(String(tag).replace("?", tone === "rising" ? "?" : "."));
  b.lang = "en-GB";
  b.rate = 0.85;
  b.pitch = tone === "rising" ? 1.75 : 0.45;
  const voices = speechSynthesis.getVoices();
  const v = voices.find((x) => /en-GB/i.test(x.lang)) || voices.find((x) => /^en/i.test(x.lang));
  if (v) { a.voice = v; b.voice = v; }
  a.onend = () => speechSynthesis.speak(b);
  speechSynthesis.speak(a);
}

const MARKS = {
  confirmed: "Confirmed fact",
  new: "New information",
  lie: "Lie",
  uncertainty: "Uncertainty"
};

const WITNESSES = [
  {
    id: "voss", name: "Professor Voss", role: "History teacher",
    mood: "Calm. She knows old secrets.", img: "professor-voss", pitch: 1.05, pron: "she",
    text: "Good evening. I am Professor Voss, the history teacher, and I know the old signs of this school. I was in the library at nine o'clock tonight. I did not write that secret note. My capital I always has a little hook, and the I on the note is straight. I can explain the eye symbol: it is the old sign of the school archive, and you can see it on the cover of this book. I am not sure about Mr Abernathy. He knows too many doors. I think I saw a blue light under the archive door, but the corridor was dark, so I cannot be certain.",
    special: { title: "Professor Voss leans closer…", lines: ["You came to me first. Good choice.", "She taps the old book: “Look for this sign in the book, not in the laboratory.”"], clue: "vossS" },
    normalEnd: "Voss closes the book slowly. “That is all for tonight.”",
    tasks: [
      { id: "v1", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "You didn't write the secret note,",
        tags: ["did you?", "did you"],
        tone: "falling", mark: "confirmed",
        answer: "No, I didn't. My capital I has a little hook. This one is straight.",
        whyTag: "После отрицания didn't нужен положительный хвостик: did you?",
        whyTone: "Текст это прямо подтверждает — проверка факта, falling ↘.",
        whyMark: "Она прямо говорит: «I did not write that secret note». Это confirmed fact." },
      { id: "v2", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "Your capital I has a little hook,",
        tags: ["doesn't it?", "doesn't it"],
        tone: "falling", mark: "confirmed",
        answer: "Yes, it does. The I on the note is straight.",
        whyTag: "Has здесь основной глагол, поэтому хвостик doesn't it?",
        whyTone: "Это ясно сказано в тексте — falling ↘.",
        whyMark: "Она подтверждает крючок на своей букве I. Это confirmed fact." },
      { id: "v3", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "You can explain the eye symbol,",
        tags: ["can't you?", "can't you"],
        tone: "falling", mark: "new",
        answer: "Yes, I can. It is the old sign of the school archive. And the archive books used to have this sign on every first page.",
        whyTag: "После can в утверждении нужен отрицательный хвостик: can't you?",
        whyTone: "Она уже сказала, что может объяснить знак, — falling ↘.",
        whyMark: "Про глаз как знак архива уже есть в тексте, но про первую страницу каждой книги она говорит впервые — new information." },
      { id: "v4", type: "full", ru: "Сама составь tag question и проверь: она была в библиотеке в девять часов.",
        fulls: [
          "You were in the library at nine o'clock, weren't you?",
          "You were in the library at nine, weren't you?",
          "You were in the library at 9 o'clock, weren't you?",
          "You were in the library at 9, weren't you?"
        ],
        tone: "falling", mark: "confirmed",
        answer: "Yes, I was.",
        whyTag: "Утверждение с were → хвостик weren't you? Нужно полное предложение.",
        whyTone: "Время есть в её показаниях — falling ↘.",
        whyMark: "Она подтверждает: «I was in the library at nine o'clock». Это confirmed fact." },
      { id: "v5", type: "full", ru: "Сама составь tag question и проверь: глаз — это старый знак школьного архива.",
        fulls: [
          "The eye is the old sign of the school archive, isn't it?",
          "It's the old sign of the school archive, isn't it?",
          "It is the old sign of the school archive, isn't it?",
          "The eye symbol is the old sign of the school archive, isn't it?"
        ],
        tone: "falling", mark: "confirmed",
        answer: "Yes, it is. You can see it on the cover of this book.",
        whyTag: "Утверждение с is → хвостик isn't it? Напиши полное предложение.",
        whyTone: "Это прямо сказано в тексте — falling ↘.",
        whyMark: "Она подтверждает знак архива, который уже есть в тексте. Это confirmed fact." },
      { id: "v6", type: "full", ru: "Она не уверена насчёт мистера Абернати. Напиши tag question.",
        fulls: [
          "You aren't sure about Mr Abernathy, are you?",
          "You're not sure about Mr Abernathy, are you?",
          "You are not sure about Mr Abernathy, are you?",
          "You don't trust Mr Abernathy, do you?",
          "You aren't sure about Abernathy, are you?",
          "You're not sure about Abernathy, are you?"
        ],
        tone: "rising", mark: "uncertainty",
        answer: "Well… I'm not sure. Maybe. He knows too many doors.",
        whyTag: "После aren't / don't нужен положительный хвостик: are you? / do you?",
        whyTone: "В тексте она сомневается — это настоящий вопрос, rising ↗.",
        whyMark: "Она говорит «I'm not sure. Maybe» — uncertainty." },
      { id: "v7", type: "own", ru: "Напиши свой tag question про синий свет под дверью архива. В тексте она не уверена.",
        need: [["blue", "light"], ["blue", "door"], ["blue", "archive"]],
        acceptTags: ["didn't you", "did you", "wasn't it", "was it"],
        tone: "rising", mark: "uncertainty",
        answer: "I think I saw a blue light, but the corridor was dark, so I cannot be certain.",
        whyTag: "Нужен свой tag question про синий свет (например: You saw a blue light under the archive door, didn't you?).",
        whyTone: "Она сама не уверена — rising ↗.",
        whyMark: "Она не может подтвердить свет наверняка — uncertainty." }
    ]
  },
  {
    id: "theo", name: "Theo", role: "Student, sketch artist",
    mood: "Nervous. Draws everything.", img: "theo", pitch: 1.25, pron: "he",
    text: "I was at the table with my bag open. The ink on the note smelled like library dust — old and dusty, like the archive shelves. When I came back, there was an old sketch inside my bag! I didn't put it there. I draw a lot, and I have eye sketches in my notebook, but this paper was yellow and very old. When I touched the sketch, I thought it might crumble, like the pages of an old book, but I didn't test it. I don't remember where my pen was. Maybe it was in my bag, or maybe I left it in class.",
    special: { title: "Theo opens his bag…", lines: ["You trusted me first, so I'll show you.", "He takes out the old sketch. When he touches it, the paper crumbles — exactly like the pages of the old book!"], clue: "theoS" },
    normalEnd: "Theo zips his bag quickly. “Can I go now?”",
    tasks: [
      { id: "t1", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "The ink smelled like library dust,",
        tags: ["didn't it?", "didn't it"],
        tone: "falling", mark: "confirmed",
        answer: "Yes, it did. Old and dusty — like the archive shelves.",
        whyTag: "Past Simple smelled → отрицательный хвостик didn't it?",
        whyTone: "Это прямо сказано в тексте — falling ↘.",
        whyMark: "Он подтверждает запах библиотечной пыли. Это confirmed fact." },
      { id: "t2", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "You left your bag open on the table,",
        tags: ["didn't you?", "didn't you"],
        tone: "falling", mark: "confirmed",
        answer: "Yes, I did. When I came back, there was an old sketch inside!",
        whyTag: "Утверждение в Past Simple → didn't you?",
        whyTone: "Сумка на столе уже есть в тексте — falling ↘.",
        whyMark: "Он подтверждает, что сумка была открыта. Это confirmed fact." },
      { id: "t3", type: "full", ru: "Сама составь tag question и проверь: Тео не клал этот старый набросок в сумку.",
        fulls: [
          "You didn't put the old sketch in your bag, did you?",
          "You didn't put that old sketch in your bag, did you?",
          "You didn't put the sketch in your bag, did you?",
          "You didn't put it in your bag, did you?"
        ],
        tone: "falling", mark: "new",
        answer: "No, I didn't. I think somebody dropped it in when I went to the window.",
        whyTag: "После didn't нужен положительный хвостик did you? Напиши полное предложение.",
        whyTone: "В тексте он уже сказал, что не клал набросок, — falling ↘.",
        whyMark: "Он добавляет новое: кто-то бросил бумагу, когда он отошёл к окну. Это new information." },
      { id: "t4", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "The paper was yellow and very old,",
        tags: ["wasn't it?", "wasn't it"],
        tone: "falling", mark: "confirmed",
        answer: "Yes, it was. This paper was yellow and very old.",
        whyTag: "Утверждение с was → wasn't it?",
        whyTone: "Цвет и возраст бумаги есть в тексте — falling ↘.",
        whyMark: "Он подтверждает, что бумага жёлтая и старая. Это confirmed fact." },
      { id: "t5", type: "full", ru: "Сама составь tag question и проверь: у Тео в тетради есть наброски глаза.",
        fulls: [
          "You have eye sketches in your notebook, don't you?",
          "You've got eye sketches in your notebook, haven't you?",
          "You have got eye sketches in your notebook, haven't you?",
          "You draw eye sketches in your notebook, don't you?"
        ],
        tone: "falling", mark: "confirmed",
        answer: "Yes, I do. I have eye sketches in my notebook. But this paper was different — it was old.",
        whyTag: "Утверждение с have / draw → don't you? (или haven't you?). Напиши полное предложение.",
        whyTone: "Про наброски в тетради сказано прямо — falling ↘.",
        whyMark: "Он подтверждает свои наброски глаза. Это confirmed fact." },
      { id: "t6", type: "own", ru: "Напиши свой tag question про ручку Тео. В тексте он не помнит, где она была.",
        need: [["pen"], ["bag", "class"]],
        acceptTags: ["do you", "don't you", "was it", "wasn't it", "did you", "didn't you"],
        tone: "rising", mark: "uncertainty",
        answer: "I don't remember. Maybe it was in my bag, or maybe I left it in class.",
        whyTag: "Нужен свой tag question про ручку, например: You don't remember where your pen was, do you?",
        whyTone: "Он сам не помнит — rising ↗.",
        whyMark: "«I don't remember» — uncertainty." },
      { id: "t7", type: "own", ru: "Напиши свой tag question про то, что набросок может рассыпаться, как страницы старой книги. Тео это не проверял.",
        need: [["crumble"], ["pages"], ["old", "book"], ["sketch", "book"]],
        acceptTags: ["didn't it", "did it", "mightn't it", "couldn't it", "wasn't it", "was it"],
        tone: "rising", mark: "uncertainty",
        answer: "I thought it might crumble, like the pages of an old book, but I didn't test it.",
        whyTag: "Нужен свой tag question про рассыпающийся набросок или страницы старой книги.",
        whyTone: "Он не проверял бумагу — rising ↗.",
        whyMark: "Он только думает, что бумага может рассыпаться, и не проверял это — uncertainty." }
    ]
  },
  {
    id: "abernathy", name: "Mr Abernathy", role: "Caretaker, keeper of keys",
    mood: "Quiet and easily rattled. He keeps many doors.", img: "mr-abernathy", pitch: 0.55, pron: "he",
    text: "I am the caretaker, and I keep the keys. I was not honest in Report 05. I wrote that the library was locked. It wasn't. The spare key is still in my coat, but somebody used it on Tuesday night — not me! I have seen this old page before. I think it is from a book in the archive, but I didn't read the number on it. I found a note on the floor, and I was scared, so I didn't tell anyone at first. I always lock the archive at eight. At least, I believe I locked it tonight.",
    special: { title: "The Tag Tester buzzes!", lines: ["The blue light flickers — he is still hiding something.", "“All right! I had the spare key… and I found the note on the floor. I hid them both. I was scared.”"], clue: "aberS" },
    normalEnd: "Abernathy pulls his coat closer. “Goodnight, investigator.”",
    tasks: [
      { id: "a1", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "You weren't honest in Report 05,",
        tags: ["were you?", "were you"],
        tone: "falling", mark: "confirmed",
        answer: "…No, I wasn't. I wrote that the library was locked. It wasn't.",
        whyTag: "После weren't нужен положительный хвостик were you?",
        whyTone: "Он уже признаётся в тексте — falling ↘.",
        whyMark: "Он подтверждает, что в Report 05 был нечестен. Это confirmed fact." },
      { id: "a2", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "The library was not locked,",
        tags: ["was it?", "was it"],
        tone: "falling", mark: "confirmed",
        answer: "No, it wasn't. The library was not locked.",
        whyTag: "После was not нужен положительный хвостик was it?",
        whyTone: "Это прямо сказано в тексте — falling ↘.",
        whyMark: "Он подтверждает: библиотека не была заперта. Это confirmed fact." },
      { id: "a3", type: "full", ru: "Сама составь tag question и проверь: запасной ключ до сих пор у него в пальто.",
        fulls: [
          "The spare key is still in your coat, isn't it?",
          "The spare key is in your coat, isn't it?",
          "You've still got the spare key in your coat, haven't you?",
          "You still have the spare key in your coat, don't you?"
        ],
        tone: "falling", mark: "confirmed",
        answer: "Yes… it is. The spare key is still in my coat.",
        whyTag: "Утверждение с is → isn't it? (или don't you? / haven't you?). Напиши полное предложение.",
        whyTone: "Ключ в пальто уже есть в тексте — falling ↘.",
        whyMark: "Он подтверждает, что ключ в пальто. Это confirmed fact." },
      { id: "a4", type: "full", ru: "Сама составь tag question и проверь: запасным ключом воспользовались во вторник вечером.",
        fulls: [
          "Somebody used the spare key on Tuesday night, didn't they?",
          "Someone used the spare key on Tuesday night, didn't they?",
          "Somebody used it on Tuesday night, didn't they?",
          "The spare key was used on Tuesday night, wasn't it?"
        ],
        tone: "falling", mark: "new",
        answer: "Yes, somebody did — not me! And the ink on that old page looks the same as the ink on the note.",
        whyTag: "Somebody / someone → хвостик didn't they? (или wasn't it?). Напиши полное предложение.",
        whyTone: "Про вторник вечером сказано в тексте — falling ↘.",
        whyMark: "Он добавляет новое: чернила на старой странице такие же, как на записке. Это new information." },
      { id: "a5", type: "full", ru: "Сама составь tag question и проверь: он уже видел эту старую страницу.",
        fulls: [
          "You've seen this old page before, haven't you?",
          "You have seen this old page before, haven't you?",
          "You've seen this page before, haven't you?",
          "You have seen this page before, haven't you?"
        ],
        tone: "falling", mark: "confirmed",
        answer: "Yes, I have. I think it is from a book in the archive, but I didn't read the number.",
        whyTag: "Утверждение с have seen → haven't you? Напиши полное предложение.",
        whyTone: "«I have seen this old page before» есть в тексте — falling ↘.",
        whyMark: "Он подтверждает, что видел страницу, но номер не называет. Это confirmed fact." },
      { id: "a6", type: "full", ru: "Он не уверен, запер ли архив сегодня. Напиши tag question.",
        fulls: [
          "You locked the archive at eight, didn't you?",
          "You locked it at eight, didn't you?",
          "You locked the archive tonight, didn't you?",
          "You believe you locked the archive at eight, don't you?"
        ],
        tone: "rising", mark: "uncertainty",
        answer: "I always lock it at eight. At least, I believe I locked it tonight.",
        whyTag: "Past Simple lock → didn't you? Напиши полное предложение.",
        whyTone: "Он только «believes» — это не точно, поэтому rising ↗.",
        whyMark: "«I believe I locked it» — uncertainty, не твёрдый факт." },
      { id: "a7", type: "own", ru: "Напиши свой tag question про записку на полу или про то, что он сначала никому не сказал, потому что испугался.",
        need: [["note"], ["scared"], ["floor"], ["tell", "anyone"], ["didn't", "tell"]],
        acceptTags: ["didn't you", "did you", "weren't you", "were you"],
        tone: "falling", mark: "confirmed",
        answer: "Yes. I found a note on the floor, and I was scared, so I didn't tell anyone at first.",
        whyTag: "Нужен свой tag question, например: You found a note on the floor, didn't you? или You were scared, weren't you?",
        whyTone: "Это уже есть в его показаниях — falling ↘.",
        whyMark: "Он подтверждает записку и страх. Это confirmed fact." }
    ]
  },
  {
    id: "lila", name: "Lila", role: "Student, the only eyewitness",
    mood: "Scared. Wants to help.", img: "lila", pitch: 1.4, pron: "she",
    text: "I was in the hall last night. There was only one silhouette, not three people. I said “three people” earlier, but I don't want to talk about why. I heard one knock, then footsteps going to the archive. The silhouette was wearing something on its head — I think it was a tall hat, like the one in the old school photo, but it was very dark, so I am not completely sure. I am still a little afraid of the library. It's quieter now, but the shadow still scares me. I stayed by the door and I didn't go in.",
    special: { title: "Lila looks down…", lines: ["You asked me first. Everyone else thinks I'm silly.", "“I said ‘three people’ because I was afraid. I invented it. There was only one.”"], clue: "lilaS" },
    normalEnd: "Lila holds her bag tight. “Please find them.”",
    tasks: [
      { id: "l1", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "There was only one silhouette in the hall,",
        tags: ["wasn't there?", "wasn't there"],
        tone: "falling", mark: "confirmed",
        answer: "Yes, there was. Only one.",
        whyTag: "There was → хвостик wasn't there?",
        whyTone: "В тексте ясно: только один силуэт — falling ↘.",
        whyMark: "Она подтверждает: был только один силуэт. Это confirmed fact." },
      { id: "l2", type: "tag", ru: "Допиши хвостик к этому предложению.",
        statement: "You said “three people” earlier,",
        tags: ["didn't you?", "didn't you"],
        tone: "falling", mark: "confirmed",
        answer: "Yes, I did. I said “three people” earlier.",
        whyTag: "Past Simple said → didn't you?",
        whyTone: "Она сама это пишет — falling ↘.",
        whyMark: "Она подтверждает, что раньше говорила про «трёх людей». Это confirmed fact." },
      { id: "l3", type: "full", ru: "Сама составь tag question и проверь: она услышала один стук.",
        fulls: [
          "You heard one knock, didn't you?",
          "You heard a knock, didn't you?",
          "There was one knock, wasn't there?"
        ],
        tone: "falling", mark: "confirmed",
        answer: "Yes, I did. I heard one knock.",
        whyTag: "Past Simple heard → didn't you? (или wasn't there?). Напиши полное предложение.",
        whyTone: "Один стук есть в тексте — falling ↘.",
        whyMark: "Она подтверждает один стук. Это confirmed fact." },
      { id: "l4", type: "full", ru: "Сама составь tag question и проверь: шаги шли к архиву.",
        fulls: [
          "The footsteps were going to the archive, weren't they?",
          "There were footsteps going to the archive, weren't there?",
          "You heard footsteps going to the archive, didn't you?",
          "The footsteps went to the archive, didn't they?"
        ],
        tone: "falling", mark: "new",
        answer: "Yes. One knock, then footsteps going to the archive. The footsteps were slow, like an adult, not a student.",
        whyTag: "Footsteps were / went / you heard → weren't they? / didn't they? / didn't you? Напиши полное предложение.",
        whyTone: "Шаги к архиву уже есть в тексте — falling ↘.",
        whyMark: "Она добавляет новое: шаги были медленными, как у взрослого, не ученика. Это new information." },
      { id: "l5", type: "own", ru: "Напиши свой tag question про высокую шляпу. В тексте Лила не уверена: было очень темно.",
        need: [["hat"], ["tall", "hat"], ["head"]],
        acceptTags: ["wasn't it", "was it", "didn't it", "did it", "weren't they", "were they"],
        tone: "rising", mark: "uncertainty",
        answer: "I think it was a tall hat, like the one in the old school photo, but it was very dark, so I am not completely sure.",
        whyTag: "Нужен свой tag question про шляпу, например: The silhouette was wearing a tall hat, wasn't it?",
        whyTone: "Она не до конца уверена — rising ↗.",
        whyMark: "«I am not completely sure» — uncertainty." },
      { id: "l6", type: "full", ru: "Сама составь tag question и проверь: она всё ещё немного боится библиотеки.",
        fulls: [
          "You are still a little afraid of the library, aren't you?",
          "You're still a little afraid of the library, aren't you?",
          "You're still afraid of the library, aren't you?",
          "You are still afraid of the library, aren't you?"
        ],
        tone: "falling", mark: "confirmed",
        answer: "Yes, I am. I am still a little afraid of the library.",
        whyTag: "Утверждение с are → aren't you? Напиши полное предложение.",
        whyTone: "Она прямо пишет, что всё ещё боится, — falling ↘.",
        whyMark: "Она подтверждает свой страх. Это confirmed fact." },
      { id: "l7", type: "own", ru: "Напиши свой tag question про то, почему она говорила про «трёх людей». В тексте она не хочет это объяснять.",
        need: [["three"], ["why"], ["talk"], ["invent"], ["afraid"]],
        acceptTags: ["do you", "don't you", "did you", "didn't you", "are you", "aren't you"],
        tone: "rising", mark: "uncertainty",
        answer: "I… don't want to talk about why. Not yet.",
        whyTag: "Нужен свой tag question, например: You don't want to talk about why you said three people, do you?",
        whyTone: "Она уклоняется и не объясняет причину — rising ↗.",
        whyMark: "Она не даёт ясного ответа — uncertainty." }
    ]
  }
];

const CLUES = {
  p1: { id: "p1", text: "Agnes's notes: the note has a strange capital I and an eye symbol.", source: "Agnes's Notes" },
  p2: { id: "p2", text: "Agnes's notes: Lila said she saw “three people” in the hall.", source: "Agnes's Notes" },
  p3: { id: "p3", text: "Agnes's notes: the paper is yellow and very old.", source: "Agnes's Notes" },
  voss1: { id: "voss1", text: "Professor Voss did not write the capital I in the note.", source: "Professor Voss" },
  voss2: { id: "voss2", text: "The eye is the old sign of the school archive. It is on the cover of the old book.", source: "Professor Voss" },
  voss3: { id: "voss3", text: "Archive books used to have the eye sign on every first page.", source: "Professor Voss" },
  vossS: { id: "vossS", text: "“Look for this sign in the book, not in the laboratory.”", source: "Professor Voss · first interview", special: true },
  theo1: { id: "theo1", text: "The ink smelled like library dust — like the archive shelves.", source: "Theo" },
  theo2: { id: "theo2", text: "Somebody dropped an old sketch into Theo's bag when he went to the window.", source: "Theo" },
  theoS: { id: "theoS", text: "The old sketch crumbles exactly like the pages of the old book.", source: "Theo · first interview", special: true },
  aber1: { id: "aber1", text: "Report 05 was not honest: the library was NOT locked.", source: "Mr Abernathy" },
  aber2: { id: "aber2", text: "Somebody used the spare key on Tuesday night. The ink on the old page looks the same as the ink on the note.", source: "Mr Abernathy" },
  aberS: { id: "aberS", text: "Abernathy had the spare key AND found the note. He hid both because he was scared.", source: "Mr Abernathy · first interview", special: true },
  lila1: { id: "lila1", text: "There was only ONE silhouette in the hall.", source: "Lila" },
  lila2: { id: "lila2", text: "Lila heard one knock, then slow footsteps going to the archive — like an adult, not a student.", source: "Lila" },
  lilaS: { id: "lilaS", text: "Lila invented “three people” because she was afraid.", source: "Lila · first interview", special: true },
  h1: { id: "h1", text: "Voss saw a blue light under the archive door at nine o'clock.", source: "Professor Voss · round 2" },
  h3: { id: "h3", text: "Theo lied: he CAN draw the eye symbol. He is hiding something.", source: "Theo · round 2" },
  h5: { id: "h5", text: "Abernathy lied: the archive was not locked at eight.", source: "Mr Abernathy · round 2" },
  h6: { id: "h6", text: "The old paper is page 13 of “Secrets of Shadow School”.", source: "Mr Abernathy · round 2" },
  h8: { id: "h8", text: "The silhouette wore a tall hat — like in the old school photo.", source: "Lila · round 2" }
};

const OPENQ = [
  { id: "q1", title: "Who wrote the secret note with the eye symbol?", short: "The note" },
  { id: "q2", title: "Who opened the library on Tuesday night?", short: "The library door" },
  { id: "q3", title: "Where did the old, dusty paper come from?", short: "The old paper" }
];
const CLASS_SUM = {
  q1: "Voss didn't write it. Abernathy found the note — and somebody put an old sketch in Theo's bag.",
  q2: "The library was NOT locked. Someone used the spare key. Only ONE silhouette was in the hall.",
  q3: "The ink smells like library dust, and the eye sign leads to “Secrets of Shadow School”."
};
const HW_SUM = {
  q1: "Theo can draw the eye — he is hiding something. The hat links the note to the old school photo.",
  q2: "A blue light at nine o'clock, an unlocked archive, and a silhouette in a tall hat.",
  q3: "The old paper is page 13 of “Secrets of Shadow School”. The next page is waiting…"
};

const GRAMMAR = [
  { id: "pos", q: "Positive → negative tag", ru: "You can explain it, can't you?", notes: "После утверждения — отрицательный хвостик." },
  { id: "neg", q: "Negative → positive tag", ru: "You weren't honest, were you?", notes: "После отрицания — положительный хвостик." },
  { id: "fall", q: "Falling ↘", ru: "Проверяю факт. Свидетель не уйдёт от ответа.", notes: "Голос вниз. Blue light." },
  { id: "rise", q: "Rising ↗", ru: "Настоящий вопрос. Свидетель может уклониться.", notes: "Голос вверх. Amber light." },
  { id: "ami", q: "I am → aren't I?", ru: "I'm ready to report, aren't I?", notes: "Особый хвостик для I am." },
  { id: "lets", q: "Let's → shall we?", ru: "Let's open the next page, shall we?", notes: "Особый хвостик для Let's." }
];

const WARM = [
  { id: "w1", situation: "You can see the lamps are off. You just want the witness to agree.", answer: "falling", why: "Ты уже видишь, что темно — это проверка факта, голос вниз (falling ↘, синий свет)." },
  { id: "w2", situation: "You are outside. You really don't know if the lamps are on or off.", answer: "rising", why: "Ты правда не знаешь — это настоящий вопрос, голос вверх (rising ↗, янтарный свет)." }
];

const HW = [
  { id: "h1", witness: "voss", stem: "You were in the library at nine o'clock,", options: ["were you?", "weren't you?", "wasn't you?"], correct: "weren't you?", context: "The library logbook shows Voss's name at 9:00.", tone: "falling", toneWhy: "You already know it from the logbook — you are checking a fact.", answer: "Yes, I was. And I saw a blue light under the archive door.", category: "new", evidence: "Nobody told us about a blue light before.", clue: "h1", whyTag: "Предложение утвердительное (were), поэтому хвостик отрицательный: weren't you?" },
  { id: "h2", witness: "voss", stem: "You don't trust Mr Abernathy,", options: ["don't you?", "do you?", "are you?"], correct: "do you?", context: "You have no idea what Voss thinks about Abernathy.", tone: "rising", toneWhy: "You really don't know the answer — it's a real question.", answer: "Well… I'm not sure. Maybe. He knows too many doors.", category: "uncertainty", evidence: "“I'm not sure. Maybe.” — she doesn't know.", whyTag: "В предложении уже есть don't — отрицание, поэтому хвостик положительный: do you?" },
  { id: "h3", witness: "theo", stem: "You can draw the eye symbol,", options: ["can you?", "can't you?", "don't you?"], correct: "can't you?", context: "You saw eye sketches in Theo's notebook yesterday.", tone: "falling", toneWhy: "You saw the sketches — you are checking a fact.", answer: "No, I can't! I can't draw at all!", category: "lie", evidence: "Case File: you saw his eye sketches. The blue light flickers.", clue: "h3", whyTag: "Утверждение с can → отрицательный хвостик can't you?" },
  { id: "h4", witness: "theo", stem: "Your pen wasn't in your bag,", options: ["wasn't it?", "did it?", "was it?"], correct: "was it?", context: "You really don't know where Theo's pen was.", tone: "rising", toneWhy: "You don't know — it's a real question.", answer: "I think it was… or maybe I left it in class. I don't remember.", category: "uncertainty", evidence: "“I don't remember.” — he isn't sure.", whyTag: "В предложении wasn't — отрицание, поэтому хвостик was it?" },
  { id: "h5", witness: "abernathy", stem: "You locked the archive at eight,", options: ["didn't you?", "did you?", "weren't you?"], correct: "didn't you?", context: "The archive rules say: lock at 8:00. You want him to confirm.", tone: "falling", toneWhy: "You expect “yes” — you are checking a fact.", answer: "Of course I locked it. I always lock it.", category: "lie", evidence: "Case File: Report 05 — the library was NOT locked.", clue: "h5", whyTag: "Past Simple без вспомогательного глагола в утверждении → didn't you?" },
  { id: "h6", witness: "abernathy", stem: "You've seen this page before,", options: ["have you?", "didn't you?", "haven't you?"], correct: "haven't you?", context: "Abernathy's fingerprints are on the old page.", tone: "falling", toneWhy: "The fingerprints prove it — you are checking a fact.", answer: "Yes, I have. It's page 13 from “Secrets of Shadow School”. Someone tore it out years ago.", category: "new", evidence: "Now we know the exact page and book!", clue: "h6", whyTag: "Утверждение с have → haven't you?" },
  { id: "h7", witness: "lila", stem: "You aren't afraid of the library now,", options: ["are you?", "aren't you?", "do you?"], correct: "are you?", context: "You care about Lila and really want to know how she feels.", tone: "rising", toneWhy: "You don't know her feelings — it's a real question.", answer: "I… don't know. It's quieter now, but the shadow still scares me.", category: "uncertainty", evidence: "“I don't know.” — she isn't sure.", whyTag: "Отрицание aren't → положительный хвостик are you?" },
  { id: "h8", witness: "lila", stem: "The silhouette was wearing a hat,", options: ["was it?", "wasn't it?", "didn't it?"], correct: "wasn't it?", context: "Only Lila saw the silhouette. You don't know what it wore.", tone: "rising", toneWhy: "Only Lila knows — you are asking a real question.", answer: "Yes! A tall hat — like the one in the old school photo.", category: "new", evidence: "A tall hat! Nobody mentioned it before.", clue: "h8", whyTag: "Утверждение was → отрицательный хвостик wasn't it?" }
];

const REPORT = [
  { id: "r1", text: "I'm ready to report, aren't I?" },
  { id: "r2", text: "First, I checked the facts with the Tag Tester." },
  { id: "r3", text: "Then, Theo said he can't draw — but that was a lie." },
  { id: "r4", text: "After that, Mr Abernathy's story about the locked archive fell apart." },
  { id: "r5", text: "Also, Lila remembered a silhouette in a tall hat." },
  { id: "r6", text: "Finally, we found out the paper is page 13 of the old book." },
  { id: "r7", text: "So, the note and the page came from the same old book." },
  { id: "r8", text: "Let's open the next page, shall we?" }
];

const CATS = { lie: "Lie", uncertainty: "Uncertainty", new: "New fact" };

function emptyQ() { return { input: "", tone: null, mark: null, qOk: false, toneOk: false, markOk: false, solved: false, checked: false }; }
function emptyInterview(n) { return { q: Array.from({ length: n }, emptyQ), specialSeen: false }; }
function taskCount(id) { return WITNESSES.find((w) => w.id === id).tasks.length; }

function defaults() {
  return {
    name: "",
    flipped: {},
    soundOn: true,
    warmup: { blue: false, amber: false, checks: {} },
    firstWitness: null,
    openWitness: "voss",
    interviews: Object.fromEntries(WITNESSES.map((w) => [w.id, emptyInterview(w.tasks.length)])),
    classSentence: "",
    classTags: { a: "", b: "" },
    hwTags: {},
    hwTones: {},
    hwOpts: Object.fromEntries(HW.map((x) => [x.id, shuffle(x.options.slice())])),
    hwSort: {},
    report: [],
    reportBank: shuffle(REPORT.map((r) => r.id)),
    reportChecked: false,
    hwOwn: "",
    codeOpen: false,
    reflect: ""
  };
}

function isOldInterviewShape(raw) {
  if (!raw || !raw.interviews) return true;
  return WITNESSES.some((w) => {
    const iv = raw.interviews[w.id];
    return !iv || !Array.isArray(iv.q) || iv.q.length !== w.tasks.length;
  });
}

let state = defaults();
try {
  const raw = JSON.parse(localStorage.getItem(KEY) || "null");
  if (raw && typeof raw === "object") {
    const fresh = defaults();
    state = Object.assign({}, fresh, raw);
    if (typeof raw.sound === "boolean" && raw.soundOn == null) state.soundOn = raw.sound;
    state.soundOn = state.soundOn !== false;
    if (isOldInterviewShape(raw)) {
      state.interviews = fresh.interviews;
      state.firstWitness = null;
    } else {
      WITNESSES.forEach((w) => {
        const iv = raw.interviews[w.id];
        state.interviews[w.id] = {
          specialSeen: !!iv.specialSeen,
          q: w.tasks.map((_, i) => Object.assign(emptyQ(), (iv.q && iv.q[i]) || {}))
        };
      });
    }
    if (!state.hwOpts || HW.some((x) => !state.hwOpts[x.id] || state.hwOpts[x.id].length !== x.options.length)) {
      state.hwOpts = fresh.hwOpts;
    }
    if (!Array.isArray(state.reportBank) || state.reportBank.length !== REPORT.length) {
      state.reportBank = fresh.reportBank;
      state.report = [];
      state.reportChecked = false;
    }
  }
} catch (e) { console.error("state load", e); state = defaults(); }

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  renderProgress();
}

function pic(name, alt, extra) {
  return `<picture><source srcset="./images/${name}.webp" type="image/webp"><img src="./images/${name}.jpg" alt="${alt}" ${extra || ""}></picture>`;
}

function warmDone() {
  return state.warmup.blue && state.warmup.amber && WARM.every((w) => state.warmup.checks[w.id] === w.answer);
}
function interviewDone(id) {
  const iv = state.interviews[id];
  const w = WITNESSES.find((x) => x.id === id);
  return !!(iv && w && iv.q.length === w.tasks.length && iv.q.every((q) => q.solved));
}
function stampN() { return WITNESSES.filter((w) => interviewDone(w.id)).length; }
function interviewScore(id) { return (state.interviews[id]?.q || []).filter((q) => q.solved).length; }
function hwTagN() { return HW.filter((x) => state.hwTags[x.id] === x.correct && state.hwTones[x.id] === x.tone).length; }
function hwSortN() { return HW.filter((x) => state.hwSort[x.id] === x.category).length; }
function reportOk() { return state.reportChecked && REPORT.every((r, i) => state.report[i] === r.id); }
function sentenceOk() { return wc(state.classSentence) >= 5; }
function allClassDone() { return warmDone() && WITNESSES.every((w) => interviewDone(w.id)) && sentenceOk(); }
function allHwDone() { return hwTagN() === HW.length && hwSortN() === HW.length && reportOk(); }
function allDone() { return allClassDone() && allHwDone(); }

function clueList() {
  const ids = ["p1", "p2", "p3"];
  if (interviewDone("voss")) ids.push("voss1", "voss2", "voss3");
  if (state.firstWitness === "voss" && interviewDone("voss")) ids.push("vossS");
  if (interviewDone("theo")) ids.push("theo1", "theo2");
  if (state.firstWitness === "theo" && interviewDone("theo")) ids.push("theoS");
  if (interviewDone("abernathy")) ids.push("aber1", "aber2");
  if (state.firstWitness === "abernathy" && interviewDone("abernathy")) ids.push("aberS");
  if (interviewDone("lila")) ids.push("lila1", "lila2");
  if (state.firstWitness === "lila" && interviewDone("lila")) ids.push("lilaS");
  if (state.hwSort.h1 === "new") ids.push("h1");
  if (state.hwSort.h3 === "lie") ids.push("h3");
  if (state.hwSort.h5 === "lie") ids.push("h5");
  if (state.hwSort.h6 === "new") ids.push("h6");
  if (state.hwSort.h8 === "new") ids.push("h8");
  return ids.map((id) => CLUES[id]).filter(Boolean);
}

function progressBits() {
  return [
    warmDone(),
    interviewDone("voss"),
    interviewDone("theo"),
    interviewDone("abernathy"),
    interviewDone("lila"),
    sentenceOk(),
    hwTagN() === HW.length,
    hwSortN() === HW.length && reportOk()
  ];
}
function progressN() { return progressBits().filter(Boolean).length; }

function renderProgress() {
  const n = stampN();
  const p = progressN();
  if ($("headWitnessN")) $("headWitnessN").textContent = `${n}/4`;
  if ($("headClues")) $("headClues").textContent = `${p}/8`;
  if ($("headMini")) $("headMini").textContent = `${n}/4 · ${p}/8`;
  if ($("caseCount")) $("caseCount").textContent = String(clueList().length);
  if ($("headAvatars")) {
    $("headAvatars").innerHTML = WITNESSES.map((w) =>
      `<span title="${esc(w.name)}" class="inline-block overflow-hidden rounded-full ${interviewDone(w.id) ? "ring-2 ring-emerald-400" : "opacity-40 grayscale"}" style="width:24px;height:24px">${pic(w.img, w.name, 'class="h-6 w-6 object-cover object-top"')}</span>`
    ).join("");
  }
  if ($("btnSound")) $("btnSound").textContent = state.soundOn ? "🔊" : "🔇";
}

function checkQuestion(task, input) {
  if (task.type === "tag") return sameAny(input, task.tags);
  if (task.type === "full") return sameAny(input, task.fulls);
  const parsed = parseTagQ(input);
  if (!parsed) return false;
  if (task.acceptTags && !task.acceptTags.some((t) => stripQ(t) === parsed.tag)) return false;
  if (tagNeg(parsed.aux) === bodyNeg(parsed.body)) return false;
  if (!hasNeed(parsed.body, task.need)) return false;
  return true;
}

function whyFor(task, slot, qOk, toneOk) {
  if (slot === "q" && !qOk) return task.whyTag;
  if (slot === "tone" && qOk && !toneOk) return task.whyTone;
  if (slot === "mark") return task.whyMark;
  return "";
}

function renderWarmup() {
  const box = $("warmupBox");
  if (!box) return;
  box.innerHTML = `
    <h2 class="font-display text-2xl text-brass-light">Разминка · Tag Tester</h2>
    <p class="mt-2 text-parch">Сначала попробуй лампы. Потом выбери интонацию для двух ситуаций. Ситуации: <span class="text-brass-light font-bold">${WARM.filter((w) => state.warmup.checks[w.id] === w.answer).length}/2</span>. Лампы: <b>${(state.warmup.blue?1:0)+(state.warmup.amber?1:0)}/2</b>.</p>
    <div class="mt-5 flex flex-wrap items-center gap-4">
      <div class="brass grid w-44 gap-3 rounded-2xl p-4">
        <div class="flex justify-center gap-4">
          <button type="button" id="lampBlue" class="bulb ${state.warmup.blue ? "on-blue" : ""} h-10 w-7" aria-label="Blue light, falling"></button>
          <button type="button" id="lampAmber" class="bulb ${state.warmup.amber ? "on-amber" : ""} h-10 w-7" aria-label="Amber light, rising"></button>
        </div>
        <p class="text-center font-type text-[10px] text-ink-900">TAG TESTER</p>
      </div>
      <div class="text-sm">
        <p>Нажми на лампы и услышишь интонацию.</p>
        <p class="mt-1">🔵 Blue = falling ↘ &nbsp; 🟡 Amber = rising ↗</p>
      </div>
    </div>
    <div class="mt-6 grid gap-4 md:grid-cols-2">
      ${WARM.map((w) => {
        const pick = state.warmup.checks[w.id];
        const ok = pick === w.answer;
        const why = pick ? `<p class="why ${ok ? "ok" : "bad"}">${esc(w.why)}</p>` : "";
        return `<article class="paper rounded-2xl p-4">
          <p class="font-bold">${esc(w.situation)}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <button type="button" class="tone-btn${pick === "falling" ? " is-falling" : ""}" data-w="${w.id}" data-tone="falling">Falling ↘</button>
            <button type="button" class="tone-btn${pick === "rising" ? " is-rising" : ""}" data-w="${w.id}" data-tone="rising">Rising ↗</button>
          </div>
          ${why}
        </article>`;
      }).join("")}
    </div>
    <p class="mt-4 text-sm font-bold ${warmDone() ? "text-emerald-300" : "text-parch-dim"}">${warmDone() ? "Разминка пройдена: 2/2." : "Включи обе лампы и ответь на обе ситуации."}</p>`;
  $("lampBlue").onclick = () => {
    state.warmup.blue = true; save();
    speakTag("The lamps are off,", "aren't they?", "falling", 1);
    renderWarmup();
  };
  $("lampAmber").onclick = () => {
    state.warmup.amber = true; save();
    speakTag("The lamps are off,", "aren't they?", "rising", 1);
    renderWarmup();
  };
  box.querySelectorAll("[data-w]").forEach((b) => {
    b.onclick = () => {
      state.warmup.checks[b.getAttribute("data-w")] = b.getAttribute("data-tone");
      save();
      renderWarmup();
    };
  });
}

function renderChoose() {
  const box = $("chooseBox");
  if (!box) return;
  const first = state.firstWitness;
  box.innerHTML = `
    <h2 class="font-display text-2xl text-brass-light">Who do you interview first?</h2>
    <p class="mt-2">Выбери, с кого начнёшь. Первый свидетель даст особую улику. Остальных можно допрашивать в любом порядке — все допросы открыты.</p>
    ${first ? `<p class="mt-2 text-sm text-brass-light">Первым идёт: <b>${esc(WITNESSES.find((w) => w.id === first).name)}</b>. Можно передумать до конца его допроса.</p>` : ""}
    <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      ${WITNESSES.map((w) => {
        const done = interviewDone(w.id);
        const n = interviewScore(w.id);
        const isFirst = first === w.id;
        return `<button type="button" class="paper rounded-2xl p-3 text-left ${isFirst ? "ring-2 ring-amber-400" : ""}" data-pick="${w.id}">
          <span class="portrait-frame mx-auto block overflow-hidden rounded-xl" style="aspect-ratio:3/4;max-height:280px">${pic(w.img, w.name, 'class="h-full w-full object-cover object-top"')}</span>
          <span class="mt-3 block font-display text-lg">${esc(w.name)}</span>
          <span class="block text-sm">${esc(w.role)}</span>
          <span class="mt-1 block text-xs">${esc(w.mood)}</span>
          <span class="stamp mt-2">${done ? "Готово · " : ""}${n}/${w.tasks.length}</span>
          ${isFirst ? '<span class="stamp mt-1">Первый свидетель</span>' : ""}
        </button>`;
      }).join("")}
    </div>`;
  box.querySelectorAll("[data-pick]").forEach((b) => {
    b.onclick = () => {
      const id = b.getAttribute("data-pick");
      if (!state.firstWitness || !interviewDone(state.firstWitness)) state.firstWitness = id;
      state.openWitness = id;
      save();
      renderChoose();
      renderRooms();
      const el = document.getElementById("room-" + id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  });
}

function renderTask(w, idx) {
  const task = w.tasks[idx];
  const slot = (state.interviews[w.id] && state.interviews[w.id].q[idx]) || emptyQ();
  const n = w.tasks.length;
  let field = "";
  if (task.type === "tag") {
    field = `<p class="font-type text-lg">${esc(task.statement)}</p>
      <label class="mt-2 block text-sm font-bold">Хвостик
        <input type="text" data-in="${w.id}:${idx}" value="${esc(slot.input)}" placeholder="например, didn't you?" autocomplete="off">
      </label>`;
  } else {
    field = `<label class="block text-sm font-bold">Твой tag question
      <textarea rows="2" data-in="${w.id}:${idx}" placeholder="Statement, tag?">${esc(slot.input)}</textarea>
    </label>`;
  }
  const showAns = slot.qOk && slot.toneOk;
  const whyQ = slot.checked && !slot.qOk ? `<p class="why bad">${esc(task.whyTag)}</p>` : "";
  const whyT = slot.checked && slot.qOk && !slot.toneOk ? `<p class="why bad">${esc(task.whyTone)}</p>` : "";
  const whyM = slot.checked && showAns && slot.mark && !slot.markOk ? `<p class="why bad">${esc(task.whyMark)}</p>` : "";
  const whyOk = slot.solved ? `<p class="why ok">Верно. ${esc(task.whyMark)}</p>` : "";
  const marks = showAns ? `
    <div class="reveal in mt-3 rounded-xl border border-[#8a6428]/40 bg-white/50 p-3">
      <p class="font-bold">${esc(w.name)}:</p>
      <p class="mt-1">${esc(task.answer)}</p>
      <button type="button" class="btn-ghost mt-2 !border-[#8a6428] !text-[#2a1d10] text-xs" data-tts="${w.id}:${idx}">🔊 Прослушать ответ</button>
      <p class="mt-3 text-sm font-bold">Как отметить этот ответ?</p>
      <div class="mt-2 flex flex-wrap gap-2">
        ${Object.entries(MARKS).map(([k, lab]) =>
          `<button type="button" class="mark-btn${slot.mark === k ? " is-on" : ""}" data-mark="${w.id}:${idx}:${k}">${esc(lab)}</button>`
        ).join("")}
      </div>
      ${whyM}${whyOk}
    </div>` : whyOk;
  return `<article class="paper rounded-2xl p-4 sm:p-5" id="task-${task.id}">
    <p class="text-xs font-bold uppercase tracking-wider text-[#8a6428]">Вопрос ${idx + 1} из ${n} · ${task.type === "tag" ? "Допиши хвостик" : task.type === "full" ? "Напиши полный вопрос" : "Свой tag question"}</p>
    <p class="mt-2 font-bold">${esc(task.ru)}</p>
    <div class="mt-3">${field}</div>
    <div class="mt-3 flex flex-wrap gap-2">
      <button type="button" class="tone-btn${slot.tone === "falling" ? " is-falling" : ""}" data-tone="${w.id}:${idx}:falling">Falling ↘</button>
      <button type="button" class="tone-btn${slot.tone === "rising" ? " is-rising" : ""}" data-tone="${w.id}:${idx}:rising">Rising ↗</button>
    </div>
    <button type="button" class="btn-brass mt-3 text-sm" data-check="${w.id}:${idx}">Проверить вопрос</button>
    ${whyQ}${whyT}
    ${marks}
    ${slot.solved ? `<p class="mt-2"><span class="stamp chip-done">Готово ${idx + 1}/${n}</span></p>` : ""}
  </article>`;
}

function renderRooms() {
  const root = $("rooms");
  if (!root) return;
  const y = window.scrollY;
  const active = document.activeElement;
  const restore = active && active.getAttribute && active.getAttribute("data-in");
  const pos = active && typeof active.selectionStart === "number" ? active.selectionStart : null;
  root.innerHTML = WITNESSES.map((w) => {
    const iv = state.interviews[w.id];
    const done = interviewDone(w.id);
    const n = interviewScore(w.id);
    const special = done && state.firstWitness === w.id;
    const end = special
      ? `<div class="mt-4 rounded-2xl border border-tagamber/30 bg-tagamber/[0.07] p-4">
           <p class="font-display text-lg text-brass-light">${esc(w.special.title)}</p>
           ${w.special.lines.map((ln) => `<p class="mt-2">${esc(ln)}</p>`).join("")}
           <button type="button" class="btn-ghost mt-3 text-xs" data-special-tts="${w.id}">🔊 Прослушать улику</button>
         </div>`
      : (done ? `<p class="mt-4 text-parch-dim">${esc(w.normalEnd)}</p>` : "");
    if (special && !iv.specialSeen) iv.specialSeen = true;
    return `<article id="room-${w.id}" class="panel rounded-3xl p-6 sm:p-8" tabindex="-1">
      <div class="grid gap-5 md:grid-cols-[160px_1fr] md:items-start">
        <div>
          <div class="portrait-frame overflow-hidden rounded-2xl" style="aspect-ratio:3/4">${pic(w.img, w.name, 'class="h-full w-full object-cover object-top"')}</div>
          <p class="stamp mt-2">${n}/${w.tasks.length}</p>
        </div>
        <div>
          <h2 class="font-display text-2xl text-brass-light">${esc(w.name)}</h2>
          <p class="text-sm text-parch-dim">${esc(w.role)} · ${esc(w.mood)}</p>
          <div class="paper mt-4 rounded-2xl p-4 sm:p-5">
            <p class="text-xs font-bold uppercase tracking-wider text-[#8a6428]">Показания свидетеля</p>
            <p class="mt-2 leading-relaxed">${esc(w.text)}</p>
          </div>
        </div>
      </div>
      <div class="mt-6 grid gap-4">${w.tasks.map((_, i) => renderTask(w, i)).join("")}</div>
      ${end}
    </article>`;
  }).join("");
  if (state.firstWitness && WITNESSES.some((w) => interviewDone(w.id) && state.firstWitness === w.id)) save();

  if (restore) {
    const el = root.querySelector(`[data-in="${restore}"]`);
    if (el) { el.focus(); if (pos != null) try { el.setSelectionRange(pos, pos); } catch (e) {} }
  }
  window.scrollTo(0, y);
  root.querySelectorAll("[data-in]").forEach((el) => {
    el.oninput = () => {
      const [id, i] = el.getAttribute("data-in").split(":");
      const slot = state.interviews[id].q[+i];
      slot.input = el.value;
      slot.checked = false;
      slot.qOk = false;
      slot.toneOk = false;
      slot.markOk = false;
      slot.solved = false;
      save();
    };
  });
  root.querySelectorAll("[data-tone]").forEach((b) => {
    b.onclick = () => {
      const [id, i, tone] = b.getAttribute("data-tone").split(":");
      const slot = state.interviews[id].q[+i];
      slot.tone = tone;
      slot.checked = false;
      slot.toneOk = false;
      slot.markOk = false;
      slot.solved = false;
      save();
      renderRooms();
    };
  });
  root.querySelectorAll("[data-check]").forEach((b) => {
    b.onclick = () => {
      const [id, i] = b.getAttribute("data-check").split(":");
      const w = WITNESSES.find((x) => x.id === id);
      const task = w.tasks[+i];
      const slot = state.interviews[id].q[+i];
      slot.checked = true;
      slot.qOk = checkQuestion(task, slot.input);
      slot.toneOk = slot.tone === task.tone;
      if (!(slot.qOk && slot.toneOk)) {
        slot.mark = null;
        slot.markOk = false;
        slot.solved = false;
      }
      save();
      renderRooms();
      renderProgress();
    };
  });
  root.querySelectorAll("[data-mark]").forEach((b) => {
    b.onclick = () => {
      const [id, i, mark] = b.getAttribute("data-mark").split(":");
      const w = WITNESSES.find((x) => x.id === id);
      const task = w.tasks[+i];
      const slot = state.interviews[id].q[+i];
      if (!(slot.qOk && slot.toneOk)) return;
      slot.mark = mark;
      slot.checked = true;
      slot.markOk = mark === task.mark;
      slot.solved = !!(slot.qOk && slot.toneOk && slot.markOk);
      save();
      renderRooms();
      renderChoose();
      renderAnalysis();
      renderProgress();
    };
  });
  root.querySelectorAll("[data-tts]").forEach((b) => {
    b.onclick = () => {
      const [id, i] = b.getAttribute("data-tts").split(":");
      const w = WITNESSES.find((x) => x.id === id);
      speak(w.tasks[+i].answer, { pitch: w.pitch });
    };
  });
  root.querySelectorAll("[data-special-tts]").forEach((b) => {
    b.onclick = () => {
      const w = WITNESSES.find((x) => x.id === b.getAttribute("data-special-tts"));
      speak(w.special.lines.join(" "), { pitch: w.pitch });
    };
  });
}

function renderAnalysis() {
  const box = $("analysisBox");
  if (!box) return;
  box.innerHTML = `
    <h2 class="font-display text-2xl text-brass-light">Сводка дела</h2>
    <p class="mt-2">Собери, что уже известно. Напиши короткую теорию (не меньше 5 слов).</p>
    <div class="mt-4 grid gap-3 md:grid-cols-3">
      ${OPENQ.map((q) => `<article class="rounded-2xl border border-brass/40 p-3">
        <p class="font-bold text-brass-light">${esc(q.short)}</p>
        <p class="mt-1 text-sm">${esc(q.title)}</p>
        <p class="mt-2 text-sm">${esc(CLASS_SUM[q.id])}</p>
      </article>`).join("")}
    </div>
    <ul class="mt-4 grid gap-2 text-sm">
      ${WITNESSES.map((w) => `<li>${esc(w.name)}: <b class="text-brass-light">${interviewScore(w.id)}/${w.tasks.length}</b></li>`).join("")}
    </ul>
    <label class="mt-4 block font-bold">Моя теория
      <textarea id="theory" rows="3" class="mt-2 w-full rounded-xl border border-parch/20 bg-ink-850 px-3 py-2 text-parch" placeholder="I think the old paper came from the archive book…">${esc(state.classSentence)}</textarea>
    </label>
    <p class="mt-2 text-sm ${sentenceOk() ? "text-emerald-300" : "text-parch-dim"}">${sentenceOk() ? "Теория записана." : "Напиши хотя бы 5 слов."}</p>`;
  const t = $("theory");
  if (t) t.oninput = () => { state.classSentence = t.value; save(); renderEnding(); };
}

function renderHomework() {
  const box = $("hwBox");
  if (!box) return;
  const tagN = hwTagN();
  const sortN = hwSortN();
  box.innerHTML = `
    <h2 class="font-display text-2xl text-brass-light">Homework Mission</h2>
    <p class="mt-2">Формат другой, чем в классе: выбери готовый хвостик и интонацию, затем отсортируй ответы и собери устный рапорт по порядку.</p>
    <p class="mt-1 text-sm">A. Хвостик и интонация: <b class="text-brass-light">${tagN}/8</b> · B. Сортировка: <b class="text-brass-light">${sortN}/8</b> · C. Рапорт: <b class="text-brass-light">${reportOk() ? "8/8" : "0/8"}</b></p>
    <h3 class="mt-6 font-display text-xl">A. Choose the tag and the tone</h3>
    <div class="mt-3 grid gap-4">
      ${HW.map((item, i) => {
        const tag = state.hwTags[item.id];
        const tone = state.hwTones[item.id];
        const tagOk = tag === item.correct;
        const toneOk = tone === item.tone;
        const both = tagOk && toneOk;
        const opts = state.hwOpts[item.id] || item.options;
        const w = WITNESSES.find((x) => x.id === item.witness);
        return `<article class="paper rounded-2xl p-4">
          <p class="text-xs font-bold uppercase tracking-wider text-[#8a6428]">${i + 1}/8 · ${esc(w.name)}</p>
          <p class="mt-1 text-sm">${esc(item.context)}</p>
          <p class="mt-2 font-type text-lg">${esc(item.stem)}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            ${opts.map((o) => `<button type="button" class="mark-btn${tag === o ? " is-on" : ""}" data-htag="${item.id}" data-val="${esc(o)}">${esc(o)}</button>`).join("")}
          </div>
          <div class="mt-3 flex flex-wrap gap-2">
            <button type="button" class="tone-btn${tone === "falling" ? " is-falling" : ""}" data-htone="${item.id}" data-val="falling">Falling ↘</button>
            <button type="button" class="tone-btn${tone === "rising" ? " is-rising" : ""}" data-htone="${item.id}" data-val="rising">Rising ↗</button>
          </div>
          ${tag && !tagOk ? `<p class="why bad">${esc(item.whyTag)}</p>` : ""}
          ${tone && tagOk && !toneOk ? `<p class="why bad">${esc(item.toneWhy)} Нужна интонация ${item.tone === "falling" ? "falling ↘" : "rising ↗"}.</p>` : ""}
          ${both ? `<div class="reveal in mt-3 rounded-xl bg-white/50 p-3"><p><b>${esc(w.name)}:</b> ${esc(item.answer)}</p>
            <button type="button" class="mt-2 text-sm font-bold" data-hwtts="${item.id}">🔊 Прослушать ответ</button>
            <p class="why ok">Верно. ${esc(item.evidence)}</p></div>` : ""}
        </article>`;
      }).join("")}
    </div>
    <h3 class="mt-8 font-display text-xl">B. Sort the answers</h3>
    <p class="mt-2 text-sm">Отметь каждый ответ из части A: Lie, Uncertainty или New fact. ${sortN}/8</p>
    <div class="mt-3 grid gap-3">
      ${HW.map((item) => {
        const pick = state.hwSort[item.id];
        const ok = pick === item.category;
        return `<article class="rounded-2xl border border-brass/40 p-3">
          <p class="text-sm font-bold">${esc(item.stem)} ${esc(item.correct)}</p>
          <p class="text-sm italic">${esc(item.answer)}</p>
          <div class="mt-2 flex flex-wrap gap-2">
            ${Object.entries(CATS).map(([k, lab]) =>
              `<button type="button" class="mark-btn${pick === k ? " is-on" : ""}" data-hsort="${item.id}" data-val="${k}">${esc(lab)}</button>`
            ).join("")}
          </div>
          ${pick && !ok ? `<p class="why bad">${esc(item.evidence)}</p>` : ""}
          ${ok ? `<p class="why ok">${esc(item.evidence)}</p>` : ""}
        </article>`;
      }).join("")}
    </div>
    <h3 class="mt-8 font-display text-xl">C. Oral report — put the sentences in order</h3>
    <p class="mt-2 text-sm">Собери рапорт сверху вниз. Порядок сохраняется.</p>
    <div id="reportBank" class="mt-3 flex flex-col gap-2"></div>
    <div class="mt-4 flex flex-wrap gap-2">
      <button type="button" class="btn-brass text-sm" id="btnReportCheck">Проверить рапорт</button>
      <button type="button" class="btn-ghost text-sm" id="btnReportListen">🔊 Прослушать рапорт</button>
    </div>
    <p id="reportWhy" class="mt-2"></p>
    <label class="mt-4 block text-sm font-bold">Своё предложение (по желанию)
      <input id="hwOwn" type="text" class="mt-2 w-full rounded-xl border border-parch/20 bg-ink-850 px-3 py-2 text-parch" value="${esc(state.hwOwn)}" placeholder="I think we should open page 14, shouldn't we?">
    </label>
  `;
  const bank = $("reportBank");
  const ids = (state.report && state.report.length === REPORT.length) ? state.report : state.reportBank;
  if (state.report.length !== REPORT.length) {
    // show bank order (unused + used). We keep one list: report is the current order once items are placed.
    // Simpler: a single ordered list from reportBank, student moves up/down. Persist reportBank as the order. On first check, copy to report.
  }
  const order = (state.report.length === REPORT.length ? state.report : state.reportBank).slice();
  bank.innerHTML = order.map((id, i) => {
    const r = REPORT.find((x) => x.id === id);
    const posOk = state.reportChecked && REPORT[i].id === id;
    const posBad = state.reportChecked && REPORT[i].id !== id;
    return `<div class="flex items-center gap-2 rounded-xl border ${posOk ? "border-emerald-400" : posBad ? "border-rose-800" : "border-parch/20"} bg-ink-850 p-3" data-rid="${id}">
      <span class="font-type text-sm">${i + 1}.</span>
      <span class="flex-1">${esc(r.text)}</span>
      <button type="button" class="mark-btn" data-up="${i}" ${i === 0 ? "disabled" : ""}>↑</button>
      <button type="button" class="mark-btn" data-down="${i}" ${i === order.length - 1 ? "disabled" : ""}>↓</button>
    </div>`;
  }).join("");

  box.querySelectorAll("[data-htag]").forEach((b) => {
    b.onclick = () => {
      state.hwTags[b.getAttribute("data-htag")] = b.getAttribute("data-val");
      save(); renderHomework(); renderProgress();
    };
  });
  box.querySelectorAll("[data-htone]").forEach((b) => {
    b.onclick = () => {
      state.hwTones[b.getAttribute("data-htone")] = b.getAttribute("data-val");
      save(); renderHomework(); renderProgress();
    };
  });
  box.querySelectorAll("[data-hwtts]").forEach((b) => {
    b.onclick = () => {
      const item = HW.find((x) => x.id === b.getAttribute("data-hwtts"));
      const w = WITNESSES.find((x) => x.id === item.witness);
      speak(item.answer, { pitch: w.pitch });
    };
  });
  box.querySelectorAll("[data-hsort]").forEach((b) => {
    b.onclick = () => {
      state.hwSort[b.getAttribute("data-hsort")] = b.getAttribute("data-val");
      save(); renderHomework(); renderProgress(); renderEnding();
    };
  });
  const move = (i, dir) => {
    const cur = (state.report.length === REPORT.length ? state.report : state.reportBank).slice();
    const j = i + dir;
    if (j < 0 || j >= cur.length) return;
    [cur[i], cur[j]] = [cur[j], cur[i]];
    state.reportBank = cur;
    state.report = [];
    state.reportChecked = false;
    save(); renderHomework();
  };
  bank.querySelectorAll("[data-up]").forEach((b) => { b.onclick = () => move(+b.getAttribute("data-up"), -1); });
  bank.querySelectorAll("[data-down]").forEach((b) => { b.onclick = () => move(+b.getAttribute("data-down"), 1); });
  $("btnReportCheck").onclick = () => {
    const cur = (state.report.length === REPORT.length ? state.report : state.reportBank).slice();
    state.report = cur;
    state.reportChecked = true;
    save(); renderHomework(); renderProgress(); renderEnding();
  };
  $("btnReportListen").onclick = () => {
    const cur = (state.report.length === REPORT.length ? state.report : state.reportBank);
    speak(cur.map((id) => REPORT.find((x) => x.id === id).text).join(" "));
  };
  const why = $("reportWhy");
  if (state.reportChecked) {
    why.className = "why " + (reportOk() ? "ok" : "bad");
    why.textContent = reportOk()
      ? "Порядок верный: First, Then, After that, Also, Finally, So."
      : "Порядок пока неверный. Вспомни слова First / Then / After that / Also / Finally / So и особые хвостики aren't I? и shall we?";
  }
  $("hwOwn").oninput = () => { state.hwOwn = $("hwOwn").value; save(); };
}

function renderEnding() {
  const box = $("endingBox");
  if (!box) return;
  const ready = allDone();
  if (ready) state.codeOpen = true;
  box.innerHTML = `
    <h2 class="font-display text-2xl text-brass-light">Финал расследования</h2>
    <p class="mt-2">Когда классная миссия и домашка собраны, откроется код.</p>
    <ul class="mt-4 grid gap-1 text-sm">
      <li>Разминка: <b>${warmDone() ? "2/2" : "…"}</b></li>
      <li>Допросы: <b>${stampN()}/4</b> (${WITNESSES.map((w) => interviewScore(w.id) + "/" + w.tasks.length).join(" · ")})</li>
      <li>Теория: <b>${sentenceOk() ? "есть" : "нужно 5 слов"}</b></li>
      <li>Домашка A: <b>${hwTagN()}/8</b> · B: <b>${hwSortN()}/8</b> · C: <b>${reportOk() ? "8/8" : "—"}</b></li>
      <li>Прогресс: <b class="text-brass-light">${progressN()}/8</b></li>
    </ul>
    <div class="mt-5 rounded-2xl border border-brass/50 p-5 text-center">
      ${state.codeOpen ? `<p class="text-sm text-parch-dim">Код для учителя</p>
        <p class="mt-2 font-display text-3xl text-brass-light" id="finalCode">${CODE}</p>
        <p class="mt-3 text-sm">The note and the page came from the same old book. Let's open the next page, shall we?</p>`
        : `<p>Код ещё закрыт. Дойди до ${progressN()}/8: закончи допросы, теорию и домашку.</p>`}
    </div>
    <h3 class="mt-6 font-display text-xl">Рефлексия</h3>
    <label class="mt-2 block text-sm">Что было самым трудным — хвостик, интонация или поиск лжи?
      <textarea id="reflect" rows="3" class="mt-2 w-full rounded-xl border border-parch/20 bg-ink-850 px-3 py-2 text-parch">${esc(state.reflect)}</textarea>
    </label>
  `;
  const r = $("reflect");
  if (r) r.oninput = () => { state.reflect = r.value; save(); };
}

function renderCase() {
  const modal = $("caseModal");
  if (!modal) return;
  const clues = clueList();
  modal.innerHTML = `<div class="modal-back" id="caseBack">
    <div class="modal-card panel rounded-3xl p-6" role="dialog" aria-labelledby="caseTitle">
      <button type="button" class="modal-close mark-btn" id="caseClose">Закрыть</button>
      <h2 id="caseTitle" class="font-display text-2xl text-brass-light pr-20">Case File</h2>
      <p class="mt-2 text-sm">Улики: ${clues.length}</p>
      <ul class="mt-4 grid gap-3 text-sm">
        ${clues.map((c) => `<li class="rounded-xl border border-brass/40 p-3"><b class="text-brass-light">${esc(c.source)}</b><br>${esc(c.text)}${c.special ? ' <span class="stamp">Первый допрос</span>' : ""}</li>`).join("")}
      </ul>
    </div>
  </div>`;
  modal.hidden = false;
  const close = () => { modal.hidden = true; modal.innerHTML = ""; };
  $("caseClose").onclick = close;
  $("caseBack").addEventListener("click", (e) => {
    const top = document.elementFromPoint(e.clientX, e.clientY);
    if (top && (top.id === "caseClose" || $("caseClose").contains(top))) return;
    if (top && $("caseBack") === top) close();
  });
}

function renderGrammar() {
  const modal = $("grammarModal");
  if (!modal) return;
  modal.innerHTML = `<div class="modal-back" id="gramBack">
    <div class="modal-card panel rounded-3xl p-6" role="dialog" aria-labelledby="gramTitle">
      <button type="button" class="modal-close mark-btn" id="gramClose">Закрыть</button>
      <h2 id="gramTitle" class="font-display text-2xl text-brass-light pr-20">Question tags</h2>
      <div class="mt-4 grid gap-3">
        ${GRAMMAR.map((g) => `
          <button type="button" class="paper rounded-2xl p-3 text-left" data-flip="${g.id}">
            <span class="block font-bold">${state.flipped[g.id] ? esc(g.ru) : esc(g.q)}</span>
            <span class="mt-1 block text-sm">${state.flipped[g.id] ? esc(g.notes) : "Нажми, чтобы перевернуть"}</span>
          </button>`).join("")}
      </div>
    </div>
  </div>`;
  modal.hidden = false;
  const close = () => { modal.hidden = true; modal.innerHTML = ""; };
  $("gramClose").onclick = close;
  $("gramBack").addEventListener("click", (e) => {
    const top = document.elementFromPoint(e.clientX, e.clientY);
    if (top && (top.id === "gramClose" || $("gramClose").contains(top))) return;
    if (top && $("gramBack") === top) close();
  });
  modal.querySelectorAll("[data-flip]").forEach((b) => {
    b.onclick = (e) => {
      e.stopPropagation();
      const id = b.getAttribute("data-flip");
      state.flipped[id] = !state.flipped[id];
      save();
      renderGrammar();
    };
  });
}

function placeDust() {
  const host = $("heroDust");
  if (!host || host.childElementCount) return;
  const bits = [
    { left: "12%", top: "30%", delay: "0s", dur: "7s" },
    { left: "28%", top: "18%", delay: "1s", dur: "8s" },
    { left: "46%", top: "26%", delay: "0.4s", dur: "6s" },
    { left: "63%", top: "16%", delay: "1.6s", dur: "9s" },
    { left: "78%", top: "28%", delay: "0.8s", dur: "7s" },
    { left: "18%", top: "55%", delay: "2s", dur: "8s" },
    { left: "70%", top: "48%", delay: "1.2s", dur: "6.5s" },
    { left: "88%", top: "40%", delay: "0.3s", dur: "7.5s" }
  ];
  host.innerHTML = bits.map((d) =>
    `<span class="dust" style="left:${d.left};top:${d.top};animation-delay:${d.delay};animation-duration:${d.dur}"></span>`
  ).join("");
}

function resetLesson() {
  if (!confirm("Начать урок заново? Прогресс сбросится, задания перемешаются, озвучка остановится.")) return;
  try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
  state = defaults();
  save();
  bindStatic();
  renderAll();
  window.scrollTo(0, 0);
}

function bindStatic() {
  const name = $("nameField");
  if (name) {
    name.value = state.name || "";
    name.oninput = () => { state.name = name.value; save(); };
  }
  $("btnSound").onclick = () => {
    state.soundOn = !state.soundOn;
    if (!state.soundOn) try { speechSynthesis.cancel(); } catch (e) {}
    save();
    renderProgress();
  };
  $("btnReset").onclick = resetLesson;
  $("btnCase").onclick = renderCase;
  $("btnGrammar").onclick = renderGrammar;
}

function renderAll() {
  placeDust();
  renderProgress();
  renderWarmup();
  renderChoose();
  renderRooms();
  renderAnalysis();
  renderHomework();
  renderEnding();
}

try {
  bindStatic();
  renderAll();
  if (window.speechSynthesis) speechSynthesis.onvoiceschanged = () => {};
} catch (err) {
  console.error("lesson boot", err);
}

window.__tagqa = {
  KEY, CODE, WITNESSES, HW, REPORT, WARM, GRAMMAR, CLUES, MARKS,
  state: () => state,
  save, renderAll,
  stats: () => ({
    warmup: warmDone(),
    stamps: stampN(),
    scores: Object.fromEntries(WITNESSES.map((w) => [w.id, `${interviewScore(w.id)}/${w.tasks.length}`])),
    theory: sentenceOk(),
    hwTag: hwTagN(),
    hwSort: hwSortN(),
    report: reportOk(),
    progress: `${progressN()}/8`,
    code: state.codeOpen ? CODE : null
  }),
  checkQuestion,
  norm, parseTagQ
};
