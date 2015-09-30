var React = require('react'),
    Project = require('./Project'),
    PostList = require('./PostList'),
    projectData = require('./project_data.js');

var ProjectList = React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    var projects = this.state.data.filter(function(project) {
      return !project.hideInProjectsView;
    }).map(function(project, idx) {
      return (
        <Project data={project} key={idx} />
      );
    });
    return (
      <div>
        <div className="project-list flex-container">
          {projects}
        </div>
        <PostList/>
      </div>
    );
  },
});

module.exports = ProjectList;
