//Quadra de queimada
//part2-1-esportes
if (typeof mudarVisibilidade !== "undefined") {
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


  document.getElementById("sugestao-43").onclick = () =>
    mudarVisibilidade(
      document.getElementById("bloco-sugestao-43"),
      document.getElementById("instrucao-43")
    );
}
