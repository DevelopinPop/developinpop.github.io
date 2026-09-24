---
layout: default
title: Blog
permalink: /blog/
---

# > blog

<p class="subtitle">thoughts, updates, and whatever else</p>

<div style="margin-top: 30px;">
{% for post in site.posts %}
<a class="card" href="{{ post.url | relative_url }}">
    <h3>{{ post.title }}</h3>
    <div class="meta">{{ post.date | date: "%B %-d, %Y" }}</div>
    <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
</a>
{% else %}
<p class="loading">no posts yet — add a markdown file to <code>_posts/</code>!</p>
{% endfor %}
</div>
