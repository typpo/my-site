import { useState } from 'react';
import Image from 'next/Image';

const Project = (props) => {
  const [hover, setHover] = useState(false);
  const [hasEverBeenVisible, setHasEverBeenVisible] = useState(false);

  const style = {};
  if (props.data.imgurl) {
    style["backgroundImage"] = "url(" + props.data.imgurl + ")";
    if (hover) {
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
    <a className="project-link" target="_blank" href={props.data.url}>
      <div className="project flex-item-default">
        <Image src={props.data.imgurl} layout="fill" />
        <h3 className="title">{props.data.title}</h3>
        <div className="desc">{props.data.desc}</div>
      </div>
    </a>
  );
};

export default Project;
