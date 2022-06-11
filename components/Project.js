import { useState } from 'react';
import Image from 'next/Image';

const Project = ({data, isPriority }) => {
  const [hover, setHover] = useState(false);
  const [hasEverBeenVisible, setHasEverBeenVisible] = useState(false);

  const style = {};
  if (data.imgurl) {
    style["backgroundImage"] = "url(" + data.imgurl + ")";
    if (hover) {
      style["backgroundImage"] =
        "linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url(" +
        data.imgurl +
        ")";
    }
  }
  if (data.url) {
    style["cursor"] = "pointer";
  }

  return (
    <a className="project-link" target="_blank" href={data.url}>
      <div className="project flex-item-default">
        <Image src={data.imgurl} layout="fill" priority={data.isPriority}/>
        <h3 className="title">{data.title}</h3>
        <div className="desc">{data.desc}</div>
      </div>
    </a>
  );
};

export default Project;
