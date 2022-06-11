import Image from "next/Image";

const Project = ({ data }) => {
  return (
    <a
      className="project-link"
      target="_blank"
      href={data.url}
      rel="noreferrer"
    >
      <div className="project flex-item-default">
        <Image
          src={data.imgurl}
          layout="fill"
          priority={data.isPriority}
          alt={data.title}
          unoptimized
          loader={({ src }) => src}
        />
        <h3 className="title">{data.title}</h3>
        <div className="desc">{data.desc}</div>
      </div>
    </a>
  );
};

export default Project;
