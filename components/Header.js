import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div id="header">
      <div className="header-image">
        <Image
          src="http://www.ianww.com/blog/content/images/2015/07/potato_medium-1-1.jpg"
          alt="The Space Potato"
          width="29"
          height="22"
          unoptimized
          loader={({ src }) => src}
        />
      </div>
      <h1>Ian Webster</h1>
      <p className="links">
        <a href="mailto:site@ianww.com">Email</a> &middot;{" "}
        <a href="https://github.com/typpo">Github</a> &middot;{" "}
        <a href="http://linkedin.com/in/ianww">LinkedIn</a> &middot;{" "}
        <a href="https://twitter.com/iwebst">Twitter</a> &middot;{" "}
        <a href="https://www.facebook.com/ianww">Facebook</a> &middot;{" "}
        <Link href="/blog">
          <a>Posts</a>
        </Link>
      </p>
    </div>
  );
};

export default Header;
