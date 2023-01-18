function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.jpg");
    img.setAttribute(
      "alt",
      "Foto de Pablo Bueno, usando camisa azul em cima da ponte Hercilio Luz de Florianópolis."
    );
  } else {
    img.setAttribute("src", "./assets/Avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Pablo Bueno sorrindo, usando camisa vermelha e fundo branco."
    );
  }
}
