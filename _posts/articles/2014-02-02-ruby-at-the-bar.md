---
layout: post
title: Ruby Development in the Bar
tags:
- ruby
- mobile
- android
- ruboto
status: publish
category: articles
type: post
published: true
description: "I found myself in need of a short order computer program whilst in a bar at the north end of Scotland. Android and Ruboto come to save the day and everyone wins prizes."
image: 
    feature: ruby/header.jpg
---

For reasons I won't get into, I found myself spending Christmas in Wick on the [north east tip of Scotland](http://goo.gl/maps/BBa7b). This being the second time it's occurred I was familiar with the quirks and isolation of this part of the world. One of the more upswinging things that happens is that every 26th December, there's a charity raffle in the local Seaforth Club. This is where you buy some tickets, drink, win prizes and drink some more. 

Again, this being the second time I've attended, I had a grudge to bear after last years events - specifically I didn't win anything and I felt pretty grumpy about it. *"2013 will be different!"*, I said to myself as I prepared a full on tactical strike against my previous misfortune.

## Tickets everywhere

As you can see in the header image, I went and bought as many tickets as my conscience would allow. You buy 10 tickets at a time, and the numbers increase sequentially from the first. I made sure to buy them at different intervals so I didn't end up with a completely contiguous series of numbers (I don't know if this helped but it made me feel smart.) 

Now, the way the raffle works is that an announcer will read out a number over the PA system (say - "56724!!"), and everyone will have to frantically check through their tickets for the number and, if lucky, present the winning ticket. If you take too long, or the announcer doesn't like you, a new number will be read out and you've lost your chance to claim a novelty stuffed dog or kitsch souvenir. If only there were some way I could automate this verification process... I could spend more time enjoying festive beverages and the Christmas atmosphere, rather than continually reading through the far too many sheets of paper I had.

## Ruboto! Ruby for Android!

