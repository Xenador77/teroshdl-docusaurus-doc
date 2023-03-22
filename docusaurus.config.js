// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],
  title: 'TerosHDL',
  tagline: 'An open source editor for FPGA/ASIC',
  url: 'https://terostechnology.github.io/',
  baseUrl: '/teroshdl-docusaurus-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_teroshdl.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TerosTechnology', // Usually your GitHub org/user name.
  projectName: 'teroshdl-docusaurus-doc', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/TerosTechnology/teroshdl-docusaurus-doc/blob/main/docs/01-introduction.md',
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
        title: '',
        logo: {
          alt: 'TerosHDL Logo',
          src: 'img/teroshdl.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'About/TerosHDL_IDE',
            position: 'left',
            label: 'TerosHDL_IDE',
          },
          {
            href: 'https://github.com/TerosTechnology/teroshdl-docusaurus-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start Here',
                to: '/docs/About/TerosHDL_IDE'
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
                label: 'GitHub',
                href: 'https://github.com/TerosTechnology/teroshdl-docusaurus-doc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TerosHDL.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'vhdl', 'verilog', 'powershell'],
      },
    }),
};

module.exports = config;

