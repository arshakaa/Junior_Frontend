
$(document).ready(function(){
    $(".grid").click(function(){
        if($(".grid").length == 3) {
            $clone = $(this).clone(true);
            $clone.appendTo("body");
            $('<div class="overlay">&nbsp;</div>').prependTo($('body'));
            $('<img id="cross" src="./img/cross.svg"/>').appendTo($clone);
            $clone.css("background-color", "#ffffff");
            $clone.width(300).height(350);
            $clone.css('background', '1');

            $.fn.center = function () {
                this.css("position","absolute");
                this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                    $(window).scrollTop()) + "px");
                this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                    $(window).scrollLeft()) + "px");
                return this;
            };
            $clone.center();
        }

        let fheight = $( document ).height();
        $(".overlay").height(fheight);

        $('#cross').click(function(){
            $(this).data('clicked', true);
        });

        if($('#cross').data('clicked')) {
            $(".overlay").remove();
            $($clone).remove();
        }

        $('body').click( function(e){

                if (!$(e.target).is(".grid") && !$(e.target).is($(".grid").children()) && !$(e.target).is(".col")) {
                    $(".overlay").remove();
                    $($clone).remove();
                }
        });
    });
});