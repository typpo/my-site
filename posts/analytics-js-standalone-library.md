---
title: Using analytics.js as a standalone library
date: 2017-08-06
---

Segment.io has developed [analytics.js](https://segment.com/docs/sources/website/analytics.js/), a handy tool that allows you to send events to Google Analytics, Mixpanel, and many other services using one standard API.

analytics.js is [open source](https://github.com/segmentio/analytics.js) but the documentation assumes you're using Segment's paid service.

There's a helpful [post](https://content.pivotal.io/blog/how-to-use-analytics-js-to-fix-your-analytics-code-and-achieve-metrics-nirvana) from Pivotal that describes self-hosted analytics.js, but its code contains a bug that causes events to not be tracked until analytics.js is loaded.  Depending on how you load dependencies, this introduces a race condition.  About 40% of my `.page` and `.track` calls were dropped as a result.

The Pivotal code attempts to record a queue of method calls before analytics.js is loaded.  [According to Segment's cofounder](https://stackoverflow.com/questions/14859058/why-does-the-segment-io-loader-script-push-method-names-args-onto-a-queue-which), the `analytics.js` library assumes it is loaded synchronously.  As a result, `analytics.load` overwrites the queue and we lose our events.

# Code walkthrough

First, create a queue and a stubbed analytics object.  I separated the queue from the analytics object because we don't want the queue overwritten when `analytics.js` is loaded.

If you put this chunk before the rest of your JS, you can call `analytics.page()`,`analytics.track({...})` without worrying about load timing.

The fixed code is [available here](https://gist.github.com/typpo/5e2e4403c60314e04e8b6b257555f6de) under MIT license.

```js
// Create a queue to push events and stub all methods
window.analytics || (window.analytics = {});
window.analytics_queue || (window.analytics_queue = []);
(function() {
  var methods = ['identify', 'track', 'trackLink', 'trackForm', 'trackClick', 'trackSubmit', 'page', 'pageview', 'ab', 'alias', 'ready', 'group', 'on', 'once', 'off'];

  var factory = function(method) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      analytics_queue.push(args);
      return window.analytics;
    };
  };

  for (var i = 0; i < methods.length; i++) {
    var method = methods[i];
    window.analytics[method] = factory(method);
  }
})();
```

This next part loads the script asynchronously.   If you don't want to host analytics.js yourself, you could use [cdnjs](https://cdnjs.com/libraries/analytics.js):

```js
// Load analytics.js after everything else
analytics.load = function(callback) {
  var script = document.createElement('script');
  script.async = true;
  script.type = 'text/javascript';
  script.src = '/assets/js/analytics.min.js';     // <--- your url here
  if (script.addEventListener) {
    script.addEventListener('load', function(e) {
      if (typeof callback === 'function') {
        callback(e);
      }
    }, false);
  } else {  // IE8
    script.onreadystatechange = function () {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        callback(window.event);
      }
    };
  }
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
};
```

Finally, in the load step, process the queued method calls:
```js
analytics.load(function() {
  analytics.initialize({
    'Google Analytics': {
       trackingId: 'UA-XXX-1'
     },
     'Mixpanel': {
       token: 'XXX'
     }
  });

  // Loop through the interim analytics queue and reapply the calls to their
  // proper analytics.js method.
  while (window.analytics_queue.length > 0) {
    var item = window.analytics_queue.shift();
    var method = item.shift();
    if (analytics[method]) analytics[method].apply(analytics, item);
  }
});
```


I'm releasing the fixed code under the MIT license.  Have a look at the [full code on Github](https://gist.github.com/typpo/5e2e4403c60314e04e8b6b257555f6de).
