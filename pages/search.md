---
title: Search
layout: layouts/search
permalink: /search/
sidenav: false
---

{% if site.searchgov %}

  <h1>Search Results</h1>
  <ol id="search-results"></ol>
{% else %}
  <script>
    window.location = "/";
  </script>
{% endif %}