import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: '正点原子在线文档',
  favicon: 'img/favicon.ico',
  url: 'https://wiki.alientek.com',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig: ({
    image: 'img/social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'ALIENTEK',
      logo: {
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: '官网',
          href: 'http://www.alientek.com',
        },
        {
          position: 'left',
          label: '论坛',
          href: 'http://www.openedv.com/forum.php',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '资料下载中心',
              href: 'http://www.openedv.com/docs/index.html',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '开源电子网',
              href: 'http://www.openedv.com/forum.php/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/openedv',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '天猫',
              href: 'https://zhengdianyuanzi.tmall.com/index.htm',
            },
            {
              label: '京东',
              href: 'https://mall.jd.com/index-12003110.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ALIENTEK, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
