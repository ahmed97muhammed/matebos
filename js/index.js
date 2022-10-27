// handle content overlay 
let container = document.querySelector(".container");  
let allOverlayContent = Array.from(document.querySelectorAll(".mySwiper3 .content"))

  window.onresize = () => {
    // console.log()
    let calc = (window.innerWidth - container.clientWidth) / 2 ; 
    if(window.innerWidth > 640) {
      allOverlayContent.forEach(e=> {
        e.style.right = `${calc}px`
      })
    } else {
      allOverlayContent.forEach(e=> {
        e.style.right = `0px`
      })
    }
  }
// handle content overlay 

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// swiper.changeLanguageDirection("ltr")


var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

 

});
swiper3.init(3)
// swiper3.changeLanguageDirection("ltr")
var swiper8 = new Swiper(".mySwiper66", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay : true ,
  loop : true ,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper9 = new Swiper(".mySwiperTeam", {
  // loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

});

// handle videos 
const allVideos = Array.from(document.querySelectorAll(".video .video-container .part"))
allVideos.forEach(e=> handleIfream(e))
// handle videos 

function handleIfream (item) {
item.children[1].children[1].addEventListener("click" , (tr) => {
  item.children[0].remove()
  item.children[0].remove()
  let ifream = document.createElement("iframe"); 
  ifream.style.cssText = "width : 100% ; height : 100% ; aspect-ratio: 16 / 9;" ; 
  let src = item.getAttribute("src").replace("watch?v=" , "embed/")
  ifream.src = src ;
  item.appendChild(ifream)
})
}


// import {toTop} from "./public.js"
// toTop()


// handle incress number 
let nums = document.querySelectorAll(".cards .number");
let sectionNums = document.querySelector(".numbers");

let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= sectionNums.offsetTop - 600) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// handle incress number 