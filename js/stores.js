
const allFilterPart = Array.from(document.querySelectorAll(".sidbar .filter-part .filter-header")) ; 
allFilterPart.forEach(e=> {
    e.addEventListener("click" , (tr) => {
        e.children[1].classList.toggle("rotate-180")
        e.parentElement.children[0].classList.toggle("text-mainColor")
        e.parentElement.children[1].classList.toggle("h-full")
        e.parentElement.children[1].classList.toggle("h-0")
    })
})

const showOption = Array.from(document.querySelectorAll(".filter .show .showoption")) ;
const cardsPar = document.querySelector(".container .cards") ; 
const allCards = Array.from(document.querySelectorAll(".container .cards .card a") ) ;

     showOption.forEach(e=> {
         e.addEventListener("click" , () => {
             if(e.classList.contains("text-mainColor") != true) {
                 cardsPar.classList.toggle("w-full")
                 
                 showOption.forEach(x=> x.classList.remove("text-mainColor")) ;
                 e.classList.add("text-mainColor")
     
                 cardsPar.classList.toggle("grid-cols-12")
                 allCards.forEach(z=> {
                     z.parentElement.classList.toggle("col-span-4")
                     z.parentElement.classList.toggle("col-span-12")
                     z.parentElement.children[0].children[0].classList.toggle("w-full")
                     z.parentElement.children[0].children[0].classList.toggle("w-26")
                     z.parentElement.children[0].children[0].classList.toggle("h-[220px]")
                     z.parentElement.children[0].children[0].classList.toggle("h-250")
                     z.parentElement.classList.toggle("pb-6") ; 
                     z.parentElement.classList.toggle("p-4")
                     z.parentElement.classList.toggle("p-2")
                     z.classList.toggle("flex")
                 })
                 
             }
             
         })
     })


// handle filter 
const filterMobileBtn = document.querySelector(".show.filter") ; 
const canvise = document.querySelector(".cnavise") ; 
const canviseOverlay = document.querySelector(".cnavise .overlay") ; 
function canvisHendeler () {
    canvise.classList.toggle("ltr:left-[-200%]")
    canvise.classList.toggle("rtl:right-[-200%]")
    canvise.classList.toggle("right-0")
    canvise.classList.toggle("left-0")
}
canviseOverlay.addEventListener("click"  , () => {
    canvisHendeler() ;
})
filterMobileBtn.addEventListener("click" , () => {
    canvisHendeler() ;
})
// handle filter 