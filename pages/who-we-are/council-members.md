---
title: Council Members
permalink: /people/council-members/
eleventyNavigation:
  key: council-members
  parent: who-we-are
  title: Council Members
members:
  - name: Lee Zeldin
    agency: U.S. Environmental Protection Agency
    title: Administrator
    photo: null
    designee_name: TBD
    designee_title: TBD
    rep_name: Marc Wyatt
    rep_title: Gulf of America Division
  - name: Kay Ivey
    agency: State of Alabama
    title: Governor
    photo: null
    alt_name: Chris Blankenship
    alt_title: Alabama Department of Conservation and Natural Resources
  - name: Ron DeSantis
    agency: State of Florida
    title: Governor
    photo: null
    alt_name: Alexis A. Lambert
    alt_title: Florida Department of Environmental Protection
  - name: Jeff Landry
    agency: State of Louisiana
    title: Governor
    photo: null
    alt_name: Maury Chatellier
    alt_title: Louisiana Coastal Protection and Restoration Authority
  - name: Tate Reeves
    agency: State of Mississippi
    title: Governor
    photo: null
    alt_name: Chris Wells
    alt_title: Mississippi Department of Environmental Quality
  - name: Greg Abbott
    agency: State of Texas
    title: Governor
    photo: null
    alt_name: Steven Schar
    alt_title: Texas Commission on Environmental Quality
  - name: Brooke Rollins
    agency: U.S. Department of Agriculture
    title: Secretary
    photo: null
    rep_name: Doris Washington
    rep_title: Diretor, Gulf Coast Ecosytem Restoration
  - name: Daniel P. Driscoll
    agency: U.S. Department of the Army
    title: Assistant Secretary
    photo: null
    rep_name: Jeff Trulick
    rep_title: Environmental Planner, Office of the Asst Secretary for Army Civil Works
  - name: Howard Lutnick
    agency: U.S. Department of Commerce
    title: Secretary
    photo: null
    rep_name: Aileen Smith
    rep_title: Senior Policy Analyst
  - name: Kristi Noem
    agency: U.S. Department of Homeland Security
    title: Secretary
    photo: null
    rep_name: TBD
    rep_title: TBD
  - name: Doug Burgum
    agency: U.S. Department of the Interior
    title: Secretary
    photo: null
    rep_name: Mary Josie Blanchard
    rep_title: Director, Gulf Coast Restoration
---

## Who are the RESTORE Council Members?

The RESTORE Council includes governors of the States of Alabama, Florida, Louisiana, Mississippi and Texas and the Secretaries of the U.S. Departments of Agriculture, the Army, Commerce, Homeland Security, the Interior and the Aministrator of the U.S. Environmental Protection Agency. This unique governance structure institutionalizes collaboration among government agencies with key roles in Gulf coast restoration.

<ul class="usa-card-group padding-top-5">

{% for member in members %}

{% include "card.html", card: member %}

{% endfor %}

</ul>

The governors recommend and the President appoints one federal member to serve as Chair.
