function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// function updateClock() {
//   const clockElement = document.getElementById("clock");
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   const seconds = String(now.getSeconds()).padStart(2, "0");
//   clockElement.textContent = `${hours}:${minutes}:${seconds}`;
// }

// setInterval(updateClock, 1000);
// updateClock(); // Initial call to display the clock immediately

var slideIndex = 1;
setInterval(function () {
  plusDivs(1);
}, 1000);

function plusDivs(index) {
  showImage((slideIndex += index));
}

function showImage(index) {
  console.log(index);
  const imgList = document.getElementsByClassName("slider");
  var i;
  if (index > imgList.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = imgList.length;
  }
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";
}
