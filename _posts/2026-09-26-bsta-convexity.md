---
title: "Binary Searching on Convexity"
date: 2026-09-26
tags: [io]
---


Today, I want to ramble about my favourite Informatics Olympiad trick!

We define $$ \|x\| $$ as the absolute value of $$x$$. That is, $$\|x\| = max(x, -x)$$.

## Classic Problem 1

Given $$F(x) = \sum \|A_i-x \|$$. Find the minimum $$F(x)$$.

This problem can be solved by finding the median $$A_i$$ and finding $$F(A_i)$$.

However, consider the alternative solution:

Consider that $$\|A_i-x\|$$ is convex for any $$i$$. That is, the gradient is non-decreasing with $$x$$. In IO, since we're mainly working with integers, we can say that a function $$F(x)$$ is convex if $$F(x+1)-F(x) \le F(x+2) - F(x+1)$$ for all $$x$$ within the search space. 
