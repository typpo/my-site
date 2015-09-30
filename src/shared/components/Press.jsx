var React = require('react');

var Press = React.createClass({
  render() {
    let presses = this.props.data.press.map(function(pressItem, idx) {
      if (pressItem.url) {
        return <li key={idx}><a href={pressItem.url}>{pressItem.source}</a></li>
      }
      return <li key={idx}><span>{pressItem.source}</span></li>
    });
    return (
      <ul>
        {presses}
      </ul>
    );
  },
});

module.exports = Press;
