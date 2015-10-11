var React = require('react'),
    Project = require('./Project'),
    PostList = require('./PostList'),
    projectData = require('../../../data/project_data.js');

if (typeof window === undefined) {
  require('../../../css/projects.scss')
  require('../../../css/genericlist.scss')
}

var ProjectList = React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    let projects = this.state.data.filter(function(project) {
      return !project.hideInProjectsView && project.imgurl;
    }).map(function(project, idx) {
      return (
        <Project data={project} key={idx} />
      );
    });

    let textProjects = this.state.data.filter(function(project) {
      return !project.hideInProjectsView && !project.imgurl;
    }).map(function(project, idx) {
      return (
        <li key={idx}><a href={project.url}>{project.title}</a> - {project.desc}</li>
      );
    });

    return (
      <div>
        <div className="project-list flex-container">
          {projects}
        </div>
        <div className="text-project-list generic-list">
          <h3>Other Projects</h3>
          <ul>
          {textProjects}
          </ul>
        </div>
        <PostList/>
      </div>
    );
  },
});

module.exports = ProjectList;
