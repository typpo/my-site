import Talk from './Talk';
import talkData from '../data/talks.js';

const Talks = () => {
  var talks = talkData.map((talk, idx) => {
    return (
      <Talk data={talk} key={idx} />
    );
  });
  return (
    <div className="talk-list">
      <h2>Selected Talks</h2>
      {talks}
    </div>
  );
};

export default Talks;