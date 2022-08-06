function person(firstName,lastName,Dob){
    this.name=firstName;
    this.lastname=lastName;
    this.dateOfBirth=Dob;
}
const person1= new person("shailesh","bhatt","7-11-1999");
console.log(person1)
