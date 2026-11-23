
const STORAGE_KEY = "tutorcall-maple-mug-alibi-v1";
const RESET_MSG = "Начать заново? Все ответы на этом устройстве сотрутся.";

const Fe = {
  interrogation: { src: "images/interrogation.jpg", webp: "images/interrogation.webp", file: "interrogation.jpg", caption: "Interrogation room · Case: Riverdale Riddle", alt: "Two young detectives question Alex at a wooden table in front of a cork evidence board.", pos: "center" },
  portrait: { src: "images/alex_portrait.jpg", webp: "images/alex_portrait.webp", file: "alex_portrait.jpg", caption: "Suspect: Alex", alt: "Portrait of Alex, a young man with messy brown hair and a blue shirt.", pos: "top" },
  cafe: { src: "images/alex_cafe.jpg", webp: "images/alex_cafe.webp", file: "alex_cafe.jpg", caption: "Maple & Mug café · coffee and a book", alt: "Alex drinking coffee and reading a book at a table in a sunny café.", pos: "center" },
  waitress: { src: "images/waitress_bill.jpg", webp: "images/waitress_bill.webp", file: "waitress_bill.jpg", caption: "Emma the waitress brings the bill", alt: "Emma the waitress brings the bill to Alex, who is reading at his table.", pos: "center" },
  leaving: { src: "images/alex_leaving.jpg", webp: "images/alex_leaving.webp", file: "alex_leaving.jpg", caption: "Leaving Maple & Mug · the rain starts", alt: "Alex opens the café door and looks up as it starts to rain.", pos: "center" },
  phone: { src: "images/alex_phone_rain.jpg", webp: "images/alex_phone_rain.webp", file: "alex_phone_rain.jpg", caption: "Walking home in the rain · a phone call", alt: "Alex talks on the phone while walking home along a rainy street.", pos: "center" }
};
const X0 = ["interrogation", "portrait", "cafe", "waitress", "leaving", "phone"];
const Al = [
  { id: "arrive", label: "Arrives at the café", time: "14:40", sentence: "When I arrived at Maple & Mug café, it was 14:40.", image: "cafe", connector: "when" },
  { id: "cafe", label: "Coffee & a book", sentence: "While I was sitting at the table, I was drinking coffee and reading a book.", image: "cafe", connector: "while" },
  { id: "bill", label: "Emma brings the bill", sentence: "When the waitress Emma brought the bill, I paid.", image: "waitress", connector: "when" },
  { id: "leave", label: "Leaves · rain starts", sentence: "When I left the café, it started raining.", image: "leaving", connector: "when" },
  { id: "walk", label: "Walks home · calls a friend", sentence: "While I was walking home in the rain, I called my friend.", image: "phone", connector: "while" },
  { id: "home", label: "Arrives home", time: "15:25", sentence: "When I arrived home, it was 15:25.", image: "phone", connector: "when" }
];
const Ku = Object.fromEntries(Al.map(f => [f.id, f]));
const Fu = [
  { n: 1, title: "Pick the Word", tag: "Warm-up", description: "Alex reads ready-made sentences with a gap. Choose when or while. He only confirms correct answers.", task: "Choose when or while to complete Alex's sentence." },
  { n: 2, title: "Catch the Mistake", tag: "Accuracy", description: "Alex tells his story, but he uses the wrong word on purpose. Write each sentence again, correctly.", task: "Write Alex's sentence again, with the correct word." },
  { n: 3, title: "Ask Your Own", tag: "Questions", description: "Ask your own questions with when or while. Collect six facts about his afternoon. When a fact is mentioned, say it back to confirm it.", task: "Ask about the time, the café, Emma, the rain, the walk, and home. Confirm all 6 facts." },
  { n: 4, title: "Free Interrogation", tag: "Final stage", description: "Alex is nervous and gives more detail. Rebuild the whole timeline with correct when/while statements, then open the final report.", task: "Rebuild Alex's whole timeline with correct when/while statements." }
];
const El = [
  { text: "___ I arrived at Maple & Mug café, it was 14:40.", answer: "when", full: "When I arrived at Maple & Mug café, it was 14:40.", image: "cafe", why: "“Arrived” is a short action at one moment, so we use when." },
  { text: "___ I was sitting at the table, I was drinking coffee.", answer: "while", full: "While I was sitting at the table, I was drinking coffee.", image: "cafe", why: "“Was sitting” is a longer action (was + -ing), so we use while." },
  { text: "I was reading a book ___ I was drinking coffee.", answer: "while", full: "I was reading a book while I was drinking coffee.", image: "cafe", why: "Two longer actions happen at the same time, so we use while." },
  { text: "___ the waitress Emma brought the bill, I paid.", answer: "when", full: "When the waitress Emma brought the bill, I paid.", image: "waitress", why: "“Brought” is a short action, and paying comes right after it, so we use when." },
  { text: "___ I left the café, it started raining.", answer: "when", full: "When I left the café, it started raining.", image: "leaving", why: "“Left” happens at one moment, so we use when." },
  { text: "It started raining ___ I left the café.", answer: "when", full: "It started raining when I left the café.", image: "leaving", why: "Two short actions in order, so we use when (even in the middle of the sentence)." },
  { text: "___ I was walking home in the rain, I called my friend.", answer: "while", full: "While I was walking home in the rain, I called my friend.", image: "phone", why: "“Was walking” is a longer background action, so we use while." },
  { text: "___ I arrived home, it was 15:25.", answer: "when", full: "When I arrived home, it was 15:25.", image: "phone", why: "This is one exact moment, so we use when." }
];
const Oa = [
  { wrong: "While I arrived at Maple & Mug café, it was 14:40.", correct: "When I arrived at Maple & Mug café, it was 14:40.", answer: "when", image: "cafe", why: "“Arrived” is a short action at one moment, so it needs when, not while." },
  { wrong: "When I was sitting at the table, I was drinking coffee.", correct: "While I was sitting at the table, I was drinking coffee.", answer: "while", image: "cafe", why: "“Was sitting” is a longer action (was + -ing), so it needs while." },
  { wrong: "I was reading a book when I was drinking coffee.", correct: "I was reading a book while I was drinking coffee.", answer: "while", image: "cafe", why: "Two longer actions happen at the same time, so we use while." },
  { wrong: "While the waitress Emma brought the bill, I paid.", correct: "When the waitress Emma brought the bill, I paid.", answer: "when", image: "waitress", why: "“Brought” is a short action, so it needs when." },
  { wrong: "While I left the café, it started raining.", correct: "When I left the café, it started raining.", answer: "when", image: "leaving", why: "“Left” happens at one moment, so it needs when." },
  { wrong: "When I was walking home in the rain, I called my friend.", correct: "While I was walking home in the rain, I called my friend.", answer: "while", image: "phone", why: "“Was walking” is a longer background action, so it needs while." },
  { wrong: "While I arrived home, it was 15:25.", correct: "When I arrived home, it was 15:25.", answer: "when", image: "phone", why: "This is one exact moment, so it needs when." },
  { wrong: "It started raining while I left the café.", correct: "It started raining when I left the café.", answer: "when", image: "leaving", why: "Two short actions in order, so it needs when (even in the middle of the sentence)." }
];
const L0 = ["What were you doing when ", "What did you do while you were ", "What happened when ", "Who did you call while ", "What time was it when ", "When did you "];
const k0 = "I don’t understand the question. Please rephrase.";
const Z0 = "Hello. I’m Alex. I was at Maple & Mug café yesterday. What do you want to ask me?";
const K0 = [
  ["Crime", "Jewelry store robbery"],
  ["When", "Yesterday, 15:00"],
  ["Suspect", "Alex, a young man"],
  ["His claim", "“I was at Maple & Mug café.”"],
  ["Possible witness", "Emma, the waitress"]
];
const J0 = [
  { n: "01", title: "When or while — or nothing", body: "Alex only answers questions and statements that use when or while correctly. Everything else gets the same reply." },
  { n: "02", title: "One wrong word, one reply", body: "Use the wrong word or make a when/while mistake and he says: “I don’t understand the question. Please rephrase.”" },
  { n: "03", title: "Short answers only", body: "Alex is nervous but honest. He gives his alibi one piece at a time, so you need to put the timeline together." }
];

