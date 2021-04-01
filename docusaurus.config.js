/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '@mtproto/core',
  tagline: 'Telegram API JS (MTProto) client library for Node.js and browser',
  url: 'https://mtproto-core.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alik0211',
  projectName: 'mtproto-core-website',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: '@mtproto/core',
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/alik0211/mtproto-core',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__item_github',
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
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Basics',
              to: 'docs/call-the-telegram-methods/',
            },
            {
              label: 'Guides',
              to: 'docs/user-authorization/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram Channel',
              href: 'https://t.me/mtproto_core',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mtproto-core',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/alik0211/mtproto-core',
            },
          ],
        },
      ],
      copyright:
        'Made by <a href="https://www.gasymov.com/" target="_blank">Ali Gasymov</a>',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/alik0211/mtproto-core-website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/alik0211/mtproto-core-website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
