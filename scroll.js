const curiosidadesSection = document.querySelector('.curiosidades');
const pilotandoSection = document.querySelector('.pilotando');
const componentesSection = document.querySelector('.componentes');
const tiposVoosSection = document.querySelector('.tiposVoos');

const balon1 = document.querySelector('.balon1');
const balon2 = document.querySelector('.balon2');
const balon3 = document.querySelector('.balon3');
const nuvem1 = document.querySelector('.nuvem1');
const nuvem2 = document.querySelector('.nuvem2');
const nuvem3 = document.querySelector('.nuvem3');
const nuvem4 = document.querySelector('.nuvem4');
const nuvem5 = document.querySelector('.nuvem5');
const nuvem6 = document.querySelector('.nuvem6');
const nuvem7 = document.querySelector('.nuvem7');

function applyCuriosidades() {
    balon1.style.transform = `translate(80%, -10%) scale(1.5)`; //vermelho
    balon2.style.transform = `translate(400%, -200%) scale(2)`; // amarelo
    balon3.style.transform = `translate(-300%, 10%) scale(1.3)`; // verde
    nuvem1.style.transform = `translate(70%, 60%) scale(1.3)`; //vermelho
    nuvem2.style.transform = `translate(250%, 50%) scale(1.3)`; //amarelo
    nuvem3.style.transform = `translate(100%, 20%)`; //verde
    nuvem4.style.transform = `translate(100%, 20%)`; // roxo
    nuvem5.style.transform = `translate(300%, 20%)`;// azul
    nuvem6.style.transform = `translate(-20%, 20%)`;// rosa
    nuvem7.style.transform = `translate(-20%, 20%)`; // preto
}

function applyPilotando() {
    balon1.style.transform = `translate(-80%, -10%) scale(1.5)`; //vermelho
    balon2.style.transform = `translate(900%, -200%) scale(2)`; // amarelo
    balon3.style.transform = `translate(-100%, 10%) scale(1.3)`; // verde

    nuvem1.style.transform = `translate(-150%, 60%) scale(1.3)`; //vermelho
    nuvem2.style.transform = `translate(150%, 50%) scale(1.3)`; //amarelo
    nuvem3.style.transform = `translate(-30%, 20%)`; //verde
    nuvem4.style.transform = `translate(-70%, 20%)`; // roxo
    nuvem5.style.transform = `translate(300%, 20%)`;// azul
    nuvem6.style.transform = `translate(-20%, 20%)`;// rosa
    nuvem7.style.transform = `translate(-20%, 20%)`; // preto
}

function applyComponentes() {
    balon1.style.transform = `translate(80%, -10%) scale(1.5)`; //vermelho
    balon2.style.transform = `translate(400%, -200%) scale(2)`; // amarelo
    balon3.style.transform = `translate(-300%, 10%) scale(1.3)`; // verde
    nuvem1.style.transform = `translate(70%, 60%) scale(1.3)`; //vermelho
    nuvem2.style.transform = `translate(250%, 50%) scale(1.3)`; //amarelo
    nuvem3.style.transform = `translate(100%, 20%)`; //verde
    nuvem4.style.transform = `translate(100%, 20%)`; // roxo
    nuvem5.style.transform = `translate(300%, 20%)`;// azul
    nuvem6.style.transform = `translate(-20%, 20%)`;// rosa
    nuvem7.style.transform = `translate(-20%, 20%)`; // preto
}

function applyTiposVoos() {
    balon1.style.transform = `translate(80%, -10%) scale(1.5)`; //vermelho
    balon2.style.transform = `translate(400%, -200%) scale(2)`; // amarelo
    balon3.style.transform = `translate(-300%, 10%) scale(1.3)`; // verde
    nuvem1.style.transform = `translate(70%, 60%) scale(1.3)`; //vermelho
    nuvem2.style.transform = `translate(250%, 50%) scale(1.3)`; //amarelo
    nuvem3.style.transform = `translate(100%, 20%)`; //verde
    nuvem4.style.transform = `translate(100%, 20%)`; // roxo
    nuvem5.style.transform = `translate(300%, 20%)`;// azul
    nuvem6.style.transform = `translate(-20%, 20%)`;// rosa
    nuvem7.style.transform = `translate(-20%, 20%)`; // preto
}

function resetTransforms() {
    [balon1, balon2, balon3, nuvem1, nuvem2, nuvem3, nuvem4, nuvem5, nuvem6, nuvem7].forEach(element => {
        element.style.transform = 'translate(0, 0)';
    });
}

document.addEventListener('scroll', () => {
    const curiosidadesPosition = curiosidadesSection.getBoundingClientRect();
    const pilotandoPosition = pilotandoSection.getBoundingClientRect();
    const componentesPosition = componentesSection.getBoundingClientRect();
    const tiposVoosPosition = tiposVoosSection.getBoundingClientRect();

    // Reseta a borda de todas as seções
    curiosidadesSection.style.border = 'none';
    pilotandoSection.style.border = 'none';
    componentesSection.style.border = 'none';
    tiposVoosSection.style.border = 'none';

    if (curiosidadesPosition.top <= window.innerHeight && curiosidadesPosition.bottom >= 0) {
        applyCuriosidades();

    } else if (pilotandoPosition.top <= window.innerHeight && pilotandoPosition.bottom >= 0) {
        applyPilotando();

    } else if (componentesPosition.top <= window.innerHeight && componentesPosition.bottom >= 0) {
        // Aplica borda vermelha de 5px na seção "Componentes"
        componentesSection.style.border = '5px solid blue';

    } else if (tiposVoosPosition.top <= window.innerHeight && tiposVoosPosition.bottom >= 0) {
        // Aplica borda vermelha de 5px na seção "Tipos de Voos"
        tiposVoosSection.style.border = '5px solid red';

    }   else {
        // Reseta as transformações, se necessário
        resetTransforms();
    }
});
