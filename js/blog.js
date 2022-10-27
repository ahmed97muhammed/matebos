// handle cards
let allCards = Array.from(document.querySelectorAll(".bloger .right .card")) ;
allCards.forEach(e=> {
    e.addEventListener("click"  , (tr) => {
        console.log(e.getAttribute("href"))
        window.location.href = e.getAttribute("href") ;
    })
})
// handle cards

// allCards[0].getAttribute
