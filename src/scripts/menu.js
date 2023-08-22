document.querySelector('.menu-open').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('opacity-0');
    document.querySelector('.menu').classList.toggle('pointer-events-none');
});
document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('opacity-0');
    document.querySelector('.menu').classList.toggle('pointer-events-none');
});