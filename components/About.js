const About = () => {
  return (
    <>
      <div className="flex-container about-container">
        <div id="about">
          <p>
            I co-founded{' '}
            <a href="http://www.zenysis.com" target="_blank" rel="noreferrer">
              Zenysis
            </a>{' '}
            and lead its engineering team. Before that I worked at{' '}
            <a href="http://google.com" target="_blank" rel="noreferrer">
              Google
            </a>
            , mostly on travel search (via acquisition of{' '}
            <a href="http://room77.com" target="_blank" rel="noreferrer">
              Room 77
            </a>
            ).
          </p>
          <p>
            A while ago I created{' '}
            <a href="http://www.asterank.com" target="_blank" rel="noreferrer">
              Asterank
            </a>
            , which was acquired by{' '}
            <a
              href="http://www.planetaryresources.com/#home-intro"
              target="_blank"
              rel="noreferrer"
            >
              Planetary Resources
            </a>
            . Afterwards I began consulting via <a href="http://alioth.io">Alioth</a> with a focus
            on data visualization, working with{' '}
            <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">
              NASA
            </a>
            ,{' '}
            <a href="http://www.seti.org/" target="_blank" rel="noreferrer">
              SETI
            </a>
            , and various private companies.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
