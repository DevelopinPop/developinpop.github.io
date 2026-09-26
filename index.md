---
layout: default
title: Home
---

<section class="hero">
    <div class="hero-emoji">👋</div>
    <div>
        <h1>hi, i'm <strong>{{ site.author }}!</strong></h1>
        <p class="subtitle">{{ site.tagline }}</p>
    </div>
</section>

<section class="block" id="who-am-i" markdown="1">

## > who am i?

I'm Melody, and I like doing silly stuff.

I hope to do a bunch of cool things and write about them here!

</section>

<section class="block" markdown="1">

## > latest posts

{% for post in site.posts limit: 3 %}
<div class="post-card">
    <a class="stretched-link" href="{{ post.url | relative_url }}" aria-label="{{ post.title }}"></a>
    <div class="post-card-left">
        <span class="post-card-title">{{ post.title }}</span>
        <span class="post-card-dot">&bull;</span>
        <span class="post-card-date">{{ post.date | date: "%B %-d, %Y" }}</span>
    </div>
    <div class="post-card-tags">
        {% for tag in post.tags %}<span class="tag-pill tag-color-{{ tag | size | modulo: 5 }}">{{ tag }}</span>{% endfor %}
    </div>
</div>
{% else %}
<p class="loading">no posts yet — add one to <code>_posts/</code>!</p>
{% endfor %}

[see all posts →]({{ '/blog/' | relative_url }})

</section>
