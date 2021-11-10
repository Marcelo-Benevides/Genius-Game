//criando uma variavel que atribui ordem aleatoria das cores
let order = [];

//criando variavel de ordem dos clicks
let clickOrder = [];

// Score de pontos
let score = 0;

// Será atribuido um numero para cada cor: 0 = verde; 1 = vermelho; 2 = amarelo; 3 = azul
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//função que atribui geração ordem aleatoria de numeros entre 0 e 3
let ordemAleatoria = () => {
// variavel que irá guardar o numero aleatorio a cada rodada
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

// acender a cor que corresponde ao numero sorteado
// usando o for ele vai percorrer o array e executar a função dentro dele
for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
    }
}   

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');   
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//verifica se as cores clicadas são as mesmas da ordem gerada
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando proximo nível!`);
        nextLevel();
    }
}

//função para o click
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//função para ir aumentando o nivel
let nextLevel = () => {
    score++;
    ordemAleatoria();
}

//função para quando for gameover
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo! Clique em OK para iniciar um novo jogo.`);
    order = [];
    clickOrder = [];

    playGame();
}

//função para inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando um novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de click para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
