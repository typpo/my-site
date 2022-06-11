import Project from "./Project";

const Hack = ({ data }) => {
  let hackathon = data.hackathon;

  return (
    <div className="hack-item">
      <div className="hack-item-header">
        <span className="title">
          <a href={hackathon.url}>
            {hackathon.name} ({hackathon.year})
          </a>
        </span>
        <br />
        <div className="desc">{hackathon.desc}</div>
      </div>
      <div>
        <Project data={data} />
      </div>
    </div>
  );
};
export default Hack;
