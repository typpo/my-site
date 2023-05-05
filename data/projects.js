const projects = [
  {
    title: 'SpaceKit',
    desc: 'Easy visualization for 3D space visualizations',
    imgurl: 'https://i.imgur.com/tKUogDEl.png',
    url: 'https://typpo.github.io/spacekit/',
    press: [
      {
        source: 'Maker Faire',
        url: 'https://makerfaire.com/maker/entry/69991',
      },
    ],
  },
  {
    title: 'Asterank',
    desc: 'Crawl, visualize, and compute on all known asteroids',
    imgurl: 'https://i.imgur.com/5FI40mLl.jpg',
    url: 'https://www.asterank.com',
    press: [
      {
        source: 'BBC World News',
        url: 'https://www.bbc.co.uk/programmes/p015fmlj',
      },
      {
        source: 'Popular Science',
        url: 'https://www.popsci.com/',
      },
      {
        source: 'Forbes',
        url: 'https://www.forbes.com/sites/abigailtracy/2015/07/20/these-are-the-priciest-asteroids-in-the-galaxy/',
      },
      {
        source: 'Forbes',
        url: 'https://www.forbes.com/sites/ericmack/2018/11/05/spacecraft-are-about-to-sample-two-asteroids-worth-over-83-billion-combined/#32f14527f2e6',
      },
      {
        source: 'Science Illustrated',
        url: 'https://scienceillustrated.com.au/blog/',
      },
      {
        source: 'New York Times',
        url: 'https://www.nytimes.com/2016/05/24/science/asteroids-nathan-myhrvold-nasa.html',
      },
      {
        source: 'Vice',
        url: 'https://news.vice.com/article/tiny-luxembourg-looks-to-make-a-big-splash-in-asteroid-mining',
      },
      {
        source: 'New York Times Space Calendar',
        url: 'https://www.nytimes.com/interactive/2017/science/astronomy-space-calendar.html',
      },
      {
        source: 'National Geographic (August 2017)',
      },
      {
        source: 'Bloomberg',
        url: 'https://www.bloomberg.com/graphics/2018-asteroid-mining/',
      },
      {
        source: 'Seeking Alpha',
        url: 'https://seekingalpha.com/article/1579972-i-am-sticking-with-gold-a-critique-of-the-golden-dilemma',
      },
      {
        source: 'Seeking Alpha 2',
        url: 'https://seekingalpha.com/article/4034859-miners-may-go-galactic-asteroid-mining',
      },
      {
        source: 'Huffington Post',
        url: 'https://www.huffingtonpost.com/2014/09/10/asteroid-strike-simulator-earth_n_5792752.html',
      },
      {
        source: 'Daily Mail',
        url: 'https://www.dailymail.co.uk/sciencetech/article-2711743/Mining-SPACE-Artist-imagines-solar-look-like-tunnelled-asteroids-energy-minerals.html',
      },
      {
        source: 'Daily Mail again',
        url: 'https://www.dailymail.co.uk/sciencetech/article-2387955/Nasa-launch-mission-investigate-possible-asteroids-precious-metals--add-TRILLIONS-economy.html',
      },
      {
        source: 'and again',
        url: 'https://www.dailymail.co.uk/sciencetech/article-3073589/Watch-50-years-asteroid-near-misses-Earth-Interactive-map-reveals-THOUSANDS-rocks-skim-planet.html',
      },
      {
        source: 'and again',
        url: 'https://www.dailymail.co.uk/sciencetech/article-3165222/Asteroid-worth-3-TRILLION-precious-metals-set-pass-Earth-Sunday-watch-live.html',
      },
      {
        source: 'and again',
        url: 'https://www.dailymail.co.uk/sciencetech/article-3073589/Watch-50-years-asteroid-near-misses-Earth-Interactive-map-reveals-THOUSANDS-rocks-skim-planet.html',
      },
      {
        source: 'Quartz',
        url: 'https://qz.com/184502/the-ultra-rich-are-starting-to-like-the-risks-involved-in-asteroid-mining/',
      },
      {
        source: 'Times of India',
        url: 'https://timesofindia.indiatimes.com/home/science/why-nasa-is-going-two-million-kilometres-to-mine-an-asteroid/articleshow/63281139.cms',
      },
      {
        source: 'Space.com',
        url: 'https://www.space.com/20959-nasa-space-apps-virtual-winners.html',
      },
      {
        source: 'Wired',
        url: 'https://www.wired.co.uk/article/infoporn-mining-for-asteroids',
      },
      {
        source: 'TechHive',
        url: 'https://www.techhive.com/article/2032522/a-quick-and-dirty-guide-to-backyard-astronomy.html',
      },
      {
        source: 'Christian Science Monitor',
        url: 'https://www.csmonitor.com/Technology/2015/0609/New-bill-in-Congress-could-help-launch-a-gold-rush-in-space',
      },
      {
        source: 'Smithsonian Magazine',
        url: 'https://www.smithsonianmag.com/',
      },
      {
        source: 'Esquire',
        url: 'https://www.esquire.com/news-politics/a53650/asteroid-gold-rush/',
      },
      {
        source: 'Google Chrome Experiment',
        url: 'https://www.chromeexperiments.com/detail/asterank/',
      },
      {
        source: 'HTML5 Weekly',
        url: 'https://html5weekly.com/archive/50.html',
      },
      {
        source: 'Javascript Weekly',
        url: 'https://javascriptweekly.com/archive/104.html',
      },
      {
        source: 'digital.gov',
        url: 'https://www.digitalgov.gov/2015/05/27/the-api-briefing-nasa-builds-api-nasa-gov-to-launch-more-apis-to-developers/',
      },
      {
        source: 'TechCrunch',
        url: 'https://techcrunch.com/2015/07/09/the-potential-100-trillion-market-for-space-mining/',
      },
      {
        source: 'TechCrunch again',
        url: 'https://techcrunch.com/2016/02/03/the-race-to-mine-asteroids-gains-international-support/',
      },
      {
        source: 'Universe Today',
        url: 'https://www.universetoday.com/95169/the-most-profitable-asteroid-is/',
      },
      'NewSpace Global Thruster, Nov 2013',
      'Daily Express',
      {
        source: 'Express',
        url: 'https://www.express.co.uk/news/nature/576498/EARTH-DESTROYED-football-pitch-sized-asteroids-predicted-HIT-every-5-000-years',
      },
      'ProgrammableWeb',
      'Vancouver Sun',
      'Spiegel Online',
      'Sky News',
      'der Standard',
      'Ma.hu',
      'tons of Russian and Chinese sites',
      "French news like l'Humanite, Le Parisian, Lidd.fr",
      'Russian Lifehacker',
      'Weird investment white papers',
      'Flowing Data',
      'RawScience.tv',
      'Vocativ',
      'El Universal',
      'Blic.rs',
      'Yucatan.com.mx',
      'Greek news',
      'Muy Interestnante',
      'PJ Media',
      'Serbian news',
      'Infosthetics',
      'a WSJ infographic',
      {
        source: 'Physics Central',
        url: 'https://physicsbuzz.physicscentral.com/2018/06/a-japanese-spacecraft-is-closing-in-on.html',
      },
      {
        source: 'Mother Nature Network',
        url: 'https://www.mnn.com/earth-matters/space/stories/what-asteroid-worth',
      },
      {
        source: 'published in Knowledge is Beautiful',
        url: 'https://smile.amazon.com/Knowledge-Beautiful-Impossible-Invisible-Connections-Visualized/dp/0062188224/ref=pd_sim_14_1?ie=UTF8&refRID=1V9HZY62819JRVXGH08S&dpID=514aKg2KzKL&dpSrc=sims&preST=_AC_UL160_SR122%2C160_',
      },
      'etc',
    ],
    hackathon: {
      name: 'NASA Apps Challenge',
      url: 'https://2013.spaceappschallenge.org/',
      year: 2013,
      desc: 'worldwide finalist + prizes',
    },
  },
  {
    title: 'Meteor Showers',
    desc: 'Accurate models of major meteor showers',
    imgurl: 'https://i.imgur.com/n5U34ahl.png',
    url: 'https://www.ianww.com/meteor-showers/#Perseid',
    press: [
      {
        source: 'New York Times',
        url: 'https://www.nytimes.com/2017/03/24/science/visualizing-the-cosmic-streams-that-spew-meteor-showers.html',
      },
      {
        source: 'NASA CAMS',
        url: 'https://cams.seti.org/',
      },
      {
        source: 'American Meteor Society',
        url: 'https://www.amsmeteors.org/meteor-showers/meteor-shower-calendar/',
      },
      {
        source: 'American Meteor Society 2',
        url: 'https://amsmeteors.org/2017/08/viewing-the-perseids-in-2017/',
      },
      {
        source: 'International Meteor Organization',
        url: 'https://www.imo.net/resources/calendar/',
      },
      {
        source: 'International Meteor Organization 2',
        url: 'https://www.imo.net/observing-the-perseids-in-2017/',
      },
      {
        source: 'The SETI Institute',
        url: 'https://www.seti.org/seti-institute/Meteoroid-Streams-Solar-System',
      },
      {
        source: 'The SETI Institute again',
        url: 'https://www.seti.org/warped-meteor-shower-hits-earth-at-all-angles',
      },
      {
        source: 'SETI 3',
        url: 'https://www.seti.org/seti-institute/news/meteors-radiating-constellation-little-dipper-dec-22-2016',
      },
      {
        source: 'SETI 4',
        url: 'https://www.seti.org/perseid-meteor-shower-space',
      },
      {
        source: 'NASA APOD (as a reference)',
        url: 'https://apod.nasa.gov/apod/ap170801.html',
      },
      {
        source: 'Science Node',
        url: 'https://sciencenode.org/feature/from-3d-rendering-to-beyond.php',
      },
      {
        source: 'Space.com',
        url: 'https://www.space.com/35983-meteor-shower-debris-streams-animation.html',
      },
      {
        source: 'Sky and Telescope',
        url: 'https://www.skyandtelescope.com/observing/lyrid-meteor-shower-peaks-this-weekend/',
      },
      {
        source: 'The Weather Network',
        url: 'https://www.theweathernetwork.com/news/articles/how-to-see-the-earth-day-meteor-shower-2017/81500',
      },
      {
        source: 'Haaretz',
        url: 'https://www.haaretz.co.il/news/science/.premium-1.3952849',
      },
      {
        source: 'Microsiervos',
        url: 'https://www.microsiervos.com/archivo/espacio/como-desde-espacio-principales-lluvias-meteoros.html',
      },
      {
        source: 'Microsiervos 2',
        url: 'https://www.microsiervos.com/archivo/ciencia/lluvias-estrellas-en-tu-navegador.html',
      },
      {
        source: 'Daily Mail',
        url: 'https://www.dailymail.co.uk/sciencetech/article-4365362/Stunning-interactive-graphic-shows-meteor-shower.html',
      },
      {
        source: 'geekweek.pl',
        url: 'https://www.geekweek.pl/aktualnosci/29719/niesamowita-wizualizacja-strumieni-meteorow',
      },
      {
        source: 'EXOSS Citizen Science',
        url: 'https://press.exoss.org/',
      },
      {
        source: 'Meteor News',
        url: 'https://meteornews.org/new-tool-to-visualize-meteor-streams/',
      },
      {
        source: 'Google Chrome Experiments',
        url: 'https://www.chromeexperiments.com/experiment/meteor-showers',
      },
      {
        source: 'Flowing Data',
        url: 'https://flowingdata.com/2017/03/27/all-major-meteor-showers-as-seen-from-space/',
      },
      {
        source: 'Warped Meteor Shower discovery announcement (SETI)',
        url: 'https://www.seti.org/warped-meteor-shower-hits-earth-at-all-angles',
      },
      {
        source: 'Phys.org',
        url: 'https://phys.org/news/2017-03-warped-meteor-showers-earth-angles.html',
      },
      {
        source: 'IFL Science',
        url: 'https://www.iflscience.com/physics/meteor-showers-are-warped-by-gravity-of-planets/',
      },
      {
        source: 'Inverse.com',
        url: 'https://www.inverse.com/article/28792-meteor-shower-animations-seti-institute',
      },
      {
        source: '94.5 The Buzz (Houston)',
        url: 'https://thebuzz.iheart.com/onair/the-rod-ryan-show-alex-online-49532/alex-online-an-interactive-visualization-of-15648043/',
      },
      {
        source: 'CNET',
        url: 'https://www.cnet.com/news/perseid-delta-aquariid-alpha-capricornid-meteor-shower-peak/',
      },
      {
        source: 'CBC News',
        url: 'https://www.cbc.ca/news/technology/perseid-meteors-photos-1.4246366',
      },
      {
        source: 'TrustMyScience.com',
        url: 'https://trustmyscience.com/etoiles-filantes-le-spectacle-des-perseides-a-commence/',
      },
      {
        source: 'Stelvision.com',
        url: 'https://stelvision.com/perseides/',
      },
      {
        source: 'Tycho Brahe Planetarium',
        url: 'https://www.planetariet.dk/astronomi-rumfart/nyheder/gode-chancer-for-stjerneskud',
      },
      {
        source: 'Tycho Brahe Planetarium 2',
        url: 'https://www.planetariet.dk/astronomi-rumfart/nyheder/perseiderne-op-mod-100-stjerneskud-i-timen',
      },
      {
        source: 'Videnskab.dk',
        url: 'https://videnskab.dk/naturvidenskab/kig-op-nu-er-der-gode-chancer-for-stjerneskud',
      },
      {
        source: 'Positivr',
        url: 'https://positivr.fr/etoiles-filantes-meteorites-perseides-2017/',
      },
      {
        source: 'Express.co.uk',
        url: 'https://express.co.uk/news/science/839096/Perseid-meteor-shower-2017-what-time-where-to-watch',
      },
      {
        source: 'Sky and Telescope',
        url: 'https://www.skyandtelescope.com/observing/bright-moon-compromises-weekend-perseid-meteor-shower/',
      },
      {
        source: 'Stelvision',
        url: 'https://stelvision.com/perseides/',
      },
      {
        source: 'EarthSky.org',
        url: 'https://earthsky.org/todays-image/visualization-perseid-meteor-stream-ian-webster',
      },
      {
        source: 'EarthSky.org 2',
        url: 'https://earthsky.org/astronomy-essentials/how-to-minimize-moon-and-optimize-meteor-shower',
      },
      {
        source: 'ABC News 10 San Diego',
        url: 'https://www.10news.com/lifestyle/perseids-meteor-shower-the-light-up-san-diegos-skies',
      },
      {
        source: 'Le Tribunal du Net',
        url: 'https://www.letribunaldunet.fr/actualites/perseides-etoiles-filantes.html',
      },
      {
        source: "L'Independant",
        url: 'https://www.lindependant.fr/2017/08/12/ce-qu-il-faut-savoir-des-perseides-cette-pluie-d-etoiles-filantes-attendue-cette-nuit,3041457.php',
      },
      {
        source: 'Science Post',
        url: 'https://sciencepost.fr/2017/08/perseides-12-aout-ne-manquez-cette-fameuse-pluie-de-meteores/',
      },
      {
        source: 'Visualising Data',
        url: 'https://www.visualisingdata.com/2017/05/best-visualisation-web-march-2017/',
      },
      {
        source: 'Business Insider',
        url: 'https://www.businessinsider.com/perseid-meteor-shower-where-when-visible-2017-8',
      },
    ],
  },
  {
    title: 'Ancient Earth',
    desc: 'What did Earth look like 600 million years ago?',
    imgurl: 'https://i.imgur.com/Ya57O3tl.png',
    url: 'https://dinosaurpictures.org/ancient-earth/',
    press: [
      {
        source: 'Washington Post',
        url: 'https://www.washingtonpost.com/national/health-science/ancient-earth-globe-lets-you-travel-back-in-time-for-a-look-at-the-planet/2018/03/23/b35c0ba0-2c6a-11e8-8ad6-fbc50284fce8_story.html?utm_term=.9dc230593d2c',
      },
      {
        source: 'Daily Mail',
        url: 'https://www.dailymail.co.uk/sciencetech/article-5692167/Interactive-map-lets-travel-time-planet-600-million-years-history.html',
      },
      {
        source: 'IFLScience',
        url: 'https://www.iflscience.com/environment/interactive-globe-lets-you-see-what-the-earth-looked-like-600-million-years-ago/',
      },
      {
        source: 'BT',
        url: 'https://home.bt.com/news/science-news/interactive-map-shows-what-earth-looked-like-600-million-years-ago-11364269336759',
      },
      {
        source: 'Smithsonian Magazine',
        url: 'https://www.smithsonianmag.com/smart-news/map-lets-you-plug-your-address-see-how-neighborhood-has-changed-over-past-750-million-years-180971507/',
      },
      'RT',
      'Informador',
      'FrentFastasma',
      'Korben, a famous French blogger',
      'Pulzo',
      'WebDesignerTrends',
      'Many Spanish and French language media',
      'Chrome Experiments',
      'Learning Three.js',
      'TYS Magazine',
      {
        source: 'Science Node',
        url: 'https://sciencenode.org/feature/from-3d-rendering-to-beyond.php',
      },
    ],
  },
  {
    title: 'Dinosaur Pictures',
    desc: 'The official dinosaur picture database',
    imgurl: 'https://i.imgur.com/p5cHTml.png',
    url: 'https://dinosaurpictures.org/',
  },
  {
    title: 'promptfoo',
    desc: 'CLI and library for iterating on LLM prompts',
    imgurl:
      'https://user-images.githubusercontent.com/310310/235329207-e8c22459-5f51-4fee-9714-1b602ac3d7ca.png',
    url: 'https://github.com/typpo/promptfoo',
  },
  {
    title: 'QueryMuse',
    desc: 'AI assistant for writing SQL',
    imgurl: 'https://www.querymuse.com/homepage.png',
    url: 'https://www.querymuse.com/',
  },
  {
    title: 'Chart Builder',
    desc: 'WYSIWYG chart builder',
    imgurl:
      'https://quickchart.io/documentation/assets/images/labels_and_data-f1f511d1de7faf00f7bec1fa0fb85c11.jpeg',
    url: 'https://quickchart.io/chart-maker/',
  },
  {
    title: 'CA Property Tax Map',
    desc: 'Open-source property taxes for 34 million California residents',
    imgurl: 'https://pbs.twimg.com/media/EkOysmZVgAEyVFg?format=jpg&name=large',
    url: 'https://www.officialdata.org/ca-property-tax',
  },
  {
    title: 'Airtable GPT Assistant',
    desc: 'Use GPT inside your Airtable base',
    imgurl: 'https://dl.airtable.com/.blockGalleryImages/5f75154a8e2b26c7f01884a2150a5f7f/6746913c',
    url: 'https://www.airtable.com/marketplace/blk3S1PVIEZey4c5Y/gpt-assistant-oxygen-extensions',
  },
  {
    title: 'Astrokit',
    desc: 'Web-based tools for asteroid lightcurve photometry',
    imgurl: 'https://i.imgur.com/5JyIKgFl.png',
    url: 'https://github.com/typpo/astrokit',
  },
  {
    title: 'VoiceWorks',
    desc: 'Implement best practices for handling misconduct',
    imgurl: 'https://image.thum.io/get/maxAge/12/width/700/https://voiceworks.app/',
    url: 'https://voiceworks.app/',
  },
  {
    title: 'AdDetector',
    desc: 'Flags articles with corporate sponsors',
    imgurl: 'https://i.imgur.com/5XwQaQxl.png',
    url: 'https://www.ianww.com/ad-detector',
    press: [
      {
        source: 'Wall Street Journal',
        url: 'https://blogs.wsj.com/cmo/2014/08/20/ad-detector-native-ads/',
      },
      {
        source: 'Engadget',
        url: 'https://www.engadget.com/2014/08/21/browser-plug-in-sponsored-content/',
      },
      {
        source: 'The Verge',
        url: 'https://www.theverge.com/2014/8/21/6052875/addetector-chrome-firefox-extension-labels-native-ads',
      },
      {
        source: 'Lifehacker',
        url: 'https://lifehacker.com/addetector-notifies-you-if-a-story-you-re-reading-is-sp-1640980949',
      },
      {
        source: 'PC World',
        url: 'https://www.pcworld.com/article/2597421/new-browser-extension-warns-you-when-articles-are-paid-for-by-advertisers.html',
      },
      {
        source: 'German Public Radio',
      },
      {
        source: 'The Consumerist',
      },
      'Computer World',
      'Huffington Post',
      'InformationWeek',
      'BestTechie',
      'Adland',
      'TechReport',
      'Contently',
      'Lots of ad and marketing industry papers, newsletters, and blogs',
      'Vesti (and other Russian media)',
      'NextInpact (and other French media)',
      {
        source: 'Arrêt sur images',
        url: 'https://www.arretsurimages.net/articles/2016-03-20/Ad-Detector-l-extension-qui-revele-les-pubs-cachees-dans-les-articles-id8569',
      },
      'Many German and Polish language publications',
    ],
  },
  {
    title: 'Space Balloons',
    desc: 'Sending cameras and other things to near-space',
    imgurl: 'https://i.imgur.com/9ngl1H5l.jpg',
    url: 'https://www.ianww.com/blog/2015/07/17/sending-a-potato-to-near-space/',
  },
  {
    title: 'QuickChart',
    desc: 'Generate chart images from a URL',
    imgurl: 'https://i.imgur.com/CTIYhwz.png',
    url: 'https://quickchart.io/',
  },
  {
    title: 'Harvest',
    desc: 'Aerial infrared crop monitoring. Disrupt hackathon winner ($5k in prizes)',
    imgurl: 'https://i.imgur.com/SJVfCEg.jpg',
    // url: 'https://harvesters.club',
    url: 'https://devpost.com/software/harvest',
    press: [
      {
        source: 'TechCrunch',
        url: 'https://techcrunch.com/2015/09/20/disrupt-sf-2015-hackathon-winners/?ncid=rss&utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+Techcrunch+%28TechCrunch%29',
      },
      {
        source: 'CircleCI',
        url: 'https://circleci.com/blog/introducing-our-techcrunch-disrupt-hackathon-winners/',
      },
    ],
    hackathon: {
      name: 'Disrupt SF',
      url: 'https://techcrunch.com/events/disrupt-sf-2015/event-home/',
      year: 2015,
      desc: '$5000',
    },
  },
  {
    title: 'Asteroid Viewer',
    desc: 'Accurate 3D models of asteroids from radar and inverted light curves',
    imgurl: 'https://i.imgur.com/yQaQHiUl.png',
    url: 'https://www.ianww.com/asteroid-viewer',
    press: [
      'Learning Three.js',
      {
        source: 'Google Chrome Experiments',
        url: 'https://experiments.withgoogle.com/chrome/asteroid-viewer',
      },
    ],
  },
  {
    title: 'Avatar Remix',
    desc: 'A Discord bot that edits profile pictures in unusual ways',
    imgurl: 'https://www.ianww.com/avatar-remix/catluvr2.png',
    url: 'https://www.ianww.com/avatar-remix/',
  },
  {
    title: 'RapChat',
    desc: 'The future of communication',
    imgurl: 'https://i.imgur.com/MdbV70Tl.png',
    url: 'https://www.rapchat.us',
  },
  {
    title: 'The Space Potato',
    desc: 'Successful kickstarter for a potato-powered mission to near-space',
    imgurl: 'https://i.imgur.com/aOy79oEl.jpg',
    url: 'https://spacepotato.org',
    press: ['Electronic Products Magazine', 'Gentleman Genius'],
  },
  {
    title: 'Galaxies',
    desc: '2 billion cubic light-years, based on one of the largest n-body simulations ever',
    imgurl: 'https://i.imgur.com/mzwBJ8Sl.jpg',
    url: 'https://www.asterank.com/galaxies',
  },
  {
    title: 'Watchtower',
    desc: 'Competitive monitoring platform, LAUNCH hackathon winner',
    imgurl: 'https://www.ianww.com/images/watchtower.png',
    hackathon: {
      name: 'LAUNCH',
      url: 'https://www.launchfestival.com/',
      year: 2013,
      desc: 'finalist + prizes',
    },
  },
  {
    title: 'Interview Club',
    desc: 'Taking the pain out of hiring. LAUNCH hackathon winner ($13k in prizes)',
    imgurl: 'https://i.imgur.com/MjKtbLEl.png',
    // url: 'https://www.gointerview.club',
    hackathon: {
      name: 'LAUNCH',
      url: 'https://www.launchfestival.com/',
      year: 2015,
      desc: '$13,500',
    },
  },
  {
    title: 'Asterank Discover',
    desc: 'Crowdsourced asteroid discovery. Over a quarter million images reviewed',
    imgurl: 'https://www.ianww.com/images/asterank_discover.png',
    url: 'https://www.asterank.com/discover',
  },
  {
    title: 'Space Reference',
    desc: 'Data and simulations for nearly a million celestial objects',
    imgurl: 'https://i.imgur.com/BnpJux2l.png',
    url: 'https://www.spacereference.org/',
  },
  {
    title: 'Textbelt Open Source',
    desc: 'Free outgoing SMS API. Over 3M texts sent',
    imgurl: 'https://i.imgur.com/e1TyUkSl.png',
    url: 'https://github.com/typpo/textbelt',
    press: [
      {
        source: 'Linux Journal, Aug 2016',
        url: 'https://www.linuxjournal.com/content/august-2016-issue-linux-journal',
      },
      {
        source: 'Linux Journal, Nov 2016',
        url: 'https://www.linuxjournal.com/content/message-you-sir',
      },
      {
        source: 'CNET',
        url: 'https://www.cnet.com/news/how-to-send-a-text-message-via-command-line-in-os-x/',
      },
      {
        source: 'OSX Daily',
        url: 'https://osxdaily.com/2014/03/12/send-sms-text-message-from-command-line/',
      },
      {
        source: 'DZone',
        url: 'https://dzone.com/articles/building-test-texting-system',
      },
      'Lots of blogs',
    ],
  },
  {
    title: 'Verified Facts',
    desc: 'A viral conspiracy theory generator',
    imgurl: 'https://www.ianww.com/images/verifiedfacts.png',
    url: 'https://www.verifiedfacts.org',
    press: ['MetaFilter', 'Boingboing'],
  },
  {
    title: 'HonestMemo',
    desc: 'Internal company discussion forum and feedback tool',
    imgurl: 'https://i.imgur.com/Jud7U7zl.png?1',
  },
  {
    title: 'Luna',
    desc: '3D interactive moon',
    imgurl: 'https://i.imgur.com/xtmqQQAl.png',
    url: 'https://www.ianww.com/moonviz',
  },
  {
    title: 'Candid Candidates',
    desc: 'Where do politicians get their money? Seattle hackathon winner',
    imgurl: 'https://i.imgur.com/C2QG9ZOl.png',
    url: 'https://github.com/typpo/political-annotations',
    hackathon: {
      name: 'Seattle Open Govt',
      url: 'https://www.meetup.com/Seattle-Hackathons/events/152533962/',
      year: 2013,
      desc: '$2,500',
    },
  },
  {
    title: 'Six Degrees of Bowie',
    desc: 'A graph of musical influencers',
    imgurl: 'https://www.ianww.com/images/bowie.png',
  },
  {
    title: 'Pluto',
    desc: 'Pluto in 3D',
    imgurl: 'https://i.imgur.com/M9lM5gQl.png',
    url: 'https://www.ianww.com/pluto',
  },
  {
    title: 'KeepDream',
    desc: 'Dream recording and text analysis',
    imgurl: 'https://www.ianww.com/images/keepdream.png',
    url: 'https://www.keepdream.me',
  },
  {
    title: 'World of Loot',
    desc: 'Pinterest-style MMO wishlists',
    imgurl: 'https://www.ianww.com/images/worldofloot.png',
    url: 'https://www.worldofloot.com',
  },
  {
    title: 'Chatalyst',
    desc: 'Taking the pain out of video chat',
    imgurl: 'https://i.imgur.com/yyayOHTl.jpg',
    url: 'https://chatalyst.io',
  },
  {
    title: 'Exoplanets',
    desc: 'Exoplanets in 3D',
    imgurl: 'https://i.imgur.com/wVFVmKdl.jpg',
    url: 'https://www.asterank.com/exoplanets',
    press: [
      {
        source: 'HTML5 Weekly',
        url: 'https://html5weekly.com/issues/230',
      },
    ],
  },
  {
    title: 'Call Congress',
    desc: 'Single phone line that calls your representatives',
    imgurl: 'https://i.imgur.com/csCI0ogl.jpg',
    url: 'https://www.ianww.com/blog/2016/06/15/call-your-congressperson-with-one-phone-number-1-844-usa-4522/',
    press: [
      {
        source: 'Deray',
        url: 'https://twitter.com/deray/status/744889843985973248',
      },
      {
        source: 'Reddit Front page',
      },
      {
        source: 'Twilio Blog',
        url: 'https://www.twilio.com/blog/2016/06/call-congress-using-one-phone-number.html',
      },
      {
        source: 'Twilio Blog 2',
        url: 'https://www.twilio.com/blog/2017/05/calls-congress-node-js-twilio.html',
      },
    ],
  },
  {
    title: 'Inflation Calculator',
    desc: 'Historical inflation data and predictions',
    imgurl: 'https://www.ianww.com/images/in2013dollars.png',
    url: 'https://www.officialdata.org',
  },
  {
    title: 'Gilded Age',
    desc: 'Visualizations and NLP for Gilded-age newspapers',
    imgurl: 'https://i.imgur.com/qZ1wxmJl.png',
    url: 'https://github.com/typpo/gilded-age',
  },
  {
    title: 'TalkThen',
    desc: 'Convenient conference and telephony app',
    imgurl: 'https://i.imgur.com/aKCnbFRl.png',
  },
  {
    title: 'CodeNav',
    desc: 'Easily navigate code on Github. Keyword highlight, code search, etc',
    imgurl: 'https://i.imgur.com/QJwU3Hzl.png',
    url: 'https://www.ianww.com/codenav',
  },
  {
    title: 'ListeningPost',
    desc: 'Contextual annotations for spoken conversation, YC Hacks winner',
    imgurl: 'https://i.imgur.com/nwXZtDel.png',
    hackathon: {
      name: 'YC Hacks',
      url: 'https://blog.ycombinator.com/yc-hacks-august-2-3-2014',
      year: 2014,
      desc: 'finalist + prizes',
    },
  },
  {
    title: "Typpo's Software",
    desc: 'MMORPG automation used millions of times by 30k people (2006-2011)',
    imgurl: 'https://www.ianww.com/dct/screenshot.jpg',
    url: 'https://github.com/typpo/outwar-dca',
  },
  {
    title: 'Ceres',
    desc: 'Ceres in 3D',
    imgurl: 'https://i.imgur.com/Q3jcJiFl.png',
    url: 'https://www.ianww.com/ceres',
    press: [
      {
        source: 'Slate',
        url: 'https://www.slate.com/blogs/bad_astronomy/2015/08/13/ceres_crater_saturation.html',
      },
    ],
  },
  {
    title: 'Mars',
    desc: 'Mars in 3D - work in progress',
    imgurl: 'https://i.imgur.com/idzj8BOm.png',
    url: 'https://www.ianww.com/mars',
  },
  {
    title: 'Whispers',
    desc: 'A chrome extension that whispers your name late at night',
    imgurl:
      'https://lh3.googleusercontent.com/1wIiEAeqxxnmMO1HcykPGQ6tmi5K59n95QKEH8f1g9PkFA7yi_LKKU0w4I_OrIo7tGJQ81gyMAw8kFH8OSP00eFi=w640-h400-e365-rj-sc0x00ffffff',
    url: 'https://chrome.google.com/webstore/detail/whispers/cnbiogmmebcodnfckkiipfjmdheklmkk',
  },
  {
    title: 'Speak Louder',
    desc: 'Tools for activists & organizers',
    imgurl: 'https://i.imgur.com/1w1DAnBl.png',
    url: 'https://www.speaklouder.org/',
  },
  {
    title: 'Arkose',
    desc: 'GPT-enhanced document editor',
    imgurl:
      'https://user-images.githubusercontent.com/310310/202637524-792ed7b9-ff0b-43fc-a4bc-5a0a699f92b6.gif',
    url: 'https://arkose.pages.dev/',
  },
  {
    title: 'Send SMS Easily',
    desc: 'An extension for sending SMS on Airtable',
    imgurl: 'https://dl.airtable.com/.blockGalleryImages/284b403e15564cb805095ba34c2a29c3/94e00efc',
    url: 'https://airtable.com/marketplace/blkVfO977F8FndeYa/send-sms-easily',
  },
  {
    title: 'Airtable QR Code Generator',
    desc: 'Make QR codes on Airtable',
    imgurl: 'https://dl.airtable.com/.blockGalleryImages/69a91e62001eb3a319ce3bb06ae5e55f/ff16377f',
    url: 'https://airtable.com/marketplace/blkZ5M0k1EDRSE8D7/qr-code-maker',
  },
  {
    title: 'Vote Banner',
    desc: 'Easy way to add a voter registration CTA to your website',
    imgurl: 'https://i.imgur.com/W4w49zHl.jpg',
    url: 'https://vote.speaklouder.org/',
  },
  {
    title: 'Wololo',
    desc: 'Conversion-boosting widgets for ecommerce. Reached 1M views/mo',
    imgurl: 'https://i.imgur.com/J3kR1Ljl.jpg',
  },
  {
    title: 'Facebook Exporter',
    desc: 'Download your Facebook images in full resolution with EXIF data',
    imgurl: 'https://i.imgur.com/5EHP6KBl.png',
    url: 'https://www.fbexporter.com/',
  },
  {
    title: 'Neutral Gas',
    desc: 'Micro carbon offsets for gas fill-ups',
    imgurl: 'https://i.imgur.com/lSAUkmIl.png',
  },
  {
    title: 'Bunkmates',
    desc: 'AirBnB for hotels!',
    imgurl: 'https://i.imgur.com/oNx5JzAl.png',
  },
  {
    title: 'Textbelt v2',
    desc: 'Simple, reliable SMS API',
    imgurl: 'https://i.imgur.com/YN7oEjXl.png',
    url: 'https://textbelt.com/',
  },
  {
    title: 'School Scout',
    desc: 'Federal public school data and rankings',
    imgurl: 'https://i.imgur.com/CC0jsjUl.png',
  },
  {
    title: 'Gifthorse',
    desc: 'A gift suggestion engine',
    imgurl: 'https://www.ianww.com/images/gifthorse.png',
  },
  {
    title: 'Gaia',
    desc: 'Visualize 2.5M stars from ESA GAIA observations',
    imgurl: 'https://i.imgur.com/ufrjxbHl.png',
    url: 'https://github.com/typpo/gaia',
  },
  {
    title: 'Alioth',
    desc: 'Space data and visualization consulting',
    imgurl: 'https://i.imgur.com/p3pS4zAm.jpg',
    url: 'https://alioth.io/',
  },
  {
    title: 'Planetary Resources',
    desc: 'Asteroid mining spacecraft and mission control software',
    imgurl: 'https://i.imgur.com/PL95Da6.jpg',
    url: 'https://en.wikipedia.org/wiki/Planetary_Resources',
  },
  {
    title: 'NASA',
    desc: "Co-Investigator on research grant from NASA's Science Mission Directorate",
    imgurl: 'https://i.imgur.com/up7z413.png',
  },
  {
    title: 'Room 77',
    desc: 'Better hotel search, acquired by Google',
    imgurl: 'https://i.imgur.com/ua9nW9ol.png',
    url: 'https://room77.com',
  },
  {
    title: 'Google',
    desc: 'Improving travel and local search ranking',
    imgurl: 'https://i.imgur.com/V2Js8Bwl.png',
    url: 'https://google.com',
  },
  {
    title: 'Zenysis',
    desc: 'Macro-level data analysis for governments',
    imgurl: 'https://i.imgur.com/z1BoyBnm.png',
    url: 'https://www.zenysis.com/',
  },
  {
    title: 'AIM was better',
    desc: 'Replaces Google hangouts pings with AIM pings',
    url: 'https://chrome.google.com/webstore/detail/aim-was-better/jlfnamkeapjfndbdiomnegmigjjkfpef',
  },
  {
    title: 'Tensorflow Calculator',
    desc: 'A normal calculator...written in Tensorflow',
    url: 'https://github.com/typpo/tensorflow-calc',
  },
  {
    title: 'nunjucks-phone-filter',
    desc: 'Phone # filter for nunjucks templating engine',
    url: 'https://github.com/typpo/nunjucks-phone-filter',
  },
  {
    title: 'mixpanel-export-cli',
    desc: 'Command line tool for mixpanel data export',
    url: 'https://github.com/typpo/mixpanel-export-cli',
  },
  /*
  {
    title: 'Pagerank Checker',
    desc: 'npm module for pagerank',
    //imgurl: 'https://i.imgur.com/in0MXj6l.png',
    url: 'https://github.com/typpo/google-pagerank',
  },
  */
  {
    title: 'autoreload.js',
    desc: 'Faster frontend development',
    //imgurl: 'https://i.imgur.com/fH3Zx6X.png',
    url: 'https://github.com/typpo/autoreload',
  },
  {
    title: 'Github participation graph',
    desc: 'Better contrast',
    //imgurl: 'https://camo.githubusercontent.com/0cdace1a3cdb252d63ee25dca1663427481a8887/687474703a2f2f692e696d6775722e636f6d2f4a5a5a616c2e706e67',
    url: 'https://github.com/typpo/github-participation-graph',
  },
  {
    title: 'Webworkers Fallback',
    desc: 'HTML5 polyfill',
    //imgurl: 'https://i.imgur.com/AMdYKBj.png',
    url: 'https://github.com/typpo/web-workers-fallback',
  },
  /*
  {
    title: 'Dartmouth Last Chances',
    desc: 'Over 400 "connections" during senior week, used by a majority of the class',
    url: 'https://dartmouthlastchances.com',
  },
  */
  {
    title: 'Facebook Defriend Notifications',
    desc: 'What it sounds like',
    url: 'https://facebook-monitor.appspot.com/',
  },
  {
    title: 'Wowzer',
    desc: 'Arbitrage in a digital goods economy',
    url: 'https://github.com/typpo/wowzer',
  },
  {
    title: 'VoiceBox',
    desc: 'Simple voice memo-to-DropBox Android app',
    url: 'https://github.com/typpo/voicebox',
  },
  {
    title: 'lok',
    desc: 'Curses-based encrypted journal/notes in C',
    url: 'https://github.com/typpo/lok',
  },
  {
    title: 'google-charts-node',
    desc: 'Utility for rendering Google Charts to image',
    url: 'https://github.com/typpo/google-charts-node',
  },
  {
    title: 'QuickChart for Zapier',
    desc: 'Zapier plugin for creating charts',
    url: 'https://zapier.com/apps/quickchart/integrations',
  },
  {
    title: 'mjml-qr-code',
    desc: 'Add QR codes in MJML',
    url: 'https://github.com/typpo/mjml-qr-code',
  },
  {
    title: 'mjml-chartjs',
    desc: 'Embed Chart.js charts in MJML',
    url: 'https://github.com/typpo/mjml-chartjs',
  },
  {
    title: 'General',
    hideInProjectsView: true,
    press: [
      {
        source: 'Talks',
        url: '/talks',
      },
      {
        source: 'ITBusiness.ca',
        url: 'https://www.itbusiness.ca/blog/ian-websters-rise-as-the-everyday-geek-hero/36417',
      },
      {
        source: 'Newspace Global',
        url: 'https://newspaceglobal.com/',
      },
      {
        source: 'WebGL Insights',
        url: 'https://smile.amazon.com/WebGL-Insights-Patrick-Cozzi/dp/1498716075?sa-no-redirect=1',
      },
    ],
  },
];

module.exports = projects;
