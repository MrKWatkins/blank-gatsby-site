import * as React from "react";
import { H1, UL } from "@blueprintjs/core";
import { graphql, IAllMarkdownRemarkQueryResult, IMarkdownRemarkEdge } from "gatsby";
import Layout from "../components/layout";

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            title
            path
          }
        }
      }
    }
  }
`;

export default class IndexPage extends React.PureComponent<IAllMarkdownRemarkQueryResult>
{
    private readonly renderLink = (edge: IMarkdownRemarkEdge) =>
    {
        return (<li><a href={edge.node.fields.path}>{edge.node.fields.title}</a></li>);
    }

    public render()
    {
        return (
            <Layout>
                <H1>Index</H1>
                <UL>
                    {this.props.data.allMarkdownRemark.edges.map(this.renderLink)}
                </UL>
            </Layout>
        );
    }
}
