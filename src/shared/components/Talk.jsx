var React = require('react');

var Talk = React.createClass({
  render() {
    return (
      <div className="talk-item">
        <span className="title">{this.props.data.title}</span>
        @ {this.props.data.where}
      </div>
    );
  },
});

module.exports = Talk;
