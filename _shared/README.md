# TutorCall shared lesson assets

## Watermark (`@gamify_guru`)

Add to any lesson page (student or teacher):

```html
<meta name="author" content="@gamify_guru"/>
<script src="../_shared/watermark.js" defer></script>
```

`watermark.js` is self-contained (injects CSS, tiled overlay, corner badge, footer credit, MutationObserver re-inject).  
`watermark.css` mirrors the styles for reference / non-JS fallbacks.

Relative path assumes the lesson lives next to `_shared/` (e.g. `public/lessons/<slug>/` → `../_shared/`).
On gh-pages, publish `_shared/` as a sibling of the lesson folder (root and/or `lessons/`).
