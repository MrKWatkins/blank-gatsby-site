export type NodeId = string;

/**
 * The “node” is the center of Gatsby’s data system. All data that’s added to Gatsby is modeled using nodes.
 *
 * https://www.gatsbyjs.org/docs/node-interface/
 */
export interface INode<TFields extends object | undefined = undefined>
{
    id: NodeId;
    path: string;
    children: Array<NodeId>;
    parent: NodeId | null;
    /**
     * Reserved for plugins who wish to extend other nodes.
     */
    fields: TFields;

    internal:
    {
        contentDigest: string;

        /**
         * Optional media type (https://en.wikipedia.org/wiki/Media_type) to indicate to transformer plugins this node has data they can further process.
         */
        mediaType?: string;

        /**
         * A globally unique node type chosen by the plugin owner.
         */
        type: string;

        /**
         * The plugin which created this node.
         */
        owner: string;

        /**
         * Stores which plugins created which fields.
         */
        fieldOwners?: object;

        /**
         * Optional field exposing the raw content for this node that transformer plugins can take and further process.
         */
        content?: string;
    };
}