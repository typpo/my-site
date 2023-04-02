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
              Ian Webster is a software engineer and former Googler based in San Mateo, California.
              He has helped Google, NASA, and governments around the world improve their data
              pipelines and visualizations. In 2018, Ian created QuickChart, a collection of
              open-source APIs that support data visualization efforts.
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
