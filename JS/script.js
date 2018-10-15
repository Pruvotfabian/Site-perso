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

window.onload = function() {
  //getting all anchor elements
  var links = document.links;

  //getting html
  html = document.documentElement;

  //getting body
  body = document.body;

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      //getting current scroll position
      var scrollTop = Math.round(body.scrollTop || html.scrollTop);
      if (this.hash !== "") {
        //preventing default anchor click behavior
        event.preventDefault();

        //getting element with id found in hash
        var hashElement = document.getElementById(this.hash.substring(1));

        var hashElementTop = 0;
        var obj = hashElement;
        while (obj.offsetParent) {
          hashElementTop += obj.offsetTop;
          obj = obj.offsetParent;
        }
        //getting element's position
        hashElementTop = Math.round(hashElementTop);

        scroll(scrollTop, hashElementTop, this.hash);
      }
    };
  }
};
function scroll(from, to, hash) {
  var timeInterval = 1; //in ms
  var prevScrollTop;
  var increment = to > from ? 8 : -8;
    
  var scrollByPixel = setInterval(function() {
    //getting current scroll position
    var scrollTop = Math.round(body.scrollTop || html.scrollTop);
    if (
      prevScrollTop == scrollTop ||
      (to > from && scrollTop >= to) ||
      (to < from && scrollTop <= to)
    ) {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      window.location.hash = hash;
    } else {
      body.scrollTop += increment;
      html.scrollTop += increment;
      prevScrollTop = scrollTop;
    }
  }, timeInterval);
  

}
