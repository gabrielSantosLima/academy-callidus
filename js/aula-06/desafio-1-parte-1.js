const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  const id = parseInt(prompt("Digite sue ID"));
  const nome = prompt("Digite seu nome");
  const idade = parseInt(prompt("Digite sua idade"));

  const user = {
    id,
    nome,
    idade,
    toString: () => `${nome} de idade ${idade} anos de ID: ${id}`,
  };
  const li = document.createElement("li");
  li.innerHTML += `${user.toString()}`;
  ul.appendChild(li);
});
