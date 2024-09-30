import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/scss/grid';

export const sliderHero = new Swiper('.hero__wrapper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero-pagination',
    clickable: true,
  },
  modules: [Autoplay, Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});

export const sliderPrograms = new Swiper('.programs__slider-wrapper', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

export const sliderNews = new Swiper('.news__slider-wrapper', {
  direction: 'horizontal',
  loop: false,
  loopAddBlankSlides: true,
  navigation: {
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
  },
  pagination: {
    el: '.news-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  modules: [Navigation, Pagination, Grid],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    },
  },
});

export const sliderNewsButtons = new Swiper('.news__wrapper--menu', {
  direction: 'horizontal',
  loop: false,
  mousewheel: true,
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 12,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 18,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: false,
    },
  },
},
);

export const sliderReviews = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: false,
  mousewheel: true,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

// export const sliderAdvantages = function sliderAdvantages() {
//   const swiperDom = document.querySelector('.advantages__wrapper');
//   const swiperStyle = document.querySelector('.page-body');
//   if(document.body.clientWidth >= 1440) {
//     swiperDom.classList.add('swiper');
//     swiperDom.querySelector('.advantages__list').classList.add('swiper-wrapper');
//     swiperDom.querySelectorAll('.advantages__item').forEach((item) => {
//       item.classList.add('swiper-slide');
//     });
//     new Swiper('.advantages__wrapper', {
//       direction: 'horizontal',
//       loop: false,
//       navigation: {
//         nextEl: '.advantages__button--prev',
//         prevEl: '.advantages__button--next',
//       },
//       modules: [Navigation, Pagination],
//       breakpoints: {
//         1440: {
//           slidesPerView: 3.58,
//           spaceBetween: 30,
//           freeMode: true,
//         },
//       },
//     });
//     swiperStyle.classList.add('swiper-on');
//     swiperStyle.classList.remove('swiper-off');
//   } else {
//     const swiper = new Swiper('.advantages__wrapper', {});
//     swiper.destroy(true,true);
//     swiperDom.querySelector('.advantages__list').classList.remove('swiper-wrapper');
//     swiperDom.classList.remove('swiper');
//     swiperDom.querySelectorAll('.advantages__item').forEach((item) => {
//       item.classList.remove('swiper-slide');
//     });
//     swiperStyle.classList.add('swiper-off');
//     swiperStyle.classList.remove('swiper-on');
//   }
// };

// export const sliderGallery = function sliderGallery() {
//   const swiperDom = document.querySelector('.gallery__wrapper');
//   const swiperStyle = document.querySelector('.page-body');
//   if(document.body.clientWidth <= 1440) {
//     swiperDom.classList.add('swiper');
//     swiperDom.querySelector('.gallery__list').classList.add('swiper-wrapper');
//     swiperDom.querySelectorAll('.gallery__item').forEach((item) => {
//       item.classList.add('swiper-slide');
//     });
//     new Swiper('.gallery__wrapper', {
//       direction: 'horizontal',
//       loop: true,
//       navigation: {
//         nextEl: '.gallery__button--prev',
//         prevEl: '.gallery__button--next',
//       },
//       modules: [Navigation, Pagination],
//       breakpoints: {
//         320: {
//           slidesPerView: 2,
//           spaceBetween: 5,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 5,
//         },
//       },
//     });
//     swiperStyle.classList.add('swiper-on');
//     swiperStyle.classList.remove('swiper-off');
//   } else {
//     const swiper = new Swiper('.gallery__wrapper', {});
//     swiper.destroy(true,true);
//     swiperDom.querySelector('.gallery__list').classList.remove('swiper-wrapper');
//     swiperDom.classList.remove('swiper');
//     swiperDom.querySelectorAll('.gallery__item').forEach((item) => {
//       item.classList.remove('swiper-slide');
//     });
//     swiperStyle.classList.add('swiper-off');
//     swiperStyle.classList.remove('swiper-on');
//   }
// };
