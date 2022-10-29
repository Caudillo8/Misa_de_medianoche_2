function mostarMenu() {
  var _0 = document.getElementById("menu0");
  var _1 = document.getElementById("menu1");
  var _2 = document.getElementById("menu2");
  var _3 = document.getElementById("menu3");
  var _4 = document.getElementById("menu4");
  var _5 = document.getElementById("menu5");

  if (_0.className === "menu" || _0.className === "invisible") {
    _5.className = "visible";
    _4.className = "visible";
    _3.className = "visible";
    _2.className = "visible";
    _1.className = "visible";
    _0.className = "visible";
  } else {
    _1.className = "invisible";
    _2.className = "invisible";
    _3.className = "invisible";
    _4.className = "invisible";
    _5.className = "invisible";
    _0.className = "invisible";
  }
}
