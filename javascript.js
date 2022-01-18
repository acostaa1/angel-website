window.location.hash="#start";
let a = document.querySelectorAll("div[id]");
a.forEach(function(e) {
  if ("#" + e.getAttribute("id") != location.hash) {
    e.style.display = "none";
  }
})