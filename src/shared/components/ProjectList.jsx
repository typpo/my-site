var React = require('react'),
    Project = require('./Project'),
    projectData = require('./project_data.js');

var ProjectList = React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    var projects = this.state.data.map(function(project, idx) {
      return (
        <Project data={project} key={idx} />
      );
    });
    return (
      <div className="project-list flex-container">
        {projects}
      </div>
    );
  },
});

module.exports = ProjectList;
