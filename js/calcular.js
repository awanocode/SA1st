function calcular(coluna1, coluna2, coluna3, multiplicador, tolerancia, coeficiente){

var v1 = document.getElementById("coluna1").value;
var v2 = document.getElementById("coluna2").value;
var v3 = document.getElementById("multiplicador").value;
var v4 = document.getElementById("tolerancia").value;
var v5 = document.getElementById("coeficiente").value;



v3 = parseInt(multiplicador)
v4 = parseInt(tolerancia)
v5 = parseInt(coeficiente)

var conta = v1 + v2 + v3 + v4 + v5

}




function mostrarResultado() {

        document.getElementById("resultado").innerHTML = "O valor é: " + calcular() / 1000 + " kOhms e a tolerancia é de: " + coluna5 + "% " + coluna6 ;
    
}


/*function calcular(coluna1, coluna2, coluna3, multiplicador, tolerancia, coeficiente) {
    var coluna1 = document.getElementById('coluna1').value; //primeira faixa valor 0 a 9
    var coluna2 = document.getElementById('coluna2').value; //segunda faixa valor 0 a 9
    var coluna3 = document.getElementById('coluna3').value; // terceira faixa valor 0 a 9
    var multiplicador = document.getElementById('multiplicador').value; // quarta faixa multiplicador
    var tolerancia = document.getElementById('tolerancia').value; // quinta faixa tolerância
    var coeficiente = document.getElementById('coeficiente').value; // sexta faixa coeficiente de temperatura
    var conta;

    multiplicador = parseInt(multiplicador)
    tolerancia = parseInt(tolerancia)
    coeficiente = parseInt(coeficiente)

    
    // se coluna3 == 0 retorna soma dos valores
    if (coluna3 == 0) {
        conta = parseInt(coluna1) + parseInt(coluna2);
    } else { // ou soma coluna 1,2 e 3 e multiplica pela 4
        conta = (parseInt(coluna1) + parseInt(coluna2) + parseInt(coluna3)) * parseInt(multiplicador);
    }
    return conta;
    
} */