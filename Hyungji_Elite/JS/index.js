// header
const languageBtn = document.querySelector('.language_btn');
const langList = document.querySelector('.lang_list');
const chevron = languageBtn.children[1];
const shareBtn = document.querySelector('.share_btn');
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

toggleShow (languageBtn, langList, "show_btn");
toggleShow (shareBtn, shareMenu, "show_btn");
toggleShow (languageBtn, chevron, "rotate_chevron");

// aside
const asideBtn = document.querySelectorAll('.aside_btn');
const aside = document.querySelector('aside');

asideBtn.forEach((btn) => toggleShow (btn, aside, "show_aside"));

// visual
const outer = document.querySelector('.visual');
const pages = document.querySelectorAll('.slide');
const slideText = document.querySelectorAll('.slide_text p');

let currentPage = 0;
let time = 8000;
let roop;

let dragging = false;
let startX = 0;
let endX = 0;

// -sliding
const sliding = () => {
    const target = pages[currentPage];
    const slideImg = target.children[0];

    setTimeout(() => {
        slideImg.classList.add("zoom");
    }, 200);

    slideText.forEach((p) => {
        const inner = p.children[0];
        inner.style.transform = 'translateY(100%)';
        inner.style.transition = 'none';

        setTimeout(() => {
            inner.style.transform = 'translateY(0)';
            inner.style.transition = '.8s ease-out';
        }, 600);
    });

    for (let i = 0; i < pages.length; i++) {
        const item = pages[i];
        const thisPage = (target === item)
            ? item.classList.remove("hide_slide")
            : slideImg.classList.remove("zoom") / item.classList.add("hide_slide");
    }

    const currentIndex = (currentPage === 0)
        ? currentPage++
        : currentPage--;
};

window.addEventListener('DOMContentLoaded', () => {
    sliding();
    roop = setInterval(sliding, time);
});

// -drag slide
outer.addEventListener('mousedown', (event) => {
    dragging = true;

    if (dragging) {
        startX = event.offsetX;
    }
});

outer.addEventListener('mousemove', () => {
    if (!dragging) return;
});

outer.addEventListener('mouseup', (event) => {
    dragging = false;
    endX = event.offsetX;

    if (!dragging) {
        clearInterval(roop);
        let range;

        if (startX < endX) {
            range = endX - startX;
        } else {
            range = startX - endX;
        }
        
        if (range >= 250) {
            sliding();
            roop = setInterval(sliding, time);
        }
    }
});

// -slide btn
const slideBtn = document.querySelectorAll('.animation_btn');

slideBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const currentIndex = currentPage;
        clearInterval(roop);

        if (!btn.classList.contains("pause_btn")) {
            pages.forEach((item, index) => {
                if (currentIndex === index) {
                    currentPage = index;
                    sliding();
                }
            });
            
            roop = setInterval(sliding, time);
        } else {
            const play = btn.children[0];
            const paused = btn.children[1];

            if (paused.classList.contains("hide_pause")) {
                paused.classList.remove("hide_pause");
                play.classList.add("hide_pause");
            } else {
                roop = setInterval(sliding, time);
                paused.classList.add("hide_pause");
                play.classList.remove("hide_pause");
            }
        }
    });
});