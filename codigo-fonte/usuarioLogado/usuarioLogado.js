console.log("Loa")



function retornaListaUsrs() {
    let listaUsuarios = [];
    if (localStorage.arrUsuarios) {
        listaUsuarios = JSON.parse(localStorage.getItem("arrUsuarios")) || []
    }
    return listaUsuarios;
}

function addUsuario(nomeusr, localUsr, prestServ, servsPrestados) {

    listaUsuarios = retornaListaUsrs();

    let usuario = {
        nome: nomeusr,
        local: localUsr,
        prestadorServico: prestServ,
        servicosPrestados: servsPrestados || []
    }
    listaUsuarios.push(usuario);
    localStorage.arrUsuarios = JSON.stringify(listaUsuarios);
}

function retornaPrestadores() {

    let listaPrestadores = [];
    listaUsuarios = retornaListaUsrs();

    for (var indice in listaUsuarios) {

        if (listaUsuarios[indice].prestadorServico) {
            listaPrestadores.push(listaUsuarios[indice]);
        }
    }

    return listaPrestadores;
}

function imprimePrestadores() {
    let conteudo = "";
    conteudo += `<div class="usrcontainer">
    <img src="imgs/userround.png" alt="Foto usuário redondo">
    <p class="usrdscr">José da Silva, <strong>Encanador</strong> <img src="imgs/map-pin.png" alt="Map pin"> 5Km
        <br><br>Presto serviço de encanador para pequenos reparos, conserto de vazamentos, troca de torneira,
        chuveiros, etc.
        Não realizo serviços onde será necessário quebrar paredes.
    </p>
    <p class="price">R$200,00 / hora</p>
    <p class="pricenote">(preço médio)</p>
    <img class="fourstars" src="imgs/4stars.png" alt="4 Estreas">
    </div>`
    usrcontainer.innerHTML = conteudo;
}