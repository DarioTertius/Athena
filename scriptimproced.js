function gerarFrase() {
    // Obtenha os valores dos campos de entrada
    let numeroProtocolo = document.getElementById('numeroProtocolo').value;
    let dataProtocolo = document.getElementById('dataProtocolo').value;

    // Construa a frase
    let frase = `Identificamos protocolo de atendimento de ouvidoria válido para esta reclamação n° ${numeroProtocolo} registrado em ${dataProtocolo}.`;

    // Obtenha o elemento onde a frase será exibida
    let fraseContainer = document.getElementById('frase-container');

    // Atualize o conteúdo do elemento com a frase
    fraseContainer.textContent = frase;
}

function gerarFrase2() {
    // Obtenha os valores dos campos de entrada
    let numeroProtocolo2 = document.getElementById('numeroProtocolo2').value;
    let dataProtocolo2 = document.getElementById('dataProtocolo2').value;

    // Construa a frase
    let frase2 = `Identificamos protocolo de atendimento de primeiro nível válido para esta reclamação n° ${numeroProtocolo2} registrado em ${dataProtocolo2}.`;

    // Obtenha o elemento onde a frase será exibida
    let fraseContainer2 = document.getElementById('frase-container2');

    // Atualize o conteúdo do elemento com a frase
    fraseContainer2.textContent = frase2;
}

function gerarFrase3() {
    // Obtenha os valores dos campos de entrada
    let semacio = document.getElementById('sacio').value

    // Construa a frase
    let frase3 = `Não identificamos protocolo anterior válido para reclamação ora em tela.`;

    // Obtenha o elemento onde a frase será exibida
    let fraseContainer3 = document.getElementById('frase-container3');

    // Atualize o conteúdo do elemento com a frase
    fraseContainer3.textContent = frase3;
}

function gerarFrase4() {
    // Obtenha os valores dos campos de entrada
    let numeroProtocolo3 = document.getElementById('numeroProtocolo3').value
    let nometit = document.getElementById('nometit').value
    let datacontato = document.getElementById('datacontato').value
    let horacontato = document.getElementById('horacontato').value
    let telcontato = document.getElementById('telcontato').value
    let meiodecontato =document.getElementById('meiodecontato').value
    let servreparado = document.getElementById('servreparado').value
    let dataReparo = document.getElementById('dataReparo').value
    let repprot = document.getElementById('protoRep').value
    let problemaint = document.getElementById('problemaint').value

    // Construa a frase
    let frase4 = `Em atenção a reclamação ${numeroProtocolo3}, contatamos o(a) Sr.(a) ${nometit}, no dia ${datacontato} ás ${horacontato} hs, no número ${telcontato}, através de ${meiodecontato} e   e confirmamos o pleno funcionamento de ${servreparado}, e informamos que não havia defeito em ${dataReparo}. Realizamos visita técnica na residência do cliente através do protocolo nº ${repprot}e foi constatado que o defeito era ${problemaint}. Nesse caso, não cabe ressarcimento ou desconto.` ;

    // Obtenha o elemento onde a frase será exibida
    let fraseContainer4 = document.getElementById('frase-container4');

    // Atualize o conteúdo do elemento com a frase
    fraseContainer4.textContent = frase4;
}

function  gerarEmail () {
    let emailcontato = document.getElementById('emailcontato').value;
    let protgerado = document.getElementById('protgerado').value;

    let frase8 = `Em caso de dúvidas, envie um e-mail para ${emailcontato}.
	Para novas solicitações, estamos disponíveis para lhe atender através da Ouvidoria, de segunda à sexta-feira, das 8h às 18h (exceto feriados), no número 0800 775 1212. Também estamos à sua disposição 24 horas por dia por meio do nosso aplicativo. Você pode obter a segunda via de faturas, acompanhar o agendamento de visitas técnicas e muito mais. Cadastre-se agora em https://www.meusite.com.br/cadastroapp ou faça o download do APP Vivo em sua loja de aplicativos preferida. Número do protocolo de atendimento: ${protgerado}.	`

    let fraseContainer8 = document.getElementById('fraseContainer8');

    fraseContainer8.textContent = frase8
}