/*function mostarMenu(){
    document.getElementById('menu0').style.display='block';
    document.getElementById('menu1').style.display='block';
    document.getElementById('menu2').style.display='block';
    document.getElementById('menu3').style.display='block';
    document.getElementById('menu4').style.display='block';
    document.getElementById('menu5').style.display='block';
   
}

function mostarMenu(){
    console.log("apretado");
    const menu0 = document.getElementById('menu0');
    const menu1 = document.getElementById('menu1');
    const menu2 = document.getElementById('menu2');
    const menu3 = document.getElementById('menu3');
    const menu4 = document.getElementById('menu4');
    const menu5 = document.getElementById('menu5');
    if( menu0.classList.contains='menu'){
        menu0.classList.add = 'visible';
    }else{
        menu0.classList.remove = 'visible';
    }
}
*/
function mostarMenu() {
    var _0 = document.getElementById("menu0");
    var _1 = document.getElementById("menu1");
    var _2 = document.getElementById("menu2");
    var _3 = document.getElementById("menu3");
    var _4 = document.getElementById("menu4");
    var _5 = document.getElementById("menu5");

    if (
      _0.className === "menu" || _0.className === "invisible"||
      _1.className === "menu" || _1.className === "invisible"||
      _2.className === "menu" || _2.className === "invisible"||
      _3.className === "menu" || _3.className === "invisible"||
      _4.className === "menu" || _4.className === "invisible"||
      _5.className === "menu" || _5.className === "invisible"
    
    ) {
      _0.className = "visible";
      _1.className = "visible";
      _2.className = "visible";
      _3.className = "visible";
      _4.className = "visible";
      _5.className = "visible";
    } else {
      _0.className = "invisible";
      _1.className = "invisible";
      _2.className = "invisible";
      _3.className = "invisible";
      _4.className = "invisible";
      _5.className = "invisible";
    }
  
  }