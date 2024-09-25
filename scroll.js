// const curiosidadesSection = document.querySelector('.curiosidades');
// const inicioSection = document.querySelector('.inicio');

// const balon1 = document.querySelector('.balon1');
// const balon2 = document.querySelector('.balon2');
// const balon3 = document.querySelector('.balon3');
// const nuvem1 = document.querySelector('.nuvem1');

// function applyTransforms() {
//     balon1.style.transform = `translate(80%, -10%) scale(1.5)`;
//     balon2.style.transform = `translate(-100%, 80%) scale(1.8)`;
//     balon3.style.transform = `translate(-300%, 50%) scale(1.3)`;
//     nuvem1.style.transform = `translate(70%, 60%)`;
// }

// function resetTransforms() {
//     [balon1, balon2, balon3, nuvem1].forEach(element => {
//         element.style.transform = 'translate(0, 0)';
//     });
// }

// document.addEventListener('scroll', () => {
//     const curiosidadesPosition = curiosidadesSection.getBoundingClientRect();
//     const inicioPosition = inicioSection.getBoundingClientRect();

//     if (curiosidadesPosition.top <= window.innerHeight && curiosidadesPosition.bottom >= 0) {
//         applyTransforms();
        
//     } else {
//         resetTransforms();
//     }
// });
