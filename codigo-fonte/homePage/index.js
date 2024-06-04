const items = [
    { nome: 'Marido de Aluguel', imagem: 'img/maridodealuguel.png' },
    { nome: 'Frete', imagem: 'img/entregador.png' },
    { nome: 'Faxina', imagem: 'img/faxina.png' },
    { nome: 'Encanador', imagem: 'img/encanador.png' }
];

function renderItems(items) {
    const container = document.getElementById('maisbuscados');
    container.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.setAttribute('data-nome', item.nome);
        div.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" />
            <span>${item.nome}</span>
        `;
        container.appendChild(div);
    });
}

function buscar(event) {
    const searchTerm = event.target.value.toLowerCase();
    const itemsDivs = document.getElementsByClassName('result-item');

    if (searchTerm === '') {
        for (let i = 0; i < itemsDivs.length; i++) {
            itemsDivs[i].style.display = 'block';
        }
        return;
    }

    for (let i = 0; i < itemsDivs.length; i++) {
        const itemNome = itemsDivs[i].getAttribute('data-nome').toLowerCase();
        if (itemNome.includes(searchTerm)) {
            itemsDivs[i].style.display = 'block';
        } else {
            itemsDivs[i].style.display = 'none';
        }
    }
}

document.getElementById('digitbusca').addEventListener('input', buscar);

// Renderiza os itens iniciais
renderItems(items);

/*const items = [
    { nome: 'Marido de Aluguel', imagem: 'img/maridodealuguel.png' },
    { nome: 'Frete', imagem: 'img/entregador.png' },
    { nome: 'Faxina', imagem: 'img/faxina.png' },
    { nome: 'Encanador', imagem: 'img/encanador.png' }
];


function buscar(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('digitbusca').value.toLowerCase();
    const maisBuscadosContainer = document.getElementById('maisbuscados');
    const itemsDivs = maisBuscadosContainer.getElementsByClassName('result-item');


    if (searchTerm === '') {
        for (let i = 0; i < itemsDivs.length; i++) {
            itemsDivs[i].style.display = 'block';
        }
        return;
    }

    

    const resultados = items.filter(item => item.nome.toLowerCase().includes(searchTerm));
    searchTerm.addEventListener('input', ()=>{
        
    for (let i = 0; i < itemsDivs.length; i++) {
        const itemNome = itemsDivs[i].getAttribute('data-nome').toLowerCase();
        if (resultados.some(result => result.nome.toLowerCase() === itemNome)) {
            itemsDivs[i].style.display = 'block';
        } else {
            itemsDivs[i].style.display = 'none';
        }
    }
    })
}
*/