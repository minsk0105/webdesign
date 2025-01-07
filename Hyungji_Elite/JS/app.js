const langBtn = document.querySelector('.lang_btn');
const langList = document.querySelector('.lang_list');
const shareBtn = document.querySelector('.share');
const shareMenu = document.querySelector('.share_menu');

const toggleShow = (btn, box) => {
    btn.addEventListener('click', () => {
        if (box.classList.contains("show_lang")) {
            box.classList.remove("show_lang");
        } else {
            box.classList.add("show_lang");
        }
    });
};

toggleShow(langBtn, langList);
toggleShow(shareBtn, shareMenu);