/*Este codigo no corre en el navegador, corre solo en el servidor y se abre con nodejs. 
el servidor en este momento es mi propio computador el cual tiene instalado nodejs
la libreria express se debio instalar local (en la carpeta del proyecto) "npm instal express" .. porque no funciono la instalacion global
esta instalcion crea una carpeta node_modules en la carpeta del proyecto   

Para iniciar el servidor es con "node + nombre del archivo(en este caso "servidor.js") - se debe iniciar para acceder desde el browser
para acceder desde el browser es con 127.0.0.1, o con tu ip local :8989, q es el puerto q se definio
para cerrar el servidor, es con crtl + c

eN WINDOWS hay un firewall, que en ocaciones no deja abrir, por lo tanto se debe ir al firewall de windows y permitir a una 
caracteristica o aplicacion pasar el firewall de window, y habilitar la aplicacion "node.js Server-side..."
*/

var express = require('express'); /*requiere no existe en los navegadores,  (me traigo todo y lo asigno a una var, esa var se vuelve funcion)
                                       solo existe en el javascript que se corre en el backend (usando nodejs)
                                       Busca los frameworks o librerias instaladas en tu computador o instaladas en tu proyecto, 
                                       y se las trae y las guarda en una variable, en este caso .. express */
                                    /*Requiere tambien se puede usar en javascript desde el navegador, pero con una libreria especial
                                    */
                                      
                                      
var aplicacion = express() // invoco la funcion, guardada en la variable "express" 


aplicacion.get('/', function(req, res){  /*es como un addeventlistener, se coloca la direccion q se va a abrir "/" es el home 
                                           y despues la funcion q se va a disparar cuando arranque esa URL
                                           req=request, peticion lo que el navegador le esta pidiendo al servidor
                                           res=response, resultado, lo que el servidor le entrega al navegador
                                          */
    res.send('hello world')
})


// Apliquemos el codigo de arriba de una forma personalizada.. creemos dos url 
aplicacion.get ("/", inicioURL);
aplicacion.get("/cursos", cursos)

function inicioURL (peticion, resultado){
    resultado.send("este es el home")

}

function cursos (peticion, resultado){
    resultado.send("estos son los cursos")

}


aplicacion.listen(8989) //porner a correr el servidor, y el servidor lo vamos a correr en el 8989 (el generico es 8080)

