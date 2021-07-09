const slider = document.querySelector(".slider")
const nextbtn = document.querySelector(".next-btn")
const prevbtn = document.querySelector(".prev-btn")
const slides = document.querySelectorAll(".slide")
const icon = document.querySelectorAll(".icon")
const numberOfslides = slides.length
 var slidenumber = 0;

 // image slide next button
 nextbtn.addEventListener("click",()=>{
     slides.forEach((slide) => {
         slide.classList.remove("active");
     })
     icon.forEach(icon=>{
         icon.classList.remove("active")
     })
      slidenumber++
      if (slidenumber > (numberOfslides - 1)){
          slidenumber = 0;
      }
    slides[slidenumber].classList.add("active")
    icon[slidenumber].classList.add("active")
 })
 // image slide previous button
 prevbtn.addEventListener("click", () => {
     slides.forEach((slide) => {
         slide.classList.remove("active");
     })
     icon.forEach(icon => {
         icon.classList.remove("active")
     })
     slidenumber--
     if (slidenumber < 0) {
         slidenumber = numberOfslides - 1;
     }
     slides[slidenumber].classList.add("active")
     icon[slidenumber].classList.add("active")
 })


 // image slider autoplay

 var playSlider;
  var autoPlay = () => {
       playSlider = setInterval(function(){
          slides.forEach((slide) => {
              slide.classList.remove("active");
          })
          icon.forEach(icon => {
              icon.classList.remove("active")
          })
          slidenumber++
          if (slidenumber > (numberOfslides - 1)) {
              slidenumber = 0;
          }
          slides[slidenumber].classList.add("active")
          icon[slidenumber].classList.add("active")
       }, 3000)
  }
autoPlay()


//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
    autoPlay();
});