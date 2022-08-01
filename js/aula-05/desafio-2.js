const form = document.querySelector("form");
const clearButton = document.querySelector("#clear");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const ficha = {};

  for (let data of formData) {
    const [key, value] = data;
    if (!ficha[key]) {
      ficha[key] = value;
    } else {
      if (ficha[key] instanceof Array) {
        ficha[key] = [...ficha[key], value];
      } else {
        ficha[key] = [ficha[key], value];
      }
    }
  }

  let message = "=============== Informações do Pedido ===============\n";
  Object.keys(ficha).forEach((key) => {
    message += `\n${key.toUpperCase()}: ${
      ficha[key] instanceof Array ? ficha[key].join(", ") : ficha[key]
    }`;
  });
  alert(message);
});

clearButton.addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = null;
    input.checked = false;
  });
});
