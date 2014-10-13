---
layout: post
title: How to write a bug report
category: articles
tags:
- qa
- testing
- software
- bugs
status: publish
type: post
published: true
description: "A short article on how to file a bug report that is actually helpful."
image: 
    feature: bug_report_header.jpg
---

<section id="table-of-contents" class="toc">
  <header>
    <h3 >Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->

**Note:** This is a post I created for internal distribution when writing bug reports for mobile applications. I'm sharing it here because I think it's useful for future situations.
{: .notice}

## What's a bug report

Bug reports exist only to inform people about software defects. They are not for notes, for tracking work done or for planning. There are better systems for this. The best bug reports will have as much appropriate information as possible to help asses get kicked as fast and effectively as possible.

Including the correct information in a bug report will help the problem to be discovered, diagnosed and solved in a timely manner - without this information, more questions will be needed before an attempt can be made at trying to fix whatever went wrong.

## What should be in a bug report

### Steps to reproduce
The *most* important thing in a bug report is _reproduction steps_. This means a short description of what you did to make things go wrong. The best version of this will include only the steps necessary to recreate the defect. By following this, a developer should be able to come across the same problem as was reported by the tester / user. If the problem isn't always reproducible, a rough estimate of how often the problem occurs would be helpful in keeping sanity in check..

This is useful not only in helping locate the issue, but can be used to identify duplicates or related issues.

### Version / Device information
A listing of the artifact version and device used when the defect was encountered will help pinpoint where the problem lies and when it was released. It is also very helpful when trying to reproduce the problem in the same situation as it was discovered. Without this info, there is no way of really knowing if the problem has already been fixed or tracking it's lifetime.

### Tester assumptions / expectations
Next, a listing of the results that the tester had in mind when encountering the problem can be used to help assess the validity of the problem. This is usually in the form of "Expected Results" and "Actual Results", i.e. "I _expected_ the items in the well to increase when tapping on the resource icon, but what _actually_ happened was that the application didn't respond to the input."

### Summary

A very short and concise summary is great. Try and balance it between being as short as possible and as specific as possible. "Graphical Issues in UI" is pretty bad, but there have been worse. "UI distorted in Contact View with German locale" is great.

### Other awesome things
* Screenshots - if it's a UI based issue or something that can only really be seen, screenshots are awesome
* Related Issues - if there are existing bugs that have a similar scope, linking against them will be useful in finding the severity of the issue.
* Logs / Crash Dumps / Stack Traces - if you have related logs, please attach them to your ticket. Everyone will love you for it.

## An example bug report

{% highlight bash %}

Items are uncollectable on far left of screen

If you try to touch something on the left edge of the screen (a resource or collectable item), the touch seems to be registered in the wrong place and the item cannot be collected.

To Reproduce:  
1. Start harvesting something on the left edge of the map (in an explored area)  
2. Move the screen so that the object is just barely contained within the viewport  
3. Try to tap on the item  

Expected:  
You can collect the stuff, and the functionality works as if it was touched in regular circumstances.

Actual:  
The wrong functionality is invoked. In the above case an "Explore Area" popup is usually shown, as if an expansion had been tapped instead of a resource.

Incidence:  
Happens about 3 out of 5 times

Tested on:  
* Snapshot #2874
* iphone5 running ios 6.1.4
{% endhighlight %}
