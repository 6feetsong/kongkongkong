//
// Scripts
//
if (typeof Promise !== "function")
        document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.min.js"><\/script>');

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
  var uiPopup = {
    options :{
      btnTextConfirm : '확인',
      btnTextCancel : '취소',
      text:'',
      isCallBackClose:true
    },
    alertTemplate : function(options){
      var alertButton = '<div class="layer-alert__btns"><button class="button button--flat-warning" name="alert-close" type="button">'+options.btnTextConfirm+'</button></div>';
      var $alert = $('<div class="layer"><div class="layer-dim"></div><article class="layer-alert"><div class="layer-alert__inner">'+options.text+'</div>'+alertButton+'</article></div>')
      return $alert
    },
    confirmTemplate : function(options){
      var confirmButton = '<div class="layer-confirm__btns"><button class="button button button--flat-secondary layer__btn-close" name="confirm-close" type="button">'+options.btnTextCancel+'</button><button class="button button--flat-warning layer__btn-confirm" name="confirm-confirm" type="button">'+options.btnTextConfirm+'</button></div>';
      var $confirm = $('<div class="layer"><div class="layer-dim"></div><article class="layer-confirm"><div class="layer-confirm__inner">'+options.text+'</div>'+confirmButton+'</article></div>');
      return $confirm
    },
    alert : function(addOption){
      var _this = this;
      var mergeOption = $.extend({},_this.options,addOption);
      var $body = $('body');
      var alertTemplate = this.alertTemplate(mergeOption);
      alertTemplate.appendTo($body).addClass('layer--is-open');
      alertTemplate.on('click', '[name=alert-close]', function(){
        _this.close(alertTemplate);
        mergeOption.alertCallBack && mergeOption.alertCallBack();
      });
    },
    confirm : function(addOption){
      var _this = this;
      var mergeOption = $.extend({},_this.options,addOption)
      var $body = $('body');
      var confirmTemplate = this.confirmTemplate(mergeOption);
      confirmTemplate.appendTo( $body).addClass('layer--is-open');
      confirmTemplate.on('click', '[name=confirm-close]', function(){
        _this.close(confirmTemplate);
      });
      confirmTemplate.on('click', '[name=confirm-confirm]', function(){
        addOption.confirmCallBack();
        if(mergeOption.isCallBackClose){
          _this.close(confirmTemplate);
        }
      })
    },
    close : function(target){
      target.remove();
    },
  }

  $.uiPopup = uiPopup


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
    console.log('init layer popup');
    var $btn = $('[data-layer]');
    $btn.on('click', function(){
      var _this = $(this),
        $layerEle = $(_this.data('layer'))
        $layerEle.layerOpen()
    })
    $('[data-layerBtnClose]').layerClose();
  }

 


  

  


  $(document).ready(function () {
    console.log("document.ready");

    initDocNavToggle();
    initFlatpickr();
    initLayer();

   // datepicker()






  });
})(jQuery);
