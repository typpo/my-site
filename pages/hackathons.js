import Page from "../components/Page";

import projectData from "../data/projects";
import Hack from "../components/Hack";

const Hackathons = () => {
  const hacks = projectData
    .filter((project) => {
      return !!project.hackathon;
    })
    .sort((a, b) => {
      // TODO eventually just sort by project year.
      return b.hackathon.year - a.hackathon.year;
    });

  const hackElements = hacks.map((project, idx) => {
    return <Hack data={project} key={idx} />;
  });

  return (
    <Page>
      <div className="hack-list-container">
        <h2>Hackathons</h2>
        <div className="hack-list">{hackElements}</div>
      </div>
    </Page>
  );
};

export default Hackathons;
