//Mejor utilizar "keyup" en lugar de "keydown", ya que el evento se dispara menos veces
//con "keydown", se dispara indefinidamente mientras tenemos orpimida una tecla
document.addEventListener("keyup", procesarTeclaOrpimida);

var cuadrito = document.getElementById("areaTeclas");
var papel = cuadrito.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT:37,
    RIGHT:39
};

var Xactual = 100;
var Yactual = 100;
var Xfinal = Xactual + 2;
var Yfinal = Yactual + 2;
var longitudLinea = 20;
var espesorLinea = 3;
var color = "red";

hacerTrazo();

function procesarTeclaOrpimida(teclaOprimida)
{
    switch(teclaOprimida.keyCode)
    {
        case teclas.UP:
            if ( Yactual >= longitudLinea )
            {
                Yfinal = Yactual - longitudLinea;
                Xfinal = Xactual;
                hacerTrazo();
            }
            break;
    
        case teclas.DOWN:
            if ( Yactual <= 700 - longitudLinea )
            {
                Yfinal = Yactual + longitudLinea;
                Xfinal = Xactual;
                hacerTrazo();
                
            }
            break;
    
        case teclas.LEFT:
            if ( Xactual >= longitudLinea )
            {
                Xfinal = Xactual - longitudLinea;
                Yfinal = Yactual;
                hacerTrazo();
            }
            break;
        
        case teclas.RIGHT:
            if ( Xactual <= 700 - longitudLinea )
            {
                Xfinal = Xactual + longitudLinea;
                Yfinal = Yactual;
                hacerTrazo();
            }
            break;
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