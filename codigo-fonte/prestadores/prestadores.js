let termPesq = JSON.parse(localStorage.getItem("termPesq"));

searchButton.onclick = function () {
    localStorage.termPesq = JSON.stringify(searchBar.value);
    if (!window.location.href.endsWith('prestadores.html')) {
        window.location.href = ('../prestadores/prestadores.html');
    }
    termPesq = JSON.parse(localStorage.getItem("termPesq"));
    imprimePrestadores(termPesq);
};

function retornaListaUsers() {
    let listaUsuarios = [];
    listaUsuarios = JSON.parse(localStorage.getItem("arrUsuarios")) || []
    return listaUsuarios;
}


function addUsuario(nomeusr, distancia, prestServ, servsPrestados) {
    listaUsuarios = retornaListaUsers();
    let usuario = {
        nome: nomeusr,
        distancia: distancia,
        prestadorServico: prestServ,
        servicosPrestados: servsPrestados || []
    };
    listaUsuarios.push(usuario);
    localStorage.arrUsuarios = JSON.stringify(listaUsuarios);
};

function templateUsers() {
    addUsuario("João Silveira", 12, true, [{ nomeServico: "Marido de Aluguel", avaliacao: 3, descricaoServico: "Pequenos serviços domésticos em geral, troca de chuveiro, torneira, tomada, lâmpadas, etc.", valor: 0 }]);

    addUsuario("Maria Antonia", 3, true, [{ nomeServico: "Diarista", avaliacao: 4, descricaoServico: "Faço faxina em casas de família", valor: 50 }, { nomeServico: "Cozinheira", avaliacao: 5, descricaoServico: "Cozinho em eventos e festas. Comida caseira deliciosa!", valor: 60 }]);

    addUsuario("José da Silva", 5, true, [{ nomeServico: "Encanador", avaliacao: 4, descricaoServico: "Presto serviço de encanador para pequenos reparos, conserto de vazamentos, troca de torneira, chuveiros, etc. Não realizo serviços onde será necessário quebrar paredes.", valor: 200.99 }]);

    addUsuario("Denise Moreira", 3, false, []);
}

function limpaLocalStorage() {
    listaUsuarios = [];
    localStorage.arrUsuarios = JSON.stringify(listaUsuarios);
}

function retornaPrestadores() {
    let listaPrestadores = [];
    listaUsuarios = retornaListaUsers();

    listaUsuarios.map((usuario) => {
        if (usuario.prestadorServico) {
            listaPrestadores.push(usuario);
        }
    });
    return listaPrestadores;
}

function imprimePrestadores(termPesq = "") {
    let conteudo = "";
    let listaPrestadores = retornaPrestadores();
    if (termPesq){
        let listaPesquisada = [];
        for(prestador of listaPrestadores){
            dadosPrestador = Object.values(prestador).map(dado => dado.toString());
            dadosPrestador.splice(2, 2);
            dadosPrestador.map((dado) => {
                if (dado.includes(termPesq)){
                    listaPesquisada.push(prestador);
                    return;
                }
            })
            for (servico of prestador.servicosPrestados){
                dadosServico = Object.values(servico).map(dado => dado.toString());
                dadosServico.map((dado) => {
                    if (dado.includes(termPesq)){
                        listaPesquisada.push(prestador);
                        return;
                    }
                })
            }
        }
        listaPrestadores = listaPesquisada;
    }
            
    listaPrestadores.map((prestador) => {
        prestador.servicosPrestados.map((servico) => {
            let valor = "Valor a combinar";
            if (servico.valor) {
                valor = `R$${servico.valor.toFixed(2).replace(".", ",")} / hora`;
            }
            conteudo += `
            <div class="prestadores">
                <img src="imgs/userround.png" alt="Foto usuário redondo">
                <div class="prestadoresdscr">
                    <p>${prestador.nome}, <strong>${servico.nomeServico}</strong> <img src="imgs/map-pin.png" alt="Map pin">
                        ${prestador.distancia}Km
                        <br><br>${servico.descricaoServico}
                    </p>
                    <div class="cardpreco">
                        <div class="stars"><img src="imgs/4stars.png" alt="Estralas de avaliação"></div>
                        <p class="price">${valor}</p>
                        <p class="pricenote">(preço médio)</p>
                    </div>
                </div>
            </div>`
        });
    });
    cardPrestadores.innerHTML = conteudo;
}

limpaLocalStorage();
templateUsers();
imprimePrestadores(termPesq);