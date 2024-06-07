function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

     let listaUser = [] 


     let userValid = { 

        email: "",
        senha: ""
     }
 
     listaUser = JSON.parse(localStorage.getItem("listaUser"))
     listaUser.forEach((item) => { 
      if(email === item.emailUser && senha === item.SenhaUser){


        userValid ={
           email:item.emailUser,
           senha:item.SenhaUser

        }

      }
    }) 
    
    if(email === userValid.email && senha === userValid.senha && email !== "" && senha !== ""){
        alert('Login bem-sucedido');
         location.href = "../homePage/index.html";

         let mathRandom = Math.random().toString(16).substr(2) 
         let token = mathRandom + mathRandom
         localStorage.setItem("token", token);

    }else{
        alert('Usuario ou senha incorretos');
    }    
    
}
