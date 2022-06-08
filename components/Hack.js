import React from 'react'
import Project from './Project'

export default class Hack extends React.Component {
  render() {
    let hackathon = this.props.data.hackathon;
    return (
      <div className="hack-item">
        <div className="hack-item-header">
          <span className="title">
            <a href={hackathon.url}>{hackathon.name} ({hackathon.year})</a>
          </span>
          <br/>
          <div className="desc">{hackathon.desc}</div>
        </div>
        <div>
          <Project data={this.props.data} />
        </div>
      </div>
    );
  }
}
