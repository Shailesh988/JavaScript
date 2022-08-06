function person(firstName,lastName,Dob){
    this.name=firstName;
    this.lastname=lastName;
    this.dateOfBirth=Dob;
  }

//person.prototype.getBirthYear = function(){
 //return this.Dob.getFullYear();
 //}

const person1= new person("shailesh","bhatt","7-11-1999");
const personJSON=JSON.stringify(person);
console.log(personJSON);
console.log(person1);
