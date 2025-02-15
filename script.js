// Coloque aqui a data do início do namoro no formato (YYYY, MM, DD)
let dataDeInicio = new Date(2024, 9, 21);  // Exemplo: 15 de Fevereiro de 2023

function atualizarContador() {
    let agora = new Date();
    let tempoPassado = agora - dataDeInicio;

    let dias = Math.floor(tempoPassado / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tempoPassado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tempoPassado % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tempoPassado % (1000 * 60)) / 1000);

    let contadorElement = document.getElementById("contador");
    contadorElement.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

    let relogioElement = document.getElementById("relogio-digital");
    relogioElement.innerHTML = `${dias}d ${formatarTempo(horas)}h ${formatarTempo(minutos)}m ${formatarTempo(segundos)}s`;
}

// Função para formatar o tempo (ex: 01:02:03)
function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

// Chama a função para atualizar a contagem a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função imediatamente ao carregar a página
atualizarContador();
