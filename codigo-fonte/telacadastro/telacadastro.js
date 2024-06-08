function Usuário() { 
    if (nome.value == "" || nome.value.length < 4) {
      alert("Preencha o formulário corretamente!");
      nome.focus();
      return;
    }
    if (cpf.value == "" || cpf.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        cpf.focus();
        return;
      }
      if (rg.value == "" || rg.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        rg.focus();
        return;
      }
    if (email.value == "") {
      alert("Preencha o formulário corretamente!");
      email.focus();
      return;
    }
    if (telefone.value == "" || telefone.value.length < 11) {
      alert("Preencha o formulário corretamente!");
      telefone.focus();
      return;
    }
    if (endereco.value == "" || endereco.value.length < 10) {
      alert("Preencha o formulário corretamente!");
      endereco.focus();
      return;
    }
    
      if (numero.value == "" || numero.value.length < 2) {
        alert("Preencha o formulário corretamente!");
        numero.focus();
        return;
      }
      if (complemento.value == "" || complemento.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        complemento.focus();
        return;
      }
      
      if (bairro.value == "" || bairro.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        bairro.focus();
        return;
      }
      if (cidade.value == "" || cidade.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        cidade.focus();
        return;
      }
      if (estado.value == "" || estado.value.length < 2) {
        alert("Preencha o formulário corretamente!");
        estado.focus();
        return;
      }
    if (Senha.value == "" || Senha.value.length < 6) {
      alert("Preencha o formulário corretamente!");
      Senha.focus();
      return;
    }
    if (ConfirmeSenha.value == "") {
      alert("Preencha o formulário corretamente!");
      ConfirmeSenha.focus();
      return;
    }
  
    if (Senha.value != ConfirmeSenha.value) {
      alert("As senhas não correspondem!");
      ConfirmeSenha.focus();
      return;
    }
  
  
    let arrUsuarios = JSON.parse(localStorage.getItem('arrUsuarios') || '[]')
  
    arrUsuarios.push(
      {
        nomeUser: nome.value,
        rgUser:cpf.value,
        cpfUser:cpf.value,
        emailUser: formulario.email.value,
        telefoneUser: formulario.telefone.value,
        numeroUser: numero.value,
        complementoUser: complemento.value,
        bairroUser: bairro.value,
        cidadeUser: cidade.value,
        estadoUser: estado.value,
        enderecoUser: formulario.endereco.value,
        SenhaUser: formulario.Senha.value,
        ConfirmeSenhaUser: formulario.ConfirmeSenha.value
      });
  
    localStorage.setItem("arrUsuarios", JSON.stringify(arrUsuarios))
  
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "../prestadores/prestadores.html"
  }



  function Prestador() { 
    if (nome.value == "" || nome.value.length < 4) {
      alert("Preencha o formulário corretamente!");
      nome.focus();
      return;
    }
    if (cpf.value == "" || cpf.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        cpf.focus();
        return;
      }
      if (rg.value == "" || rg.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        rg.focus();
        return;
      }
    if (email.value == "") {
      alert("Preencha o formulário corretamente!");
      email.focus();
      return;
    }
    if (telefone.value == "" || telefone.value.length < 11) {
      alert("Preencha o formulário corretamente!");
      telefone.focus();
      return;
    }
    if (endereco.value == "" || endereco.value.length < 10) {
      alert("Preencha o formulário corretamente!");
      endereco.focus();
      return;
    }
    
      if (numero.value == "" || numero.value.length < 2) {
        alert("Preencha o formulário corretamente!");
        numero.focus();
        return;
      }
      if (complemento.value == "" || complemento.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        complemento.focus();
        return;
      }
      
      if (bairro.value == "" || bairro.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        bairro.focus();
        return;
      }
      if (cidade.value == "" || cidade.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        cidade.focus();
        return;
      }
      if (estado.value == "" || estado.value.length < 2) {
        alert("Preencha o formulário corretamente!");
        estado.focus();
        return;
      }
    if (Senha.value == "" || Senha.value.length < 6) {
      alert("Preencha o formulário corretamente!");
      Senha.focus();
      return;
    }
    if (ConfirmeSenha.value == "") {
      alert("Preencha o formulário corretamente!");
      ConfirmeSenha.focus();
      return;
    }
  
    if (Senha.value != ConfirmeSenha.value) {
      alert("As senhas não correspondem!");
      ConfirmeSenha.focus();
      return;
    }
  
  
    let arrUsuarios = JSON.parse(localStorage.getItem('arrUsuarios') || '[]')
  
    arrUsuarios.push(
      {
        nomeUser: nome.value,
        rgUser:cpf.value,
        cpfUser:cpf.value,
        emailUser: formulario.email.value,
        telefoneUser: formulario.telefone.value,
        numeroUser: numero.value,
        complementoUser: complemento.value,
        bairroUser: bairro.value,
        cidadeUser: cidade.value,
        estadoUser: estado.value,
        enderecoUser: formulario.endereco.value,
        SenhaUser: formulario.Senha.value,
        ConfirmeSenhaUser: formulario.ConfirmeSenha.value
      });
  
    localStorage.setItem("arrUsuarios", JSON.stringify(arrUsuarios))
  
    alert("Continue o cadastro na Proxima tela");
    window.location.href = "../telacadastro/telaprestar.html"
  }
