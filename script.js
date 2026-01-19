let text = document.querySelector("#texto")
text.textContent = "Este texto ha sido modificado por JavaScript"

let frases = ["Hola mundo", "Hello world", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Olá mundo"]

let button = document.querySelector("#boton")
let texto = document.querySelector("#mensaje")

let saludo = frases[parseInt(Math.random() * frases.length)]

function clicar(){
    let saludo = frases[parseInt(Math.random() * frases.length)]
    console.log(saludo)
    texto.textContent = saludo
    }


