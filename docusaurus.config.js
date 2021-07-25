const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
    navbar: {
      title: 'Robotics @APEX',
      logo: {
        alt: 'Robotics @APEX Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
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
              label: 'SST Website',
              href: 'https://www.sst.edu.sg/cca/robotics-apex',
            },
            
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Robotics @APEX from the School of Science and Technology, Singapore. Built with Docusaurus.`,
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
