let r = 0;
let g = 0;
let b = 0;
let array = [];
let bttn = document.querySelector('#botao');
let titulo = document.querySelector('#titulo-h1');

function escolheCor(){
    return array = [r = parseInt(Math.random() * 256), g = parseInt(Math.random() * 256), b = parseInt(Math.random() * 256)];
};

function mudaBg(){
    let bg = document.querySelector('#background');

    colors = escolheCor();
    bg.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    titulo.innerHTML = `Background-color: RGB(${colors[0]}, ${colors[1]}, ${colors[2]})`;
};

bttn.addEventListener('click', mudaBg);