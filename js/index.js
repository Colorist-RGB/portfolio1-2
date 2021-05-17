//메인페이지
setInterval(function(){
    $('.mainPage .bg .firstName .depth1 p:first-child').animate({marginTop: '-107px'},150, function(){
        $(this).appendTo('.mainPage .bg .firstName .depth1').css({marginTop: '0px'})
    })
}, 3000)
setInterval(function(){
    $('.mainPage .bg .lastName .depth1 p:first-child').animate({marginLeft: '-183px'},150, function(){
        $(this).appendTo('.mainPage .bg .lastName .depth1').css({marginLeft: '0px'})
    })
}, 3000)
$('.mainPage .bg .guideBtn').on('click', function(){
    $('.mainPage').animate({marginTop: '20px', opacity: 0}, 500, function(){
        $('.secondPage').css({display: 'block'}).delay(500).animate({marginTop: '0px', opacity: 1}, 500)
    })
})

//두번째페이지
$('.secondPage .guideBtn').on('click', function(){
    $('.secondPage').animate({marginTop: '20px', opacity: 0}, 500, function(){
        $('.thridPage').css({display: 'block'}).delay(500).animate({marginTop: '0px', opacity: 1}, 500)
    })
})

//세번째페이지
// $('.secondPage .guideBtn').on('click', function(){
//     $('.secondPage').animate({marginTop: '20px', opacity: 0}, 500, function(){
//         $('.thirdPage').css({display: 'block'}).delay(500).animate({marginTop: '0px', opacity: 1}, 500)
//     })
// })

