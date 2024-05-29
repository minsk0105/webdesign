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
const ndbox = document.querySelector('.kit-box');
const thbox = document.querySelector('.room-box');
const kl = document.getElementById('kl');
const kr = document.getElementById('kr');
const rl = document.getElementById('rl');
const rr = document.getElementById('rr');

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

kl.addEventListener('click', function() {
    if (ndbox.style.marginLeft == '') {
        ndbox.style.marginLeft = '0px';
    }
    else if (ndbox.style.marginLeft == '-400px') {
        ndbox.style.marginLeft = '0px';
    }
    else if (ndbox.style.marginLeft == '-800px') {
        ndbox.style.marginLeft = '-400px';
    }
})

kr.addEventListener('click', function() {
    if (ndbox.style.marginLeft == '') {
        ndbox.style.marginLeft = '-800px';
    }
    else if (ndbox.style.marginLeft == '-400px') {
        ndbox.style.marginLeft = '-800px';
    }
    else if (ndbox.style.marginLeft == '0px') {
        ndbox.style.marginLeft = '-400px';
    }
})

rl.addEventListener('click', function() {
    if (thbox.style.marginLeft == '') {
        thbox.style.marginLeft = '0px';
    }
    else if (thbox.style.marginLeft == '-400px') {
        thbox.style.marginLeft = '0px';
    }
    else if (thbox.style.marginLeft == '-800px') {
        thbox.style.marginLeft = '-400px';
    }
})

rr.addEventListener('click', function() {
    if (thbox.style.marginLeft == '') {
        thbox.style.marginLeft = '-800px';
    }
    else if (thbox.style.marginLeft == '-400px') {
        thbox.style.marginLeft = '-800px';
    }
    else if (thbox.style.marginLeft == '0px') {
        thbox.style.marginLeft = '-400px';
    }
})

const first = document.querySelector('.box-cont');
const kitchen = document.querySelector('.kitchen');
const room = document.querySelector('.room');
const kbtn = document.querySelector('.tab1');
const mbtn = document.querySelector('.tab2');
const rbtn = document.querySelector('.tab3');

kbtn.style.borderColor = '#ffc107';
kbtn.style.backgroundColor = '#f5f5f5';
kbtn.style.color = 'black';

mbtn.addEventListener('click', function() {
    kitchen.style.display = 'block';
    room.style.display = 'none';
    first.style.display = 'none';

    mbtn.style.borderColor = '#ffc107';
    mbtn.style.backgroundColor = '#f5f5f5';
    mbtn.style.color = 'black';
    kbtn.style.borderColor = '';
    kbtn.style.backgroundColor = '';
    kbtn.style.color = '';
    rbtn.style.borderColor = '';
    rbtn.style.backgroundColor = '';
    rbtn.style.color = '';
})

rbtn.addEventListener('click', function() {
    room.style.display = 'block';
    kitchen.style.display = 'none';
    first.style.display = 'none';

    rbtn.style.borderColor = '#ffc107';
    rbtn.style.backgroundColor = '#f5f5f5';
    rbtn.style.color = 'black';
    kbtn.style.borderColor = '';
    kbtn.style.backgroundColor = '';
    kbtn.style.color = '';
    mbtn.style.borderColor = '';
    mbtn.style.backgroundColor = '';
    mbtn.style.color = '';
})

kbtn.addEventListener('click', function() {
    first.style.display = 'block';
    room.style.display = 'none';
    kitchen.style.display = 'none';

    kbtn.style.borderColor = '#ffc107';
    kbtn.style.backgroundColor = '#f5f5f5';
    kbtn.style.color = 'black';
    mbtn.style.borderColor = '';
    mbtn.style.backgroundColor = '';
    mbtn.style.color = '';
    rbtn.style.borderColor = '';
    rbtn.style.backgroundColor = '';
    rbtn.style.color = '';
})