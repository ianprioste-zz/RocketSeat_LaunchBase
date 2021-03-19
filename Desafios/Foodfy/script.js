const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

const img = modal.querySelector("img")
const h1 = modal.querySelector("h1")
const h2 = modal.querySelector("h2")

for (let card of cards) {
    card.addEventListener('click',function(){
        modal.classList.add('active')

        const imgId = card.querySelector("img").src
        const info = card.querySelector("h2").textContent
        const author = card.querySelector("p").textContent

        img.src = imgId
        h1.innerHTML = info
        h2.innerHTML = author

    })    
}

modal.querySelector('p').addEventListener('click',function(){
    modal.classList.remove('active')

    img.src = ""
    h1.innerHTML=""
    h2.innerHTML=""


})