const hamburger=document.querySelector('.hamburger');

var boolean=true;
const fadesInElems = document.querySelectorAll(".toggle");
hamburger.addEventListener("click",function(){
    if(boolean){
        hamburger.classList.add("open");
        fadesInElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
         });
        boolean=false;
    }
    else{
        fadesInElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    hamburger.classList.remove("open");   
    boolean=true;
    }
});

