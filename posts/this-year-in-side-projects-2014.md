---
title: This year in side projects (2014)
date: 2014-12-31
---


This has been another great year for projects, old and new.  [Last year's](http://www.ianww.com/blog/2013/12/31/my-year-in-side-projects/) post was well received so I've written up another this year.

Here are my projects worth talking about:

* [TextBelt](http://textbelt.com) - free outgoing sms api
* [AdDetector](http://ianww.com/ad-detector) - native ad detection
* [Asterank](http://asterank.com) - space analysis and visualization
* [Asteroid Viewer](http://ianww.com/asteroid-viewer) - modeling asteroids in 3d
* [Luna](http://ianww.com/moonviz) - moon mission visualizations
* [Inflation](https://www.officialdata.org) - quick inflation reference
* [ListeningPost](http://bunkmates.co) - contextual conversation annotations
* [CodeNav](http://ianww.com/codenav) - github enhancements for chrome

## TextBelt

[TextBelt](http://textbelt.com), my free SMS API, is growing quite a bit.  The site now sends ~30,000 texts per month.  Because the server is [open source](http://github.com/typpo/textbelt), there are additional people running it standalone or as a node module.

![Growth rate](http://i.imgur.com/3StjlWf.png)
<div class="caption">About 30k texts per month.</div>

I didn’t work on it much this year, except to respond to requests to add carriers, but received some great contributions.

Textbelt's next steps are hard.  International texting is unreliable and very difficult to debug without owning a phone from each carrier.

The service also needs better ways to prevent abuse.  Some people send texts nonstop, for the most part getting “quota exceeded.”  These messages, probably spam, inflate the volume of texts sent and jeopardize reliability for regular users.

## AdDetector

[AdDetector](http://ianww.com/ad-detector) is a Chrome and Firefox extension that detects corporate-sponsored articles masquerading as unbiased journalism (a form of native advertising).

It was written up by the [Wall Street Journal](http://blogs.wsj.com/cmo/2014/08/20/ad-detector-native-ads/), [Lifehacker](http://lifehacker.com/addetector-notifies-you-if-a-story-you-re-reading-is-sp-1640980949), [Engadget](http://www.engadget.com/2014/08/21/browser-plug-in-sponsored-content/), and many others, with over 15,000 installs (and [open sourced](https://github.com/typpo/ad-detector)).

![AdDetector](https://i.imgur.com/ARDaVjTl.png)
<div class="caption">Yahoo Finance article on climate change, paid for by an oil company.</div>

Interestingly, I was immediately contacted by a number of marketing execs and journalists of large publications and newspapers.  Several companies specializing in native ads and content generation reached out too.  I've noticed referrals from industry white papers and other inside sources.

I'm no longer working on this project due to potential conflicts with my full-time job.  Despite this, it seems AdDetector influenced publishers' incentives and processes for evaluating deceptive native ads.

## Asterank

Although I sold [Asterank](http://asterank.com) to [Planetary Resources](http://planetaryresources.com) last year, it still takes up time outside work.  This project-turned-acquisition has led to many people and opportunities because it garners interest from everyone - media, academics, industry, and those who just like space (it's also mostly [open source](https://github.com/typpo/asterank)).

This year one of my favorite opportunities was my illustration for David McCandless's latest book, [Knowledge is Beautiful](http://smile.amazon.com/Knowledge-Beautiful-Impossible-Invisible-Connections-Visualized/dp/0062188224?sa-no-redirect=1). He's behind [Information is Beautiful](https://www.facebook.com/informationisbeautiful), the source of many interesting graphics circulating the internet.

![Knowledge is Beautiful](http://i.imgur.com/L0UmQUAm.jpg)
<div class="caption">The closest I'll get to being published.</div>

I’ve also been giving talks about Asterank and [open source in space](https://github.com/typpo/asterank), which tend to lead to more people and opportunities.  My talk at a NASA conference on the economics of near-Earth objects formed the basis for a few consulting gigs.

![talk](http://i.imgur.com/u7fjroxm.png)
<div class="caption">Right before I burped and sneezed at the same time.</div>

I think I had six other speaking engagements this fall.  Some were small, some large, but all good ways to learn and meet people.

Other really cool stuff has come up too.  For example, I'm working with some scientists and a VR-goggle company to bring Asterank and other 3D space simulations to true 3D virtual reality.

## Asteroid Viewer

With Asterank out of my hands, I'm pursuing other space-related work.

This fall I judged a hackathon put on by NASA and the Minor Planet Center at the SETI Institute.  Some of the scientists there study and map asteroids, so I created this [asteroid viewer](http://ianww.com/asteroid-viewer) and polished it up after the hackathon ([source code](https://github.com/typpo/ast3d)).

![Asteroid viewer](http://i.imgur.com/yQaQHiUm.png)
<div class="caption">Many asteroids are shaped like potatoes.</div>

Some asteroids are radar-mapped, but most models are derived from light curves as the asteroid passes in front of a star - making this was a great way to learn about the science and math.

## Luna

For a consulting project I built [this visualization](http://ianww.com/moonviz) of missions to the moon.

![luna](http://i.imgur.com/xtmqQQAl.png)

I think I'll be able to add a few more missions to this visualization soon.

## ListeningPost

At YC Hacks, a few friends and I built [ListeningPost](http://www.bunkmates.co/), which uses the [Chrome Web Speech API](http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API) to extract important things and concepts from spoken conversation, with the goal of providing useful context during meetings.  We were one of the finalists and presented to everyone at the end, which was fun.

![ListeningPost](https://imgur.com/nwXZtDel.png)
<div class="caption">The prize was a lifetime supply of Dropbox tshirts.</div>

Despite our success as finalists, I think the app is a few years ahead of its time.  Maybe 5 years from now speech recognition will be so good it'll work perfectly out of the box..

## CodeNav

[CodeNav](http://ianww.com/codenav) is a Chrome and Firefox extension that makes browsing code on Github much easier.

![CodeNav](https://i.imgur.com/QsFJAB4l.png)

It took an afternoon to make and there are about 700 people using it.  Unfortunately I can't keep up with all of Github's changes, which break parts of the extension.

## Lessons learned

Nothing profound here, just a few notes from my personal experiences:

  * Good things build very slowly, and it's usually the unsexy projects.
  * Opportunities have a way of appearing when you build lots of stuff, swallow your pride, and put it out there even if it's a work-in-progress.
  * Giving talks/conferences is great fun but a huge timesink and the value is not always clear.
  * Beware scope creep when consulting.

Also want to say thanks to everyone who has supported my work!  With luck, 2015 will be even better than this year.
