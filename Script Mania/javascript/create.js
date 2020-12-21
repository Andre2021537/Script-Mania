function launch(type) {
  if (type == "back") {
    window.location.href = "../html/editor.html";
  }
}

document.onkeydown = function(e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 27) {
      setTimeout(function() { launch("back"); }, 1);
    }

    if (recording == true) {
    if (key === 68) {
      //FAR LEFT || LEFT
      arrows.push(1);
      time.push(Date.now());
      lightUp(1);
    } else if (key === 70) {
      //MID LEFT || DOWN
      arrows.push(2);
      time.push(Date.now());

      lightUp(2);
    } else if (key === 74) {
      //MID RIGHT || UP
      arrows.push(3);
      time.push(Date.now());

      lightUp(3);
    } else if (key === 75) {
      //FAR RIGHT || RIGHT
      arrows.push(4);
      time.push(Date.now());

      lightUp(4);
    }  else if (key === 32) {
      //stop recording
      recording = false
      document.getElementById("record").style.color = "black";
      setTiming();
    }
  }
}

var recording = false;
var arrows = [];
var time = [];
var timing = [];

function record() {
  recording = true;

  document.getElementById("record").style.color = "red";

  arrows = [];
  time = [];
  timing = [];
}

function lightUp(key) {
  document.getElementById("key" + key).style.color = "yellow";
  setTimeout(function() { document.getElementById("key" + key).style.color = "black"; }, 200);
}

function setTiming() {
  for (i = time.length - 1; i >= 0; i--) {
    if (i == 0) {
      timing.push(0);
    } else {
      timing.push(time[i] - time[i - 1]);
    }
  }

timing.reverse();
}
