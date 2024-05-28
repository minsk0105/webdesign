const btn = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
})

const remo = document.querySelector('#close-button');

remo.addEventListener('click', function() {
    sidebar.classList.remove('active');
})

const left = document.getElementById('left');
const right = document.getElementById('right');
const box = document.querySelector('.move-box');

left.addEventListener('click', function() {
    if (box.style.marginLeft == '') {
        box.style.marginLeft = '0px';
    }
    else if (box.style.marginLeft == '-400px') {
        box.style.marginLeft = '0px';
    }
    else if (box.style.marginLeft == '-800px') {
        box.style.marginLeft = '-400px';
    }
})

right.addEventListener('click', function() {
    if (box.style.marginLeft == '') {
        box.style.marginLeft = '-800px';
    }
    else if (box.style.marginLeft == '-400px') {
        box.style.marginLeft = '-800px';
    }
    else if (box.style.marginLeft == '0px') {
        box.style.marginLeft = '-400px';
    }
})