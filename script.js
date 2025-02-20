var ball = document.getElementById("ball");

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

function setValue(value) {
  return value + "px";
}

window.onresize = function (e) {
  ballHeight = ball.offsetHeight;
  ballWidth = ball.offsetWidth;
};

function key(keyPress) {
  var top = parseInt(ball.style.top);
  var left = parseInt(ball.style.left);

  // W is pressed
  if (keyPress === "w" || keyPress === "W") {
    if (top > 5) {
      ball.style.top = setValue(top - 5);
    }
  }

  // A is pressed
  else if (keyPress === "a" || keyPress === "A") {
    if (left > 5) {
      ball.style.left = setValue(left - 5);
    }
  }

  // S is pressed
  else if (keyPress === "s" || keyPress === "S") {
    if (top < window.innerHeight - ballHeight - 5) {
      ball.style.top = setValue(top + 5);
    }
  }

  // D is pressed
  else if (keyPress === "d" || keyPress === "D") {
    if (left < window.innerWidth - ballWidth - 5) {
      ball.style.left = setValue(left + 5);
    }
  }
}

window.addEventListener("keypress", function (event) {
  //    code(event.code); //- You can use this
  key(event.key); //- You can also use this
});
