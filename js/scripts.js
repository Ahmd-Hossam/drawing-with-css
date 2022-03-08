$(function(){
   $('.input').on('keypress', function(e){
       if((e.keyCode  >= 48 && e.keyCode  <= 57) || (e.keyCode  >= 97 && e.keyCode  <= 105)){
        console.log("number");
       }else{
        console.log("email");
       }
   })
})//end page





//1-Creating object with a constructor
function person(name, age, address){
    this.name=name,
    this.age=age,
    this.address=address
}

const myFather=new person("hossam", 55, "cairo")
const myMother=new person("flower", 45, "mansoura")

document.getElementById("family").innerHTML=`my father is ${myFather.name} and my mother age is ${myMother.age}`