import { IActions } from "./gatsby.actions";
import { GraphQLQuery } from "./gatsby.graphql";
import { INode } from "./gatsby.node-interface";

// https://www.gatsbyjs.org/docs/node-apis/

export type GetNode = (id: string) => INode;

export interface IOnCreateNodeParameters
{
    node: INode;
    getNode: GetNode;
    actions: IActions;
}

/**
 * Called when a new node is created. Plugins wishing to extend or transform nodes created by other plugins should implement this API.
 *
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */
export type OnCreateNode = (parameters: IOnCreateNodeParameters) => void;

export interface ICreatePagesParameters
{
    actions: IActions;
    graphql: GraphQLQuery;
}

/**
 * Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation
 * of the GraphQL schema are complete so you can query your data in order to create pages.
 */
export type CreatePages = (parameters: ICreatePagesParameters) => void;