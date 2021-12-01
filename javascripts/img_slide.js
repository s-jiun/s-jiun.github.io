function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e) {
    sliderImages.forEach(sliderImage => {

      const SlideInAt = (window.scrollY + window.innerHeight);

      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = SlideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      }
      else {
        sliderImage.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));