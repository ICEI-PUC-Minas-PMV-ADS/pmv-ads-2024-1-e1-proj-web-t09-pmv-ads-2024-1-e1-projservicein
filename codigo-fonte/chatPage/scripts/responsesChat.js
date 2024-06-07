function getBotResponse(input) {

        let cargos = ["Diarista", "Encanador", "Marido de aluguel", "Eletricista", "Carregador", "Pintor"];
        let regex = /(diarista|encanador|marido de aluguel|eletricista|carregador|pintor)/ig;
    
        // Verificando se algum cargo do array corresponde à entrada do usuário
        let matches = input.match(regex);
    
        if (matches && matches.length > 0) {
            let match = matches[0].toLowerCase();
            return "Ok. Você será direcionado(a) para o contato de um profissional que realiza o serviço de " + match + ".";
        } else if (input === "1") {
            return "Ok. Por favor, informe qual o serviço desejado.";
        } else if (input === "3") {
            return "Ok. Você será direcionado (a) para o departamento 'Contratos'. Em breve um atendente entrará em contato. Obrigada!";
        } else if (input === "4") {
            return "Na tela inicial encontra mais detalhes dos prestadores e serviços mais oferecidos. Quaisquer dúvidas, estamos à disposição. Obrigada!";
        } else if (input === "5") {
            return "Ok. Você será direcionado (a) para o departamento 'Outros assuntos'. Em breve um atendente entrará em contato. Obrigada!";
        } else {
            return "Opção inválida. Por favor, selecione uma das opções fornecidas.";
        } 
}



