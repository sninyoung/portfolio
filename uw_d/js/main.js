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

    /***상단메뉴 클릭하면 해당 컨텐츠로 이동**/
    let menuName = $('.header')  // 상단에 고정할 메뉴 영역 선택자
    let menuItem = $('.header ul li') // data-link 값을 준 클릭할 요소의 선택자
    let sectionName
    let moveTop
    let areaTop
    let areaH
    let areaName
    let scrollTop
    menuItem.on('click', function(){
        sectionName = $(this).attr('data-link')
        moveTop = $('*[data-menu="'+sectionName+'"]').offset().top - menuName.height()
        $('html, body').animate({
            scrollTop : moveTop
        }, 500)
    })
    menuChk()
    $(window).scroll(function(){
        menuChk()
    })
    function menuChk(){
        scrollTop = $(window).scrollTop()
        $.each($('*[data-menu]'), function(idx, item){
            areaTop = $('*[data-menu]').eq(idx).offset().top
            areaH = $('*[data-menu]').eq(idx).height()
            areaName = $('*[data-menu]').eq(idx).attr('data-menu')
            if((scrollTop >= areaTop - menuName.height()*1.2) && (scrollTop < areaTop + areaH - menuName.height())){
                menuItem.removeClass('active')
                menuItem.siblings('[data-link="'+areaName+'"]').addClass('active')
            }else if(scrollTop < $('*[data-menu]').first().offset().top){
                menuItem.removeClass('active')
            }else if(scrollTop > $('*[data-menu]').last().offset().top + $('*[data-menu]').last().height()){
                menuItem.removeClass('active')
            }
        });
    }

    gsap.from(".portfolio .writing span", {
        duration: 4, 
        text: ""
    }) //글자 타이핑하는 effect

})//$(document).ready

