window.addEventListener("load", function () {
  window.onscroll = function () {
    stickDevoNavBar();
  };

  var navbar = document.querySelector(".navBarTop-container");
  var sticky = navbar.offsetTop;

  function stickDevoNavBar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});
