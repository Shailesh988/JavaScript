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
  preOrder(root){
    if(root){
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root){
    if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
  }
}
  postOrder(root){
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder(){  //BFS
    const queue =[]
    queue.push(this.root);
    while(queue.length){
      let curr = queue.shift();
      console.log(curr.value);
      if(curr.left){
        queue.push(curr.left);
      }
      if(curr.right){
        queue.push(curr.right);
      }
    }
  }
  min(root){
    if(!root.left){
      return root.value
    }else{
      return this.min(root.left)
    }
  }
  max(root){
    if(!root.right){
      return root.value
    }else{
      return this.max(root.right)
    }
  }
  delete(value){
  this.root = this.deleteNode(this.root,value)
}
deleteNode(root, value) {
  if (root === null) {
    return root;
  }
  if (value < root.value) {
    root.left = this.deleteNode(root.left, value);
  } else if (value > root.value) {
    root.right = this.deleteNode(root.right, value);
  } else {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }
    root.value = this.min(root.right);
    root.right = this.deleteNode(root.right, root.value);
    root.value = this.max(root.left);
    root.left = this.deleteNode(root.left,root.value);
  }
  return root;
  }
}
const bst = new BST()
console.log("tree is empty", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(25);
bst.insert(1);
// console.log(bst);

bst.preOrder(bst.root);
bst.inOrder(bst.root);
bst.postOrder(bst.root);

bst.levelOrder();

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));

bst.delete(1)
bst.levelOrder()

bst.delete(10)
bst.levelOrder()
