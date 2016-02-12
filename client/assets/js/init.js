(function($){
  $(function(){

    // Floating-Fixed table of contents
    if ($('nav').length) {
      $('.toc-wrapper').pushpin({ top: $('nav').height() });
    }
    else if ($('#index-banner').length) {
      $('.toc-wrapper').pushpin({ top: $('#index-banner').height() });
    }
    else {
      $('.toc-wrapper').pushpin({ top: 0 });
    }

    $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
      });

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space
