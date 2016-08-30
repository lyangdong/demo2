/**
 * Created by liu on 2016/6/13.
 */
$(function(){
    $('.center-nav li').click(function(){
        var index = $(this).index();
        $('.details-box').animate({'margin-left':-785*index},0)
        $('.center-nav li').removeClass('active');
        $('.center-nav li').eq(index).addClass('active');
    })
    $(".footer-images li").mouseenter(function(){
        var index = $(this).index();
        $('.footer-images li').removeClass('red-border');
        $('.footer-images li').eq(index).addClass('red-border')
    })
})