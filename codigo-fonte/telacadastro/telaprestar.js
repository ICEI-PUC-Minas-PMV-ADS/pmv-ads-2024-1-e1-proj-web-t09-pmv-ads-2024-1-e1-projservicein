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
    
    let arrUsuarios = JSON.parse(localStorage.getItem('arrUsuarios')) || '[]')
  
    arrUsuarios.push(
      {
        servprestadoUser:servprestado.value,
        descricaoUser: descricao.value,
        valorUser: valor.value,
      });
  
    localStorage.setItem("arrUsuarios", JSON.stringify(arrUsuarios))
  
    alert("Prestador cadastrado com sucesso!");
    window.location.href = "../prestadores/prestadores.html"
  }
  
