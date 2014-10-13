---
layout: post
title: "Jekyll Migration Woes"
tagline: "Nothing good comes easy.."
description: "Some problems that were fixed on the way to moving a blog from wordpress to jekyll."
category: articles
tags: [ blog, ruby, setup, jekyll]
status: publish
type: post
published: true
image:
    feature: jekyll.jpg
---

> (image from the awesome but short lived eponymous bbc series [Jekyll](http://www.imdb.com/title/tt0497298/) )

After getting sick of wordpress I decided to do the cool hipster thing and move my blog to [Jekyll](http://jekyllrb.com/). Both for the nerd credit and the super awesome minimal design (static site = no moving parts! awesome!). After reading about Josh Kaufman's experience with Jekyll in his [book](http://first20hours.com/) it sounded like a pretty easy and maintainable platform to blog on.

### However...
On the way I encountered a few issues that almost took the chill out of a refreshing Thursday night in Berlin. Here I recount my issues for the sake of future ventures.

## The Bad

### Wordpress Exporter / Jekyll Import
Wordpress comes with a library of a bajillion plugins you can install to pimp out the features available to you. One of the defaults is an export to xml feature. I'd imagine this is pretty good for the average case, but I had a heavily customised theme that I perhaps too rashly purchased off of an internet marketplace. 

Suffice it to say, jekyll's default wordpress importer didn't even try to change my posts. The formatting was all garbled and I had to manually edit each post to fit with the markdown syntax and change any previous gist embeds to use the cool jekyll version. Through fortune, I have not quite yet reached my maximum bloggin output (**read:** I am chronically lazy ) and only had a few posts to deal with. This wasn't too hard - most of it can be done with a combination of regex and vim.

### Jekyll post-recieve git hook

One of the coolest things for me was having a deploy process setup with git. The ability to write and preview everything locally, and then publish with a simple `git push` was something I really wanted to have with my blog setup. There's even an example hook you can use from [jekyll's documentation](http://jekyllrb.com/docs/deployment-methods/). Unfortunately I stumbled across a few hurdles whilst setting this up.

#### RVM
If you want to use the awesome [RVM](https://rvm.io/) then you need to hit one of your shell's startup files to load it in. For me this was `bash`. The example hooks run with the `#!/bin/sh` shebang - this is not `bash`.  

**Solution:** Make sure you have `#!/bin/bash` at the top of your hook. You may need to run `#!/bin/bash -l` if all your setup is done in `.bash_profile`.  
{: .notice }

### File Permissions

This was just a result of my brain going on to autopilot, but make sure you create the folder you serve from with the correct user and permissions. In the hook this is `/var/www/myrepo` - the deployment user needs to be able to write to this directory.

### Locale Issues

This was fun. Suddenly everything seemed to work, but Jekyll would complain about scores and scores of invalid characters in my blog post. Specifically it was saying 
`/lib/jekyll/excerpt.rb:135:in 'scan': invalid byte sequence in US-ASCII (ArgumentError)`

Now this was weird, because I made pretty sure that all my files were encoded in UTF-8. After an hour or so of fighting and attempts at convincing the server that these files were in fact valid UTF-8 files, it turned out to be a locale issue. Running the `locale` command from a terminal gave me this

{% highlight bash %}

locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
LANG=en_US.UTF-8
LANGUAGE=
LC_CTYPE=UTF-8
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_PAPER="en_US.UTF-8"
LC_NAME="en_US.UTF-8"
LC_ADDRESS="en_US.UTF-8"
LC_TELEPHONE="en_US.UTF-8"
LC_MEASUREMENT="en_US.UTF-8"
LC_IDENTIFICATION="en_US.UTF-8"
LC_ALL=`
{% endhighlight %}

Ahh, cool. My language isn't set. Whatever. 

**Solution:** `LC_CTYPE=en_US.UTF-8 LANG=en_US.UTF-8 export LC_CTYPE LANG` - throw this in the top of the git hook  
{: .notice }

## And then..

Peaches! everything seems to work fine. The sweet is never as sweet without the sour. 

The next thing to do was to setup a comment system with disqus, customise some header images and create a flattr account (heh). I look forward to overcoming my laziness and becoming the prolific and helpful tech blogger I know I never wanted to be.
