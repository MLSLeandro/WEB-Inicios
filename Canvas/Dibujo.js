var txtLineas = document.getElementById("txtLineas");
var txtAlto = document.getElementById("txtAlto");
var txtLargo = document.getElementById("txtLargo");
var txtColorC1 = document.getElementById("txtColorC1");
var txtColorC2 = document.getElementById("txtColorC2");
var txtColorC3 = document.getElementById("txtColorC3");
var txtColorC4 = document.getElementById("txtColorC4");
var txtCooXi = document.getElementById("txtCooXi");
var txtCooYi = document.getElementById("txtCooYi");
var btnDibujar = document.getElementById("btnDibujar");
btnDibujar.addEventListener("click", Dibujo_Usuario);
var d = document.getElementById("Dibujito");
var lienzo = d.getContext("2d");

function Limpiar_Lienzo ()
{
    lienzo.clearRect(0, 0, 700, 700);
}

function Dibujar_Linea(color, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();

}

function Dibujar_Cuadrado(color, alto, largo, xInicial, yInicial)
{
    Dibujar_Linea(color, xInicial, yInicial, largo + xInicial, yInicial);
    Dibujar_Linea(color, xInicial, yInicial, xInicial, alto + yInicial);
    Dibujar_Linea(color, xInicial, alto + yInicial, largo + xInicial, alto + yInicial);
    Dibujar_Linea(color, largo + xInicial, alto + yInicial, largo + xInicial, yInicial);

}

function Dibujar_Arco(cuadrante, color, alto, largo, CantidadLineas, xInicial, yInicial)
{
    var cX;
    var cY;
    var distanciaCoordenadaX = parseFloat(largo/CantidadLineas);
    var distanciaCoordenaday = parseFloat(alto/CantidadLineas);

    if ( cuadrante == 4 ) 
    {
        cX = distanciaCoordenadaX + xInicial;
        cY = yInicial;
    }
    if ( cuadrante == 3)
    {
        cX = xInicial;
        cY = ( alto + yInicial ) - distanciaCoordenaday; 
    }
    if ( cuadrante == 2 ) 
    {
        cX = ( largo + xInicial ) - distanciaCoordenadaX;
        cY = alto + yInicial; 
    }
    if ( cuadrante == 1 ) 
    {
        cX = largo + xInicial;
        cY = distanciaCoordenaday + yInicial; 
    }

    
    for ( i = 1; i <= CantidadLineas; i++)
    {
        if ( cuadrante == 4 )  
        {
            Dibujar_Linea(color, xInicial, cY, cX, alto + yInicial);
            cX = cX + distanciaCoordenadaX;
            cY = cY + distanciaCoordenaday;
        }
        if ( cuadrante == 3 )
        {
            Dibujar_Linea(color, cX, alto + yInicial, largo + xInicial, cY);
            cX = cX + distanciaCoordenadaX;
            cY = cY - distanciaCoordenaday;
        }
        if ( cuadrante == 2 ) 
        {
            Dibujar_Linea(color, largo + xInicial, cY, cX, yInicial);
            cX = cX - distanciaCoordenadaX;
            cY = cY - distanciaCoordenaday;
        }
        if ( cuadrante == 1 ) 
        {
            Dibujar_Linea(color, cX, yInicial, xInicial, cY);
            cX = cX - distanciaCoordenadaX;
            cY = cY + distanciaCoordenaday;
        }
             
    }
}

function Figura_Completa (color, alto, largo, CantidadLineas, xInicial, yInicial)
{
    Dibujar_Cuadrado(color, alto, largo, xInicial, yInicial)
    Dibujar_Arco(1, color, alto, largo, CantidadLineas, xInicial, yInicial);
    Dibujar_Arco(2, color, alto, largo, CantidadLineas, xInicial, yInicial);
    Dibujar_Arco(3, color, alto, largo, CantidadLineas, xInicial, yInicial);
    Dibujar_Arco(4, color, alto, largo, CantidadLineas, xInicial, yInicial);
}

function Dibujo_Usuario ()
{
    
    var DU_cooXi = parseInt(txtCooXi.value);
    var DU_cooYi = parseInt(txtCooYi.value);
    var DU_Lineas = parseInt(txtLineas.value);
    var DU_colorC1 = txtColorC1.value;
    var DU_colorC2 = txtColorC2.value;
    var DU_colorC3 = txtColorC3.value;
    var DU_colorC4 = txtColorC4.value;
    var DU_alto = parseInt(txtAlto.value);
    var DU_largo = parseInt(txtLargo.value);

    Limpiar_Lienzo();

    Dibujar_Cuadrado(DU_colorC1, DU_alto, DU_largo, DU_cooXi, DU_cooYi);
    if ( DU_colorC1 != " " )
    {
        Dibujar_Arco(1, DU_colorC1, DU_alto, DU_largo, DU_Lineas, DU_cooXi, DU_cooYi);
    }
    if ( DU_colorC2 != " " )
    {
        Dibujar_Arco(2, DU_colorC2, DU_alto, DU_largo, DU_Lineas, DU_cooXi, DU_cooYi);
    }
    if ( DU_colorC3 != " " )
    {
        Dibujar_Arco(3, DU_colorC3, DU_alto, DU_largo, DU_Lineas, DU_cooXi, DU_cooYi);
    }
    if ( DU_colorC4 != " " )
    {
        Dibujar_Arco(4, DU_colorC4, DU_alto, DU_largo, DU_Lineas, DU_cooXi, DU_cooYi);
    }
}