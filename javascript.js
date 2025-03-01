const elemento=
document .querySelector('.photo');
//Seleciona o elemnto HTML a ser animado

elemento.animate([
    {transform: 'translateY(0)', opacity:0},
    //Keyframe inicial     
    ],{
        duration: 1000, 
        //Duração da animação em misissegundos
        easing: 'ease-in-out'
        //Funçao para controlar a velocidade da animação
    })

// Textos a serem digitados
const texto1 = "Diego Marayo";
const texto2 = "Olá! Meu nome é Diego Marayo e sou estudante de Engenharia de Software, atualmente no 1° semestre. Sou apaixonado por tecnologia e desenvolvimento web, sempre buscando aprender mais sobre HTML, CSS e JavaScript.Estou em constante evolução, explorando novas ferramentas e trabalhando em pequenos projetos para aprimorar minhas habilidades.Meu objetivo é me tornar um desenvolvedor fullstack e contribuir para o mundo da tecnologia.";

// Função para digitar texto e chamar o próximo quando terminar
function digitarTexto(elementoID, texto, indice = 0, callback = null) {
    const elemento = document.getElementById(elementoID);

    if (indice < texto.length) {
        elemento.innerHTML += texto.charAt(indice);
        setTimeout(() => digitarTexto(elementoID, texto, indice + 1, callback), 100);
    } else if (callback) {
        callback(); // Quando terminar, chama a próxima função
    }
}

// Inicia a digitação do primeiro texto e, quando terminar, começa o segundo
digitarTexto("texto-digitado1", texto1, 0, () => {
    digitarTexto("texto-digitado2", texto2);
});



