import Swiper from 'swiper';
import 'swiper/css/bundle';

const charactersLeftArrow = document.getElementById('charactersLeftArrow');
const charactersRightArrow = document.getElementById('charactersRightArrow');
const charactersDots = document.querySelectorAll('.characters-dot');

let charactersSwiper;

charactersSwiper = new Swiper('.characters-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 32,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      centeredSlides: false,
      slidesPerView: 4,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.characters-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateCharactersArrows(this);
      updateCharactersDots(this.realIndex);
    },
  },
});

function updateCharactersArrows(swiper) {
  charactersLeftArrow.disabled = swiper.isBeginning;
  charactersRightArrow.disabled = swiper.isEnd;
}

charactersLeftArrow.addEventListener('click', () => {
  charactersSwiper.slidePrev();
});

charactersRightArrow.addEventListener('click', () => {
  charactersSwiper.slideNext();
});

function updateCharactersDots(index) {
  charactersDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

charactersDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    charactersSwiper.slideTo(index);
  });
});
