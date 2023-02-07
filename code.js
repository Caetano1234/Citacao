var x = getProperty("text_area", "font-size");
setText("label1_vermelho", "Vermelho - " + getNumber("slider1_vermelho"));
setText("label2_verde", "Verde - " + getNumber("slider2_verde"));
setText("label3_azul", "Azul - " + getNumber("slider3_azul"));

onEvent("cor_citação", "input", function( ) {
  setProperty("text_area", "text-color", getText("cor_citação"));
});
onEvent("slider1_vermelho", "input", function( ) {
  setProperty("text_area", "background-color", rgb(getProperty("slider1_vermelho", "value"), getProperty("slider2_verde", "value"), getProperty("slider3_azul", "value"), 0.5));
  setText("label1_vermelho", "Vermelho - " + getNumber("slider1_vermelho"));
});
onEvent("slider2_verde", "input", function( ) {
  setProperty("text_area", "background-color", rgb(getProperty("slider1_vermelho", "value"), getProperty("slider2_verde", "value"), getProperty("slider3_azul", "value"), 0.5));
  setText("label2_verde", "Verde - " + getNumber("slider2_verde"));
});
onEvent("slider3_azul", "input", function( ) {
  setProperty("text_area", "background-color", rgb(getProperty("slider1_vermelho", "value"), getProperty("slider2_verde", "value"), getProperty("slider3_azul", "value"), 0.5));
  setText("label3_azul", "Azul - " + getNumber("slider3_azul"));
});
onEvent("mais", "click", function( ) {
  x = x + 2;
  setProperty("text_area", "font-size", x);
});
onEvent("menos", "click", function( ) {
  x = x - 2;
  setProperty("text_area", "font-size", x);
});
onEvent("dropdown", "input", function( ) {
  setProperty("text_area", "font-family", getText("dropdown"));
});
