function mudarVisibilidade(bloco, instrucao) {
  if (bloco.style.visibility === "hidden") {
    bloco.style.visibility = "visible";
    instrucao ? (instrucao.style.visibility = "hidden") : "";
  } else {
    bloco.style.visibility = "hidden";
    instrucao ? (instrucao.style.visibility = "visible") : "";
  }
}
