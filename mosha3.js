$(function(){

/*ハンバーガー*/

　$('.hunber').click(function() {
        $(this).toggleClass('nav-open');
        if($(this).hasClass('nav-open')) {
            $('.hunber-answer').slideUp();
        } else {
             $('.hunber-answer').slideDown();       
        }
    });
 

});

/*最後に右下の□を作る。*/
$(window).scroll(function (){
// 最上部から現在位置までの距離を取得して、変数[now]に格納
var now = $( window ).scrollTop() ;
var position = $('.eight-container').offset().top;


// 最上部から現在位置までの距離(now)が100px以上だったら
if( now > 100 )
{
  // [#page-top]をゆっくりフェードインする
  $( '.pagetop' ).fadeIn( "slow" ) ;
}

// 100px以下だったら
else
{
  // [#page-top]をゆっくりフェードアウトする
  $( '.pagetop' ).fadeOut( 'slow' ) ;
}
if( now > position + 15)
{
  $( '.pagetop ' ).addClass('block');
}

else
{
  $( '.pagetop' ).removeClass('block');
}
  });

 /*この下にスクロールの機能を追加していきます*/

  $('.pagetop').click(function(){
    $('html, body').animate({
       'scrollTop': 0
    },600);

});

