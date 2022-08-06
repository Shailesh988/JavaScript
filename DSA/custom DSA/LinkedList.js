class Node {  // define node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {  // add node  into linkedlist
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size ===0 ;
  }
  getSize() {
    return this.size;
  }
  prepend(value) { // add elemnt start of the list
    const node = new Node(value); // create new node
    if (this.isEmpty()) {
      this.head = node; // head
    } else { // when some node is inserting then the new node is the head of the list
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) { // add element END of the list
    const node = new Node(value);// create new node
    if (this.isEmpty()) { // when no node insert then by defualt node is head
      this.head = node; // head
    } else { // when some value insert, then pervious node is head and connected to his pointer
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++; // incress node
  }
  insert(value,index){ // add element into the list index (so we pass the index )
    if(index<0|| index> this.size){ // when index is invalid [index<0]
    }
    if(index==0){ // add element into head
      this.prepend(value)
    }else{ // add element into anywhere at index
      const node = new Node(value)
      let prev = this.head
      for(let i=0;i<index-1;i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
    }
    this.size++
  }
  removeFrom(index){
    if(index<0 || index>= this.size){ // index < 0 ,no element is remove
      return null ;
  }
  let removedNode
  if(index===0){
    removedNode= this.head
    this.head= this.head.next
  }else{
    let prev = this.head
    for(let i = 0; i< index-1; i++){
      prev = prev.next
    }
    removedNode = prev.next
    prev.next= removedNode.next
  }
  this.size--;
  return removedNode.value
}
  removevalue(){
    if(this.isEmpty()){ // when there is no value return null
      return null;
    }
    if(this.head.value === value){ // when value in head node
      this.head = this.head.next
      this.size--
      return value ;
    }else{ // when value in after head node
      let prev = this.head
      while(prev.nexr&& prev.next.value !== value){
        prev = prev.next
      }
      if(prev.next){
        removedNode = prev.next
        prev.next = removedNode.next
        this.size--
        return value
      }
      return null
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
      return -1;
  }
  print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  }

const list = new LinkedList()
console.log(list.isEmpty());
console.log(list.getSize());
list.print()

list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()

list.append(40)
list.append(50)
list.append(60)
list.print()
console.log(list.getSize());

list.insert(70,4)
list.insert(80,1)
list.print()

console.log(list.removeFrom(4));
list.print()
console.log(list.getSize());

console.log(list.search(60));
