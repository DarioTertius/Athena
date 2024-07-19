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
    let numeroProtocolo3 = document.getElementById('numeroProtocolo3').value;
    let nometit = document.getElementById('nometit').value;
    let datacontato = document.getElementById('datacontato').value;
    let horacontato = document.getElementById('horacontato').value;
    let telcontato = document.getElementById('telcontato').value;
    let meiodecontato =document.getElementById('meiodecontato').value;
    let datacancel = document.getElementById('datacancel').value;
    let servcancel = document.getElementById('servcancel').value; 
    let plano = document.getElementById ('plano').value;   

    // Construa a frase
    let frase4 = `Em atenção a reclamação ${numeroProtocolo3}, contatamos o(a) Sr.(a) ${nometit}, no dia ${datacontato} ás ${horacontato} hs, no número ${telcontato}, através de ${meiodecontato}. informamos que a solicitação de cancelamento realizada em ${datacancel},  foi concluída com sucesso, referente ao serviço ${servcancel} no plano ${plano} Este cancelamento foi realizado de forma imediata.` ;

    // Obtenha o elemento onde a frase será exibida
    let fraseContainer4 = document.getElementById('frase-container4');

    // Atualize o conteúdo do elemento com a frase
    fraseContainer4.textContent = frase4;
}

function calculoProrata() {
    let diassemserviço = document.getElementById('diasdedefeito').value;
    let valordafatura = document.getElementById('valorserv').value;
    

    // Convertendo strings para números
    diassemserviço = parseFloat(diassemserviço);
    valordafatura = parseFloat(valordafatura);
    

    // Verificando se as conversões foram bem-sucedidas
    if (isNaN(diassemserviço) || isNaN(valordafatura)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    // Realizando o cálculo
    const calculo = (valordafatura / 30) * diassemserviço;

    // Garantindo que o elemento fraseContainer5 exista no HTML
    let fraseContainer5 = document.getElementById('fraseContainer5');
    if (!fraseContainer5) {
        alert("O elemento de resultado (fraseContainer5) não foi encontrado.");
        return;
    }

    // Criando a frase
    let frase5 = `Esclarecemos que devido a falha/inoperância de ${diassemserviço} dias nos serviços, será efetivado desconto no valor de R$ ${calculo.toFixed(2).replace('.', ',') }, conforme estabelecido no caput do art. 32 do RQUAL.`;

    // Definindo o texto no elemento fraseContainer5
    fraseContainer5.textContent = frase5;
}

function gerarFrase6() {
    // Obtenha os valores dos campos de entrada
    let infoscomplementares = document.getElementById('infoscomplementares').value;
    let datavencimento = document.getElementById('datavencimento').value;


    // Construa a frase
    let frase6 = `O desconto será aplicado na fatura com vencimento em ${datavencimento} referente à cobrança proporcional dos serviços até a data efetiva do cancelamento. ${infoscomplementares}. Informamos também que a operadora possui um prazo de 30 dias para efetuar a  retirada do equipamento do cliente, caso esta não ocorra dentro do prazo estipulado, poderá ser realizado o devido descarte do mesmo.`;

    // Obtenha o elemento onde a frase será exibida
    let fraseContainer6 = document.getElementById('fraseContainer6');

    // Atualize o conteúdo do elemento com a frase
    fraseContainer6.textContent = frase6;
}

function gerarFrase61() {
    let datajust = document.getElementById('datajust').value;
    let datajustnova = document.getElementById('datajustnova').value;
    let valorantigo = document.getElementById('valorantigo').value;
    let calculogerado = document.getElementById('calculogerado').value;

    valorantigo = parseFloat(valorantigo);
    calculogerado = parseFloat(calculogerado);

    const calc2 = (valorantigo - calculogerado);

    let frase61 = `a fatura com vencimento em ${datajust} deverá ser ajustada e gerada nova conta com vencimento em ${datajustnova} no valor de R$ ${calc2.toFixed(2).replace('.', ',')} ,conforme estabelecido no caput do art. 32 do RQUAL.`;

    let fraseContainer61 = document.getElementById('fraseContainer61');

    fraseContainer61.textContent = frase61
}

function gerarValor() {
    let creditacordo = document.getElementById('creditacordo').value;

    let frase7 = `Em caráter de acordo, geramos um crédito a mais no valor de R$ ${creditacordo} para a mesma fatura acima mencionada.`;

    let fraseContainer7 = document.getElementById('fraseContainer7');

    fraseContainer7.textContent = frase7
}

function  gerarEmail () {
    let emailcontato = document.getElementById('emailcontato').value;
    let protgerado = document.getElementById('protgerado').value;

    let frase8 = ` Prazo de envio do boleto por correio de 12 dias úteis e também ficará disponível no App Vivo em até 3 dias úteis. Em caso de dúvidas, envie um e-mail para ${emailcontato}.
	Para novas solicitações, estamos disponíveis para lhe atender através da Ouvidoria, de segunda à sexta-feira, das 8h às 18h (exceto feriados), no número 0800 775 1212. Também estamos à sua disposição 24 horas por dia por meio do nosso aplicativo. Você pode obter a segunda via de faturas, acompanhar o agendamento de visitas técnicas e muito mais. Cadastre-se agora em https://www.meusite.com.br/cadastroapp ou faça o download do APP Vivo em sua loja de aplicativos preferida. Número do protocolo de atendimento: ${protgerado}.	`

    let fraseContainer8 = document.getElementById('fraseContainer8');

    fraseContainer8.textContent = frase8
}