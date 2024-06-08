function cadastrar() {
 
    if (servprestado.value == "" || servprestado.value.length < 1) {
      alert("Preencha o formulário corretamente!");
      servprestado.focus();
      return;
    }
    
    if (descricao.value == "" || descricao.value.length < 3) {
      alert("Preencha o formulário corretamente!");
      descricao.focus();
      return;
    }
    
    if (valor.value == "" || valor.value.length < 2) {
      alert("Preencha o formulário corretamente!");
      valor.focus();
      return;
    }
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
  
    listaUser.push(
      {
        servprestadoUser:servprestado.value,
        descricaoUser: descricao.value,
        valorUser: valor.value,
      });
  
    localStorage.setItem("listaUser", JSON.stringify(listaUser))
  
    alert("Prestador cadastrado com sucesso!");
    window.location.href = "../prestadores/prestadores.html"
  }
  