---
title: Summary
description: Summary of the book
---
<div class="container">
{% assign posts = site.posts | sort_natural %}
{% for post in posts %}
    {% assign first_letter = post.title | slice: 0, 1 | downcase %}
    {% if first_letter != current_letter %}
        {% unless forloop.first %}
            </ul>
            <br />
        {% endunless %}
        <a id="{{ first_letter }}" href="#{{ first_letter }}"><h2>{{ first_letter | upcase }}</h2></a>
        <ul>
        {% assign current_letter = first_letter %}
    {% endif %}
    <li><a href="{{ post.url }}">
- {{ post.title }}
</a></li>
{% endfor %}