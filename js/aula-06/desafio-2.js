const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const isbn = parseInt(prompt("Digite a ISBN do livro"));
  const nome = prompt("Digite o nome do livro");

  const livro = {
    nome,
    isbn,
    toString: function () {
      return `${this.isbn} - ${this.nome}`;
    },
  };

  const li = document.createElement("li");
  li.innerHTML += livro.toString();
  ul.appendChild(li);
});
