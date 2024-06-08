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

function limpaLocalStorage() {
    listaUsuarios = [];
    localStorage.arrUsuarios = JSON.stringify(listaUsuarios);
}

function retornaPrestadores() {
    let listaPrestadores = [];
    listaUsuarios = retornaListaUsers();

    listaUsuarios.map((usuario) => {
        if (usuario.prestador) {
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
                    <p>${prestador.nome}, <strong>${servico.nomeServPrestado}</strong> <img src="imgs/map-pin.png" alt="Map pin">
                        ${prestador.distancia}Km
                        <br><br>${servico.descricao}
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

imprimePrestadores(termPesq);