function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // Não é necessário fazer if elemento != null, basta fazer if elemento -> Quer dizer que o elemento existe
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log("Elemento não encontrado");
    }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

/*let contador = 0;

Exemplo com while
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    // Função anonima e utilizada para não realizar a função tocaSom na hora em que o while e feito
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador += 1
}*/

//Exemplo com for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    // Função anonima e utilizada para não realizar a função tocaSom na hora em que o while e feito
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    //Quando a tecla for abaixada
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa');
    }
}