Fortunately I get paid to make computer programs, and this kind of thing is totally possible (to the point of being almost trivial) so I was able to go for it. Sneaking outside to the smoking area (there's no signal inside the building) I went out to search the Google Play store for mobile programming environments. 

I've previously experimented with these on device programming tools, but dismissed them due to their pretty impractical nature. Trying to do anything other than very basic alphanumeric text input on a smartphone is frustrating at the best of times, let alone anything with multiple brackets. But right now it seems like a prime use for such a thing, and after this experience I'm finding myself looking for other similar niche situations where I could be without access to a keyboard and need programming ability.

I found the awesome [Ruboto](http://ruboto.org/) framework for Ruby. This was exactly what I needed - an android runtime for ruby with an IRB application. Nice.

## The Code

Now it's pretty simple. All I need are a few methods to keep track of some ranges (defined by a block of tickets), who they belong to, and whether a specific number is within the range. This kind of thing is totally handled by the standard lib, [`Range`](http://www.ruby-doc.org/core-1.9.3/Range.html) is awesome. After a few too many beers I ended up with the following code jammed into my phone.

{% highlight ruby %}
def save_ranges name, range
  @ranges ||= {}
  @ranges[name] ||= []

  @ranges[name] << range
end
  
def clear
  @ranges = {}
end

def who_has number
  @ranges.each_pair do |n,r|
    person_ranges = @ranges[n]
    person_ranges.each do |ran|
      return n if ran.member? number
    end
  end

  "noone has #{number}"
end

{% endhighlight %}

Very simple, but exactly what I needed. Short and concise. But even with this small scope I ran into a few issues whilst creating the above methods. First of all, what is the exact method called that you use to determine whether a specific number is included within a range? `include?` or maybe `contains?`??  

### Some Stumbling

I was in a situation where there was no 3G / GSM signal indoors, and Ruboto doesn't come with Rdoc, so I used the dirty hack of `[1..2].methods - "".methods`. Typing this into iRB gives you a crude and dirty way of listing the exact methods attached to an object. The subtraction part is just a cheeky way of removing all the methods that exist on any subclass of `Object`. Anyway, it turns out the method is called `member?` - awesome.

Another issue was the expected problem of data entry. Not only during development (switching between the symbolic keyboard and alphabetic on the stock android setup was a pain), but whilst using the application itself. I'd convinced everyone else at my table to use my program - in exchange for a drink - and got some genuine in field testing. By getting my sister to read out random ticket numbers (and throwing in some false numbers at the same time) I discovered that I'd considered a few pages of tickets to be consecutive, when they were quite disparate. Now I had to manually sort out my nested array / hash of ranges with the touchscreen. More effort into validation would have helped here, but the data set was small enough that I could fix everything in 10 minutes or so.

I'd considered adding some basic serialization support but after my sister's boyfriend bought the next round, I discovered I had more pressing matters to take care of.

## The Results!

Later the raffle started, and I got the chance to see if things would work out in my favour. The announcer read out a 5 digit number and waited for about 15 seconds. This is when you shout in excitement and run to the middle of the room with your ticket in order to claim your prize. After inputting everyone's tickets, and then triply validating them with as much attention I could muster, it was simply a case of typing in the winning numbers as they were announced.

<figure class="half">
    <a href="{{ site.url }}/images/ruby/input.png"><img src="{{ site.url }}/images/ruby/input.png"></a>
    <a href="{{ site.url}}/images/ruby/use.png"><img src="{{ site.url}}/images/ruby/use.png"></a>
    <figcaption>Data entry and usage!</figcaption>
</figure>

It was quite a while before someone at my table got a winner. I was actually starting to get nervous that I hadn't tested enough and everyone was missing out on novelty prizes due to my arrogance. Fortunately that wasn't the case, and soon enough my sister got a winning ticket.

<figure class="half">
    <a href="{{ site.url }}/images/ruby/kirstywin.png"><img src="{{ site.url }}/images/ruby/kirstywin.png"></a>
    <a href="{{ site.url}}/images/ruby/kirstyprize.jpg"><img src="{{ site.url }}/images/ruby/kirstyprize.jpg"></a>
    <figcaption>Kirsty wins a hat, a fanny pack and some D cell batteries!! Super jealous!</figcaption>
</figure>

After putting in all this effort, I felt entitled to some kind of reward (aside from the drinks that I tricked everyone else out of). Perhaps it was the Christmas spirit(s), but soon I received all I was hoping for and more.

<figure class="half">
    <a href="{{ site.url }}/images/ruby/iwin.png"><img src="{{ site.url }}/images/ruby/iwin.png"></a>
    <a href="{{ site.url}}/images/ruby/straighteners.jpg"><img src="{{ site.url }}/images/ruby/straighteners.jpg"></a>
    <figcaption>Hair stylers! Lucky number 72887 never fails</figcaption>
</figure>

Beautiful. Exactly what I was wanting. [Here]({{ site.url }}/images/ruby/me.jpg) is a recent photo of me, to show how much I appreciate and need such a styling product in my life. It was pretty funny :P

The other prizes everyone got included a stuffed dog, a bottle of whisky, a large crate of cider and a stationary set. However, before setting out my mother had given me some money to buy tickets for her. This managing of other peoples' tickets was one of the reasons I decided to solve this with a phone, and as such is the original cause behind this post. The final prize to be drawn was the star prize - a mystery sum of money in an envelope. Everyone in the room was ablaze with excitement and blazing. And what do you know, the winning ticket was in my possession.

<figure class="half">
    <a href="{{ site.url }}/images/ruby/mumwin.png"><img src="{{ site.url }}/images/ruby/mumwin.png"></a>
    <a href="{{ site.url}}/images/ruby/mumprize1.jpg"><img src="{{ site.url }}/images/ruby/mumprize1.jpg"></a>
    <figcaption>Star Prize! ROI: >300%! Good deal!</figcaption>
</figure>

The final number was detected by the program and now I have to pay my mother. The guys at the table opposite us were pretty annoyed at how much we'd won, and recommended I use the money to ["buy a one way ticket to inverness and don't come back"](http://goo.gl/maps/S3NJB). You guys are the best. Also at this point I'd aliased the `who_has` method to simply `w`, which I probably should have done a long time before.

## Conclusion
Ruboto is pretty cool. This application was incredibly trivial and very specific to the situation I was in, but I question in what other similar situations I could create a short simple program to help me out. I feel the inherent nature of touch screens makes it difficult to input structured code, and as such would make anything pretty involving to be a frustrating experience - a topic brushed on by [Jeff Atwood](http://www.codinghorror.com/blog/2010/10/the-keyboard-cult.html) in an old post. Still, I want to keep my eyes open for another situation like this, and maybe come out with hair straighteners, whisky and £80 as a bonus for my initiative.
