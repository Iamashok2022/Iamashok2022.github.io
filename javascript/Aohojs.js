let x=document.querySelectorAll('.contentss');
 for(let i=0;i<x.length;i++) {
    x[i].onclick=function() {
        let j=0;
      while(j<x.length) {
           x[j++].className="contentss";
           }
       x[i].className="contentss active";
   }
}

var y=document.getElementById('i1');
function openfullscreen() {
       if(y.requestFullscreen) {
       y.requestFullscreen();
  }
}

var z=document.getElementById('map1');
   function openfullscreen1() {
   if(z.requestFullscreen) {
      z.requestFullscreen();
}
}