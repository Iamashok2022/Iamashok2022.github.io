const ll=document.getElementById('ll');
 const ss=document.getElementById('ss');
 function reg() {
 ss.style.display="block";
 ss.style.top="0px";
 ss.style.position="relative";
 ll.style.display="none";
}
 function log() {
 ss.style.display="none";
 ll.style.display="block";
}

function sublog(){
 alert("login successful");
}
function subreg(){
 alert("Register successful");
}