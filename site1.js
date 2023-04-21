$(document).ready(function(){
    $('.tabMenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return true;
    });

    $('#imgSlideBox a:gt(0)').hide();
    var i = 0;
    function slideList() {
        var list = $('#imgSlideBox a');
        list.eq(i).fadeIn().delay(1000).fadeOut(function(){
            i++;
            if(i % list.length == 0) {
                i = 0;
            }
            slideList();
        });
    }
    slideList();

    $('#pop').click(function(){
        $('#popup').addClass('active');
    });
    $('#btn').click(function(){
        $('#popup').removeClass('active');
    });
});