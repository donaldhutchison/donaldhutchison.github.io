---
layout: post
title: Coffeescript + RequireJS Skeleton Project
category: articles
tags:
- coffeescript
- web development
- requirejs
- game development
status: publish
description: "The initial setup of a project can be a bit of a pain unless you're completely motivated. Let's try and make the process as smooth as possible with a project that will give us the essentials to get hacking immediately."
type: post
published: true
image:
    feature: skeletons.jpg
---

After being introduced to the awesome [pixi.js](http://www.pixijs.com/) framework by a colleague, I decided to update an old project of mine to make screwing around with it a little easier. This [skeleton project](https://github.com/rkachowski/coffeescript-skeleton) comes with everything you need to run a pretty decent setup, and all at the cost of only two command line options.

## Skeleton Project!
The initial configuration is usually a pain for me, so I threw together an example project and some scripts to manage this. With this setup, I can clone a github repo, pass in some parameters to configure what is downloaded, and start hacking immediately :)

The project comes with everything I usually want in a basic project. That is - [bootstrap](http://getbootstrap.com/), [jQuery](http://jquery.com/), [RequireJS](http://requirejs.org/) and [Coffeescript](http://coffeescript.org/). This is of course pretty heavyweight for a minimal application, but I like that I can start fleshing out some ideas in as little time as possible. 

## Use Me

To use the project, simply follow the handy dandy following instructions. I'm assuming that you have Python and Ruby installed, because I am writing this for myself and I know I do.

* Clone the repo 
{% highlight bash %}
    git clone https://github.com/rkachowski/coffeescript-skeleton.git 
{% endhighlight %}
* Choose a cool name for your new project
* `cd` into the directory, and run the setup command with your cool name 
{% highlight bash %}
    rake setup[COOL_NAME_HERE]
{% endhighlight %}
* Your project is generated! Now serve that sucker up with `rake run` and check the badness at [http://127.0.0.1:8000](http://127.0.0.1:8000)

## Extras
You can also include some optional libraries, and have them loaded into the default index.html file that comes with the project. Currently there is only support for [pixi.js](http://www.pixijs.com/) and [phaser.io](http://phaser.io/). To get these, just define the appropriate environment variables before setup, e.g.
`PHASER=yes PIXI=yes rake setup[SuperAwesomeProject]`

One final thing is that the script is designed to self destruct it's git repo after setup. This is so you can create a new project without having to worry about basing it on the git history of the skeleton. To prevent this behaviour, pass the `NORM=yes` variable in the setup call (just like above).

<a markdown="0" href="https://github.com/rkachowski/coffeescript-skeleton" class="btn">Check it out on github!</a>
