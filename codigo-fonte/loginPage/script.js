function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "usuario123@outlook.com"  && senha == "usuario"){
        alert('Login bem-sucedido');
        location.href = "usuarioLogado.html";
    }else{
        alert('Usuario ou senha incorretos');
    }    
    
}