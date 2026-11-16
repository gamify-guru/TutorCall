
    /* ====================================================
       DATA AND LESSON CONFIGURATION
       ==================================================== */
    const VOCABULARY = [
      { id: "museum", word: "museum", ipa: "/mjuːˈziː.əm/", icon: "🏛️", def: "A building where historical, artistic, or scientific objects are kept and shown.", func: "keeping and showing historical objects", ex: "We went to the history museum to see prehistoric tools." },
      { id: "history", word: "history", ipa: "/ˈhɪs.tər.i/", icon: "📜", def: "The study of past events and ancient civilizations.", func: "learning about how people lived long ago", ex: "Prehistory is the time before written history." },
      { id: "fire", word: "fire", ipa: "/faɪər/", icon: "🔥", def: "Heat and light produced by burning wood or flint sparks.", func: "cooking food, giving light and keeping warm", ex: "Early humans made fire to stay warm in cold caves." },
      { id: "tool", word: "tool", ipa: "/tuːl/", icon: "🪓", def: "An instrument made to work with, shape materials, or build things.", func: "making objects, building and cutting wood", ex: "A flint hand-axe was an important prehistoric tool." },
      { id: "sculpture", word: "sculpture", ipa: "/ˈskʌlp.tʃər/", icon: "🗿", def: "A work of art carved from stone, rock, or clay.", func: "making art and honoring prehistoric people", ex: "The ancient stone head is an impressive sculpture." },
      { id: "necklace", word: "necklace", ipa: "/ˈnek.ləs/", icon: "📿", def: "A piece of jewellery worn around the neck.", func: "wearing around the neck as decoration", ex: "This golden necklace was for wearing at ancient ceremonies." },
      { id: "bowl", word: "bowl", ipa: "/bəʊl/", icon: "🥣", def: "A deep round dish used for holding food or soup.", func: "eating food and holding clean drinking water", ex: "They ate soup from a clay bowl." },
      { id: "knife", word: "knife", ipa: "/naɪf/", icon: "🗡️", def: "A sharp metal or stone blade used for cutting.", func: "cutting meat and preparing animal skins", ex: "He used a sharp knife to cut the meat." },
      { id: "coin", word: "coin", ipa: "/kɔɪn/", icon: "🪙", def: "A round piece of metal used as money.", func: "buying things and trading between tribes", ex: "They traded goods using a silver coin." },
      { id: "musical instrument", word: "musical instrument", ipa: "/ˈmjuː.zɪ.kəl ˈɪn.strə.mənt/", icon: "🥁", def: "An object used for making musical sounds and songs.", func: "playing music, songs and dancing", ex: "The bone flute was an ancient musical instrument." }
    ];


    const STORAGE_KEY = "tutorcall-unlabeled-artifacts-v1";
    const DEFAULT_NAME = "Junior Detective";

    function tcNorm(s) {
      return String(s || "")
        .toLowerCase()
        .replace(/[’‘`]/g, "'")
        .replace(/[.,!?;:"“”«»()/]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    function tcEq(a, b) { return tcNorm(a) === tcNorm(b); }
    function tcShuffle(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }
    function displayName() {
      const n = (state.detectiveName || "").trim();
      return n || DEFAULT_NAME;
    }
    function tcResetLesson() {
      if (confirm("Начать заново? Все ответы на этом устройстве сотрутся.")) {
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
        location.reload();
      }
    }

    const defaultState = {
      detectiveName: "",
      currentTab: "briefing",
      currentMission: 1,
      currentDictationMode: "unscramble",
      labelsRestored: 0,
      soundEnabled: true,
      timerSeconds: 45 * 60,
      timerRunning: false,
      restoredPlaques: {},
      m1Score: 0,
      m2Score: 0,
      m3Score: 0,
      m4Score: 0,
      quickFireIndex: 0,
      m1Order: null,
      m2Order: null,
      hwMatrixOrder: null,
      hwStoryOrder: null,
      m1Answers: {},
      m2Answers: {},
      m3Answers: {},
      m4Answers: {},
      dictUnscramble: {},
      dictMissing: {},
      dictSpell: {},
      qfInput: "",
      reportText: "",
      reportSubmitted: false,
      hwMatrixAnswers: {},
      hwStoryAnswers: {},
      hwDict: {},
      hwSentences: ""
    };

    let state = { ...defaultState };

    function loadState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          state = { ...defaultState, ...parsed };
          if (!state.restoredPlaques || typeof state.restoredPlaques !== "object") state.restoredPlaques = {};
          state.m1Answers = state.m1Answers || {};
          state.m2Answers = state.m2Answers || {};
          state.m3Answers = state.m3Answers || {};
          state.m4Answers = state.m4Answers || {};
          state.dictUnscramble = state.dictUnscramble || {};
          state.dictMissing = state.dictMissing || {};
          state.dictSpell = state.dictSpell || {};
          state.hwMatrixAnswers = state.hwMatrixAnswers || {};
          state.hwStoryAnswers = state.hwStoryAnswers || {};
          state.hwDict = state.hwDict || {};
        }
      } catch (e) { /* ignore corrupt storage */ }
    }
    loadState();

    function ensureShuffles() {
      if (!Array.isArray(state.m1Order) || state.m1Order.length !== M1_ITEMS.length) {
        state.m1Order = M1_ITEMS.map(item => tcShuffle(item.options.slice()));
      }
      if (!Array.isArray(state.m2Order) || state.m2Order.length !== M2_ITEMS.length) {
        state.m2Order = M2_ITEMS.map(item => tcShuffle(item.options.slice()));
      }
      if (!Array.isArray(state.hwMatrixOrder) || state.hwMatrixOrder.length !== HW_MATRIX.length) {
        state.hwMatrixOrder = HW_MATRIX.map(item => tcShuffle(item.options.slice()));
      }
    }

    function m2CorrectText(item) {
      return (typeof item.correct === "number") ? item.options[item.correct] : item.correct;
    }

    /* ====================================================
       AUDIO SYNTHESIZER (Web Audio API - No external mp3s!)
       ==================================================== */
    let audioCtx = null;
    function getAudioContext() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playSound(type) {
      if (!state.soundEnabled) return;
      try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;

        if (type === 'correct') {
          // Cheerful high double chime
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();

          osc1.type = 'triangle';
          osc2.type = 'sine';

          osc1.frequency.setValueAtTime(523.25, now); // C5
          osc1.frequency.setValueAtTime(659.25, now + 0.1); // E5
          osc1.frequency.setValueAtTime(783.99, now + 0.2); // G5

          osc2.frequency.setValueAtTime(1046.50, now + 0.2); // C6

          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);

          osc1.start(now);
          osc2.start(now + 0.2);
          osc1.stop(now + 0.6);
          osc2.stop(now + 0.6);

        } else if (type === 'wrong') {
          // Low gentle thud
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(180, now);
          osc.frequency.linearRampToValueAtTime(120, now + 0.25);

          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.3);

        } else if (type === 'stamp') {
          // Heavy authentic detective stamp thud
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(90, now);
          osc.frequency.exponentialRampToValueAtTime(30, now + 0.2);

          gain.gain.setValueAtTime(0.3, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.25);

        } else if (type === 'fanfare') {
          // Celebration brass chime
          [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.12);
            gain.gain.setValueAtTime(0.18, now + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.5);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.12);
            osc.stop(now + i * 0.12 + 0.5);
          });
        }
      } catch(e) {
        console.log("Audio not supported or interaction required");
      }
    }

    function toggleAudio() {
      state.soundEnabled = !state.soundEnabled;
      document.getElementById('audio-toggle').innerText = state.soundEnabled ? '🔊' : '🔇';
      saveState();
    
      saveState();
    }

    // Text to speech (Web Speech API)
    function speakText(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-GB'; // British English for Academy Stars
        utter.rate = 0.88; // comfortable learner speed
        window.speechSynthesis.speak(utter);
      }
    }

    /* ====================================================
       TAB AND MISSION NAVIGATION
       ==================================================== */
    function switchTab(tabId) {
      state.currentTab = tabId;
      
      const sections = ['briefing', 'hunt', 'dictation', 'report', 'homework'];
      sections.forEach(id => {
        const sec = document.getElementById(`section-${id}`);
        const nav = document.getElementById(`nav-${id}`);
        const mNav = document.getElementById(`m-nav-${id}`);
        
        if (id === tabId) {
          sec.classList.remove('hidden');
          if (nav) {
            nav.classList.add('bg-amber-900/50', 'text-amber-200', 'border-amber-600/40');
            nav.classList.remove('text-stone-400');
          }
          if (mNav) {
            mNav.classList.add('bg-amber-900/60', 'text-amber-200', 'border-amber-600/50');
            mNav.classList.remove('bg-[#221810]', 'text-stone-300');
          }
        } else {
          sec.classList.add('hidden');
          if (nav) {
            nav.classList.remove('bg-amber-900/50', 'text-amber-200', 'border-amber-600/40');
            nav.classList.add('text-stone-400');
          }
          if (mNav) {
            mNav.classList.remove('bg-amber-900/60', 'text-amber-200', 'border-amber-600/50');
            mNav.classList.add('bg-[#221810]', 'text-stone-300');
          }
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
      saveState();
    
      saveState();
    }

    function switchMission(missionNum) {
      state.currentMission = missionNum;
      for (let i = 1; i <= 4; i++) {
        const container = document.getElementById(`mission-container-${i}`);
        const tab = document.getElementById(`subtab-m${i}`);
        if (i === missionNum) {
          container.classList.remove('hidden');
          tab.classList.add('bg-amber-900/40', 'text-amber-200', 'border-amber-600/50');
          tab.classList.remove('bg-[#211810]', 'text-stone-400', 'border-stone-800');
        } else {
          container.classList.add('hidden');
          tab.classList.remove('bg-amber-900/40', 'text-amber-200', 'border-amber-600/50');
          tab.classList.add('bg-[#211810]', 'text-stone-400', 'border-stone-800');
        }
      }
    
      saveState();
    }

    /* ====================================================
       CASEBOOK MODAL HANDLERS
       ==================================================== */
    function openCasebookModal() {
      document.getElementById('casebook-modal').classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeCasebookModal() {
      document.getElementById('casebook-modal').classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    function setCasebookTab(tabKey) {
      const tabs = ['vocab', 'grammar', 'clues'];
      tabs.forEach(t => {
        const btn = document.getElementById(`cb-tab-${t}`);
        const content = document.getElementById(`cb-content-${t}`);
        if (t === tabKey) {
          btn.classList.add('bg-amber-600', 'text-amber-950', 'font-bold');
          btn.classList.remove('text-stone-400');
          content.classList.remove('hidden');
        } else {
          btn.classList.remove('bg-amber-600', 'text-amber-950', 'font-bold');
          btn.classList.add('text-stone-400');
          content.classList.add('hidden');
        }
      });
    }

    /* ====================================================
       INTERACTIVE CRIME SCENE HOTSPOTS
       ==================================================== */
    let currentInspected = null;

    function inspectArtifact(wordKey) {
      const item = VOCABULARY.find(v => v.id === wordKey);
      if (!item) return;

      currentInspected = item;
      const box = document.getElementById('quick-inspect-box');
      box.classList.remove('hidden');

      document.getElementById('quick-inspect-icon').innerText = item.icon;
      document.getElementById('quick-inspect-title').innerText = item.word.toUpperCase();
      document.getElementById('quick-inspect-desc').innerText = item.def;
      document.getElementById('quick-inspect-func').innerText = `What was it for? → It was for ${item.func}.`;

      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      playSound('correct');
      speakText(item.word);
    }

    function inspectFloorLabels() {
      alert("⚠️ Detective Alert: All 10 golden labels are scattered on the wooden floor! Advance to the Treasure Hunt to match each artifact with its real prehistoric name and function.");
      switchTab('hunt');
    }

    function closeQuickInspect() {
      document.getElementById('quick-inspect-box').classList.add('hidden');
    }

    function speakCurrentInspect() {
      if (currentInspected) speakText(currentInspected.word);
    }

    function proceedToTreasureHunt() {
      closeQuickInspect();
      switchTab('hunt');
    }

    function startMission() {
      playSound('correct');
      if (!state.timerRunning) {
        state.timerRunning = true;
        const btn = document.getElementById('timer-toggle-btn');
        if (btn) btn.innerText = '⏸';
        saveState();
      }
      switchTab('hunt');
    }

    function updateDetectiveName(name) {
      state.detectiveName = String(name || "").trim();
      const shown = displayName();
      const a = document.getElementById('report-officer-name');
      const b = document.getElementById('cert-det-name');
      if (a) a.innerText = shown;
      if (b) b.innerText = shown;
      saveState();
    }

    /* ====================================================
       RESTORED LABELS PEDESTAL & BADGE COUNTER
       ==================================================== */
    function restoreLabelPlaque(wordId) {
      if (!state.restoredPlaques[wordId]) {
        state.restoredPlaques[wordId] = true;
        state.labelsRestored = Object.keys(state.restoredPlaques).length;
        updateLabelCounts();
        triggerConfetti();
        playSound('fanfare');
        saveState();
      }
    }

    function updateLabelCounts() {
      const count = Object.keys(state.restoredPlaques).length;
      document.getElementById('label-score').innerText = `${count} / 10`;
      document.getElementById('hunt-score-badge').innerText = `${count} of 10`;
      document.getElementById('cert-labels-count').innerText = `${count} / 10`;

      if (count === 10) {
        document.getElementById('cert-status').innerText = "CASE SOLVED ✓";
        document.getElementById('cert-status').className = "text-emerald-400 font-bold";
        document.getElementById('stamp-indicator').innerText = "SOLVED & ARCHIVED";
        document.getElementById('stamp-indicator').className = "stamp-badge stamp-solved mb-1";
      }

      renderPlaquesGrid();
    }

    function renderPlaquesGrid() {
      const grid = document.getElementById('labels-pedestal-grid');
      grid.innerHTML = '';

      VOCABULARY.forEach(v => {
        const isRestored = !!state.restoredPlaques[v.id];
        const card = document.createElement('div');
        card.className = `p-3 rounded-xl border text-center transition duration-300 ${
          isRestored 
            ? 'museum-plate text-amber-200 border-amber-500 shadow-lg' 
            : 'bg-[#1a130e] text-stone-600 border-dashed border-stone-800'
        }`;
        
        card.innerHTML = `
          <div class="text-2xl mb-1">${isRestored ? v.icon : '❓'}</div>
          <div class="text-xs font-cinzel font-bold tracking-wide">${isRestored ? v.word : 'Missing'}</div>
          <div class="text-[10px] mt-0.5 ${isRestored ? 'text-amber-400 font-mono' : 'text-stone-600'}">
            ${isRestored ? 'Restored ✓' : 'Label detached'}
          </div>
        `;
        grid.appendChild(card);
      });
    }

    /* ====================================================
       MISSION 1: IDENTIFICATION (8 TASKS)
       ==================================================== */
    const M1_ITEMS = [
      {
        q: "Look at the right glass case. What is the large head carved from stone?",
        options: ["sculpture", "necklace", "bowl", "coin"],
        correct: "sculpture",
        targetWord: "sculpture"
      },
      {
        q: "In the case, what is the golden jewellery worn around the neck?",
        options: ["tool", "necklace", "knife", "musical instrument"],
        correct: "necklace",
        targetWord: "necklace"
      },
      {
        q: "What is the round clay container in the showcase used for eating and water?",
        options: ["bowl", "coin", "fire", "history"],
        correct: "bowl",
        targetWord: "bowl"
      },
      {
        q: "What is the sharp pointed flint object next to the bowl?",
        options: ["necklace", "knife", "museum", "sculpture"],
        correct: "knife",
        targetWord: "knife"
      },
      {
        q: "What are the small round metal discs used for trading?",
        options: ["coin", "bowl", "tool", "fire"],
        correct: "coin",
        targetWord: "coin"
      },
      {
        q: "In the left showcase, there is a drum and a flute. What are these?",
        options: ["sculpture", "tool", "musical instrument", "history"],
        correct: "musical instrument",
        targetWord: "musical instrument"
      },
      {
        q: "Early humans made this to keep warm and cook meat in caves. It was very hot.",
        options: ["fire", "necklace", "museum", "bowl"],
        correct: "fire",
        targetWord: "fire"
      },
      {
        q: "A prehistoric hunter used this stone axe to build shelters and work with wood.",
        options: ["coin", "tool", "necklace", "knife"],
        correct: "tool",
        targetWord: "tool"
      }
    ];

    function renderMission1() {
      const container = document.getElementById('m1-questions-grid');
      if (!container) return;
      container.innerHTML = '';
      ensureShuffles();

      M1_ITEMS.forEach((item, index) => {
        const card = document.createElement('div');
        card.id = `m1-card-${index}`;
        card.className = "bg-[#18110b] border border-stone-800 rounded-xl p-4 shadow-md space-y-3 transition";

        const solved = state.m1Answers[index] && tcEq(state.m1Answers[index], item.correct);
        const opts = (state.m1Order && state.m1Order[index]) ? state.m1Order[index] : item.options;
        let optionsHtml = '';
        opts.forEach(opt => {
          const safe = String(opt).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
          optionsHtml += `
            <button type="button" onclick="checkM1Answer(${index}, '${safe}')"
                    id="m1-btn-${index}-${String(opt).replace(/\\s+/g, '-')}"
                    class="w-full text-left px-3 py-2 rounded-lg bg-[#221810] hover:bg-[#2f2015] border border-amber-900/40 text-stone-200 text-xs font-semibold flex items-center justify-between transition">
              <span>${opt}</span>
              <span class="text-stone-500 font-mono text-[10px]">SELECT</span>
            </button>
          `;
        });

        card.innerHTML = `
          <div class="flex items-center justify-between text-xs border-b border-stone-800/80 pb-2">
            <span class="text-amber-400 font-mono font-bold">CASE CLUE #1.${index + 1}</span>
            <span id="m1-status-${index}" class="text-stone-500 font-mono text-[11px]">${solved ? 'SOLVED ✓' : 'Unsolved'}</span>
          </div>
          <p class="text-xs sm:text-sm text-stone-200 font-medium">${item.q}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            ${optionsHtml}
          </div>
          <div id="m1-feedback-${index}" class="text-xs font-semibold min-h-[1.25rem]">${solved ? '<span class="text-emerald-400">✓ Correct! That is the <strong>' + item.correct + '</strong>. Label restored!</span>' : ''}</div>
        `;
        if (solved) card.classList.add('border-emerald-600/50', 'bg-emerald-950/20');
        container.appendChild(card);
      });
    }

    function checkM1Answer(itemIndex, chosen) {
      const item = M1_ITEMS[itemIndex];
      const correct = item.correct;
      const targetWord = item.targetWord;
      const fb = document.getElementById(`m1-feedback-${itemIndex}`);
      const status = document.getElementById(`m1-status-${itemIndex}`);
      const card = document.getElementById(`m1-card-${itemIndex}`);

      if (tcEq(chosen, correct)) {
        fb.innerHTML = `<span class="text-emerald-400">✓ Correct! That is the <strong>${correct}</strong>. Label restored!</span>`;
        status.innerText = "SOLVED ✓";
        status.className = "text-emerald-400 font-mono text-[11px] font-bold";
        card.classList.add('border-emerald-600/50', 'bg-emerald-950/20');
        state.m1Answers[itemIndex] = correct;
        playSound('correct');
        restoreLabelPlaque(targetWord);
        updateSubmissionScores();
        saveState();
      } else {
        fb.innerHTML = `<span class="text-red-400">✗ Not quite. Look again or check the Detective Casebook.</span>`;
        playSound('wrong');
      }
    }

    /* ====================================================
       MISSION 2: WHAT WAS IT FOR? (8 TASKS)
       ==================================================== */
    const M2_ITEMS = [
      {
        object: "A prehistoric knife",
        options: [
          "It was for cutting meat and animal skins.",
          "It was for buying food at the shop.",
          "It was for playing songs at parties."
        ],
        correct: 0,
        targetWord: "knife"
      },
      {
        object: "A golden necklace",
        options: [
          "It was for cooking soup over fire.",
          "It was for wearing around the neck as jewellery.",
          "It was for carving sculptures from stone."
        ],
        correct: 1,
        targetWord: "necklace"
      },
      {
        object: "A clay bowl",
        options: [
          "It was for holding soup and drinking water.",
          "It was for playing music with hands.",
          "It was for cutting tall grass in fields."
        ],
        correct: 0,
        targetWord: "bowl"
      },
      {
        object: "A stone sculpture",
        options: [
          "It was for keeping warm during cold winter.",
          "It was an art object carved to honor people or gods.",
          "It was for trading with foreign merchants."
        ],
        correct: 1,
        targetWord: "sculpture"
      },
      {
        object: "A prehistoric musical instrument (drum/flute)",
        options: [
          "It was for cutting stone axes.",
          "It was for making music, dancing and ceremonies.",
          "It was for wearing around the waist."
        ],
        correct: 1,
        targetWord: "musical instrument"
      },
      {
        object: "Fire",
        options: [
          "It was for cooking food, keeping warm and scaring wild animals.",
          "It was for keeping coins safe.",
          "It was for writing history books."
        ],
        correct: 0,
        targetWord: "fire"
      },
      {
        object: "An ancient coin",
        options: [
          "It was for drinking cold water.",
          "It was for buying things and trading goods.",
          "It was for building stone shelters."
        ],
        correct: 1,
        targetWord: "coin"
      },
      {
        object: "A stone tool",
        options: [
          "It was for wearing as fine jewellery.",
          "It was for working, making objects and cutting wood.",
          "It was for playing musical notes."
        ],
        correct: 1,
        targetWord: "tool"
      }
    ];

    function renderMission2() {
      const container = document.getElementById('m2-questions-container');
      if (!container) return;
      container.innerHTML = '';
      ensureShuffles();

      M2_ITEMS.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = "bg-[#18110b] border border-stone-800 rounded-xl p-4 space-y-2 shadow-md";
        const correctText = m2CorrectText(item);
        const solved = state.m2Answers[index] && tcEq(state.m2Answers[index], correctText);
        const opts = (state.m2Order && state.m2Order[index]) ? state.m2Order[index] : item.options;

        let choicesHtml = '';
        opts.forEach((opt, optIndex) => {
          const safe = String(opt).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
          choicesHtml += `
            <button type="button" onclick="checkM2Answer(${index}, '${safe}')"
                    id="m2-btn-${index}-${optIndex}"
                    class="text-left w-full px-3 py-2 rounded-lg bg-[#221810] hover:bg-[#2c1f14] border border-amber-900/30 text-stone-200 text-xs transition">
              ${opt}
            </button>
          `;
        });

        row.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-amber-400 font-mono font-bold">ARTIFACT #${index + 1}: ${item.object.toUpperCase()}</span>
            <span id="m2-status-${index}" class="text-stone-500 font-mono text-[11px]">${solved ? 'MATCHED ✓' : 'Unanswered'}</span>
          </div>
          <p class="text-xs text-amber-200/90 font-medium">What was it for?</p>
          <div class="space-y-1.5 pt-1">
            ${choicesHtml}
          </div>
          <div id="m2-feedback-${index}" class="text-xs font-semibold min-h-[1.25rem]">${solved ? '<span class="text-emerald-400">✓ Excellent! Perfect function match.</span>' : ''}</div>
        `;
        container.appendChild(row);
      });
    }

    function checkM2Answer(index, chosenText) {
      const item = M2_ITEMS[index];
      const correctText = m2CorrectText(item);
      const fb = document.getElementById(`m2-feedback-${index}`);
      const status = document.getElementById(`m2-status-${index}`);

      if (tcEq(chosenText, correctText)) {
        fb.innerHTML = `<span class="text-emerald-400">✓ Excellent! Perfect function match.</span>`;
        status.innerText = "MATCHED ✓";
        status.className = "text-emerald-400 font-mono text-[11px] font-bold";
        state.m2Answers[index] = correctText;
        playSound('correct');
        restoreLabelPlaque(item.targetWord);
        updateSubmissionScores();
        saveState();
      } else {
        fb.innerHTML = `<span class="text-red-400">✗ That was not its true purpose in prehistory. Try another option!</span>`;
        playSound('wrong');
      }
    }

    /* ====================================================
       MISSION 3: TRUE OR FALSE (8 TASKS)
       ==================================================== */
    const M3_ITEMS = [
      {
        statement: "Prehistoric people kept soup in a sculpture.",
        isTrue: false,
        explanation: "False! A sculpture is an art object. They kept soup in a clay bowl.",
        targetWord: "sculpture"
      },
      {
        statement: "A gold necklace was made for wearing around the neck.",
        isTrue: true,
        explanation: "True! A necklace is jewellery worn around the neck.",
        targetWord: "necklace"
      },
      {
        statement: "Early humans made fire to cook food and stay warm in winter.",
        isTrue: true,
        explanation: "True! Fire provided heat, light, and cooking warmth.",
        targetWord: "fire"
      },
      {
        statement: "A prehistoric knife was used for playing musical songs.",
        isTrue: false,
        explanation: "False! A knife was for cutting meat. Musical instruments were for songs.",
        targetWord: "knife"
      },
      {
        statement: "An ancient coin was used for buying things and trading.",
        isTrue: true,
        explanation: "True! Coins were early metal money used for trade.",
        targetWord: "coin"
      },
      {
        statement: "A museum is a place where we only buy new clothes and shoes.",
        isTrue: false,
        explanation: "False! A museum is a place where historical objects and treasures are displayed.",
        targetWord: "museum"
      },
      {
        statement: "A flute and a drum are both musical instruments.",
        isTrue: true,
        explanation: "True! Drums and flutes are musical instruments.",
        targetWord: "musical instrument"
      },
      {
        statement: "History is the school subject where we study the past.",
        isTrue: true,
        explanation: "True! History is the study of events and people from the past.",
        targetWord: "history"
      }
    ];

    function renderMission3() {
      const container = document.getElementById('m3-questions-container');
      if (!container) return;
      container.innerHTML = '';

      M3_ITEMS.forEach((item, index) => {
        const card = document.createElement('div');
        card.id = `m3-card-${index}`;
        card.className = "bg-[#18110b] border border-stone-800 rounded-xl p-4 shadow-md space-y-3";
        const solved = Object.prototype.hasOwnProperty.call(state.m3Answers, index) || Object.prototype.hasOwnProperty.call(state.m3Answers, String(index));
        const saved = solved ? state.m3Answers[index] ?? state.m3Answers[String(index)] : null;
        const ok = saved !== null && saved === item.isTrue;

        card.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-amber-400 font-mono font-bold">STATEMENT #3.${index + 1}</span>
            <span id="m3-status-${index}" class="text-stone-500 font-mono text-[11px]">${ok ? 'VERIFIED ✓' : 'Unanswered'}</span>
          </div>
          <p class="text-xs sm:text-sm text-stone-200 font-medium">${item.statement}</p>
          <div class="flex gap-2">
            <button type="button" onclick="checkM3Answer(${index}, true)" class="px-4 py-1.5 rounded-lg bg-[#221810] border border-emerald-700/40 text-emerald-200 text-xs font-bold hover:bg-emerald-950/40 transition">TRUE</button>
            <button type="button" onclick="checkM3Answer(${index}, false)" class="px-4 py-1.5 rounded-lg bg-[#221810] border border-red-700/40 text-red-200 text-xs font-bold hover:bg-red-950/40 transition">FALSE</button>
          </div>
          <div id="m3-feedback-${index}" class="text-xs font-semibold min-h-[1.25rem]">${ok ? '<span class="text-emerald-400">✓ ' + item.explanation + '</span>' : ''}</div>
        `;
        container.appendChild(card);
      });
    }

    function checkM3Answer(index, userChoice, isTrue, targetWord) {
      const fb = document.getElementById(`m3-feedback-${index}`);
      const status = document.getElementById(`m3-status-${index}`);
      const item = M3_ITEMS[index];
      const expected = item.isTrue;

      if (userChoice === expected) {
        fb.innerHTML = `<span class="text-emerald-400">✓ ${item.explanation}</span>`;
        status.innerText = "VERIFIED ✓";
        status.className = "text-emerald-400 font-mono text-[11px] font-bold";
        state.m3Answers[index] = expected;
        playSound('correct');
        restoreLabelPlaque(item.targetWord || targetWord);
        updateSubmissionScores();
        saveState();
      } else {
        fb.innerHTML = `<span class="text-red-400">✗ Not quite. Read the statement again and think about the artifact's real use.</span>`;
        playSound('wrong');
      }
    }

    /* ====================================================
       MISSION 4: GAP-FILL (8 TASKS)
       ==================================================== */
    const M4_ITEMS = [
      {
        before: "We visited the national history",
        after: "to see how prehistoric people lived.",
        correct: "museum",
        targetWord: "museum"
      },
      {
        before: "In our school",
        after: "lesson, we learned about ancient civilisations.",
        correct: "history",
        targetWord: "history"
      },
      {
        before: "When night came, the tribe gathered around the hot",
        after: "to cook and sing.",
        correct: "fire",
        targetWord: "fire"
      },
      {
        before: "The hunter carved a sharp stone",
        after: "for building their shelter.",
        correct: "tool",
        targetWord: "tool"
      },
      {
        before: "The woman wore a beautiful gold",
        after: "around her neck.",
        correct: "necklace",
        targetWord: "necklace"
      },
      {
        before: "She poured clean water into a painted clay",
        after: "to drink from.",
        correct: "bowl",
        targetWord: "bowl"
      },
      {
        before: "The warrior used a sharp bronze",
        after: "to cut through thick leather.",
        correct: "knife",
        targetWord: "knife"
      },
      {
        before: "A drummer played an ancient",
        after: "made from hollow wood and animal skin.",
        correct: "musical instrument",
        targetWord: "musical instrument"
      }
    ];

    function renderMission4() {
      const container = document.getElementById('m4-questions-container');
      if (!container) return;
      container.innerHTML = '';

      M4_ITEMS.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = "bg-[#18110b] border border-stone-800 rounded-xl p-3.5 space-y-2";
        const saved = state.m4Answers[index] || state.m4Answers[String(index)] || '';
        const ok = saved && tcEq(saved, item.correct);
        row.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-amber-400 font-mono font-bold">LOG LINE #4.${index + 1}</span>
            <span id="m4-status-${index}" class="text-stone-500 font-mono text-[11px]">${ok ? 'LOGGED ✓' : 'Open'}</span>
          </div>
          <p class="text-xs sm:text-sm text-stone-200">
            ${item.before}
            <input type="text" id="m4-input-${index}" value="${String(saved).replace(/"/g, '&quot;')}" placeholder="type the word"
                   class="mx-1 bg-[#120c08] border border-amber-600/50 rounded px-2 py-1 text-amber-100 text-xs w-40 font-bold"
                   oninput="state.m4Answers[${index}] = this.value; saveState();" />
            ${item.after}
          </p>
          <div class="flex items-center gap-2">
            <button type="button" onclick="checkM4Answer(${index})" class="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded">Check</button>
            <div id="m4-feedback-${index}" class="text-xs font-semibold">${ok ? '<span class="text-emerald-400">✓ Perfect! Field log sentence verified.</span>' : ''}</div>
          </div>
        `;
        container.appendChild(row);
      });
    }

    function checkM4Answer(index) {
      const item = M4_ITEMS[index];
      const input = document.getElementById(`m4-input-${index}`);
      const val = input ? input.value : '';
      const fb = document.getElementById(`m4-feedback-${index}`);
      const status = document.getElementById(`m4-status-${index}`);
      state.m4Answers[index] = val;
      if (tcEq(val, item.correct)) {
        fb.innerHTML = `<span class="text-emerald-400">✓ Perfect! Field log sentence verified.</span>`;
        status.innerText = "LOGGED ✓";
        status.className = "text-emerald-400 font-mono text-[11px] font-bold";
        playSound('correct');
        restoreLabelPlaque(item.targetWord);
        updateSubmissionScores();
        saveState();
      } else {
        fb.innerHTML = `<span class="text-red-400">✗ That word does not fit here. Hint: check the word bank above!</span>`;
        playSound('wrong');
        saveState();
      }
    }

    function updateSubmissionScores() {
      // Calculate each mission solved count
      let m1 = 0, m2 = 0, m3 = 0, m4 = 0;
      for (let i = 0; i < 8; i++) {
        if (document.getElementById(`m1-status-${i}`)?.innerText.includes('✓')) m1++;
        if (document.getElementById(`m2-status-${i}`)?.innerText.includes('✓')) m2++;
        if (document.getElementById(`m3-status-${i}`)?.innerText.includes('✓')) m3++;
        if (document.getElementById(`m4-status-${i}`)?.innerText.includes('✓')) m4++;
      }
      document.getElementById('badge-m1').innerText = `${m1}/8`;
      document.getElementById('badge-m2').innerText = `${m2}/8`;
      document.getElementById('badge-m3').innerText = `${m3}/8`;
      document.getElementById('badge-m4').innerText = `${m4}/8`;
    }

    /* ====================================================
       SECTION 3: DICTATION PREPARATION MINI-GAMES
       ==================================================== */
    const DICTATION_WORDS = [
      { word: "sculpture", anagram: "P L U T S C U R E", clue: "Art object carved from stone or wood", icon: "🗿", pattern: "S _ _ L P _ _ R E" },
      { word: "necklace", anagram: "C E A K L E N S", clue: "Jewellery worn around the neck", icon: "📿", pattern: "N _ C K _ _ C E" },
      { word: "knife", anagram: "F I E K N", clue: "Sharp tool used for cutting meat", icon: "🗡️", pattern: "K _ _ F E" },
      { word: "bowl", anagram: "W O L B", clue: "Round dish for eating soup or water", icon: "🥣", pattern: "B _ _ L" },
      { word: "fire", anagram: "R I F E", clue: "Gives light, heat, and cooks food", icon: "🔥", pattern: "F _ R E" },
      { word: "tool", anagram: "L O T O", clue: "Hand instrument for working and making things", icon: "🪓", pattern: "T _ _ L" },
      { word: "coin", anagram: "I N O C", clue: "Small metal disc used for money and trade", icon: "🪙", pattern: "C _ _ N" },
      { word: "museum", anagram: "U M E U S M", clue: "Building where historical objects are preserved", icon: "🏛️", pattern: "M _ S _ U M" }
    ];

    function setDictationMode(mode) {
      state.currentDictationMode = mode;
      const modes = ['unscramble', 'firstletter', 'spell', 'quickfire'];
      modes.forEach(m => {
        const btn = document.getElementById(`dict-btn-${m}`);
        const container = document.getElementById(`dictation-mode-${m}`);
        if (m === mode) {
          btn.className = "dict-mode-btn px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-600 text-amber-950 transition";
          container.classList.remove('hidden');
        } else {
          btn.className = "dict-mode-btn px-3 py-1.5 text-xs font-bold rounded-lg text-stone-400 hover:text-amber-200 transition";
          container.classList.add('hidden');
        }
      });
      if (mode === 'quickfire') {
        renderQuickFireCard();
      }
    
      saveState();
    }

    function renderDictationModes() {
      // 1. Unscramble mode
      const unscrambleContainer = document.getElementById('dictation-mode-unscramble');
      unscrambleContainer.innerHTML = '';
      DICTATION_WORDS.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "bg-[#18110b] border border-stone-800 rounded-xl p-4 shadow-md space-y-3";
        card.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-amber-400 font-mono font-bold">UNSCRAMBLE #${index + 1}</span>
            <span class="text-xl">${item.icon}</span>
          </div>
          <div class="text-center py-2 px-3 bg-[#110c08] rounded-lg border border-amber-600/40 text-amber-300 font-mono text-base font-bold tracking-widest">
            ${item.anagram}
          </div>
          <p class="text-xs text-stone-300 italic">Clue: "${item.clue}"</p>
          <div class="flex gap-2">
            <input type="text" id="unscramble-input-${index}" placeholder="Type word..." 
                   class="flex-1 bg-[#221810] border border-amber-600/40 rounded-lg px-3 py-1.5 text-xs text-amber-100 font-mono uppercase focus:outline-none focus:border-amber-400"
                   onkeydown="if(event.key==='Enter') checkUnscramble(${index}, '${item.word}')" />
            <button onclick="checkUnscramble(${index}, '${item.word}')" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded-lg transition">
              Check
            </button>
            <button onclick="speakText('${item.word}')" class="p-1.5 rounded bg-stone-800 text-stone-300 hover:text-white text-xs" title="Listen">
              🔊
            </button>
          </div>
          <div id="unscramble-fb-${index}" class="text-xs font-semibold min-h-[1rem]"></div>
        `;
        unscrambleContainer.appendChild(card);
      });

      // 2. Missing letters mode
      const missingContainer = document.getElementById('dictation-mode-firstletter');
      missingContainer.innerHTML = '';
      DICTATION_WORDS.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "bg-[#18110b] border border-stone-800 rounded-xl p-4 shadow-md space-y-3";
        card.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-amber-400 font-mono font-bold">MISSING LETTERS #${index + 1}</span>
            <span class="text-xl">${item.icon}</span>
          </div>
          <div class="text-center py-2 px-3 bg-[#110c08] rounded-lg border border-amber-600/40 text-amber-200 font-mono text-lg font-bold tracking-widest">
            ${item.pattern}
          </div>
          <p class="text-xs text-stone-300 italic">Clue: "${item.clue}"</p>
          <div class="flex gap-2">
            <input type="text" id="missing-input-${index}" placeholder="Type full word..." 
                   class="flex-1 bg-[#221810] border border-amber-600/40 rounded-lg px-3 py-1.5 text-xs text-amber-100 font-mono lowercase focus:outline-none focus:border-amber-400"
                   onkeydown="if(event.key==='Enter') checkMissing(${index}, '${item.word}')" />
            <button onclick="checkMissing(${index}, '${item.word}')" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded-lg transition">
              Check
            </button>
            <button onclick="speakText('${item.word}')" class="p-1.5 rounded bg-stone-800 text-stone-300 hover:text-white text-xs">🔊</button>
          </div>
          <div id="missing-fb-${index}" class="text-xs font-semibold min-h-[1rem]"></div>
        `;
        missingContainer.appendChild(card);
      });

      // 3. Spell from Clue mode
      const spellContainer = document.getElementById('dictation-mode-spell');
      spellContainer.innerHTML = '';
      DICTATION_WORDS.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "bg-[#18110b] border border-stone-800 rounded-xl p-4 shadow-md space-y-3";
        card.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="text-amber-400 font-mono font-bold">SPELLING AUDIT #${index + 1}</span>
            <button onclick="speakText('${item.word}')" class="px-2 py-0.5 rounded bg-amber-950 border border-amber-700 text-amber-300 text-[11px] flex items-center gap-1">
              🔊 Hear Word
            </button>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-3xl">${item.icon}</div>
            <p class="text-xs text-stone-200 font-medium">"${item.clue}"</p>
          </div>
          <div class="flex gap-2">
            <input type="text" id="spell-input-${index}" placeholder="Spell word correctly..." 
                   class="flex-1 bg-[#221810] border border-amber-600/40 rounded-lg px-3 py-1.5 text-xs text-amber-100 font-mono lowercase focus:outline-none focus:border-amber-400"
                   onkeydown="if(event.key==='Enter') checkSpell(${index}, '${item.word}')" />
            <button onclick="checkSpell(${index}, '${item.word}')" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded-lg transition">
              Test
            </button>
          </div>
          <div id="spell-fb-${index}" class="text-xs font-semibold min-h-[1rem]"></div>
        `;
        spellContainer.appendChild(card);
      });
    }

    function checkUnscramble(index, correct) {
      const input = document.getElementById(`unscramble-input-${index}`);
      const fb = document.getElementById(`unscramble-fb-${index}`);
      const val = input ? input.value : '';
      state.dictUnscramble[index] = val;
      if (tcEq(val, correct)) {
        fb.innerHTML = `<span class="text-emerald-400">✓ Correct spelling: <strong>${correct}</strong></span>`;
        playSound('correct');
      } else {
        fb.innerHTML = `<span class="text-red-400">✗ Not quite. Re-check the letters!</span>`;
        playSound('wrong');
      }
      saveState();
    }

    function checkMissing(index, correct) {
      const input = document.getElementById(`missing-input-${index}`);
      const fb = document.getElementById(`missing-fb-${index}`);
      const val = input ? input.value : '';
      state.dictMissing[index] = val;
      if (tcEq(val, correct)) {
        fb.innerHTML = `<span class="text-emerald-400">✓ Correct word: <strong>${correct}</strong></span>`;
        playSound('correct');
      } else {
        fb.innerHTML = `<span class="text-red-400">✗ Incorrect. Look at the missing letter pattern!</span>`;
        playSound('wrong');
      }
      saveState();
    }

    function checkSpell(index, correct) {
      const input = document.getElementById(`spell-input-${index}`);
      const fb = document.getElementById(`spell-fb-${index}`);
      const val = input ? input.value : '';
      state.dictSpell[index] = val;
      if (tcEq(val, correct)) {
        fb.innerHTML = `<span class="text-emerald-400">✓ 100% Spelled correctly!</span>`;
        playSound('correct');
      } else {
        fb.innerHTML = `<span class="text-red-400">✗ Spelling error. Listen again and try once more.</span>`;
        playSound('wrong');
      }
      saveState();
    }

    // Quick Fire card mode logic
    function renderQuickFireCard() {
      const item = DICTATION_WORDS[state.quickFireIndex];
      document.getElementById('qf-current').innerText = state.quickFireIndex + 1;
      document.getElementById('qf-icon').innerText = item.icon;
      document.getElementById('qf-clue').innerText = `"${item.clue}"`;
      document.getElementById('qf-input').value = '';
      document.getElementById('qf-feedback').innerHTML = '';
      document.getElementById('qf-input').focus();
    }

    function checkQuickFireAnswer() {
      const item = DICTATION_WORDS[state.quickFireIndex];
      const input = document.getElementById('qf-input');
      const val = input ? input.value : '';
      const fb = document.getElementById('qf-feedback');
      state.qfInput = val;
      if (tcEq(val, item.word)) {
        fb.innerHTML = `<span class="text-emerald-400 text-sm">⚡ BULLSEYE! Spelled correctly: ${item.word}!</span>`;
        playSound('correct');
        saveState();
        setTimeout(() => { nextQuickFire(); }, 1100);
      } else {
        fb.innerHTML = `<span class="text-red-400 text-sm">✗ Try again! The word starts with '${item.word[0].toUpperCase()}'.</span>`;
        playSound('wrong');
        saveState();
      }
    }

    function nextQuickFire() {
      state.quickFireIndex = (state.quickFireIndex + 1) % DICTATION_WORDS.length;
      state.qfInput = '';
      renderQuickFireCard();
      saveState();
    }

    function prevQuickFire() {
      state.quickFireIndex = (state.quickFireIndex - 1 + DICTATION_WORDS.length) % DICTATION_WORDS.length;
      state.qfInput = '';
      renderQuickFireCard();
      saveState();
    }

    function speakQuickFireWord() {
      const item = DICTATION_WORDS[state.quickFireIndex];
      speakText(item.clue);
    }

    /* ====================================================
       SECTION 4: FINAL REPORT (DOSSIER BUILDER)
       ==================================================== */
    function renderReportChips() {
      const container = document.getElementById('report-chips-container');
      container.innerHTML = '';

      VOCABULARY.forEach(v => {
        const chip = document.createElement('span');
        chip.id = `chip-vocab-${v.id.replace(/\s+/g, '-')}`;
        chip.className = "px-2 py-0.5 rounded border border-stone-400/40 text-stone-500 font-mono text-[11px] transition";
        chip.innerText = v.word;
        container.appendChild(chip);
      });
    }

    function analyzeReportText() {
      const box = document.getElementById('final-report-text');
      const text = box ? box.value : '';
      state.reportText = text;
      let detectedCount = 0;

      VOCABULARY.forEach(v => {
        const chipId = `chip-vocab-${v.id.replace(/\\s+/g, '-')}`;
        const chip = document.getElementById(chipId);
        if (!chip) return;
        const tokens = tcNorm(text).split(' ').filter(Boolean);
        const wordTokens = tcNorm(v.word).split(' ').filter(Boolean);
        let found = false;
        if (wordTokens.length === 1) {
          found = tokens.includes(wordTokens[0]);
        } else {
          const hay = ' ' + tcNorm(text) + ' ';
          found = hay.includes(' ' + wordTokens.join(' ') + ' ');
        }
        if (found) {
          chip.className = "px-2 py-0.5 rounded border border-emerald-600 bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold";
          detectedCount++;
        } else {
          chip.className = "px-2 py-0.5 rounded border border-stone-400/40 text-stone-500 font-mono text-[11px]";
        }
      });

      const badge = document.getElementById('report-word-count-badge');
      if (badge) badge.innerText = `${detectedCount} / 10 words detected`;
      saveState();
    }

    function insertTemplateReport() {
      const starters = [
        "In the museum I found … and … .",
        "They are from prehistory.",
        "People used a … for …-ing.",
        "They also made … to … .",
        "A … helped them … ."
      ].join("\\n");
      const box = document.getElementById('final-report-text');
      if (!box) return;
      if (box.value.trim() && !confirm("Replace your report with sentence starters? Your current text will be lost.")) return;
      box.value = starters;
      state.reportText = box.value;
      analyzeReportText();
      saveState();
    }

    function submitFinalReport() {
      const text = (document.getElementById('final-report-text') || {}).value.trim();
      if (text.length < 30) {
        alert("Please write at least 3-4 sentences in your report before stamping the file!");
        return;
      }
      state.reportText = text;
      state.reportSubmitted = true;
      playSound('stamp');
      const stamp = document.getElementById('stamp-indicator');
      const status = document.getElementById('cert-status');
      if (stamp) {
        stamp.innerText = "OFFICIALLY ARCHIVED";
        stamp.className = "stamp-badge stamp-solved mb-1";
      }
      if (status) {
        status.innerText = "CASE SOLVED & CLOSED ✓";
        status.className = "text-emerald-400 font-bold";
      }
      triggerConfetti();
      saveState();
      alert(`Case closed! Your official report for ${displayName()} has been archived. Golden labels successfully secured!`);
    }

    function speakReport() {
      const text = (document.getElementById('final-report-text') || {}).value || '';
      if (text.trim()) speakText(text.trim());
    }

    function copyReport() {
      const text = document.getElementById('final-report-text').value.trim();
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        alert("Report text copied to clipboard!");
      });
    }

    function printCertificate() {
      window.print();
    }

    /* ====================================================
       SECTION 5: HOMEWORK MODULE
       ==================================================== */
    const HW_MATRIX = [
      {
        scenario: "1. An archaeologist unearths a rounded clay vessel with soup residue.",
        options: ["bowl", "coin", "fire"],
        correct: "bowl",
        functionHint: "Used for holding soup and drinking water"
      },
      {
        scenario: "2. Early humans rubbed dry sticks and flints together on cold winter nights.",
        options: ["fire", "necklace", "sculpture"],
        correct: "fire",
        functionHint: "Used for heat, light and cooking"
      },
      {
        scenario: "3. A royal tomb contains beads of gold and amber linked together.",
        options: ["tool", "necklace", "knife"],
        correct: "necklace",
        functionHint: "Used for wearing around the neck"
      },
      {
        scenario: "4. A heavy sharpened flint head tied with leather to a sturdy wooden handle.",
        options: ["tool", "coin", "museum"],
        correct: "tool",
        functionHint: "Used for working with wood and building shelters"
      },
      {
        scenario: "5. A carved limestone figure of an animal discovered in a cave.",
        options: ["sculpture", "bowl", "musical instrument"],
        correct: "sculpture",
        functionHint: "An art object carved from stone"
      },
      {
        scenario: "6. A hollow bird bone with five finger holes found beside a fireplace.",
        options: ["musical instrument", "knife", "history"],
        correct: "musical instrument",
        functionHint: "Used for playing songs and dancing"
      }
    ];

    function renderHomework() {
      const container = document.getElementById('hw-matrix-container');
      if (!container) return;
      container.innerHTML = '';
      ensureShuffles();

      HW_MATRIX.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = "bg-[#20160f] border border-stone-800 rounded-xl p-3.5 space-y-2";
        const opts = (state.hwMatrixOrder && state.hwMatrixOrder[index]) ? state.hwMatrixOrder[index] : item.options;
        const saved = state.hwMatrixAnswers[index] || state.hwMatrixAnswers[String(index)] || '';
        const ok = saved && tcEq(saved, item.correct);

        let optionsHtml = '<option value="">[Select artifact]</option>';
        opts.forEach(opt => {
          const sel = tcEq(saved, opt) ? ' selected' : '';
          optionsHtml += `<option value="${opt}"${sel}>${opt}</option>`;
        });

        row.innerHTML = `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span class="text-stone-200 font-medium">${item.scenario}</span>
            <div class="flex items-center gap-2">
              <select id="hw-matrix-sel-${index}" onchange="state.hwMatrixAnswers[${index}] = this.value; saveState();"
                      class="bg-[#120c08] border border-amber-600/50 rounded px-2.5 py-1 text-amber-200 text-xs font-mono font-bold focus:outline-none">
                ${optionsHtml}
              </select>
              <button type="button" onclick="checkHwMatrixItem(${index})" class="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-amber-950 font-bold text-xs rounded transition">
                Check
              </button>
            </div>
          </div>
          <div id="hw-matrix-fb-${index}" class="text-[11px] font-semibold text-stone-400">
            ${ok ? '<span class="text-emerald-400 font-bold">✓ Correct! Object identified as <strong>' + item.correct + '</strong>.</span>' : 'Function hint: ' + item.functionHint}
          </div>
        `;
        container.appendChild(row);
      });
    }

    function checkHwMatrixItem(index) {
      const item = HW_MATRIX[index];
      const sel = document.getElementById(`hw-matrix-sel-${index}`);
      const fb = document.getElementById(`hw-matrix-fb-${index}`);
      const chosen = sel ? sel.value : '';
      state.hwMatrixAnswers[index] = chosen;
      if (tcEq(chosen, item.correct)) {
        fb.innerHTML = `<span class="text-emerald-400 font-bold">✓ Correct! Object identified as <strong>${item.correct}</strong>.</span>`;
        playSound('correct');
      } else {
        fb.innerHTML = `<span class="text-red-400 font-bold">✗ Incorrect. Review the function hint and try another artifact.</span>`;
        playSound('wrong');
      }
      saveState();
    }

    function checkHomeworkStory() {
      const answers = {
        'hw-story-1': 'history',
        'hw-story-2': 'fire',
        'hw-story-3': 'bowl',
        'hw-story-4': 'knife',
        'hw-story-5': 'coin',
        'hw-story-6': 'musical instrument',
        'hw-story-7': 'museum'
      };

      let correctCount = 0;
      for (const [id, val] of Object.entries(answers)) {
        const el = document.getElementById(id);
        if (!el) continue;
        state.hwStoryAnswers[id] = el.value;
        if (tcEq(el.value, val)) {
          el.className = "bg-emerald-100 border border-emerald-600 text-emerald-900 rounded px-2 py-1 text-xs font-sans font-bold";
          correctCount++;
        } else {
          el.className = "bg-red-100 border border-red-600 text-red-900 rounded px-2 py-1 text-xs font-sans font-bold";
        }
      }

      const fb = document.getElementById('hw-story-feedback');
      if (correctCount === 7) {
        fb.innerHTML = `<span class="text-emerald-700">Outstanding! 7/7 story gaps solved perfectly!</span>`;
        playSound('fanfare');
      } else {
        fb.innerHTML = `<span class="text-amber-800">You scored ${correctCount} / 7. Check the highlighted red dropdowns and try again.</span>`;
        playSound('wrong');
      }
      saveState();
    }

    function checkSelfDictation() {
      const validWords = VOCABULARY.map(v => tcNorm(v.word));
      let matched = 0;
      const used = new Set();

      for (let i = 1; i <= 6; i++) {
        const input = document.getElementById(`hw-dict-${i}`);
        if (!input) continue;
        const val = input.value;
        state.hwDict[i] = val;
        const n = tcNorm(val);
        if (n && validWords.includes(n) && !used.has(n)) {
          input.className = "w-full bg-emerald-950 border border-emerald-500 rounded-lg px-3 py-1.5 text-xs text-emerald-200 font-bold";
          matched++;
          used.add(n);
        } else if (val.trim()) {
          input.className = "w-full bg-red-950 border border-red-500 rounded-lg px-3 py-1.5 text-xs text-red-200";
        }
      }

      const fb = document.getElementById('hw-dict-feedback');
      fb.innerText = `Result: ${matched} of 6 valid prehistoric vocabulary words written from memory!`;
      if (matched >= 5) playSound('correct');
      else playSound('wrong');
      saveState();
    }

    function saveHomeworkSentences() {
      const el = document.getElementById('hw-sentences-input');
      const val = el ? el.value.trim() : '';
      if (!val) {
        alert("Please write your sentences before saving!");
        return;
      }
      state.hwSentences = val;
      saveState();
      const msg = document.getElementById('hw-sentences-saved-msg');
      if (msg) {
        msg.classList.remove('hidden');
        playSound('stamp');
        setTimeout(() => { msg.classList.add('hidden'); }, 3000);
      }
    }

    /* ====================================================
       TIMER AND CONFETTI UTILITIES
       ==================================================== */
    let timerInterval = null;
    function startTimer() {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        if (!state.timerRunning) return;
        if (state.timerSeconds > 0) {
          state.timerSeconds--;
          updateTimerDisplay();
          if (state.timerSeconds % 5 === 0) saveState();
        } else {
          clearInterval(timerInterval);
          saveState();
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const m = Math.floor(state.timerSeconds / 60);
      const s = state.timerSeconds % 60;
      document.getElementById('lesson-timer').innerText = 
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function toggleTimer() {
      state.timerRunning = !state.timerRunning;
      document.getElementById('timer-toggle-btn').innerText = state.timerRunning ? '⏸' : '▶';
      if (state.timerRunning) startTimer();
      saveState();
    }

    function triggerConfetti() {
      const container = document.getElementById('confetti-container');
      container.innerHTML = '';
      const colors = ['#dfb15b', '#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#ffffff'];

      for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = "absolute w-2.5 h-2.5 rounded-sm";
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `-20px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animation = `fall ${1.5 + Math.random() * 2}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        container.appendChild(particle);
      }

      setTimeout(() => {
        container.innerHTML = '';
      }, 3500);
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {}
    }

    /* ====================================================
       INITIALIZATION
       ==================================================== */
    
    function shuffleStorySelects() {
      if (!state.hwStoryOrder) state.hwStoryOrder = {};
      for (let i = 1; i <= 7; i++) {
        const sel = document.getElementById('hw-story-' + i);
        if (!sel) continue;
        const values = Array.from(sel.options).filter(o => o.value).map(o => o.value);
        if (!Array.isArray(state.hwStoryOrder[i]) || state.hwStoryOrder[i].length !== values.length) {
          state.hwStoryOrder[i] = tcShuffle(values);
        }
        const saved = state.hwStoryAnswers['hw-story-' + i] || '';
        const current = sel.value;
        sel.innerHTML = '';
        const empty = document.createElement('option');
        empty.value = '';
        empty.textContent = '[choose word]';
        sel.appendChild(empty);
        state.hwStoryOrder[i].forEach(v => {
          const opt = document.createElement('option');
          opt.value = v;
          opt.textContent = v;
          sel.appendChild(opt);
        });
        sel.value = saved || '';
        sel.addEventListener('change', () => {
          state.hwStoryAnswers['hw-story-' + i] = sel.value;
          saveState();
        });
      }
    }

    function restoreInputs() {
      const nameEl = document.getElementById('detective-name-input');
      if (nameEl) nameEl.value = state.detectiveName || '';
      updateDetectiveName(state.detectiveName || '');

      const report = document.getElementById('final-report-text');
      if (report && state.reportText) {
        report.value = state.reportText;
      }
      if (report) {
        report.addEventListener('input', () => { state.reportText = report.value; saveState(); });
      }
      if (state.reportSubmitted) {
        const stamp = document.getElementById('stamp-indicator');
        const status = document.getElementById('cert-status');
        if (stamp) { stamp.innerText = "OFFICIALLY ARCHIVED"; stamp.className = "stamp-badge stamp-solved mb-1"; }
        if (status) { status.innerText = "CASE SOLVED & CLOSED ✓"; status.className = "text-emerald-400 font-bold"; }
      }

      for (let i = 1; i <= 6; i++) {
        const input = document.getElementById('hw-dict-' + i);
        if (input && state.hwDict[i] != null) input.value = state.hwDict[i];
        if (input) input.addEventListener('input', ev => { state.hwDict[i] = ev.target.value; saveState(); });
      }
      const sents = document.getElementById('hw-sentences-input');
      if (sents) {
        if (state.hwSentences) sents.value = state.hwSentences;
        sents.addEventListener('input', () => { state.hwSentences = sents.value; saveState(); });
      }

      // dictation inputs restored after those modes render
      restoreDictationInputs();

      const qf = document.getElementById('qf-input');
      if (qf && state.qfInput) qf.value = state.qfInput;
      if (qf) qf.addEventListener('input', () => { state.qfInput = qf.value; saveState(); });

      const audioBtn = document.getElementById('audio-toggle');
      if (audioBtn) audioBtn.innerText = state.soundEnabled ? '🔊' : '🔇';

      const tbtn = document.getElementById('timer-toggle-btn');
      if (tbtn) tbtn.innerText = state.timerRunning ? '⏸' : '▶';
      updateTimerDisplay();
    }

    function restoreDictationInputs() {
      DICTATION_WORDS.forEach((item, index) => {
        const u = document.getElementById('unscramble-input-' + index);
        if (u) {
          if (state.dictUnscramble[index] != null) u.value = state.dictUnscramble[index];
          u.addEventListener('input', ev => { state.dictUnscramble[index] = ev.target.value; saveState(); });
        }
        const m = document.getElementById('missing-input-' + index);
        if (m) {
          if (state.dictMissing[index] != null) m.value = state.dictMissing[index];
          m.addEventListener('input', ev => { state.dictMissing[index] = ev.target.value; saveState(); });
        }
        const s = document.getElementById('spell-input-' + index);
        if (s) {
          if (state.dictSpell[index] != null) s.value = state.dictSpell[index];
          s.addEventListener('input', ev => { state.dictSpell[index] = ev.target.value; saveState(); });
        }
      });
    }

    window.addEventListener('DOMContentLoaded', () => {
      ensureShuffles();
      saveState();

      renderMission1();
      renderMission2();
      renderMission3();
      renderMission4();
      renderPlaquesGrid();
      renderDictationModes();
      renderHomework();
      renderReportChips();
      updateLabelCounts();
      updateSubmissionScores();

      shuffleStorySelects();
      restoreInputs();
      if (state.reportText) analyzeReportText();

      if (state.currentTab && state.currentTab !== 'briefing') {
        switchTab(state.currentTab);
      }
      if (state.currentMission) {
        try { switchMission(state.currentMission); } catch (e) {}
      }
      if (state.currentDictationMode) {
        try { setDictationMode(state.currentDictationMode); } catch (e) {}
      }

      updateTimerDisplay();
      startTimer();

      const track = document.getElementById('track-230');
      if (track) {
        track.addEventListener('play', () => {
          if (window.speechSynthesis) window.speechSynthesis.cancel();
        });
      }
    });

  