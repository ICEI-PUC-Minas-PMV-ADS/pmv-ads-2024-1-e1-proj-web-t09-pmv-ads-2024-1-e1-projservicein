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

// nome.addEventListener('keyup', ()=>{
//     if(nome.value.length <=5){
//     labelNome.setAttribute ('style','color red')
//     labelNome.innerHTML = nome * insira no minimo 5 caracteres*} 
//     else{
//     labelNome.setAttribute ('style','color green')
//     labelNome.innerHTML = 'nome'}
// })

// cpf.addEventListener('keyup', ()=>{
//     if(cpf.value.length <=5){
//     labelCpf.setAttribute ('style','color red')
//     labelCpf.innerHTML = cpf * insira no minimo 5 caracteres*} 
//     else{
//     labelCpf.setAttribute ('style','color green')
//     labelCpf.innerHTML = 'cpf'
// }
// })

// rg.addEventListener('keyup', ()=>{
//     if(rg.value.length <=5){
//     labelRg.setAttribute ('style','color red')
//     labelRg.innerHTML = rg * insira no minimo 5 caracteres*} 
//     else{
//     labelRg.setAttribute ('style','color green')
//     labelRg.innerHTML = 'rg'
// }
// })

// email.addEventListener('keyup',()=>{
//     if(email.value.length <=5){
//     labelEmail.setAttribute ('style','color red')
//     labelEmail.innerHTML = email * insira no minimo 5 caracteres*} 
//     else {
//     labelEmail.setAttribute ('style','color green')
//     labelEmail.innerHTML = 'email'
// }
// })

// senha.addEventListener('keyup', ()=>{
//     if(senha.value.length <=7){
//     labelSenha.setAttribute ('style','color red')
//     labelSenha.innerHTML = senha * insira no minimo 5 caracteres*} 
//     else {
//     labelSenha.setAttribute ('style','color green')
//     labelSenha.innerHTML = 'senha'
// }
// })

// rua.addEventListener('keyup', ()=>{
//     if(nome.value.length <=5){
//     labelRua.setAttribute ('style','color red')
//     labelRua.innerHTML = rua * insira no minimo 5 caracteres*} 
//     else{
//     labelRua.setAttribute ('style','color green')
//     labelRua.innerHTML = 'rua'
// }
// })

// complemento.addEventListener('keyup', ()=>{
//     if(complemento.value.length <=5){
//     labelComplemento.setAttribute ('style','color red')
//     labelComplemento.innerHTML = complemento * insira no minimo 5 caracteres*} 
//     else{
//     labelComplemento.setAttribute ('style','color green')
//     labelComplemento.innerHTML = 'complemnto'
// }
// })

// bairro.addEventListener('keyup', ()=>{
//     if(bairro.value.length <=5){
//     labelBairro.setAttribute ('style','color red')
//     labelBairro.innerHTML = bairro * insira no minimo 5 caracteres*} 
//     else{
//     labelBairro.setAttribute ('style','color green')
//     labelBairro.innerHTML = 'bairro'
// }
// })

// cidade.addEventListener('keyup', ()=>{
//     if(cidade.value.length <=5){
//     labelCidade.setAttribute ('style','color red')
//     labelCidade.innerHTML = cidade * insira no minimo 5 caracteres*} 
//     else{
//     labelCidade.setAttribute ('style','color green')
//     labelCidade.innerHTML = 'cidade'
// }
// })

// estado.addEventListener('keyup',()=>{
//     if(estado.value.length <=5){
//     labelEstado.setAttribute ('style','color red')
//     labelEstado.innerHTML = estado * insira no minimo 5 caracteres*} 
//     else{
//     labelEstado.setAttribute ('style','color green')
//     labelEstado.innerHTML = 'estado'
// }
// })


// function cadastrar(){
//     if(validNome && valiCpf && validRg &&validEmail && validSenha && validRua && validNumero && validComplemento && vlaidBairro && validCidade && validEstado){

//         let listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]')
//         listaUser.push(
//             {
//                 nomeCad: nome.value,
//                 cpfCad: cpf.value,
//                 registroCad: registro.value,
//                 emailCad: email.value,
//                 senhaCad: senha.value,
//                 ruaCad: rua.value,
//                 numeroCad: numero.value,
//                 complementoCad: complemento.value,
//                 bairroCad: bairro.value,
//                 cidadeCad: cidade.value,
//                 estadoCad: estado.value,            
//             }
//            )
//            localStorage.setItem('listaUser',JSON.stringify(listaUser))

//         msgSucces.setAttribute('style','display: block')
//         msgSucces.innerHTML ='<strong>Cadastrando usuário...</strong>'
//         msgError.setAttribute('style', 'display:none')
//         msgError.innerHTML = ''

//     } else {
//         msgError.setAttribute('style', 'display: block')
//         msgError.innerHTML = '<strong> Preencha todos os campos corretamente antes de cadastrar</strong>'
//         msgSucces.innerHTML =''
//         msgSucces.setAttribute('style','display: block')
       
     
   
   
   
  
   
// }
// }




// function cadastrar(){
// alert ("botao clicado")
// }