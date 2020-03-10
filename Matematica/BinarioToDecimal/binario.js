var htmlnumDecimal = document.getElementById("htmlnumDecimal");
var btnbtod = document.getElementById("btod");
btnbtod.addEventListener("click", calcularNumeroDecimal);
function calcularNumeroDecimal()
{
    var numdecimalRef = 1;
    var numDecimal = 0;
    for ( var i = 8; i >= 1; i-- )
    {
        numBinario = "bin" + i;
        numDecimal += ( numdecimalRef * parseInt(document.getElementById(numBinario).value))
        numdecimalRef = numdecimalRef * 2        
    }

    htmlnumDecimal.innerHTML = numDecimal;
}