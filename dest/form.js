///input
$(document).ready(function() {
    $('.btnContact').click(function() {
        let name = $("input[name='name']").val();
        let email = $("input[name='email']").val();
        let telephone = $("input[name='telephone']").val();
        let content = $("textarea[name='content']").val();
        let errors = {
            name: [],
            email: [],
            telephone: []
        }
        if (name == "") {
            errors.name.push("Ten khong duoc de trong");
        } else {
            if (name.length <= 2) {
                errors.name.push("Ten yeu cau phai lon hon 2 ky tu");
            }
        }
        if (email == "") {
            errors.email.push("Email khong duoc de trong");
        } else {
            if (!IsEmail(email)) {
                errors.email.push("Email sai!");
            }
        }
        if (telephone == "") {
            errors.telephone.push("SDT khong duoc de trong");
        } else {
            if (telephone.length < 9 || telephone.length > 11) {
                errors.telephone.push("SDT khong dung.Vui long nhap lai!");
            }
        }
        let success = true;
        for (let index in errors) {
            // console.log(errors[index]);
            if (errors[index].length > 0) {
                success = false;
                $(`input[name=${index}]`).parent().find('.error').remove();
                let htmlError = `<div class="error">${errors[index][0]}</div>`;
                $(`input[name=${index}]`).parent().append(htmlError);
                // let htmlErrors = `<div class="error">${error[index][0]}</div>`;
                // $(`input[name=${index}]`).parent().append(htmlErrors);
            }
        }
        if (success == true) {
            alert("thanh cong");
        } else {
            alert("kiem tra lai thong tin!");
        }
        // console.log(errors);
    });

    function IsEmail(stringEmail) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(stringEmail)) {
            return false;
        } else {
            return true;
        }
    }

});





//nav menu
$(document).ready(function() {
    let btnMenu = $('.header__menu');
    let navToggle = $('.navtoggle');
    let overlay = $('.overlay_nav');
    btnMenu.click(function(e) {
        console.log('ok1');
        e.stopPropagation();
        navToggle.find('.nav-menu').toggleClass('active');
        overlay.toggleClass('active');
        btnMenu.toggleClass('rotate_btn');
        $('main').toggleClass('active');

    })
    $(document).click(function() {
        console.log('ok2');
        $('.nav-menu').removeClass('active');
        $('.overlay_nav').removeClass('active');
        $('main').removeClass('active');
    });
})




//Input Flie
$(document).ready(function() {
    let textFlie = $('.inputflie .textflie');
    let inputFile = $('.inputflie input')
    inputFile.on('change', function() {
        console.log("ok");
        console.log($(this).val());
        let fileName = $(this).val().match(/[^\\/]*$/)[0];
        textFlie.html(fileName);
    });

});


//Accordion
$(document).ready(function() {
    let accordionTitle = $('.accordion_item .accordion_item-title');
    accordionTitle.on('click', function() {
        $(this).next().stop().slideToggle(200);
        $(this).closest('.accordion_item').toggleClass('active');
        $(this).closest('.accordion_item').siblings('.active').removeClass('active').find('.accordion_item-text').stop().slideUp(200);
    });
});

// progress slider flickity


var $carousel = $('.carousel').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: false,
    wrapAround: true,
    fullscreen: true,
    lazyLoad: 2,
});

var $progressBar = $('.progress-bar');

$carousel.on('scroll.flickity', function(event, progress) {
    progress = Math.max(0, Math.min(1, progress));
    $progressBar.width(progress * 100 + '%');
});