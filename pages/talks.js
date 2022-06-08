import React from 'react'
import Talk from './Talk'
import talkData from '../data/talks.js'

export default React.createClass({
  getInitialState() {
    return {
      data: talkData,
    };
  },
  render() {
    var talks = this.state.data.map((talk, idx) => {
      return (
        <Talk data={talk} key={idx} />
      );
    });
    return (
      <div className="talk-list">
        <h2>Selected Talks</h2>
        {talks}
      </div>
    );
  },
})
