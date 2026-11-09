/*! TutorCall watermark — © @gamify_guru
 * Usage: <script src="../_shared/watermark.js" defer></script>
 * Optional: <meta name="author" content="@gamify_guru"> (also set by this script)
 * Reusable across lessons. Self-contained (injects CSS). Pointer-events none.
 */
(function (global) {
  'use strict';
  var HANDLE = '@gamify_guru';
  var MARK = '© ' + HANDLE;
  var LAYER_ID = 'ttc-wm-layer';
  var BADGE_ID = 'ttc-wm-badge';
  var STYLE_ID = 'ttc-wm-style';
  var META_NAME = 'author';
  var FOOTER_CLASS = 'ttc-wm-credit';
  var CSS = [
    '.ttc-wm-layer{position:fixed;inset:0;z-index:2147483000;pointer-events:none!important;user-select:none!important;-webkit-user-select:none!important;overflow:hidden;contain:strict}',
    '.ttc-wm-tile{position:absolute;inset:-40% -20%;display:flex;flex-wrap:wrap;align-content:flex-start;gap:2.2rem 2.8rem;transform:rotate(-28deg);opacity:0.075;color:#c9b8a0;font:600 15px/1.2 ui-sans-serif,system-ui,Segoe UI,Roboto,Manrope,sans-serif;letter-spacing:0.04em;white-space:nowrap}',
    '.ttc-wm-tile span{display:inline-block;padding:0.35rem 0.6rem}',
    '.ttc-wm-badge{position:fixed;right:10px;bottom:10px;z-index:2147483001;pointer-events:none!important;user-select:none!important;font:600 11px/1.2 ui-sans-serif,system-ui,sans-serif;letter-spacing:0.02em;color:rgba(243,233,220,0.72);background:rgba(20,15,12,0.45);border:1px solid rgba(212,168,87,0.28);border-radius:999px;padding:5px 10px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}',
    '@media (max-width:420px){.ttc-wm-tile{font-size:12px;gap:1.6rem 1.8rem;opacity:0.07}.ttc-wm-badge{right:8px;bottom:8px;font-size:10px;padding:4px 8px}}',
    '@media print{.ttc-wm-layer{position:fixed;inset:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ttc-wm-tile{opacity:0.14!important;color:#666!important}.ttc-wm-badge{position:fixed;right:8px;bottom:8px;opacity:1!important;color:#333!important;background:transparent!important;border-color:#999!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}}',
    '.' + FOOTER_CLASS + '{margin:18px 0 8px;text-align:center;font:500 12px/1.4 ui-sans-serif,system-ui,sans-serif;color:rgba(185,169,147,0.85);pointer-events:none}'
  ].join('');

  function ensureStyle() {
    var el = document.getElementById(STYLE_ID);
    if (!el) {
      el = document.createElement('style');
      el.id = STYLE_ID;
      el.setAttribute('data-ttc-wm', '1');
      (document.head || document.documentElement).appendChild(el);
    }
    if (el.textContent !== CSS) el.textContent = CSS;
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
    if (meta.getAttribute('content') !== HANDLE) meta.setAttribute('content', HANDLE);
    return meta;
  }

  function tileText() {
    var n = 96, frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var s = document.createElement('span');
      s.textContent = HANDLE;
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
    if (!badge) {
      badge = document.createElement('div');
      badge.id = BADGE_ID;
      badge.className = 'ttc-wm-badge';
      badge.setAttribute('aria-hidden', 'true');
      badge.setAttribute('data-ttc-wm', '1');
      badge.textContent = MARK;
      (document.body || document.documentElement).appendChild(badge);
    } else if (badge.textContent !== MARK) {
      badge.textContent = MARK;
    }
    return badge;
  }

  function findFooterHost() {
    var sels = ['footer', '[role="contentinfo"]', '.site-footer', '.app-footer', '.page-footer', '.lesson-footer'];
    for (var i = 0; i < sels.length; i++) {
      var el = document.querySelector(sels[i]);
      if (el) return el;
    }
    // teacher page static wrap
    var wrap = document.querySelector('.wrap');
    if (wrap && wrap.querySelector('.note')) return wrap;
    return null;
  }

  function ensureFooterCredit() {
    if (document.querySelector('.' + FOOTER_CLASS)) return;
    var host = findFooterHost();
    var credit = document.createElement('p');
    credit.className = FOOTER_CLASS;
    credit.setAttribute('data-ttc-wm', '1');
    credit.textContent = '© ' + HANDLE + ' · TutorCall material. All rights reserved.';
    if (host) host.appendChild(credit);
    else if (document.body) document.body.appendChild(credit);
  }

  var mounting = false;
  function mount() {
    if (mounting) return;
    mounting = true;
    try {
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
          !document.querySelector('meta[name="' + META_NAME + '"][content="' + HANDLE + '"]')) {
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

  // Late body (SPA roots)
  if (!document.body) {
    var bodyWatch = new MutationObserver(function () {
      if (document.body) { bodyWatch.disconnect(); boot(); }
    });
    bodyWatch.observe(document.documentElement, { childList: true });
  }

  global.GamifyWatermark = { mount: mount, handle: HANDLE };
})(typeof window !== 'undefined' ? window : this);
