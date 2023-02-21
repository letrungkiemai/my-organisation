import { Node } from "./node";
export class Tree {
  private leaves: Node[];

  constructor() {
    this.leaves = [];
  }

  sortedLeaves(): Node[] {
    return this.leaves.sort(
      (a: Node, b: Node) => a.getHeight() - b.getHeight()
    );
  }

  addRoot(root: Node): Tree {
    const node = root.setRootNode();
    this.leaves.push(node);
    return this;
  }

  private addNodeToParent(node: Node, parentNode: Node) {
    parentNode.addChildNode(node);
    node.setHeight(parentNode.getHeight() + 1);
    node.setParentNode(parentNode);
    this.leaves.push(node);
  }

  addNode(node: Node, parentId?: number): Tree {
    // if no parent given, add node to root
    if (parentId === undefined) {
      const root = this.leaves.find((l) => l.isRoot());
      this.addNodeToParent(node, root);
      return this;
    }

    const parentNode = this.leaves.find((l) => l.id === parentId);
    if (!parentNode) {
      throw Error(`Cannot addnode to non-existing parent`);
    }
    this.addNodeToParent(node, parentNode);
    return this;
  }

  isLeaf(node: Node) {
    return this.leaves.find((l) => l.id == node.id);
  }

  changeParentNode(node: Node, newParentNode: Node) {
    if (this.isLeaf(node) && this.isLeaf(newParentNode)) {
      node.getParent().removeChildren();
      node.setParentNode(newParentNode);
    } else {
      throw Error(`Node don't belong in tree`);
    }
    return this;
  }

  printTree(): string {
    if (!this.leaves.length) {
      return "Empty data";
    }

    return this.sortedLeaves()
      .map((node) => node.printNode())
      .join(`\n`);
  }
}
