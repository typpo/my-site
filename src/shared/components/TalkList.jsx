var React = require('react'),
    Talk = require('./Talk'),
    talkData = require('./talks_data.js');

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
        {talks}
      </div>
    );
  },
});

module.exports = TalkList;
