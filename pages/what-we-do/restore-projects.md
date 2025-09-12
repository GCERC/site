---
title: RESTORE Projects
permalink: /restore-projects/
eleventyNavigation:
  key: restore-projects
  parent: what-we-do
  title: RESTORE Projects
cardlinks:
  - url: /restore-impact/protecting-and-restoring-valuable-coastal-habitat/
    photo: /img//20220517_153502_1.4.jpg
    caption: Protecting and Restoring Valuable Coastal Habitat
  - url: /restore-impact/protecting-communities-from-coastal-flooding/
    photo: /img//Paradis-Gate_Ribbon-Cutting-900x600%28pg7%29_0.jpg
    caption: Protecting Communities from Coastal Flooding
  - url: /restore-impact/improving-water-quality-and-working-with-private-landowners/
    photo: /img/USDA%20Gulf%20Cons%20Reserve%20before%20%28pg%208%29.jpg
    caption: Improving Water Quality and Working with Private Landowners
  - url: /restore-impact/innovation-to-enhance-community-resilience/
    photo: /img/Maurepas%20Swamp%20%28pg%208%29.jpg
    caption: Innovation to Enhance Community Resilience
  - url: /restore-impact/creating-jobs-and-strengthening-coastal-economies/
    photo: /img/PRDFT-shrimp_boats.jpg-20150624.jpg 
    caption: Creating Jobs and Strengthening Coastal Economies
  - url: /restore-impact/leveraging-fund-for-bigger-results/
    photo: /img/Hancock%20County%20Marsh%20Living%20Shoreline%20%28pg%209%29.JPG
    caption: Leveraging Funds for Bigger Results
---

The Council supports ecosystem restoration that can enhance local communities by giving people desirable places to live, work, and play, while creating opportunities for new and existing businesses of all sizes, especially those dependent on natural resources.

The Council has adopted the following five goals which provide the overarching framework for an integrated and coordinated approach for region-wide Gulf Coast restoration and to help guide the collective actions at the local, state, tribal, and federal levels. These goals were collaboratively developed through and approved through coordination with all eleven members of the RESTORE Council and can be found in the Council approved Comprehensive Plan.

RESTORE Goals

Goal 1

Restore and Conserve Habitat - Restore and conserve the health, diversity, and resilience of key coastal, estuarine, and marine habitats.

Goal 2

Restore Water Quality and Quantity - Restore and protect the water quality and quantity of the Gulf Coast region's fresh, estuarine, and marine waters.

Goal 3

Replenish and Protect Living Coastal and Marine Resources - Restore and protect healthy, diverse, and sustainable living coastal and marine resources.

Goal 4

Enhance Community Resilience - Build upon and sustain communities with the capacity to adapt to short- and long-term changes.

Goal 5

Restore and Revitalize the Gulf Economy - Enhance the sustainability and resiliency of the Gulf economy.

By working closely with our restoration partners, the Gulf Coast Ecosystem Restoration Council is making significant progress towards comprehensive Gulf restoration and is providing substantial environmental and economic benefits to current and future generations.

<ul class="usa-card-group padding-top-4">
{% for cardlink in cardlinks %}
  {% assign url = cardlink.url %}
  {% assign body_text = cardlink.caption %}
  {% capture body %}
    <a href="{{ url }}" class="text-primary">{{ body_text }}</a>
  {% endcapture %}
  {% include "card.html", title: null, photo: cardlink.photo, url: cardlink.url, body: body %}
{% endfor %}
</ul> 

For more information about the progress the Council has made towards achieving the goals defined in the Comprehensive Plan, please view our Progress Dashboard [here](https://experience.arcgis.com/experience/5552d321b5ad4f67b7fe8d23cbc24676).

<div class="display-flex flex-justify-center padding-top-3">
  <a href="https://experience.arcgis.com/experience/5552d321b5ad4f67b7fe8d23cbc24676">
    <img src="/img/StoryMap%20Image%20high%20res.jpg" alt="Project Story Map">
  </a>
</div>

