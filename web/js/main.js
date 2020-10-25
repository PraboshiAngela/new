jQuery(document).ready(function($) {

    'use strict';


        $(".Modern-Slider").slick({
            autoplay:true,
            speed:1000,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            fade: true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
          });

        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });


        $('.tabgroup > div').hide();
            $('.tabgroup > div:first-of-type').show();
            $('.tabs a').click(function(e){
              e.preventDefault();
                var $this = $(this),
                tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();
          
        })



        $(".box-video").click(function(){
          $('iframe',this)[0].src += "&amp;autoplay=1";
          $(this).addClass('open');
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        })



        var contentSection = $('.content-section, .main-banner');
        var navigation = $('nav');
        
        //when a nav link is clicked, smooth scroll to the section
        navigation.on('click', 'a', function(event){
            event.preventDefault(); //prevents previous event
            smoothScroll($(this.hash));
        });
        
        //update navigation on scroll...
        $(window).on('scroll', function(){
            updateNavigation();
        })
        //...and when the page starts
        updateNavigation();
        
        /////FUNCTIONS
        function updateNavigation(){
            contentSection.each(function(){
                var sectionName = $(this).attr('id');
                var navigationMatch = $('nav a[href="#' + sectionName + '"]');
                if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
                      ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
                    {
                        navigationMatch.addClass('active-section');
                    }
                else {
                    navigationMatch.removeClass('active-section');
                }
            });
        }
        function smoothScroll(target){
            $('body,html').animate({
                scrollTop: target.offset().top
            }, 800);
        }


        $('.button a[href*=#]').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -0 }, 500, 'linear');
        });

        $(document).ready(function() {

            $('[name="hide1"]').hide();
            $(".show_hide1").show();
        
            $('.show_hide1').click(function() {
                  
                console.log('click');
                 //$(".slidingDiv").slideToggle();
                 var isvisible = $('[name="hide1"]').is(':visible');        
                 if ( isvisible ) {
                    $('[name="hide1"]').hide();
                    $('[id="pg12"]').removeClass('col-md-7');
                    $('[id="pg12"]').addClass('col-md-4');

                    $('[id="pg11"]').removeClass('col-md-5');
                    $('[id="pg11"]').addClass('col-md-8');
                 } else{
                    $('[name="hide1"]').show();
                    $('[id="pg12"]').removeClass('col-md-4');
                    $('[id="pg12"]').addClass('col-md-7');

                    $('[id="pg11"]').removeClass('col-md-8');
                    $('[id="pg11"]').addClass('col-md-5');

                 }
            });
        
        });

        $(document).ready(function() {

            $('[name="hide2"]').hide();
            $(".show_hide2").show();
        
            $('.show_hide2').click(function() {
                  
                console.log('click');
                 //$(".slidingDiv").slideToggle();
                 var isvisible = $('[name="hide2"]').is(':visible');        
                 if ( isvisible ) {
                    $('[name="hide2"]').hide();
                    $('[id="pg22"]').removeClass('col-md-7');
                    $('[id="pg22"]').addClass('col-md-4');

                    $('[id="pg21"]').removeClass('col-md-5');
                    $('[id="pg21"]').addClass('col-md-8');
                 } else{
                    $('[name="hide2"]').show();
                    $('[id="pg22"]').removeClass('col-md-4');
                    $('[id="pg22"]').addClass('col-md-7');

                    $('[id="pg21"]').removeClass('col-md-8');
                    $('[id="pg21"]').addClass('col-md-5');
                   
                 }
            });
        
        });

        $(document).ready(function() {

            $('[name="hide3"]').hide();
            $(".show_hide3").show();
        
            $('.show_hide3').click(function() {
                  
                console.log('click');
                 //$(".slidingDiv").slideToggle();
                 var isvisible = $('[name="hide3"]').is(':visible');        
                 if ( isvisible ) {
                    $('[name="hide3"]').hide();
                    $('[id="pg32"]').removeClass('col-md-8');
                    $('[id="pg32"]').addClass('col-md-4');

                    $('[id="pg31"]').removeClass('col-md-4');
                    $('[id="pg31"]').addClass('col-md-8');
                 } else{
                    $('[name="hide3"]').show();
                    $('[id="pg32"]').removeClass('col-md-4');
                    $('[id="pg32"]').addClass('col-md-8');

                    $('[id="pg31"]').removeClass('col-md-8');
                    $('[id="pg31"]').addClass('col-md-4');
                 }
            });
        
        });

        $(document).ready(function() {

            $('[name="hide4"]').hide();
            $(".show_hide4").show();
        
            $('.show_hide4').click(function() {
                  
                console.log('click');
                 //$(".slidingDiv").slideToggle();
                 var isvisible = $('[name="hide4"]').is(':visible');        
                 if ( isvisible ) {
                    $('[name="hide4"]').hide();
                    $('[id="pg42"]').removeClass('col-md-8');
                    $('[id="pg42"]').addClass('col-md-4');

                    $('[id="pg41"]').removeClass('col-md-4');
                    $('[id="pg41"]').addClass('col-md-8');
                 } else{
                    $('[name="hide4"]').show();
                    $('[id="pg42"]').removeClass('col-md-4');
                    $('[id="pg42"]').addClass('col-md-8');

                    $('[id="pg41"]').removeClass('col-md-8');
                    $('[id="pg41"]').addClass('col-md-4');
                 }
            });
        
        });

        $(document).ready(function() {

            $('[name="hide5"]').hide();
            $(".show_hide5").show();
        
            $('.show_hide5').click(function() {
                  
                console.log('click');
                 //$(".slidingDiv").slideToggle();
                 var isvisible = $('[name="hide5"]').is(':visible');        
                 if ( isvisible ) {
                    $('[name="hide5"]').hide();
                    $('[id="pg52"]').removeClass('col-md-7');
                    $('[id="pg52"]').addClass('col-md-4');

                    $('[id="pg51"]').removeClass('col-md-5');
                    $('[id="pg51"]').addClass('col-md-8');
                 } else{
                    $('[name="hide5"]').show();
                    $('[id="pg52"]').removeClass('col-md-4');
                    $('[id="pg52"]').addClass('col-md-7');

                    $('[id="pg51"]').removeClass('col-md-8');
                    $('[id="pg51"]').addClass('col-md-5');
                 }
            });
        
        });

        $(document).ready(function() {

            $('[name="hide6"]').hide();
            $(".show_hide6").show();
        
            $('.show_hide6').click(function() {
                  
                console.log('click');
                 //$(".slidingDiv").slideToggle();
                 var isvisible = $('[name="hide6"]').is(':visible');        
                 if ( isvisible ) {
                    $('[name="hide6"]').hide();
                    $('[id="pg62"]').removeClass('col-md-7');
                    $('[id="pg62"]').addClass('col-md-4');

                    $('[id="pg61"]').removeClass('col-md-5');
                    $('[id="pg61"]').addClass('col-md-8');
                 } else{
                    $('[name="hide6"]').show();
                    $('[id="pg62"]').removeClass('col-md-4');
                    $('[id="pg62"]').addClass('col-md-7');

                    $('[id="pg61"]').removeClass('col-md-8');
                    $('[id="pg61"]').addClass('col-md-5');
                 }
            });
        
        });


        


});