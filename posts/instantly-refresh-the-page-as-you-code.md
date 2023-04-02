---
title: "autoreload.js: Instantly refresh the page as you code"
date: 2013-12-30
---

Frontend developers constantly mash ctrl+R or F5 to reload their browser after every single code change.  This is especially exhausting when you're working on mobile web and a refresh requires several taps.  I grew tired of this and developed a soution.

<!-- more -->

## Existing options

[livereload](http://livereload.com) - Costs money.  But it will also compile your sass for you.  Comes with point-and-click interface and browser extensions.  A bit too involved and platform-dependent for what I wanted.

[live.js](http://livejs.com/) - Constantly issues HEAD requests to determine if web resources have changed.  This was no good for me because it pollutes the network debugging log and only works for js and css.  I also want the page to reload when my frontend templates or backend view logic changed.

[nodeJuice](http://nodejuice.com/) - Looks like it may include this functionality, but includes way more than I want.

Other browser and IDE-specific solutions - They're out there, but I wanted a general solution.

## autoreload.js

Autoreload runs either as a standalone script or as middleware if you're running a connect server with node.  You run the script, add a little js to your page, and then you can enjoy automatic refreshes whenever you make edits to your files.

For example, running the following command will watch 3 directories and a file called settings.py for changes:

`$ autoreload js css templates/main settings.py`

It gives you a snippet to include in your base HTML template:

```
<script src="http://localhost:60000/autoreload.js"></script>

<!-- Sometime later ... -->

<script>
AutoReload.Watch();
</script>

```

That's it!  Pretty easy.

Installation via npm:

`$ npm install -g autoreload`

It works by long polling an endpoint that updates a timestamp when files change.  Unfortunately it assumes jQuery is available.  That's a TODO item.

Check it out [on github](http://github.com/typpo/autoreload) for the full README and code (MIT license).
