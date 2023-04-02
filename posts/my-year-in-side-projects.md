---
title: My year in side projects
date: 2013-12-31
---


Side projects are a good way to stay sane and keep sharp.  2013 was a crazy year - my side projects were a lot of fun and they opened many opportunities.

6 total worth talking about, in chronological order:

* [In 2013 Dollars](https://www.officialdata.org) - inflation reference
* [Verified Facts](http://verifiedfacts.org) - conspiracy theory generator
* [Watchtower](http://gowatchtower.com) - b2b competitive monitoring
* [Asterank](http://asterank.com) - data management and calculations for space/asteroid exploration
* [autoreload.js](http://github.com/typpo/autoreload) - frontend dev tool
* [Candid Candidates](http://github.com/typpo/political-annotations) - political/open government browser extension

![Side projects](http://i.imgur.com/IsRaZtp.png)

<!-- more -->

## Verified Facts

[Verified Facts](http://verifiedfacts.org) generates random conspiracy theories.  They sound crazy but they're close enough to real ones that it can be hard to tell the difference.  This was a lot of fun to make.

![Conspiracy excerpt](http://i.imgur.com/83VS00w.png)

It went viral with over a half a million conspiracies generated.  The highlight was when Neil Gaiman tweeted it to over a million people.  Viral traffic spikes can be thrilling and nerve-wracking.  We endured it with no downtime on a ec2 micro thanks to some clever caching + redis on top of mongo.

11 months later, the site ranks well for many conspiracy searches and is being found by people who aren't in on the joke.  Here's a sample of recent search traffic:

![conspiracy web traffic](http://i.imgur.com/tdg0yYn.png)
<div class="caption">verifiedfacts.org is making the world a worse place.</div>

I wrote a more in-depth post on it, including an explanation of how it works [here](http://www.ianww.com/2013/02/04/how-to-generate-a-conspiracy-theory/).

## Watchtower

I built [Watchtower](http://gowatchtower.com) with a few other guys from [Room 77](http://room77.com/?new=1) for Jason Calcanis's LAUNCH hackathon.  It's a service that watches your competitors' websites and lets you know when they change certain things.  This is good for detecting their A/B tests, new marketing campaigns, etc.

![Watchtower](http://i.imgur.com/s5LfeW8.png)
<div class="caption">Watching Amazon's top ad.</div>

We unexpectedly made it past the first couple judging rounds.  Before we knew it we were presenting to an audience of 1,000+ conferencegoers in a huge auditorium.  I'm including this embarrassing video for completeness.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/812vR1rHttg" frameborder="0" allowfullscreen></iframe></center>

I'd love to work more on Watchtower because I think the idea is really compelling.  Unfortunately it's hard to corral 4 hackathon participants to work on things long term.  We're considering some offers to sell it.

## Asterank

My side-project-turned-startup [Asterank](http://asterank.com) was acquired by Planetary Resources, the asteroid mining company.  I started the project in 2012 and in June this year I signed the papers.

![](http://i.imgur.com/LW3Q3LEm.png)
<div class="caption">Woah.</div>

I also rolled out a crowdsourced asteroid discovery app called [Asterank Discover](http://asterank.com/discover).  To date, people have reviewed over 115,000 images and spotted hundreds of potential asteroids, a significant contribution to science.

Now Asterank Discover is getting rolled into "Asteroid Zoo" at Planetary Resources, which was in the news recently when we [announced](http://www.nbcnews.com/science/nasa-planetary-resources-partner-asteroid-hunting-contests-2D11638181) our partnership with NASA, the Adler Planetarium, and the Catalina Sky Survey.

The other cool part about my Asterank project is that it got me several speaking invitations and job offers.

In June I spoke at _ideacity_, which is like Canadian TED.  It was an awesome experience and I met tons of fun and interesting people.  It was also a good exercise in public speaking, which I don't do much.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/AM9T5H1penM" frameborder="0" allowfullscreen></iframe></center>

And this November I spoke at the World Technology Awards in New York, where I was nominated for an award in the Space category.  My competition included Elon Musk (SpaceX, Tesla), the founders of Planetary Resources, and the director of NASA AMES, so I was honored to be nominated and ok with not winning.

![](http://i.imgur.com/LAxxykom.jpg)
<div class="caption">At the World Technology Awards in NYC.  Yeah, I wore the same thing.</div>

This project was the catalyst for my full-time plunge into building spacecraft.  I could write a lot more about my journey with Asterank, but I've [written about it](http://www.ianww.com/blog/blog/categories/asterank/) in the past and I don't want to bore you to tears.

Asterank is [open source](https://github.com/typpo/asterank).

## autoreload.js

A tool for frontend developers that automatically refreshes the page when you make changes to files.  I made this because pressing F5 sucks.  HN didn't like it but about 40 people per week install it via npm, which is fine by me.

![autoreload.js](http://i.imgur.com/fH3Zx6X.png)
<div class="caption">Not as interesting as space travel.</div>

Open source [here](https://github.com/typpo/autoreload).

## Candid Candidates

I moved to Seattle and figured I had to try a Seattle hackathon.  I joined the [meetup group](http://www.meetup.com/Seattle-Hackathons/) and saw that there was a Seattle Open Government hackathon the next week, hosted by [Lincoln Labs](http://lincolnlabs.com/).

We built a chrome extension that annotates news sites with important political context, campaign donations, and contact info.  You hover over politicians' names and get that info.

Everyone knows that politicians are bought and sold, but that info is hard to get and it's not there when you need it most.  This is a step toward passive political consciousness.

![](http://i.imgur.com/C2QG9ZOm.png)
<div class="caption">Hover over Ted's name to get his contact info and see who gives him money.</div>

We won $1500 (2nd prize).  It's also [open source](https://github.com/typpo/political-annotations), but needs some cleanup.  One of my first goals for the new year is to get this in working order so I can promote it and make the world a better place.

## Looking forward

My birthday is also at the end of the year, which makes me extra reflective.  I don't know where I am headed in nearly any aspect of life, but these projects give me a way to explore options.  Next year I'd like to focus on my relationships and being healthy.  With luck, I'll figure all that out while still building interesting things.

Follow me [@iwebst](http://twitter.com/iwebst) or check out [2014 in side projects](http://www.ianww.com/blog/2014/12/30/this-year-in-side-projects-2014/).

