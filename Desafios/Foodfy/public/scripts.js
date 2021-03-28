const cards = document.querySelectorAll('.card')
const detail = document.querySelector('.detail')
const links = document.querySelectorAll('.showHide')
const itens = document.querySelectorAll('.itens')

for (let card of cards) {
    card.addEventListener('click',function(){
        const id = card.getAttribute("id")
        window.location.href=`/recipes/${id}`
        detail.classList.remove('hidden')
    })    
}

for (let link of links) {
    
    link.addEventListener('click',function(){
        const id = link.id
        showHide(link, id)
    })   
}


function showHide (link, id){

    for (item of itens){
        const idItem = item.getAttribute('id')

        if(idItem == id){

            if (item.classList.contains('hidden')){
                item.classList.remove('hidden')
                link.innerHTML = "OCULTAR"
            }
            else{
                item.classList.add('hidden')
                link.innerHTML = "MOSTRAR"
            }
        }
    }
}

