import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
  pageTitle: "✏️ TGJ2O S2",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Helvetica, Arial",
        body: "Helvetica, Arial",
        code: "IBM Plex Mono",
      },
                                                                                                                                                                                                      colors: {
        lightMode: {
          light: "#f4f5f7",
          lightgray: "#dcdfe4",
          gray: "#a7adb7",
          darkgray: "#3d4350",
          dark: "#1b1f29",
          secondary: "#00a3a3",
          tertiary: "#ffb703",
          highlight: "rgba(0, 163, 163, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0f1116",
          lightgray: "#262a33",
          gray: "#545c6b",
          darkgray: "#cfd5e0",
          dark: "#e9ecf2",
          secondary: "#4fd6d6",
          tertiary: "#ffd272",
          highlight: "rgba(0, 163, 163, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
//      Plugin.CustomOgImages(),
    ],
  },
}

export default config
