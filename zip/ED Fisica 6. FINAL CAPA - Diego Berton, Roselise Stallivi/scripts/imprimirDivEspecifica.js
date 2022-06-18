function imprimirDivEspecifica(elem) {
  var mywindow = window.open('', 'PRINT', 'height=500,width=500');

  mywindow.document.write('<html><head><title>Entrevista</title>');
  mywindow.document.write('</head><body>');
  mywindow.document.write(document.getElementById(elem).innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

  return true;
}
