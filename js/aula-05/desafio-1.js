const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const user = {};

  for (let data of formData) {
    const [key, value] = data;
    if (!user[key]) {
      user[key] = value;
    } else {
      if (user[key] instanceof Array) {
        user[key] = [...user[key], value];
      } else {
        user[key] = [user[key], value];
      }
    }
  }

  alert(
    `Olá. ${user.nome} de ${user.idade} anos. Escolaridade: ${
      user.escolaridade
    }. Meios de deslocamento: ${
      user.deslocamento instanceof Array
        ? user.deslocamento.join(", ")
        : user.deslocamento
    }.`
  );
});
