---
layout: layouts/post-index
title: Media Gallery
permalink: "/media{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
eleventyNavigation:
  key: media
  parent: home
  title: Media Gallery
  order: 4
  hideChildrenFromTopNav: true
---

Hi

{%- assign first_post = posts | first -%}
{%- if first_post and first_post.url -%}
  {%- for post in posts -%}
    {%- include 'collection-item.html', post: post -%}
  {%- endfor -%}
{%- else -%}
  <p class="usa-prose">No media items are available yet. Please check back soon.</p>
{%- endif -%}
