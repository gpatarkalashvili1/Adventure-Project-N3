"use strict"

// var splide = new Splide(".splide", {
//   type: "loop",
//   autoplay: true,
//   interval: 1500,
//   direction: "rtl",
//   perPage: 3,
//   height: "40rem",
//   autoScroll: {
//     speed: 2,
//   },
// });

// splide.mount();


var splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  autoplay: true,
  interval: 1500,
  height: "40rem",
  snap   : true,
  perPage: 3,
} );

splide.mount();