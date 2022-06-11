/*
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

           onMouseOver={onMouseOver}
           onMouseOut={onMouseOut}
  */

const Project = (props) => {
  const state = {
    hover: false,
    hasEverBeenVisible: false,
  };
  var style = {};
  if (props.data.imgurl) {
    if (state.hover) {
      style["backgroundImage"] = "url(" + props.data.imgurl + ")";
    } else if (state.hasEverBeenVisible) {
      style["backgroundImage"] =
        "linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(" +
        props.data.imgurl +
        ")";
    }
  }
  if (props.data.url) {
    style["cursor"] = "pointer";
  }

  return (
    <a className="project-link" target="_blank" href={props.data.url} rel="noreferrer">
      <div className="project flex-item-default" style={style}>
        <h3 className="title">{props.data.title}</h3>
        <div className="desc">{props.data.desc}</div>
      </div>
    </a>
  );
};

export default Project;
