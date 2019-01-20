import * as Path from "path";
import fileSystem from "gatsby-source-filesystem";
import { OnCreateNode, CreatePages, IAllMarkdownRemarkQueryResult } from "gatsby";

export const onCreateNode: OnCreateNode = ({ actions, getNode, node }) =>
{
    if (node.internal.type === "MarkdownRemark")
    {
        const filePath = fileSystem.createFilePath({ node, getNode, basePath: "pages", trailingSlash: false});

        const title = filePath.substring(filePath.lastIndexOf("/") + 1);
        actions.createNodeField({ node, name: "title", value: title });

        const path = filePath.toLowerCase().replace(" ", "-");
        actions.createNodeField({ node, name: "path", value: path });
    }
};

export const createPages: CreatePages = ({ actions, graphql }) =>
{
    const blogPostTemplate = Path.resolve("src/templates/page.tsx");

    return graphql<IAllMarkdownRemarkQueryResult>(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [fields___title] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
                path,
                title
            }
          }
        }
      }
    }
  `).then(result =>
  {
        if (result.errors)
        {
            throw result.errors;
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) =>
        {
            actions.createPage(
            {
                path: node.fields.path,
                component: blogPostTemplate
            });
        });
    });
};
