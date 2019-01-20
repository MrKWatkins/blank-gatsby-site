import { INode } from "./gatsby.node-interface";

export declare const graphql: (query: TemplateStringsArray) => void;

export interface IGraphQLQueryResult<TData>
{
    data: TData;
    errors?: Error;
}

export type GraphQLQuery = <TQueryResult extends IGraphQLQueryResult<TData>, TData = unknown>(query: string) => Promise<TQueryResult>;

export interface IEdge<TNode extends INode<TFields>, TFields extends object | undefined = undefined>
{
    nodes: Array<TNode>;
}

export interface IMarkdownRemarkFields
{
    path: string;
    title: string;
}

export interface IMarkdownRemarkNode extends INode<IMarkdownRemarkFields>
{
    html: string;
}

export interface IMarkdownRemarkEdge extends INode<IMarkdownRemarkFields>
{
    node: IMarkdownRemarkNode;
}

export interface IMarkdownRemarkQueryResult extends IGraphQLQueryResult<{ markdownRemark: IMarkdownRemarkNode }>
{
}

export interface IAllMarkdownRemark
{
    edges: Array<IMarkdownRemarkEdge>;
}

export interface IAllMarkdownRemarkQueryResult extends IGraphQLQueryResult<{ allMarkdownRemark: IAllMarkdownRemark }>
{
}