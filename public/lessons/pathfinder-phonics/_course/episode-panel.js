/** Homework + Mini-text panels for Pathfinder episodes */
(function () {
  const slugFromMeta = () => {
    const m = window.PF_LESSON || {};
    if (m.key && m.key.includes('explorers-backpack')) return 'explorers-backpack';
    if (m.key && m.key.includes('forest-fairies')) return 'forest-fairies';
    if (m.key && m.key.includes('dragon-gorge')) return 'dragon-gorge';
    if (m.key && m.key.includes('sleeping-giants')) return 'sleeping-giants';
    if (m.key && m.key.includes('goblin-tricks')) return 'goblin-tricks';
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || parts[parts.length - 2] || '';
  };

  function norm(s) {
    return String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }
  function lenientEq(a, b) {
    a = norm(a); b = norm(b);
    if (!a || !b) return false;
    if (a === b) return true;
    if (a.replace(/[^a-z0-9]/g, '') === b.replace(/[^a-z0-9]/g, '')) return true;
    return false;
  }
  function acceptAny(ans, list) {
    const a = norm(ans);
    return (list || []).some((x) => lenientEq(a, x) || a.includes(norm(x)) || norm(x).includes(a));
  }

  function el(tag, attrs, kids) {
    const n = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'className') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v != null) n.setAttribute(k, v);
    });
    (kids || []).forEach((c) => { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }

  function mount() {
    if (!window.PFCourse || !window.PFData) return;
    if (document.getElementById('pf-extra-dock')) return;
    const slug = slugFromMeta();
    const hw = (PFData.homework || {})[slug];
    const mt = (PFData.miniTexts || {})[slug];
    if (!hw && !mt) return;
    PFCourse.touchPlayed(slug);

    const dock = el('div', { id: 'pf-extra-dock', className: 'pf-extra-dock' });
    const btnHw = el('button', { type: 'button', text: '📝 Homework', className: '' });
    const btnMt = el('button', { type: 'button', text: '📖 Mini-text', className: '' });
    const btnClose = el('button', { type: 'button', text: '✕ Close', className: '' });
    dock.append(btnHw, btnMt, btnClose);

    const panelHw = el('section', { id: 'pf-hw-panel', className: 'pf-extra-panel', 'aria-label': 'Homework' });
    const panelMt = el('section', { id: 'pf-mt-panel', className: 'pf-extra-panel', 'aria-label': 'Mini-text' });

    function show(which) {
      panelHw.classList.toggle('pf-open', which === 'hw');
      panelMt.classList.toggle('pf-open', which === 'mt');
      btnHw.classList.toggle('pf-on', which === 'hw');
      btnMt.classList.toggle('pf-on', which === 'mt');
      if (which === 'hw') renderHomework(panelHw, slug, hw);
      if (which === 'mt') renderMiniText(panelMt, slug, mt);
      if (which) (which === 'hw' ? panelHw : panelMt).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    btnHw.onclick = () => show(panelHw.classList.contains('pf-open') ? '' : 'hw');
    btnMt.onclick = () => show(panelMt.classList.contains('pf-open') ? '' : 'mt');
    btnClose.onclick = () => show('');
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') show(''); });

    const nav = document.querySelector('.pf-course-nav');
    if (nav && nav.parentNode) nav.insertAdjacentElement('afterend', dock);
    else document.body.prepend(dock);
    dock.insertAdjacentElement('afterend', panelHw);
    panelHw.insertAdjacentElement('afterend', panelMt);

    // Intercept victory → encourage mini-text before finish
    wrapMarkDone(slug, mt, () => show('mt'));

    // Deep links
    try {
      const q = new URLSearchParams(location.search);
      if (q.get('tab') === 'homework') show('hw');
      if (q.get('tab') === 'minitext') show('mt');
    } catch {}
  }

  function wrapMarkDone(slug, mt, openMt) {
    const tryWrap = () => {
      if (!window.PF || typeof PF.markDone !== 'function') return false;
      if (PF.markDone._pfWrapped) return true;
      const orig = PF.markDone.bind(PF);
      PF.markDone = function () {
        const c = PFCourse.readCourse();
        const mtState = (c.miniText || {})[slug] || {};
        if (mt && !mtState.done) {
          openMt();
          alert('Read the Mini-text and answer the questions before finishing the episode. (You can still play!)');
          // still allow partial progress
          PF.write({ started: true, status: 'in_progress', percent: Math.max(70, (PF.read().percent || 50)) });
          return;
        }
        orig();
        // after done, grant rewards/stars
        const acc = PFCourse.computeEpisodeAccuracy(slug);
        PFCourse.completeEpisode(slug, { accuracyPct: acc });
      };
      PF.markDone._pfWrapped = true;
      return true;
    };
    if (!tryWrap()) {
      let n = 0;
      const t = setInterval(() => { if (tryWrap() || ++n > 40) clearInterval(t); }, 250);
    }
    // Also observe victory text and open mini-text if not done
    const re = /ПОБЕДА|ПОКОРЕНО|VICTORY|реликвия получена|Главного Следопыта/i;
    const obs = new MutationObserver(() => {
      if (!re.test(document.body.innerText || '')) return;
      const c = PFCourse.readCourse();
      if (mt && !(c.miniText[slug] || {}).done) openMt();
    });
    if (document.body) obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function renderHomework(panel, slug, hw) {
    panel.innerHTML = '';
    if (!hw) { panel.append(el('p', { text: 'No homework for this episode.' })); return; }
    const saved = (PFCourse.readCourse().homework[slug] || {});
    panel.append(
      el('h2', { text: '📝 Homework' }),
      el('p', { className: 'pf-muted', text: 'Grade 6 English · different formats from the episode games · answers are checked leniently and saved.' })
    );
    const state = saved.answers || {};
    let correct = 0, total = 0;

    hw.tasks.forEach((task) => {
      const box = el('div', { className: 'pf-task' });
      box.append(el('h3', { text: task.title }), el('p', { className: 'pf-muted', text: task.instructions }));
      if (task.type === 'odd-one-out') {
        task.items.forEach((it, idx) => {
          total++;
          const row = el('div', { style: 'margin:10px 0' });
          row.append(el('div', { text: (idx + 1) + '.' }));
          const opts = el('div', { className: 'pf-options' });
          const key = task.id + ':' + idx;
          it.options.forEach((opt) => {
            const b = el('button', { type: 'button', text: opt });
            if (state[key] === opt) b.classList.add('pf-pick');
            b.onclick = () => {
              state[key] = opt;
              const ok = lenientEq(opt, it.answer);
              if (!ok) PFCourse.logMistake({ episode: slug, word: it.options.join('/'), expected: it.answer, answered: opt, task: task.id });
              opts.querySelectorAll('button').forEach((x) => x.classList.remove('pf-pick', 'pf-ok', 'pf-bad'));
              b.classList.add('pf-pick', ok ? 'pf-ok' : 'pf-bad');
              persistHw(slug, hw, state);
              renderHomework(panel, slug, hw);
            };
            opts.appendChild(b);
          });
          if (state[key] != null) {
            if (lenientEq(state[key], it.answer)) correct++;
          }
          row.appendChild(opts);
          box.appendChild(row);
        });
      } else if (task.type === 'sort') {
        const pool = el('div', { className: 'pf-options', id: 'pool-' + task.id });
        const cols = el('div', { className: 'pf-cols' });
        const colMap = {};
        task.columns.forEach((c) => {
          const col = el('div', { className: 'pf-col', 'data-col': c });
          col.appendChild(el('h4', { text: c }));
          colMap[c] = col;
          cols.appendChild(col);
        });
        let selected = null;
        task.items.forEach((it, idx) => {
          total++;
          const key = task.id + ':' + it.word;
          const chip = el('button', { type: 'button', className: 'pf-chip', text: it.word });
          chip.onclick = () => {
            selected = it.word;
            pool.querySelectorAll('button').forEach((x) => x.classList.remove('pf-pick'));
            Object.values(colMap).forEach((col) => col.querySelectorAll('button').forEach((x) => x.classList.remove('pf-pick')));
            chip.classList.add('pf-pick');
          };
          const placed = state[key];
          if (placed) {
            if (lenientEq(placed, it.col)) correct++;
            colMap[placed] ? colMap[placed].appendChild(chip) : pool.appendChild(chip);
          } else pool.appendChild(chip);
        });
        Object.entries(colMap).forEach(([name, col]) => {
          col.addEventListener('click', () => {
            if (!selected) return;
            const key = task.id + ':' + selected;
            state[key] = name;
            const item = task.items.find((x) => x.word === selected);
            if (item && !lenientEq(name, item.col)) {
              PFCourse.logMistake({ episode: slug, word: selected, expected: item.col, answered: name, task: task.id });
            }
            selected = null;
            persistHw(slug, hw, state);
            renderHomework(panel, slug, hw);
          });
        });
        box.append(pool, cols);
      } else if (task.type === 'fill') {
        task.items.forEach((it, idx) => {
          total++;
          const key = task.id + ':' + idx;
          const row = el('div', { className: 'pf-row', style: 'flex-direction:column;align-items:stretch' });
          row.append(el('label', { text: (idx + 1) + '. ' + it.prompt }));
          const inp = el('input', { type: 'text', className: 'pf-input', value: state[key] || '', autocomplete: 'off', spellcheck: 'false' });
          inp.onchange = inp.onblur = () => {
            state[key] = inp.value;
            const ok = lenientEq(inp.value, it.answer) || lenientEq(inp.value, it.full);
            if (inp.value && !ok) PFCourse.logMistake({ episode: slug, word: it.full, expected: it.answer, answered: inp.value, task: task.id });
            persistHw(slug, hw, state);
          };
          if (state[key] && (lenientEq(state[key], it.answer) || lenientEq(state[key], it.full))) correct++;
          row.appendChild(inp);
          box.appendChild(row);
        });
      } else if (task.type === 'write') {
        const key = task.id + ':text';
        const ta = el('textarea', { className: 'pf-input', placeholder: task.hint || '' });
        ta.value = state[key] || '';
        ta.onchange = () => { state[key] = ta.value; persistHw(slug, hw, state); };
        // writing tasks count as correct if enough lines
        total += task.minLines || 3;
        const lines = (state[key] || '').split(/\n/).map((x) => x.trim()).filter(Boolean);
        correct += Math.min(lines.length, task.minLines || 3);
        box.append(ta, el('p', { className: 'pf-muted', text: 'Saved automatically. Teacher may review your writing.' }));
      }
      panel.appendChild(box);
    });

    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    const done = total > 0 && Object.keys(state).length >= Math.ceil(total * 0.75);
    panel.append(
      el('p', { className: 'pf-feedback ' + (accuracy >= 70 ? 'ok' : 'bad'), text: `Checked items accuracy: ${accuracy}% (${correct}/${total})` }),
      el('div', { className: 'pf-row' }, [
        el('button', {
          type: 'button', className: 'pf-btn pf-btn-primary', text: done ? '✓ Homework saved' : 'Save homework progress',
          onClick: () => { persistHw(slug, hw, state, true); alert('Homework saved!'); },
        }),
      ])
    );
  }

  function persistHw(slug, hw, state, markDone) {
    let correct = 0, total = 0;
    // lightweight recount
    (hw.tasks || []).forEach((task) => {
      if (task.type === 'odd-one-out') {
        task.items.forEach((it, idx) => {
          total++;
          if (lenientEq(state[task.id + ':' + idx], it.answer)) correct++;
        });
      } else if (task.type === 'sort') {
        task.items.forEach((it) => {
          total++;
          if (lenientEq(state[task.id + ':' + it.word], it.col)) correct++;
        });
      } else if (task.type === 'fill') {
        task.items.forEach((it, idx) => {
          total++;
          const v = state[task.id + ':' + idx];
          if (lenientEq(v, it.answer) || lenientEq(v, it.full)) correct++;
        });
      } else if (task.type === 'write') {
        total += task.minLines || 3;
        const lines = String(state[task.id + ':text'] || '').split(/\n/).map((x) => x.trim()).filter(Boolean);
        correct += Math.min(lines.length, task.minLines || 3);
      }
    });
    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    PFCourse.saveHomework(slug, {
      answers: state,
      accuracy,
      done: !!markDone || accuracy >= 50,
      correct,
      total,
    });
  }

  function renderMiniText(panel, slug, mt) {
    panel.innerHTML = '';
    if (!mt) { panel.append(el('p', { text: 'No mini-text.' })); return; }
    const saved = (PFCourse.readCourse().miniText[slug] || {});
    const answers = saved.answers || {};
    let highlight = !!saved.highlight;

    panel.append(
      el('h2', { text: '📖 Mini-text: ' + mt.title }),
      el('p', { className: 'pf-muted', text: 'A1–A2 Pixar story · en-GB listen · highlight patterns · then answer 6 questions.' })
    );
    const tools = el('div', { className: 'pf-row' });
    const hlBtn = el('button', {
      type: 'button', className: 'pf-btn pf-btn-ghost',
      text: highlight ? 'Hide pattern highlight' : 'Highlight pattern words',
      onClick: () => {
        highlight = !highlight;
        PFCourse.saveMiniText(slug, { ...saved, highlight, answers });
        renderMiniText(panel, slug, mt);
      },
    });
    const readAll = el('button', {
      type: 'button', className: 'pf-btn pf-btn-primary', text: '🔊 Read all (en-GB)',
      onClick: () => PFTts.speak(mt.sentences.join(' ')),
    });
    tools.append(hlBtn, readAll, el('button', { type: 'button', className: 'pf-btn pf-btn-ghost', text: 'Stop', onClick: () => PFTts.stop() }));
    panel.appendChild(tools);

    mt.sentences.forEach((s, i) => {
      const row = el('div', { className: 'pf-sent' });
      let html = s;
      if (highlight) {
        (mt.highlights || []).forEach((w) => {
          const re = new RegExp('\\b(' + w.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&') + ')\\b', 'gi');
          html = html.replace(re, '<mark>$1</mark>');
        });
      }
      const body = el('span'); body.innerHTML = html;
      const listen = el('button', {
        type: 'button', className: 'pf-btn pf-btn-ghost', text: '🔊', title: 'Listen sentence',
        style: 'margin-left:8px', onClick: () => PFTts.speak(s),
      });
      row.append(el('strong', { text: (i + 1) + '. ' }), body, listen);
      panel.appendChild(row);
    });

    panel.append(el('h3', { text: 'Comprehension' }));
    let correct = 0, total = 0;
    mt.questions.forEach((q, idx) => {
      const key = 'q' + idx;
      const box = el('div', { className: 'pf-task' });
      box.append(el('p', { text: (idx + 1) + '. ' + q.q }));
      if (q.type === 'tf') {
        total++;
        const opts = el('div', { className: 'pf-options' });
        ['true', 'false'].forEach((v) => {
          const b = el('button', { type: 'button', text: v === 'true' ? 'True' : 'False' });
          if (norm(answers[key]) === v) b.classList.add('pf-pick');
          b.onclick = () => {
            answers[key] = v;
            const ok = v === q.answer;
            if (!ok) PFCourse.logMistake({ episode: slug, word: q.q, expected: q.answer, answered: v, task: 'minitext' });
            saveMt(slug, mt, answers, highlight);
            renderMiniText(panel, slug, mt);
          };
          opts.appendChild(b);
        });
        if (norm(answers[key]) === q.answer) correct++;
        box.appendChild(opts);
      } else if (q.type === 'short') {
        total++;
        const inp = el('input', { type: 'text', className: 'pf-input', value: answers[key] || '', placeholder: 'Type a short answer (no mic needed)' });
        inp.onchange = () => {
          answers[key] = inp.value;
          const ok = acceptAny(inp.value, q.answers);
          if (inp.value && !ok) PFCourse.logMistake({ episode: slug, word: q.q, expected: (q.answers || []).join('|'), answered: inp.value, task: 'minitext' });
          saveMt(slug, mt, answers, highlight);
        };
        if (answers[key] && acceptAny(answers[key], q.answers)) correct++;
        box.appendChild(inp);
      } else {
        total++;
        const ta = el('textarea', { className: 'pf-input', placeholder: 'Write your question in English…' });
        ta.value = answers[key] || '';
        ta.onchange = () => {
          answers[key] = ta.value;
          saveMt(slug, mt, answers, highlight);
        };
        // compose: count correct if has ? or starts with wh-word
        const v = answers[key] || '';
        if (/\?/.test(v) || /^(who|what|where|when|why|how|do|does|is|are|can)\b/i.test(v.trim())) correct++;
        box.appendChild(ta);
      }
      panel.appendChild(box);
    });

    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    const finish = el('button', {
      type: 'button', className: 'pf-btn pf-btn-primary',
      text: 'Finish mini-text & unlock episode complete',
      onClick: () => {
        saveMt(slug, mt, answers, highlight, true);
        const acc = PFCourse.computeEpisodeAccuracy(slug);
        PFCourse.completeEpisode(slug, { accuracyPct: acc });
        alert('Mini-text saved. Episode marked complete. Reward + stars updated!');
      },
    });
    panel.append(
      el('p', { className: 'pf-feedback ' + (accuracy >= 70 ? 'ok' : 'bad'), text: `Comprehension accuracy: ${accuracy}%` }),
      el('div', { className: 'pf-row' }, [finish]),
      el('p', { className: 'pf-muted', text: 'Tip: typing answers always works — microphone is optional and never required.' })
    );
  }

  function saveMt(slug, mt, answers, highlight, done) {
    let correct = 0, total = 0;
    mt.questions.forEach((q, idx) => {
      total++;
      const v = answers['q' + idx];
      if (q.type === 'tf' && norm(v) === q.answer) correct++;
      else if (q.type === 'short' && acceptAny(v, q.answers)) correct++;
      else if (q.type === 'compose' && v && (/\?/.test(v) || /^(who|what|where|when|why|how|do|does|is|are|can)\b/i.test(String(v).trim()))) correct++;
    });
    const accuracy = total ? Math.round((correct / total) * 100) : 0;
    PFCourse.saveMiniText(slug, { answers, highlight: !!highlight, accuracy, done: !!done || accuracy >= 50, correct, total });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(mount, 80));
  else setTimeout(mount, 80);
})();
