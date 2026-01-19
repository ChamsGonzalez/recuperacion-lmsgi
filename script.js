let text = document.querySelector("#texto")
text.textContent = "Este texto ha sido modificado por JavaScript"

let frases = ["Hola mundo", "Hello world", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Olá mundo"]

let button = document.querySelector("#boton")
let texto = document.querySelector("#mensaje")

pbutton = document.createElement("p")
ptexto = document.createElement("p")


let saludo = frases[parseInt(Math.random() * frases.length)]

function clicar(){
    console.log(saludo)
    }

saludo.textContent = saludo

