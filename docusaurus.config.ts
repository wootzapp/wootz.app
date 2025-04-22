import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Wootzapp",
  tagline: "Wootzapp – The Crypto Browser that Pays You",
  favicon: "/img/favicon.ico",


// Set the production url of your site here
url: "https://www.wootzapp.com",

// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'
//baseUrl: "/docusaurus-www/",
baseUrl: "/",

  organizationName: "wootzapp", // Usually your GitHub org/user name.
  projectName: "docusaurus-www", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
		  remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          // Remove or change this URL to customize the "edit this page" link.
         // editUrl: 
            //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove or change this URL to customize the "edit this page" link.
          // editUrl: 
           // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  // Add the client redirects plugin to handle short URL redirects.
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/important/privacy",
            from: ["/privacy"],
          },
        ],
		createRedirects: function (existingPath) {
			// Log for debugging
			console.log("Checking path:", existingPath);
			return undefined; // Return undefined for now to not create additional redirects
		  },
      },
    ],
  ],

  themeConfig: {
    image: "/img/c63a0772-7469-4d2b-b8e6-102f2ef8cc28.png",
    metadata: [
    // 1) Standard meta description
    {
      name: 'description',
      content: 'Wootzapp – The Crypto Browser that Pays You',
    },
    // 2) Open Graph description (used by Telegram, Facebook, LinkedIn…)
    {
      property: 'og:description',
      content: 'Wootzapp – The Crypto Browser that Pays You',
    },
    // 3) Twitter Card description
    {
      name: 'twitter:description',
      content: 'Wootzapp – The Crypto Browser that Pays You',
    },
    // (you can still leave twitter:card or override it to “summary_large_image”)
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
    navbar: {
      title: "WootzApp",
      logo: {
        alt: "WootzApp",
        src: "/img/fav.png",
      },
      items: [
        {
          position: "left",
          label: "Github",
          to: "https://github.com/wootzapp/wootz-browser",
        },
        { to: "https://x.com/wootzapp", label: "Twitter", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
