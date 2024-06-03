
let msgError = document.querySelector('#msgError')
let msgSucces = document.querySelector('#masgSucces')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')

let rg = document.querySelector('#rg')
let labelRg = document.querySelector('#labelRg')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')


let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')


let rua = document.querySelector('#rua')
let labelRua = document.querySelector('#labelRua')

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')

let complemento = document.querySelector('#complemento')
let labelComplemento = document.querySelector('#labelComplemento')

let bairro = document.querySelector('#bairro')
let labelBairro = document.querySelector('#labelBairro')

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <=5){
    labelNome.setAttribute ('style','color red')
    labelNome.innerHTML = nome * insira no minimo 5 caracteres*} 
    else{
    labelNome.setAttribute ('style','color green')
    labelNome.innerHTML = 'nome'}
})

cpf.addEventListener('keyup', ()=>{
    if(cpf.value.length <=5){
    labelCpf.setAttribute ('style','color red')
    labelCpf.innerHTML = cpf * insira no minimo 5 caracteres*} 
    else{
    labelCpf.setAttribute ('style','color green')
    labelCpf.innerHTML = 'cpf'
}
})

rg.addEventListener('keyup', ()=>{
    if(rg.value.length <=5){
    labelRg.setAttribute ('style','color red')
    labelRg.innerHTML = rg * insira no minimo 5 caracteres*} 
    else{
    labelRg.setAttribute ('style','color green')
    labelRg.innerHTML = 'rg'
}
})

email.addEventListener('keyup',()=>{
    if(email.value.length <=5){
    labelEmail.setAttribute ('style','color red')
    labelEmail.innerHTML = email * insira no minimo 5 caracteres*} 
    else {
    labelEmail.setAttribute ('style','color green')
    labelEmail.innerHTML = 'email'
}
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <=7){
    labelSenha.setAttribute ('style','color red')
    labelSenha.innerHTML = senha * insira no minimo 5 caracteres*} 
    else {
    labelSenha.setAttribute ('style','color green')
    labelSenha.innerHTML = 'senha'
}
})

rua.addEventListener('keyup', ()=>{
    if(nome.value.length <=5){
    labelRua.setAttribute ('style','color red')
    labelRua.innerHTML = rua * insira no minimo 5 caracteres*} 
    else{
    labelRua.setAttribute ('style','color green')
    labelRua.innerHTML = 'rua'
}
})

complemento.addEventListener('keyup', ()=>{
    if(complemento.value.length <=5){
    labelComplemento.setAttribute ('style','color red')
    labelComplemento.innerHTML = complemento * insira no minimo 5 caracteres*} 
    else{
    labelComplemento.setAttribute ('style','color green')
    labelComplemento.innerHTML = 'complemnto'
}
})

bairro.addEventListener('keyup', ()=>{
    if(bairro.value.length <=5){
    labelBairro.setAttribute ('style','color red')
    labelBairro.innerHTML = bairro * insira no minimo 5 caracteres*} 
    else{
    labelBairro.setAttribute ('style','color green')
    labelBairro.innerHTML = 'bairro'
}
})

cidade.addEventListener('keyup', ()=>{
    if(cidade.value.length <=5){
    labelCidade.setAttribute ('style','color red')
    labelCidade.innerHTML = cidade * insira no minimo 5 caracteres*} 
    else{
    labelCidade.setAttribute ('style','color green')
    labelCidade.innerHTML = 'cidade'
}
})

estado.addEventListener('keyup',()=>{
    if(estado.value.length <=5){
    labelEstado.setAttribute ('style','color red')
    labelEstado.innerHTML = estado * insira no minimo 5 caracteres*} 
    else{
    labelEstado.setAttribute ('style','color green')
    labelEstado.innerHTML = 'estado'
}
})


function cadastrar(){
    if(validNome && valiCpf && validRg &&validEmail && validSenha && validRua && validNumero && validComplemento && vlaidBairro && validCidade && validEstado){

        let listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]')
        listaUser.push(
            {
                nomeCad: nome.value,
                cpfCad: cpf.value,
                registroCad: registro.value,
                emailCad: email.value,
                senhaCad: senha.value,
                ruaCad: rua.value,
                numeroCad: numero.value,
                complementoCad: complemento.value,
                bairroCad: bairro.value,
                cidadeCad: cidade.value,
                estadoCad: estado.value,            
            }
           )
           localStorage.setItem('listaUser',JSON.stringify(listaUser))

        msgSucces.setAttribute('style','display: block')
        msgSucces.innerHTML ='<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong> Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSucces.innerHTML =''
        msgSucces.setAttribute('style','display: block')
       
     
   
   
   
  
   
}
}




















function cadastrar(){
alert ("botao clicado")
}