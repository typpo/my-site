var React = require('react'),
    Talk = require('./Talk'),
    talkData = require('../../../data/talks.js');

if (typeof window === undefined) {
  require('../../../css/talks.scss')
}

var TalkList = React.createClass({
  getInitialState() {
    return {
      data: talkData,
    };
  },
  render() {
    var talks = this.state.data.map(function(talk, idx) {
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
});

module.exports = TalkList;
