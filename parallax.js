$(function() {

  /**
   * Конструктор Parallax
   * @constructor
   */
  var Parallax = function (container, options) {
    this._container = $(container);
    this._defaultOptions = {
      speed: 0.5
    };

    if( options ) {
      $.extend( this._defaultOptions, options );
    }

    this._initParallax();
  };

  Parallax.prototype._initParallax = function () {

    var speed = this._defaultOptions.speed;
    var container = this._container;

    $(window).scroll(function() {
      var scrollHeight = $("body").scrollTop();
      var yPos =  scrollHeight*speed;
      container.css("transform", "translateY(-"+ yPos +"px)");
    });

  };

  window.Parallax = Parallax;

});
