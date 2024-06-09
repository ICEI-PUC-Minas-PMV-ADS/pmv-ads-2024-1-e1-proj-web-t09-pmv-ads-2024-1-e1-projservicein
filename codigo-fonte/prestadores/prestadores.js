let termPesq = JSON.parse(localStorage.getItem('termPesq'));
if (termPesq) {
    termPesq = termPesq.trim().toLowerCase();
}

function imprimeHeader() {
    let usrLogado = JSON.parse(localStorage.getItem('usrLogado'))

    if (usrLogado) {
        logo.onclick = function () {
            location.reload();
        }
        let btnContent = `<img src="imgs/userround.png" alt="Foto de usuário redonda">
        <button id="logoffbtn" class="logoffbtn">Logout</button>`;

        hdrButtons.innerHTML = btnContent;
        let logoffbtn = document.getElementById('logoffbtn');
        if (logoffbtn) {
            logoffbtn.onclick = function () {
                localStorage.usrLogado = false;
                localStorage.id = '';
                localStorage.token = '';
                window.location.href = ('../homePage/index.html');
            }
        }
    } else {
        logo.onclick = function () {
            window.location.href = ('../homePage/index.html');
        }
        btnContent = `<button id="cadastrobtn" class="cadastrobtn">Cadastre-se</button>
        <button id="loginbtn" class="loginbtn">Login</button>`

        hdrButtons.innerHTML = btnContent;
        let loginbtn = document.getElementById('loginbtn');
        if (loginbtn) {
            loginbtn.onclick = function () {
                window.location.href = ('../loginPage/login.html');
            }
        }
        let cadastrobtn = document.getElementById('cadastrobtn');
        if (cadastrobtn) {
            cadastrobtn.onclick = function () {
                window.location.href = ('../cadastro/cadastro.html');
            }
        }

    }

}

searchButton.onclick = function () {
    localStorage.termPesq = JSON.stringify(searchBar.value);
    if (!window.location.href.endsWith('prestadores.html')) {
        window.location.href = ('../prestadores/prestadores.html');
    }
    termPesq = JSON.parse(localStorage.getItem('termPesq'));
    termPesq = termPesq.trim().toLowerCase();
    imprimePrestadores(termPesq);
};

function retornaListaUsers() {
    let listaUsuarios = [];
    listaUsuarios = JSON.parse(localStorage.getItem("arrUsuarios")) || []
    return listaUsuarios;
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
    termPesq = termPesq.trim().toLowerCase();
    let conteudo = "";
    let listaPrestadores = retornaPrestadores();
    if (termPesq) {
        let listaPesquisada = [];
        for (prestador of listaPrestadores) {
            dadosPrestador = Object.values(prestador).map(dado => dado.toString().trim().toLowerCase());
            dadosPrestador.map((dado) => {
                if (dado.includes(termPesq)) {
                    let prestadorPresente = false
                    for (prestadorResult of listaPesquisada) {
                        if (prestadorResult == prestador) {
                            prestadorPresente = true
                        }
                    }
                    if (!prestadorPresente) {
                        listaPesquisada.push(prestador);
                    }
                };
            });
            for (servico of prestador.servicosPrestados) {
                dadosServico = Object.values(servico).map(dado => dado.toString().trim().toLowerCase());
                dadosServico.map((dado) => {
                    if (dado.includes(termPesq)) {
                        prestadorPresente = false
                        for (prestadorResult of listaPesquisada) {
                            if (prestadorResult == prestador) {
                                prestadorPresente = true
                            }
                        }
                        if (!prestadorPresente) {
                            listaPesquisada.push(prestador);
                        }
                    }
                })
            }
        }
        listaPrestadores = listaPesquisada;
    }

    listaPrestadores.map((prestador) => {
        prestador.servicosPrestados.map((servico) => {
            let valor = 'Valor a combinar';
            if (servico.valor) {
                valor = `R$${parseFloat(servico.valor).toFixed(2).replace(".", ",")} / hora`;
            }
            let avaliacao = parseFloat(servico.avaliacao).toFixed(1).replace(".", "s");
            let distancia = retornaNumRandom();
            conteudo += `
            <div class="prestadores">
                <img src="imgs/userround.png" alt="Foto usuário redondo">
                <div class="prestadoresdscr">
                    <p>${prestador.nome}, <strong>${servico.nomeServPrestado}</strong> <img src="imgs/map-pin.png" alt="Map pin">
                        ${distancia}Km
                        <br><br>${servico.descricao}
                    </p>
                    <div class="cardpreco">
                        <div class="stars"><img src="imgs/${avaliacao}stars.png" alt="Estralas de avaliação"></div>
                        <p class="price">${valor}</p>
                        <p class="pricenote">(preço médio)</p>
                    </div>
                </div>
            </div>`
        });
    });
    cardPrestadores.innerHTML = conteudo;
    localStorage.termPesq = JSON.stringify('');
    searchBar.value = '';
}

cardPrestadores.onclick = function () {
    let usrLogado = JSON.parse(localStorage.getItem('usrLogado'));
    if (usrLogado){
        window.location.href = ('../chatPage/chat.html');
    }else{
        window.location.href = ('../cadastro/cadastro.html')
    }
}

function retornaNumRandom() {
    number = Math.floor(Math.random() * ((20 - 0) / 0.5)) * 0.5;
    return parseInt(number).toString();
}

let imgBanner = document.querySelectorAll('#imgbanner');
let valorBanner = document.querySelectorAll('#txtbanner');
for(let i = 0; i < imgBanner.length; i++){
    imgBanner[i].addEventListener('click', function(){
        imprimePrestadores(valorBanner[i].textContent);
    })
}

imprimePrestadores(termPesq);
imprimeHeader();

