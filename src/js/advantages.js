import Swiper from 'swiper';
import 'swiper/css/bundle';

const advantagesLeftArrow = document.getElementById('advantagesLeftArrow');
const advantagesRightArrow = document.getElementById('advantagesRightArrow');
const advantagesDots = document.querySelectorAll('.advantages-dot');

let advantagesSwiper;

advantagesSwiper = new Swiper('.advantages-swiper-container', {
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
      slidesPerView: 5,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.advantages-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateAdvantagesArrows(this);
      updateAdvantagesDots(this.realIndex);
    },
  },
});

function updateAdvantagesArrows(swiper) {
  advantagesLeftArrow.disabled = swiper.isBeginning;
  advantagesRightArrow.disabled = swiper.isEnd;
}

advantagesLeftArrow.addEventListener('click', () => {
  advantagesSwiper.slidePrev();
});

advantagesRightArrow.addEventListener('click', () => {
  advantagesSwiper.slideNext();
});

function updateAdvantagesDots(index) {
  advantagesDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

advantagesDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    advantagesSwiper.slideTo(index);
  });
});
