const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Tech Interview Prep Guide by Speak_',
  tagline: 'PA free resource to help you ace your tech interviews.',
  url: 'https://.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/speakcareers/tech-interview-prep-guide/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        logo: {
          alt: 'Speak_ Logo',
          src: 'img/speak-logomark-256.jpeg',
        },
        items: [
          {
            href: '/',
            position: 'left',
            label: 'Tech Interview Prep Guide',
          },
          {
            to: '/docs/welcome/about-this-guide',
            label: 'Read the guide',
            position: 'right',
          },
          {
            to: 'https://speak.careers',
            label: 'Join a cohort',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                html: `
                  <img src="/img/speak_logo.png" alt="Powered by Speak_" class="footerLogo" />
                  <div>Tech Interview Prep Guide</div>
                  <iframe src="https://ghbtns.com/github-btn.html?user=speakcareers&amp;repo=tech-interview-prep-guide&amp;type=star&amp;count=true&amp;size=small" frameborder="0" scrolling="0" width="150" height="20" title="GitHub Stars"></iframe>
                `,
              },
            ],
          },
          {
            items: [
              {
                html: `
                  <div></div>
                `,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/wjnAEVjbCu',
              },             {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/school/speakcareers/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/speakcareers/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/speakcareers',
              },
            ],
          },
          {
            title: 'Speak_',
            items: [
              {
                label: 'Cohort-based courses',
                href: 'https://speak.careers',
              },
              {
                label: 'Podcast',
                href: 'https://www.youtube.com/@speak_',
              },
              {
                label: 'Blog',
                href: 'https://speak.careers/blog',
              },
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} Speak_. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-W0RVPWQ9PC',
        anonymizeIP: false,
      },
    ],
  ],
};

module.exports = config;