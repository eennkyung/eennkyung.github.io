window.addEventListener("scroll", function(event) {
    /*
     * 유저의 스크롤을 가로챔
     * 유저가 스크롤하는동안 무언가를 하려면... 뭘 알면 좋을까?
     * 현재 스크롤 위치
     */
    var scrollTop = window.pageYOffset;
    /*
     * 현재 스크롤 위치 : event.pageY
     * 해당 요소가 페이지 상단부터 얼마나 떨어져있을까? : box2.offsetTop
     */

    /*
     * 현재 화면의 높이 : window.innerHeight / 비율을 나누면..
     */

    /*
     * 실제 스크롤 위치 (인간의 눈에 맞춘)
     */
    var realScroll = scrollTop + (window.innerHeight / 2.5 * 2);

    var boxs = document.querySelectorAll('.gallery');
    boxs.forEach(function(o) {
        var boxTop = o.offsetTop;
        if(realScroll > boxTop) {
            o.classList.add("animated");
        } else {
            o.classList.remove("animated");
        }
    })
})/**
 * Created by eennkyung on 14/10/2017.
 */
