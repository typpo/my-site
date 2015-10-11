var React = require('react'),
    Press = require('./Press'),
    projectData = require('../../../data/project_data.js');

if (typeof window === undefined) {
  require('../../../css/press.scss')
}

var PressList = React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    let press = this.state.data.filter(function(project) {
      return project.press && project.press.length > 0;
    }).map(function(project, idx) {
      return (
        <div key={idx} className="press-item">
          <span className="title">{project.title}</span>
          <Press data={project} />
        </div>
      );
    });
    return (
      <div className="press-list">
        <h2>Best-effort press compilation</h2>
        {press}
      </div>
    );
  },
});

module.exports = PressList;
