//add background Header
let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightHeader = header.clientHeight;
let heightSlider = slider.clientHeight;

function backgroundHeader() {
    if (window.pageYOffset > heightSlider - heightHeader) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}


//back top top
$(document).ready(function() {
    let btnBackToTop = $('.backtotop');
    let heightWindown = $(window).height();

    function scrollToTop() {
        if ($(window).scrollTop() > heightSlider - heightHeader) {
            btnBackToTop.addClass('active');
        } else {
            btnBackToTop.removeClass('active');
        }
    }

    btnBackToTop.click(function() {
        // $("html, body").animate({ scrollTop: 0 }, "slow");
        // return false;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    $(window).scroll(function() {
        backgroundHeader()
        scrollToTop();
    });
});
// let btnBackToTop = document.querySelector('.backtotop');
// let heightWindown = window.innerHeight;

// function scrollToTop() {
//     if (window.pageYOffset > heightSlider - heightHeader) {
//         btnBackToTop.classList.add('active');
//     } else {
//         btnBackToTop.classList.remove('active');
//     }
// }

// btnBackToTop.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });


// document.addEventListener('scroll', function() {
//     backgroundHeader();
//     scrollToTop()
// });


//btnmenu  
let btnMenu = document.querySelector('.btnmenu');
let rotate = document.querySelector('.btnmenu');
let nav = document.querySelector('.nav');
let body = document.querySelector("body");

btnMenu.addEventListener('click', function() {

    rotate.classList.toggle('new__rotate');

    nav.classList.toggle("menu__responsive");

    body.classList.toggle('active');
});

window.addEventListener('resize', function() {
    let windowWidth = this.window.innerWidth;
    // console.log(windowWidth);
    if (windowWidth > 767) {
        rotate.classList.remove('new__rotate');
        nav.classList.remove('menu__responsive');
    }
});

//LANG_OPTION
let lang = document.querySelector('.lang');
let langCurrent = document.querySelector('.lang .lang__current span');
let langItem = document.querySelectorAll('.lang .lang__option a');

lang.addEventListener('click', function(e) {
    e.stopPropagation();
    lang.classList.toggle('active');
});

document.addEventListener('click', function() {
    lang.classList.remove('active');
});

langItem.forEach(function(item) {
    // console.log(item)
    item.addEventListener('click', function() {
        // console.log(item)
        let langText = item.textContent;
        // console.log(langText);
        let langCurrentSpan = langCurrent.textContent;
        // console.log(langCurrentSpan);
        langCurrent.innerHTML = langText;
        langText.innerHTML = langCurrentSpan;

    });
});


//tag 1

$(document).ready(function() {
    let tagText = $('.news__tags .tag');
    let tagGrid = $('.news__grid');
    tagText.on('click', function(e) {
        e.preventDefault();
        let i = $(this).index();
        console.log(i);
        $(this).addClass('active').siblings().removeClass('active');
        tagGrid.eq(i).addClass('active').siblings().removeClass('active');
    });
});


//tag 2

// $(document).ready(function() {
//     let tagText = $('.news__tags .tag');
//     let tagGrid = $('.news__grid');
//     tagText.click(function() {
//         let data = $(this).attr('data-id');

//         tagText.removeClass('active');
//         $(this).addClass('active');
//         tagGrid.removeClass('active');

//         $('.news__grid' + '[data_item="' + data + '"]').addClass('active');
//     })

// });


//tag 3  javvascript

// let tagText = document.querySelectorAll('.news__tags .tag');
// let tagGrid = document.querySelectorAll('.news__grid');
// tagText.forEach(function(item, index) {
//     // console.log(item);
//     item.addEventListener('click', function() {
//         let tagID = index + 1;
//         console.log(tagID);
//         tagText.forEach(function(tag) {
//             tag.classList.remove('active');
//         });
//         tagGrid.forEach(function(tags) {
//             tags.classList.remove('active');
//         });
//         item.classList.add('active');
//         document.querySelector('.news__grid-' + tagID).classList.add('active');
//     });
// });



// scroll auto menu - > section
let menu = document.querySelectorAll('.menu li a');
// console.log(menu);
let headerOffSetHeight = document.querySelector('header').offsetHeight;
let sections = [];

function removeActive() {
    menu.forEach(function(menu_item, menu_index) {
        menu_item.classList.remove('active');
    });
}

menu.forEach(function(item, index) {
    // console.log(item);
    let href = item.getAttribute('href');
    // console.log(href);
    let nameHref = href.replace('#', '');
    let section = document.querySelector('.' + nameHref);
    // console.log(section);
    sections.push(section);

    item.addEventListener('click', function(e) {
        e.preventDefault();

        window.scrollTo({
            top: section.offsetTop - headerOffSetHeight + 1,
            behavior: 'smooth'
        });
        removeActive();
        item.classList.add('active');
    });
});

// console.log(sections);
window.addEventListener('scroll', function() {
    let positionScroll = window.pageYOffset;
    // 500
    sections.forEach(function(item, index) {
        if (positionScroll > item.offsetTop - headerOffSetHeight && positionScroll < item.offsetTop + item.offsetHeight) {
            removeActive();
            menu[index].classList.add('active');
        } else {
            menu[index].classList.remove('active');
        }
    });
});

//slider





$(document).ready(function() {
    let $carousel = $('.slider__item-wrap');
    $carousel.flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        lazyLoad: 1,
        // pageDots: false,
        on: {
            ready: function() {
                let dotted = $('.flickity-page-dots');
                let pading = $('.paging__dotted')
                dotted.appendTo(pading);
            },
            change: function(index) {
                let number = $('.paging__number');
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0));
            }
        }
    });
    $('.control__btn.--prev').on('click', function() {
        $carousel.flickity('previous');
    });
    $('.control__btn.--next').on('click', function() {
        $carousel.flickity('next');
    });

});




