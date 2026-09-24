---
title: "LaTeX Post Template"
date: 2024-09-24
tags: [templates, math]
---

Copy this file into `_posts/` (renamed with today's date) whenever you want
to write a post with math in it. LaTeX is on by default site-wide, so there's
nothing special to add to the front matter — just write kramdown's `$$...$$`
syntax anywhere in the post.

## inline math

Use `$$...$$` right inside a sentence for inline math, like the mass-energy
equivalence $$E = mc^2$$, or a simple inequality: for all $$\varepsilon > 0$$
there exists $$\delta > 0$$ such that the usual epsilon-delta condition holds.

## block math

Put `$$...$$` alone on its own paragraph (blank line above and below) for a
centered display equation:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

That works for anything LaTeX supports — sums, integrals, matrices, aligned
systems:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\begin{aligned}
x + y &= 5 \\
2x - y &= 1
\end{aligned}
$$

## mixing math with regular markdown

Everything else works exactly like normal — **bold**, _italics_, code
blocks, images, links — you can freely mix those with inline and block math
in the same paragraph or post.

```python
# code blocks still work fine alongside math
def quadratic(a, b, c):
    return (-b + (b**2 - 4*a*c) ** 0.5) / (2*a)
```

See `/latex-test/` for a longer, dedicated stress-test of the math
rendering if something looks off.
