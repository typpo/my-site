var React = require('react'),
    talkData = require('./talks_data.js');

var TalkList = React.createClass({
  getInitialState() {
    return {
      data: talkData,
    };
  },
  render() {
    /*
    var projects = this.state.data.map(function(project, idx) {
      return (
        <Project data={project} key={idx} />
      );
    });
    */
    return (
      <div className="project-list flex-container">
        hey yall
      </div>
    );
  },
});

module.exports = TalkList;
