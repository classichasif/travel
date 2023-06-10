
// const headerElement = {
//   toggleBtn:document.getElementById("toggle_btn"),
//   headerNav:document.getElementById("header_nav"),
//   crosBtn:document.getElementById("cros_btn"),
// }

// const {headerNav, toggleBtn, crosBtn} = headerElement
// toggleBtn.addEventListener("click", function(){
//   headerNav.classList.toggle("activeNav")
// })
// crosBtn.addEventListener("click", function(){
//   headerNav.classList.remove("activeNav")
// })

// window.addEventListener("click", function(event) {
//   if (!headerNav.contains(event.target) && !toggleBtn.contains(event.target)) {
//     headerNav.classList.remove("activeNav")
//   }
// });

// // sticky menu
// var header = document.getElementsByClassName("main_header")[0];
// var sticky = header.offsetTop + 200;


// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// })

// // banner slider
// $(function (e){
//   e('.banner_slider').slick({
//       lazyLoad: 'ondemand',
//       dots: true,
//       infinite: true,
//       speed: 500,
//       fade: true,
//       cssEase: 'linear',
//       arrows: false,
//       autoplay: true,
//       appendDots: e(".slider_dots"),
//   });
// })

$(function (e) {
  "use strict";
  e(".offer_slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: !0,
      dots: true,
      autoplay: !1,
      autoplaySpeed: 5e3,
      swipe: true,
      swipeToSlide: true,
      appendDots: e(".slider_dots"),
      responsive: [{
          breakpoint: 1200,
          settings: {
              autoplay: !1,
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 766,
          settings: {
              autoplay: !1,
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 576,
          settings: {
              autoplay: !1,
              slidesToShow: 1,
          }
      }
    ]
  })
});

// magnific popup

$('.video_popup').magnificPopup({
  type: 'iframe'
});

//   socket year
let socketYear = document.getElementById("socket_year")
let PresentYear = (year) =>{
  let date = new Date()
  let PreYear = date.getFullYear()
  year.innerText = PreYear
}
PresentYear(socketYear)

  
