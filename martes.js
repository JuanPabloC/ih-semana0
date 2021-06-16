// FUNCIONES


// 1. Declaracion

function suma(x,y) {
    return x + y
}

// 2. Invocacion

const suma1 = suma(4,5) // => 9
console.log(suma1)
const suma2 = suma(1436,5876)
console.log(suma2)

//funcion que dependiendo el idioma que pidamos, salude de una manera distinta
// idiomas: Ingles, español, aleman

function hello(lang) {
    if (lang == "ale"){
        return "Hallo"
    } else if (lang == "esp") {
        return "Hola"
    } else if (lang == "ing") {
        return "Hello"
    } else if (lang == "chi"){
        return "Ni hao"
    } else {
        return "Idioma sin soporte"
    }
}