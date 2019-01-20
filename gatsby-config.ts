import { Plugins, SiteMetadata } from "gatsby";

export const plugins: Plugins =
[
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    "gatsby-plugin-typescript-checker",
    {
        resolve: "gatsby-source-filesystem",
        options:
        {
            path: `${__dirname}/content`,
            name: "markdown-pages"
        }
    },
    "gatsby-transformer-remark"
];

export const siteMetadata: SiteMetadata =
{
    name: "Blank Gatsby Site",
    description: "A blank Gatsby site to use as a template when creating a new site. Comes preconfigured to be written in TypeScript and SASS with support for Markdown and BlueprintJS and testing with Jest and Enzyme."
};
