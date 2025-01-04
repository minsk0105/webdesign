// 헤더
const header = document.getElementById('header');
const fixMore = document.querySelector('.fix_more');
let currentScrollTop = window.scrollY;

function scrHeader(event) {
    if (event) {
        if (currentScrollTop < this.window.scrollY) {
            header.classList.add("hide_header");
        } else {
            header.classList.remove("hide_header");
        }
        currentScrollTop = this.window.scrollY;

        if (this.window.scrollY > 1000) {
            fixMore.classList.add("hide_fixMore");
        } else {
            fixMore.classList.remove("hide_fixMore");
        }
    }
};

/* 섹션 애니메이션 박스 */
const animationBox = document.querySelector('.animation_box');
const playLine = document.querySelector('.play_line');
const showReel = document.querySelector('.showreel');

function scrSection(event) {
    if (event) {
        if (this.window.scrollY > 150) {
            const offsetTop = animationBox.getBoundingClientRect().top;

            if (this.window.scrollY > 150 && this.window.scrollY < 1000) {
                animationBox.classList.add("scrolled");
                const boxSize = 1.5 + (this.window.scrollY / 1000);
                const opVideo = 0.1 +(this.window.scrollY / 1000);
                animationBox.style.transform = `scale(${boxSize}) translate(85%, 180%)`;
                showReel.style.opacity = opVideo;
                showReel.style.zIndex = '2';
                playLine.style.visibility = 'hidden';
            }
        } else {
            animationBox.classList.remove("scrolled");
            animationBox.style.transform = `scale(1)`;
            showReel.style.opacity = '0';
            playLine.style.visibility = 'visible';
        }
    }
};

// 메인 섹션 비디오 리스트
const mpBoxes = document.querySelectorAll('.main_list');

function srcList(event) {
    if (event) {
        mpBoxes.forEach(function(box) {
            if (this.window.scrollY > 150) {
                if (this.window.scrollY > 150 && this.window.scrollY < 1000) {
                    const scr = this.window.scrollY / 2;

                    if (box.classList.contains("one_mp")) {
                        box.style.transform = `translateX(${-110 + scr}px)`;
                    } else {
                        box.style.transform = `translateX(${110 - scr}px)`;
                    }
                }
            }
        });
    }
};

window.addEventListener('scroll', function(event) {
    scrHeader(event);
    scrSection(event);
    srcList(event);
});

// 링크 호버 시 랜덤 알파벳 효과
const link = document.querySelectorAll('.link');

let result = "";

link.forEach(function(item) {
    item.addEventListener('mouseover', function(event) {
        const target = event.target;
        const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const value = target.innerHTML;
        
        for (let i = 0; i < value.length; i++) {
            result += list.charAt(Math.floor(Math.random() * list.length));
            target.innerHTML = result;
        }
    
        const replaced = target.innerHTML;
        const basicName = target.getAttribute("data-name");
        let hello = "";
    
        for (let i = 0; i < replaced.length; i++) {
            // const delay = (i + 1) + '00';
            const delay = ((replaced.length + '00') / 3) / (replaced.length - i);
            setTimeout(function() {
                const pre = replaced.slice(i + 1);
                const next = basicName.slice(0, [i + 1]);
                hello = (next + pre);
                target.innerHTML = hello;
            }, delay);
        }
    });
});

link.forEach(function(item) {
    item.addEventListener('mouseout', function(event) {
        const target = event.target;
        result = "";
        // target.innerHTML = target.getAttribute("data-name");
    });
});