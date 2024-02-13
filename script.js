document.addEventListener('DOMContentLoaded', function () {
  // routes.html
  // Слайдер
  new Swiper('.scrolling__slider', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    // slidesPerView: 2,
    spaceBetween: 20,
    autoHeight: true,
    speed: 800,
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  new Swiper('.included__slider', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    // slidesPerView: 2,
    spaceBetween: 20,
    // autoHeight: true,
    speed: 800,
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // ask.html
  // Аккордеон
  const questionElements = document.querySelectorAll('.ask__question');

  questionElements.forEach(function (question) {
    question.addEventListener('click', function () {
      questionElements.forEach(function (otherQuestion) {
        if (otherQuestion !== question) {
          otherQuestion.classList.remove('active');
          const otherContent = otherQuestion.nextElementSibling;
          otherContent.style.display = 'none';
        }
      });

      this.classList.toggle('active');
      const content = this.nextElementSibling;

      content.style.display =
        content.style.display === 'none' || content.style.display === '' ? 'flex' : 'none';
    });
  });
});
