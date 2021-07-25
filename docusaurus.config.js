const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const baseDocPaths = require('./baseDocPaths')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Robotics @APEX Documentation',
  tagline: 'Robotics is our passion! Efficient. Effective. Exemplary. 🔥',
  url: 'https://roboapex.github.io',
  baseUrl: '/roboapex-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'roboapex',
  projectName: 'roboapex-docs',
  trailingSlash: true,
  themeConfig: {
    announcementBar: {
      id: "announcement",
      content:
        'This website is work-in-progress',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Robotics @APEX',
      logo: {
        alt: 'Robotics @APEX Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: 'Docs',
          items: baseDocPaths.map((e) => ({ to: `/${e.path}`, label: e.name }))
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/roboapex/roboapex-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'All', to: `/docs` },
            ...baseDocPaths.map((e) => ({ label: e.name, to: `/${e.path}` }))
          ]
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            {
              label: 'Discord',
              href: 'https://discord.gg/zDB7KDrgbw',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/roboticsapex',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/roboapex',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'SST',
              href: 'https://www.sst.edu.sg/cca/robotics-apex',
            },

          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Robotics @APEX from the School of Science and Technology, Singapore.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // algolia: {
    //   apiKey: process.env['ALGOLIA_API_KEY'],
    //   indexName: 'YOUR_INDEX_NAME', // TODO:
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/roboapex/roboapex-docs/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/roboapex/roboapex-docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
