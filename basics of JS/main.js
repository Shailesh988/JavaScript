function validateForm(){
   let x=document.forms['myForm']['name'].value;
   let y= document.forms['myForm']['pass'].value;
   let z= document.forms['myForm']['Cpass'].value;
   if(y != z)
 {
   alert("Passwords did not match");
 } else {
   alert("Password created successfully");
 }

   console.log(x,y,z);
   // console.log(y);
   text = "ss";
  document.getElementById("demo").innerHTML = text;
}
