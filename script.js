var sobralTurmas = document.getElementById("sobralTurmas") 
if (sobralTurmas != null) {
    sobralTurmas.addEventListener("click",function(){
        window.location.href = "turmas.html"
    
    }) 
}


var remotaTurmas = document.getElementById("remotaTurmas")
if (remotaTurmas != null) {
    remotaTurmas.addEventListener("click",function(){
        window.location.href = "turmas.html"
    })
}

var convida = document.getElementById("convida")
if (convida != null) {
    convida.addEventListener("click",function(){
         window.location.href = "acoes.html"
    })
}

var noite = document.getElementById("noite")
if (noite != null) {
    noite.addEventListener("click",function(){
        window.location.href = "acoes.html#noiteCanta"
    })
}

var logo = document.getElementById("logo")
if (logo != null) {
    logo.addEventListener("click", function(){
    console.log("deu certo")
        window.location.href = "index.html"
    })
}
