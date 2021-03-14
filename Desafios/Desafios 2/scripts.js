const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

const iframe = modalOverlay.querySelector("iframe") 


for (let card of cards) {
    card.addEventListener('click',function(){
        modalOverlay.classList.add("active")

        const videoId = card.getAttribute("id")
        iframe.src = `https://www.youtube.com/embed/${videoId}`

    })
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove("active")

    iframe.src = ""
})
