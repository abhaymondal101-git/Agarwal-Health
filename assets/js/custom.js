$( document ).ready(function() {

  // ==================*** what-we-do slider start ***=========================
  $('#people').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots:false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1024: {
        items: 3
      },
      1170: {
        items: 3
      }
    }
  });
  // ==================*** what-we-do slider end ***=========================

  // ==================*** Animation start ***=========================
  AOS.init();
  // ==================*** Animation start ***=========================

});

// =========================*** gallery area start ***==================================
$(document).ready(function() {
  var $gallery = $('#gallery');
  var $boxes = $('.revGallery-anchor');
  $boxes.hide(); 

  $gallery.imagesLoaded( {background: true}, function() {
  $boxes.fadeIn();

      $gallery.isotope({
          // options
          sortBy : 'original-order',
          layoutMode: 'fitRows',
          itemSelector: '.revGallery-anchor',
          stagger: 30,
      });
  });	

   $('button').on( 'click', function() {
       var filterValue = $(this).attr('data-filter');
        $('#gallery').isotope({ filter: filterValue });
        $gallery.data('lightGallery').destroy(true);
      $gallery.lightGallery({
            selector: filterValue.replace('*','')
      });
  });
});

$(document).ready(function() {
  $("#gallery").lightGallery({ 
}); 
});

//button active mode
$('.button').click(function(){
$('.button').removeClass('is-checked');
$(this).addClass('is-checked');
});


//CSS Gram Filters on Mouse enter
$("#gallery a .nak-gallery-poster").addClass("inkwell");

$("#gallery a").on({
mouseenter : function() {
$(this).find(".nak-gallery-poster").removeClass("inkwell").addClass("walden");
},
mouseleave : function() {
$(this).find(".nak-gallery-poster").removeClass("walden").addClass("inkwell");
}
}); 

// =========================*** /gallery area end ***==================================

