# TutorCall shared lesson assets

## Watermark

Default (only `@gamify_guru`):

```html
<script src="../_shared/watermark.js" defer></script>
```

Multiple handles (e.g. Pathfinder course):

```html
<script src="../../_shared/watermark.js" defer
  data-handles="@gamify_guru,@o_olay_lay_lay"
  data-theme="dark"></script>
```

Or set `window.TTC_WATERMARK = { handles: ['@gamify_guru','@o_olay_lay_lay'], theme:'dark' }` before the script.
Default behaviour for existing lessons stays single `@gamify_guru`.
