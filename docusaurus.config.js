const baseDocPaths = require('./baseDocPaths');
require('dotenv').config()

const joinURL = "https://docs.google.com/forms/d/e/1FAIpQLScpremOj-MTsoWd-zYJEvQ08l4NjS8mC_Cyps7TESTU313aAQ/viewform?usp=sf_link"

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Robotics @APEX',
  tagline: 'Founded in 2010, Robotics @APEX is the Robotics Club of the School of Science and Technology, Singapore. Robotics is our passion! 🔥',
  url: 'https://roboapex.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'roboapex',
  projectName: 'roboapex.github.io',
  themeConfig: {
    hideableSidebar: true,
    // announcementBar: {
    //   id: "announcement",
    //   content:
    //     'This website is work-in-progress',
    // },
    navbar: {
      title: 'Robotics @APEX',
      logo: {
        alt: '🤖',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: 'Join Us',
          to: joinURL,
          items: [
            { to: joinURL, label: "Sign Up" },
            { to: '/join/faq', label: "FAQ" }
          ]
        },
        { to: '/about', label: 'About', position: 'right' },
        { to: '/projects', label: 'Projects', position: 'right' },
        { to: '/achievements', label: 'Achievements', position: 'right' },
        {
          position: 'right',
          label: 'Docs',
          to: '/docs',
          items: baseDocPaths.map((e) => ({ to: `/${e.path}`, label: e.name }))
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'All', to: `/docs` },
            ...baseDocPaths.map((e) => ({ label: e.name, to: `/${e.path}` }))
          ]
        },
        {
          title: 'Robotics @APEX',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/roboticsapex',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/roboapex',
            },
            {
              label: 'Email',
              href: 'mailto:sstroboapex@gmail.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/zDB7KDrgbw',
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
      copyright: `Copyright © ${new Date().getFullYear()} Robotics @APEX from the School of Science and Technology, Singapore.<br> Made by Ryan The with Docusaurus and React :>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
  plugins: [require.resolve('docusaurus-plugin-sass')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/roboapex/roboapex.github.io/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: [require.resolve('./src/styles/custom.scss')],
        },
      },
    ],
  ],
};
