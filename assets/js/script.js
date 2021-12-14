$(document).ready(function() {

	/*=================================
    ||          Owl Carousel
    ==================================*/
    $("#testimonial_slider").owlCarousel({

        loop:true,
        nav:false,
        items: 1,
        autoplay: true,
        autoplaySpeed: 500

    });

    
    /*=================================
    ||          Nivo-lightbox
    ==================================*/

        
    $('.portfolio-item').nivoLightbox({
        effect: 'fade',                             // The effect to use when showing the lightbox
        theme: 'default',                             // The lightbox theme to use
        keyboardNav: true,                             // Enable/Disable keyboard navigation (left/right/escape)
        clickOverlayToClose: true,                    // If false clicking the "close" button will be the only way to close the lightbox
        onInit: function(){},                         // Callback when lightbox has loaded
        beforeShowLightbox: function(){},             // Callback before the lightbox is shown
        afterShowLightbox: function(lightbox){},     // Callback after the lightbox is shown
        beforeHideLightbox: function(){},             // Callback before the lightbox is hidden
        afterHideLightbox: function(){},             // Callback after the lightbox is hidden
        onPrev: function(element){},                 // Callback when the lightbox gallery goes to previous item
        onNext: function(element){},                 // Callback when the lightbox gallery goes to next item
        errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
    });

            
    /*=================================
    ||          Contact
    ==================================*/
    $("#contactForm").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData        = $(this).serializeArray(),
            formURL         = $(this).attr("action"),
            $cfResponse     = $('#contactFormResponse'),
            $cfsubmit       = $("#cfsubmit"),
            cfsubmitText    = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $('#contactForm input[name=name]').val('');
                    $('#contactForm input[name=email]').val('');
                    $('#contactForm textarea[name=message]').val('');
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });

    /*=================================
    ||          Contact
    ==================================*/
    $("#quoteForm").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData        = $(this).serializeArray(),
            formURL         = $(this).attr("action"),
            $qfResponse     = $('#quoteFormResponse'),
            $qfsubmit       = $("#qfsubmit"),
            qfsubmitText    = $qfsubmit.text();

        $qfsubmit.text("Sending...");


        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $qfResponse.html(data);
                    $qfsubmit.text(qfsubmitText);
                    $('#quoteForm input[name=fullname]').val('');
                    $('#quoteForm input[name=email]').val('');
                    $('#quoteForm input[name=phone]').val('');
                    $('#quoteForm textarea[name=mail]').val('');
                    $('#quoteForm input[name=title]').val('');
                    $('#quoteForm input[name=pdetail]').val('');
                    $('#quoteForm input[name=budget]').val('');
                    $('#quoteForm input[name=deadline]').val('');
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                }
            });

        return false;

    });

    /*=================================
    ||          Selector
    ==================================*/
    $(".about-img-selector").on("click",function(e){
        e.preventDefault();
        var selectedImg = $(this).data('about-img');
        $('.about-img').addClass('hide');
        $('.about-img-'+selectedImg).removeClass('hide');
    });            

    /*=================================
    ||          Load more/less
    ==================================*/
    $('#works_container').mixItUp({
        load: {

        },
        pagination: {
            limit: 6,
            maxPager: 0,
            pagerClass: 'display-none star-btn',
            prevButtonHTML: '<span class="ion-chevron-left"></span>',
            nextButtonHTML: '<span class="ion-chevron-right"></span>'
        },
        selectors: {

        }
    });


    /*=================================
    ||          hide/show
    ==================================*/

    $("#iconhideshow").click(function(){
        $(this).toggleClass('fa-bars fa-times-circle');
        $(".nav").toggleClass('hide show');
    }); 


    /*=================================
    ||          vimeo vedio pause
    ==================================*/

    var iframe = $('#watch-video')[0],
        player = $f(iframe);

    $('.close-video').click(function(){
        player.api('pause');
    });
    $('.watch').click(function(){
        player.api('play');
    });



    // Tabs
    $('#about_tab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })



    // Toggle class
    $(".watch").click(function(){
        $('.iframe').removeClass("hide");
        $('.close-video').removeClass("hide");
        $('.watch').addClass("hide");
    });
    $(".close-video").click(function(){
        $('.iframe').addClass("hide");
        $('.close-video').addClass("hide");
        $('.watch').removeClass("hide");
    });
});