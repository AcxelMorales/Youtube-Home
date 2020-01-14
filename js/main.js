'use strict'

const contenedor = document.querySelector('#contenedor')

document.getElementById('btnMenu').addEventListener('click', () => contenedor.classList.toggle('active'))

const width = () => {
    if (window.innerWidth <= 775) contenedor.classList.remove('active');
    else contenedor.classList.add('active');
}

width();

window.addEventListener('resize', () => {
    width();
});