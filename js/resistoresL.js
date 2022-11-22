function calcular() {

    var r1 = document.getElementById("r1").value
    var r2 = document.getElementById("r2").value
    var r3 = document.getElementById("r3").value
    var r4 = document.getElementById("r4").value
    var r5 = document.getElementById("r5").value
    Number (r1, r2, r3, r4, r5)
    soma = parseInt(r1) + parseInt(r2) + parseInt(r3) + parseInt(r4) + parseInt(r5)


    resposta.textContent = ` Req= ${soma} Ω`
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)
