---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>

{% if site.posts.size == 0 %}
<p>No posts yet — check back soon.</p>
{% endif %}

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small> — {{ post.date | date: "%b %-d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
