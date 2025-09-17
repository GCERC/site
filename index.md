---
permalink: /
layout: layouts/wide
title: Home
eleventyNavigation:
  key: home
  title: Home
topics:
  - title: Who We Are
    url: /pages/about-us/council-members/
    img: /img/who-we-are.jpg
    alt:
    body: We are dedicated to the revitalization and protection of the natural and economic resources of the Gulf Coast.
    buttontext: Meet the Council Members
  - title: What We Do
    url: /pages/our-work/comprehensive-plan/
    img: /img/what-we-do.jpg
    alt:
    body: We collaborate with State and Federal partners to implement science-based projects that restore critical habitats, improve water quality, and enhance coastal resilience across the Gulf Coast.
    buttontext: Learn how we plan
  - title: View Projects
    url: https://experience.arcgis.com/experience/5552d321b5ad4f67b7fe8d23cbc24676
    img: /img/story-map.jpg
    alt:
    body: Comprehensive, science-based reports and strategic plans that outline restoration goals, project funding allocations, and progress assessments for ecosystem recovery along the Gulf Coast.
    buttontext: View project dashboard
  - title: Resources
    url: /pages/reports/index/
    img: /img/resources.jpg
    alt:
    body: Learn about RESTORE-funded projects in an interactive map and dashboard.
    buttontext: See our reports
---

{% comment %}
Welcome to official Federalist Jekyll template for the U.S Web Design System 2.0

You'll notice that this page only makes reference to two other html files: hero.html and highlights.html

To the edit the home page, you can edit those files directly, create new ones or add content directly to
this page.

We recommend splitting apart your site's components into their own smaller section so that its easier to
manage in the long term.
{% endcomment %}

{% include "hero.html" %}
{% include "highlights.html", topics:topics %}

