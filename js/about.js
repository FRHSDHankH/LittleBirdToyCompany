setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }, 88023);

  window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 992) { // Bootstrap lg breakpoint is 992px
      const audio = document.getElementById('JamesVid');
      audio.play().catch(function (error) {
        console.log("Audio play was prevented by the browser:", error);
      });
    }
  });