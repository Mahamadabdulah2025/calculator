
let string = "";
let buttons = document.querySelectorAll('.button');
let b = document.querySelectorAll('.btn-icon');


Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '.'){
      if(string.includes(".")){
        string =string ;
          document.querySelector('input').value = string;
      }
      else if(!string ){
        string ='0.';
          document.querySelector('input').value = string;
      }
      else{
        string=string + ".";
        document.querySelector('input').value = string;
      }
    }
     else if(e.target.innerHTML == '0'){
      if(!string){
        string =""
       document.querySelector('input').value = string;
   }
   else{
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
   }
    }
    else if(e.target.innerHTML == '+/-'){
      if(!string){
        string ="(-"
       document.querySelector('input').value = string;
   }
   else if(string.includes("(-")){
    string=string.slice(2);
    document.querySelector('input').value = string;
    
   }
   else {
    string = "(-" + string;
    document.querySelector('input').value = string;
   }
    }
    else if(e.target.innerHTML == '*' || e.target.innerHTML == '/'||
    e.target.innerHTML == '+'|| e.target.innerHTML == '-'|| e.target.innerHTML =='%'){
      if(!string){
         string =""
        document.querySelector('input').value = string;
    }
    else if(string.endsWith("*") || string.charAt(string.length-1)=='/' ||
    string.charAt(string.length-1)=='-' || string.charAt(string.length-1)=='+'|| 
    string.charAt(string.length-1)=='%'){
      string =string.substring(0,string.length-1) + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    else {
      string =string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    }
    else if(e.target.innerHTML=='ce'){
      if(string.includes("(-")){
        string = string.substring(0,string.length-2);
        document.querySelector('input').value = string;
      }
      else{
        string = string.substring(0,string.length-1);
        document.querySelector('input').value = string;
      }
      }
    else if(e.target.innerHTML == '( )'){
        if(!string){
          string ="(";
          document.querySelector('input').value = string;
      }
      else if(string.includes("(")){
        string =string + ")";
          document.querySelector('input').value = string;
      }
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})