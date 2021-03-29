const modalOverlay = document.querySelector('.modal-overlay') //Pegar um único elemento e salvar na variável modalOverlay
const cards = document.querySelectorAll('.card') //Pegar todos com a classe card e salvar na variável cards

const iframe = modalOverlay.querySelector("iframe") //procurar dentro do modalOverlay um iframe


for (let card of cards){ //para cada cartão em cards
    card.addEventListener ('click',function(){ //função que ouve eventos e executa uma ação que é a função function

        const videoId = card.getAttribute("id")
        window.location.href = `/video?id=${videoId}`

    })  
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active')

    iframe.src ="" //remover o vídeo para o vídeo parar quando fechar
})

