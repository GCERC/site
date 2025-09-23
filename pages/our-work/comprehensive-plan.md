---
title: Restoration Planning
redirect_from:
  - /comprehensive-plan
lead: >
  The RESTORE Act called for a regional approach to restoring the long-term health of the valuable natural ecosystems and economy of the Gulf Coast region. The Council is responsible for developing a Comprehensive Plan to guide a coordinated, regionwide effort to restore, protect, and revitalize the Gulf Coast.
eleventyNavigation:
  key: comprehensive-plan
  parent: our-work
  title: Restoration Planning
  order: 1
cardlinks:
  - pdf: /uploads/2022_Comp-Plan_Update_Final.pdf
    photo: /img/2022_Comp-Plan_Update_Final_Page_cover.jpg
    caption: 2022 Update to the Comprehensive Plan
  - pdf: /uploads/20161208_CompPlanUpdate_English.pdf
    photo: /img/20161208_CompPlanUpdate_English_Page_cover.jpg
    caption: 2016 Update to the Comprehensive Plan
  - pdf: /uploads/Initial Comprehensive Plan Aug 2013.pdf
    photo: /img/Initial Comprehensive Plan Aug 2013_Page_cover.jpg
    caption: 2013 Initial Comprehensive Plan
secondarycards:
  - pdf: /uploads/508_PlanningFramework_Final_201908.pdf
    photo: /img/508_PlanningFramework_Final_201908_Page_cover_edited.jpg
    caption: 2019 Planning Framework
  - pdf: /uploads/2023_Planning_Framework.pdf
    photo: /img/2023_Planning_Framework_Page_cover_edited.jpg
    caption: 2023 Planning Framework Update
---

On September 14, 2022, the RESTORE Council voted to approve the 2022 Comprehensive Plan Update: Restoring the Gulf Coast’s Ecosystem and Economy (2022 Comprehensive Plan Update). The Council translated the 2022 Comprehensive Plan Update into Spanish and Vietnamese. This is the second update to the 2013 Initial Comprehensive Plan.

## Comprehensive Plan and Updates:

<ul class="usa-card-group">
{% for cardlink in cardlinks %}
  {% capture body %}<p><a href="{{ cardlink.pdf }}" class="text-primary" target="_blank">{{ cardlink.caption }}</a></p>{% endcapture %}
  {% include "card.html", title: null, photo: cardlink.photo, pdf: cardlink.pdf, body: body %}
{% endfor %}
</ul>

## Planning Framework

In 2023, the Gulf Coast Ecosystem Restoration Council (RESTORE Council or Council) updated the Gulf Coast Ecosystem Restoration Council 2019 Planning Framework (Planning Framework). The Planning Framework serves as a “bridge” between the Council’s overarching goals and objectives identified in the Comprehensive Plan and the specific restoration projects and programs approved in future FPLs. The Planning Framework identifies five priority approaches and associated techniques, along with their application within specific geographic areas in an effort to give the public and potential funding partners an indication of the types of projects and programs that may be considered for FPL funding consideration.

## Planning Framework and Update:

<ul class="usa-card-group">
{% for secondarycard in secondarycards %}
  {% capture body %}<p><a href="{{ secondarycard.pdf }}" class="text-primary" target="_blank">{{ secondarycard.caption }}</a></p>{% endcapture %}
  {% include "card.html", title: null, photo: secondarycard.photo, pdf: secondarycard.pdf, body: body %}
{% endfor %}
</ul>
