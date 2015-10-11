var React = require('react'),
    Hack = require('./Hack'),
    projectData = require('../../../data/projects.js');

if (typeof window === undefined) {
  require('../../../css/hacks.scss')
}

export default React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    let hacks = this.state.data.filter(function(project) {
      return !!project.hackathon;
    })
   .sort(function(a, b) {
      // TODO eventually just sort by project year.
      return b.hackathon.year - a.hackathon.year;
    });

    let hackElements = hacks.map(function(project, idx) {
      return (
        <Hack data={project} key={idx} />
      );
    });
    return (
      <div className="hack-list-container">
        <h2>Hackathons</h2>
        <div className="hack-list">
          {hackElements}
        </div>
      </div>
    );
  },
});
