function launch(type) {
  if (type == "create") {
    window.location.href = "../html/create.html";
  } else if (type == "edit") {
    window.location.href = "../html/editor.html";
  }  else if (type == "back") {
    window.location.href = "../html/index.html";
  }
}

document.onkeydown = function(e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 27) {
      setTimeout(function(){ launch("back"); }, 1);
    }
}
