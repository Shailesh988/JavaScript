class employee {
   constructor(givenname,givenexp,givendivision){
     this.name= givenname;
     this.exp=givenexp;
     this.division=givendivision;
   }
   myname(){
     return `i am ${this.name} this is my company i worked here`;
   }
   totalexp(){
     return 2022 - this.exp;
   }
   static add (a,b){
     return a+b;
   }
 }
   const detail = new employee("shailesh",2,"division");
  console.log(detail.totalexp());
