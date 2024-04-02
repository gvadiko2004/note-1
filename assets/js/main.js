$(document).ready(function () {
    var circleContent = $(".circle-content");

    var createPlusOne = function () {
        var plusOne = $("<div class='plus-one'>+1</div>");
        circleContent.append(plusOne);
        var circleContentWidth = circleContent.width();
        var circleContentHeight = circleContent.height();
        var randX = Math.random() * (circleContentWidth - 40);
        var randY = Math.random() * (circleContentHeight - 40);
        plusOne.css({
            position: "absolute",
            transform: "scale(1.2)",
            left: randX + "px",
            top: randY + "px",
            opacity: 0
        });
        plusOne.animate({
            opacity: 1,
            scale: 1.1,
        }, 500)
        .fadeOut(600, function () {
            $(this).remove();
        });

        if ("vibrate" in navigator) {
            navigator.vibrate(100);
        }
    };

    circleContent.on('click', function () {
        createPlusOne();
    });
});
