---
layout: default
title: Home
---

<div class="hero-fade"></div>

<section class="hero">
    <div class="hero-emoji">👋</div>
    <div>
        <h1>hi, i'm <strong>{{ site.author }}!</strong></h1>
        <p class="subtitle">{{ site.tagline }}</p>
    </div>
    <a href="#who-am-i" class="scroll-arrow" aria-label="Scroll down">⌄</a>
</section>

<section class="block" id="who-am-i" markdown="1">

## > who am i?

I'm {{ site.author }}, a (put your thing here) who likes making stuff and putting it online.

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

<section class="block" markdown="1">

## > past projects

a bunch of these are done for fun :3

<div class="card">
<h3>Example Project</h3>
<p>Replace this with a real project — swap in a screenshot, a link, a short blurb about what it does.</p>
</div>

[To see all, click here.]({{ '/projects/' | relative_url }})

</section>
