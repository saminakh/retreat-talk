var debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var setSlideHeight = function() {
  console.log("settingHeight");
  var windowHeight = window.innerHeight;
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    var slideHeight = windowHeight - 80;
    slide.style.minHeight = slideHeight + "px";
  }
}

window.addEventListener("resize", setSlideHeight);
setSlideHeight();
