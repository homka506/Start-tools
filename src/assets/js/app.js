import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';



import './lib/slick.min.js';

$(document).foundation();



$(document).on('click', 'body', function(event) {
  $('.ba-header-topline__languages__content').hide();
  
  });
  $('.ba-header-topline__languages').on('mouseenter', function(){
    $('.ba-header-topline__languages__content').show();
  });


  $(document).on('click', 'body', function(event) {
    $('.ba-main-menu__blog__submenu').hide();
    
    });
    $('#header_blog').on('mouseenter', function(){
      $('.ba-main-menu__blog__submenu').show();
    });

    $(document).on('click', 'body', function(event) {
      $('.ba-main-menu__service__submenu').hide();
      
      });
      $('#header_service').on('mouseenter', function(){
        $('.ba-main-menu__service__submenu').show();
      });

      $('#primary-menu').on(
        'hide.zf.dropdownmenu', function() {
          let dropdown = $(this).find('#secondary-menu');
          dropdown.css('display', 'inherit');
          dropdown.fadeOut('slow');
      });
      $('#primary-menu').on(
        'show.zf.dropdownmenu', function() {
          let dropdown = $(this).find('#secondary-menu');
          dropdown.css('display', 'none');
          dropdown.fadeIn('slow');
      });
      
      
      
 
  let introSlider = $('.ba-intro-slider');
  introSlider.slick({
	slide: '.ba-intro',
	infinite: true,
	dots: true,
	nextArrow: introSlider.find('[data-next]'),
	prevArrow: introSlider.find('[data-prev]')
});

let shopSlider = $('.shop_slider');
shopSlider.slick({
slide: '.shop_slide',
infinite: true,
	dots: false,
nextArrow: shopSlider.find('[data-next]'),
prevArrow: shopSlider.find('[data-prev]'),
slidesToShow: 4,
	slidesToScroll: 1,
	mobileFirst: true,
	responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 0,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
  ]
});
  let videoSlider = $('.video_slider');
  videoSlider.slick({
  slide: '.video_slide',
  infinite: true,
    dots: false,
  nextArrow: videoSlider.find('[data-next]'),
  prevArrow: videoSlider.find('[data-prev]'),
  slidesToShow: 4,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
});

