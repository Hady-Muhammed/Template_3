let mega = document.getElementById("link");

function changeStyle() {
    if(document.getElementById("show").style.opacity === '1') {
        document.getElementById("show").style.opacity  = '0';
    } else {
        document.getElementById("show").style.opacity  = '1'
    }
  }

let timer1 = document.getElementsByClassName("seconds")[0]
let timer2 = document.getElementsByClassName("minutes")[0]
setInterval(function(){
    if(timer1.innerHTML == 0) {
        timer2.innerHTML -= 1;
        timer1.innerHTML = 60;
    }
    else {
        timer1.innerHTML -= 1;
    } 
},1000)