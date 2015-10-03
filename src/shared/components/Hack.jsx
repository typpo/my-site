var React = require('react');
var Project = require('./Project');

export default class Hack extends React.Component {
  render() {
    let hackathon = this.props.data.hackathon;
    return (
      <div className="hack-item">
        <span className="title">
          <a href={hackathon.url}>{hackathon.name} ({hackathon.year})</a>
        </span> - {hackathon.desc}
      </div>
    );
  }
}
