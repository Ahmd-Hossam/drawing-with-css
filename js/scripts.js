$(function(){
   $('.input').on('keypress', function(e){
       if((e.keyCode  >= 48 && e.keyCode  <= 57) || (e.keyCode  >= 97 && e.keyCode  <= 105)){
        console.log("number");
       }else{
        console.log("email");
       }
   })
})//end page