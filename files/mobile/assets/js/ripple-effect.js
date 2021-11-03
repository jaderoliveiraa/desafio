//jQuery time
var _this, ink, d, x, y;
$("*[ripple]").click(function (e) {
    _this = $(this);
    //create .ink element if it doesn't exist
    if (_this.find(".ink").length == 0)
        _this.prepend("<span class='ink'></span>");

    ink = _this.find(".ink");
    //incase of quick double clicks stop the previous animation
    ink.removeClass("animate");

    //set size of .ink
    if (!ink.height() && !ink.width())
    {
        //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
        d = Math.max(_this.outerWidth(), _this.outerHeight());
        ink.css({height: d, width: d});
    }

    //get click coordinates
    //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
    x = e.pageX - _this.offset().left - ink.width() / 2;
    y = e.pageY - _this.offset().top - ink.height() / 2;

    //set the position and add class .animate
    ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");
});