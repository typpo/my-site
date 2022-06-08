import React from 'react'
import Hack from '../components/Hack'
import projectData from '../data/projects.js'

export default React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    let hacks = this.state.data.filter(project => {
      return !!project.hackathon;
    }).sort((a, b) => {
      // TODO eventually just sort by project year.
      return b.hackathon.year - a.hackathon.year;
    });

    let hackElements = hacks.map((project, idx) => {
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
})
