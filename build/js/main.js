'use strict';

(function () {
  var ScreenWidth = {
    DESKTOP_WIDTH : 1199,
    TABLET_WIDTH : 767
  };

  var buttonScroll = document.querySelector('.intro__button');
  var subscriptionBlock = document.querySelector('.subscription');

  var slideIndex = 1;
  var buttonPrevReview = document.querySelector('.reviews__button--left');
  var buttonNextReview = document.querySelector('.reviews__button--right');
  var buttonPrevTrainers = document.querySelector('.trainers__button--left');
  var buttonNextTrainers = document.querySelector('.trainers__button--right');

  var periodTabs = document.querySelectorAll('.subscription__period-tab');
  var tabsSubscriptions = document.querySelectorAll('.subscription__list');

  showSlidesTrainers(slideIndex);

  function showNextSlideTrainers() {
    if (screen.width <= ScreenWidth.TABLET_WIDTH) {
      showSlidesTrainers(slideIndex += 1);
    } else
    if (screen.width > ScreenWidth.TABLET_WIDTH && screen.width <= ScreenWidth.DESKTOP_WIDTH) {
      showSlidesTrainers(slideIndex += 2);
    } else {
      showSlidesTrainers(slideIndex += 4);
    }
  }

  function showPrevSlideTrainers() {
    if (screen.width <= ScreenWidth.TABLET_WIDTH) {
      showSlidesTrainers(slideIndex -= 1);
    } else
    if (screen.width > ScreenWidth.TABLET_WIDTH && screen.width <= ScreenWidth.DESKTOP_WIDTH) {
      showSlidesTrainers(slideIndex -= 2);
    } else {
      showSlidesTrainers(slideIndex -= 4);
    }
  }

  function getCurrentSlideTrainers(n) {
    showSlidesTrainers(slideIndex = n);
  }

  function showSlidesTrainers(n) {
    var slides = document.querySelectorAll('.trainers__item');

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (var slide of slides) {
      slide.style.display = 'none';
    }

    for (var i = (slideIndex - 1); i < (slideIndex + 3); i++) {
      if (i < slides.length) {
        slides[i].style.display = 'flex';
      }
    }
  }

  showSlides(slideIndex);

  function showNextSlide() {
    showSlides(slideIndex += 1);
  }

  function showPreviousSlide() {
    showSlides(slideIndex -= 1);
  }

  function getCurrentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var slides = document.querySelectorAll('.reviews__item');

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (var slide of slides) {
      slide.style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'flex';
  }

  for (var periodTab of periodTabs) {

    periodTab.addEventListener('click', function(evt){
      evt.preventDefault();
      var activeTabAttr = evt.target.getAttribute('data-tab');

      for (var i = 0; i < periodTabs.length; i++) {
        var contentAttr = tabsSubscriptions[i].getAttribute('data-tab-content');

        if (activeTabAttr === contentAttr) {
          periodTabs[i].classList.add('subscription__period-tab--active');
          tabsSubscriptions[i].classList.add('subscription__list--active');
        } else {
          periodTabs[i].classList.remove('subscription__period-tab--active');
          tabsSubscriptions[i].classList.remove('subscription__list--active');
        }
      };
    });
  }

  buttonScroll.addEventListener('click', function(evt) {
    evt.preventDefault();
    subscriptionBlock.scrollIntoView({behavior: 'smooth'});
  })

  buttonPrevTrainers.addEventListener('click', function(evt) {
    evt.preventDefault();
    showPrevSlideTrainers();
  })

  buttonNextTrainers.addEventListener('click', function(evt) {
    evt.preventDefault();
    showNextSlideTrainers();
  })

  buttonPrevReview.addEventListener('click', function(evt) {
    evt.preventDefault();
    showPreviousSlide();
  })

  buttonNextReview.addEventListener('click', function(evt) {
    evt.preventDefault();
    showNextSlide();
  })
})();
