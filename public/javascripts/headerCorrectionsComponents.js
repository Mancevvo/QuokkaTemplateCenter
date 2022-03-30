let navBar = document.querySelector(".QuokkaCustom");
let searchBar = document.getElementById("searchBar");
let topBanner = document.querySelector(".adjustPaddingBanner");

let leftColumn = document.querySelector(".col-sm-4");
let rightColumn = document.querySelector(".col-sm-8");

navBar.style.backgroundColor = "#000";

let CardContainer = document.querySelector(".cardContainer");
CardContainer.style.backgroundColor = "#001D4D";

cardContainerWidth = rightColumn.clientWidth - leftColumn.clientWidth - 30;
CardContainer.style.width = cardContainerWidth + "px";

window.onscroll = function () {
  myFunction();
};

var sticky = CardContainer.offsetTop;
function myFunction() {
  if (window.pageYOffset >= topBanner.clientHeight - 46) {
    CardContainer.classList.add("sticky");
  } else {
    CardContainer.classList.remove("sticky");
  }
}
