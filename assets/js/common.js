//
// Scripts
//

( function($){

  var openClassName = 'layer--is-open';
  $.fn.layerOpen = function() { 
    $(this).addClass(openClassName)
    return this; 
  }

  $.fn.layerClose = function() { 

    this.on('click', function(){
      var _this = $(this);
      _this.closest('.layer').removeClass(openClassName)
    })
    return this; 
  }
})(jQuery);
  

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
      locale: {
        rangeSeparator: ' ~ '
      },
      conjunction : " ~ ",
      time_24hr : true
    }
    flatpickr.localize(flatpickr.l10ns.ko);
    $('.datepicker').flatpickr(defaultOption);
    
  }

  var initLayer = function(){
    var $btn = $('[data-layer]');
   
  
    $btn.on('click', function(){
      var _this = $(this),
        $layerEle = $(_this.data('layer'))
        $layerEle.layerOpen()
    })
    $('[data-layerBtnClose]').layerClose()
  }

  

  


  $(document).ready(function () {
    console.log("document.ready");

    initDocNavToggle();
    initFlatpickr();
    initLayer();
   // datepicker()






  });
})(jQuery);
