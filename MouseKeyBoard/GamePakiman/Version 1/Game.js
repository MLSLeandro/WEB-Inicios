var villaPlatzi = document.getElementById("villaPlatzi");
var papel = villaPlatzi.getContext("2d");

// Cpautar informacion de interaccion con el Mouse
window.addEventListener("mouseup", capturarDatosUP)
villaPlatzi.addEventListener("mousedown", capturarDatosDOWN);
villaPlatzi.addEventListener("mousemove", capturarDatosMOVE);


var fondo = {
    alias: "tile",
    url: "tile.png",
    posicionX: 0,
    posicionY: 0,
    alto: 500,
    largo: 500,
    cargaOK: false
    

};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", 
                            function(){cargarEscenario(fondo.imagen, fondo.alias, fondo.posicionX, fondo.posicionY, 1, papel)});

var vaca = {
    alias: "cow",
    url: "vaca.png",
    posicionX: 0,
    posicionY: 0,
    cantidad: numeroAleatorio(5, 10),
    alto: 80,
    largo: 80,
    mover: false,
    cargaOK: false  
};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", 
                            function(){cargarEscenario(vaca.imagen, vaca.alias, vaca.posicionX, vaca.posicionY, vaca.cantidad, papel)});


var cerdo = {
    alias: "pig",
    url: "cerdo.png",
    posicionX: numeroAleatorio(0, 420),
    posicionY: numeroAleatorio(0, 420),
    cantidad: numeroAleatorio(1, 1),
    alto: 80,
    largo: 80,
    mover: false,
    cargaOK: false
};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", 
                            function(){cargarEscenario(cerdo.imagen, cerdo.alias, cerdo.posicionX, cerdo.posicionY, cerdo.cantidad, papel)});



function cargarEscenario (imagen, alias, posX, posY, cantidad, lienzo)
{
    if ( alias == "tile" && fondo.cargaOK == false )
    {
        fondo.cargaOK=true;
        lienzo.drawImage(imagen, posX, posY);
    }
    
    if ( alias == "cow" && fondo.cargaOK == true && vaca.cargaOK == false )
    {
        vaca.cargaOK=true;
        for ( var i = 0; i<cantidad; i++)
        {
            // Este calculo del número aleatorio es para que las vacas se solapen en lo minimo (las coordenadas no sean tan cercanas)
            posX = numeroAleatorio(0, 5);
            posY = numeroAleatorio(0, 5);
            posX = posX * 60;
            posY = posY * 60;
            lienzo.drawImage(imagen, posX, posY);
        }
    }
    if ( alias == "pig" && fondo.cargaOK == true)
    {
        cerdo.cargaOK=true;
        lienzo.drawImage(imagen, posX, posY);
        cerdo.posicionX = posX;
        cerdo.posicionY = posY;
    }

}


function numeroAleatorio(minimo, maximo)
{
    var numAleatorio = Math.floor(Math.random() * ( maximo - minimo + 1)) + minimo;
    return numAleatorio;
}

function capturarDatosDOWN(datosMouseDOWN)
{
    var mouseX = datosMouseDOWN.layerX;
    var mouseY = datosMouseDOWN.layerY;
    console.log("XC:" + cerdo.posicionX + "XM:" + mouseX + "YC:" + cerdo.posicionY + "YM:" + mouseY);
    console.log(cerdo.mover);
    if ( mouseX >= cerdo.posicionX && mouseX <= cerdo.largo + cerdo.posicionX &&
         mouseY >= cerdo.posicionY && mouseY <= cerdo.alto + cerdo.posicionY )
    {   
        if ( cerdo.cargaOK == true )
        {   
            cerdo.mover = true;
        }        
    }
}

function capturarDatosUP(datosMouseUP)
{
    cerdo.mover=false;    
}

function capturarDatosMOVE(datosMouseMOVE)
{
    var mouseX = datosMouseMOVE.layerX;
    var mouseY = datosMouseMOVE.layerY;
    if ( cerdo.mover == true )
    {        
        if (mouseX < 0 || mouseX > fondo.largo || mouseY < 0 || mouseY > fondo.alto )
        {
            cerdo.mover = false;
        }
        
    }  
    if ( cerdo.mover == true )
    {
        //cerdo.imagen.addEventListener("load", 
        //                    function(){cargarEscenario(cerdo.imagen, cerdo.alias, mouseX, mouseY, cerdo.cantidad, papel)});
        cargarEscenario(cerdo.imagen, cerdo.alias, mouseX, mouseY, cerdo.cantidad, papel);
    }
}
