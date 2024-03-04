const enter = () => {
    const btn = document.querySelector(".button_inp")
    btn.addEventListener("click", () => {
        selecionar()
    })
}

const selecionar = () => {
    const selectTrain = document.querySelector(".select")
    openModal(selectTrain.value)
}

const openModal = (modalValue) => { //(modalValue) eh o nome que eu dei (qualquer coisa) se referindo ao
   const modal = document.querySelector(modalValue)
   modal.showModal()
}

const closeModal = () => {
    const closeA = document.querySelector(".close_modalA")
    closeA.addEventListener("click", () => {
        const modal = document.querySelector(".treinoA")
        modal.close()
    })

    const closeB = document.querySelector(".close_modalB")
    closeB.addEventListener("click", () => {
        const modal = document.querySelector(".treinoB")
        modal.close()
    })

    const closeC = document.querySelector(".close_modalC")
    closeC.addEventListener("click", () => {
        const modal = document.querySelector(".treinoC")
        modal.close()
    })

    const closeD = document.querySelector(".close_modalD")
    closeD.addEventListener("click", () => {
        const modal = document.querySelector(".treinoD")
        modal.close()
    })

    const closeE = document.querySelector(".close_modalE")
    closeE.addEventListener("click", () => {
        const modal = document.querySelector(".treinoE")
        modal.close()
    })
}
enter()
closeModal()