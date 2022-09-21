
$(document).ready(function(){
    $('.oblozhka_slider').slick({
        autoplay: true,
        //autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 2000,
        dots: true,
        arrows: false


    });
});


$(document).ready(function(){
    $('.ac_slider').slick({
        autoplay: true,
        swipe: true,
        //autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        arrows: false,

        centerMode: true,


    });
});





$(document).ready(function(){
    $('.content_slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        // fade: true,
        // speed: 2000,
        dots: false,
        arrows: false,
        vertical: true,
        // prevArrow: $('.main_activity_slider_arrow_left'),
        // nextArrow: $('.main_activity_slider_arrow_right'),

    });
});



let noteCount = 0;

function noteOpen(num) {
    //let note = elem.parent();
    if(noteCount === 0){
        noteCount = 1;
        $('.main-reestr-is .content_note_' + num + ' .note_row_1').css({
            'margin-bottom': '0'
        });
        $('.main-reestr-is .content_note_' + num + ' .note_row_2').css({
            'display': 'flex'
        });
        $('.main-reestr-is .content_note_' + num + ' .note_row_3').css({
            'display': 'flex'
        });
        $('.main-reestr-is .content_note_' + num + ' .note_button svg').css({
            'transform': 'rotate(180deg)'
        });
    }
    else{
        let display = $(`.main-reestr-is .content_note_${num} .note_row_2`).css('display');
        if(display === 'none'){
            $('.main-reestr-is .note_row_1').css({
                'margin-bottom': '20px'
            });
            $('.main-reestr-is .note_row_2').css({
                'display': 'none'
            });
            $('.main-reestr-is .note_row_3').css({
                'display': 'none'
            });
            $('.main-reestr-is .note_button svg').css({
                'transform': 'rotate(0deg)'
            });
            $('.main-reestr-is .content_note_' + num + ' .note_row_1').css({
                'margin-bottom': '0'
            });
            $('.main-reestr-is .content_note_' + num + ' .note_row_2').css({
                'display': 'flex'
            });
            $('.main-reestr-is .content_note_' + num + ' .note_row_3').css({
                'display': 'flex'
            });
            $('.main-reestr-is .content_note_' + num + ' .note_button svg').css({
                'transform': 'rotate(180deg)'
            });
        }
        else{
            noteCount = 0;
            $('.main-reestr-is .content_note_' + num + ' .note_row_1').css({
                'margin-bottom': '20px'
            });
            $('.main-reestr-is .content_note_' + num + ' .note_row_2').css({
                'display': 'none'
            });
            $('.main-reestr-is .content_note_' + num + ' .note_row_3').css({
                'display': 'none'
            });
            $('.main-reestr-is .content_note_' + num + ' .note_button svg').css({
                'transform': 'rotate(0deg)'
            });
        }
    }
}

let buttonPressed = 0;

function resultButton() {
    if(buttonPressed){
        buttonPressed = 0;
        $('.main-reestr-is .button_content').css({
            'display': 'none'
        });
    }
    else{
        buttonPressed = 1;
        $('.main-reestr-is .button_content').css({
            'display': 'flex'
        });
    }
}


