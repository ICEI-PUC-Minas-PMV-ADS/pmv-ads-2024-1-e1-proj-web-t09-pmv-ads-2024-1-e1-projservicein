// Função para lidar com o envio de avaliação
function enviarAvaliacao(event) {
    event.preventDefault();
    const prestador = document.getElementById("prestador").value;
    const nota = document.getElementById("nota").value;
    const comentario = document.getElementById("comentario").value;
    adicionarAvaliacao(prestador, nota, comentario);
    document.getElementById("form-avaliacao").reset();
    document.getElementById("output-nota").textContent = "3"; // Resetar a exibição da nota
}

// Função para limpar o formulário e permitir uma nova avaliação
function novaAvaliacao() {
    document.getElementById("form-avaliacao").reset();
    document.getElementById("output-nota").textContent = "3"; // Resetar a exibição da nota
}

// Adicionar evento de envio de avaliação ao formulário
document.getElementById("form-avaliacao").addEventListener("submit", enviarAvaliacao);

// Adicionar evento ao botão "Nova Avaliação"
document.getElementById("nova-avaliacao-btn").addEventListener("click", novaAvaliacao);

// Atualizar a exibição da nota conforme o controle de range é movido
document.getElementById("nota").addEventListener("input", function() {
    document.getElementById("output-nota").textContent = this.value;
});

document.getElementById("nota").addEventListener("input", function() {
    const valor = parseInt(this.value);
    let rotulo = "";
    switch(valor) {
        case 1:
            rotulo = "Muito Ruim";
            break;
        case 2:
            rotulo = "Ruim";
            break;
        case 3:
            rotulo = "Regular";
            break;
        case 4:
            rotulo = "Bom";
            break;
        case 5:
            rotulo = "Muito Bom";
            break;
        default:
            rotulo = "Regular";
    }
    document.getElementById("output-nota").textContent = rotulo;
});

// Função para adicionar uma nova avaliação e salvá-la no localStorage
function adicionarAvaliacao(prestador, nota, comentario) {
    const novaAvaliacao = {
        prestador: prestador,
        nota: nota,
        comentario: comentario
    };

    // Verifica se já existem avaliações salvas no localStorage
    let avaliacoesSalvas = localStorage.getItem('avaliacoes');
    if (!avaliacoesSalvas) {
        // Se não houver avaliações salvas, cria um novo array e salva no localStorage
        avaliacoesSalvas = [];
    } else {
        // Se já houver avaliações salvas, converte a string JSON para um array
        avaliacoesSalvas = JSON.parse(avaliacoesSalvas);
    }

    // Adiciona a nova avaliação ao array
    avaliacoesSalvas.push(novaAvaliacao);

    // Salva o array atualizado no localStorage
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoesSalvas));

    // Atualiza a exibição das avaliações na página
    atualizarAvaliacoes();
}

// Função para recuperar as avaliações salvas no localStorage
function recuperarAvaliacoesSalvas() {
    const avaliacoesSalvas = localStorage.getItem('avaliacoes');
    if (avaliacoesSalvas) {
        return JSON.parse(avaliacoesSalvas);
    } else {
        return [];
    }
}

// Função para inicializar as avaliações na página
function inicializarAvaliacoes() {
    const avaliacoes = recuperarAvaliacoesSalvas();
    avaliacoes.forEach(avaliacao => {
        adicionarAvaliacao(avaliacao.prestador, avaliacao.nota, avaliacao.comentario);
    });
}

// Chame a função de inicialização ao carregar a página
inicializarAvaliacoes();