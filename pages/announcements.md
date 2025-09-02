---
layout: layouts/post-index
sidenav: false
title: RESTORE Council Announcements
permalink: "/announcements{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
pagination:
  data: collections.announcements
  size: 10
  alias: posts
---
