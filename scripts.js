
let chave = "0be78215627400d57b348257c88c2b9f"

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}
function colocarnatela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = " umidade: " + (dados.main.humidity) + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".country").innerHTML = "pais: " + (dados.sys.country)
}
async function buscarcidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="

        + cidade + "&appid=" + chave +
        "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())

    colocarnatela(dados)
}
