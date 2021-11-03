
$('.actionButton').click(function () {
    if($(this).hasClass('open')){
        $(this).removeClass('open');
        $(this).find('.floatingText').removeClass('show');
        $('.subActionButton').removeClass('display').hide();
    }else{
        $(this).addClass('open');
        $(this).find('.floatingText').addClass('show');
        $('.subActionButton').addClass('display').show();
    }
});

$('.subActionButton').click(function (){
    $('.actionButton').removeClass('open');
    $('.subActionButton').removeClass('display').hide();
});