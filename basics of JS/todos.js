const todos =[
  {
    id:1,
    text:"is completed",
    isCompleted:true
  },
  {
    id:2,
    text:"this is my name",
    isCompleted:true
  },
  {
    id:3,
    text:"hello how are you?",
    isCompleted:false
  },

];
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
console.log(todos);
