//Mostrar/Ocultar Sugestão de filme
//part2-0-brincadeiras.html
if (typeof mudarVisibilidade !== "undefined") {
  document.getElementById("sugestao-19").onclick = () =>
    mudarVisibilidade(
      document.getElementById("bloco-sugestao-19"),
      document.getElementById("instrucao-19")
    );

  document.getElementById("sugestao-20").onclick = () =>
    mudarVisibilidade(
      document.getElementById("bloco-sugestao-20"),
      document.getElementById("instrucao-20")
    );
}
