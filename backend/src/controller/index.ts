import { Node } from "../model/node";
import { Tree } from "../model/tree";

export const addNodeToTree = (node: Node, tree: Tree, parentId?: number) => {
  return tree.addNode(node, parentId);
};

export const findChildrenNodes = (node: Node, tree: Tree) => {
  if (tree.isLeaf(node)) {
    return node.getChildrenNodes();
  } else {
    throw Error(`Node does not belong in tree`);
  }
};

export const changeParentNode = (
  node: Node,
  tree: Tree,
  newParentNode: Node
) => {
  return tree.changeParentNode(node, newParentNode);
};
