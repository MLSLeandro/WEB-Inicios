var imagenes = [];

var castofCharacters = [];

// con push se adiciona un item al final del arreglo
castofCharacters.push(new personajePakiman("Super PIG", 120, 40, "cerdo", "cerdo.png"));
castofCharacters.push(new personajePakiman("Super Pollo", 80, 50, "pollo", "pollo.png"));
castofCharacters.push(new personajePakiman("super COW", 100, 30, "vaca", "vaca.png"));

// estos ciclos son especiales permite recorrer un dicciaron de datos sin necesidad de conocer la cantidad de datos que tiene
for ( var personaje in castofCharacters) // la variable personaje se alimenta con el indice
{
    //console.log(castofCharacters[personaje]);
}

for ( var personaje of castofCharacters) // la variable personaje se alimenta con el objeto
                                         // Solo funciona si el diccionario o arreglo tiene un indice
{
    personaje.mostrarPersonaje();
    //console.log(personaje);
}

for ( var i in imagenes)
{
    console.log(i);
    console.log(imagenes[i]);
}