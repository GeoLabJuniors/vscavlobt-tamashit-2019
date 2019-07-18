window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
         
        document.getElementById("myBtn2").style.display = "none";
         document.getElementById("myBtn").style.display = "block";
            document.getElementById("myBtn").style.transform = "translate(180deg)";
        
    } else  {
        document.getElementById("myBtn").style.display = "none";
         document.getElementById("myBtn2").style.display = "block";
       
        }
    
    
}

function topFunction() {
window.scrollTo(0, -10000)
}

function bottomFunction() {
window.scrollTo(0, 10000)
    
   
// document.body.scrollTop =  number// For Safari
// document.documentElement.scrollTop =  number  // For Chrome, Firefox, IE and Opera
//    number = number + 200
//    console.log(number)
    
    
}