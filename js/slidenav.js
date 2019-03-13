document.addEventListener("DOMContentLoaded", function(event) {
  //Setup Nav Slider
  var sliders = document.querySelectorAll(".navslide");
  sliders.forEach(function(e) {
    e.addEventListener("click", function(e) {
      toggleSlide(document.querySelector("#navbuttons"));
    });
  });
});
//Method Author Unknown
var getHeight = function(el) {
    var el_style = window.getComputedStyle(el),
      el_display = el_style.display,
      el_position = el_style.position,
      el_visibility = el_style.visibility,
      el_max_height = el_style.maxHeight.replace("px", "").replace("%", ""),
      wanted_height = 0;

    // if its not hidden we just return normal height
    if (el_display !== "none" && el_max_height !== "0") {
      return el.offsetHeight;
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position = "absolute";
    el.style.visibility = "hidden";
    el.style.display = "block";

    wanted_height = el.offsetHeight;

    // reverting to the original values
    el.style.display = el_display;
    el.style.position = el_position;
    el.style.visibility = el_visibility;

    return wanted_height;
  },
  /**
   * toggleSlide mimics the jQuery version of slideDown and slideUp
   * all in one function comparing the max-heigth to 0
   */
  toggleSlide = function(el) {
    let button = document.getElementById("slide-icon");
    var el_max_height = 0;
    if (el.getAttribute("data-max-height")) {
      // we've already used this before, so everything is setup
      if (el.style.maxHeight.replace("px", "").replace("%", "") === "0") {
        el.style.maxHeight = el.getAttribute("data-max-height");

        button.classList.add("slide-up");
        button.classList.remove("slide-down");
      } else {
        el.style.maxHeight = "0";
        button.classList.add("slide-down");

        button.classList.remove("slide-up");
      }
    } else {
      //setup
      button.classList.remove("slide-down");
      button.classList.add("slide-up");
      el_max_height = getHeight(el) + "px";
      el.style["transition"] = "max-height 0.5s ease-in-out";
      el.style.overflowY = "hidden";
      el.style.maxHeight = "0";
      el.setAttribute("data-max-height", el_max_height);
      el.style.display = "block";

      // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
      setTimeout(function() {
        el.style.maxHeight = el_max_height;
      }, 10);
    }
  };

document.addEventListener("DOMContentLoaded", function(event) {
  //Setup About Scroll in
  document.addEventListener("scroll", function() {
    let aboutbounds = document
      .querySelector("#about-panel-container")
      .getBoundingClientRect();
    if (
      aboutbounds.top >= 0 && aboutbounds.top <= window.innerHeight - 200 ||
      aboutbounds.bottom <= window.innerHeight && aboutbounds.bottom > 200
      
      //   (window.innerHeight || document.documentElement.clientHeight)
    ) {
      //Bring in Profile Pic
      flyin();
    } else {
      //Profile Pic
      flyout();
    }
  });
  window.addEventListener("resize", function() {
    Array.from(document.getElementsByClassName("box")).forEach(element => {

        element.classList.add("box-resize");
      
    });
    flyout();
    flyin();
    Array.from(document.getElementsByClassName("box")).forEach(element => {
      element.classList.remove("box-resize");
    });
  });
});

var flyin = function flyin() {
  let pic = document.querySelector("#profile-pic");
  let picWidth = getElementWidth(pic);

  Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.style.width = picWidth + "px";
    element.classList.remove("box-up");
    element.classList.add("un-box");
  });
};
var flyout = function flyout() {
  Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.removeAttribute("style");
    element.classList.add("box-up");
    element.classList.remove("un-box");
    // element.classList.remove("centery");
  });
};

//Create temporary element to see what size it will be when adding profile-pic-check class
function getElementWidth(original) {
  let picTest = original.cloneNode(true);
  picTest.classList.remove("profile-pic");
  picTest.classList.add("profile-pic-check");
  document.body.appendChild(picTest);
  let picwidth = picTest.offsetWidth;
  picTest.parentNode.removeChild(picTest);
  return picwidth;
  
}
