---
title: Council Members
eleventyNavigation:
  key: council-members
  parent: about-us
  title: Council Members
  order: 1
lead: >
  The RESTORE Council includes governors of the States of Alabama, Florida,
  Louisiana, Mississippi and Texas and the Secretaries of the U.S. Departments
  of Agriculture, the Army, Commerce, Homeland Security, the Interior and the
  Aministrator of the U.S. Environmental Protection Agency. This unique
  governance structure institutionalizes collaboration among government agencies
  with key roles in Gulf coast restoration.
members:
  - name: Lee Zeldin
    agency: U.S. Environmental Protection Agency
    title: Administrator
    photo: /img/Lee Zeldin_ EPA.jpg
    delegates:
      - type: Designee
        name: David Fotouhi
        agency: U.S. Environmental Protection Agency
        title: Deputy Administrator
      - type: Representative
        name: Marc Wyatt
        agency: Gulf of America Division
  - name: Kay Ivey
    agency: State of Alabama
    title: Governor
    photo: /img/Kay Ivey.jpg
    delegates:
      - type: Alternate
        name: Chris Blankenship
        agency: Alabama Department of Conservation and Natural Resources
  - name: Ron DeSantis
    agency: State of Florida
    title: Governor
    photo: /img/Ron DeSantis .jpg
    delegates:
      - type: Alternate
        name: Alexis A. Lambert
        agency: Florida Department of Environmental Protection
  - name: Jeff Landry
    agency: State of Louisiana
    title: Governor
    photo: /img/Jeff Landry.png
    delegates:
      - type: Alternate
        name: Maury Chatellier
        agency: Louisiana Coastal Protection and Restoration Authority
  - name: Tate Reeves
    agency: State of Mississippi
    title: Governor
    photo: /img/Tate Reeves.jpg
    delegates:
      - type: Alternate
        name: Chris Wells
        agency: Mississippi Department of Environmental Quality
  - name: Greg Abbott
    agency: State of Texas
    title: Governor
    photo: /img/Greg Abbott.jpg
    delegates:
      - type: Alternate
        name: Steven Schar
        agency: Texas Commission on Environmental Quality
  - name: Brooke Rollins
    agency: U.S. Department of Agriculture
    title: Secretary
    photo: /img/sec of ag.jpg
    delegates:
      - type: Representative
        name: Doris Washington
        agency: Director Gulf Coast Ecosytem Restoration
  - name: Daniel P. Driscoll
    agency: U.S. Department of the Army
    title: Assistant Secretary
    photo: /img/sec of army.jpg
    delegates:
      - type: Representative
        name: Jeff Trulick
        agency: Environmental Planner Office of the Asst Secretary for Army Civil Works
  - name: Howard Lutnick
    agency: U.S. Department of Commerce
    title: Secretary
    photo: /img/Howard_Lutnick_2025.jpg
    delegates:
      - type: Representative
        name: Aileen Smith
        title: Senior Policy Analyst
  - name: Kristi Noem
    agency: U.S. Department of Homeland Security
    title: Secretary
    photo: /img/Kristi Noem.jpg
    delegates:
      - type: Representative
        name: TBD
        agency: TBD
  - name: Doug Burgum
    agency: U.S. Department of the Interior
    title: Secretary
    photo: /img/Sec of the Interior.jpg
    delegates:
      - type: Representative
        name: Mary Josie Blanchard
        title: Director Gulf Coast Restoration
---

<ul class="usa-card-group">
{% for member in members %}
  {% assign sub_title = member.title | append: ', ' | append: member.agency %}
  {% assign body_text = member.rep_name | append: ', ' | append: member.rep_title %}
  {% capture body %}
    {%- for delegate in member.delegates -%}
      <p>
        <span class="font-body-2xs">{{ delegate.type }}:</span><br />
        <span class="text-bold">{{ delegate.name }}</span><br />
        {%- if delegate.title -%}<span class="font-body-xs">{{ delegate.title }}</span><br />{%- endif -%}
        {%- if delegate.agency -%}<span class="font-body-xs text-italic">{{ delegate.agency }}</span>{%- endif -%}
      </p>
    {%- endfor -%}
  {% endcapture %}
  {% include "card.html", title: member.name, sub_title: sub_title, photo: member.photo, body: body %}
{% endfor %}
</ul>
