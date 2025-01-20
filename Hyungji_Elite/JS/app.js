// 헤더
const langBtn = document.querySelector('.lang_btn');
const langList = document.querySelector('.lang_list');
const shareBtn = document.querySelector('.share');
const shareMenu = document.querySelector('.share_menu');

const toggleShow = (btn, box, value = "") => {
    btn.addEventListener('click', () => {
        if (box.classList.contains(value)) {
            box.classList.remove(value);
        } else {
            box.classList.add(value);
        }
    });
};

toggleShow(langBtn, langList, "show_lang");
toggleShow(shareBtn, shareMenu, "show_lang");

// 사이트맵
const siteBtns = document.querySelectorAll('.site_btn');
const siteMap = document.querySelector('.site_map');

siteBtns.forEach((btn) => {
    toggleShow(btn, siteMap, "show_site");
});



// 비주얼 슬라이드
const pages = document.querySelectorAll('.pages');
const pageTextContent = document.querySelectorAll('.slide_text p');
const sldBtns = document.querySelectorAll('.sld_btn');

let currentPage = 0;
let loaded = false;
let roop;
let time = 8000;

const slide = () => {
    const target = pages[currentPage];
    const pageImg = target.children[0];

    setTimeout(() => {
        pageImg.classList.add("zoom");
    }, 200);

    for (let i = 0; i < pages.length; i++) {
        const item = pages[i];

        const thisPage = (target === item)
            ? item.classList.remove("hide_slide")
            : item.classList.add("hide_slide");
    }

    const currentIndex = (currentPage === 0)
        ? currentPage++
        : currentPage--;

    pageImg.classList.remove("zoom");
};

window.addEventListener('DOMContentLoaded', () => {
    loaded = true;
    slide();
    roop = setInterval(slide, time);
});

sldBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const currentIndex = currentPage;
        clearInterval(roop);

        if (!btn.classList.contains("pause_btn")) {
            pages.forEach((page, index) => {
                if (currentIndex === index) {
                    currentPage = index;
                    slide();
                }
            });

            roop = setInterval(slide, time);
        }

    });
});

// const slide = (pages, show, num) => {

//     const target = pages[currentPage];
//     const pageImg = target.children[0];
//     const timeOut = num * 1000;

//     setTimeout(() => {
//         pageImg.classList.add("zoom");
//         setTimeout(() => {
//             pageImg.classList.remove("zoom");
//         }, (timeOut + 1000));
//     }, 100);

//     pageTextContent.forEach((item) => {
//         const inner = item.children[0];
//         inner.style.transform = `translateY(${item.offsetHeight}px)`;
//         inner.style.transition = 'none';

//         setTimeout(() => {
//             inner.style.transform = `translateY(0)`;
//             inner.style.transition = '.6s ease-out';
//         }, 800);
//     });
    
//     setTimeout(() => {
//         if (target) {
//             target.classList.add(show);
//         }
        
//         pages.forEach((item) => {
//             if (target !== item) {
//                 item.classList.remove(show);
//             }
//         });

//         const currentIndex = (currentPage === 0) ? currentPage++ : currentPage--;
//         slide(pages, "hide_slide", 7);
        
//     }, timeOut);
// };

// window.addEventListener('DOMContentLoaded', slide(pages, "hide_slide", 6));

// // 슬라이드 버튼
// const sldBtns = document.querySelectorAll('.sld_btn');

// sldBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         if (!btn.classList.contains("pause_btn")) {
//             stoped = true;
//         }
//     });
// });