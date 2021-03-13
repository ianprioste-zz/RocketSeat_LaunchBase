const modalOverlay = document.querySelector('.modal-overlay') //Pegar um único elemento e salvar na variável modalOverlay
const cards = document.querySelectorAll('.card') //Pegar todos com a classe card e salvar na variável cards

const iframe = modalOverlay.querySelector("iframe") //procurar dentro do modalOverlay um iframe


for (let card of cards){ //para cada cartão em cards
    card.addEventListener ('click',function(){ //função que ouve eventos e executa uma ação que é a função function
        modalOverlay.classList.add('active') //função para adicionar uma classe


        const videoId = card.getAttribute("id") // pegar o atributo do id
        iframe.src = `https://www.youtube.com/embed/${videoId}` //mudar src do iframe de acordo com a variável que receber do card
    })  
}

document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active')

    iframe.src ="" //remover o vídeo para o vídeo parar quando fechar
})

