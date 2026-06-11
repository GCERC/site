---
permalink: /
layout: layouts/wide
title: Home
eleventyNavigation:
  key: home
  title: Home
hero:
  title: RESTORE Council Approves $403 Million for Gulf Coast Ecosystem
    Restoration in Milestone 2026 Funded Priorities List
  url: https://www.restorethegulf.gov/our-work/fpl/fpl-2026/
  body: The Gulf Coast Ecosystem Restoration Council (RESTORE Council) voted
    unanimously to approve the 2026 Funded Priorities List (FPL), committing
    $403,654,000 in new funding for 19 ecosystem restoration projects and
    programs across the Gulf Coast.
  buttontext: Learn more
topics:
  - title: Who We Are
    url: /about-us/council-members/
    img: /img/who-we-are.jpg
    alt: Public Council Member Meeting
    body: We are dedicated to the revitalization and protection of the natural and
      economic resources of the Gulf Coast.
    buttontext: Meet the Council Members
  - title: What We Do
    url: /our-work/comprehensive-plan/
    img: /img/what-we-do.jpg
    alt: Gulf Coast
    body: We collaborate with State and Federal partners to implement science-based
      projects that restore critical habitats, improve water quality, and
      enhance coastal resilience across the Gulf Coast.
    buttontext: Learn how we plan
  - title: View Projects
    url: https://experience.arcgis.com/experience/5552d321b5ad4f67b7fe8d23cbc24676
    img: /img/story-map.jpg
    alt: Map of Gulf Coast
    body: Learn about RESTORE-funded projects in an interactive map and dashboard.
    buttontext: View project dashboard
  - title: Resources
    url: /reports/
    img: /img/resources.jpg
    alt: Cover of 2022 Comprehensive Plan
    body: Comprehensive, science-based reports and strategic plans that outline
      restoration goals, project funding allocations, and progress assessments
      for ecosystem recovery along the Gulf Coast.
    buttontext: See our reports
cms: true
---

{% include 'hero.html', hero: hero %}
{% include 'highlights.html', topics: topics %}
