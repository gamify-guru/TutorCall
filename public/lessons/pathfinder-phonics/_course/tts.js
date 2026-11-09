/** en-GB TTS helper — never blocks UI if speechSynthesis missing */
(function (global) {
  function speak(text, opts) {
    opts = opts || {};
    return new Promise((resolve) => {
      try {
        if (!('speechSynthesis' in window)) { resolve({ ok: false, reason: 'unsupported' }); return; }
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(String(text || ''));
        u.lang = opts.lang || 'en-GB';
        u.rate = opts.rate || 0.95;
        const pick = () => {
          const voices = window.speechSynthesis.getVoices() || [];
          const v = voices.find((x) => /en-GB/i.test(x.lang)) || voices.find((x) => /^en/i.test(x.lang));
          if (v) u.voice = v;
        };
        pick();
        if (!u.voice) {
          window.speechSynthesis.onvoiceschanged = () => { pick(); };
        }
        u.onend = () => resolve({ ok: true });
        u.onerror = () => resolve({ ok: false, reason: 'error' });
        window.speechSynthesis.speak(u);
      } catch (e) {
        resolve({ ok: false, reason: String(e) });
      }
    });
  }
  function stop() { try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch {} }
  global.PFTts = { speak, stop };
})(window);
