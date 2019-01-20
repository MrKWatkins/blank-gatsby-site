import * as React from "react";
import { graphql, IMarkdownRemarkQueryResult } from "gatsby";
import { H1 } from "@blueprintjs/core";
import Layout from "../components/layout";

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      fields {
          path,
          title
      }
    }
  }
`;

export default function Template(props: IMarkdownRemarkQueryResult)
{
    const markdownRemark = props.data.markdownRemark;

    return (
        <Layout>
            <H1>{markdownRemark.fields.title}</H1>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </Layout>
    );
}