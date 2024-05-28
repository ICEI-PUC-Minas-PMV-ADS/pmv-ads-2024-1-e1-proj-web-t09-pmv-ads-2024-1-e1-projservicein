console.log("Loa")
let listaUsuarios = [];

function recuperaLista() {
    return JSON.parse(localStorage.getItem("listaUsuarios")) || [];
}

function imprimeUsuario(indice) {
    listaUsuarios = recuperaLista();
    const usuario = listaUsuarios[indice];
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Local: ${usuario.local}`)
    console.log(`Descrição: ${usuario.servicosPrestados[0].descricaoServico}`)
}

function imprimeNome() {
    let imprime = "";
    let dados = [recuperaLista()];
    let prestadores = [];
    let contador = 0
    while (contador < dados[0].length) {
        if (dados[0][contador].prestadorServico) {
            prestadores.push(dados[0][contador])
            contador+=1
        }
    };
    console.log(prestadores)
    imprime += `<h1>${prestadores[0].nome}</h1>`
    imprimeTexto.innerHTML = imprime;

}