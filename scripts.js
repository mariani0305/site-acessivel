document.addEventListener('DOMContentLoaded', function(){
    const botaoDiminuirFonte = document.getElementById('diminuir-fonte')
    //Pega o botão de aumentar fonte e coloca na constante

    let tamanhoDaFonte = 1
    // define o tamanho da fonte na variável

    botaoDiminuirFonte.addEventListener('click', function(){
        tamanhoDaFonte = tamanhoDaFonte + 0.1
        document.body.style.fontSize = `${tamanhoDaFonte}rem`
    })


})