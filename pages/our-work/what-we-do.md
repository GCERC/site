---
title: What We Do
lead: >
  The economy and culture of the Gulf Coast are built on the natural environment. Rivers, marshes, forests, beaches and other ecosystems support tourism, fishing, lifestyles and communities across the Gulf. The Council helps restore and protect these Gulf resources for the benefit of current and future generations.
eleventyNavigation:
  key: what-we-do
  parent: our-work
  title: What We Do
  order: 0
cardlinks:
  - url: /restore-impact/protecting-and-restoring-valuable-coastal-habitat/
    photo: /img/20220517_153502_1_4_big.jpg
    caption: Protecting and Restoring Valuable Coastal Habitat
  - url: /restore-impact/protecting-communities-from-coastal-flooding/
    photo: /img/Paradis-Gate_Ribbon-Cutting-900x600_pg7_0_big.jpg
    caption: Protecting Communities from Coastal Flooding
  - url: /restore-impact/improving-water-quality-and-working-with-private-landowners/
    photo: /img/USDA_Gulf_Cons_Reserve_before_pg8_big.jpg
    caption: Improving Water Quality and Working with Private Landowners
  - url: /restore-impact/innovation-to-enhance-community-resilience/
    photo: /img/Maurepas_Swamp_pg8_big.jpg
    caption: Innovation to Enhance Community Resilience
  - url: /restore-impact/creating-jobs-and-strengthening-coastal-economies/
    photo: /img/PRDFT-shrimp_boats.jpg-20150624_big.jpg
    caption: Creating Jobs and Strengthening Coastal Economies
  - url: /restore-impact/leveraging-fund-for-bigger-results/
    photo: /img/Hancock_County_Marsh_Living_Shoreline_pg9_big.JPG
    caption: Leveraging Funds for Bigger Results
---

## How the Council Funds Projects

The Council is guided by a Comprehensive Plan, which establishes our vision, goals, and objectives for Gulf ecosystem restoration. Projects and programs funded by the Council must align with the Comprehensive Plan goals and objectives. The Comprehensive Plan also has Council commitments to science, collaboration, public engagement and more. The Council’s vision is:

“A healthy and productive Gulf ecosystem achieved through collaboration on strategic restoration projects and programs.”

## RESTORE Projects

The Council supports ecosystem restoration that can enhance local communities by giving people desirable places to live, work, and play, while creating opportunities for new and existing businesses of all sizes, especially those dependent on natural resources.

The Council has adopted the following five goals which provide the overarching framework for an integrated and coordinated approach for region-wide Gulf Coast restoration and to help guide the collective actions at the local, state, tribal, and federal levels. These goals were collaboratively developed through and approved through coordination with all eleven members of the RESTORE Council and can be found in the Council approved Comprehensive Plan.

<div class="restore-goals-table">
 <table class="usa-table usa-table--striped">
   <caption>
    RESTORE Goals
   </caption>
   <thead>
     <tr>
       <th scope="col">Goal</th>
       <th scope="col">Description</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <th scope="row">Goal 1</th>
       <td>
        Restore and Conserve Habitat - Restore and conserve the health, diversity, and resilience of key coastal, estuarine, and marine habitats.
       </td>
     </tr>
     <tr>
       <th scope="row">Goal 2</th>
       <td>
        Restore Water Quality and Quantity - Restore and protect the water quality and quantity of the Gulf Coast region's fresh, estuarine, and marine waters.
       </td>
     </tr>
     <tr>
       <th scope="row">Goal 3</th>
       <td>
        Replenish and Protect Living Coastal and Marine Resources - Restore and protect healthy, diverse, and sustainable living coastal and marine resources.
       </td>
     </tr>
     <tr>
       <th scope="row">Goal 4</th>
       <td>
        Enhance Community Resilience - Build upon and sustain communities with the capacity to adapt to short- and long-term changes.
       </td>
     </tr>
     <tr>
       <th scope="row">Goal 5</th>
       <td>
        Restore and Revitalize the Gulf Economy - Enhance the sustainability and resiliency of the Gulf economy.
       </td>
     </tr>
   </tbody>
 </table>
</div>

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
