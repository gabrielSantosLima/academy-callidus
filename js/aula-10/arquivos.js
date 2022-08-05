const input = document.querySelector("input[type=file]");
const info = document.querySelector("#info");

// input.addEventListener("change", readFileAsBlob);
input.addEventListener("change", readFileWithFileReader);

function print(content) {
  const img = document.createElement("img");
  img.src = content;
  document.body.appendChild(img);
  // info.textContent = content;
}

function getFile() {
  const file = input.files[0];
  return file;
}

function readFileWithFileReader() {
  const file = getFile();
  if (!file) return print("Nenhum arquivo foi selecionado.");
  const fr = new FileReader();
  fr.onload = () => print(fr.result);
  fr.readAsDataURL(file);
}

async function readFileAsBlob() {
  const file = getFile();
  if (!file) return print("Nenhum arquivo foi selecionado.");
  const text = await file.text();
  print(text);
}
