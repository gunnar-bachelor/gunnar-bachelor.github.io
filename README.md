# Portfolio

A minimal, dark portfolio site in the Swiss style, built with Jekyll for GitHub Pages.

## Edit your details

Everything about you (name, intro, about text, services, integrations, process steps, contact note, email, links) lives at the top of **`_config.yml`**.

## Add a project

Create a new Markdown file in **`_projects/`**, for example `_projects/my-new-project.md`:

```markdown
---
title: My New Project
year: 2026
client: Client Name          # optional
category: Operations, Integration   # "Scope" in the work list
duration: 8 weeks            # optional
stack: Python, PostgreSQL    # optional
summary: One sentence that describes the project.
cover: /assets/img/projects/my-new-project.jpg   # optional
link: https://example.com    # optional
---

Opening paragraph (shown slightly larger).

## Brief

Write the case study in normal Markdown. Images work too:

![Alt text](/assets/img/projects/detail.jpg)
```

Commit and push the file. It appears on the home page within a minute or so.

- The filename becomes the URL: `/work/my-new-project/`.
- Projects are sorted by `year`, newest first. Always use a plain number, such as `year: 2026`.
- Put images in `assets/img/projects/`.
- To hide a project without deleting it, add `published: false` to its front matter.
- The five sample case studies (Hollis & Reed, Larkspur, Cedar Row, Tallgrass, Brennan) are fictional placeholders, including the client quotes. Replace them with real work before launch.

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

Then open http://localhost:4000. On the site, press **G** to show the 12-column grid.
