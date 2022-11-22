function mostrar_abas(obj) {
    document.getElementById('aba1').style.display="none";
    document.getElementById('aba2').style.display="none";
   
   if(obj.text === 'Mostra Aba 1'){
       document.getElementById('div_aba1').style.display="block";
       obj.text = 'Mostra Aba 2';
   }else{
       document.getElementById('div_aba2').style.display="block";
       obj.text = 'Mostra Aba 1';
   }
 }


function calcular() {

    var r1 = parseInt(document.getElementById("r1").value)
    var r2 = parseInt(document.getElementById("r2").value)
    var r3 = parseInt(document.getElementById("r3").value)
    var r4 = parseInt(document.getElementById("r4").value)
    var r5 = parseInt(document.getElementById("r5").value)
    r4, r5 = 0
    soma =  1/ (1/ r1 + 1/ r2 + 1/ r3)

    resposta1.textContent = `Resultado para 3 Resistores é: Req= ${soma.toFixed(5)} Ω`
}

var btCalcular1 = document.getElementById("btCalcular1")
btCalcular1.addEventListener("click", calcular)

//--------------------------------------------------------

function calcular2() {
 
    var r1 = parseInt(document.getElementById("r1").value)
    var r2 = parseInt(document.getElementById("r2").value)
    var r3 = parseInt(document.getElementById("r3").value)
    var r4 = parseInt(document.getElementById("r4").value)
    //var r5 = parseInt(document.getElementById("r5").value)
    //r5 
    soma =  1/ (1/ r1 + 1/ r2 + 1/ r3 + 1/ r4)

    resposta2.textContent = `Resultado para 4 Resistores é: Req= ${soma.toFixed(5)} Ω`
}
var btCalcular2 = document.getElementById("btCalcular2")
btCalcular2.addEventListener("click", calcular2)

//--------------------------------------------------------

function calcular3() {
 
    var r1 = parseInt(document.getElementById("r1").value)
    var r2 = parseInt(document.getElementById("r2").value)
    var r3 = parseInt(document.getElementById("r3").value)
    var r4 = parseInt(document.getElementById("r4").value)
    var r5 = parseInt(document.getElementById("r5").value)
   
    soma =  1/ (1/ r1 + 1/ r2 + 1/ r3 + 1/ r4 + 1/r5)

    resposta3.textContent = `Resultado para 5 Resistores é: Req= ${soma.toFixed(5)} Ω`
}
var btCalcular3 = document.getElementById("btCalcular3")
btCalcular3.addEventListener("click", calcular3)