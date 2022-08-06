const obj=
  {
  name: "shailesh",
  lastName:"bhatt",
  dob: 1999,
  address:{
    city: "bhilwara",
    state: "rajasthan",
    }
  }
obj.hobby = "cricket"
const obj1={
  name: "nilesh",
  lastName:"vyas",
  dob: 1998,
  address:{
    city: "udaipur",
    state: "rajasthan"
  }
}
const{name,lastName,dob}=obj;
console.log(obj);
console.log(obj.address.city);
console.log(name,lastName,dob);
console.log(obj.hobby);
console.log(obj1.name);
console.log(obj1.dob);
