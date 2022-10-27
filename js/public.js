console.log(window.location.href);

// تسجيل السيرفس ووركر
if(navigator.serviceWorker) {
  navigator.serviceWorker.register("sw.js") ;
}

// تسجيل السيرفس ووركر



const navLinks = document.querySelector("header .links ");
const overlayHeader = document.querySelector("header .overlay ");
const togle = document.querySelector("header .togle ");
const closeNav = document.querySelector("header .icon-close");



// handle leng test 

let language = document.querySelector(".language") ; 
language.addEventListener("click" , () => {
if(document.querySelector("html").getAttribute("dir") == "rtl") {
    localStorage.setItem("lang" , "en") ; 
    localStorage.setItem("dir" , "ltr") ; 
    // language.innerHTML=  "ar"
  } else {
    localStorage.setItem("lang" , "ar") ; 
    localStorage.setItem("dir" , "rtl") ; 
    // language.innerHTML=  "ar"
    // language.innerHTML.replace("ar" , "en")
}
window.location.reload() ; 
})


// handle leng test 


// function handleLogoAndNav () {
//   let logo = document.querySelector(".logoPicNav")
//   let logomobile = document.querySelector(".logo-mobile") ; 
//   let footerImg = document.querySelector("footer .logo img") ; 
//   if(document.querySelector("html").getAttribute("dir") == "rtl") {
//     if(window.screen.width < 767) {
//       logo.width = "160" ; 
//       logo.src = "imges/logoarblack.svg" ; 
      
//     } else {
//       logo.src = "imges/logo3.svg" ; 
//     }
//     logomobile.src = "imges/logoarwhite.svg" ; 
//     footerImg.src = "imges/logoarwhite.svg" ;
//   } else {
//     if(window.screen.width < 767) { 
//       logo.width = "160" ; 
//       logo.src = "imges/logoenblack.png" ; 
//     } else {
//       logo.src = "imges/logo3.svg" ; 

//     }
//     logomobile.src = "imges/logoenwhite.png" ; 
//     footerImg.src = "imges/logoenwhite.png" ;
//   }
// }

// onloan function
const footer = document.querySelector("footer") ; 
const sochilMadieIcons = document.querySelector(".sochilaside") ; 

window.addEventListener("scroll" , () => {

    if(scrollY >= footer.offsetTop  - 650 ) {
      let num = (scrollY - (footer.offsetTop  - 650)) - 60 ;  ;
      sochilMadieIcons.style.top = `calc(20% + ${-num}px)` ;
    } else {
      sochilMadieIcons.style.top = `calc(20% + 97px)` ;

    }




})

window.onload = () =>{
  // test 
  if(localStorage.getItem("lang") == "en" ) {
    let leng = document.querySelector(".language").innerHTML ; 
    document.querySelector(".language").innerHTML = leng.replace("en" , "ar")
  } else {
    let leng = document.querySelector(".language").innerHTML ; 
    document.querySelector(".language").innerHTML = leng.replace("ar" , "en")

  }



}
// onloan function


togle.addEventListener("click", () => {
  overlayHeader.classList.remove("hidden");
  if (document.querySelector("html").getAttribute("dir") == "rtl") {
    navLinks.style.left = "0px";
  } else {
    navLinks.style.right = "0px";
  }
});

function handleCloseNavMobile() {
  overlayHeader.classList.add("hidden");
  if (document.querySelector("html").getAttribute("dir") == "rtl") {
    navLinks.style.left = "-200%";
  } else {
    navLinks.style.right = "-200%";
  }
}

closeNav.addEventListener("click", handleCloseNavMobile);

overlayHeader.addEventListener("click", handleCloseNavMobile);
// console.log(navLinks)


// console.log()


// lazy loead
const imgElements = document.querySelectorAll("[data-src]");
const lazyLoadingImage = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
      observer.unobserve(entry.target);
    });
  });
};
const lazyLoadingObserver = new IntersectionObserver(lazyLoadingImage, {
  threshold: 0.9,
});
imgElements.forEach((img) => lazyLoadingObserver.observe(img));
// lazy loead



// handle grid and colum Btns 

export function handleConvertGrid () {
  const filterBtn  = Array.from(document.querySelectorAll(".filter .showoption")) ; 
let allCards = Array.from(document.querySelectorAll(".cards .card")) ; 

let paringCards = document.querySelector(".cards")
filterBtn.forEach(e=> {
    e.addEventListener("click" , (tr) => {
        filterBtn.forEach(z=> {
            z.classList.remove("text-mainColor")

        })
        tr.target.classList.add("text-mainColor")
        paringCards.classList.add("grid" , "grid-cols-12" , "gap-6") ; 
        if(tr.target.getAttribute("gender") == "grid") {
            allCards.forEach(c => {
                c.className = `col-span-4 maxmd:col-span-6 maxsm:col-span-12 bg-white pb-6` ; 
                c.children[0].classList.add("w-full")
                c.children[1].classList.remove("w-[70%]" )
            })
        } else {
            console.log()
            paringCards.classList.remove("grid" , "grid-cols-12" , "gap-6")
            allCards.forEach(c => {
                c.className = `flex items-center mb-4 bg-white maxmd:flex-col maxmd:pb-6` ; 
                c.children[0].classList.remove("w-full" )
                c.children[0].classList.add("maxmd:w-full")
                c.children[1].classList.add("w-[70%]" , "maxmd:w-full"  )

            })
        }
    })
})
}

// handle grid and colum Btns 

// swiper nav
var swiper = new Swiper(".mySwiper1", {
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
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// swiper nav
