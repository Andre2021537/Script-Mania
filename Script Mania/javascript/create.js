document.onkeydown = function(e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 27) {
      setTimeout(function(){ launch("back"); }, 1);
    }

    if (recording == true) {
    if (key === 68) {
      //FAR LEFT || LEFT

    } else if (key === 70) {
      //MID LEFT || DOWN

    } else if (key === 74) {
      //MID RIGHT || UP

    } else if (key === 75) {
      //FAR RIGHT || RIGHT

    }
  }
}

var recording = false;
