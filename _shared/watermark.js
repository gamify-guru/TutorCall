/*! TutorCall watermark — © @gamify_guru
 * Usage (default — only @gamify_guru):
 *   <script src="../_shared/watermark.js" defer></script>
 * Multi-handle (this course):
 *   <script src="../../_shared/watermark.js" defer
 *     data-handles="@gamify_guru,@o_olay_lay_lay"
 *     data-theme="dark"></script>
 * Or before load: window.TTC_WATERMARK = { handles: ['@gamify_guru','@o_olay_lay_lay'], theme:'dark' };
 * Default behaviour elsewhere stays single @gamify_guru.
 */
(function (global) {
  'use strict';
  var DEFAULT_HANDLES = ['@gamify_guru'];
  var LAYER_ID = 'ttc-wm-layer';
  var BADGE_ID = 'ttc-wm-badge';
  var STYLE_ID = 'ttc-wm-style';
  var META_NAME = 'author';
  var FOOTER_CLASS = 'ttc-wm-credit';
  var CFG = null;

  function scriptEl() {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
      var s = scripts[i];
      if (s.src && /watermark\.js(\?|$)/.test(s.src)) return s;
      if (s.getAttribute('data-handles')) return s;
    }
    return document.currentScript || null;
  }

  function parseHandles(raw) {
    if (!raw) return null;
    if (Array.isArray(raw)) return raw.map(String).map(function (h) {
      h = h.trim(); return h.charAt(0) === '@' ? h : '@' + h;
    }).filter(Boolean);
    return String(raw).split(/[,;\s]+/).map(function (h) {
      h = h.trim(); if (!h) return '';
      return h.charAt(0) === '@' ? h : '@' + h;
    }).filter(Boolean);
  }

  function config() {
    if (CFG) return CFG;
    var win = (global.TTC_WATERMARK && typeof global.TTC_WATERMARK === 'object') ? global.TTC_WATERMARK : {};
    var el = scriptEl();
    var handles = parseHandles(win.handles) || parseHandles(el && el.getAttribute('data-handles')) || DEFAULT_HANDLES.slice();
    if (!handles.length) handles = DEFAULT_HANDLES.slice();
    var theme = (win.theme || (el && el.getAttribute('data-theme')) || '').toLowerCase();
    var opacity = win.opacity != null ? Number(win.opacity) : (theme === 'dark' ? 0.11 : (handles.length > 1 ? 0.09 : 0.075));
    CFG = { handles: handles, theme: theme, opacity: opacity };
    return CFG;
  }

  function markText() {
    return '© ' + config().handles.join(' · ');
  }

  function authorContent() {
    return config().handles.join(', ');
  }

  function cssText() {
    var op = config().opacity;
    var printOp = Math.min(0.18, op + 0.06);
    var tileColor = config().theme === 'dark' ? '#e8dcc8' : '#c9b8a0';
    return [
      '.ttc-wm-layer{position:fixed;inset:0;z-index:2147483000;pointer-events:none!important;user-select:none!important;-webkit-user-select:none!important;overflow:hidden;contain:strict}',
      '.ttc-wm-tile{position:absolute;inset:-40% -20%;display:flex;flex-wrap:wrap;align-content:flex-start;gap:2.2rem 2.8rem;transform:rotate(-28deg);opacity:' + op + ';color:' + tileColor + ';font:600 15px/1.2 ui-sans-serif,system-ui,Segoe UI,Roboto,Manrope,sans-serif;letter-spacing:0.04em;white-space:nowrap}',
      '.ttc-wm-tile span{display:inline-block;padding:0.35rem 0.6rem}',
      '.ttc-wm-badge{position:fixed;right:10px;bottom:10px;z-index:2147483001;pointer-events:none!important;user-select:none!important;font:600 11px/1.2 ui-sans-serif,system-ui,sans-serif;letter-spacing:0.02em;color:rgba(243,233,220,0.78);background:rgba(20,15,12,0.5);border:1px solid rgba(212,168,87,0.32);border-radius:999px;padding:5px 10px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);max-width:min(92vw,420px);text-align:center}',
      '@media (max-width:420px){.ttc-wm-tile{font-size:12px;gap:1.6rem 1.8rem}.ttc-wm-badge{right:8px;bottom:8px;font-size:10px;padding:4px 8px}}',
      '@media print{.ttc-wm-layer{position:fixed;inset:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ttc-wm-tile{opacity:' + printOp + '!important;color:#666!important}.ttc-wm-badge{position:fixed;right:8px;bottom:8px;opacity:1!important;color:#333!important;background:transparent!important;border-color:#999!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}}',
      '.' + FOOTER_CLASS + '{margin:18px 0 8px;text-align:center;font:500 12px/1.4 ui-sans-serif,system-ui,sans-serif;color:rgba(185,169,147,0.9);pointer-events:none}'
    ].join('');
  }

  function ensureStyle() {
    var el = document.getElementById(STYLE_ID);
    if (!el) {
      el = document.createElement('style');
      el.id = STYLE_ID;
      el.setAttribute('data-ttc-wm', '1');
      (document.head || document.documentElement).appendChild(el);
    }
    var css = cssText();
    if (el.textContent !== css) el.textContent = css;
    return el;
  }

  function ensureMeta() {
    var head = document.head || document.documentElement;
    var meta = head.querySelector('meta[name="' + META_NAME + '"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', META_NAME);
      head.appendChild(meta);
    }
    var want = authorContent();
    if (meta.getAttribute('content') !== want) meta.setAttribute('content', want);
    return meta;
  }

  function tileText() {
    var handles = config().handles;
    var n = 96, frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var s = document.createElement('span');
      s.textContent = handles[i % handles.length];
      frag.appendChild(s);
    }
    return frag;
  }

  function ensureLayer() {
    var layer = document.getElementById(LAYER_ID);
    if (!layer) {
      layer = document.createElement('div');
      layer.id = LAYER_ID;
      layer.className = 'ttc-wm-layer';
      layer.setAttribute('aria-hidden', 'true');
      layer.setAttribute('data-ttc-wm', '1');
      var tile = document.createElement('div');
      tile.className = 'ttc-wm-tile';
      tile.appendChild(tileText());
      layer.appendChild(tile);
      (document.body || document.documentElement).appendChild(layer);
    } else if (!layer.querySelector('.ttc-wm-tile')) {
      var tile2 = document.createElement('div');
      tile2.className = 'ttc-wm-tile';
      tile2.appendChild(tileText());
      layer.appendChild(tile2);
    }
    return layer;
  }

  function ensureBadge() {
    var badge = document.getElementById(BADGE_ID);
    var text = markText();
    if (!badge) {
      badge = document.createElement('div');
      badge.id = BADGE_ID;
      badge.className = 'ttc-wm-badge';
      badge.setAttribute('aria-hidden', 'true');
      badge.setAttribute('data-ttc-wm', '1');
      badge.textContent = text;
      (document.body || document.documentElement).appendChild(badge);
    } else if (badge.textContent !== text) {
      badge.textContent = text;
    }
    return badge;
  }

  function findFooterHost() {
    var sels = ['footer', '[role="contentinfo"]', '.site-footer', '.app-footer', '.page-footer', '.lesson-footer', '.wrap'];
    for (var i = 0; i < sels.length; i++) {
      var el = document.querySelector(sels[i]);
      if (el) return el;
    }
    return null;
  }

  function ensureFooterCredit() {
    if (document.querySelector('.' + FOOTER_CLASS)) return;
    var host = findFooterHost();
    var credit = document.createElement('p');
    credit.className = FOOTER_CLASS;
    credit.setAttribute('data-ttc-wm', '1');
    credit.textContent = markText() + ' · TutorCall material. All rights reserved.';
    if (host) host.appendChild(credit);
    else if (document.body) document.body.appendChild(credit);
  }

  var mounting = false;
  function mount() {
    if (mounting) return;
    mounting = true;
    try {
      CFG = null; // refresh from latest config
      ensureStyle();
      ensureMeta();
      if (document.body) {
        ensureLayer();
        ensureBadge();
        ensureFooterCredit();
      }
    } finally {
      mounting = false;
    }
  }

  var obs = null;
  function watch() {
    if (obs || !document.documentElement) return;
    obs = new MutationObserver(function () {
      if (!document.getElementById(STYLE_ID) ||
          !document.getElementById(LAYER_ID) ||
          !document.getElementById(BADGE_ID) ||
          !document.querySelector('meta[name="' + META_NAME + '"]')) {
        mount();
      }
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  function boot() {
    mount();
    watch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  if (!document.body) {
    var bodyWatch = new MutationObserver(function () {
      if (document.body) { bodyWatch.disconnect(); boot(); }
    });
    bodyWatch.observe(document.documentElement, { childList: true });
  }

  global.GamifyWatermark = { mount: mount, config: config };
})(typeof window !== 'undefined' ? window : this);
