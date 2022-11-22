var container1 = document.getElementById('container1'); //primeira faixa valor 0 a 9
var coluna2 = document.getElementById('coluna2'); //segunda faixa valor 0 a 9
var coluna3 = document.getElementById('coluna3'); // terceira faixa valor 0 a 9
var coluna4 = document.getElementById('coluna4'); // quarta faixa multiplicador
var coluna5 = document.getElementById('coluna5'); // quinta faixa tolerância
var coluna6 = document.getElementById('coluna6'); // sexta faixa coeficiente de temperaturafunction esconder() {
var seletor = document.getElementById('lineSelector');


seletor.addEventListener('change', (e) => {

    let valorSelect = seletor.value

    //se a opção 3 linhas for selecionada então desabilita col3 e 4
    if (valorSelect === "container1") {
        container1.hidden = false

    }

})








/**function calcular(coluna1, coluna2, coluna3, coluna4, coluna5, coluna6) {

    var calcular;


    // se coluna3 == 0 retorna soma dos valores
    if (coluna3 == 0) {
        conta = parseInt(coluna1) + parseInt(coluna2);
    } else { // ou soma coluna 1,2 e 3 e multiplica pela 4
        conta = (parseInt(coluna1) + parseInt(coluna2) + parseInt(coluna3)) * parseInt(coluna4);
    }
    return conta;
}
var calcular = document.getElementById("click")
document.getElementById("resultado").innerHTML = "O valor é: " + conta() / 1000 + " kOhms e a tolerancia é de: " + coluna5 + "% " + coluna6;
**/

