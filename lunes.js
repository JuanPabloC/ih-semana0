console.log("Hola Mundo")

const bonafont = "agua"
console.log(bonafont)


/**
 * Bloque de código que verifique una hora en una variable, 
 * y si es de 0000 a 0600: buenos dias
 * si es 0000 a 1159: buenos dias
 * si es 1200 a 1759: buenas tardes
 * si es 1800 a 2359: buenas noches
 * 
**/

const hora = 1139;

if (hora >= 0000 && hora <= 1159){
    console.log("Buenos Dias")
} else if (hora >= 1200 && hora <= 1759) {
    console.log("Buenas Tardes")
} else if (hora >= 1600 && hora <= 2359) {
    console.log("Buenas Noches")
} else {
    console.log("Hora no válida")
}