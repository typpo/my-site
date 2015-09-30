var React = require('react');
var CVM = require('react-component-visibility');
var OverlayTrigger = require('pui-react-overlay-trigger').OverlayTrigger;

var Project = React.createClass({
  mixins: [CVM],
  getInitialState() {
    return {
      hover: false,
      hasEverBeenVisible: false,
    }
  },
  render() {
    var style = {};
    if (this.props.data.imgurl) {
      if (this.state.hover) {
        style['backgroundImage'] = 'url(' + this.props.data.imgurl + ')';
      } else if(this.state.hasEverBeenVisible) {
        style['backgroundImage'] = 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(' +
                this.props.data.imgurl + ')';
      }
    }
    if (this.props.data.url) {
      style['cursor'] = 'pointer';
    }

    let tipContent = (
      <div>World leader in blah balh meoesdl kakl asdlasdk jlasdjk asdlkj asdlkasdlasdkasdlasdlkasd lasdasdj</div>
    )

    return (
      <a className="project-link"
          href={this.props.data.url}>
        <div className="project flex-item-default"
              style={style}
             onMouseOver={this.onMouseOver}
             onMouseOut={this.onMouseOut}>
        <OverlayTrigger placement="top" overlay={tipContent}>
          <h3 className="title">{this.props.data.title}</h3>
        </OverlayTrigger>
          <div className="desc">{this.props.data.desc}</div>
        </div>
      </a>
    );
  },
  onMouseOver(event) {
    this.setState({
      hover: true,
    });
  },
  onMouseOut(event) {
    this.setState({
      hover: false,
    });
  },
  componentVisibilityChanged() {
    // TODO the VisibilitySensor implementation is really shitty.
    if (this.state.visible) {
      this.setState({
        hasEverBeenVisible: true,
      });
    }
  },
});

module.exports = Project;
