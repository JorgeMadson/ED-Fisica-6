function mudarVisibilidade(bloco, instrucao) {
  if (bloco.style.visibility === "hidden") {
    bloco.style.visibility = "visible";
    instrucao ? (instrucao.style.visibility = "hidden") : "";
  } else {
    bloco.style.visibility = "hidden";
    instrucao ? (instrucao.style.visibility = "visible") : "";
  }
}

//Dividir os arquivos
//Mostrar/Ocultar Sugestão de filme
//part2-0-brincadeiras.html
document.getElementById("sugestao")
  ? (document.getElementById("sugestao").onclick = () =>
      mudarVisibilidade(
        document.getElementById("bloco-sugestao"),
        document.getElementById("instrucao")
      ))
  : "";

//Quadra de queimada
//part2-1-esportes
document.getElementById("quadra1").onclick = () =>
  mudarVisibilidade(document.getElementById("instrucaoQuadra1"));
document.getElementById("quadra2").onclick = () =>
  mudarVisibilidade(document.getElementById("instrucaoQuadra2"));
document.getElementById("quadra3").onclick = () =>
  mudarVisibilidade(document.getElementById("instrucaoQuadra3"));
document.getElementById("quadra4").onclick = () =>
  mudarVisibilidade(document.getElementById("instrucaoQuadra4"));
document.getElementById("quadra5").onclick = () =>
  mudarVisibilidade(document.getElementById("instrucaoQuadra5"));
document.getElementById("quadra6").onclick = () =>
  mudarVisibilidade(document.getElementById("instrucaoQuadra6"));
