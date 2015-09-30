var React = require('react');

var Talk = React.createClass({
  render() {
    let talk_url = '';
    if (this.props.data.talk_url) {
      talk_url = <span>(<a href="{this.props.data.talk_url}">link</a>)</span>
    }
    return (
      <div className="talk-item">
        <span className="title">
          <a href={this.props.data.conf_url}>{this.props.data.title}</a>
        </span> @ {this.props.data.where}: {this.props.data.desc} {talk_url}
      </div>
    );
  },
});

module.exports = Talk;
