function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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
}