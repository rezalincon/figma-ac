     $('.clients').slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 6,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         prevArrow: '<div class="ar-hide" style="position:absolute;left:-36px;top:26px"><img style="cursor:pointer" class="img-fluid" src="images/ar-prev.png"></div>',
         nextArrow: '<div class="ar-hide" style="position:absolute;right:-31px;top:26px"><img style="width:36px !important;cursor:pointer" class="img-fluid" src="images/next.png"></div>',
         responsive: [{
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     infinite: true,
                     dots: false
                 }
             }, {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2
                 }
             }, {
                 breakpoint: 780,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2,
                     prevArrow: '<div class="ar-hide" style="position:relative;left:-4%;top:66px"><img style="cursor:pointer" class="img-fluid" src="images/ar-prev.png"></div>',
                 }
             },

             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
             }
         ]
     });