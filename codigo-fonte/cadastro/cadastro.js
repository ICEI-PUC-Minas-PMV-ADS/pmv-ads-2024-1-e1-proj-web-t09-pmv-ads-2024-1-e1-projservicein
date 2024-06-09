let conteudo = "";

prestador.addEventListener("change", function(){
    let formPrestador = document.querySelector("main .formCadastro .servicos .servPrestados");
    if (this.checked) {
        servPrestados.style.visibility = "visible";
        servPrestados.style.height = "fit-content";
        btnAddServ.style.visibility = "visible";
        btnAddServ.style.height = "fit-content";
        geraHtmlServs("");
    } else {
        servPrestados.style.visibility = "hidden";
        servPrestados.style.height = "0px";
        btnAddServ.style.visibility = "hidden";
        btnAddServ.style.height = "0px";
        servPrestados.innerHTML = "";
    };
});

function geraHtmlServs(conteudoEnviado){
    conteudo = conteudoEnviado;
    conteudo +=
     `<div class="nomeServPrestado">
        <label>Serviço Prestado*: </label>
        <input list="listaServPrestados" type="text" name="listaServPrestado" id="nomeServPrestado"
            required>
        <datalist id="listaServPrestados">
            <option value="Encanador">
            <option value="Eletricista">
            <option value="Diarista">
            <option value="Bombeiro Hidráulico">
        </datalist>
    </div>

    <div class="descricao">
        <label>Descrição: </label>
        <textarea id="descricaoServ" name="descricao" form="servprestado"
            placeholder="Informe detalhes sobre o serviço prestado"></textarea>
    </div>

    <div class="valor">
        <label>Valor médio por hora: R$</label>
        <input type="text" id="valorServ" name="valor">    
    </div>`;
    servPrestados.innerHTML = conteudo;
}

btnAddServ.onclick = function() {
   geraHtmlServs(conteudo);
}

function retornaListaUsers() {
    let listaUsuarios = [];
    listaUsuarios = JSON.parse(localStorage.getItem("arrUsuarios")) || []
    return listaUsuarios;
}


async function sha256(texto){
    let utf8Encoder = new TextEncoder();
    let arrText = utf8Encoder.encode(texto);
    let crypto = window.crypto || window.webkitCrypto;
    let subtle = crypto.subtle;
    let textBuffer = await subtle.digest("SHA-256", arrText);
    let hashArrText = Array.from(new Uint8Array(textBuffer));
    let hashTextHex = hashArrText.map(b => b.toString(16).padStart(2, "0")).join('');
    return hashTextHex;
}

async function addUsuario(servsPrestados) {
    listaUsuarios = retornaListaUsers();
    let ehPrestador = false;
    if (prestador.checked){
        ehPrestador = true;
    };
    let uuid = window.crypto.randomUUID();
    let senhaCrypt = await sha256(uuid+senha.value);
    let usuario = {
        id: uuid,
        nome: nome.value,
        cpf: cpf.value,
        registro: registro.value,
        telefone: telefone.value,
        cep: cep.valie,
        rua: rua.value,
        numero: numero.value,
        complemento: complemento.value,
        bairro: bairro.value,
        cidade: cidade.value,
        email: email.value,
        senha: senhaCrypt,
        prestador: ehPrestador,
        servicosPrestados: servsPrestados || []
    };
    listaUsuarios.push(usuario);
    localStorage.arrUsuarios = JSON.stringify(listaUsuarios);
};

btnCadastrar.onclick = function(){
    if (validaCampos()){
        addUsuario(retornaServicos())
    }
}

function validaCampos(){
    let inputs = document.querySelectorAll("main .formCadastro input[required]");
    for (input of inputs){
        if (!input.value){
            alert("Campos obrigatórios não foram preenchidos.");
            return false;
        }
    }
    listaUsuarios = retornaListaUsers()
    for(usuario of listaUsuarios){
        if (usuario.cpf == cpf.value){
            alert("Usuário já cadastrado");
            return false;
        }
    }
    return true;
}

function retornaServicos(){
    let servicos = document.querySelectorAll("main .formCadastro .servicos .servPrestados #nomeServPrestado");
    let descricoes = document.querySelectorAll("main .formCadastro .servicos .servPrestados #descricaoServ");
    let valores = document.querySelectorAll("main .formCadastro .servicos .servPrestados #valorServ");

    let listaServicos = [];
    if (servicos){
        for(index = 0; index < servicos.length; index++){
            listaServicos.push({
                nomeServPrestado: servicos[index].value,
                avaliacao: retornaNumRandom(),
                descricao: descricoes[index].value,
                valor: valores[index].value
            });
        };
    }

    return listaServicos;
};

function retornaNumRandom(){
    number = Math.floor(Math.random() * ((6 - 0) / 0.5))*0.5;
    while (number > 5){
        number = Math.floor(Math.random() * ((6 - 0) / 0.5))*0.5;
    }
    return number.toString();
}