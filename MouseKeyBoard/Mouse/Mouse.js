var longitudLinea = 20;
var espesorLinea = 3;
var color = "red";
var lCanvas = 700;
var dibujar = false;

var btnLimpiar = document.getElementById("btnLimpiar");
var cuadrito = document.getElementById("areaMouse");
var papel = cuadrito.getContext("2d");

window.addEventListener("mouseup", capturarDatosUP)
cuadrito.addEventListener("mousedown", capturarDatosDOWN);
cuadrito.addEventListener("mousemove", capturarDatosMOVE);
btnLimpiar.addEventListener("click", function(){Limpiar_Lienzo(papel)});

var Xactual;
var Yactual;
var Xfinal;
var Yfinal;

function capturarDatosDOWN(datosMouseDOWN)
{
    dibujar=true;
    console.log(datosMouseDOWN);
    Xactual = datosMouseDOWN.layerX;
    Yactual = datosMouseDOWN.layerY;

}

function capturarDatosUP(datosMouseUP)
{
    dibujar=false;    
}

function capturarDatosMOVE(datosMouseMOVE)
{
    if ( dibujar == true )
    {
        console.log(datosMouseMOVE);
        Xfinal = datosMouseMOVE.layerX;
        Yfinal = datosMouseMOVE.layerY;
        if (Xfinal < 0 || Xfinal > lCanvas || Yfinal < 0 || Yfinal > lCanvas )
        {
            dibujar = false;
        }
        
    }  
    if ( dibujar == true )
    {
        hacerTrazo();
    }
}

function hacerTrazo()
{
    Dibujar_Linea(color, espesorLinea, Xactual, Yactual, Xfinal, Yfinal, papel);
    Xactual = Xfinal;
    Yactual = Yfinal;

}
function Dibujar_Linea(color, espesor, xInicial, yInicial, xFinal, yFinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = espesor;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();

}

function Limpiar_Lienzo (lienzo)
{
    lienzo.clearRect(0, 0, lCanvas, lCanvas);
}