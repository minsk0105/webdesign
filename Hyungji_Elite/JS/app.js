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

    pageTextContent.forEach((text) => {
        const innerTxt = text.children[0];
        
        innerTxt.style.transform = 'translateY(100%)';
        innerTxt.style.transition = 'none';

        setTimeout(() => {
            innerTxt.style.transform = 'translateY(0)';
            innerTxt.style.transition = '.8s ease-out';
        }, 1000);
    });

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