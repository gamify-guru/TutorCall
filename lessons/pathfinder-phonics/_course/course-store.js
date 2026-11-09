/** Pathfinder Phonics — course-level + episode progress store */
(function (global) {
  const COURSE_KEY = 'tutorcall-pathfinder-phonics-course-v1';
  const EPISODES = [
    { num: 1, slug: 'explorers-backpack', key: 'tutorcall-pathfinder-phonics-explorers-backpack-v1', title: 'Рюкзак Следопыта', en: "Explorer's Backpack", reward: 'compass', rewardLabel: 'Compass' },
    { num: 2, slug: 'forest-fairies', key: 'tutorcall-pathfinder-phonics-forest-fairies-v1', title: 'Переполох Лесных Фей', en: 'Forest Fairies', reward: 'fairy-wing', rewardLabel: 'Fairy Wing' },
    { num: 3, slug: 'dragon-gorge', key: 'tutorcall-pathfinder-phonics-dragon-gorge-v1', title: 'Ущелье Драконов', en: 'Dragon Gorge', reward: 'dragon-scale', rewardLabel: 'Dragon Scale' },
    { num: 4, slug: 'sleeping-giants', key: 'tutorcall-pathfinder-phonics-sleeping-giants-v1', title: 'Спящие Великаны', en: 'Sleeping Giants', reward: 'crystal', rewardLabel: 'Giant Crystal' },
    { num: 5, slug: 'goblin-tricks', key: 'tutorcall-pathfinder-phonics-goblin-tricks-v1', title: 'Уловки гоблинов', en: 'Goblin Tricks', reward: 'goblin-coin', rewardLabel: 'Goblin Coin' },
  ];

  function safeParse(raw) { try { return JSON.parse(raw || 'null'); } catch { return null; } }
  function readCourse() {
    const d = safeParse(localStorage.getItem(COURSE_KEY)) || {};
    return {
      studentName: d.studentName || '',
      backpack: Array.isArray(d.backpack) ? d.backpack : [],
      stars: d.stars && typeof d.stars === 'object' ? d.stars : {},
      homework: d.homework && typeof d.homework === 'object' ? d.homework : {},
      miniText: d.miniText && typeof d.miniText === 'object' ? d.miniText : {},
      mistakes: Array.isArray(d.mistakes) ? d.mistakes : [],
      boss: d.boss && typeof d.boss === 'object' ? d.boss : {},
      dictionaryStars: Array.isArray(d.dictionaryStars) ? d.dictionaryStars : [],
      lastPlayed: d.lastPlayed || {},
      updatedAt: d.updatedAt || 0,
    };
  }
  function writeCourse(patch) {
    const cur = { ...readCourse(), ...patch, updatedAt: Date.now() };
    try { localStorage.setItem(COURSE_KEY, JSON.stringify(cur)); } catch (e) {}
    return cur;
  }
  function readEp(key) { return safeParse(localStorage.getItem(key)) || {}; }
  function writeEp(key, patch) {
    const cur = { ...readEp(key), ...patch, updatedAt: Date.now() };
    try { localStorage.setItem(key, JSON.stringify(cur)); } catch (e) {}
    return cur;
  }
  function touchPlayed(slug) {
    const c = readCourse();
    c.lastPlayed = { ...(c.lastPlayed || {}), [slug]: Date.now() };
    writeCourse({ lastPlayed: c.lastPlayed });
  }
  /** Stars: 3 ≥90%, 2 ≥70%, else 1 when completed. Keep best. */
  function starsFromAccuracy(pct) {
    if (pct >= 90) return 3;
    if (pct >= 70) return 2;
    return 1;
  }
  function setStars(slug, stars) {
    const c = readCourse();
    const prev = c.stars[slug] || 0;
    const next = Math.max(prev, Math.min(3, stars | 0));
    c.stars[slug] = next;
    writeCourse({ stars: c.stars });
    return next;
  }
  function grantReward(slug) {
    const ep = EPISODES.find((e) => e.slug === slug);
    if (!ep) return null;
    const c = readCourse();
    if (!c.backpack.includes(ep.reward)) {
      c.backpack = [...c.backpack, ep.reward];
      writeCourse({ backpack: c.backpack });
    }
    return ep.reward;
  }
  function logMistake({ episode, word, expected, answered, task }) {
    const c = readCourse();
    const entry = {
      at: Date.now(),
      episode: episode || '',
      word: String(word || ''),
      expected: String(expected || ''),
      answered: String(answered || ''),
      task: String(task || ''),
    };
    const mistakes = [...(c.mistakes || []), entry].slice(-200);
    writeCourse({ mistakes });
    return entry;
  }
  function saveHomework(slug, data) {
    const c = readCourse();
    c.homework[slug] = { ...(c.homework[slug] || {}), ...data, updatedAt: Date.now() };
    writeCourse({ homework: c.homework });
  }
  function saveMiniText(slug, data) {
    const c = readCourse();
    c.miniText[slug] = { ...(c.miniText[slug] || {}), ...data, updatedAt: Date.now() };
    writeCourse({ miniText: c.miniText });
  }
  function allEpisodesDone() {
    return EPISODES.every((e) => {
      const s = readEp(e.key);
      return !!(s && (s.done || s.status === 'done'));
    });
  }
  function backpackFull() {
    const c = readCourse();
    return EPISODES.every((e) => c.backpack.includes(e.reward));
  }
  function bossUnlocked(force) {
    if (force) return true;
    try {
      const q = new URLSearchParams(location.search);
      if (q.get('unlock') === '1') return true;
    } catch {}
    return allEpisodesDone() || backpackFull();
  }
  function totalStars() {
    const c = readCourse();
    return EPISODES.reduce((a, e) => a + (c.stars[e.slug] || 0), 0) + (c.boss.stars || 0);
  }
  function resetAll() {
    EPISODES.forEach((e) => { try { localStorage.removeItem(e.key); } catch {} });
    try { localStorage.removeItem(COURSE_KEY); } catch {}
  }
  function resetEpisode(slug) {
    const ep = EPISODES.find((e) => e.slug === slug);
    if (!ep) return;
    try { localStorage.removeItem(ep.key); } catch {}
    const c = readCourse();
    delete c.stars[slug];
    delete c.homework[slug];
    delete c.miniText[slug];
    c.backpack = (c.backpack || []).filter((r) => r !== ep.reward);
    c.mistakes = (c.mistakes || []).filter((m) => m.episode !== slug);
    writeCourse({ stars: c.stars, homework: c.homework, miniText: c.miniText, backpack: c.backpack, mistakes: c.mistakes });
  }
  /** Complete episode: mark done, grant reward, set stars from accuracy bundle */
  function completeEpisode(slug, { accuracyPct } = {}) {
    const ep = EPISODES.find((e) => e.slug === slug);
    if (!ep) return;
    writeEp(ep.key, { started: true, done: true, status: 'done', percent: 100 });
    grantReward(slug);
    const pct = typeof accuracyPct === 'number' ? accuracyPct : computeEpisodeAccuracy(slug);
    setStars(slug, starsFromAccuracy(pct));
    touchPlayed(slug);
  }
  function computeEpisodeAccuracy(slug) {
    const c = readCourse();
    const hw = c.homework[slug] || {};
    const mt = c.miniText[slug] || {};
    const parts = [];
    if (typeof hw.accuracy === 'number') parts.push(hw.accuracy);
    if (typeof mt.accuracy === 'number') parts.push(mt.accuracy);
    if (!parts.length) return 80; // completed game path without tracked extras yet
    return parts.reduce((a, b) => a + b, 0) / parts.length;
  }
  function summaryText() {
    const c = readCourse();
    const lines = ['Pathfinder Phonics Quest — results', 'Student: ' + (c.studentName || '(no name)'), 'Total stars: ' + totalStars() + ' / 18', ''];
    EPISODES.forEach((e) => {
      const s = readEp(e.key);
      const st = s && (s.done || s.status === 'done') ? 'DONE' : s && s.started ? 'IN PROGRESS' : 'NOT STARTED';
      const hw = c.homework[e.slug];
      const mt = c.miniText[e.slug];
      lines.push(`Ep${e.num} ${e.en}: ${st}; stars=${c.stars[e.slug] || 0}; homework=${hw && hw.done ? 'yes' : 'no'}; mini-text=${mt && mt.done ? 'yes' : 'no'}; reward=${c.backpack.includes(e.reward) ? e.rewardLabel : '—'}`);
    });
    lines.push('', 'Boss: ' + (c.boss.won ? 'WON' : 'not won'));
    lines.push('Mistakes: ' + (c.mistakes || []).length);
    (c.mistakes || []).slice(-30).forEach((m) => {
      lines.push(`- [${m.episode}] ${m.word}: answered "${m.answered}" expected "${m.expected}" (${m.task})`);
    });
    return lines.join('\n');
  }

  global.PFCourse = {
    COURSE_KEY, EPISODES,
    readCourse, writeCourse, readEp, writeEp,
    touchPlayed, starsFromAccuracy, setStars, grantReward, logMistake,
    saveHomework, saveMiniText, allEpisodesDone, backpackFull, bossUnlocked,
    totalStars, resetAll, resetEpisode, completeEpisode, computeEpisodeAccuracy, summaryText,
  };
})(window);