const CASE_CODE = "CASE-0715-MAPLE";
const WORDS = [
  { en: "alibi", ru: "доказательство, что человека не было на месте преступления" },
  { en: "robbery", ru: "ограбление" },
  { en: "jewelry store", ru: "ювелирный магазин" },
  { en: "café", ru: "кафе" },
  { en: "waitress", ru: "официантка" },
  { en: "bill", ru: "счёт" },
  { en: "arrive", ru: "прибывать, приходить" },
  { en: "leave", ru: "уходить, покидать" }
];
const MISTAKES = [
  ["While Emma brought the bill, I paid.", "When Emma brought the bill, I paid."],
  ["When I was walking home, I called my friend.", "While I was walking home, I called my friend."],
  ["While did you arrive?", "When did you arrive?"],
  ["What you were doing when it started raining?", "What were you doing when it started raining?"]
];
const REFLECT = [
  { id: "r1", prompt: "Write a sentence with when about Alex arriving at the café." },
  { id: "r2", prompt: "Write a sentence with while about coffee or the book." },
  { id: "r3", prompt: "Write a sentence with when about the rain and leaving the café." },
  { id: "r4", prompt: "The robbery was at 15:00. Where does Alex say he was at that time?" },
  { id: "r5", prompt: "Name one person who could check his story, and how." },
  { id: "r6", prompt: "Write one more when or while sentence from the timeline, in your own words." }
];

const lh = {
        "no-connector": "Alex only answers sentences with when or while.",
        "while-short": "While goes with a longer action: was/were + -ing (for example “while you were sitting…”). For a short action, use when.",
        "when-long": "This is a longer action (was/were + -ing), so use while. When goes with a short action or an exact moment.",
        "while-question": "While is not a question word. Ask “When did you…?” or “What were you doing while…?”",
        tense: "The robbery happened yesterday, so use the past: simple past after when, was/were + -ing after while.",
        agreement: "Check was/were: I/he/she/it was, you/we/they were.",
        "did-past": "After did, use the base verb: “When did you arrive?”, not “arrived”.",
        "be-base": "After was/were, use the -ing form: “were walking”, not “were walk”.",
        "word-order": "Check the question word order: “What were you doing…?”, not “What you were doing…?”",
        incomplete: "The sentence is not complete after when/while."
    },
    ti = new Set(["what", "who", "whom", "where", "why", "how", "which", "whose"]),
    Ts = new Set(["did", "do", "does", "were", "was", "are", "is", "am", "have", "had", "could", "can", "will", "would", "should"]),
    I0 = new Set(["so", "and", "then", "ok", "okay", "alex", "well", "now", "but", "exactly", "and", "hey", "please", "tell", "me", "us"]),
    $d = new Set(["i", "he", "she", "it", "emma"]),
    Fd = new Set(["you", "we", "they"]),
    Iu = new Set(["i", "you", "we", "they", "he", "she", "it"]),
    P0 = new Set(["not", "still", "just", "really", "already", "also", "quietly", "slowly", "both", "happily", "calmly", "never", "always"]),
    li = new Set(["walk", "drink", "read", "sit", "call", "pay", "leave", "arrive", "go", "come", "talk", "eat", "wait", "rain", "do", "look", "bring", "start", "get", "phone", "order", "open", "see", "hear", "make", "have", "take", "begin", "speak", "tell", "say", "buy", "find", "think", "meet", "write", "stand", "feel", "know", "ring", "pour", "enjoy", "study", "work", "use", "check", "sleep", "run", "steal", "rob", "notice", "watch", "listen", "chat", "drive", "ride", "return", "enter", "exit", "finish", "stop", "happen", "reach", "sing", "play", "give", "send", "wear", "carry"]),
    Us = new Set(["read", "put", "hit", "cut", "let", "set", "shut", "cost", "quit"]),
    eg = new Set(["went", "came", "left", "paid", "brought", "sat", "drank", "got", "saw", "heard", "took", "made", "began", "ran", "spoke", "told", "said", "bought", "found", "thought", "met", "wrote", "ate", "had", "did", "stood", "felt", "knew", "rang", "sent", "hung", "woke", "threw", "caught", "fell", "held", "kept", "lost", "sold", "won", "wore", "drove", "rode", "flew", "chose", "broke", "forgot", "gave", "grew", "hid", "stole", "slept", "sang", "spent", "taught", "understood"]),
    tg = new Set(["thing", "something", "anything", "nothing", "everything", "evening", "morning", "during", "king", "ring", "bring", "sing", "spring", "string", "wing", "ceiling", "sibling", "ping", "swing", "sting"]),
    lg = new Set(["red", "bed", "need", "seed", "feed", "shed", "speed", "bled", "fred", "ted", "wed", "hundred", "naked"]),
    Pu = f => f.length > 4 && f.endsWith("ing") && !tg.has(f),
    ah = f => eg.has(f) || f.length > 3 && f.endsWith("ed") && !lg.has(f),
    Ms = f => f === "was" || f === "were",
    nh = f => f === "am" || f === "is" || f === "are",
    Ma = new Set;
li.forEach(f => {
    Us.has(f) || (f.endsWith("y") && !/[aeiou]y$/.test(f) ? Ma.add(f.slice(0, -1) + "ies") : /(s|sh|ch|x|o)$/.test(f) ? Ma.add(f + "es") : Ma.add(f + "s"))
});
Ma.delete("does");
Ma.delete("has");

function ei(f) {
    let d = f.toLowerCase();
    return d = d.replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"').replace(/é/g, "e"), d = d.replace(/\b(was|were|did|do|does|is|are|could|would|have|had|should)n't\b/g, "$1 not").replace(/\bcan't\b/g, "can not").replace(/\bwon't\b/g, "will not").replace(/\bi'm\b/g, "i am").replace(/\b(you|we|they)'re\b/g, "$1 are").replace(/\b(it|he|she|that|what|who|where|there)'s\b/g, "$1 is").replace(/\b(i|you|we|they)'ve\b/g, "$1 have").replace(/\b(i|you|we|they|he|she)'d\b/g, "$1 would").replace(/\b(i|you|we|they|he|she)'ll\b/g, "$1 will").replace(/'s\b/g, ""), d
}

function ag(f) {
    return f.match(/\d{1,2}[:.]\d{2}|[a-z]+|[,;?!.]/g) ?? []
}

function ng(f) {
    const d = [];
    let x = [];
    for (const r of f) r === "." || r === "!" || r === "?" ? (x.length && d.push({
        tokens: x,
        question: r === "?"
    }), x = []) : x.push(r);
    return x.length && d.push({
        tokens: x,
        question: !1
    }), d
}

function Os(f, d) {
    let x = d;
    for (; x < f.length && P0.has(f[x]);) x++;
    return x
}

function ug(f) {
    const d = [];
    for (let x = 0; x < f.length; x++) {
        const r = f[x],
            b = f[x + 1],
            _ = f[x - 1];
        if ($d.has(r) && b === "were" && _ !== "if" && d.push("agreement"), Fd.has(r) && b === "was" && d.push("agreement"), r === "were" && b && $d.has(b) && _ !== "if" && d.push("agreement"), r === "was" && b && Fd.has(b) && d.push("agreement"), r === "did" || (r === "does" || r === "do") && b !== void 0 && (Iu.has(b) || b === "emma"))
            for (let L = x + 1; L < Math.min(f.length, x + 5); L++) {
                const T = f[L];
                if (T === "when" || T === "while" || ti.has(T)) break;
                if (T !== "not") {
                    if (li.has(T) || Us.has(T)) break;
                    if (ah(T) && T !== "did" || Ms(T) || Pu(T)) {
                        d.push("did-past");
                        break
                    }
                }
            }
        if (Ms(r) || nh(r)) {
            const L = Os(f, x + 1),
                T = f[L];
            T && li.has(T) && !Iu.has(T) && T !== "do" && d.push("be-base")
        }
    }
    return f.length > 2 && ti.has(f[0]) && Iu.has(f[1]) && ["were", "was", "did", "do", "are"].includes(f[2]) && d.push("word-order"), d
}

function ig(f, d) {
    const x = [];
    for (let r = d + 1; r < f.length; r++) {
        const b = f[r];
        if (b === "," || b === ";" || b === "when" || b === "while" || ti.has(b)) break;
        x.push(b)
    }
    return x
}

function cg(f, d) {
    if (d.length === 0) return "incomplete";
    let x = !1,
        r = !1,
        b = !1,
        _ = !1,
        O = !1;
    for (let T = 0; T < d.length; T++) {
        const j = d[T];
        if (Ms(j)) {
            const U = Os(d, T + 1);
            d[U] && Pu(d[U]) ? x = !0 : b = !0
        } else if (nh(j)) {
            const U = Os(d, T + 1);
            d[U] && Pu(d[U]) ? r = !0 : _ = !0
        } else Ma.has(j) || li.has(j) && !Us.has(j) && T > 0 && Iu.has(d[T - 1]) ? _ = !0 : ah(j) && (O = !0)
    }
    const L = Pu(d[0]);
    return f === "while" ? r ? "tense" : L || x || b ? null : _ && !O ? "tense" : "while-short" : x || L ? "when-long" : r || _ && !O && !b ? "tense" : null
}

