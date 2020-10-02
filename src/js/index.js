'use strict';

// const pacman = document.querySelector('.entity')

// pacman.addEventListener('click', () => {
//     pacman.className = 'entity entity--pac pacgirl-active-light';
// });

const app = document.querySelector('#app');

const pos = new pacMove(0, 0);
pos.mount(app);


document.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowRight') {
        pos.moving('right')
    }
    else if(e.code === 'ArrowLeft') {
        pos.moving('left')
    }
    else if(e.code === 'ArrowUp') {
        pos.moving('up')
    }
    else if(e.code === 'ArrowDown') {
        pos.moving('down')
    }
})

