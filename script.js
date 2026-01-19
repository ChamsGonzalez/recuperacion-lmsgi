let text = document.querySelector("#texto")

ptext = document.createElement("p")

ptext.textContent = "Este texto ha sido modificado por JavaScript"

let frases = ["Hola mundo", "Hello world", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Olá mundo"]

let button = document.querySelector("#boton")
let texto = document.querySelector("#mensaje")

pbutton = document.createElement("p")
ptexto = document.createElement("p")

function clicar(){
    return frases[parseInt(Math.random() * frases.length)]
    }