/* main.js*/
//console.log('js파일 연결됨')

$(document).ready(function(){

    /************************ 공통요소 :: 시작 ***********************/
    let scrolling = $(window).scrollTop() //현재 스크롤 된 값
    let window_h = $(window).height()//브라우저 높이
    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
    })
    $(window).resize(function(){
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
    })
    /************************ 공통요소 :: 종료 ***********************/


    gsap.from(".portfolio .writing span", {
        duration: 1, 
        text: ""
    }) //글자를 감싸는 요소

})//$(document).ready