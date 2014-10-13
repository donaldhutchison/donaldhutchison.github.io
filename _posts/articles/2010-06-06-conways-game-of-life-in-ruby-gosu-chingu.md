---
layout: post
title: conway's game of life in ruby (gosu + chingu)
category: articles
tags:
- gamedev
- programming
- ruby
status: publish
type: post
published: true
comments: true
image:
    feature: conway.png
---
inspired by this [awesome nds tracker](http://www.glitchds.com/cellular-automaton-music-sequencer/) and an old [boingboing](http://www.boingboing.net/2009/05/27/celluar-automata-at.html) post, i decided to make an implementation of conway's game of life in ruby, using the gosu and chingu game development gems.

after finding a way round the terrible deep cloning in ruby it was incredibly painless and very interesting. i like how the initial choice of cells influences whether you have a beautiful symmetrical oscillating pattern or a horrible cancerous mess, after 100 or so generations.

{% gist 427880 %}
