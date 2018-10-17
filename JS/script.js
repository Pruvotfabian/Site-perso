var html, body;
var concret = document.getElementById('concret');
var fictif = document.getElementById('fictif');


var circle = document.getElementById("circle");
circle.addEventListener('click', click)
function click() {
  document.getElementById('test2').style.display = "block";
  window.setTimeout(a, 200)
  function a() {
    document.getElementById('test').style.display = "block";
    function extraire() {
      character = message.substring(I, I=I+1) ;
      if ( character == "-" &&  message.substr(I, 5) == "stop-" ) {              
           character = "<br>" ;
           I = I + 5;
           }
      test.innerHTML += character;
      if ( I < message.length ) setTimeout(extraire, 100);
      }
 I = 0 ;
 message = "-stop- Projet Story Teller V.1-stop- ";
 extraire();
  }
  window.setTimeout(b, 2000)
  function b() {
    document.getElementById('test3').style.display = "block";
  }
  circle.removeEventListener('click', click);
}

var truc = document.getElementById("truc");
truc.addEventListener('click', click2)
function click2() {
   window.location = "https://github.com/Pruvotfabian/JS-JEU-BETA-test";
  
}



var circleb = document.getElementById("circleb");
circleb.addEventListener('click', clickb)
function clickb() {
  document.getElementById('test2b').style.display = "block";
  window.setTimeout(c, 300)
  function c() {
    document.getElementById('testb').style.display = "block";
    function extraire() {
      character = message.substring(I, I=I+1) ;
      if ( character == "-" &&  message.substr(I, 5) == "stop-" ) {              
           character = "<br>" ;
           I = I + 5;
           }
      testb.innerHTML += character;
      if ( I < message.length ) setTimeout(extraire, 100);
      }
 I = 0 ;
 message = "-stop- Projet Site de la Muerte-stop- ";
 extraire();
  }
  window.setTimeout(d, 2000)
  function d() {
    document.getElementById('test3b').style.display = "block";
  }
  circle.removeEventListener('click', clickb);
}

var trucb = document.getElementById("trucb");
trucb.addEventListener('click', click3)
function click3() {
   window.location = "https://github.com/Pruvotfabian/Site-de-la-Muerte";
  
}
