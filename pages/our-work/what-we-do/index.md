---
title: What We Do
redirect_from:
  - /what-we-do
lead: >
  The economy and culture of the Gulf Coast are built on the natural environment. Rivers, marshes, forests, beaches and other ecosystems support tourism, fishing, lifestyles and communities across the Gulf. The Council helps restore and protect these Gulf resources for the benefit of current and future generations.
eleventyNavigation:
  key: what-we-do
  parent: our-work
  title: What We Do
  order: 0
cardlinks:
  - url: ./protecting-and-restoring-valuable-coastal-habitat.md
    photo: /img/20220517_153502_1_4_big.jpg
    caption: Protecting and Restoring Valuable Coastal Habitat
  - url: ./protecting-communities-from-coastal-flooding.md
    photo: /img/Paradis-Gate_Ribbon-Cutting-900x600_pg7_0_big.jpg
    caption: Protecting Communities from Coastal Flooding
  - url: ./improving-water-quality-and-working-with-private-landowners.md
    photo: /img/USDA_Gulf_Cons_Reserve_before_pg8_big.jpg
    caption: Improving Water Quality and Working with Private Landowners
  - url: ./innovation-to-enhance-community-resilience.md
    photo: /img/Maurepas_Swamp_pg8_big.jpg
    caption: Innovation to Enhance Community Resilience
  - url: ./creating-jobs-and-strengthening-coastal-economies.md
    photo: /img/PRDFT-shrimp_boats.jpg-20150624_big.jpg
    caption: Creating Jobs and Strengthening Coastal Economies
  - url: ./leveraging-fund-for-bigger-results.md
    photo: /img/Hancock_County_Marsh_Living_Shoreline_pg9_big.JPG
    caption: Leveraging Funds for Bigger Results
---

## How the Council Funds Projects

The Council is guided by a Comprehensive Plan, which establishes our vision, goals, and objectives for Gulf ecosystem restoration. Projects and programs funded by the Council must align with the Comprehensive Plan goals and objectives. The Comprehensive Plan also has Council commitments to science, collaboration, public engagement and more. The Council’s vision is:

“A healthy and productive Gulf ecosystem achieved through collaboration on strategic restoration projects and programs.”

## RESTORE Projects

The Council supports ecosystem restoration that can enhance local communities by giving people desirable places to live, work, and play, while creating opportunities for new and existing businesses of all sizes, especially those dependent on natural resources.

The Council has adopted the following five goals which provide the overarching framework for an integrated and coordinated approach for region-wide Gulf Coast restoration and to help guide the collective actions at the local, state, tribal, and federal levels. These goals were collaboratively developed through and approved through coordination with all eleven members of the RESTORE Council and can be found in the Council approved Comprehensive Plan.

| Goal                                               | Description                                                                                                                                             |
| :------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <span class="text-bold text-no-wrap">Goal 1</span> | Restore and Conserve Habitat - Restore and conserve the health, diversity, and resilience of key coastal, estuarine, and marine habitats.               |
| <span class="text-bold text-no-wrap">Goal 2</span> | Restore Water Quality and Quantity - Restore and protect the water quality and quantity of the Gulf Coast region's fresh, estuarine, and marine waters. |
| <span class="text-bold text-no-wrap">Goal 3</span> | Replenish and Protect Living Coastal and Marine Resources - Restore and protect healthy, diverse, and sustainable living coastal and marine resources.  |
| <span class="text-bold text-no-wrap">Goal 4</span> | Enhance Community Resilience - Build upon and sustain communities with the capacity to adapt to short- and long-term changes.                           |
| <span class="text-bold text-no-wrap">Goal 5</span> | Restore and Revitalize the Gulf Economy - Enhance the sustainability and resiliency of the Gulf economy.                                                |

By working closely with our restoration partners, the Gulf Coast Ecosystem Restoration Council is making significant progress towards comprehensive Gulf restoration and is providing substantial environmental and economic benefits to current and future generations.

<ul class="usa-card-group padding-top-4">
{% for cardlink in cardlinks %}
  {% capture body %}
    <a href="{{ cardlink.url | inputPathToUrl }}" class="text-primary">{{ cardlink.caption }}</a>
  {% endcapture %}
  {% include "card.html", title: null, photo: cardlink.photo, url: cardlink.url, body: body %}
{% endfor %}
</ul>

For more information about the progress the Council has made towards achieving the goals defined in the Comprehensive Plan, please view our [Progress Dashboard](https://experience.arcgis.com/experience/5552d321b5ad4f67b7fe8d23cbc24676).
