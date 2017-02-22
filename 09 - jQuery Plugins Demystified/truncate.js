(function(defn) {
  defn(jQuery)
})(function($) {

  var defaults = {
    numberOfChars: 5,
    eol: '...'
  }

  $.fn.truncate = function(opts) {
    var options = $.extend({}, defaults, opts)
    console.log(options)
    return this.each(function(i, el) {
      var $para = $(el)

      var trunc = $para.text().substr(0, options.numberOfChars);
      $para.text(trunc + options.eol)
    })
  }
})
