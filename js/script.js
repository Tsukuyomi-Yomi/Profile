$(function () {
    $('.hamburger').click(function () {
        // メニューの開閉状態を切り替える
        $('.menu').toggleClass('open');

        // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
        $(this).toggleClass('active');
    });
});

$(function () {
    function end_loader() {
        $('.loader').fadeOut(800);
    }
    $(window).on('load', function () {
        setTimeout(function () {
            end_loader();
        }, 3000)
    })
})