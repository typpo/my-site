import Image from 'next/image';

import AuthorImage from '../assets/ianwebster.jpg';

export default function Author() {
  return (
    <div className="blog-author">
      <hr />
      <div>
        <div className="authorFlexContainer">
          <div className="authorImgContainer">
            <Image
              src={AuthorImage}
              alt="Ian Webster"
              width={150}
              height={150}
              loader={({ src }) => src}
            />
          </div>
          <div className="authorBio">
            <h2>About the author</h2>
            <p>
              Ian is a software engineer based in the Bay Area. He has helped Google, NASA, and a
              dozen governments around the world improve their data pipelines and visualizations. He
              maintains a handful of cool websites like{' '}
              <a href="https://dinosaurpictures.org/ancient-earth">DinosaurPictures.org</a>,{' '}
              <a href="https://www.meteorshowers.org/">MeteorShowers.org</a>, and this one.
            </p>
            <p>
              <a href="mailto:ian@quickchart.io">Email</a> &middot;{' '}
              <a href="https://www.linkedin.com/in/ianww/">LinkedIn</a> &middot;{' '}
              <a href="https://twitter.com/iwebst">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
