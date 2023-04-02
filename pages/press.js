import Page from '../components/Page';

import PressItem from '../components/Press';
import projectData from '../data/projects';

const Press = () => {
  let press = projectData
    .filter((project) => {
      return project.press?.length > 0;
    })
    .map((project, idx) => {
      return (
        <div key={idx} className="press-item">
          <span className="title">{project.title}</span>
          <PressItem data={project} />
        </div>
      );
    });
  return (
    <Page>
      <div className="press-list">
        <h2>Best-effort press compilation</h2>
        {press}
      </div>
    </Page>
  );
};

export default Press;
