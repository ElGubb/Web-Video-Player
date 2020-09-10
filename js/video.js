$(".optionVid").click(function() {
    var actVid = placeholderVid.src;
    $("#placeholderVid").attr('src', this.src);
    $(this).attr('src', actVid);

});

$(document).ready(function() {
    $(".optionVid").hover(function() {
        $(this)[0].play();

    }, function() {
        var el = $(this)[0];
        el.pause();
        el.currentTime = 0;
    });
});