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

async function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

     let listaUser = [];


     let userValid = {};
     

    listaUser = JSON.parse(localStorage.getItem("arrUsuarios"));
    
    if (!listaUser){
      alert('Sem usuários cadastrados');
    }

    console.log(listaUser);
    for (let i = 0; i < listaUser.length; i++){ 
      let item = listaUser[i];
      if(email === item.email){
        let senhaDigitada = await sha256(item.id+senha)
          userValid ={
            email:item.email,
            senha:item.senha,
            id: item.id,
            senhaDigitada: senhaDigitada
          }
          
      }
    } 
    
    if(userValid.email === email && userValid.senhaDigitada === userValid.senha && email !== "" && senha !== ""){
        alert('Login bem-sucedido');
         location.href = "../prestadores/prestadores.html"
         let mathRandom = Math.random().toString(16).substr(2) 
         let token = mathRandom + mathRandom
         localStorage.token = token;
         localStorage.usrLogado = true;
         localStorage.id = userValid.id;
    }else{
        alert('Usuario ou senha incorretos');
    }    
    
}
