$(document).ready(function(){  
    
    /* Sticky Navbar*/
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar").css({'background-color': '#000', 'z-index': '99'});
           $(".nav-list-container").css({'padding-top': '35px', 'padding-bottom': '35px'});
           $(".main-header .logo").css({'top': '1px', 'z-index':'999', 'transition': 'all .3s ease'});
        } else {
           $('.navbar').css('background-color', 'transparent');
           $(".nav-list-container").css({'padding-top': '60px', 'padding-bottom': '0'});
           $(".main-header .logo").css({'top': '28px', 'z-index':'999'});
        }
    });
     }

     // fullScreenNavToggle
const fullScreenNavToggle = () => {
    var burger = $(".burger");
    var navList = $(".nav-list-container");
    

    burger.bind("click", () => {
        navList.toggleClass('nav-active');
        burger.toggleClass('toggle');
        $('body').toggleClass('scroll-hidden');
        
    });
 
    }
    fullScreenNavToggle();

    // Hide scroll when nav-active is added
    if ($('.nav-list-container').hasClass('nav-active')){
        $('body').css('overflow-y', 'hidden')
    }else{
        $('body').css('overflow-y', 'show')
    }




 });