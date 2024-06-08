// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Primeira mensagem
function firstBotMessage() {
    let firstMessage = "Olá! Tudo bem?\nSeja bem vindo ao ServiceIn. Muito obrigada pelo contato.<br><br>Por favor, me informe como posso te ajudar:<br><br>1 = Gostaria de solicitar um orçamento para um serviço. <br>2 = Gostaria de verificar a disponibilidade de horários e valores para um serviço. <br>3 = Preciso de assistência técnica para um serviço já contratado. <br>4 = Quero saber mais sobre os tipos de serviços oferecidos. <br>5 = Tenho outras dúvidas ou solicitações."
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();
 
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Recupera a resposta
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Olá!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Retorno ao click do botão de envio de texto
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Gostei!")
}

// Pressionamento do enter e tempo de resposta
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

let termPesq = JSON.parse(localStorage.getItem("termPesq"));

searchButton.onclick = function () {
    localStorage.termPesq = JSON.stringify(searchBar.value);
    if (!window.location.href.endsWith('usuarioLogado.html')) {
        window.location.href = ('../usuarioLogado/usuarioLogado.html');
    }
    termPesq = JSON.parse(localStorage.getItem("termPesq"));
    imprimePrestadores(termPesq);
};