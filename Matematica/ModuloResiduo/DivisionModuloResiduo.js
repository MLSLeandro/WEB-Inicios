var txtnroIni = document.getElementById("txtnroINI");
var txtnroFIN = document.getElementById("txtnroFIN");
var txtnroFIZZ = document.getElementById("txtnroFIZZ");
var txtnroBUZZ = document.getElementById("txtnroBUZZ");
var btnProcesar = document.getElementById("btnProcesar");
btnProcesar.addEventListener("click", generarFIZZBUZZ);


function generarFIZZBUZZ ()
{
    var nroInicial = parseInt(txtnroIni.value);
    var nroFinal = parseInt(txtnroFIN.value);
    var nroFIZZ = parseInt(txtnroFIZZ.value);
    var nroBUZZ = parseInt(txtnroBUZZ.value);
    if ( nroInicial < nroFinal )
    {
        for ( i = nroInicial; i <= nroFinal; i++ )
        {            
            if ( nroFIZZ >= nroInicial && nroFIZZ <= nroFinal )
            {
                if ( esDivisible(i, nroFIZZ) )
                {
                    document.write("<br>" + i + " es FIZZ!!");
                }
            }
            if ( nroBUZZ >= nroInicial && nroBUZZ <= nroFinal )
            {
                if ( esDivisible(i, nroBUZZ) )
                {
                    if ( !esDivisible(i, nroFIZZ) )
                    {
                        document.write("<br>" + i + " es BUZZ!!");
                    }
                    else
                    {
                        document.write(" y es BUZZ!!");
                    }
                }
            }


            if ( !esDivisible(i, nroFIZZ) && !esDivisible(i, nroBUZZ) )
            {
                document.write("<br>" + i);
            }
        }
        
    }
}

function esDivisible ( numero, divisor)
{
    if ( numero%divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}