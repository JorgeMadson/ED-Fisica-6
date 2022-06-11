//Mostrar/Ocultar Sugestão de filme
document.getElementById("sugestao").onclick = () =>
  mudarVisibilidade(
    document.getElementById("bloco-sugestao"),
    document.getElementById("instrucao")
  );
function mudarVisibilidade(bloco, instrucao) {
  if (bloco.style.visibility === "hidden") {
    bloco.style.visibility = "visible";
    instrucao.style.visibility = "hidden";
  } else {
    bloco.style.visibility = "hidden";
    instrucao.style.visibility = "visible";
  }
}
