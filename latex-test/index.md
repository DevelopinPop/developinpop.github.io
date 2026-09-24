---
layout: default
title: LaTeX Test
mathjax: true
permalink: /latex-test/
---

# > latex test

<p class="subtitle">a scratch page for checking that math renders correctly</p>

Kramdown's `$$...$$` syntax is used for both inline and display math — inline
when it sits inside a sentence, display when it's alone on its own line with
blank lines around it. MathJax (loaded only on this page, via `mathjax: true`
in the front matter) is what actually renders it in the browser.

## inline math

Here's an inline equation, mass-energy equivalence, $$E = mc^2$$, sitting
right in the middle of a sentence.

## the quadratic formula

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

## a sum and an integral

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

## a matrix

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

## an aligned system of equations

$$
\begin{aligned}
x + y &= 5 \\
2x - y &= 1
\end{aligned}
$$

## subscript / superscript torture test

Plain markdown treats a lone underscore as emphasis, so this checks that math
escapes that correctly: $$a_1^2 + a_2^2 = c^2$$ and $$x_{i,j}$$.

---

If nothing above rendered as math (i.e. you still see raw `\(...\)` or
`\[...\]`), open the browser console — the most common cause is the MathJax
CDN being blocked by a network policy.
