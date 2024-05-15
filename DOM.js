const form = document.getElementById("Registrazione")
form.addEventListener("submit", function (event) {
event.preventDefault()
const nameInput = document.getElementById("name").value
console.log(nameInput)
const elementiLista = document.getElementById("elementiLista").value
console.log(elementiLista)
const container = document.createElement("div")
container.classList.add("card")
const cardTitle = document.createElement("ul")
 cardTitle.innerText = nameInput
 const righeLista= document.createElement("li")
righeLista.innerText = elementiLista
const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Elimina";
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.addEventListener("click", function () {
                container.remove();
            });
container.append(cardTitle,righeLista,deleteBtn)
const Risultato = document.getElementById("risultato")
Risultato.appendChild(container)


})