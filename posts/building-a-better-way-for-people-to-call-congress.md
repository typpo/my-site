---
title: Building a better way for people to call Congress
date: 2016-12-11
---

This summer I [created a phone number](http://www.ianww.com/blog/2016/06/15/call-your-congressperson-with-one-phone-number-1-844-usa-4522/) that immediately connects people with their representatives in the U.S. government: dialing 1-844-USA-0234 will forward the call to your senator's office.  After they hang up, it automatically calls your next senator, and then your representative.

It's the lowest-friction way to contact a representative.  No looking up phone numbers or entering your address on a web form.

This post discusses the usage patterns of the "Call Congress hotline" and steps I'm taking to make it more useful and mainstream.

![Your Congresspeople](https://i.imgur.com/dphNzBJ.jpg)

# Who saw it?

Many people.  It went viral on Facebook, Twitter, and Reddit.  I don't know exactly how many people saw the phone number, but based on clickthrough estimates I've seen it was probably more than 100,000 people.  My reasoning is that it made it to the Reddit frontpage (briefly, until it was removed by mods on /r/lifehacks) and the corresponding blog post received several tens of thousands of hits (I would estimate the CTR on social links is less than 10-20%).

The real question is whether virality actually translates into calls to senators and representatives.

## By the numbers

In the six months it's been live, the phone number has directed about 1,500 calls to Congress.  If we sum the duration of the calls, they amount to nearly 24 hours of solid time on the phone.

![Number of calls per day since June](http://i.imgur.com/8KiQH16.png)

You can see the initial spike from the launch, which happened in the wake of the Orlando shootings.  The second uptick is after the presidential election.

In June, ~100,000 people saw the number when it launched, but we did about 500 phone calls that week.  That means the conversion rate for a call to action like "Call your Congressperson" is about 0.5%.  On average, you'd have to show the phone number to 200 people on Facebook or Reddit before someone picked up the phone.

As a corollary, because the number of shares/likes/upvotes/retweets exceeds the number of calls, we can conclude that "click-to-share" activism is a whole lot more popular than picking up the phone, which would be [much more effective](http://www.attn.com/stories/12768/former-congressional-staffer-explains-how-to-make-congressman-listen).

Next, let's characterize the calls that were made.  We don't have too much information on this because the calls are private.  But we know how much time was spent on each call:

![Histogram of call duration](http://i.imgur.com/2aDRJc9.png)

As you can see here, the vast majority of calls were extremely brief, possibly test calls, people who got cold feet, or people who got an answering machine.  In other words, not meaningful interactions with the Congressional office.  However, it's entirely possible that a constituent can register their suggestion/complaint within 60 seconds, so maybe we shouldn't discount these entirely.

Even though there were many short calls, there were still significant numbers of higher-duration calls.  These added up to many hours on the line with Congressional offices.

# Who's using it?

As stated earlier, I don't have much info on my users.  But I have anecdotal information.

Several groups in NYC are using the number to campaign against airport noise in their neighborhoods from JFK.  They are well-organized and call their Congresspeople pretty regularly (they've also given me some good feedback - thanks!).

Back in July, [Deray](https://twitter.com/deray/status/744889843985973248), one of the leaders of the Black Lives Matter movement, tweeted the number and generated a huge amount of traffic:

<center>
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Call 1-844-USA-0234, enter your zipcode, &amp; be connected to your 3 reps. Support universal background checks + hate crime prevention act.</p>&mdash; deray mckesson (@deray) <a href="https://twitter.com/deray/status/744889843985973248">June 20, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</center>

It popped up several more times as activists asked people to call Congress to [allow immigration](https://twitter.com/iamhr213/status/764690244671123457) and [reduce hate crimes](https://twitter.com/stevekazee/status/745006758729388033).

But the number is used all across the political spectrum.  It appeared several times on the now-infamous [/r/The_Donald subreddit](https://www.reddit.com/r/The_Donald/).  In one such case, an activist called upon others to demand that Hillary Clinton be [charged with treason](https://www.reddit.com/r/The_Donald/comments/4vo2q3/demand_hillarys_arrest_for_treason_toll_free/).  The phone number is cause-agnostic by design, and clearly there are many use cases.

# The problem with a "Call Congress" hotline

I'm very happy that I helped facilitate even 1,500 phone calls, even if it's a drop in the bucket.  Phone calls do make a difference, and are one of the best ways to send a message to your representatives' offices.

From the numbers, the biggest problem facing call campaigns is *actually engaging people*.  We have seen that it's more fashionable to "share" your outrage on social media than to act upon it by picking up the phone, even if it's made as easy as possible, with all the dialing done automatically.

I think the missing ingredient is the organizers and leaders who inspire people and promote causes.  This Congressional hotline is politically neutral.  It doesn't come with a guide or script.  It doesn't care about the cause you're calling in for.

This tool doesn't really belong in my hands.  It belongs in the hands of organizers and others who can incite action.  The situations in which this phone number has thrived have been when Deray tweeted it, the NYC airport groups shared it on Facebook, or people posted it on activist subreddits.

I looked into this more and learned that some major activist organizations don't actually have good technology options for grassroots organizing.  Most work is overpriced, incomplete, and done by contractors.

# Creating a tool for organizers

To solve this problem, I've created [Speak Louder](http://www.speaklouder.org/).  It's  an extension of the Congress hotline that lets organizers create their own phone numbers and landing pages customized to their specific causes.

[![Speak Louder](https://i.imgur.com/2fcKHpz.jpg)](http://speaklouder.org/)

It also provides other neat tools like email and text message subscriptions, so you can supplement your social media outreach with direct communication.

This is similar to the Call Congress hotline, except now the call to action is attached to a cause.  You can give people talking points, scripts, and other forms of encouragement.  You can collect their information and follow up.

I theorize that this will lead to increased engagement in the long term.

[![Create a campaign](https://i.imgur.com/5CKBmIA.png)](http://speaklouder.org/)
<div class="caption">Create a campaign for a cause you care about</div>

P.S.: it's [open source](http://github.com/typpo/speaklouder), just like the phone number.

# Thanks

I don't know if Speak Louder will work out or if people will continue to use the Congress hotline (1-844-USA-0234!), but they matter to me a lot.

Big thanks to Twilio for supporting this project and giving me credit to continue running the service when demand spiked.  (I'm going to continue to self-fund the Congress hotline, but may need to take donations to keep it running in the long term).

Lastly, thanks so much to everyone who shared this phone number and everyone who called in!
