---
layout: default
title: Iframe Test
permalink: /iframe-test/
---

# > iframe test

<p class="subtitle">a scratch page for checking the iframe embed + corner link</p>

Every embed below uses the same `_includes/iframe-embed.html` include:

```liquid
{% raw %}{% include iframe-embed.html url="https://example.com" title="Example" height="400px" %}{% endraw %}
```

It draws a bordered box with the iframe inside, plus a small arrow button
pinned to the top-right corner that opens the real page in a new tab
(`target="_blank"`) — useful as a fallback since a lot of sites, Google
included, send headers (`X-Frame-Options` / `Content-Security-Policy:
frame-ancestors`) that block them from being embedded in an iframe at all.

## google.com

{% include iframe-embed.html url="https://www.google.com" title="Google" height="400px" %}

If the box above looks blank or shows a "refused to connect" message, that's
expected — it's Google's server blocking the embed, not a bug here. Either
way, the arrow in the corner still links straight to the real page.

## wikipedia (usually embeds fine)

{% include iframe-embed.html url="https://en.wikipedia.org/wiki/Jekyll_(software)" title="Wikipedia" height="450px" %}