function sg(f) {
    const d = f.tokens,
        x = d.filter(T => /^[a-z]|^\d/.test(T)),
        r = x.join(" "),
        b = d.map((T, j) => T === "when" || T === "while" ? j : -1).filter(T => T >= 0),
        _ = x.length > 0 && (ti.has(x[0]) || Ts.has(x[0]) || x[0] === "when" && Ts.has(x[1] ?? "")),
        O = f.question || _;
    if (b.length === 0) return {
        has: !1,
        errors: [],
        question: O,
        text: r
    };
    const L = [...ug(x)];
    for (const T of b) {
        const j = d[T],
            M = d.slice(0, T).filter(pe => /^[a-z]/.test(pe)).every(pe => I0.has(pe)),
            q = d[T + 1],
            ce = T === d.length - 1 || d.slice(T + 1).every(pe => /^[,;]$/.test(pe));
        if (M && q !== void 0 && Ts.has(q) || ce && O) {
            j === "while" && L.push("while-question");
            continue
        }
        const fe = cg(j, ig(d, T));
        fe && L.push(fe)
    }
    return {
        has: !0,
        errors: L,
        question: O,
        text: r
    }
}

function _s(f) {
    const d = ei(f),
        r = ng(ag(d)).map(sg),
        b = r.filter(O => O.has),
        _ = Array.from(new Set(b.flatMap(O => O.errors)));
    return b.length === 0 ? {
        ok: !1,
        errors: ["no-connector"],
        hasConnector: !1,
        isQuestion: r.some(O => O.question),
        connectorSentences: [],
        normalized: d
    } : {
        ok: _.length === 0,
        errors: _,
        hasConnector: !0,
        isQuestion: b.some(O => O.question),
        connectorSentences: b.map(O => O.text),
        normalized: d
    }
}
const fg = () => Object.fromEntries(Al.map(f => [f.id, "locked"]));

function rg(f) {
    return {
        level: f,
        l1: 0,
        l2: 0,
        facts: fg(),
        solved: !1,
        nerves: f === 4 ? 35 : 20,
        turn: 0
    }
}
const It = f => Math.max(0, Math.min(100, f)),
    Tn = (f, d) => f[Math.abs(d) % f.length],
    uh = f => ({
        kind: "gap",
        text: El[f].text,
        index: f,
        total: El.length
    }),
    ih = f => ({
        kind: "fix",
        text: Oa[f].wrong,
        index: f,
        total: Oa.length
    });

