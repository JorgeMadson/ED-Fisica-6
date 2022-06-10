//Mostrar/Ocultar Sugestão de filme
document.getElementById("sugestao").onclick = () =>
  mudarVisibilidade(document.getElementById("bloco-sugestao"));
function mudarVisibilidade(bloco) {
  if (bloco.style.visibility === "hidden") {
    bloco.style.visibility = "visible";
  } else {
    bloco.style.visibility = "hidden";
  }
}
