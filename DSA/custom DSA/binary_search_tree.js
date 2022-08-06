class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);  // insert value in root  child nodes "recursion"
    }
  }

  insertNode(root, newNode) {  // call this function to check child nodes conditions compare to root node
    if (newNode.value < root.value) {
      if (root.left === null) {  // check left side node is null or not
        root.left = newNode; // if null then fill the value
      } else {
        this.insertNode(root.left, newNode); // if not and less then root value then fill into left node
      }
    } else {  // the value is grater than root value then insert into right node
      if (root.right === null) {  // check the node is empty or not
        root.right = newNode;
      } else { // insert the value into right node
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root,value){
    if(!root){
      return false;
    }else{
      if(root.value===value){
        return true;
      }else if(value<root.value){
        return this.search(root.left,value)
      }else{
        return this.search(root.right,value)
      }
    }
  }
}
const bst = new BST()
console.log("tree is empty", bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(25)
bst.insert(1)
console.log(bst);
