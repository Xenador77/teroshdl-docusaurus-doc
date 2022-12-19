// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TerosHDL Docs',
  tagline: 'One IDE, Endless Possibilities',
  url: 'https://teroshdl.xenador-hermes.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo32.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'teroshdl', // Usually your GitHub org/user name.
  projectName: 'teroshdl-docusaurus-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TerosHDL-Docs',
        logo: {
          alt: 'TerosHDL logo',
          src: 'img/logo32.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'About/TerosHDL_IDE',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/teroshdl',
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
                label: 'Team',
                to: '/docs/About/Team',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/xenador77',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dependencies',
                to: '/docs/About/Dependencies',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xenador77',
              },
            ],
          },
        ],
        copyright: `GPLv3 ${new Date().getFullYear()} TerosHD-Docs, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
