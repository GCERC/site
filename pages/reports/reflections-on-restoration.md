---
title: Reflections on Restoration Progress
eleventyNavigation:
  key: reflections
  parent: reports
  title: Reflections on Restoration
cardlinks:
  - pdf: /uploads/RESTORE_2025StatusReport.pdf
    photo: /img/Status%20Report%20Cover.jpg
    caption: 2025 Status Report
---

### RESTORE Council - 2025

The RESTORE Council is commemorating 15-years since the Deepwater Horizon oil spill with a month-long reflection on its progress to date implementing meaningful ecosystem and economic restoration across the Gulf Coast. To date, the RESTORE Council has invested over $1.1 billion in Gulf Coast restoration. Over $470 million has been awarded through the Council-Selected Restoration Component for Gulfwide ecosystem restoration and protection. In that same period, over $679 million has been awarded through the Spill Impact Component to contribute to the overall economic and ecological recovery of the Gulf coast region. Over its lifetime, the RESTORE Council will invest over $3 billion in restoration activities in the Gulf Coast.

<ul class="usa-card-group padding-y-3">
{% for cardlink in cardlinks %}
  {% capture body %}
    <a href="{{ cardlink.pdf }}" class="text-primary" target="_blank">{{ cardlink.caption }}</a>
  {% endcapture %}
  {% include "card.html", title: null, photo: cardlink.photo, pdf: cardlink.pdf, body: body %}
{% endfor %}
</ul>

By working closely with its restoration partners, the RESTORE Council is making significant progress toward comprehensive Gulf Coast restoration, protecting communities from coastal flooding, creating and strengthening coastal economies, and providing substantial environmental and economic benefits to current and future generations. 

The Council has issued a series of announcements highlighting our work across the Gulf Coast. These highlights are just a few examples of Council-sponsored projects and programs across the Gulf. 

- [View these Reflections on Restoration Progress highlights]({{ '../announcements/index.md' | inputPathToUrl }})
- [Watch Our Reflections on Restoration video - featuring some of our projects]({{ '../../collections/announcements/2025-04-17-reflections-restoration-video.md' | inputPathToUrl }})
- [Visit a map of our RESTORE Projects]({{ '../our-work/what-we-do/index.md#restore-projects' | inputPathToUrl }})
