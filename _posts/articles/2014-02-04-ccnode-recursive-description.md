---
layout: post
title: CCNode Recursive Description
category: articles
tags:
- objective-c
- cocos2d
- programming
status: publish
type: post
published: true
description: "Adding the cool undocumented UIView#recursiveDescription method to CCNode instances"
image: 
    feature: ccnoderecursiveheader.jpg
---

`recusiveDescription` is a pretty cool method. It's on each UIView, and when called it gives you a quick and dirty description of the current view hierarchy relative to that view. 

Usually you'd use this in the debugger, whilst on a breakpoint, to sanity check the positions and children of a view. This is a short gist that adds the same functionality to a CCNode subclass - the common subclass of most visual entities in a Cocos2d project.

{% gist 8801621 %}

