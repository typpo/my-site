import Link from 'next/link';

const Header = () => {
    return (
        <div id="header">
        <div className="header-image">
          <img src="http://www.ianww.com/blog/content/images/2015/07/potato_medium-1-1.jpg"/>
        </div>
        <h1>Ian Webster</h1>
        <p className="links">
          <a href="mailto:site@ianww.com">Email</a> &middot;
          <a href="https://github.com/typpo">Github</a> &middot;
          <a href="http://linkedin.com/in/ianww">LinkedIn</a> &middot;
          <a href="https://twitter.com/iwebst">Twitter</a> &middot;
          <a href="https://www.facebook.com/ianww">Facebook</a> &middot;
          <Link href="/blog"><a>Posts</a></Link>
        </p>
      </div>
    )
  }
  

  export default Header;