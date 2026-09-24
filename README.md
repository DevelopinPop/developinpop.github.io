# YourName's site (Jekyll)

A personal site built with [Jekyll](https://jekyllrb.com/), styled after
[developinpop.github.io](https://developinpop.github.io/) — same gradient
background, Poppins font, and terminal-style navbar — but with a proper
markdown-powered blog instead of hand-written HTML.

## 1. Rename and personalize

- In `_config.yml`, change `title`, `tagline`, `description`, `author`, `email`.
- If this repo is **not** named `<your-username>.github.io`, set
  `baseurl: "/your-repo-name"` in `_config.yml`.
- Edit `index.md`, `projects/index.md`, and `contact/index.md` with your own content.

## 2. Write a blog post

Add a new file to `_posts/` named `YYYY-MM-DD-your-slug.md`:

```markdown
---
title: "My New Post"
date: 2024-09-24
tags: [life, projects]
---

Whatever you want, in normal **Markdown**.
```

That's the whole workflow — no build scripts, no manifest file to update.
Jekyll finds every file in `_posts/`, sorts it by date, and both the
homepage and the `/blog/` page pick it up automatically.

## 3. Run it locally (optional but recommended)

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Jekyll rebuilds automatically as you
edit files.

(Requires Ruby. See https://jekyllrb.com/docs/installation/ if you don't
have it yet.)

## 4. Deploy to GitHub Pages

1. Push this repo to GitHub.
2. If the repo is named `<your-username>.github.io`, GitHub Pages builds
   it automatically from the `main` branch — no extra setup needed.
3. Otherwise, go to **Settings → Pages** in your repo and set the source
   to the `main` branch (root). GitHub will build the Jekyll site for you
   on every push.
4. Your site will be live at `https://<your-username>.github.io[/repo-name]`.

## Folder structure

```
_config.yml       site settings
_layouts/         page templates (default.html, post.html)
_includes/        reusable snippets (navbar.html)
_posts/           your blog posts — one markdown file each
assets/css/       stylesheet
index.md          homepage
blog/index.md     blog listing (auto-generated from _posts)
projects/index.md projects page
contact/index.md  contact page
```
