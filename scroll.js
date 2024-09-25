document.addEventListener('scroll', () => {
    const curiosidadesSection = document.querySelector('.curiosidades');
    const inicioSection = document.querySelector('.inicio');

    const balon1 = document.querySelector('.balon1');
    const balon2 = document.querySelector('.balon2');
    const balon3 = document.querySelector('.balon3');
    const nuvem1 = document.querySelector('.nuvem1');
    // const nuvem2 = document.querySelector('.nuvem2');
    // const nuvem3 = document.querySelector('.nuvem3');
    // const nuvem4 = document.querySelector('.nuvem4');
    // const nuvem5 = document.querySelector('.nuvem5');
    // const nuvem6 = document.querySelector('.nuvem6');
    // const nuvem7 = document.querySelector('.nuvem7');

    // Pegando as posições das seções
    const curiosidadesPosition = curiosidadesSection.getBoundingClientRect();
    const inicioPosition = inicioSection.getBoundingClientRect();

    if (curiosidadesPosition.top <= window.innerHeight && curiosidadesPosition.bottom >= 0) {
        // Se estiver na seção "curiosidades", aplica as transformações
        balon1.style.transform = `translate(80%, -10%) scale(1.5)`;
        balon2.style.transform = `translate(-100%, 80%) scale(1.8)`;
        balon3.style.transform = `translate(-300%, 50%) scale(1.3)`;
        nuvem1.style.transform = `translate(70%, 60%)`;
    }

    if (inicioPosition.top <= window.innerHeight && inicioPosition.bottom >= 0) {
        // Se estiver na seção "início", reseta as transformações
        balon1.style.transform = `translate(0, 0)`;
        balon2.style.transform = `translate(0, 0)`;
        balon3.style.transform = `translate(0, 0)`;
        nuvem1.style.transform = `translate(0, 0)`;
    }

});

