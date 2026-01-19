let text = document.querySelector("#texto")

ptext = document.createElement("p")

ptext.textContent = "Este texto ha sido modificado por JavaScript"

let frases = ["Hola mundo", "Hello world", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Olá mundo"]

let button = document.querySelector("#boton")
let texto = document.querySelector("#mensaje")

function clicar(button){
    return texto(frases[parseFloat(Math.random)])
    }