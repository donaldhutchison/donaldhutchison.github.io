---
layout: post
title: Coffeescript RequireJS and You!
tags:
- coffeescript
- requirejs
- amd
- web development
status: publish
category: articles
type: post
published: true
image:
    feature: Coffee-Art-by-Michael-Breach-1848851.jpg
---

<section id="table-of-contents" class="toc">
  <header>
    <h3>Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>

</section>

## Best friends together at last!


So you want to create a javascript application with some kind of non trivial complexity, but separating the functionality out into different script files gets hairy. You need to forward declare certain functions before you execute certain functions, and things need to be loaded before they can be displayed.&nbsp;

Then when you add <a href="http://coffeescript.org/">CoffeeScript</a> into the mix you've got a whole new set of problems. Ultimately you want one big file containing the logic of your application, but unless you've passed your discrete <i>.coffee </i>files to the coffee compiler&nbsp;(or included them in the head of your html)&nbsp;in a specific order, you won't be able to execute functions before they've been declared.&nbsp;

## Oh no save me, RequireJS!

What <a href="http://requirejs.org/">RequireJS</a>&nbsp;does in this situation is provide a solution to the dependency problem mentioned above. What you do is create your separate script files to the <a href="https://github.com/amdjs/amdjs-api/wiki/AMD">AMD</a>&nbsp;format, which tells you to explicitly mention the files (modules) that each script file depends upon. You do this by wrapping your script in a call to the function <a href="http://requirejs.org/docs/api.html#define">define</a>, where the parameters passed to `define` reference the dependencies of your new script.

By returning from this `define` function, you decide what to expose from this module when it's requested by something else. This is similar to the `exports.blah = ExportedObject` format within CommonJS. If we manipulate exactly what is returned we can expose any number of class definitions, functions or&nbsp;arbitrary&nbsp;values that we choose.

## Let's Go

### Setup

We're going to make a test project to understand how to make these things work together. This will give us an idea of how to structure our application in a way that removes the problems of dependency resolution. The first thing we'll need to do is to get the required libraries to run RequireJS with CoffeeScript. The specific files we need are as follows:

<ul>
<li>The RequireJS library</li>
<ul>
<li><a href="http://requirejs.org/docs/download.html">http://requirejs.org/docs/download.html</a></li>
</ul>
<li>The CoffeeScript plugin for RequireJS</li>
<ul>
<li><a href="https://raw.github.com/jrburke/require-cs/latest/cs.js">https://raw.github.com/jrburke/require-cs/latest/cs.js</a></li>
</ul>
<li>The latest <i>coffee-script.js</i> compiler (for use with the above plugin)</li>
<ul>
<li><a href="https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js">https://raw.github.com/jashkenas/coffee-script/master/extras/coffee-script.js</a></li>
</ul>
</ul>





Next we'll create some folders for our application, and for the sake of this example we'll organise the above files that we've downloaded as follows.&nbsp;


![](http://3.bp.blogspot.com/-9JMMfQqrthc/T4wXMwmsdpI/AAAAAAAAAdI/j2B_0KSZ1gE/s1600/Screen+Shot+2012-04-16+at+13.57.00.png)
Our file layout on disk
{: .notice }

Next we'll create our html file for loading the scripts, this'll be nothing more than a standard html document with a script tag in the head to load the <i>require.js</i> library.


{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>RequireJS + Coffeescript</title>
    <script type="text/javascript" src="lib/require.js" data-main="src/main"></script>
</head>
<body>
    
</body>
</html>

{% endhighlight %}

Note the <i>data-main </i>attribute on the script tag. This is specific to RequireJS, and it defines the entry point to our application. What we're doing is telling RequireJS where the first file we want to execute is located, in this case it's at "<i>src/main.js</i>" (we've intentionally left out the <i>.js</i>&nbsp;suffix on this path).&nbsp;



We could set this to be anywhere in the directory tree, but it's important that the <i>coffee-script.js</i> and <i>cs.js</i> files are located in the same place as the entry point. Also at this point we want to <b><u>rename</u></b> <i>coffee-script.js</i> <b><u>to</u></b> <i>CoffeeScript.js. </i>This is a requirement specific to the <i>cs.js</i> plugin.



Now we'll create a simple <i>main.js</i> file for use in our application. We'll make sure it follows the AMD format by wrapping everything in a <i>define</i> call, and because we don't yet depend on anything it'll be straightforward.

{% highlight javascript %}
define([], function(){
    console.log("Running main.js!");
});
{% endhighlight %}


Our tree should now look like this:

![](http://1.bp.blogspot.com/-3yNdVUICo-A/T4xKKVq_PAI/AAAAAAAAAdg/USB6k2r38zg/s1600/Screen+Shot+2012-04-16+at+17.34.27.png)
{: .notice }

From here we can serve the files from the root of the project, and we should see our message output in the console for the index page.

![](http://4.bp.blogspot.com/-Rrla57aSdaM/T4wcTaLeVnI/AAAAAAAAAdY/syTx25m8OpE/s1600/Screen+Shot+2012-04-16+at+14.18.49.png)

It's humble, but that little message means we've almost configured everything correctly, and we can finally get down to writing the logic of our application. whoopty doo!

### The application

We'll create a simple test application in coffeescript. Let's make it simple and add some text to the dom when the user clicks on the page. We'll do it in three steps


<ul>
<li>populate the dom with a super cool html button</li>
<li>bind to a click event and write to the console</li>
<li>bind to the same event and add some text to the page</li>
</ul>

For demonstrating how to organise an application, we'll also experiment with different ways of returning values from a module to show how we can expose different objects.


### Adding a button to the page

We'll do this by creating a module which simply adds a standard button element to the page. We'll call into this module from our <i>main.js </i>module utilising the CoffeeScript plugin we have sitting nicely in the <i>src</i>&nbsp;folder.

{% highlight coffeescript %}
define [], () ->
    ->
        input = document.createElement "button"
        input.innerText = "Super Cool Test Button!"
        input.setAttribute "id", "the-button"
        document.body.appendChild "input"
{% endhighlight %}



As before, we've created a file that follows the AMD format. This is implemented via wrapping the entire module in a <i>define</i>&nbsp;call. The empty array is to say that this module depends on nothing, and the empty parameter list for the function reflects that we aren't passing any dependencies in.



What's happening here is that within the define call&nbsp;we are saying "here comes a module with no dependencies" - then within that function we are defining a single function which manipulates the dom to add a button to the document

{% highlight coffeescript %}
        input = document.createElement "button"
        input.innerText = "Super Cool Test Button!"
        input.setAttribute "id", "the-button"
        document.body.appendChild "input"
{% endhighlight %}


Because this is CoffeeScript, the last expression of a function is returned. In this case, the last expression within the define call is the definition the function above - the one that adds the button. This means that when we import this module elsewhere, all we are importing is the function above. Which we're going to do now!


{% highlight javascript %}
define(["cs!app/add_button"]), function (AddButton){
    console.log("Running main.js!");
    AddButton();
});
{% endhighlight %}

In this case we've imported the module we just created and associated it with the parameter <i>AddButton. </i>Now within the context of main.js we have access to whatever we exported, which in this case was the single function we defined. By executing it directly we're performing the add button functionality.

![](http://4.bp.blogspot.com/-VLwGrtfATDs/T5aUl4tKZ_I/AAAAAAAAAeg/AtRkR6GVrhU/s1600/Screen+Shot+2012-04-24+at+12.54.38.png)

Nice!


