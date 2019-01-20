import { INode } from "./gatsby.node-interface";

// https://www.gatsbyjs.org/docs/actions/

export interface ICreateNodeFieldParameters
{
    node: INode;
    name: string;
    value: any;
}

/**
 * Extend another node. The new node field is placed under the fields key on the extended node object.
 *
 * Once a plugin has claimed a field name the field name can’t be used by other plugins. Also since nodes are immutable, you can’t mutate the node directly. So to extend another node, use this.
 *
 * https://www.gatsbyjs.org/docs/actions/#createNodeField
 */
export type CreateNodeField = (parameters: ICreateNodeFieldParameters) => void;

export interface ICreatePageParameters
{
    path: string;
    component: string;
    context?: object;
}

/**
 * Create a page.
 *
 * https://www.gatsbyjs.org/docs/actions/#createPage
 */
export type CreatePage = (parameters: ICreatePageParameters) => void;

/**
 * All action creators wrapped with a dispatch.
 *
 * https://www.gatsbyjs.org/docs/actions/#actions
 */
export interface IActions
{
    /**
     * Extend another node. The new node field is placed under the fields key on the extended node object.
     *
     * Once a plugin has claimed a field name the field name can’t be used by other plugins. Also since nodes are immutable, you can’t mutate the node directly. So to extend another node, use this.
     *
     * https://www.gatsbyjs.org/docs/actions/#createNodeField
     */
    createNodeField: CreateNodeField;

    /**
     * Create a page.
     *
     * https://www.gatsbyjs.org/docs/actions/#createPage
     */
    createPage: CreatePage;
}