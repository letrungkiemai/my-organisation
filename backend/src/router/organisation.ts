import express from "express";
import {
  addNodeToTree,
  changeParentNode,
  findChildrenNodes,
} from "../controller";
import { getEmptyTree, getNonEmptyTree } from "../model/seed";
import { Tree } from "../model/tree";
const router = express.Router();

router.get(
  "/tree",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      return res.send({ seededTree: getNonEmptyTree().printTree() });
    } catch (error) {
      return next(error);
    }
  }
);

router.get(
  "/childrennodes",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { tree, node } = req.body;
      const childrenNodes = findChildrenNodes(node, tree);
      return res.send({ childrenNodes });
    } catch (error) {
      return next(error);
    }
  }
);

router.post(
  "/addnode",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { node, tree, parentId } = req.body;
      const newTree = addNodeToTree(node, tree, parentId);
      return res.send({ newTree });
    } catch (error) {
      return next(error);
    }
  }
);

router.post(
  "/changeparent",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { node, tree, newParent } = req.body;
      const updatedTree = changeParentNode(node, tree, newParent);
      return res.send({ updatedTree });
    } catch (error) {
      return next(error);
    }
  }
);

export default router;
