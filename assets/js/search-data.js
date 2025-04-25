// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "An incomplete collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-codes",
          title: "Codes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/codes/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "A list of my publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-the-website-is-online",
          title: 'The website is online!',
          description: "",
          section: "News",},{id: "news-i-recently-gave-a-remote-talk-for-the-gridfm-working-group-of-the-linux-foundation-energy-project-the-slides-can-be-found-here",
          title: 'I recently gave a remote talk for the GridFM working group of the...',
          description: "",
          section: "News",},{id: "projects-deep-learning-morpion-solitaire",
          title: 'Deep learning Morpion Solitaire',
          description: "A cool machine learning project, but currently in hibernation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MorpionSolitaire.html";
            },},{id: "projects-swisscybergrid",
          title: 'SwissCyberGrid',
          description: "Interactive tool for anomaly detection in the Swiss transmission grid",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SwissCyberGrid.html";
            },},{id: "projects-conformal-field-theory-in-momentum-space",
          title: 'Conformal field theory in momentum space',
          description: "Developing a new approach to conformal field theory using the momentum-space representation of correlation functions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/momentum-CFT.html";
            },},{id: "projects-power-transmission-grids-modeling",
          title: 'Power transmission grids modeling',
          description: "Realistic modeling for production and consumption in transmission networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/powergrid_models.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%72%63.%67%69%6C%6C%69%6F%7A@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gillioz", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/mgillioz.bsky.social", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mathstodon.xyz/@MarcGillioz", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/marc-gillioz-94bb716", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9220-4681", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zotero.org/marc.gillioz", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1057389", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RLEhgN_dmcoC", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
