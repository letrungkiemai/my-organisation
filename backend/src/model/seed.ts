import { Tree } from "./tree";
import { Node } from "./node";

// This is a temporary representation of the database connection, return an empty tree
export const getEmptyTree = () => {
  return new Tree();
};

export const getNonEmptyTree = () => {
  const tree = new Tree();
  const rootNode = new Node(0, "Le Boss", {
    isMan: true,
    departmentManaged: "Company",
  });
  const nodeA = new Node(1, "Alan", {
    isMan: true,
    departmentManaged: "Operations",
  });
  const nodeB = new Node(2, "Ben", { isMan: true, departmentManaged: "HR" });
  const nodeC = new Node(3, "Celia", { isMan: true, departmentManaged: "IT" });
  const nodeD = new Node(4, "Dan", { isDev: true, language: "TypeScript" });
  const nodeE = new Node(5, "Emily", { isDev: true, language: "COBOL" });

  tree.addRoot(rootNode);
  tree.addNode(nodeA);
  tree.addNode(nodeB);
  tree.addNode(nodeC, 1);
  tree.addNode(nodeD, 3);
  tree.addNode(nodeE, 3);
  return tree;
};
