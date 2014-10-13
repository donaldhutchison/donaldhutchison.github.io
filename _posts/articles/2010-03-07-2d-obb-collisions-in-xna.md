---
layout: post
title: 2D OBB Collisions in XNA
category: articles
tags:
- collisions
- gamedev
- programming
- xna
status: publish
type: post
published: true
image:
    feature: col.png
---
OBBs (Oriented Bounding Boxes) allow for a greater degree of accuracy than their axis aligned counterparts in the field of collision detection. It turns out this is a <i>lot </i>simpler to implement in 2D than 3D.

Here's my own take on it, which I hope to put to heavy use in an ongoing project. The OBB is modelled by an orientation matrix (in the form of two Vector2's because the Matrix type seems to suck), an origin and a Vector2 representing the +ve half widths in the x and y axis.

The object includes intersection methods and a crude draw method for debug purposes (you'll need to supply your own spritebatch and a 1x1 texture2d to use it)

{% gist 324608 %}
