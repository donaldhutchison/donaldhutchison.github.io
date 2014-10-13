---
layout: post
title: Optimising CoffeeScript files with r.js - "Unexpected Character"
category: articles
tags:
- coffee-script
- development
- programming
status: publish
type: post
published: true
image: 
    feature: coffee-script.png
---
### The Problem...

When trying to optimise a coffeescript project with the latest r.js optimiser from the requirejs npm module I ran into the following error:  
  
{% highlight text %}
Cannot uglify file: /path/to/main.js. Skipping it. Error is: Unexpected character '' (line: 363, col: 3, pos: 15612)
{% endhighlight %}
  
I downloaded the uglify-js package which r.js is using here to minify the script. Running it on the file in question in the output directory of the r.js build process gave me more information - specifically that uglify is dying on the character sequence **ï»¿** - a utf-8 byte order mark.  

It turns out these marks were being input by an incorrectly configured template in visual studio. After looking into it, it appears that the BOM isn't necessary or even recommended in UTF-8 encoded files.  

### The Fix...

It follows that the quickest (and dirtiest) way is to simply strip these characters from files we wish to minify.  

{% highlight text %}
grep -lZr $'\357\273\277' . | xargs -0 -l sed -i -e $'s/\357\273\277//g'
{% endhighlight %}  

This command is using the grep and sed commands (by way of xargs) to A) find all files containing the BOM and B) remove the mark from those files inplace.

The call to grep has the options **-lZr** set ( **l** = only display filenames in the result, **Z** = separate the results with \0, **r** = search recursively from the path provided - in this case "." ) which we pipe to xargs and call sed once for each filename. The scary looking **$'\357\273\277'** is simply the **ï»¿** escaped. We use the **$** to get the shell to expand the escaped codes - otherwise grep and sed will interpret the escaped characters as a back reference to something already matched (which we don't want).
{: .notice}  

Because we're using a simple shell script to invoke the r.js command, we can throw this command in there to do some preprocessing work on our source files. Ideally, this would be in a rake/make/cakefile but this fits my needs right now.
