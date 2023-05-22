---
title: This year in side projects (2015)
date: 2015-12-28
---

This has been another great year for projects, old and new.  The [2014](http://www.ianww.com/blog/2014/12/30/this-year-in-side-projects-2014/) and [2013](http://www.ianww.com/blog/2013/12/31/my-year-in-side-projects/) posts went over pretty well, so here goes.

There's a lot this year.  Projects worth talking about:

* [TextBelt](#textbelt) - free outgoing sms api (40k texts/mo)
* [Asterank](#asterank) - 3D space visualizations (~500k views this year)
* [Alioth](#alioth) - more space analytics and visualization (just received a grant from NASA!)
* [Meteor Showers](#meteorshowers) - see what meteor showers look like from space (NSF/PopSci competition finalist)
* [Pluto/Ceres/Mars](#pluto) - webgl visualizations of interesting solar system bodies
* [High-altitude weather balloons](#weatherballoon1)
* [The Space Potato](#spacepotatokickstarter) - successful Kickstarter for a potato-powered near-space vehicle
* [Global health](#globalhealth) - writing software to strengthen national health systems in developing countries
* [Interview Club](#interviewclub) - marketplace for interviewers (won $14k at LAUNCH hackathon)
* [Harvest](#harvest) - aerial infrared photography for crop monitoring (won $5k at TechCrunch Disrupt)
* [Dinosaur Pictures](#dinosaurpicturesorg) - the official internet dino database
* [Ancient Earth](#ancientearth) - webgl viz of Earth over 1 billion years
* [Chatalyst](#chatalyst) - better web video conferencing
* [Neutral Gas](#neutralgas) - micro carbon offsets
* [College Lab](#collegelab) - college assistance for students in China

## Space

Lots of new work in aerospace data analysis and visualization.

### Alioth

With a lot of patience, I managed to land a sizable 2-year grant from NASA for a project called [AstroKit](http://astrokit.org), which will provide open-source asteroid characterization tools for scientists.

![NASA logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png)
<div class="caption">Thanks NASA</div>

I'd been doing enough work with NASA and others that it made sense to create a company, which I named [Alioth LLC](http://alioth.io).  There were minor legal and financial reasons to incorporate, but mostly it helps clients feel like they're working with a real company and not some 25-year-old.

Thanks to NASA's support, Alioth is here to stay and the future is bright.

### Talks

I've been giving talks at JS conferences like OpenVisConf and EmpireJS on building 3D tools with webgl (here's a [video](https://www.youtube.com/watch?v=6WohX_3Uww4)).

![OpenVisConf](https://i.imgur.com/gwUm2r8l.png)

Also gave a talk at NASA JPL in Pasadena, a place I'd wanted to visit ever since I was a kid and never thought I'd get to speak there.

![JPL](https://i.imgur.com/jvLyjRHl.jpg)

Lastly, I gave a talk at University of South Carolina's Darla Moore School of Business.

### Meteor Showers

This visualization uses my Asterank engine to show what meteor showers look like in the context of our solar system.  I find that 3D visualizations often improve understanding of space because it's very abstract otherwise.

I created this [meteor showers visualization](https://www.meteorshowers.org/) for the Perseids meteor shower in August and coded most of it on [livecoding.tv](https://www.livecoding.tv/video/3d-space-visualization-meteor-showers-10/).

![all meteor showers](http://i.imgur.com/RSXnyy5l.jpg)
<div class="caption">This is my favorite project this year.</div>

It's also a finalist in some NSF/Popular Science visualization competition, and it's [open-source](https://github.com/typpo/showers).

### Pluto

A friend and I thought New Horizons' flyby was awesome, so we built this [Pluto globe](http://www.ianww.com/pluto) ([github](https://github.com/typpo/pluto)).

![pluto pic](http://i.imgur.com/emNTRCZl.png)
<div class="caption">This viz shows our view of Pluto from 1930 to present.</div>

I also adapted it for [Mars](http://ianww.com/mars) (incomplete) and [Ceres](http://ianww.com/ceres).

![ceres](http://i.imgur.com/Q3jcJiFl.png)
<div class="caption">Hello, Ceres.</div>

### Asterank

[Asterank](http://www.asterank.com), an analytics and visualization tool for asteroids, was how I originally got into the space industry.

I [sold it](http://www.ianww.com/blog/2013/10/08/lessons-from-getting-my-side-project-acquired/) to Planetary Resources over 2 years ago now, but still maintain the open-source [repository](http://asterank.com) and make minor changes.

Here's a cool visualization of open-source work done over the years:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nDOiFfGvnNg" frameborder="0" allowfullscreen></iframe>
</center>

Traffic to Asterank remains generally strong, punctuated by moments of media coverage.

![Asterank traffic](http://i.imgur.com/vwXjZTL.png)
<div class="caption">100,000+ visitor days still happen sometimes.</div>

### Satellites

Not really a side project, but deserves mention: the satellite I worked on at Planetary Resources launched twice.  The first time, the rocket carrying it exploded.

![boom](https://i.imgur.com/uuz7TKPm.jpg)
<div class="caption">Null pointer exception.</div>

The second launch went fine and it was eventually deployed from the International Space Station.

My interest in satellites led to a few interesting high-altitude side projects...

## Weather balloon #1

I've always wanted to build and launch my own satellite.  A friend and I decided that a high-altitude balloon was a good first step.

The goal was to send something up to around 75-100k ft and get a picture with the black of space and the curvature of Earth.  Together we designed, assembled, and launched a high-altitude vehicle.

![first balloon](https://i.imgur.com/uDy4Vhcl.jpg)
<div class="caption">Me looking nerdy with the first balloon.</div>

Our first attempt cost about $250 (largest expense is helium).  We got two cheap Android phones and programmed a custom Android app that recorded GPS, sent text updates, and took pictures.

![first picture](http://i.imgur.com/4vBREGBl.jpg)
<div class="caption">One of the pictures we took.</div>

We let it go, received a few pings, and then it was gone for good.  Our theory was that the batteries failed due to cold because the payload was just insulated by a children's lunchbox!

Months later we got a call from a farmer in Stockton who noticed our little package in his field.  We were able to recover some awesome pictures from both phones and confirmed our battery theory - they cut out ~15 min before landing.

## Weather balloon #2

Immediately after #1 went MIA, we put together another balloon.

This time, we used a styrofoam cooler, dedicated GPS, and a cheap Canon point-and-shoot.  Everything worked great.  We recovered it on a farm about 2.5 hours later (the farmer gave us a call, but we already knew where it was).

Photo quality was low - mostly overexposed.  We had custom firmware on the camera and wrote a script to handle the picture taking, but our configuration needed further tweaking.

![first balloon pic](https://i.imgur.com/W35wDdll.jpg)
<div class="caption">The pictures from balloon #1 were better, but we didn't get them til months later.</div>

## Space Potato kickstarter

Our success with the balloons got me excited to do more.  I convinced a group of friends to do a [Kickstarter](http://spacepotato.org) to support a larger and more interesting high-altitude project.

The twist: all the electronics would be charged/powered by a potato.

In the end, we raised about $1,800 to send up a potato-powered near-space balloon dubbed "The Space Potato."

![potato science](http://i.imgur.com/k3DVQ9Il.jpg)
<div class="caption">The balloon flew with a potato onboard.</div>

The full space potato write-up and post-mortem is [here](http://www.ianww.com/blog/2015/07/17/sending-a-potato-to-near-space/).  It was a huge success in my book:

![space potato pic](https://i.imgur.com/QwXYlVcl.jpg)

Thanks to potato power and lots of help from friends, I got the beautiful "Earth from near-space" picture I always wanted!

![space potato logo](https://i.imgur.com/tZm2Hj7m.png)
<div class="caption">"From the Earth to the Stars," or something like that.</div>

## Global health

I spent 2 weeks in Ethiopia as part of a project with UCSF and a representative from the UN.  We worked with their Ministry of Health and other international organizations to create tools that analyze data and provide critical support for national healthcare decisions.

![Ethiopia map](https://i.imgur.com/O9IqHNhm.png)

The trip went very well and while I can't go into detail, we made a huge impact and intend to continue working with their government.

## Interview Club

A few friends and I built [Interview Club](http://gointerview.club/) at the LAUNCH hackathon.

It solves a problem we all had when we worked together at [Room 77](http://room77.com/) before we were acquired by Google.  Technical phone screens are a huge timesink and it's very resource intensive to screen the top of the funnel.  We built a marketplace where experienced engineers sign up and companies pay them to do technical interviews.

In less than 48 hours, we had over 100 engineers signup and 8 companies who needed help screening tech talent.

We won nearly $14,000 (!) and got to present as finalists.  It was a real whirlwind ([pitch/demo here](https://www.youtube.com/watch?v=UYKqYNW5hMw&feature=youtu.be)).

![prize](http://i.imgur.com/pZZV7ANl.jpg)
<div class="caption">One of several prizes.</div>

For more on Interview Club, check out the [post](http://www.ianww.com/blog/tag/interview-club/) I wrote on it.

## Harvest

I've always had a long-standing vision of monitoring crops and other things using aerial infrared cameras.  Now that my friends and I were experts in weather balloons, we were able to [build it](http://www.harvesters.club/) at TechCrunch Disrupt.

![tethered balloon](https://i.imgur.com/Tl6VsHrl.jpg)
<div class="caption">The balloon was tethered as it monitored vegetation below.</div>

Disrupt was great and we won ~$5000 and 3rd place overall.

![harvest gif](https://i.imgur.com/iGGYaOU.jpg)
<div class="caption">Infrared analysis highlights problem areas.</div>

I wrote a more [detailed post](http://www.ianww.com/blog/2015/10/03/building-a-winner-at-techcrunch-disrupt/) on Harvest, or check out the [pitch video](http://techcrunch.com/video/harvest/519093871/) at Disrupt.

![disrupt](https://i.imgur.com/ILuLFOwl.jpg)
<div class="caption">Nerds.</div>

## TextBelt

[TextBelt](http://textbelt.com), my [open-source](http://textbelt.com/) SMS API, steadily grew from 30,000 to 40,000 texts per month this year.  An unknown number of texts are also sent via the self-hosted node module.

It reached 50k texts/mo in October but plummeted in November when some providers blocked it and I didn't address the issue quickly.

![Textbelt growth](http://i.imgur.com/TIKGtUo.png?1)
<div class="caption">Two years of Textbelt usage.</div>

In the past year, I've had discussions with IT managers, doctor's offices, and even a police department (!) on their usage of Textbelt.

Now that it's popular, abuse is a perennial issue with Textbelt.  People are using it to spam friends, enemies, and strangers.  At some point I'll have to shut it down or start charging, which is a shame because many use it for legitimate reasons.

## DinosaurPictures.org

Last spring, I was looking for dinosaur pictures and came to the conclusion that there weren't any good dinosaur picture websites.

That's why I created [Dinosaur Pictures](http://dinosaurpictures.org), the #1 source for illustrations of dinosaurs and other ancient reptiles.

![DINOSAUR](https://i.imgur.com/LPb1b8al.jpg)

This was pretty timely as Jurassic World came out over the summer.

Creating this site was an interesting process.  I hired a freelancer to curate some of the content, but eventually wound up programmatically curating content and scraping Bing Images.  I also integrated some paleontology databases and papers.

My end goal is to figure out a way to give a talk at a paleontology conference.

## Ancient Earth

[Ancient Earth](http://dinosaurpictures.org/ancient-earth) is an interactive globe that shows the continents moving around over the past billion years.  It also includes a narrative of how life evolved on Earth.

This went viral (especially in Spanish-speaking countries for some reason).

![Ancient Earth](http://i.imgur.com/Ya57O3tl.png?1)

This was actually just an SEO ploy for DinosaurPictures.org, but it didn't really work and people liked the visualization more.  It's [open-source](https://github.com/typpo/ancient-earth).

## Neutral Gas

[Neutral Gas](https://www.neutralgas.com/) lets you buy "micro-offsets" to counteract carbon emissions from small purchases, like a single tank of gas.  I collect these tiny payments until I have enough to purchase a large carbon offset for cheap.

![neutral gas](http://i.imgur.com/lSAUkmIl.png)

This was a quickie.  I was too scared/embarrassed to post it anywhere.

## Chatalyst

[Chatalyst](http://chatalyst.io) is a meeting planner and video chat tool.  Meetings are the worst part of work.  Chatalyst enforces best practices (and preserves sanity) with a built-in agenda, timer, and seamless file sharing.  It's the best video conference tool out there IMO.

Chatalyst was built in a weekend as part of [Sprinkle Camp](http://sprinkle.ai), an all expenses paid hackathon-type thing in Detroit.  Detroit was actually really great, and I had a good time hacking this together with my friends and other Sprinkle folks.

![chatalyst](http://i.imgur.com/ZWcMlkWl.png)

## College Lab

[College Lab](http://www.collegelab.us) is a service that a friend of mine launched this fall to help students in China apply to schools in the US.  It was well received - I helped her answer a bunch of students' questions - and I'm excited to see where this goes.

![college lab](http://i.imgur.com/JfbhJobl.jpg)

## Misc

I wrote a [pagerank checker](https://github.com/typpo/google-pagerank) npm module and a [CLI](https://github.com/typpo/mixpanel-export-cli) for exporting data from Mixpanel, rewrote my [personal homepage](http://www.ianww.com/) as an isomorphic react app (static page would suffice but I wanted to learn).  Also created a [Chrome extension](https://chrome.google.com/webstore/detail/aim-was-better/jlfnamkeapjfndbdiomnegmigjjkfpef) that replaces gmail pings with old-school AIM sounds...

## Overall

Can't believe I got this much done and definitely couldn't have done it without all the help from friends.  2015 was the year of everything.  In 2016, I want to focus!
