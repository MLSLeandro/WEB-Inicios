class personajePakiman
{
    constructor(nombre, vida, ataque, animal, nombreimagen) // Se dispara cuando se crea el objeto
        // Los atributos o variables de la clase se 
    {
        this.nombre = nombre; //"this", indicador de la instancia de donde estoy
        this.vida = vida;     // los atributos de la clase se puden llenar con variables globales tambien
        this.ataque = ataque;
        this.animal = animal;
        this.imagen = new Image();
        this.imagen.src = nombreimagen;
        imagenes[nombre] = nombreimagen;        
    }
    hablar () // Funcion dentro de la clase (metodos)
    {
        alert(this.nombre);

    }
    mostrarPersonaje ()
    {
        document.body.appendChild(this.imagen); // Se esta agregando un hijo al arbol del body html 
                                                // se agrega un objeto al body en tiempo de ejecucio (el codigo html cambia automaticamente)
        document.write("<br><strong>" + this.nombre + "</strong><br>");
        document.write("Vida: " + this.vida + "<br>");
        document.write("ataque: " + this.ataque + "<hr>");       
    }
}