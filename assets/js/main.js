$(document).ready(function(){

    $('.count-number').counterUp({
        delay: 10,
        time: 2000
      });

      
      $("#owl-demo").owlCarousel({
 
        navigation : true, // Show next and prev buttons
         
        slideSpeed : 300,
        paginationSpeed : 400,
         
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        autoPlay:true,
        navigation:false,
        paginationNumbers:false,
        pagination:false
         
        });

        $('#lk').owlCarousel({
            loop:true,
            nav:false,
            margin:10,
            centered: true,
            autoplay:true,
            autoplayTimeout:2500,
            items: 1
        })

});
