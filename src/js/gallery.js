import Swiper from 'swiper';
import 'swiper/css/bundle';

const galleryLeftArrow = document.getElementById('galleryLeftArrow');
const galleryRightArrow = document.getElementById('galleryRightArrow');
const galleryDots = document.querySelectorAll('.gallery-dot');

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
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
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateGalleryArrows(this);
      updateGalleryDots(this.realIndex);
    },
  },
});

function updateGalleryArrows(swiper) {
  galleryLeftArrow.disabled = swiper.isBeginning;
  galleryRightArrow.disabled = swiper.isEnd;
}

galleryLeftArrow.addEventListener('click', () => {
  gallerySwiper.slidePrev();
});

galleryRightArrow.addEventListener('click', () => {
  gallerySwiper.slideNext();
});

function updateGalleryDots(index) {
  galleryDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gallerySwiper.slideTo(index);
  });
});
