const key = "dea00daf08c4125e20d3484d8d9d80b8"

function display(dados){
    document.getElementById('title').innerHTML ="Tempo em " + dados.name
    document.getElementById('temp').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.getElementById('text-preview').innerHTML = dados.weather[0].description
    document.getElementById('umidade').innerHTML ="Umidade do ar: " + dados.main.humidity +"%" 
    document.getElementById("icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function search(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(reposta => reposta.json())
    console.log(dados)
    display(dados)
}


function buscar(){

    let cidade = document.querySelector('.cidade').value
    search(cidade)
}