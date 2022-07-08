

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

      

/* comments only
   const counterNum = document.querySelectorAll(".counter-numbers");

      const speed = 200;

      counterNum.forEach(curElem => {
        

        const updateNumber = () => {

          const targetNum = parseInt(curElem.dataset.num.number);
          console.log(targetNum);
        };

        updateNumber();

      });    /*


// creatinga an element using JavaScript

//where to add it or so select first of all this element

/* const footerElemnt = document.querySelector(".footer-section");

const ScroolElement = document.createElement("div");
ScroolElement.classList.add("scrool-top-element");
ScroolElement.innerHTML =  '<i class="fa-solid fa-arrow-right-long"></i>';

footerElemnt.after(ScroolElement); */


function scroolTop()
{
  const heroElement = document.getElementById("hero-section");
  heroElement.scrollIntoView({behavior:"smooth"});
}



