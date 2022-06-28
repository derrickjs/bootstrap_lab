$(document).ready(function(){

$('li').hover(function(){
    $(this).children().css("color", "#f79f79");
},
function(){
    $(this).children().css("color", "#5b5941");
})


/*  taken out for bootstrap




$('.btn1').click(function(){
    $(".img").css({width:"40%"});
})

$(".btn2").click(function(){
    $(".img").css({width:"25%"});   
});

$(".btn3").click(function(){
    $(".img").css({width:"15%"});   
});



*/




$('.foot').click(function(){
    alert("All rights reserved. Content is the intellectual property of Derrick Stahlman. Please contact for any questions about using content.")
});


$(".web").hover(function(){
    $(this).css("font-size", "1.5em"), function(){
        $(this).css("font-size", "1em")};



});

$('.web').hover(function(){
    $(this).children().css("font-size", "1.5em");
},
function(){
    $(this).children().css("font-size", "1.2em");
})


$('#next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
    }
})

$('#prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
    }
})

});
