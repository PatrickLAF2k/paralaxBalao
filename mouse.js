// // // Evento mouse
// // document.querySelector('header').addEventListener('mousemove', (e) => {
// //   const { clientX: mouseX, clientY: mouseY } = e;

// //   // Pegando a largura e altura da janela para calcular a posição relativa do mouse
// //   const windowWidth = window.innerWidth;
// //   const windowHeight = window.innerHeight;
// //   const curiosidadesSection = document.querySelector('.curiosidades');
// //   const curiosidadesPosition = curiosidadesSection.getBoundingClientRect(); // Captura a posição da seção

// //   // Calculando a porcentagem do movimento em relação ao centro da tela
// //   const xPos = (mouseX / windowWidth - 0.5) * 2; // De -1 a 1
// //   const yPos = (mouseY / windowHeight - 0.5) * 2; // De -1 a 1

// //   // Verificando se a seção "Curiosidades" está visível na tela
// //   if (curiosidadesPosition.top <= window.innerHeight && curiosidadesPosition.bottom >= 0) {
// //     // Se estamos na seção Curiosidades, aplicamos um movimento fixo e limitado
// //     document.querySelector('.balon1').style.transform = `translate(200px, -50px) scale(1.3)`; // Posição fixa e escala
// //   } else {
// //     // Fora da seção Curiosidades, o balão se move normalmente com o mouse
// //     document.querySelector('.balon1').style.transform = `translate(${xPos * 200}px, ${yPos * 100}px)`;
// //     document.querySelector('.balon2').style.transform = `translate(${xPos * -75}px, ${yPos * -50}px)`;
// //     document.querySelector('.balon3').style.transform = `translate(${xPos * 35}px, ${yPos * -25}px)`;
// //     document.querySelector('.nuvem1').style.transform = `translate(${xPos * 100}px, ${yPos * -20}px)`;
// //     document.querySelector('.nuvem2').style.transform = `translate(${xPos * 100}px, ${yPos * -30}px)`;
// //     document.querySelector('.nuvem3').style.transform = `translate(${xPos * 100}px, ${yPos * -30}px)`;
// //     document.querySelector('.nuvemP1').style.transform = `translate(${xPos * 100}px, ${yPos * -30}px)`;
// //     document.querySelector('.nuvemP2').style.transform = `translate(${xPos * 100}px, ${yPos * -30}px)`;
// //   }
// // });


