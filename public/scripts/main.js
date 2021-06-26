import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButtonAction = document.querySelector('.modal button')
    // check button modal
const checkButtons = document.querySelectorAll(".actions a.check")
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

// delete button modal
const deleteButtons = document.querySelectorAll(".actions a.delete")
deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    //não alterar a url ao clicar no a
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir"
        //pegando a action do modal (check or delete)
    const slug = check ? "check" : "delete"
        //pegando o id da sala
    const roomId = document.querySelector("#room-id").dataset.id
        //pegando o id da question (importante) event > target desse elemento, datasetId
    const questionId = event.target.dataset.id
        //pegando o form
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButtonAction.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButtonAction.classList.remove("red") : modalButtonAction.classList.add("red")

    modal.open()
}