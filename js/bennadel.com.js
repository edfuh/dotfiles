(function() {

  $(function() {
    var css;
    $('#who-is-ben-nadel, #site-photography').remove();
    css = "body {\n  background-position-y : -290px\n}\n\ndiv#site-header {\n  height : 135px\n}\n\nul#primary-navigation {\n  top : 90px\n}";
    return $('head').append("<style>" + css + "</style>");
  });

}).call(this);
