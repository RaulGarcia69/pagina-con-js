window.onload = function() {
    alert("PEDRO SANXEEEEE")
    saludo();
}




function saludo() {

    const d = new Date();
    let hora = d.getHours();
    if (hora < 17) {
        document.getElementById("saludo").innerHTML = "¡Buenos días!"
        document.getElementsByTagName('body')[0].style.backgroundColor = "rgb(238, 107, 47)"
    } else if (hora > 16) {
        document.getElementById("saludo").innerHTML = "¡Buenas noches!"
        document.getElementsByTagName('body')[0].style.backgroundColor = "#3E3730"
    }
}

function getListRandom(n, min, max) {
    numeros = new Array()
    for (let i = 0; i < n; i++) {
        numero = getRndInteger(min, max)
        numeros.push(numero)
        return numeros
    }


}



function buttonOpacityimg(id) {
    if (document.getElementById(id).style.opacity == "0.5") {
        document.getElementById(id).style.opacity = "1"
    } else {
        document.getElementById(id).style.opacity = "0.5"
    }


}










function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function buttonOpacity() {
    if (document.getElementsByTagName('body')[0].style.opacity == "1") {
        document.getElementsByTagName('body')[0].style.opacity = "0.5"
    } else {
        document.getElementsByTagName('body')[0].style.opacity = "1"
    }

}


function galleryRandom() {

}