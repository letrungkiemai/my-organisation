type Developer = { language: string; isDev: true };
type Manager = { departmentManaged: string; isMan: true };

export const isDeveloper = (x: any): x is Developer => {
  return (
    x?.isDev === true && typeof x.language === "string" && x.language.length > 0
  );
};

export const isManager = (x: any): x is Manager => {
  return (
    x?.isMan === true &&
    typeof x.departmentManaged === "string" &&
    x.departmentManaged.length > 0
  );
};

export class Node {
  public id: number;
  private name: string;
  private height: number;
  private manager: Manager | undefined;
  private developer: Developer | undefined;
  private isCEO: boolean;
  private parentNode: Node | undefined;
  private children: Node[];

  constructor(id: number, nodeName: string, type: Developer | Manager) {
    this.id = id;
    this.name = nodeName;
    this.children = [];
    if (isDeveloper(type)) {
      this.developer = type;
    }
    if (isManager(type)) {
      this.manager = type;
    }
  }

  getName(): string {
    return this.name;
  }

  getHeight(): number {
    return this.height;
  }

  getParent(): Node {
    return this.parentNode;
  }

  isRoot(): boolean {
    return this.isCEO;
  }

  setRootNode(): Node {
    if (this.parentNode) {
      throw Error(`Cannot set a node that has parent as root node`);
    }
    this.isCEO = true;
    this.height = 0;
    return this;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getChildrenNodes(): Node[] {
    return this.children;
  }

  addChildNode(node: Node): Node {
    // the height of the children node has to be set
    node.setHeight(this.height + 1);
    this.children.push(node);
    return this;
  }

  removeChildren(): Node {
    this.children = [];
    return this;
  }

  setParentNode(newParent: Node): Node {
    if (this.isCEO) {
      throw Error(`Cannot change parent of a root node`);
    }
    this.parentNode = newParent;
    this.setHeight(newParent.getHeight() + 1);
    return this;
  }

  printNode(): string {
    return `Node ${this.id}: ${this.name}; Height: ${this.height}; parent: ${
      this.parentNode?.getName() || "none"
    }; children: ${this.children.map((c) => c.getName()).join("|")}`;
  }
}