// let listItemSlider = document.querySelectorAll('.slider__item');
// let number = document.querySelector('.slider__bottom .paging__number');
// let dot_li = document.querySelectorAll('.slider__bottom .paging__dotted li');
// let currentSlider = 0;
// listItemSlider.forEach(function(itemsSlider, index) {
//     if (itemsSlider.classList.contains('active')) {
//         currentSlider = index;
//     }
// });

// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }

// //default active
// showNumber(currentSlider + 1);
// dot_li[currentSlider].classList.add('active');


// document.querySelector('.control .--next').addEventListener('click', function() {
//     if (currentSlider < listItemSlider.length - 1) {
//         goto(currentSlider + 1);
//         //0
//         // listItemSlider[currentSlider].classList.remove('active');
//         //0
//         // listItemSlider[currentSlider + 1].classList.add('active');
//         //0
//         // currentSlider++;
//         //1
//     } else {
//         goto(0);
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[0].classList.add('active');
//         // currentSlider = 0;
//     }


// });

// document.querySelector('.control .--prev').addEventListener('click', function() {
//     if (currentSlider > 0) {
//         goto(currentSlider - 1);
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[currentSlider - 1].classList.add('active');
//         // currentSlider--;
//     } else {
//         goto(listItemSlider.length - 1)
//             // listItemSlider[currentSlider].classList.remove('active');
//             // listItemSlider[listItemSlider.length - 1].classList.add('active');
//             // currentSlider = listItemSlider.length - 1;
//     }
// });

// function goto(index) {
//     listItemSlider[currentSlider].classList.remove('active');
//     listItemSlider[index].classList.add('active');
//     dot_li[currentSlider].classList.remove('active');
//     dot_li[index].classList.add('active');
//     currentSlider = index;
//     showNumber(currentSlider + 1);
// }

// dot_li.forEach(function(li, index) {
//     li.addEventListener('click', function() {
//         goto(index);
//     });
// });


//popup video
$(document).ready(function() {
    let btnButton = $('.play_button');
    var popupVideo = $('.popup__video');
    let close = $('.popup__video .close');
    var iframe = $('.popup__video iframe');
    var iframe_attr = iframe.attr('src');
    $('.videos__item').each(function() {
        const play_button = $(this).find('.play_button');
        play_button.click(function(e) {
            // console.log("ok1");
            e.stopPropagation();
            var id = $(this).attr('data-video-id');
            var attr_id = iframe_attr + id;
            popupVideo.css({
                'display': 'block'
            });
            iframe.attr('src', attr_id);
        })
    })
    $('.close').click(function() {
        iframe.attr('src', '');
        popupVideo.css({
            'display': 'none'
        });
    });
    $(document).click(function() {
        // console.log("ok2");
        popupVideo.css({
            'display': 'none'
        });
    });
});

// let btnButton = document.querySelectorAll('.play_button');
// let popupVideo = document.querySelector('.popup__video');
// let close = document.querySelector('.popup__video .close');
// let iframe = document.querySelector('.popup__video iframe');

// btnButton.forEach(function(item) {
//     item.addEventListener('click', function() {
//         popupVideo.style.display = 'block';
//         let videoId = item.getAttribute('data-video-id');
//         iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
//     });
// });

// close.addEventListener('click', function(element) {
//     element.stopPropagation();
//     iframe.setAttribute('src', '');
//     popupVideo.style.display = 'none';
// })
// document.querySelector('.popup__video').addEventListener('click', function() {
//     iframe.setAttribute('src', '');
//     popupVideo.style.display = 'none';
// });



//photo Swipe

$(document).ready(function() {
    function photoGallery() {
        var initPhotoSwipeFromDOM = function(gallerySelector) {
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;
                for (var i = 0; i < numNodes; i++) {
                    figureEl = thumbElements[i]; // <figure> element
                    if (figureEl.nodeType !== 1) {
                        continue;
                    }
                    linkEl = figureEl.children[0]; // <a> element
                    size = linkEl.getAttribute('data-size').split('x');
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };
                    if (figureEl.children.length > 1) {
                        item.title = figureEl.children[1].innerHTML;
                    }
                    if (linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    }
                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }
                return items;
            };
            var closest = function closest(el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn));
            };
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                var eTarget = e.target || e.srcElement;
                var clickedListItem = closest(eTarget, function(el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });
                if (!clickedListItem) {
                    return;
                }
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue;
                    }
                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
                if (index >= 0) {
                    openPhotoSwipe(index, clickedGallery);
                }
                return false;
            };
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                    params = {};
                if (hash.length < 5) {
                    return params;
                }
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
                if (params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
                return params;
            };
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
                items = parseThumbnailElements(galleryElement);
                options = {
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function(index) {
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();

                        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                    },
                    showAnimationDuration: 0,
                    hideAnimationDuration: 0
                };
                if (fromURL) {
                    if (options.galleryPIDs) {
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
                if (isNaN(options.index)) {
                    return;
                }
                if (disableAnimation) {
                    options.showAnimationDuration = 0;
                }
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            };
            var galleryElements = document.querySelectorAll(gallerySelector);
            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i + 1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
            var hashData = photoswipeParseHash();
            if (hashData.pid && hashData.gid) {
                openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
            }
        };

        initPhotoSwipeFromDOM('.gallery__grid');

    }
    photoGallery();
});


//photo

$(document).ready(function() {

    $('.photo').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
    });
})



//scroll progress
// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}