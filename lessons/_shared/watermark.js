/*! TutorCall watermark — © @gamify_guru
 * Default (tiled overlay, only @gamify_guru):
 *   <script src="../_shared/watermark.js" defer></script>
 * Multi-handle tiled:
 *   <script ... data-handles="@a,@b" data-theme="dark"></script>
 * Bar mode (Pathfinder course — bottom/top strip, no full-screen tiles):
 *   <script ... data-handles="@gamify_guru,@o_olay_lay_lay"
 *     data-mode="bar" data-position="bottom"></script>
 * Or window.TTC_WATERMARK = { handles:[...], mode:'bar', position:'bottom' }
 * Default tiled behaviour for other lessons is unchanged.
 */
(function (global) {
  'use strict';
  var DEFAULT_HANDLES = ['@gamify_guru'];
  var LAYER_ID = 'ttc-wm-layer';
  var BADGE_ID = 'ttc-wm-badge';
  var BAR_ID = 'ttc-wm-bar';
  var STYLE_ID = 'ttc-wm-style';
  var META_NAME = 'author';
  var FOOTER_CLASS = 'ttc-wm-credit';
  var PAD_CLASS = 'ttc-wm-bar-pad';
  var CFG = null;

  function scriptEl() {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
      var s = scripts[i];
      if (s.src && /watermark\.js(\?|$)/.test(s.src)) return s;
      if (s.getAttribute('data-handles') || s.getAttribute('data-mode')) return s;
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
    var mode = (win.mode || (el && el.getAttribute('data-mode')) || 'tile').toLowerCase();
    if (mode !== 'bar') mode = 'tile';
    var position = (win.position || (el && el.getAttribute('data-position')) || 'bottom').toLowerCase();
    if (position !== 'top') position = 'bottom';
    var opacity = win.opacity != null ? Number(win.opacity) : (theme === 'dark' ? 0.11 : (handles.length > 1 ? 0.09 : 0.075));
    CFG = { handles: handles, theme: theme, opacity: opacity, mode: mode, position: position };
    return CFG;
  }

  function markText() {
    return '© ' + config().handles.join(' · ');
  }

  function authorContent() {
    return config().handles.join(', ');
  }

  function cssText() {
    var cfg = config();
    var op = cfg.opacity;
    var printOp = Math.min(0.18, op + 0.06);
    var tileColor = cfg.theme === 'dark' ? '#e8dcc8' : '#c9b8a0';
    var parts = [
      '.' + FOOTER_CLASS + '{margin:18px 0 8px;text-align:center;font:500 12px/1.4 ui-sans-serif,system-ui,sans-serif;color:rgba(120,90,60,0.9);pointer-events:none}'
    ];
    if (cfg.mode === 'bar') {
      parts.push(
        'html.' + PAD_CLASS + '-bottom,body.' + PAD_CLASS + '-bottom{padding-bottom:36px!important}',
        'html.' + PAD_CLASS + '-top,body.' + PAD_CLASS + '-top{padding-top:36px!important}',
        '#' + BAR_ID + '{position:fixed;left:0;right:0;z-index:2147483001;pointer-events:none!important;user-select:none!important;-webkit-user-select:none!important;display:flex;align-items:center;justify-content:center;gap:8px;min-height:32px;padding:6px 12px;font:700 12px/1.2 ui-sans-serif,system-ui,Segoe UI,Roboto,Nunito,sans-serif;letter-spacing:0.02em;color:#5b4632;background:linear-gradient(180deg,rgba(255,248,235,.96),rgba(255,236,210,.96));border-color:rgba(210,160,90,.35);box-shadow:0 -2px 12px rgba(80,50,20,.08);-webkit-print-color-adjust:exact;print-color-adjust:exact}',
        '#' + BAR_ID + '.ttc-wm-bar-bottom{bottom:0;border-top:1px solid rgba(210,160,90,.35)}',
        '#' + BAR_ID + '.ttc-wm-bar-top{top:0;border-bottom:1px solid rgba(210,160,90,.35);box-shadow:0 2px 12px rgba(80,50,20,.08)}',
        '#' + BAR_ID + ' .ttc-wm-bar-mark{white-space:nowrap}',
        '@media (max-width:420px){#' + BAR_ID + '{font-size:11px;min-height:30px;padding:5px 8px} html.' + PAD_CLASS + '-bottom,body.' + PAD_CLASS + '-bottom{padding-bottom:34px!important} html.' + PAD_CLASS + '-top,body.' + PAD_CLASS + '-top{padding-top:34px!important}}',
        '@media print{#' + BAR_ID + '{position:fixed;opacity:1!important;color:#333!important;background:#f5f0e6!important;border-color:#bbb!important}}',
        /* hide legacy tile/badge if somehow present */
        '#' + LAYER_ID + ',#' + BADGE_ID + '{display:none!important}'
      );
    } else {
      parts.push(
        '.ttc-wm-layer{position:fixed;inset:0;z-index:2147483000;pointer-events:none!important;user-select:none!important;-webkit-user-select:none!important;overflow:hidden;contain:strict}',
        '.ttc-wm-tile{position:absolute;inset:-40% -20%;display:flex;flex-wrap:wrap;align-content:flex-start;gap:2.2rem 2.8rem;transform:rotate(-28deg);opacity:' + op + ';color:' + tileColor + ';font:600 15px/1.2 ui-sans-serif,system-ui,Segoe UI,Roboto,Manrope,sans-serif;letter-spacing:0.04em;white-space:nowrap}',
        '.ttc-wm-tile span{display:inline-block;padding:0.35rem 0.6rem}',
        '.ttc-wm-badge{position:fixed;right:10px;bottom:10px;z-index:2147483001;pointer-events:none!important;user-select:none!important;font:600 11px/1.2 ui-sans-serif,system-ui,sans-serif;letter-spacing:0.02em;color:rgba(243,233,220,0.78);background:rgba(20,15,12,0.5);border:1px solid rgba(212,168,87,0.32);border-radius:999px;padding:5px 10px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);max-width:min(92vw,420px);text-align:center}',
        '@media (max-width:420px){.ttc-wm-tile{font-size:12px;gap:1.6rem 1.8rem}.ttc-wm-badge{right:8px;bottom:8px;font-size:10px;padding:4px 8px}}',
        '@media print{.ttc-wm-layer{position:fixed;inset:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ttc-wm-tile{opacity:' + printOp + '!important;color:#666!important}.ttc-wm-badge{position:fixed;right:8px;bottom:8px;opacity:1!important;color:#333!important;background:transparent!important;border-color:#999!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}}',
        '#' + BAR_ID + '{display:none!important}'
      );
    }
    return parts.join('');
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

  function ensureBar() {
    var cfg = config();
    var bar = document.getElementById(BAR_ID);
    var text = markText();
    var posClass = cfg.position === 'top' ? 'ttc-wm-bar-top' : 'ttc-wm-bar-bottom';
    if (!bar) {
      bar = document.createElement('div');
      bar.id = BAR_ID;
      bar.setAttribute('aria-hidden', 'true');
      bar.setAttribute('data-ttc-wm', '1');
      var mark = document.createElement('span');
      mark.className = 'ttc-wm-bar-mark';
      mark.textContent = text;
      bar.appendChild(mark);
      (document.body || document.documentElement).appendChild(bar);
    } else {
      var m = bar.querySelector('.ttc-wm-bar-mark');
      if (m) m.textContent = text; else bar.textContent = text;
    }
    bar.className = posClass;
    var pad = PAD_CLASS + '-' + cfg.position;
    document.documentElement.classList.add(pad);
    if (document.body) document.body.classList.add(pad);
    // remove opposite pad
    var other = PAD_CLASS + '-' + (cfg.position === 'top' ? 'bottom' : 'top');
    document.documentElement.classList.remove(other);
    if (document.body) document.body.classList.remove(other);
    return bar;
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
    if (config().mode === 'bar') return; // bar is the credit
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
      CFG = null;
      ensureStyle();
      ensureMeta();
      if (document.body) {
        if (config().mode === 'bar') {
          ensureBar();
          var oldLayer = document.getElementById(LAYER_ID);
          var oldBadge = document.getElementById(BADGE_ID);
          if (oldLayer) oldLayer.remove();
          if (oldBadge) oldBadge.remove();
        } else {
          ensureLayer();
          ensureBadge();
          var oldBar = document.getElementById(BAR_ID);
          if (oldBar) oldBar.remove();
        }
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
      var cfg = config();
      var missingStyle = !document.getElementById(STYLE_ID);
      var missingMeta = !document.querySelector('meta[name="' + META_NAME + '"]');
      var missingMark = cfg.mode === 'bar'
        ? !document.getElementById(BAR_ID)
        : (!document.getElementById(LAYER_ID) || !document.getElementById(BADGE_ID));
      if (missingStyle || missingMeta || missingMark) mount();
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
