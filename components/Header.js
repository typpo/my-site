import Link from 'next/link';
import Image from 'next/image';

import PotatoImage from '../assets/potato.jpg';

const Header = () => {
  return (
    <div id="header">
      <div className="header-image">
        <Link href="/">
          <Image
            src={PotatoImage}
            alt="The Space Potato"
            width="29"
            height="22"
            loader={({ src }) => src}
          />
        </Link>
      </div>
      <h1 className="name">
        <Link href="/">Ian Webster</Link>
      </h1>
      <p className="links">
        <a target="_blank" rel="noreferrer" href="mailto:site@ianww.com">
          Email
        </a>{' '}
        &middot;{' '}
        <a target="_blank" rel="noreferrer" href="https://github.com/typpo">
          Github
        </a>{' '}
        &middot;{' '}
        <a target="_blank" rel="noreferrer" href="http://linkedin.com/in/ianww">
          LinkedIn
        </a>{' '}
        &middot;{' '}
        <a target="_blank" rel="noreferrer" href="https://twitter.com/iwebst">
          Twitter
        </a>{' '}
        &middot;{' '}
        {/*<a target="_blank" rel="noreferrer" href="https://www.facebook.com/ianww">Facebook</a> &middot;{" "}*/}
        <Link href="/blog">
          <a>Posts</a>
        </Link>
      </p>
    </div>
  );
};

export default Header;
