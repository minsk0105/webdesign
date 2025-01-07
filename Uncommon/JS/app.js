// const 상수 == 불변 / 변경 불가
// let 상수비스무리 == 값 변경은 가능, 타입은 변경 불가()
// var 쌉가능 == 값 / 타입 모두 변경 가능


// 스크롤 이벤트
window.addEventListener('scroll', function(event) {
    const target = this.window.scrollY;

    if (event) {
        scrFixed(target);
        scrMain(target);
        listBox(target);
    }
});

// fixed 요소 스크롤 감지
const header = document.getElementById('header');
const moreBox = document.querySelector('.more_box');

let currentScrollTop = window.scrollY;

const scrFixed = (item) => {
    if (currentScrollTop < item) {
        header.classList.add("hide_header");
    } else {
        header.classList.remove("hide_header");
    }

    currentScrollTop = item;

    if (item >= 1000) {
        moreBox.classList.add("hide_more");
    } else {
        moreBox.classList.remove("hide_more");
    }
};

// 메인 섹션 스크롤 애니메이션 효과
const mViBox = document.querySelector('.scr_ani_box');
const playLine = document.querySelector('.play_line');
const showreel = document.querySelector('.showreel');

const scrMain = (item) => {
    if (item > 150) {
        if (item >= 150 && item <= 1000) {
            // mViBox.style.transform = 'translate(-50%, 600px) scale(3)';
            // mViBox.style.left = '50%';
    
            const scrPoint = item / 1000;
            const boxSetY = (700 * scrPoint) - 105;
            let boxSetX = 50 * scrPoint;
            if (boxSetX < 10) {
                boxSetX = 10;
            }
            
            let boxSize = 3 * scrPoint;
            if (boxSize < 1) {
                boxSize = 1;
            }
    
            const blank = item / 100;
            const outLine =  0.63 - scrPoint;
    
            mViBox.style.transform = `translate(-50%, ${boxSetY}px) scale(${boxSize})`;
            mViBox.style.left = `${boxSetX}%`;
            mViBox.style.padding = (10 - blank) + 'px';
            mViBox.style.borderColor = `rgba(96, 132, 183, ${outLine})`;
            // playLine.style.opacity = (1 - scrPoint);
            playLine.style.visibility = 'hidden';
            showreel.style.opacity = scrPoint;
        }
    } else {
        mViBox.style.transform = 'translate(-50%, 0) scale(1)';
        mViBox.style.left = '190px';
        mViBox.style.padding = '10px';
        mViBox.style.borderColor = `rgba(96, 132, 183, 0.63)`;
        // playLine.style.opacity = '1';
        playLine.style.visibility = 'visible';
        showreel.style.opacity = '0';
    }
};

// 메인 섹션 리스트 박스
const boxes = document.querySelectorAll('.list_box');

const listBox = (item) => {
    if (item > 150) {
        boxes.forEach(function(box) {
            if (item >= 150 && item <= 1580) {
                
                const listSetX = item / 8;

                if (box.classList.contains("water")) {
                    box.style.transform = `translateX(${-110 + listSetX}%)`;
                } else {
                    box.style.transform = `translateX(${110 - listSetX}%)`;
                }

            }
        });
    }
};

// 링크 호버 시 랜덤 알파벳 효과
const link = document.querySelectorAll('.link');

let result = "";

link.forEach(function(item) {

    item.addEventListener('mouseover', function(event) {
        const target = event.target;
        const randomList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const value = target.innerHTML;
        
        for (let i = 0; i < value.length; i++) {
            result += randomList.charAt(Math.floor(Math.random() * randomList.length));
            target.innerHTML = result;
        }

        const replaced = target.innerHTML;
        const basicName = target.getAttribute("data-name");

        let reset = "";

        for (let i = 0; i < replaced.length; i++) {
            const delay = ((replaced.length + '00') / 3) / (replaced.length - i);

            setTimeout(function() {
                const before = replaced.slice(i + 1);
                const next = basicName.slice(0, [i + 1]);
                reset = (next + before);
                target.innerHTML = reset;
            }, delay);
        }
    });

    item.addEventListener('mouseout', function(event) {
        result = "";
    });

});

// // mousemove 이벤트 효과 (마우스 커서 이동)
const moveCursor = document.querySelector('.move_cursor');
const board = document.querySelector('.board');

// 초기 위치값
const resetPosition = () => {
    const centerX = 150 - moveCursor.offsetWidth / 2;
    const centerY = 90 - moveCursor.offsetHeight / 2;
    moveCursor.style.transform = `translate(${centerX}px, ${centerY}px)`;
};

window.addEventListener('load', resetPosition);

board.addEventListener('mousemove', function(event) {
    const boxRect = showreel.getBoundingClientRect();

    // 박스 내의 마우스 커서 상대 좌표
    const mouseX = event.clientX - boxRect.left;
    const mouseY = event.clientY - boxRect.top;

    if (mouseX >= 100 && mouseX <= 720 && mouseY >= 20 && mouseY <= 465) {
        moveCursor.style.transform = `translate(${mouseX / 2.8 - moveCursor.offsetWidth / 2}px, ${mouseY / 2.8 - moveCursor.offsetHeight / 2}px)`;
    }

});

board.addEventListener('mouseleave', function() {
    resetPosition();
});