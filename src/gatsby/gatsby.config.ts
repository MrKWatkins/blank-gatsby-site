// https://www.gatsbyjs.org/docs/gatsby-config/
export interface IPluginConfig
{
    resolve: string;
    options: object;
}

export type Plugins = Array<string | IPluginConfig>;

export type SiteMetadata = object;