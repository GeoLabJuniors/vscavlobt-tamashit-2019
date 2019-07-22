function goDown() {
var p =  document.querySelector(".paragraph");
p.style.marginTop = "0";
p.classList.toggle('open');
var butt =  document.querySelector(".goDown");
butt.style.display = "none"
    var butt2 =  document.querySelector(".goDown2");
    butt2.style.display = "block";
}



function goDown2() {
var p =  document.querySelector(".paragraph");
p.style.marginTop = "50px";
p.classList.remove('open');
var butt =  document.querySelector(".goDown2");
    butt.style.display = "none"
    var butt2 =  document.querySelector(".goDown");
    butt2.style.display = "block"
}