---
layout: default
title: Blog
permalink: /blog/
---

# > blog

<p class="subtitle">thoughts, updates, and whatever else</p>

<div style="margin-top: 30px;">
{% for post in site.posts %}
<div class="blog-card">
    <a class="stretched-link" href="{{ post.url | relative_url }}" aria-label="{{ post.title }}"></a>
    <div class="blog-card-row">
        <span class="blog-card-title">{{ post.title }}</span>
        <span class="blog-card-date">{{ post.date | date: "%B %-d, %Y" }}</span>
    </div>
    <div class="blog-card-tags">
        {% for tag in post.tags %}<span class="tag-pill tag-color-{{ tag | size | modulo: 5 }}">{{ tag }}</span>{% endfor %}
    </div>
</div>
{% else %}
<p class="loading">no posts yet — add a markdown file to <code>_posts/</code>!</p>
{% endfor %}
</div>
