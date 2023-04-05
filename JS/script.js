new Swiper ('.swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,},
    centeredSlides: false,
})

let showAll = document.querySelector('.showAll'),
    hideAll = document.querySelector('.hideAll'),
    brandsContainer = document.querySelector('.brandsBar-wrapper');
showAll.addEventListener ('click', function () {
    brandsContainer.style = 'height: 100%';
    hideAll.classList.add('show');
    showAll.classList.add('hide');
})
hideAll.addEventListener ('click', function () {
    brandsContainer.style = 'height: 170px';
    hideAll.classList.remove('show');
    showAll.classList.remove('hide');
})