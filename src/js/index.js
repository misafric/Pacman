'use strict';

const pacman = document.querySelector('.entity')

pacman.addEventListener('click', () => {
    pacman.className = 'entity entity--pac pacgirl-active-light';
});