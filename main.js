


const responsive = {
  0 : {
    items: 1 ,
  },
   320 : {
      items: 2,
   },
   560 :{
     items: 3,
   },
   960 :{
     item: 4,
   },

}


  // owl-crousel for blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    nav: false,
    navText: [$('.owl-navegation .owl-nav-prev'), $('.owl-navegation .owl-nav-next') ],
    responsive: responsive
  });

 