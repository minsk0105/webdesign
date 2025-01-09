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

const siteBtns = document.querySelectorAll('.site_btn');
const siteMap = document.querySelector('.site_map');

siteBtns.forEach((btn) => {
    toggleShow(btn, siteMap, "show_site");
});