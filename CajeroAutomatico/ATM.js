var inventarioBilletes = [];
var maxCantidadDenominaciones = 7;

var txtValRetiro = document.getElementById("txtValRetiro");
var btnRetirar = document.getElementById("btnRetirar");
btnRetirar.addEventListener("click", iniciarSolicitud);

var valorRetiro;
var Mensaje="";
var nomtxtB = "";
var nomtxtC = "";

function iniciarSolicitud(){
    OrdenarInventarioBilletes();
    procesarRetiro();
    OrdenarInventarioBilletes();
    MostrarMensaje(Mensaje); 
}

function OrdenarInventarioBilletes(){
    inventarioBilletes.splice(0, inventarioBilletes.length); 
    ArrayOrdenado(parseInt(document.getElementById("txtB00").value), 
                  parseInt(document.getElementById("txtC00").value));
    ArrayOrdenado(parseInt(document.getElementById("txtB01").value), 
                  parseInt(document.getElementById("txtC01").value));
    ArrayOrdenado(parseInt(document.getElementById("txtB02").value), 
                  parseInt(document.getElementById("txtC02").value));
    ArrayOrdenado(parseInt(document.getElementById("txtB03").value), 
                  parseInt(document.getElementById("txtC03").value));
    ArrayOrdenado(parseInt(document.getElementById("txtB04").value), 
                  parseInt(document.getElementById("txtC04").value));
    ArrayOrdenado(parseInt(document.getElementById("txtB05").value), 
                  parseInt(document.getElementById("txtC05").value));   
    ArrayOrdenado(parseInt(document.getElementById("txtB06").value), 
                  parseInt(document.getElementById("txtC06").value));   
}

function ArrayOrdenado(nextDenominacion, nextCantidad){
    if ( nextDenominacion == 0 ){
        nextCantidad = 0;
    }
    var insertoDenominacion = false;
    if ( inventarioBilletes.length > 0 ){
        for ( var i = 0; i <= inventarioBilletes.length - 1; i++){     
            if ( insertoDenominacion == false ){
                if ( nextDenominacion > inventarioBilletes[i].denominacion ){
                    if ( nextCantidad > 0 || inventarioBilletes[i].cantidad == 0 ){                    
                        addDenominacion();
                    }
                }
                else if ( nextDenominacion < inventarioBilletes[i].denominacion ){
                    if ( nextCantidad > 0 && inventarioBilletes[i].cantidad == 0 ){
                        addDenominacion();
                    }
                }
                else if ( nextDenominacion == inventarioBilletes[i].denominacion && nextDenominacion > 0){
                    updDenominacion();
                }
                
            }
            if ( insertoDenominacion == true && i < inventarioBilletes.length - 1 ){
                updTxt();
            }                 
        }        
    }
    function addDenominacion (){
        inventarioBilletes.splice(i,0,new billete(nextDenominacion, nextCantidad));
        nomtxtB = "txtB0" + i;
        nomtxtC = "txtC0" + i;
        document.getElementById(nomtxtB).value = nextDenominacion;
        document.getElementById(nomtxtC).value = nextCantidad;
        insertoDenominacion = true;    

    }
    function updDenominacion (){
        inventarioBilletes.push(new billete(0, 0));
        nomtxtC = "txtC0" + i;
        document.getElementById(nomtxtC).value = parseInt(document.getElementById(nomtxtC).value) + nextCantidad;
        inventarioBilletes[i].cantidad += nextCantidad;
        if ( (inventarioBilletes.length - 1) <= maxCantidadDenominaciones ){
            nomtxtB = "txtB0" + (inventarioBilletes.length - 1);
            nomtxtC = "txtC0" + (inventarioBilletes.length - 1);
            document.getElementById(nomtxtB).value = 0;
            document.getElementById(nomtxtC).value = 0;
        }
        insertoDenominacion = true;
        i = inventarioBilletes.length;    
    }
    function updTxt(){
        nomtxtB = "txtB0" + (i+1);
        nomtxtC = "txtC0" + (i+1);
        document.getElementById(nomtxtB).value = inventarioBilletes[i+1].denominacion;
        document.getElementById(nomtxtC).value = inventarioBilletes[i+1].cantidad;
    }

    if ( insertoDenominacion == false ){
        inventarioBilletes.push(new billete(nextDenominacion, nextCantidad));
    }
}

function procesarRetiro(){    
    valorRetiro = parseInt(txtValRetiro.value);
    Mensaje="";
    if ( valorRetiro > 0 ){        
        ATM = new cajeroAutomatico(inventarioBilletes);
        if ( !ATM.validarRetiro(valorRetiro) ){
            Mensaje="No hay Dinero Disponible";            
        }
        else{
            if ( ATM.dispensarDinero(valorRetiro)){;             
                for ( var _iB in ATM.billetesENT )  {
                    for ( var iTxt = 0; iTxt < maxCantidadDenominaciones; iTxt++){
                        nomtxtC = "txtC0" + iTxt;
                        nomtxtB = "txtB0" + iTxt;
                        if ( ATM.billetesENT[_iB].denominacion == parseInt(document.getElementById(nomtxtB).value)){
                            document.getElementById(nomtxtC).value -= ATM.billetesENT[_iB].cantidad;                            
                            if ( ATM.billetesENT[_iB].cantidad > 0 ){
                                Mensaje += "Billetes de $" + ATM.billetesENT[_iB].denominacion + " : " + ATM.billetesENT[_iB].cantidad + "<br />";
                            }
                        }
                    }
                }
            }
            else{
                Mensaje="Cajero No Dispone con Denominaciones para este Retiro";
            }
        }
    }
    else{
        Mensaje="Debe Especificar el Valor a Retirar";
    }      
}

function MostrarMensaje(Mensaje) {
    resultado.innerHTML = Mensaje;
}