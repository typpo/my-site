---
title: Getting out the Vote with a JS snippet
date: 2018-11-07
---

On October 11th I released [Vote Banner](https://vote.speaklouder.org), a JS snippet that helps people exercise their voting rights and access relevant voting information.

![vote banner](https://vote.speaklouder.org/images/example.png)

In the 3.5 weeks leading up to the election, it was loaded 1,087,248 times and seen by about 257,000 unique users, far more than I would have expected for a simple project such as this.

## The impact

What was the impact?  Hard to say.  A quarter million people viewed it.  Maybe it helped remind some of them to make plans to vote.  Maybe they reminded friends and family.  We can't measure these things.

The CTR on the banner was quite low, 0.3%.  That means about 678 people actually clicked through to register to vote or look up their polling place (clicks were evenly split between both options).

I'm not hung up on the low CTR, though.  That's better than ad CTR on some websites.  Blanket political calls to action don't perform that well, a phenomenon that I've noted before with the [Call Congress hotline](http://www.ianww.com/blog/2016/12/11/building-a-better-way-for-people-to-call-congress/).  But every little bit counts.

## Next steps

Vote Banner will go on ice until the 2020 election season.  Next time, I'd like to release it ahead of time, including perhaps for primaries, and have it point to state-level data based on the user's IP address.

I'd also like to make distribution easier by e.g. making it a Cloudflare application, which can be added to your site in one click.

Interested in contributing?  It's open source [here](https://github.com/typpo/vote-banner).
