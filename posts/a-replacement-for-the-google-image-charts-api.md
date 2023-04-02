---
title: A Replacement for the Google Image Charts API (Open Source)
date: 2019-03-05
---

The [Google Image Charts](https://developers.google.com/chart/image/) API shut down on March 14, 2019.  Although it was deprecated since 2012, the shutdown has disappointed many developers.

Although Google expects developers to replace the Image Charts API with Google Charts, unfortunately this is not always possible.  Google Charts requires Javascript, which means that it is incompatible with environments that cannot run Javascript, such as email, SMS, and chatbots.

[QuickChart](https://quickchart.io/) is an open-source project that provides an easy way to generate charts as PNGs.  I built and released it in March 2019 and it has since served millions of chart images.

Charts are defined by a single URL.  For example, this url:

```
https://quickchart.io/chart?c={type:'bar',data:{labels:['January','February','March','April','May'],datasets:[{label:'Dogs',data:[50,60,70,180,190]},{label:'Cats',data:[100,200,300,400,500]}]}}
```

Will produce this image:

![Image Charts](https://quickchart.io/chart?c=%7Btype%3A%27bar%27%2Cdata%3A%7Blabels%3A%5B%27January%27%2C%27February%27%2C%27March%27%2C%27April%27%2C%27May%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Dogs%27%2Cdata%3A%5B50%2C60%2C70%2C180%2C190%5D%7D%2C%7Blabel%3A%27Cats%27%2Cdata%3A%5B100%2C200%2C300%2C400%2C500%5D%7D%5D%7D%7D)

QuickChart uses the popular [Chart.js API](https://www.chartjs.org/docs/latest/configuration/), so if you're using Chart.js in your Javascript, copy over your chart definition to a QuickChart URL and things will just work.  You can use the [Chart.js documentation](https://www.chartjs.org/docs/latest/) to customize your chart.

I open sourced the project because I wanted to avoid a repeat of the Google Image Charts scenario, in which people are dependent on proprietary image chart solutions that can be shut down at any time.

Head to [QuickChart.io](https://quickchart.io) to try it out.  Enjoy!
