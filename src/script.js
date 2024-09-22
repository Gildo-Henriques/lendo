function carregar(){
    fetch('./src/livros.json')
    .then(response => response.json())
    .then(livros  => {
        const container = document.querySelector("#livros-container")
        livros.map(livro => {
            const card = document.createElement("div")
            card.classList.add("card")
            const img = document.createElement("img")
            img.src = livro.imagem
            const titulo = document.createElement("h3")
            titulo.textContent = livro.nome
            card.appendChild(img)
            card.appendChild(titulo)
            container.appendChild(card)
        })
    })
}
carregar()