console.log("Loa")
let listaUsuarios = [];

function addUsuario(nomeusr, localUsr, prestServ, servsPrestados) {
    if (localStorage.arrUsuarios) {
        listaUsuarios = JSON.parse(localStorage.getItem("arrUsuarios")) || [];
    }
    let usuario = {
        nome: nomeusr,
        local: localUsr,
        prestadorServico: prestServ,
        servicosPrestados: servsPrestados || []
    }
    listaUsuarios.push(usuario);
    localStorage.arrUsuarios = JSON.stringify(listaUsuarios);
}