function og(f) {
    const d = [{
        from: "alex",
        text: Z0,
        images: ["interrogation", "portrait"],
        tone: "neutral"
    }];
    return f === 1 ? d.push({
        from: "alex",
        text: "Okay… let’s start with easy sentences. Complete my sentence. Is it when or while?",
        exercise: uh(0)
    }) : f === 2 ? d.push({
        from: "alex",
        text: "Let me tell you about my afternoon. My English is… not perfect today. Correct my sentence, please.",
        exercise: ih(0)
    }) : f === 3 ? d.push({
        from: "system",
        text: "Level 3 · Ask your own questions with when or while. Try to collect six facts: the café time, coffee and the book, Emma and the bill, the rain, the walk and the phone call, and the time he got home. When a fact is only mentioned, say it back with when or while to confirm it."
    }) : d.push({
        from: "system",
        text: "Level 4 · Free interrogation. Alex is nervous. Rebuild the whole timeline with correct when/while statements. When all six facts are confirmed, open the final report and give your verdict."
    }), d
}
const Cs = /\b(14[:.]40|2[:.]40|two forty|twenty to three)\b/,
    ai = /\b(15[:.]25|3[:.]25|three twenty[- ]?five|twenty[- ]?five past three)\b/,
    ch = /\b\d{1,2}[:.]\d{2}\b|\b\d{1,2} ?(am|pm|o'?clock)\b/;

function Ju(f, d) {
    const x = [{
        from: "alex",
        text: k0,
        tone: "reject"
    }];
    return d && f.length && x.push({
        from: "teacher",
        text: lh[f[0]] ?? "Check when/while."
    }), x
}
const dg = ["Um… ", "Well… ", "Look… ", "", "Okay… ", ""],
    hg = [" *fidgets with his sleeve*", " *glances at the door*", " *rubs the back of his neck*", "", " *takes a deep breath*", ""];

function Id(f, d) {
    return Tn(dg, d) + f + Tn(hg, d * 7 + 3)
}

function mg(f) {
    const d = Z => Z.test(f);
    if (d(/\b(who are you|your name|yourself|introduce)\b/)) return "intro";
    if (d(/\b(robber\w*|rob|robbed|jewel\w*|steal\w*|stole\w*|stolen|thief|crime|heist|diamond\w*|15[:.]00|3 ?pm|three o'?clock)\b/) || d(/\b(store|shop)\b/) && !d(/\bcoffee shop\b/)) return "robbery";
    const x = d(/\bhome\b/),
        r = d(/\b(arriv\w*|got|get|came|come|reach\w*)\b/),
        b = d(/\bwalk\w*\b/) || d(/\bon (the|your|my) way\b/),
        _ = d(/\b(call\w*|phon\w*|friend|talk\w*|chat\w*|rang|ring\w*)\b/),
        O = d(/\b(bill|waitress|emma|pay|paid|paying|check|money|cash|tip)\b/),
        L = d(/\b(leav\w*|left|exit\w*|went out|go out|stepped out|door|outside)\b/),
        T = d(/\b(rain\w*|umbrella|wet|weather|storm)\b/),
        j = d(/\b(coffee|drink\w*|drank|read\w*|book|table|sit\w*|sat|seat\w*|order\w*)\b/),
        U = d(/\b(cafe|maple|mug|inside)\b/);
    if (T && (j || d(/\binside\b|\bin the cafe\b/)) && !L && !b) return "rainInside";
    const M = {
        arrive: 0,
        cafe: 0,
        bill: 0,
        leave: 0,
        walk: 0,
        home: 0
    };
    x && (r || ai.test(f)) && (M.home = 5), ai.test(f) && (M.home += 3), M.walk = (b ? 3 : 0) + (_ ? 3 : 0) + (x && !M.home ? 1 : 0) + (d(/\bwhile it was raining\b/) ? 3 : 0), M.bill = O ? 4 : 0, M.leave = (L ? 4 : 0) + (T && !b ? 2 : 0), r && !x && (M.arrive = U ? 4 : 2), Cs.test(f) && (M.arrive += 4), M.cafe = (j ? 3 : 0) + (U ? 1 : 0);
    let q = "unknown",
        ce = 0;
    return Object.keys(M).forEach(Z => {
        M[Z] > ce && (q = Z, ce = M[Z])
    }), q
}

function gg(f) {
    return /\bwhat time\b|\bhow late\b|^(so |and |okay |ok |alex )*when (did|were|was|do|exactly)\b/.test(f) ? "time" : /\bwhat did you (talk|say|discuss|chat)\b|\bwhat were you talking\b/.test(f) ? "talk" : /\bwhat book\b|\bwhich book\b|\bwhat were you reading\b|\bwhat did you read\b/.test(f) ? "book" : /\bwho\b/.test(f) ? "who" : /\bwhere\b/.test(f) ? "where" : /\bwhat happened\b/.test(f) ? "happen" : /\bwhat (were|was) you doing\b|\bwhat did you do\b/.test(f) ? "doing" : /^(did|were|was|do|could|have|had)\b/.test(f) ? "yesno" : "general"
}
const Wu = {
    cafe: /\b(eat|ate|food|sleep|slept|phone|call\w*|talk\w*|friend|music|laptop|tea|work\w*)\b/,
    bill: /\b(steal|stole|run away|ran away|not pay|forgot)\b/,
    leave: /\b(sunny|snow\w*|stopped)\b/,
    walk: /\b(bus|taxi|car|drove|drive|ran|run|emma|mother|mom|mum|dad|father|police)\b/
};

function Pd(f, d) {
    return ch.test(d) ? f === "arrive" ? !Cs.test(d) : f === "home" ? !ai.test(d) : !1 : !1
}

function pg(f, d, x, r) {
    const b = x === 4,
        _ = (O, L) => b ? L : O;
    switch (f) {
        case "intro":
            return {
                text: _("I’m Alex. I’m a student. I like coffee and books.", "I’m Alex. Just a student. I like coffee, books… quiet afternoons. That’s all."), image: "portrait"
            };
        case "robbery":
            return {
                text: _("I don’t know anything about the robbery. I think I was still at Maple & Mug.", "*shifts in his chair* The robbery? I… I wasn’t there! When it happened, I think I was still at Maple & Mug. I wasn’t anywhere near a jewelry store. I swear."), image: b ? "interrogation" : void 0, nerves: 15
            };
        case "rainInside":
            return {
                text: _("No, it wasn’t raining while I was inside. When I left the café, it started raining.", "No. It wasn’t raining while I was sitting inside. It was sunny, actually. When I left the café, it started raining."), image: "leaving", fact: "leave"
            };
        case "arrive": {
            const O = Pd("arrive", r);
            return d === "doing" || d === "happen" ? {
                text: _("When I arrived, I sat down at a table and ordered a coffee.", "When I arrived, I found a table by the window and ordered a coffee. Nothing special, really."),
                image: "cafe",
                fact: "arrive"
            } : d === "who" ? {
                text: _("I was alone.", "I was alone. The café wasn’t very busy."),
                image: "cafe",
                fact: "arrive"
            } : d === "where" ? {
                text: "At Maple & Mug café.",
                image: "cafe",
                fact: "arrive"
            } : {
                text: (O ? "No, no. " : d === "yesno" ? "Yes. " : "") + _("I arrived at Maple & Mug café at 14:40.", "I arrived at Maple & Mug café at 14:40. I remember because I looked at the clock above the counter."),
                image: "cafe",
                fact: "arrive",
                nerves: O ? 8 : 0
            }
        }
        case "cafe":
            return d === "book" ? {
                text: _("Just a novel. An adventure story.", "A book… an adventure story. It was really good. I didn’t want to stop reading."),
                image: "cafe",
                fact: "cafe"
            } : d === "who" ? {
                text: _("Nobody. I was alone.", "I was alone. Well — the waitress, Emma, was working there. She saw me."),
                image: "cafe",
                fact: "cafe"
            } : d === "where" ? {
                text: "At a table in Maple & Mug café.",
                image: "cafe",
                fact: "cafe"
            } : d === "time" ? {
                text: _("I don’t remember the exact time. Sorry.", "I wasn’t looking at the clock while I was reading. Sorry."),
                image: "cafe",
                fact: "cafe"
            } : {
                text: (d === "yesno" && Wu.cafe?.test(r) ? "No. " : d === "yesno" ? "Yes. " : "") + _("I was drinking coffee and reading a book.", "While I was sitting at the table, I was drinking coffee and reading a book. Just… a normal afternoon. I didn’t go anywhere."),
                image: "cafe",
                fact: "cafe"
            };
        case "bill": {
            if (d === "who") return {
                text: _("The waitress. Her name is Emma.", "The waitress. Emma. She has dark hair… she was very nice. Ask her!"),
                image: "waitress",
                fact: "bill"
            };
            if (d === "time") return {
                text: _("I’m not sure. I didn’t check the time.", "*hesitates* I… I didn’t check the time. Is that a problem?"),
                image: "waitress",
                fact: "bill",
                nerves: b ? 5 : 0
            };
            if (d === "doing") return {
                text: _("I was reading my book. When she brought the bill, I paid.", "I was reading my book. When Emma brought the bill, I paid. Right away, I promise."),
                image: "waitress",
                fact: "bill"
            };
            const O = d === "yesno" && Wu.bill?.test(r);
            return {
                text: (O ? "No! " : d === "yesno" ? "Yes. " : "") + _("When the waitress brought the bill, I paid.", "When the waitress — Emma — brought the bill, I paid. Right away. You can ask her!"),
                image: "waitress",
                fact: "bill",
                nerves: O ? 8 : 0
            }
        }
        case "leave":
            return d === "time" ? {
                text: _("I don’t know exactly. I didn’t look at my watch.", "I don’t know exactly… I didn’t look at my watch. Why does everyone ask about the time?"),
                image: "leaving",
                fact: "leave",
                nerves: b ? 5 : 0
            } : d === "where" ? {
                text: _("I went home.", "I went home. Where else?"),
                image: "leaving",
                fact: "leave"
            } : d === "doing" ? {
                text: _("I was leaving the café. When I stepped outside, it started raining.", "I was leaving the café. When I opened the door, it started raining. Typical, right?"),
                image: "leaving",
                fact: "leave"
            } : {
                text: (d === "yesno" && Wu.leave?.test(r) ? "No. " : d === "yesno" ? "Yes. " : "") + _("When I left the café, it started raining.", "When I left the café, it started raining. I didn’t have an umbrella, so… I got wet."),
                image: "leaving",
                fact: "leave"
            };
        case "walk": {
            if (d === "who") return {
                text: _("My friend.", "Just my friend. A friend from school. He can tell you!"),
                image: "phone",
                fact: "walk"
            };
            if (d === "talk") return {
                text: _("Nothing important. Weekend plans.", "Nothing important! Just… plans for the weekend. Football, maybe."),
                image: "phone",
                fact: "walk"
            };
            if (d === "where") return {
                text: _("I was walking home.", "I was walking home. In the rain. On foot."),
                image: "phone",
                fact: "walk"
            };
            if (d === "time") return {
                text: _("I don’t know. Soon after I left the café.", "I’m not sure… soon after I left the café. I didn’t check."),
                image: "phone",
                fact: "walk"
            };
            const O = d === "yesno" && Wu.walk?.test(r);
            return {
                text: (O ? "No. " : d === "yesno" ? "Yes. " : "") + _("While I was walking home in the rain, I called my friend.", "While I was walking home in the rain, I called my friend. We talked almost the whole way. Is that a crime?"),
                image: "phone",
                fact: "walk",
                nerves: O ? 6 : 0
            }
        }
        case "home": {
            const O = Pd("home", r);
            return d === "doing" || d === "happen" ? {
                text: _("I changed my clothes. I was wet from the rain.", "When I arrived home, I changed my clothes and made some tea. I was completely wet."),
                image: "phone",
                fact: "home"
            } : {
                text: (O ? "No, no. " : d === "yesno" ? "Yes. " : "") + _("When I arrived home, it was 15:25.", "When I arrived home, it was 15:25. I was soaking wet. I remember the clock in the kitchen."),
                image: "phone",
                fact: "home",
                nerves: O ? 8 : 0
            }
        }
        default:
            return {
                text: _("Hmm… I’m not sure what you mean. Ask me about yesterday afternoon.", "*frowns* What do you mean? I told you. I was at Maple & Mug yesterday afternoon."), image: b ? "interrogation" : void 0, nerves: b ? 3 : 0
            }
    }
}

function yg(f) {
    const d = new Set,
        x = new Set;
    for (const r of f) {
        const b = O => O.test(r),
            _ = ch.test(r);
        b(/\b(arriv\w*|got to|came to|reached|entered)\b/) && b(/\b(cafe|maple|mug)\b/) && !b(/\bhome\b/) && (Cs.test(r) ? d.add("arrive") : _ && x.add("arrive")), b(/\b(coffee|drinking|drank)\b/) && b(/\b(read\w*|book)\b/) && (b(/\b(eating|sleeping|phoning|calling)\b/) ? x.add("cafe") : d.add("cafe")), b(/\b(bill|emma|waitress)\b/) && b(/\b(paid|pay|paying)\b/) && (b(/\b(not pay|did not pay|stole|ran away)\b/) ? x.add("bill") : d.add("bill")), b(/\b(left|leave|leaving|went out|came out|stepped out)\b/) && b(/\brain\w*\b/) && (b(/\b(stopped raining|not rain\w*)\b/) ? x.add("leave") : d.add("leave")), b(/\bwalk\w*\b/) && b(/\b(call\w*|phon\w*|rang)\b/) && (b(/\b(emma|mother|mom|mum|dad|father|police|bus|taxi)\b/) ? x.add("walk") : d.add("walk")), b(/\bhome\b/) && b(/\b(arriv\w*|got|get|came|reached)\b/) && (ai.test(r) ? d.add("home") : _ && x.add("home"))
    }
    return {
        found: [...d],
        contradicted: [...x]
    }
}

function vg(f, d, x) {
    const r = {
            ...f,
            facts: {
                ...f.facts
            },
            turn: f.turn + 1
        },
        b = f.turn * 13 + d.length;
    if (f.level === 1) {
        const q = El[f.l1];
        if (!q) return {
            replies: [{
                from: "system",
                text: "Level 1 is complete. Choose Level 2 to continue the interrogation."
            }],
            next: r
        };
        const ce = ei(d),
            Z = /\bwhen\b/.test(ce),
            fe = /\bwhile\b/.test(ce),
            pe = Z && !fe ? "when" : fe && !Z ? "while" : null,
            Re = ce.split(/\s+/).filter(Boolean).length <= 2 || _s(d).ok;
        if (pe !== q.answer || !Re) {
            r.nerves = It(f.nerves + 3);
            const je = Ju([], !1);
            return x && je.push({
                from: "teacher",
                text: q.why
            }), {
                replies: je,
                next: r
            }
        }
        r.l1 = f.l1 + 1, r.nerves = It(f.nerves - 4);
        const $ = [{
            from: "alex",
            text: `Yes. ${q.full}`,
            images: [q.image],
            tone: "confirm"
        }];
        return r.l1 < El.length ? $.push({
            from: "alex",
            text: Tn(["Okay. Next one.", "Good. And this one?", "Right… next sentence."], b),
            exercise: uh(r.l1)
        }) : ($.push({
            from: "alex",
            text: "That’s all my sentences. So… can I go now?",
            tone: "neutral"
        }), $.push({
            from: "system",
            text: "Level 1 complete! Every sentence is correct. Try Level 2: Catch the Mistake."
        })), {
            replies: $,
            next: r
        }
    }
    if (f.level === 2) {
        const q = Oa[f.l2];
        if (!q) return {
            replies: [{
                from: "system",
                text: "Level 2 is complete. Choose Level 3 to ask your own questions."
            }],
            next: r
        };
        const Z = ei(d).match(/[a-z0-9:]+/g) ?? [],
            fe = Z.includes("when"),
            pe = Z.includes("while"),
            Ne = q.answer === "when" ? "while" : "when";
        if (Z.length <= 2 && (fe || pe)) {
            if (Z.includes(q.answer) && !Z.includes(Ne)) return {
                replies: [{
                    from: "alex",
                    text: "Hmm… maybe. Can you say the whole sentence, please?"
                }],
                next: r
            };
            r.nerves = It(f.nerves + 3);
            const ae = Ju([], !1);
            return x && ae.push({
                from: "teacher",
                text: q.why
            }), {
                replies: ae,
                next: r
            }
        }
        const Re = _s(d),
            $ = new Set(["i", "you", "my", "your", "was", "were", "the", "a", "an", "at", "in", "it", "and", "when", "while", "to"]),
            je = (ei(q.correct).match(/[a-z0-9:]+/g) ?? []).filter(ae => !$.has(ae)),
            Ve = je.filter(ae => Z.includes(ae) || ae === "cafe" && Z.includes("café")).length,
            He = je.length === 0 || Ve / je.length >= .6;
        if (Re.ok && fe === (q.answer === "when") && pe === (q.answer === "while") && He) {
            r.l2 = f.l2 + 1, r.nerves = It(f.nerves - 4);
            const ae = [{
                from: "alex",
                text: `${Tn(["Yes, you’re right.","Oh… yes. That’s better.","Correct. Sorry!"],b)} ${q.correct}`,
                images: [q.image],
                tone: "confirm"
            }];
            return r.l2 < Oa.length ? ae.push({
                from: "alex",
                text: Tn(["Okay… what about this one?", "And this sentence?", "Next one. Is this right?"], b),
                exercise: ih(r.l2)
            }) : (ae.push({
                from: "alex",
                text: "That’s my whole afternoon. Now you know everything… right?",
                tone: "neutral"
            }), ae.push({
                from: "system",
                text: "Level 2 complete! All eight sentences are fixed. Try Level 3: Ask Your Own."
            })), {
                replies: ae,
                next: r
            }
        }
        r.nerves = It(f.nerves + 3);
        const V = Ju([], !1);
        return x && V.push({
            from: "teacher",
            text: Re.ok ? q.why : lh[Re.errors[0]]
        }), {
            replies: V,
            next: r
        }
    }
    if (f.solved) return {
        replies: [{
            from: "alex",
            text: "I told you everything. *leans back* Can I go home now?",
            images: ["portrait"],
            tone: "solved"
        }],
        next: r
    };
    const _ = _s(d);
    if (!_.ok) return r.nerves = It(f.nerves + 4), {
        replies: Ju(_.errors, x),
        next: r
    };
    const O = f.level === 4,
        L = _.connectorSentences.join(" . ");
    if (!_.isQuestion) {
        const {
            found: q,
            contradicted: ce
        } = yg(_.connectorSentences);
        if (ce.length) {
            r.nerves = It(f.nerves + 12);
            const Z = Ku[ce[0]];
            return {
                replies: [{
                    from: "alex",
                    text: O ? "*shakes his head* No! That’s not what happened. Check your notes again." : "No, that’s not right.",
                    images: [Z.image],
                    tone: "nervous"
                }],
                next: r
            }
        }
        if (q.length) {
            const Z = q.filter($ => f.facts[$] !== "confirmed");
            q.forEach($ => r.facts[$] = "confirmed"), r.nerves = It(f.nerves - 6 * Math.max(1, Z.length));
            const fe = Al.every($ => r.facts[$.id] === "confirmed");
            if (O && fe) return r.solved = !0, r.nerves = 5, {
                replies: [{
                    from: "alex",
                    text: "*long pause* …Okay. Yes. That’s exactly what happened. " + Al.map($ => $.sentence).join(" ") + " So you see — I wasn’t anywhere near the jewelry store. Can I go now?",
                    images: ["interrogation"],
                    tone: "solved"
                }, {
                    from: "system",
                    text: "Alibi confirmed! You rebuilt the whole timeline with correct when/while sentences. Case closed."
                }],
                next: r
            };
            if (Z.length === 0) return {
                replies: [{
                    from: "alex",
                    text: O ? Id("Yes, yes. I already told you that.", b) : "Yes. I already told you that.",
                    images: [Ku[q[0]].image],
                    tone: "neutral"
                }],
                next: r
            };
            const pe = Z.map($ => Ku[$].sentence).join(" "),
                Ne = Al.filter($ => r.facts[$.id] !== "confirmed").length,
                Re = O && Ne > 0 ? " …But that’s not the whole story, is it?" : "";
            return {
                replies: [{
                    from: "alex",
                    text: `${O?"Yes… that’s true. ":"Yes, that’s right. "}${pe}${Re}`,
                    images: [Ku[Z[Z.length - 1]].image],
                    tone: "confirm"
                }],
                next: r
            }
        }
    }
    const T = mg(L),
        j = gg(L),
        U = pg(T, j, f.level, L);
    U.fact && r.facts[U.fact] === "locked" && (r.facts[U.fact] = "heard"), r.nerves = It(f.nerves + (U.nerves ?? 0) - (U.fact ? 2 : 0));
    let M = U.text;
    return O && !M.startsWith("*") && T !== "robbery" && (M = Id(M, b)), {
        replies: [{
            from: "alex",
            text: M,
            images: U.image ? [U.image] : void 0,
            tone: (U.nerves ?? 0) >= 8 ? "nervous" : "neutral"
        }],
        next: r
    }
}


function defaultState() {
  return {
    level: null,
    game: null,
    messages: [],
    shown: [],
    doneLevels: [],
    l3Celebrated: false,
    caseFacts: {},
    reflection: { r1: "", r2: "", r3: "", r4: "", r5: "", r6: "" },
    verdict: { choice: "", facts: [], because: "", submitted: false }
  };
}

function load() {
  const base = defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const saved = JSON.parse(raw);
    const out = Object.assign({}, base, saved);
    if (!Array.isArray(out.messages)) out.messages = [];
    if (!Array.isArray(out.shown)) out.shown = [];
    if (!Array.isArray(out.doneLevels)) out.doneLevels = [];
    out.doneLevels = out.doneLevels.map(Number).filter(n => n >= 1 && n <= 4);
    out.l3Celebrated = !!out.l3Celebrated;
    if (!out.caseFacts || typeof out.caseFacts !== "object") out.caseFacts = {};
    out.reflection = Object.assign({ r1: "", r2: "", r3: "", r4: "", r5: "", r6: "" }, out.reflection || {});
    out.verdict = Object.assign({ choice: "", facts: [], because: "", submitted: false }, out.verdict || {});
    if (!Array.isArray(out.verdict.facts)) out.verdict.facts = [];
    if (out.game && typeof out.game === "object") {
      out.game = Object.assign({}, rg(out.game.level || 1), out.game);
      if (!out.game.facts) out.game.facts = fg();
    } else out.game = null;
    if (out.level != null) out.level = Number(out.level);
    return out;
  } catch (err) {
    return base;
  }
}

function save() {
  const dump = {
    level: state.level,
    game: state.game,
    messages: state.messages,
    shown: state.shown,
    doneLevels: state.doneLevels,
    l3Celebrated: state.l3Celebrated,
    caseFacts: state.caseFacts,
    reflection: state.reflection,
    verdict: state.verdict
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dump));
}

let state = load();
let busy = false;
let lightboxKey = null;

function esc(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function highlightWhenWhile(text) {
  return esc(text).replace(/\b(when|while)\b/gi, '<span class="hl">$1</span>');
}

function picture(key, id) {
  const img = Fe[key];
  if (!img) return "";
  const ident = id ? ` id="${id}"` : "";
  return `<picture><source srcset="${img.webp}" type="image/webp"><img${ident} src="${img.src}" alt="${esc(img.alt)}" width="1400" height="933"></picture>`;
}

function currentExercise() {
  if (!state.messages || !state.messages.length) return null;
  for (let i = state.messages.length - 1; i >= 0; i--) {
    if (state.messages[i].exercise) return state.messages[i].exercise;
  }
  return null;
}

function currentSceneKey() {
  const ex = currentExercise();
  if (ex) {
    const item = ex.kind === "gap" ? El[ex.index] : Oa[ex.index];
    if (item && item.image) return item.image;
  }
  for (let i = state.messages.length - 1; i >= 0; i--) {
    const imgs = state.messages[i].images;
    if (imgs && imgs.length) return imgs[imgs.length - 1];
  }
  return state.shown[state.shown.length - 1] || (state.level ? "interrogation" : null);
}

function revealImages(keys) {
  if (!keys) return;
  keys.forEach(k => { if (k && !state.shown.includes(k)) state.shown.push(k); });
}

function markDone(n) {
  if (!state.doneLevels.includes(n)) state.doneLevels.push(n);
}

function mergeCaseFacts() {
  if (!state.game || !state.game.facts) return;
  Object.keys(state.game.facts).forEach(id => {
    const st = state.game.facts[id];
    const prev = state.caseFacts[id];
    if (st === "confirmed" || (st === "heard" && prev !== "confirmed")) state.caseFacts[id] = st;
  });
}

function confirmedCount(source) {
  const facts = source || state.caseFacts;
  return Al.filter(u => facts[u.id] === "confirmed").length;
}

function isLevelComplete(n, game) {
  const g = game || state.game;
  if (!g) return state.doneLevels.includes(n);
  if (n === 1) return g.l1 >= El.length;
  if (n === 2) return g.l2 >= Oa.length;
  if (n === 3) return Al.every(u => g.facts[u.id] === "confirmed");
  if (n === 4) return !!g.solved;
  return false;
}

function startLevel(n, force) {
  if (!force && state.level === n && state.game) {
    if (!confirm("Начать этот уровень заново? Прогресс этой сессии сотрётся.")) return;
  }
  state.level = n;
  state.game = rg(n);
  state.messages = og(n);
  state.shown = [];
  if (n !== 3) state.l3Celebrated = false;
  state.messages.forEach(m => revealImages(m.images));
  const ex0 = currentExercise();
  if (ex0) {
    const item0 = ex0.kind === "gap" ? El[ex0.index] : Oa[ex0.index];
    if (item0 && item0.image) revealImages([item0.image]);
  }
  save();
  render();
  document.getElementById("interrogation").scrollIntoView({ behavior: "smooth", block: "start" });
}

function pushYou(text) {
  state.messages.push({ from: "you", text, tone: "you" });
}

function applyTurn(text) {
  const result = vg(state.game, text, true);
  state.game = result.next;
  result.replies.forEach(rep => {
    state.messages.push(rep);
    revealImages(rep.images);
    if (rep.exercise && (rep.exercise.kind === "gap" ? El[rep.exercise.index] : Oa[rep.exercise.index])) {
      const item = rep.exercise.kind === "gap" ? El[rep.exercise.index] : Oa[rep.exercise.index];
      revealImages([item.image]);
    }
  });
  mergeCaseFacts();
  if (state.level && isLevelComplete(state.level)) markDone(state.level);
  if (state.level === 3 && isLevelComplete(3) && !state.l3Celebrated) {
    state.l3Celebrated = true;
    state.messages.push({
      from: "system",
      text: "Excellent — all six facts are confirmed. Open Level 4 to make Alex confirm his whole alibi, then write your final report and verdict."
    });
  }
  save();
}

function sendText(raw) {
  const text = String(raw || "").trim();
  if (!text || !state.game || busy) return;
  if (isLevelComplete(state.level) && state.level !== 3 && state.level !== 4) return;
  if (state.level === 4 && state.game.solved) return;
  if (state.level === 3 && isLevelComplete(3)) return;
  busy = true;
  pushYou(text);
  render();
  window.setTimeout(() => {
    applyTurn(text);
    busy = false;
    save();
    render();
  }, 280);
}

function onGap(word) {
  sendText(word);
}

function nextBar(fromLevel) {
  if (fromLevel < 4) {
    return `<div class="next-bar"><button type="button" class="btn btn-amber" data-start="${fromLevel + 1}">Дальше: Level ${fromLevel + 1}</button><a class="btn" href="#ending">К финалу</a></div>`;
  }
  return `<div class="next-bar"><a class="btn btn-amber" href="#ending">К финалу: вердикт</a></div>`;
}

function renderCase() {
  const facts = document.getElementById("case-facts");
  facts.innerHTML = K0.map(([k, v]) => `<li><span class="k">${esc(k)}</span><span>${esc(v)}</span></li>`).join("");
  document.getElementById("case-rules").innerHTML = J0.map(r =>
    `<div class="rule"><b>${esc(r.n)}</b><div><h3>${esc(r.title)}</h3><p>${esc(r.body)}</p></div></div>`
  ).join("");
}

function renderStaticSupport() {
  document.getElementById("word-bank").innerHTML = WORDS.map(w =>
    `<li><strong>${esc(w.en)}</strong><span class="gloss">${esc(w.ru)}</span></li>`
  ).join("");
  document.getElementById("mistakes-list").innerHTML = MISTAKES.map(([bad, good]) =>
    `<li><p class="bad"><span class="mark-bad">✗</span> ${esc(bad)}</p><p class="good"><span class="mark-good">✓</span> ${esc(good)}</p></li>`
  ).join("");
}

function renderLevels() {
  const done = state.doneLevels.length;
  document.getElementById("levels-progress").textContent = `Уровни: ${done} / 4 готовы`;
  document.getElementById("level-cards").innerHTML = Fu.map(lv => `
    <article class="level-card${state.level === lv.n ? " is-on" : ""}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem">
        <span class="n">${lv.n}</span>
        <span class="tag">${esc(lv.tag)}</span>
      </div>
      <div class="dots" aria-label="Difficulty ${lv.n} of 4" aria-hidden="true">${[1,2,3,4].map(d => `<div class="${d <= lv.n ? "on" : ""}"></div>`).join("")}</div>
      <h3>${esc(lv.title)}${state.doneLevels.includes(lv.n) ? ' <span class="done-tag">готово</span>' : ""}</h3>
      <p>${esc(lv.description)}</p>
      <button type="button" class="${state.level === lv.n ? "btn btn-string" : "btn btn-ink"}" data-start="${lv.n}">${state.level === lv.n ? "Начать уровень заново" : "Start Level " + lv.n}</button>
    </article>
  `).join("");
}

function renderScene() {
  const frame = document.getElementById("scene-frame");
  const key = currentSceneKey();
  if (!key || !Fe[key] || isLevelComplete(state.level) && (state.level === 1 || state.level === 2)) {
    // still show last scene after complete
  }
  if (!key || !Fe[key]) { frame.hidden = true; frame.innerHTML = ""; return; }
  const img = Fe[key];
  frame.hidden = false;
  frame.classList.toggle("portrait-scene", img.pos === "top");
  frame.innerHTML = `${picture(key, "img-scene")}<figcaption>${esc(img.caption)}</figcaption>`;
}

function renderLog() {
  const log = document.getElementById("chat-log");
  if (!state.level) {
    log.innerHTML = `<div class="idle"><strong>Алекс ждёт за столом.</strong> Выбери любой уровень выше — лучше начать с Level 1. Все уровни открыты.</div>`;
    return;
  }
  log.innerHTML = state.messages.map(m => {
    const who = m.from === "you" ? "You" : m.from === "system" ? "Case file" : m.from === "teacher" ? "Hint" : "Alex";
    const cls = ["msg", m.from, m.tone || ""].filter(Boolean).join(" ");
    let body = `<p>${highlightWhenWhile(m.text)}</p>`;
    if (m.exercise) {
      const item = m.exercise.kind === "gap" ? El[m.exercise.index] : Oa[m.exercise.index];
      const label = m.exercise.kind === "gap" ? item.text : item.wrong;
      body += `<div class="exercise" data-ex="${m.exercise.kind}"><p>${highlightWhenWhile(label)}</p><p style="margin-top:.35rem;color:var(--muted);font-size:.8rem">${m.exercise.index + 1} / ${m.exercise.total}</p></div>`;
    }
    return `<article class="${cls}"><p class="who">${who}</p><div class="bubble">${body}</div></article>`;
  }).join("");
  log.scrollTop = log.scrollHeight;
}

function lastWhy() {
  for (let i = state.messages.length - 1; i >= 0; i--) {
    const m = state.messages[i];
    if (m.from === "teacher") return m.text;
    if (m.from === "you" || m.from === "system" || (m.from === "alex" && m.tone === "confirm")) break;
  }
  return "";
}

function renderForm() {
  const box = document.getElementById("chat-form");
  const ex = currentExercise();
  const waiting = !state.level || !state.game;
  if (waiting) {
    box.innerHTML = `<div class="next-bar"><button type="button" class="btn btn-amber" data-start="1">Начать Level 1</button></div><p class="hint-line">Или выбери любой другой уровень выше. Все четыре открыты.</p>`;
    return;
  }
  if (isLevelComplete(state.level)) {
    box.innerHTML = nextBar(state.level);
    return;
  }
  let tools = "";
  if (state.level === 1 && ex && ex.kind === "gap") {
    tools += `<div class="gap-btns">${["when","while"].map(w => `<button type="button" data-gap="${w}">${w}</button>`).join("")}</div>`;
  }
  if (state.level === 3 || state.level === 4) {
    tools += `<div class="starters">${L0.map(s => `<button type="button" data-starter="${esc(s)}">${esc(s.trim())}…</button>`).join("")}</div>`;
  }
  const showComposer = state.level !== 1;
  const ph = state.level === 2 ? "Write Alex's sentence again, correctly…"
    : state.level === 3 ? "Ask a question with when or while, or say a fact back…"
    : "Ask a question, or say part of the timeline…";
  if (showComposer) {
    tools += `<form class="composer" id="say-form" autocomplete="off">
      <label class="sr-only" for="say-input" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Your sentence</label>
      <input id="say-input" name="say" type="text" maxlength="400" placeholder="${esc(ph)}" ${busy ? "disabled" : ""} />
      <button class="send" type="submit" ${busy ? "disabled" : ""} aria-label="Send">➜</button>
    </form>`;
  }
  const why = lastWhy();
  const whyBox = why ? `<p class="why-now"><strong>Why.</strong> ${esc(why)}</p>` : "";
  tools += `${whyBox}<p class="hint-line">Alex only answers sentences that use <span class="hl">when</span> or <span class="hl">while</span> correctly.</p>`;
  box.innerHTML = tools;
}

function nervesClass(n) { return n > 66 ? "sweating" : n > 40 ? "uneasy" : "calm"; }
function nervesLabel(n) { return n > 66 ? "Sweating" : n > 40 ? "Uneasy" : "Calm"; }

function renderSidebar() {
  const side = document.getElementById("sidebar");
  const g = state.game;
  const n = g ? g.nerves : 20;
  const confirmed = g ? Al.filter(u => g.facts[u.id] === "confirmed").length : 0;
  const lv = state.level;
  let mid = "";
  if (lv === 1 || lv === 2) {
    const arr = lv === 1 ? El : Oa;
    const score = lv === 1 ? (g ? g.l1 : 0) : (g ? g.l2 : 0);
    mid = `<section class="side-card">
      <header><strong>${lv === 1 ? "Sentences" : "Corrections"}</strong><span id="score-${lv === 1 ? "l1" : "l2"}">${score} / ${arr.length}</span></header>
      <ol class="pips progress-pips">${arr.map((_, i) => `<li class="${i < score ? "done" : i === score ? "now" : ""}">${i < score ? "✓" : i + 1}</li>`).join("")}</ol>
    </section>`;
  } else {
    mid = `<section class="side-card">
      <header><strong>Timeline</strong><span id="score-timeline">${confirmed} / 6 confirmed</span></header>
      <ol class="timeline">${Al.map(u => {
        const st = g ? (g.facts[u.id] || "locked") : "locked";
        const label = st === "locked" ? "? ? ?" : u.label;
        const time = u.time && st !== "locked" ? `<span class="time">${u.time}</span>` : "";
        const sent = st === "confirmed" ? `<p class="sent">${esc(u.sentence)}</p>` : (st === "heard" ? `<p class="hint">Mentioned · now say it back with when/while</p>` : "");
        return `<li class="${st}"><div class="lab"><span>${esc(label)}</span>${time}</div>${sent}</li>`;
      }).join("")}</ol>
    </section>`;
  }
  const ev = `<section class="side-card">
    <header><strong>Evidence</strong><span id="score-evidence">${state.shown.length} / 6</span></header>
    <div class="ev-grid">${X0.map(k => {
      const open = state.shown.includes(k);
      return `<button type="button" data-open="${k}" ${open ? "" : "disabled"} aria-label="${open ? esc(Fe[k].caption) : "Locked evidence"}" class="${open ? "" : "is-locked"}">
        ${picture(k)}
        ${open ? "" : `<span class="lock" aria-hidden="true">🔒</span>`}
      </button>`;
    }).join("")}</div>
  </section>`;
  const tools = `<section class="side-card">
    <header><strong>Rule reminder</strong></header>
    <div class="rule-mini">
      <p><strong>when</strong> + past simple — a short action or an exact moment.</p>
      <p><strong>while</strong> + was/were + -ing — a longer action or two actions at the same time.</p>
      <p><a href="#grammar">When vs while</a> · <a href="#words">Словарь</a> · <a href="#ending">Финал</a></p>
    </div>
  </section>`;
  side.innerHTML = `
    <section class="side-card">
      <div class="suspect">
        <button type="button" data-open="portrait" aria-label="View Alex's portrait" style="border:0;background:none;padding:0">${picture("portrait")}</button>
        <div style="flex:1">
          <p class="eyebrow">Suspect</p>
          <h3>Alex</h3>
          <p>${lv ? "Level " + lv + " session" : "Выбери уровень, чтобы начать"}</p>
        </div>
        ${g && g.solved ? `<span class="cleared">Cleared</span>` : ""}
      </div>
      <div class="nerves">
        <div class="nerves-row"><span>Nerves</span><span>${nervesLabel(n)}</span></div>
        <div class="meter" role="meter" aria-valuenow="${n}" aria-valuemin="0" aria-valuemax="100" aria-label="Alex's nerves">
          <div class="meter-fill ${nervesClass(n)}" style="width:${n}%"></div>
        </div>
      </div>
    </section>
    ${mid}${ev}${tools}`;
}

function renderHeaderBits() {
  const lv = Fu.find(x => x.n === state.level);
  document.getElementById("session-label").textContent = lv ? "Level " + lv.n + " · " + lv.title : "No session yet";
  document.getElementById("task-line").textContent = lv
    ? lv.task
    : "Выбери любой из четырёх уровней. Можно не заканчивать один, чтобы открыть следующий.";
}

function factStatus(id) {
  if (state.game && state.game.facts && state.game.facts[id]) return state.game.facts[id];
  return state.caseFacts[id] || "locked";
}

function renderClosed() {
  const n = Al.filter(u => factStatus(u.id) === "confirmed").length;
  const pending = n < 6;
  const stamp = pending ? "In progress" : "Case closed";
  const lines = Al.map(u => {
    const st = factStatus(u.id);
    const label = st === "locked" ? "? ? ?" : u.label;
    const time = u.time && st !== "locked" ? `<span class="time">${u.time}</span>` : "";
    const sent = st === "confirmed" ? `<p class="sent">${esc(u.sentence)}</p>` : (st === "heard" ? `<p class="hint">Mentioned, not yet confirmed</p>` : `<p class="hint">Not confirmed yet</p>`);
    return `<li class="${st}"><div class="lab"><span>${esc(label)}</span>${time}</div>${sent}</li>`;
  }).join("");
  const note = pending
    ? `<p class="note-gap">Некоторые факты ещё не подтверждены (${n} / 6). Можно вынести вердикт сейчас или сначала собрать улики на допросе.</p>`
    : `<p class="note-gap">Все шесть фактов подтверждены. Сравни время ограбления (15:00) с таймлайном Алекса (14:40–15:25) и вынеси вердикт.</p>`;
  document.getElementById("closed-card").className = "closed-card" + (pending ? " pending" : "");
  document.getElementById("closed-card").innerHTML = `
    <span class="big-stamp">${stamp}</span>
    <h3>Official timeline</h3>
    <p>Robbery: <strong>15:00</strong> at the jewelry store. Alex’s story: <strong>14:40–15:25</strong>.</p>
    <ol class="timeline">${lines}</ol>
    <p class="case-code" id="case-code">${CASE_CODE}</p>
    ${note}
  `;
}

function renderReflection() {
  document.getElementById("reflect-list").innerHTML = REFLECT.map(item => `
    <li>
      <label for="${item.id}">${esc(item.prompt)}</label>
      <textarea id="${item.id}" data-reflect="${item.id}" rows="2" maxlength="400" placeholder="Write your answer here.">${esc(state.reflection[item.id] || "")}</textarea>
    </li>
  `).join("");
}

function verdictFeedback() {
  const n = Al.filter(u => factStatus(u.id) === "confirmed").length;
  const choice = state.verdict.choice;
  const because = (state.verdict.because || "").trim();
  const picks = state.verdict.facts || [];
  const hasWW = /\bwhen\b|\bwhile\b/i.test(because);
  const bits = [];
  if (picks.length < 2) bits.push("Choose at least two facts from the timeline to support your verdict.");
  if (!because) bits.push("Write a because sentence.");
  else if (!hasWW) bits.push("Try to use when or while in your because sentence.");
  if (n < 6) bits.push("Note: some timeline facts are still unconfirmed.");
  bits.push("The robbery was at 15:00. Alex says he arrived at the café at 14:40 and got home at 15:25. If that is true, he was not in the jewelry store at 15:00 — he may already have been walking home in the rain.");
  bits.push("Emma the waitress could confirm that he paid the bill and was in the café. The phone call with a friend could also be checked.");
  bits.push("There are still gaps: we do not have an exact time for the bill or for the moment he left. “While I was walking home” covers 15:00 only if he had already left. We have his story and possible witnesses, not full proof.");
  bits.push("The times in his story can fit an alibi, but a careful detective still checks Emma and the phone call. Your verdict is yours — as long as you used the evidence.");
  if (choice === "guilty") bits.push("You chose guilty. That can be reasonable if you think the gaps are too large, or that we only have his word.");
  if (choice === "not-guilty") bits.push("You chose not guilty. The 14:40–15:25 story can support his alibi, especially if Emma and the friend confirm it.");
  if (choice === "not-sure") bits.push("You chose not sure yet. That is a fair detective’s answer when some facts are missing or still need to be checked.");
  return bits;
}

function renderVerdict() {
  const v = state.verdict;
  const choices = [
    ["not-guilty", "Not guilty"],
    ["guilty", "Guilty"],
    ["not-sure", "Not sure yet"]
  ];
  const facts = Al.map(u => {
    const st = factStatus(u.id);
    const checked = v.facts.includes(u.id) ? " checked" : "";
    const extra = u.time ? ` (${u.time})` : "";
    const label = st === "locked" ? u.label + extra + " — not confirmed yet" : u.label + extra;
    return `<li><label><input type="checkbox" data-vfact="${u.id}"${checked} /><span>${esc(label)}</span></label></li>`;
  }).join("");
  let fb = "";
  if (v.submitted) {
    fb = `<div class="feedback" id="verdict-feedback">${verdictFeedback().map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
  }
  document.getElementById("verdict-card").innerHTML = `
    <h3>Your verdict</h3>
    <p>Is Alex guilty or not? Choose one, tick 2–3 facts that support your idea, and write a because sentence with when or while.</p>
    <div class="choice-row" role="group" aria-label="Verdict">
      ${choices.map(([id, lab]) => `<button type="button" data-verdict="${id}" class="${v.choice === id ? "is-on" : ""}">${lab}</button>`).join("")}
    </div>
    <p>Supporting facts</p>
    <ul class="fact-picks">${facts}</ul>
    <label for="verdict-because">Because… (use when or while)</label>
    <textarea id="verdict-because" rows="3" maxlength="400" placeholder="I think Alex is … because when / while …">${esc(v.because || "")}</textarea>
    <p style="margin-top:.8rem"><button type="button" class="btn btn-amber" id="verdict-submit">Save my verdict</button></p>
    ${fb}
  `;
}

function render() {
  renderCase();
  renderStaticSupport();
  renderLevels();
  renderHeaderBits();
  renderScene();
  renderLog();
  renderForm();
  renderSidebar();
  renderClosed();
  renderReflection();
  renderVerdict();
}

function openLightbox(key) {
  const img = Fe[key];
  if (!img) return;
  if (!state.shown.includes(key)) {
    if (key !== "portrait" && key !== "interrogation") return;
  }
  lightboxKey = key;
  const box = document.getElementById("lightbox");
  const el = document.getElementById("lightbox-img");
  el.src = img.src;
  el.alt = img.alt;
  document.getElementById("lightbox-cap").textContent = img.caption;
  box.hidden = false;
  document.getElementById("lightbox-close").focus();
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  lightboxKey = null;
}

function closeNav() {
  document.getElementById("site-header").classList.remove("is-open");
  document.getElementById("nav-toggle").setAttribute("aria-expanded", "false");
}

document.getElementById("nav-toggle").addEventListener("click", () => {
  const header = document.getElementById("site-header");
  const open = !header.classList.contains("is-open");
  header.classList.toggle("is-open", open);
  document.getElementById("nav-toggle").setAttribute("aria-expanded", open ? "true" : "false");
});
document.getElementById("site-nav").addEventListener("click", ev => {
  if (ev.target.closest("a")) closeNav();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  if (!confirm(RESET_MSG)) return;
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  busy = false;
  closeLightbox();
  closeNav();
  save();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("click", ev => {
  const start = ev.target.closest("[data-start]");
  if (start) { startLevel(Number(start.getAttribute("data-start"))); closeNav(); return; }
  const open = ev.target.closest("[data-open]");
  if (open && !open.disabled) { openLightbox(open.getAttribute("data-open")); return; }
  const gap = ev.target.closest("[data-gap]");
  if (gap) { onGap(gap.getAttribute("data-gap")); return; }
  const st = ev.target.closest("[data-starter]");
  if (st) {
    const input = document.getElementById("say-input");
    if (input) { input.value = st.getAttribute("data-starter"); input.focus(); }
    return;
  }
  const vbtn = ev.target.closest("[data-verdict]");
  if (vbtn) {
    state.verdict.choice = vbtn.getAttribute("data-verdict");
    save();
    renderVerdict();
    return;
  }
  if (ev.target.closest("#verdict-submit")) {
    const area = document.getElementById("verdict-because");
    if (area) state.verdict.because = area.value;
    state.verdict.submitted = true;
    save();
    renderVerdict();
    const fb = document.getElementById("verdict-feedback");
    if (fb) fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

document.addEventListener("change", ev => {
  const fact = ev.target.closest("[data-vfact]");
  if (fact) {
    const id = fact.getAttribute("data-vfact");
    const set = new Set(state.verdict.facts);
    if (fact.checked) set.add(id); else set.delete(id);
    state.verdict.facts = [...set];
    save();
  }
});

document.addEventListener("input", ev => {
  const ref = ev.target.closest("[data-reflect]");
  if (ref) {
    state.reflection[ref.getAttribute("data-reflect")] = ref.value;
    save();
    return;
  }
  if (ev.target.id === "verdict-because") {
    state.verdict.because = ev.target.value;
    save();
  }
});

document.addEventListener("submit", ev => {
  if (ev.target.id !== "say-form") return;
  ev.preventDefault();
  const input = document.getElementById("say-input");
  sendText(input ? input.value : "");
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", ev => {
  if (ev.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", ev => {
  if (ev.key === "Escape" && !document.getElementById("lightbox").hidden) closeLightbox();
});

if (!state.level) state.shown = [];

render();
save();

window.__qa = {
  STORAGE_KEY,
  startLevel,
  sendText,
  getState: () => state,
  markDone,
  El, Oa, Al, Fu, CASE_CODE, REFLECT
};
