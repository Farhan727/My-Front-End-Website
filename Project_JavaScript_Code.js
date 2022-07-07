

        var swiper = new Swiper('.mySwiper', {
        slidesPerView: 2,
        spaceBetween: 30,
       autoplay: { //autoplay can make our slider automatic runnig 
            delay: 2500, //it means the images/content in slider will move how much milli-seconds 1s=100mm
            disableOnIteraction: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      const counterNum = document.querySelectorAll(".counter-numbers");

      const speed = 200;

      counterNum.forEach(curElem => {
        

        const updateNumber = () => {

          const targetNum = parseInt(curElem.dataset.num.number);
          console.log(targetNum);
        };

        updateNumber();

      });

