---
title: Building a winner at TechCrunch Disrupt
date: 2015-10-03
---

Disrupt is a 20 hour hackathon that took place this September in San Francisco.  This post describes an unusual hardware/software project and how it managed to win a handful of prizes.

![Inside Disrupt](https://i.imgur.com/7kloMjRl.jpg)

## The dream

For the past year, I'd been doing a lot of high-altitude balloon projects, even sending [a potato to 100,000 ft](http://www.ianww.com/blog/2015/07/17/sending-a-potato-to-near-space/) via Kickstarter.  I was looking for a way to parlay high-altitude imaging into social good, with an idea on the backburner for balloons to monitor crop health and water in infrared.

Near-infrared imaging spots plants made unhealthy by irrigation problems and other causes, which is particularly topical here in California due to drought.  Well-watered photosynthesizing plants scatter solar radiation in near-infrared.

After some debate, I convinced a few friends it was worth building.  We called it **Harvest, a toolkit that helps farmers understand plant health and spot water waste using infrared aerial photography.**

In less than 20 hours, we built:

   1. a cheap infrared imaging device,

   2. processing software that takes infrared and runs [NDVI analysis](https://en.wikipedia.org/wiki/Normalized_Difference_Vegetation_Index), which indicates whether plants are healthy.

   3. an [interface](http://harvesters.club) to tie it all together.

![Harvest NDVI](http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/294/798/datas/gallery.jpg)
<div class="caption">Harvest's Normalized Difference Vegetation Index (NDVI) view.</div>

## Preparation

The project sounds complex but was very doable after breaking it into parts.  The most difficult part was that we needed to finish the hardware and collect images within the first ~6 hours before sundown.

I had ordered a balloon, rope, etc. beforehand, as well as a cheap Canon point-and-shoot from eBay and a replacement ["infrablue" filter](http://store.publiclab.org/products/infragram-diy-filter-pack), which shifts infrared light into the red part of the spectrum, so the camera records it.  The total cost of all this was $12 for a used camera, $10 for the filter, $10 for a [small weather balloon](http://smile.amazon.com/gp/product/B0081UGJ9W?psc=1&redirect=true&ref_=oh_aui_detailpage_o00_s00) (on sale), and $10 for 500 ft of rope, for a total of ~$42.

It was a pain to find helium in SF but we managed to get 55 cu ft, more than enough (thanks SF Party).

I flashed the camera with special firmware called the [Canon Hack Development Kit](http://chdk.wikia.com/wiki/CHDK) and put a Lua script on it that adjusted the focus, flash, and most importantly, took a picture every 10 seconds.

## The field test

We went to a [nearby park](https://www.google.com/maps/place/Esprit+Park/@37.7610344,-122.3909752,15z/data=!4m2!3m1!1s0x0:0x915f858db66d7668) and got to work.  Though it wasn't a farm, we figured there'd be enough grass/trees/pavement to show variation in watering and plant happiness.

Everything was secured with rubber bands and tape and we filled up the balloon.

![](https://i.imgur.com/G4PeqWKl.jpg)
<div class="caption">It was a 5ft, 150g weather balloon.</div>

The camera was just put in a cardboard box with a hole.

![](https://i.imgur.com/R6gQJzKl.jpg)
<div class="caption">Serious cardboard cutting.</div>

Tying off a weather balloon is always pretty scary.  We managed to not have everything fly away by accident.

![](https://i.imgur.com/SaH2pRjl.jpg)

After being secured to a rope, the balloon was tethered to the ground.  The payload flew smoothly, balanced by the downward-facing camera.

![Field test balloon in flight](https://i.imgur.com/Tl6VsHrl.jpg)
<div class="caption">Field test in progress over Dogpatch, SF.</div>

We didn't fly it to the full 500 feet because the balloon was underinflated and we were worried about power lines.  It would've been too annoying to undo the seal and fill up the balloon more.

## The software

Now that we had a bunch of near-infrared images of a nearby park, we had to process them.  NDVI processing is a well-known technique, for every pixel:

    NDVI = ((IR - R)/(IR + R))
    IR = pixel values from the infrared band
    R = pixel values from the red band

[PublicLab](http://publiclab.org/wiki/near-infrared-camera) is an excellent resource for DIY-NDVI projects and provided a lot of the knowledge and inspiration necessary to complete this.  They have code, pre-made kits, and a great community around aerial observation and data collection.

I used the Python Imaging Library (PIL) to do this, scaled the coloring to best fit our field test data, and built a pipeline that converted all images.

The frontend then displayed these images nicely:

![](http://i.imgur.com/aCrqxRQl.png)
<div class="caption">Infrared and processed NDVI imagery.</div>

Our frontend whiz also did this awesome slider view.

![](https://i.imgur.com/iGGYaOU.gif)

And we incorporated satellite imagery from LandSat.

![](http://i.imgur.com/ps1hgMn.gif)

## The pitch

It helps to start your pitch early, practice pitching to strangers, and build a good landing page.  These were all done by ~10pm the first day.

These needs were compounded by the fact that Disrupt is only 20 hours and everything was judged solely on 1 minute presentations with no Q&A.  This was a bit surprising - I think science-fair style judging like at LAUNCH or YC Hacks does a better job of fully evaluating a hack.

![](http://i.imgur.com/k1w80OTl.jpg)

I worried the balloon was too much of a gimmick.  It was just a demo; the meat of the project is not balloon-related at all and I wanted people to realize that.  Our device could go on an airplane, drone, or even a very long pole!

Overall, the pitch basically went fine.  There is only so much you can say/do/screw up in 60 seconds.

<center>
<iframe width="640" height="360" src="https://www.youtube.com/embed/WQgaml3xae8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</center>

## The outcome

We won prizes from [CircleCI](https://circleci.com/), [Weather Underground](http://www.wunderground.com/), and [PCH](http://www.pchaccess.com/).  We were 3rd overall, so we got to return later that week and present to the conference as hackathon winners.  All in all, I felt silly carrying around a red balloon all weekend but it was totally worth it to see the idea come to fruition and achieve recognition.

![](https://i.imgur.com/GQUhfE2l.jpg)
<div class="caption">With the CircleCI team, who singlehandedly restored my faith in CI.</div>

## The future of Harvest

I feel Q&A would've helped this hack shine more, plus maybe a modified pitch.  The only feedback we got from judges was that it was an interesting idea, not a ready-made business.  Which makes me think the goal of the Disrupt Hackathon could be better clarified.

Agricultural crop loss is a huge problem measured in billions of dollars.  Existing businesses do thermal and infrared imaging via airplane, drone, and satellite at anywhere between 100-10,000x the cost.  Every farmer we spoke with at the local market said they were interested in the product, so I think there's a potentially sizable market for a cheap infrared imaging solution that requires no training.

![](https://i.imgur.com/0H4zxcdl.jpg)
<div class="caption">Irrigation problems in a field.</div>

Some interesting takeaways from surveying farmers:

   1. **Agriculture is not technologically backwards** by any stretch.  One farmer said infrared imaging tech sounds like it's far away, but he would've said the same thing about GPS 10 years ago.  Now he can't imagine planting without GPS.  Farmers are eager to adopt technology where it helps.

   2. **Farmers constantly worry about their crops**.  One described how she compulsively checks the few statistics she has.  She would love to be able to do more electronic monitoring.

   3. **Watering is the most important knowledge in agriculture**.  This makes sense but you don't get it until you talk to farmers.  Different plants like to be watered in different ways.  These systems leak and fail in different ways, and catching a variety of problems is hard.  One farmer remarked that we would've caught a recent pump problem, which would've been huge.

## Hackathon tips

Hackathons are great but can be overwhelming.  Here are some thoughts:

   1. **Pitch strangers early**.  People at unrelated sponsor booths are usually willing to listen.

   2. **Optimize for demos**.  For a 20 hour event, you need to be realistic about cutting corners.  This means terrible code is sometimes ok.

   3.  **Sleep a lot**.  Powering through the night is unhealthy and I doubt the returns are worth it.  We slept about 7 hours.

   3. **Talk with sponsors** and try to get a relationship going.  This helps problem solve and puts your project in their minds.

## That's it...for now

If you liked this, [follow me on twitter](http://twitter.com/iwebst), check out my [other projects](http://ianww.com), or read another [hackathon post](http://www.ianww.com/blog/2015/03/03/things-learned-from-launch-hackathon/).

![](https://i.imgur.com/ILuLFOwl.jpg)
