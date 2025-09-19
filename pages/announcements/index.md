---
layout: layouts/post-index
title: RESTORE Council Announcements
permalink: "/announcements{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
eleventyNavigation:
  key: announcements
  parent: home
  title: Announcements
  order: 4
  hideChildrenFromTopNav: true
pagination:
  data: collections.announcements
  size: 10
  alias: posts
  reverse: true
---
{%- for post in posts -%}
  {%- include 'collection-item.html', post: post -%}
{%- endfor -%}
