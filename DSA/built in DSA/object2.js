const obj = {
name: "shailesh",
age: 22,
sayMyName: function(){
  console.log(this.name);
  console.log(this.age);
}
}
obj.sayMyName();
