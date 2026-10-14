# Blog

A personal site built with Jekyll for GitHub Pages, set in a single monospace typeface.

- **`/`** is a landing page: a live ASCII rendering of a turning 3D form, drawn by `assets/js/field.js`. The light follows the pointer. Visitors who prefer reduced motion get a single still frame.
- **`/blog/`** is the blog: a dark, single-column reading layout with Writing, Topics and About in the header. Styles live in `assets/css/blog.css`.

## Edit your details

Everything about you (name, tagline, blog intro, About page text, subscribe note, email, links) lives at the top of **`_config.yml`**.

## Write a post

Create a Markdown file in **`_posts/`** named `YYYY-MM-DD-slug.md`, for example `_posts/2026-10-20-my-new-post.md`:

```markdown
---
title: My new post
topic: Process                # groups posts on /topics/
summary: One sentence used as the page description for search and sharing.
---

Opening paragraph.

## A section heading

Normal Markdown: lists, quotes, tables, code blocks and images all work.
```

- The filename becomes the URL: `/blog/my-new-post/`.
- Posts are listed newest-first on `/blog/`.
- Put images in `assets/img/` and reference them from the post with normal Markdown.
- To hide a post without deleting it, add `published: false` to its front matter.
- An RSS feed is generated at `/feed.xml`.
- The nine sample posts are dummy content. Replace them before launch.

## Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment**. Set the source to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
3. If the repo is named `USERNAME.github.io`, the site is live at that address.
   If the repo has any other name, set `baseurl: "/REPO-NAME"` in `_config.yml`.

## Preview locally (optional)

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

The blog stylesheet is named `blog.css`, not `style.css`, on purpose: the `github-pages` gem applies GitHub's default theme, which ships its own `assets/css/style.scss` and would overwrite a file with that name.
