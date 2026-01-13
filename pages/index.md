---
permalink: /
layout: layouts/wide
title: Home
eleventyNavigation:
  key: home
  title: Home
hero:
  title: Reflections on Restoration
  url: /reports/reflections-on-restoration/
  body: >
    The Gulf Coast Ecosystem Restoration Council (RESTORE Council) is commemorating 15 years since the Deepwater 
    Horizon oil spill with a month-long reflection on its progress.
  buttontext: Learn more
topics:
  - title: Who We Are
    url: /about-us/council-members/
    img: /img/who-we-are.jpg
    alt: ""
    body: We are dedicated to the revitalization and protection of the natural and economic resources of the Gulf Coast.
    buttontext: Meet the Council Members
  - title: What We Do
    url: /our-work/comprehensive-plan/
    img: /img/what-we-do.jpg
    alt: ""
    body: We collaborate with State and Federal partners to implement science-based projects that restore critical habitats, improve water quality, and enhance coastal resilience across the Gulf Coast.
    buttontext: Learn how we plan
  - title: View Projects
    url: https://experience.arcgis.com/experience/5552d321b5ad4f67b7fe8d23cbc24676
    img: /img/story-map.jpg
    alt: ""
    body: Comprehensive, science-based reports and strategic plans that outline restoration goals, project funding allocations, and progress assessments for ecosystem recovery along the Gulf Coast.
    buttontext: View project dashboard
  - title: Resources
    url: /reports/
    img: /img/resources.jpg
    alt: ""
    body: Learn about RESTORE-funded projects in an interactive map and dashboard.
    buttontext: See our reports
cms: true
---

{% include 'hero.html', hero: hero %}
{% include 'highlights.html', topics: topics %}