//세번째페이지 어바웃미 클릭제어
//어바웃미 클릭 시
function aboutClick(){
    $('.thridPage .depth2').removeClass('on2').addClass('on1')
    $('.thridPage .depth1').removeClass('on2').addClass('on1')
    $('.thridPage .aboutBtn').removeClass('on2').addClass('on1')
    $('.thridPage .portBtn').removeClass('on2').addClass('on1')
    $('.thridPage .depth1 .aboutP').text('Go back')

    //서브페이지 제어
    $('.thridPage .depth1 .leftUp').css({ display: 'block' }).animate({ opacity: 1, marginBottom: '-260px' },500)
    $('.thridPage .depth1 .rightUp').css({ display: 'block' }).delay(100).animate({ opacity: 1, marginBottom: '-140px' },500)
    $('.thridPage .depth1 .rightDown').css({ display: 'block' }).delay(200).animate({ opacity: 1, marginTop: '-260px' },500)
    $('.thridPage .depth1 .leftDown').css({ display: 'block' }).delay(300).animate({ opacity: 1, marginTop: '-140px' },500)
}
//포트폴리오 클릭 시
function portClick(){
    $('.thridPage .depth2').removeClass('on1').addClass('on2')
    $('.thridPage .depth1').removeClass('on1').addClass('on2')
    $('.thridPage .aboutBtn').removeClass('on1').addClass('on2')
    $('.thridPage .portBtn').removeClass('on1').addClass('on2')
    $('.thridPage .depth2 .portP').text('Go back')

    //서브페이지 제어
    $('.thridPage .depth2 .rightUp').css({ display: 'block' }).animate({ opacity: 1, marginBottom: '-260px' },500)
    $('.thridPage .depth2 .middleUp').css({ display: 'block' }).delay(100).animate({ opacity: 1, marginBottom: '-140px' },500)
    $('.thridPage .depth2 .leftUp').css({ display: 'block' }).delay(200).animate({ opacity: 1, marginBottom: '-140px' },500)
    $('.thridPage .depth2 .leftDown').css({ display: 'block' }).delay(300).animate({ opacity: 1, marginTop: '-260px' },500)
    $('.thridPage .depth2 .middleDown').css({ display: 'block' }).delay(400).animate({ opacity: 1, marginTop: '-140px' },500)
    $('.thridPage .depth2 .rightDown').css({ display: 'block' }).delay(500).animate({ opacity: 1, marginTop: '-140px' },500)
}
//어바웃미 뒤로가기 클릭 시
$('.aboutBtn').on('click',function(e){
    e.stopPropagation()
    $('.thridPage .depth2').removeClass('on1')
    $('.thridPage .depth1').removeClass('on1')
    $('.thridPage .aboutBtn').removeClass('on1')
    $('.thridPage .portBtn').removeClass('on1')
    $('.thridPage .depth1 .aboutP').text('About me')

    //서브페이지 제어    
    $('.thridPage .depth1 .leftDown').animate({ marginTop: '-160px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth1 .rightDown').animate({ marginTop: '-280px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth1 .rightUp').animate({ marginBottom: '-120px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth1 .leftUp').animate({ marginBottom: '-240px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })

    //어바웃미 leftUp 커버 복구
    $('.thridPage .depth1 .leftUp .cover').css({ display: 'block' }).animate({ opacity: 0.9, marginTop: 0 },500)

    //어바웃미 rightUp 커버 복구
    $('.thridPage .depth1 .rightUp .cover').css({ display: 'block' }).animate({ opacity: 0.9, marginTop: 0 },500)
    $('.thridPage .depth1 .rightUp .box2 .box4 .list1 .innerBox').removeClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list2 .innerBox').removeClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list3 .innerBox').removeClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list4 .innerBox').removeClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list5 .innerBox').removeClass('on1')

    //어바웃미 rightDown 커버 복구
    $('.thridPage .depth1 .rightDown .cover').css({ display: 'block' }).animate({ opacity: 0.9, marginTop: 0 },500)

    //어바웃미 leftDown 커버 복구
    $('.thridPage .depth1 .leftDown .cover').css({ display: 'block' }).animate({ opacity: 0.9, marginTop: 0 },500)
    $('.thridPage .depth1 .leftDown .box1 .html > div.html2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .css > div.css2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .java > div.java2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .jquery > div.jquery2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .react > div.react2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .illust > div.illust2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .photo > div.photo2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .inde > div.inde2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .php > div.php2').removeClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .sql > div.sql2').removeClass('on1')
})
//포트폴리오 뒤로가기 클릭 시
$('.portBtn').on('click',function(e){
    e.stopPropagation()
    $('.thridPage .depth2').removeClass('on2')
    $('.thridPage .depth1').removeClass('on2')
    $('.thridPage .aboutBtn').removeClass('on2')
    $('.thridPage .portBtn').removeClass('on2')
    $('.thridPage .depth2 .portP').text('Portfolio')

    //서브페이지 제어
    $('.thridPage .depth2 .rightDown').animate({ marginTop: '-160px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth2 .middleDown').animate({ marginTop: '-160px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth2 .leftDown').animate({ marginTop: '-280px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth2 .leftUp').animate({ marginBottom: '-120px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth2 .middleUp').animate({ marginBottom: '-120px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth2 .rightUp').animate({ marginBottom: '-240px', opacity: 0 },150, function(){ $(this).css({ display: 'none' }) })
})

//어바웃미 leftUp 커버 제거
$('.thridPage .depth1 .leftUp .cover').on('click',function(e){
    e.stopPropagation()
    $(this).animate({ marginTop: '-20px', opacity: 0, },500, function(){ $(this).css({ display: 'none' }) })
})
$('.thridPage .depth1 .leftUp .cover').hover(
    function(){
        $('.thridPage .depth1 .leftUp .cover p').addClass('on1')
    },
    function(){
        $('.thridPage .depth1 .leftUp .cover p').removeClass('on1')
    }
)

// 퍼센트 실시간으로 올라가는 이벤트
function percent(score, location){
    var count=0;
    var stop = setInterval(function(){
        count++
        if (count<=score) {
            $(location).find('.innerBox span').text(count+'%')
        } else {
            clearInterval(stop)
            return false
        }
    },30)
}
//어바웃미 rightUp 커버 제거
$('.thridPage .depth1 .rightUp .cover').on('click',function(e){
    e.stopPropagation()
    $(this).animate({ marginTop: '-20px', opacity: 0, },500, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth1 .rightUp .box2 .box4 .list1 .innerBox').addClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list2 .innerBox').addClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list3 .innerBox').addClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list4 .innerBox').addClass('on1')
    $('.thridPage .depth1 .rightUp .box2 .box4 .list5 .innerBox').addClass('on1')
    percent(57, '.list1')
    percent(56, '.list2')
    percent(61, '.list3')
    percent(81, '.list4')
    percent(74, '.list5')
})
$('.thridPage .depth1 .rightUp .cover').hover(
    function(){
        $('.thridPage .depth1 .rightUp .cover p').addClass('on1')
    },
    function(){
        $('.thridPage .depth1 .rightUp .cover p').removeClass('on1')
    }
)

//어바웃미 rightDown 커버 제거
$('.thridPage .depth1 .rightDown .cover').on('click',function(e){
    e.stopPropagation()
    $(this).animate({ marginTop: '-20px', opacity: 0, },500, function(){ $(this).css({ display: 'none' }) })
})
$('.thridPage .depth1 .rightDown .cover').hover(
    function(){
        $('.thridPage .depth1 .rightDown .cover p').addClass('on1')
    },
    function(){
        $('.thridPage .depth1 .rightDown .cover p').removeClass('on1')
    }
)

//어바웃미 leftDown 커버 제거
$('.thridPage .depth1 .leftDown .cover').on('click',function(e){
    e.stopPropagation()
    $(this).animate({ marginTop: '-20px', opacity: 0, },500, function(){ $(this).css({ display: 'none' }) })
    $('.thridPage .depth1 .leftDown .box1 .html > div.html2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .css > div.css2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .java > div.java2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .jquery > div.jquery2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box1 .react > div.react2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .illust > div.illust2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .photo > div.photo2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .inde > div.inde2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .php > div.php2').addClass('on1')
    $('.thridPage .depth1 .leftDown .box2 .sql > div.sql2').addClass('on1')
})
$('.thridPage .depth1 .leftDown .cover').hover(
    function(){
        $('.thridPage .depth1 .leftDown .cover p').addClass('on1')
    },
    function(){
        $('.thridPage .depth1 .leftDown .cover p').removeClass('on1')
    }
)

//포트폴리오 블럭들 호버 시 이벤트(보이게하기)
$('.thridPage .depth2 .rightUp .innerBox').mouseover(function(){
    $('.thridPage .depth2 .rightUp .outerBox').css({display: 'block'}).stop().animate({opacity: 1},100)
})
$('.thridPage .depth2 .middleUp .innerBox').mouseover(function(){
    $('.thridPage .depth2 .middleUp .outerBox').css({display: 'block'}).stop().animate({opacity: 1},100)
})
$('.thridPage .depth2 .leftUp .innerBox').mouseover(function(){
    $('.thridPage .depth2 .leftUp .outerBox').css({display: 'block'}).stop().animate({opacity: 1},100)
})
$('.thridPage .depth2 .leftDown .innerBox').mouseover(function(){
    $('.thridPage .depth2 .leftDown .outerBox').css({display: 'block'}).stop().animate({opacity: 1},100)
})
$('.thridPage .depth2 .middleDown .innerBox').mouseover(function(){
    $('.thridPage .depth2 .middleDown .outerBox').css({display: 'block'}).stop().animate({opacity: 1},100)
})
$('.thridPage .depth2 .rightDown .innerBox').mouseover(function(){
    $('.thridPage .depth2 .rightDown .outerBox').css({display: 'block'}).stop().animate({opacity: 1},100)
})

//포트폴리오 블럭들 호버 시 이벤트(사라지게하기)
$('.thridPage .depth2 .rightUp').siblings().mouseover(function(){
    $('.thridPage .depth2 .rightUp .outerBox').stop().animate({opacity: 0},100,function(){
        $(this).css({display: 'none'})
    })
})
$('.thridPage .depth2 .middleUp').siblings().mouseover(function(){
    $('.thridPage .depth2 .middleUp .outerBox').stop().animate({opacity: 0},100,function(){
        $(this).css({display: 'none'})
    })
})
$('.thridPage .depth2 .leftUp').siblings().mouseover(function(){
    $('.thridPage .depth2 .leftUp .outerBox').stop().animate({opacity: 0},100,function(){
        $(this).css({display: 'none'})
    })
})
$('.thridPage .depth2 .rightUp').siblings().mouseover(function(){
    $('.thridPage .depth2 .rightUp .outerBox').stop().animate({opacity: 0},100,function(){
        $(this).css({display: 'none'})
    })
})
$('.thridPage .depth2 .leftDown').siblings().mouseover(function(){
    $('.thridPage .depth2 .leftDown .outerBox').stop().animate({opacity: 0},100,function(){
        $(this).css({display: 'none'})
    })
})
$('.thridPage .depth2 .middleDown').siblings().mouseover(function(){
    $('.thridPage .depth2 .middleDown .outerBox').stop().animate({opacity: 0},100,function(){
        $(this).css({display: 'none'})
    })
})
$('.thridPage .depth2 .rightDown').siblings().mouseover(function(){
    $('.thridPage .depth2 .rightDown .outerBox').stop().animate({opacity: 0},100,function(){
        $(this).css({display: 'none'})
    })
})

// $('.thridPage .depth2 .rightUp .outerBox').mouseout(function(){
//     $('.thridPage .depth2 .rightUp .outerBox').stop().animate({opacity: 0},200,function(){
//         $(this).css({display: 'none'})
//     })
// })