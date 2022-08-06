class Stack{
  constructor(){
    this.items=[]
  }
  push(element){
    this.items.push(element)
  }
  pop(){
    return this.items.pop()
  }
  peek(){
    return this.items[this.items.length-1]
  }
  isEmpty(){
    return this.items.length==0
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString());
  }

}
// create instance of class
const stack = new Stack()
console.log(stack.isEmpty());
stack.push(211)
stack.push(500)
stack.push(600)
stack.push("shailesh")
stack.print()
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
