import React from 'react'

if (typeof window === undefined) {
  require('../../../css/genericlist.scss')
}

export default class PostList extends React.Component {
  render() {
    return (
      <div className="post-list generic-list">
        <h3>Posts</h3>
        <ul>
        <li><a href="https://dev.to/iwebst/building-a-replacement-for-google-image-charts-153e">Building a Replacement for Google Image Charts</a></li>
        <li><a href="http://www.ianww.com/blog/2015/12/28/this-year-in-side-projects-2015/">This Year In Side Projects (2015)</a></li>
        <li><a href="http://www.ianww.com/blog/2015/07/17/sending-a-potato-to-near-space/">Sending a potato to near-space</a></li>
        <li><a href="http://www.ianww.com/blog/2014/12/30/this-year-in-side-projects-2014/">This Year In Side Projects (2014)</a></li>
        <li><a href="http://www.ianww.com/blog/2014/07/22/better-code-navigation-on-github/">Better Code Navigation on Github</a></li>
        <li><a href="http://www.ianww.com/blog/2013/12/31/my-year-in-side-projects/">My Year in Side Projects (2013)</a></li>
        <li><a href="http://www.ianww.com/blog/2013/11/26/asterank-discover-reviews-100000th-image/">Asterank Discover, Crowdsourced Asteroid Discovery, Reviews Its 100,000th Image</a></li>
        <li><a href="http://www.ianww.com/blog/2013/10/08/lessons-from-getting-my-side-project-acquired/">What I Learned From Getting My Side Project Acquired</a></li>
        <li><a href="http://www.ianww.com/blog/2013/02/04/how-to-generate-a-conspiracy-theory/">How to Generate a Conspiracy Theory</a></li>
        <li><a href="http://www.ianww.com/blog/2012/11/04/optimizing-three-dot-js-performance-simulating-tens-of-thousands-of-independent-moving-objects/">Optimizing Three.js Performance: Simulating Tens of Thousands of Independent Moving Objects</a></li>
        <li><a href="http://www.ianww.com/blog/2012/12/16/an-introduction-to-custom-shaders-with-three-dot-js/">Introduction to Custom Shaders in Three.js</a></li>
        </ul>
      </div>
    );
  }
}
