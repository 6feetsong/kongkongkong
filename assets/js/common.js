//
// Scripts
//
(function ($) {

  var initDocNavToggle = function(){
    var $btn = $('.doc-nav__button')

    $btn.on('click', function(){
      var _this = $(this),
        $box = _this.closest('.doc-nav__1depth')
        $box.toggleClass('doc-nav__1depth--is-active');

    })
  }

 




  var initFlatpickr = function(){
    var defaultOption  = {
      "locale": "ko",
      "conjunction" : "~",
      "time_24hr" : true
    }
    $('.datepicker').flatpickr(defaultOption);
    
  }


  $(document).ready(function () {
    console.log("document.ready");

    initDocNavToggle();
    initFlatpickr();
   // datepicker()






  });
})(jQuery);
