---
title: Who are the RESTORE Council Members?
permalink: /people/council-members/
eleventyNavigation:
  key: council-members
  parent: who-we-are
  title: Council Members
lead: |
  The RESTORE Council includes governors of the States of Alabama, Florida, Louisiana, Mississippi and Texas and the Secretaries of the U.S. Departments of Agriculture, the Army, Commerce, Homeland Security, the Interior and the Aministrator of the U.S. Environmental Protection Agency. This unique governance structure institutionalizes collaboration among government agencies with key roles in Gulf coast restoration.
members:
  - name: Lee Zeldin
    agency: U.S. Environmental Protection Agency
    title: Administrator
    photo: /img/Lee Zeldin_ EPA.jpg
    rep_name: Marc Wyatt
    rep_title: Gulf of America Division
  - name: Kay Ivey
    agency: State of Alabama
    title: Governor
    photo: /img/Kay Ivey.jpg
    rep_name: Chris Blankenship
    rep_title: Alabama Department of Conservation and Natural Resources
  - name: Ron DeSantis
    agency: State of Florida
    title: Governor
    photo: /img/Ron DeSantis .jpg
    rep_name: Alexis A. Lambert
    rep_title: Florida Department of Environmental Protection
  - name: Jeff Landry
    agency: State of Louisiana
    title: Governor
    photo: /img/Jeff Landry.png
    rep_name: Maury Chatellier
    rep_title: Louisiana Coastal Protection and Restoration Authority
  - name: Tate Reeves
    agency: State of Mississippi
    title: Governor
    photo: /img/Tate Reeves.jpg
    rep_name: Chris Wells
    rep_title: Mississippi Department of Environmental Quality
  - name: Greg Abbott
    agency: State of Texas
    title: Governor
    photo: /img/Greg Abbott.jpg
    rep_name: Steven Schar
    rep_title: Texas Commission on Environmental Quality
  - name: Brooke Rollins
    agency: U.S. Department of Agriculture
    title: Secretary
    photo: /img/sec of ag.jpg
    rep_name: Doris Washington
    rep_title: Diretor, Gulf Coast Ecosytem Restoration
  - name: Daniel P. Driscoll
    agency: U.S. Department of the Army
    title: Assistant Secretary
    photo: /img/sec of army.jpg
    rep_name: Jeff Trulick
    rep_title: Environmental Planner, Office of the Asst Secretary for Army Civil Works
  - name: Howard Lutnick
    agency: U.S. Department of Commerce
    title: Secretary
    photo: /img/Howard_Lutnick_2025.jpg
    rep_name: Aileen Smith
    rep_title: Senior Policy Analyst
  - name: Kristi Noem
    agency: U.S. Department of Homeland Security
    title: Secretary
    photo: /img/Kristi Noem.jpg
    rep_name: TBD
    rep_title: TBD
  - name: Doug Burgum
    agency: U.S. Department of the Interior
    title: Secretary
    photo: /img/Sec of the Interior.jpg
    rep_name: Mary Josie Blanchard
    rep_title: Director, Gulf Coast Restoration
---

<ul class="usa-card-group">
{% for member in members %}
  {% assign sub_title = member.title | append: ', ' | append: member.agency %}
  {% assign body_text = member.rep_name | append: ', ' | append: member.rep_title %}
  {% capture body %}<p><span class="text-bold">Representative:</span> {{ body_text }}</p>{% endcapture %}
  {% include "card.html", title: member.name, sub_title: sub_title, photo: member.photo, body: body %}
{% endfor %}
</ul>

The governors recommend and the President appoints one federal member to serve as Chair.
