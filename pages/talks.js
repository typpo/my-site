import Page from '../components/Page';

import Talk from '../components/Talk';
import talkData from '../data/talks';

const talks = talkData.map((talk, idx) => {
  return <Talk data={talk} key={idx} />;
});

const Talks = () => {
  return (
    <Page>
      <div className="talk-list">
        <h2>Selected Talks</h2>
        {talks}
      </div>
    </Page>
  );
};

export default Talks;
