loadPage()
angular.module('ngQuiz', ['ngSanitize'])

	.controller('ngQuizController', function ($scope, $timeout, quizProgress, scoreKeeper) {
		$scope.quizProgress = quizProgress;

		$scope.quizData = {
		"quizMetadata": {
			"title": "",
			"intro": "",
			"introImg": "assets/img/intro.png",
			"introImgCredit": " "

		},
		"quizQuestions": [{

		//01	
		"question": "Sobre desvio padrão e média:",
		"questionImg": "assets/img/none.png",
		"feedback": "Desvio padrão é uma medida de risco que considera as oscilações de um título da sua própria média. Já a média é a soma dos algarismos dividida pela quantidade.",
		"options": [{
			"name": "Desvio padrão e média são a mesma coisa.",
			"correct": false
		}, {
			"name": "O desvio padrão é a probabilidade de perda de um investimento e a média é a soma dos dados históricos.",
			"correct": false
		}, {
			"name": "O desvio padrão aumenta de acordo com a quantidade de unidades e a média aumenta de acordo com o tempo do investimento.",
			"correct": false
		}, {
			"name": "O desvio padrão é uma medida de risco e a média é a soma dos algarismos dividida pela quantidade.",
			"correct": true
		}]
	}, {
		
		//02	
		"question": "Um investimento possui média igual a 2 e desvio padrão igual a 1. A probabilidade de que o retorno esperado esteja compreendido entre 1% e 3% é de, aproximadamente:",
		"questionImg": "assets/img/none.png",
		"feedback": "Na distribuição normal, a probabilidade de um evento ocorrer no intervalo de um desvio padrão de mais ou menos 1 é de 68%. Se o desvio padrão fosse igual a 2, a probabilidade aumentaria para 95% e, se fosse igual a 3, seria de 99%. Acima de 3, a porcentagem só variaria em relação às casas após a vírgula.",
		"options": [{
			"name": "99%",
			"correct": false
		}, {
			"name": "95%",
			"correct": false
		}, {
			"name": "68%",
			"correct": true
		}, {
			"name": "50%.",
			"correct": false
		}]
	}, {

		//03	
		"question": "Em um regime cambial de taxas perfeitamente flutuantes, o Banco Central:",
		"questionImg": "assets/img/none.png",
		"feedback": "No regime cambial perfeitamente flutuante, o mercado define a cotação das moedas estrangeiras pela lei da oferta e da procura. Se não há intervenção, não se altera a conta de reservas internacionais.",
		"options": [{
			"name": "Busca fazer com que a taxa de câmbio não se desvalorize frente às moedas dos países desenvolvidos.",
			"correct": false
		}, {
			"name": "Não intervém no mercado de câmbio, permanecendo inalteradas as reservas internacionais.",
			"correct": true
		}, {
			"name": "Utiliza as reservas internacionais visando resguardar o país de quaisquer variações na taxa de câmbio.",
			"correct": false
		}, {
			"name": "Atua passivamente, devendo ter um montante de reservas internacionais maior do que no regime cambial de taxas fixas.",
			"correct": false
		}]
	}, {

		//04	
		"question": "Se o Banco Central promover uma elevação da taxa de depósitos compulsórios mantidos pelos bancos, é de se esperar que ocorra:",
		"questionImg": "assets/img/none.png",
		"feedback": "Os depósitos compulsórios são reservas obrigatórias que os bancos fazem no Banco Central. Se o Banco Central aumentar o percentual de depósitos compulsórios, haverá menos recursos disponíveis no mercado e, com a lei da oferta e da procura, os juros ficarão mais caros. Com menos dinheiro em circulação, os juros aumentam e a dívida pública fica mais cara, aumentando também o déficit e diminuindo o PIB. Com juros atrativos, há entrada de recursos internacionais e aumento da oferta de dólar, fazendo com que o preço caia (são necessários menos reais para cada dólar), valorizando a moeda nacional.",
		"options": [{
			"name": "Crescimento do PIB",
			"correct": false
		}, {
			"name": "Desvalorização da moeda nacional.",
			"correct": false
		}, {
			"name": "Diminuição do déficit e da dívida pública.",
			"correct": false
		}, {
			"name": "Elevação da taxa de juros.",
			"correct": true
		}]
	}, {

		//05	
		"question": "A alíquota de recolhimento de depósitos compulsórios sobre depósitos à vista aumenta e não há qualquer ação compensatória por parte da autoridade monetária. Com relação à liquidez do mercado financeiro e às taxas de juros, ocorrem, respectivamente:",
		"questionImg": "assets/img/none.png",
		"feedback": "Se a alíquota de recolhimento de depósitos compulsórios sobre depósitos à vista aumenta, sem considerar outros cenários, haverá menos recursos no mercado, reduzindo a liquidez. Com menos recursos e com a lei da oferta e da procura, haverá elevação dos juros, que ficarão mais caros.",
		"options": [{
			"name": "Elevação e redução.",
			"correct": false
		}, {
			"name": "Redução e elevação.",
			"correct": true
		}, {
			"name": "Redução e redução.",
			"correct": false
		}, {
			"name": "Elevação e elevação.",
			"correct": false
		}]
	}, {

		//06	
		"question": "Pela teoria moderna de investimento, qual é o melhor indicador de diversificação de uma carteira?",
		"questionImg": "assets/img/none.png",
		"feedback": "A correlação dos retornos dos ativos da carteira é o indicador que mede o rendimento de um título em relação ao rendimento de outro título. Quanto mais próximo de -1 for o valor encontrado, mais diversificada é a carteira, pois os rendimentos se moverão em direção contrária. A média é a soma do valor total dividido pela quantidade. Mediana é o número do meio da série. O desvio padrão mede a oscilação de um investimento em relação à sua própria média.",
		"options": [{
			"name": "A correlação dos retornos dos ativos da carteira.",
			"correct": true
		}, {
			"name": "O desvio padrão dos retornos dos ativos da carteira.",
			"correct": false
		}, {
			"name": "A mediana dos retornos dos ativos da carteira.",
			"correct": false
		}, {
			"name": "A média dos retornos dos ativos da carteira.",
			"correct": false
		}]
	}, {

		//07	
		"question": "O erro quadrático médio dos retornos de um fundo de investimento:",
		"questionImg": "assets/img/none.png",
		"feedback": "O erro quadrático médio mede a aderência de um fundo a seu benchmark. Como em sua fórmula (quadrático) o valor é elevado ao quadrado e depois extrai-se a raiz quadrada, o resultado será sempre positivo. A fórmula não é cobrada na prova, apenas o seu conceito deve ser entendido.",
		"options": [{
			"name": "É sempre negativo.",
			"correct": false
		}, {
			"name": "Deve estar entre -1 e +1.",
			"correct": false
		}, {
			"name": "É sempre nulo.",
			"correct": false
		}, {
			"name": "É sempre maior ou igual a zero.",
			"correct": true
		}]
	}, {

		//08	
		"question": "Um investidor racional, na alocação de seus recursos, dará preferência a qual fundo, considerando as características acima.",
		"questionImg": "assets/img/tab_q08.png",
		"feedback": "Quando o retorno é o mesmo, escolhe-se sempre o fundo de menor risco (no nosso caso, representado pelo fundo B). Quando o risco é o mesmo, escolhe-se o melhor retorno, que, nesse caso, também é o do fundo B.",
		"options": [{
			"name": "A sobre B e C sobre B.",
			"correct": false
		}, {
			"name": "B sobre A e B sobre C.",
			"correct": true
		}, {
			"name": "B sobre A e C sobre B.",
			"correct": false
		}, {
			"name": "A sobre B e B sobre C.",
			"correct": false
		}]
	}, {

		//09	
		"question": "Duas emissões de debêntures X e Y com as mesmas características (indexador, prazo, volume) possuem rating AA e B. Tais ratings refletem:",
		"questionImg": "assets/img/none.png",
		"feedback": "O rating é a opinião sobre o risco dos emissores. Risco de emissor (de crédito) é o risco de as empresas não honrarem o pagamento do título.",
		"options": [{
			"name": "No risco de mercado destas debêntures.",
			"correct": false
		}, {
			"name": "No risco de crédito, que é menor para Y que para X.",
			"correct": false
		}, {
			"name": "No risco de as empresas não honrarem o pagamento das debêntures.",
			"correct": true
		}, {
			"name": "No risco cambial dos ativos.",
			"correct": false
		}]
	}, {

		//10	
		"question": "Ao realizar um contrato a termo com garantia da Bolsa de Valores, o investidor reduzirá o seu risco de:",
		"questionImg": "assets/img/none.png",
		"feedback": "A Bolsa de Valores garante a efetivação dos negócios realizados em seu âmbito e, com isso, reduz-se o risco de contraparte. Se uma das partes não cumprir o que foi contratado, a Bolsa de Valores debita o valor correspondente da conta da respectiva parte.",
		"options": [{
			"name": "Contraparte.",
			"correct": true
		}, {
			"name": "Liquidez.",
			"correct": false
		}, {
			"name": "Mercado.",
			"correct": false
		}, {
			"name": "Juros.",
			"correct": false
		}]
	}, {

		//11	
		"question": "O índice de Sharpe de um fundo de investimento é a medida da relação entre:",
		"questionImg": "assets/img/none.png",
		"feedback": "O índice de Sharpe mede a relação entre risco e retorno excedente de um ativo livre de risco. Duration modificada é a sensibilidade de um título às oscilações de taxas no mercado, complementada pela convexidade. Rating é a classificação de risco do emissor e volatilidade são as oscilações do título (desvio padrão). Risco absoluto refere-se a ele mesmo e, no risco relativo, a comparação é feita em relação a um indicador de mercado.",
		"options": [{
			"name": "Risco absoluto e risco relativo.",
			"correct": false
		}, {
			"name": "Rating e volatilidade.",
			"correct": false
		}, {
			"name": "Duration modificada e convexidade.",
			"correct": false
		}, {
			"name": "Retorno excedente e risco.",
			"correct": true
		}]
	}, {

		//12	
		"question": "Na gestão de uma carteira em que o investidor assume diversas posições por meio de investimentos em renda fixa, ações e derivativos para potencializar seus ganhos, para reduzir os riscos ele poderá adotar a estratégia de imunização, que é:",
		"questionImg": "assets/img/none.png",
		"feedback": "Para imunizar uma carteira, o investidor pode igualar o prazo médio ponderado (duration) de seus direitos e obrigações e, com isso, os seus investimentos terão vencimento igual às suas dívidas.",
		"options": [{
			"name": "Investir em ativos com baixo risco de crédito.",
			"correct": false
		}, {
			"name": "Diversificar os investimentos.",
			"correct": false
		}, {
			"name": "Igualar a duration das posições ativas com a duration das posições passivas.",
			"correct": true
		}, {
			"name": "Investir em ativos livres de risco.",
			"correct": false
		}]
	}, {
		
		//13	
		"question": "O que é suitability: ",
		"questionImg": "assets/img/none.png",
		"feedback": "Após a aplicação do API, conhecendo o perfil do investidor, o consultor fará uma recomendação de investimentos. Suitability é a adequação desta recomendação dos produtos de investimento ao perfil do investidor.",
		"options": [{
			"name": "Prospecto de um fundo de investimento.",
			"correct": false
		}, {
			"name": "Regra dos fundos de renda fixa com concentração em créditos privados.",
			"correct": false
		}, {
			"name": "Adequação da recomendação dos produtos de investimento ao perfil do investidor.",
			"correct": true
		}, {
			"name": "Programa de sustentabilidade de empresas que negociam ações na Bolsa de Valores.",
			"correct": false
		}]
	}, {

		//14	
		"question": "A legislação referente ao crime de lavagem de dinheiro postula que:",
		"questionImg": "assets/img/none.png",
		"feedback": "Se o crime for caracterizado como lavagem de dinheiro, o agente pode ser punido, ainda que o processo de posse ou de uso dos bens não tenha concluído todas as etapas. A punição se aplica ao agente que pratica o delito; a quem ocultar ou dissimular a utilização de bens, direitos ou valores provenientes de infração penal; a quem os converte em ativos lícitos, comercializa ou os guarda; a quem utiliza, na atividade econômica ou financeira, bens, direitos ou valores provenientes de infração penal ou a quem for sócio de empresa que o faz. Entretanto, a punição não se aplica aos parentes do infrator. A pena é de reclusão de 3 a 10 anos e multa. Devem ser comunicados ao COAF as operações suspeitas e as movimentações em espécie acima de R$ 50.000,00.",
		"options": [{
			"name": "Todas as movimentações em espécie devem ser comunicadas ao COAF.",
			"correct": false
		}, {
			"name": "O agente pode ser punido, ainda que o processo de posse ou de uso dos bens não tenha concluído todas as etapas.",
			"correct": true
		}, {
			"name": "A pena é de 8 anos de reclusão.",
			"correct": false
		}, {
			"name": "Aplica-se ao agente que praticou o delito e aos seus familiares de até 2º grau.",
			"correct": false
		}]
	}, {

		//15
		"question": "Em um processo de lavagem de dinheiro há três fases, que seguem a ordem de:",
		"questionImg": "assets/img/none.png",
		"feedback": "As três fases da lavagem de dinheiro são: colocação, ocultação e integração, nessa ordem, conhecidas pela abreviatura COIN que, em inglês, significa “moeda”, “dinheiro”.",
		"options": [{
			"name": "Colocação, registro e comunicação.",
			"correct": false
		}, {
			"name": "Comunicação, ocultação e integração.",
			"correct": false
		}, {
			"name": "Colocação, ocultação e integração.",
			"correct": true
		}, {
			"name": "Ocultação, comunicação e integração.",
			"correct": false
		}]
	}, {

		//16	
		"question": "Um funcionário do Banco XYZ percebe que um dos seus clientes efetua depósitos de grandes quantias por meios eletrônicos, evitando sempre o contato direto com o pessoal da agência. Nesse caso, o funcionário do banco XYZ deve comunicar o fato:",
		"questionImg": "assets/img/none.png",
		"feedback": "Ao perceber movimentações suspeitas, o fato deve ser comunicado ao COAF, mantendo à disposição desta autarquia, no mínimo, os dados referentes ao tipo, valor, data da operação e número do CPF ou do CNPJ do cliente, sem o seu conhecimento.",
		"options": [{
			"name": "Ao COAF, mantendo à disposição desta autarquia, no mínimo, os dados referentes ao tipo, valor, data da operação e número do CPF ou do CNPJ do cliente.",
			"correct": true
		}, {
			"name": "Ao COAF, mantendo à disposição desta autarquia os dados referentes ao tipo e valor da operação, sendo vedado ao Banco XYZ disponibilizar informações pessoais do cliente por questão de sigilo.",
			"correct": false
		}, {
			"name": "À Receita Federal, tendo em vista o forte indício de sonegação fiscal.",
			"correct": false
		}, {
			"name": "Ao Ministério Público Estadual, tendo em vista a existência de forte indício de crime de lavagem de dinheiro.",
			"correct": false
		}]
	}, {

		//17	
		"question": "O front runner é o operador que:",
		"questionImg": "assets/img/none.png",
		"feedback": "Front runner (correr na frente) é o operador que consulta as ordens de seus clientes e, antes de executá-las, realiza operações antecipadas para se beneficiar. Geralmente são operações de grandes volumes, que impactam a precificação do ativo.",
		"options": [{
			"name": "Faz análise de mercado e previsões de dados econômicos.",
			"correct": false
		}, {
			"name": "Prepara a empresa para o lançamento inicial de ações.",
			"correct": false
		}, {
			"name": "Consulta as ordens e realiza operações antecipadas para se beneficiar.",
			"correct": true
		}, {
			"name": "Possui informação privilegiada sobre as companhias e a utiliza em proveito próprio ou de outro investidor.",
			"correct": false
		}]
	}, {

		//18	
		"question": "Um cliente que vende brinquedos falsificados dirige-se a um banco e faz vários depósitos de pequenos valores em sua conta. A fase de lavagem de dinheiro que caracteriza a operação descrita é conhecida como:",
		"questionImg": "assets/img/none.png",
		"feedback": "A colocação é a fase da lavagem de dinheiro em que o cliente deposita o dinheiro no banco. A etapa de ocultação é referente às transferências ou trocas por outros ativos e na fase de integração o dinheiro volta à economia com aparência de dinheiro lícito. A fase de preparação não se aplica à lavagem de dinheiro.",
		"options": [{
			"name": "Integração.",
			"correct": false
		}, {
			"name": "Colocação.",
			"correct": true
		}, {
			"name": "Ocultação.",
			"correct": false
		}, {
			"name": "Preparação.",
			"correct": false
		}]
	}, {

		//19	
		"question": "São associadas ao risco de imagem as instituições que possuem:",
		"questionImg": "assets/img/none.png",
		"feedback": "O risco de imagem refere-se à opinião pública sobre determinada instituição. O envolvimento com operações suspeitas e de repercussão pública impacta a imagem e pode representar fuga de investidores.",
		"options": [{
			"name": "Incapacidade de cumprir a legislação e a regulamentação bancária societária.",
			"correct": false
		}, {
			"name": "Desinteresse por atuar como bancos mandatários.",
			"correct": false
		}, {
			"name": "Incapacidade de atuar como agentes fiduciários.",
			"correct": false
		}, {
			"name": "Envolvimento com operações suspeitas e de repercussão pública.",
			"correct": true
		}]
	}, {

		//20	
		"question": "Um investidor celebra um contrato de gestão de carteira com a sua corretora. Ao desempenhar essa atividade, a corretora resolve adquirir ações de uma determinada companhia para a referida carteira, cuja emissão pública tenha sido coordenada pela própria corretora. Essa situação:",
		"questionImg": "assets/img/none.png",
		"feedback": "Adquirir ativos de uma companhia cuja emissão pública tenha sido coordenada pela mesma corretora não representa conflito de interesses. Os critérios da gestão de carteira devem ser definidos no contrato.",
		"options": [{
			"name": "Não ocorre, pois corretoras não podem coordenar emissões primárias.",
			"correct": false
		}, {
			"name": "Não é um conflito de interesses em potencial.",
			"correct": true
		}, {
			"name": "É impossível de ocorrer, tendo em vista a chinese wall da corretora.",
			"correct": false
		}, {
			"name": "Representa um possível conflito de interesses.",
			"correct": false
		}]
	}, {

		//21	
		"question": "São atribuições do Conselho Monetário Nacional (CMN):",
		"questionImg": "assets/img/none.png",
		"feedback": "O CMN é um órgão normativo que visa, dentre outras atribuições, fixar as diretrizes e normas gerais da política monetária e cambial do país. Quem fiscaliza as Instituições Financeiras e realiza leilões de títulos públicos federais é o BACEN. Já a fiscalização dos produtos de renda variável é feita pela Comissão de Valores Mobiliários.",
		"options": [{
			"name": "Fixar as diretrizes e normas gerais da política monetária e cambial do país.",
			"correct": true
		}, {
			"name": "Efetuar, como instrumento da política monetária, as operações de compra e venda de títulos públicos federais.",
			"correct": false
		}, {
			"name": "Fiscalizar o mercado de futuros, opções e BDR.",
			"correct": false
		}, {
			"name": "Exercer a fiscalização das Instituições Financeiras e aplicar as penalidades previstas.",
			"correct": false
		}]
	}, {

		//22	
		"question": "Compete exclusivamente ao Banco Central do Brasil:",
		"questionImg": "assets/img/none.png",
		"feedback": "Compete ao BACEN autorizar o funcionamento das Instituições Financeiras. A análise de crédito das operações do BNDES cabe à instituição financeira que assumirá o risco perante o BNDES. O Conselho Monetário Nacional fixa as diretrizes e normas gerais da política cambial, que são executadas pelo BACEN, e a Comissão de Valores Mobiliários autoriza o funcionamento dos fundos de investimento.",
		"options": [{
			"name": "Autorizar o funcionamento dos fundos de investimento.",
			"correct": false
		}, {
			"name": "Autorizar o funcionamento de Instituições Financeiras.",
			"correct": true
		}, {
			"name": "Fixar as diretrizes e as normas gerais da política cambial.",
			"correct": false
		}, {
			"name": "Aprovar as operações do BNDES.",
			"correct": false
		}]
	}, {

		//23	
		"question": "As corretoras de títulos e valores mobiliários:",
		"questionImg": "assets/img/none.png",
		"feedback": "As corretoras operam com exclusividade na Bolsa de Valores e podem também intermediar operações de câmbio e administrar clubes e fundos de investimento. Já os bancos múltiplos com carteira de arrendamento mercantil realizam as operações de leasing. As corretoras podem, sim, administrar recursos de terceiros via clubes, fundos de investimento ou carteira administrada. Elas não captam recursos por meio de depósitos à vista (captação via banco, que admite movimentações variadas) e o saldo na conta das corretoras não leva o nome de depósito à vista (é chamado apenas de “saldo”).",
		"options": [{
			"name": "Podem atuar no mercado de câmbio.",
			"correct": true
		}, {
			"name": "Podem captar recursos por meio de depósitos à vista.",
			"correct": false
		}, {
			"name": "Não podem administrar recursos de terceiros.",
			"correct": false
		}, {
			"name": "Estão autorizadas a realizar operações de arrendamento mercantil.",
			"correct": false
		}]
	}, {
		
		//24	
		"question": "O investidor que reside no exterior (investidor não residente, podendo ser PF ou PJ, como, por exemplo, fundos de investimento) tem algumas vantagens financeiras ao aplicar no Brasil. Dentre elas, destaca-se:",
		"questionImg": "assets/img/none.png",
		"feedback": "O investidor não residente tem alíquota diferenciada em alguns produtos e isenção de imposto de renda em operações com ações e títulos públicos. As tarifas bancárias são cobradas normalmente e a remuneração em fundos não pode ser diferenciada, pois os cotistas têm os mesmos direitos.",
		"options": [{
			"name": "Rentabilidade superior aos demais cotistas em fundos de investimentos restritos.",
			"correct": false
		}, {
			"name": "Isenção de tarifas bancárias.",
			"correct": false
		}, {
			"name": "Isenção de imposto de renda em ações e títulos públicos.",
			"correct": true
		}, {
			"name": "Isenção total de imposto de renda.",
			"correct": false
		}]
	}, {

		//25	
		"question": "As Entidades Fechadas de Previdência Complementar (EFPC) captam recursos de fundos de previdência de um grupo de funcionários ou pessoas com vínculo societário. Essas entidades são supervisionadas pelo (a):",
		"questionImg": "assets/img/none.png",
		"feedback": "As Entidades Fechadas de Previdência Complementar ou Fundos de Pensão são supervisionadas pela PREVIC.",
		"options": [{
			"name": "CMN.",
			"correct": false
		}, {
			"name": "PREVIC.",
			"correct": true
		}, {
			"name": "BACEN.",
			"correct": false
		}, {
			"name": "SUSEP.",
			"correct": false
		}]
	}, {

		//26	
		"question": "Sobre a tributação em Letras de Crédito do Agronegócio, podemos afirmar que:",
		"questionImg": "assets/img/none.png",
		"feedback": "A LCA é um depósito a prazo com isenção de imposto de renda para PF, onde as PJ serão tributadas de 22,5% a 15% retidos na fonte no momento do resgate, conforme o tempo de aplicação.",
		"options": [{
			"name": "Pessoas Físicas estão isentas.",
			"correct": true
		}, {
			"name": "A tributação será sempre de 15% fixos, pagos no momento do resgate.",
			"correct": false
		}, {
			"name": "Serão cobrados de 22,5% a 15%, pagos pelo investidor por meio de DARF no momento do resgate, conforme o tempo de aplicação.",
			"correct": false
		}, {
			"name": "Serão cobrados de todos os investidores de 22,5% a 15%, retidos na fonte no momento do resgate, conforme o tempo de aplicação.",
			"correct": false
		}]
	}, {

		//27	
		"question": "Dos cotistas de fundos de renda variável, cobra-se o imposto de renda:",
		"questionImg": "assets/img/none.png",
		"feedback": "Os fundos de renda variável ou ações serão tributados apenas sobre os rendimentos positivos no momento do resgate, a uma alíquota única de 15%, independentemente do prazo de aplicação.",
		"options": [{
			"name": "Ao final dos meses de maio e novembro, ou no momento do resgate, o que ocorrer primeiro.",
			"correct": false
		}, {
			"name": "Apenas no momento do resgate, se a rentabilidade acumulada for positiva.",
			"correct": true
		}, {
			"name": "Apenas no momento do resgate, independentemente dos rendimentos.",
			"correct": false
		}, {
			"name": "Ao final de cada mês, se a rentabilidade mensal superar a variação do Ibovespa no mês.",
			"correct": false
		}]
	}, {

		//28	
		"question": "Em fundos de investimento abertos, conforme a legislação do imposto de renda, o IOF – Imposto sobre Operação Financeira:",
		"questionImg": "assets/img/none.png",
		"feedback": "O IOF em fundos de investimento sem carência será cobrado em resgates feitos até 29 dias após a aplicação e a sua alíquota será reduzida a zero a partir de 30 dias após a aplicação.",
		"options": [{
			"name": "Incide a alíquota 0,5% sobre os rendimentos, independentemente do prazo transcorrido entre a aplicação e o resgate de cotas dos fundos de renda fixa.",
			"correct": false
		}, {
			"name": "Tem alíquota reduzida a zero no caso do resgate de cotas de fundos sem carência de renda fixa, desde que o resgate ocorra a partir de 30 dias após a aplicação.",
			"correct": true
		}, {
			"name": "Tem alíquotas diferenciadas, conforme a aplicação de renda fixa, seja pré-fixada ou pós-fixada.",
			"correct": false
		}, {
			"name": "Incide à alíquota de 1% sobre o rendimento, no resgate de cotas de fundos de investimento em ações.",
			"correct": false
		}]
	}, {

		//29	
		"question": "Um fundo de investimento pode comprar papéis de um mesmo emissor até o limite de:",
		"questionImg": "assets/img/none.png",
		"feedback": "Os fundos de investimentos obedecem aos seguintes limitadores por emissor: 100% para o tesouro nacional (governo); 20% para Instituições Financeiras, inclusive de própria emissão; 10% para companhias de capital aberto e 5% para companhias de capital fechado ou Pessoas Físicas.",
		"options": [{
			"name": "80% se o emissor for o tesouro nacional.",
			"correct": false
		}, {
			"name": "20% se o emissor for uma Instituição não-Financeira de capital aberto.",
			"correct": false
		}, {
			"name": "20% se o emissor for uma Instituição Financeira, inclusive de própria emissão.",
			"correct": true
		}, {
			"name": "10% se o emissor for uma Instituição Financeira, inclusive de própria emissão.",
			"correct": false
		}]
	}, {


		//30	
		"question": "Uma aplicação feita em 10/03/2018 em um fundo de ações foi resgatada em 31/07/2018, gerando rendimento de R$ 26.000,00 no período. O imposto de renda relativo a esse rendimento foi retido:",
		"questionImg": "assets/img/none.png",
		"feedback": "O fundo de ações tem tributação apenas no resgate (não tem come-cotas), com alíquota de 15%, independentemente do prazo da aplicação.",
		"options": [{
			"name": "Com alíquota de 22,5% no dia 31/07/18, descontando-se o valor recolhido como antecipação no último dia útil de maio.",
			"correct": false
		}, {
			"name": "Com alíquota de 15% no resgate, descontando-se o valor recolhido como antecipação no último dia útil de maio.",
			"correct": false
		}, {
			"name": "Em 31/07/18, com alíquota de 20%.",
			"correct": false
		}, {
			"name": "Apenas no dia 31/07/18, com alíquota de 15%.",
			"correct": true
		}]
	}, {
		
		//31	
		"question": "Um fundo de investimento tem a sua carteira composta: 30% em ações da PETR4, 30% em ações da VALE5, 10% em ações da BBSA3 e 30% aplicados em Títulos Públicos Federais. Sobre a incidência de IOF sobre esse fundo, os seus cotistas:",
		"questionImg": "assets/img/none.png",
		"feedback": "Somando-se as ações da composição da carteira, chega-se a um percentual acima de 67%, caracterizando fundo de ações, que é isento de IOF.",
		"options": [{
			"name": "Deverão recolher IOF conforme tabela de alíquota progressiva.",
			"correct": false
		}, {
			"name": "Deverão recolher IOF conforme tabela de alíquota regressiva.",
			"correct": false
		}, {
			"name": "Estão isentos da cobrança de IOF, independentemente da data do resgate.",
			"correct": true
		}, {
			"name": "Estarão isentos da cobrança de IOF para resgates superiores a 30 dias.",
			"correct": false
		}]
	}, {

		//32	
		"question": "A portabilidade é um evento que pode ocorrer:",
		"questionImg": "assets/img/none.png",
		"feedback": "A portabilidade pode ocorrer dentro da mesma classe de produtos, como PGBL para PGBL e VGBL para VGBL, entre diferentes administradores (externa) ou entre fundos da mesma instituição (interna).",
		"options": [{
			"name": "De PGBL para PGBL e VGBL para VGBL, sendo vedada a troca entre produtos diferentes.",
			"correct": true
		}, {
			"name": "Entre produtos de investimento de diversas classes, sem resgate.",
			"correct": false
		}, {
			"name": "Entre diferentes administradores, não sendo permitida a troca de fundos de mesmo administrador. ",
			"correct": false
		}, {
			"name": "Entre os produtos de previdência, PGBL para VGBL e vice-versa.",
			"correct": false
		}]
	}, {

		//33	
		"question": "Investimentos em LCI realizados por Pessoas Jurídica:",
		"questionImg": "assets/img/none.png",
		"feedback": "Nas LCI há isenção de imposto de renda apenas para Pessoas Físicas. As Pessoas Jurídicas serão tributadas entre 22,5% e 15% pela tabela de renda fixa, de acordo com o prazo de permanência.",
		"options": [{
			"name": "Poderão ter cobrança de imposto de renda, sendo responsabilidade do próprio investidor o recolhimento e o pagamento do imposto, quando devido.",
			"correct": false
		}, {
			"name": "Terão cobrança de imposto de renda de alíquota única de 20%.",
			"correct": false
		}, {
			"name": "Terão cobrança de imposto de renda pela tabela de renda fixa conforme o prazo de permanência, variando entre 22,5% e 15%.",
			"correct": true
		}, {
			"name": "São Isentos da cobrança de imposto de renda.",
			"correct": false
		}]
	}, {

		//34	
		"question": "Sobre o imposto de renda em fundos de investimento:",
		"questionImg": "assets/img/none.png",
		"feedback": "O imposto de renda em fundos de investimento é calculado de acordo com a classificação: curto prazo, longo prazo e ações. As alíquotas são diferenciadas em função da composição das carteiras. Em fundos de ações não há pagamentos periódicos de imposto de renda come-cotas. As alíquotas são diferenciadas de acordo com a classificação do investimento na Receita Federal. Os fundos CP e LP têm imposto de renda come-cotas.",
		"options": [{
			"name": "É cobrado apenas no momento do resgate em todos os fundos.",
			"correct": false
		}, {
			"name": "As alíquotas de imposto de renda incidentes no resgate de recursos aplicados em fundos de investimento variam com o prazo de aplicação e são idênticas para fundos de curto e longo prazo.",
			"correct": false
		}, {
			"name": "Os fundos de investimento em ações estão sujeitos à sistemática de retenção de imposto de renda denominada come-cotas.",
			"correct": false
		}, {
			"name": "Os fundos de investimento de curto prazo, de longo prazo e de ações são diferenciados em função da composição de suas carteiras, de acordo com a legislação de imposto de renda.",
			"correct": true
		}]
	}, {

		//35	
		"question": "Em um fundo de investimento de longo prazo, a alíquota do come-cotas é de:",
		"questionImg": "assets/img/none.png",
		"feedback": "Nos fundos longo prazo, a alíquota do come-cotas é de 15% (em fundos de longo prazo, a alíquota é menor e, em fundos de curto prazo, a alíquota é maior. Ou seja, a alíquota do come-cotas é inversamente proporcional ao prazo do fundo.",
		"options": [{
			"name": "15%",
			"correct": true
		}, {
			"name": "17,5%.",
			"correct": false
		}, {
			"name": "20%.",
			"correct": false
		}, {
			"name": "22,5%.",
			"correct": false
		}]
	}, {

		//36	
		"question": "O Tesouro Prefixado LTN é um título público que:",
		"questionImg": "assets/img/none.png",
		"feedback": "As LTN são títulos negociados com deságio, semelhantes a uma operação de antecipação de recebíveis. No vencimento, será liquidado o valor de R$ 1.000,00 e a negociação é feita descontando-se a taxa sobre o valor de face.",
		"options": [{
			"name": "É negociado com deságio.",
			"correct": true
		}, {
			"name": "Tem rendimento máximo de 12% a.a.",
			"correct": false
		}, {
			"name": "Acompanha a variação cambial.",
			"correct": false
		}, {
			"name": "Acompanha a variação da Selic.",
			"correct": false
		}]
	}, {

		//37	
		"question": "As operações feitas no Mercado Futuro conferem direitos e deveres a ambas as partes contratantes e fixam um valor sobre os ativos para liquidação em data futura. As diferenças entre o mercado à vista e o valor negociado:",
		"questionImg": "assets/img/none.png",
		"feedback": "As operações de mercado futuro são contratos padronizados sobre ativos para liquidação futura. No entanto, são feitos ajustes diários de preços entre os valores negociados no contrato e os valores do mercado à vista, liquidados em conta margem que deve ser depositada na corretora. Como não são depósitos de bancos, não têm garantia do Fundo Garantidor de Crédito.",
		"options": [{
			"name": "Não existem, pois os valores são garantidos pelo Fundo Garantidor de Crédito.",
			"correct": false
		}, {
			"name": "São pagas no vencimento do contrato.",
			"correct": false
		}, {
			"name": "São acertadas no pagamento do prêmio do contrato.",
			"correct": false
		}, {
			"name": "São pagas por meio de ajuste diário na conta margem.",
			"correct": true
		}]
	}, {

		//38	
		"question": "Nos mercados futuros, o arbitrador é o agente econômico que tem por objetivo: ",
		"questionImg": "assets/img/none.png",
		"feedback": "O arbitrador, quando opera no mercado futuro, visa obter ganhos oriundos de diferença de preços existentes no mercado à vista e no mercado futuro. Quem faz a liquidação física e financeira do contrato é a clearing house. A posição do arbitrador busca desajustes de preço e não caracteriza hedge ou posição contrária. Quem busca a proteção contra oscilações bruscas dos preços dos ativos-objetos é o hedger. O arbitrador busca preços divergentes na tendência de se igualarem para obter ganhos nas operações.",
		"options": [{
			"name": "Obter ganhos oriundos de diferença de preços existentes no mercado à vista e no mercado futuro.",
			"correct": true
		}, {
			"name": "Proteger-se contra oscilações bruscas dos preços dos ativos-objetos.",
			"correct": false
		}, {
			"name": "Assumir posição contrária em uma operação de hedge.",
			"correct": false
		}, {
			"name": "Efetuar a liquidação física do contrato.",
			"correct": false
		}]
	}, {

		//39	
		"question": "A expressão “toda ação equivale a 1 voto” está associada às empresas que possuem o capital composto:",
		"questionImg": "assets/img/none.png",
		"feedback": "As ações ordinárias têm direito a voto, as preferenciais, não, pois o direito de preferência aplica-se somente à distribuição de dividendos. As ações de empresas do segmento Novo Mercado têm em seu PL emissão exclusiva de ações ordinárias.",
		"options": [{
			"name": "51% ações por ordinárias e 49% por ações preferenciais.",
			"correct": false
		}, {
			"name": "50% por ações ordinárias e 50% por ações preferenciais.",
			"correct": false
		}, {
			"name": "100% por ações preferenciais.",
			"correct": false
		}, {
			"name": "100% por ações ordinárias.",
			"correct": true
		}]
	}, {

		//40	
		"question": "Certificados de Depósito Bancário:",
		"questionImg": "assets/img/none.png",
		"feedback": "Certificados de Depósito Bancário são depósitos a prazo que podem ser emitidos por bancos comerciais, de investimentos ou múltiplos. Eles têm cobrança de imposto de renda de acordo com a tabela decrescente em decorrência do prazo de renda fixa, são garantidos pelo Fundo Garantidor de Crédito e não podem ser emitidos pela Bolsa de Valores.",
		"options": [{
			"name": "Podem ser emitidos pela Bolsa de Valores.",
			"correct": false
		}, {
			"name": "Não contam com a cobertura do Fundo Garantidor de Crédito.",
			"correct": false
		}, {
			"name": "Podem ser emitidos por bancos comerciais, de investimentos ou múltiplos.",
			"correct": true
		}, {
			"name": "São isentos de imposto de renda.",
			"correct": false
		}]
	}, {

		//41	
		"question": "Em Ofertas Públicas Iniciais (IPO), o regime de melhores esforços (best efforts) refere-se a:",
		"questionImg": "assets/img/none.png",
		"feedback": "Regime de melhores esforços é uma garantia em que a Instituição Financeira não assume o risco de colocação integral dos títulos. Ou seja: os títulos que não forem vendidos serão devolvidos ao emissor. Se a Instituição Financeira assumisse o risco de colocação integral dos títulos, a garantia seria do tipo firme.",
		"options": [{
			"name": "Quando a Instituição Financeira faz contratos de derivativos para garantir o capital.",
			"correct": false
		}, {
			"name": "Quando a Instituição Financeira é garantidora das operações.",
			"correct": false
		}, {
			"name": "Quando a Instituição Financeira subscreve integralmente a emissão e a revenda posterior.",
			"correct": false
		}, {
			"name": "Quando a Instituição Financeira não assume o risco de colocação integral.",
			"correct": true
		}]
	}, {
		
		//42	
		"question": "Na composição de uma carteira diversificada de renda fixa para um investidor Pessoa Física (nesse caso, investidor qualificado), que exige rendimento com isenção de imposto de renda retido na fonte, recomenda-se aplicação em:",
		"questionImg": "assets/img/none.png",
		"feedback": "O CRI é um investimento com isenção de imposto de renda para Pessoas Físicas, destinado apenas a investidores qualificados. Os demais produtos têm cobrança de imposto de renda.",
		"options": [{
			"name": "Fundos de investimento de curto prazo.",
			"correct": false
		}, {
			"name": "Recibo de depósito bancário.",
			"correct": false
		}, {
			"name": "Certificado de Recebíveis Imobiliários.",
			"correct": true
		}, {
			"name": "Letras de câmbio.",
			"correct": false
		}]
	}, {

		//43	
		"question": "Em virtude da globalização e da expectativa de ganhos por meio da diversificação, os investidores demonstram interesse em adquirir ações de empresas de outros países. As ADR são títulos: ",
		"questionImg": "assets/img/none.png",
		"feedback": "ADR são títulos emitidos por empresas com domicílio fora dos Estados Unidos, lastreados em suas ações e negociados nos EUA.",
		"options": [{
			"name": "Emitidos por empresas dos Estados Unidos e negociadas em outros países.",
			"correct": false
		}, {
			"name": "Emitidos por empresas com domicílio fora dos Estados Unidos, lastreados em suas ações e negociados nos EUA.",
			"correct": true
		}, {
			"name": "Com lastro em debêntures de uma empresa brasileira exportadora e negociados nos Estados Unidos.",
			"correct": false
		}, {
			"name": "Derivativos, com lastro em ações de uma empresa brasileira exportadora e negociados nos Estados Unidos.",
			"correct": false
		}]
	}, {

		//44	
		"question": "Uma das formas de captação de recursos para produção agrícola ocorre por meio das Cédulas do Produtor Rural (CPR). Sobre elas, podemos afirmar que: ",
		"questionImg": "assets/img/none.png",
		"feedback": "A CPR é um título emitido por pessoa física ou por cooperativas de produção para captação de recursos para produção. Se o investidor for PF, não haverá cobrança de imposto de renda. As garantias costumam ser: penhor de safra, aval de bancos ou seguros de garantia. As CPR podem ser negociadas em bolsa ou diretamente (balcão) e não têm mínimo ou máximo, pois dependem do ciclo de produção e do interesse das partes.",
		"options": [{
			"name": "Suas garantias podem ser dadas por bancos e seguradoras. ",
			"correct": true
		}, {
			"name": "Têm prazo máximo de 360 dias.",
			"correct": false
		}, {
			"name": "Não podem ser negociadas no mercado de balcão.",
			"correct": false
		}, {
			"name": "Só podem ser emitidas por bancos múltiplos.",
			"correct": false
		}]
	}, {

		//45	
		"question": "Um distribuidor aplica, por conta e ordem, recursos de um cliente em um determinado fundo de investimento. Essa operação:",
		"questionImg": "assets/img/none.png",
		"feedback": "A aplicação por conta e ordem é realizada pelo distribuidor em nome do cotista e é uma operação comum no mercado. Não precisa ser informada à CVM, que é o órgão supervisor, e nem ao gestor (que faz a negociação dos ativos), pois é realizada entre o distribuidor (em nome do cotista) e o administrador.",
		"options": [{
			"name": "É ilegal, pois todas as movimentações em fundos devem ser realizadas pelo investidor.",
			"correct": false
		}, {
			"name": "É legal, pois a movimentação por conta e ordem é uma sistemática comum.",
			"correct": true
		}, {
			"name": "Deve ser informada ao gestor da aplicação.",
			"correct": false
		}, {
			"name": "Deve ser informada à CVM.",
			"correct": false
		}]
	}, {

		//46	
		"question": "O regulamento de um fundo de investimento estabelece que, no mínimo, 80% da sua carteira seja direcionada às operações vinculadas à variação da taxa de juros doméstica ou do índice de preços. Segundo a CVM, esse fundo dever ser classificado como:",
		"questionImg": "assets/img/none.png",
		"feedback": "O fundo de renda fixa deve aplicar, no mínimo, 80% de seu PL em ativos de renda fixa, atrelados à taxa de juros do país ou ao índice de preços. O fundo referenciado aplica, no mínimo, 95% em ativos atrelados ao seu benchmark. O multimercado não admite concentração. O fundo curto prazo na CVM tem o prazo médio igual ou inferior a 60 dias.",
		"options": [{
			"name": "De renda fixa.",
			"correct": true
		}, {
			"name": "Multimercado.",
			"correct": false
		}, {
			"name": "De curto prazo.",
			"correct": false
		}, {
			"name": "Referenciado.",
			"correct": false
		}]
	}, {

		//47	
		"question": "O administrador de carteira de valores mobiliários deve informar seu cliente sobre outras atividades que exerça no mercado”. Essa afirmação está:",
		"questionImg": "assets/img/none.png",
		"feedback": "O administrador de carteira de valores mobiliários deve informar seu cliente sobre outras atividades que exerça no mercado para evitar conflito de interesses. Chinese wall refere-se à segregação de recursos dos fundos administrados dos recursos do próprio administrador. O sigilo do administrador refere-se apenas às informações confidenciais, sendo que o administrador tem o dever de comunicar fatos relevantes ao seu cliente. Além do fiel cumprimento do contrato, o administrador segue princípios éticos e deve obediência às regras do mercado.",
		"options": [{
			"name": "Incorreta, pois a CVM exige do administrador apenas a obrigação de cumprir fielmente o contrato firmado com o cliente, seguindo a sua política de investimento. ",
			"correct": false
		}, {
			"name": "Incorreta, pois o administrador tem o dever de sigilo absoluto em relação aos seus clientes.",
			"correct": false
		}, {
			"name": "Correta, pois poderão ocorrer conflitos de interesses.",
			"correct": true
		}, {
			"name": "Correta, pois o administrador não pode administrar carteiras de Instituições Financeiras diversas devido às práticas de conduta denominadas “chinese wall”.",
			"correct": false
		}]
	}, {

		//48	
		"question": "Ao receber a recomendação de um fundo referenciado DI, um investidor avesso ao risco questionou a informação presente no prospecto de que o respectivo fundo utiliza instrumentos de derivativos. O gerente argumentou que a frase do prospecto é padrão, exigência do código de regulação da ANBIMA, e que o fundo não apresenta risco, pois não utiliza instrumento de derivativos. O esclarecimento do gerente está:",
		"questionImg": "assets/img/none.png",
		"feedback": "Os fundos referenciados DI, por serem passivos podem utilizar derivativos somente para proteção da carteira (hedge).",
		"options": [{
			"name": "Correto, pois os prospectos são padronizados pela ANBIMA e podem não refletir a realidade de cada fundo.",
			"correct": false
		}, {
			"name": "Incorreto, pois fundos referenciados DI podem utilizar derivativos para a proteção da carteira.",
			"correct": true
		}, {
			"name": "Incorreto, pois fundos referenciados DI podem utilizar derivativos para alavancagem da carteira.",
			"correct": false
		}, {
			"name": "Correto, pois é vedado o uso de derivativos em fundos referenciados.",
			"correct": false
		}]
	}, {

		//49	
		"question": "Dois fundos referenciados DI, de mesma taxa de administração, obtiveram retornos conforme quadro acima. Comparando-se os fundos A e B, é correto afirmar que:",
		"questionImg": "assets/img/tab_q49.png",
		"feedback": "O objetivo dos fundos referenciados DI é acompanhar o benchmark sem a utilização de instrumentos para alavancagem e, por isso, não podem render acima do benchmark. Assim, o fundo A está mais aderente a seu objetivo.",
		"options": [{
			"name": "A é um fundo que não marca seus títulos a mercado. ",
			"correct": false
		}, {
			"name": "B é um fundo passivo.",
			"correct": false
		}, {
			"name": "B está mais aderente ao objetivo do fundo.",
			"correct": false
		}, {
			"name": "A está mais aderente ao objetivo do fundo.",
			"correct": true
		}]
	}, {

		//50	
		"question": "A linha d’água pode ser entendida como uma:",
		"questionImg": "assets/img/none.png",
		"feedback": "A linha d´água é uma metodologia utilizada para cálculo e limitação da cobrança de taxa de performance de um fundo, considerando seu benchmark. Ela delimita o início da cobrança da taxa que, se for menor que o benchmark, não existirá e, se for maior que o benchmark, será calculada conforme percentual sobre o excedente.",
		"options": [{
			"name": "Fórmula matemática utilizada no cálculo da taxa limite de ganho do administrador de um fundo de investimento.",
			"correct": false
		}, {
			"name": "Metodologia utilizada no cálculo da taxa fixa de um fundo de investimento.",
			"correct": false
		}, {
			"name": "Metodologia utilizada para cálculo e limitação da cobrança de taxa de performance de um fundo, considerando seu benchmark.",
			"correct": true
		}, {
			"name": "Fórmula matemática que aumenta os ganhos do administrador e a rentabilidade de todos os fundos.",
			"correct": false
		}]
	}, {

		//51	
		"question": "Um dos direitos do administrador de fundos de investimentos, sem prévia autorização de uma assembleia de cotistas, é:",
		"questionImg": "assets/img/none.png",
		"feedback": "O administrador deverá convocar uma assembleia para realizar qualquer mudança no regulamento do fundo. Não precisará fazê-lo em somente três situações: para reduzir a taxa de administração, alterar dados cadastrais ou adequar exigências legais.",
		"options": [{
			"name": "Apropriar-se de parte do patrimônio do fundo.",
			"correct": false
		}, {
			"name": "Reduzir a taxa de administração.",
			"correct": true
		}, {
			"name": "Alterar a política de investimento.",
			"correct": false
		}, {
			"name": "Aumentar a taxa de administração.",
			"correct": false
		}]
	}, {

		//52	
		"question": "Se o investidor quisesse garantir o seu futuro acumulando valores em um produto que permita reduzir a base de cálculo do imposto de renda, visando obter vantagem imediata, qual seria o produto mais adequado?",
		"questionImg": "assets/img/none.png",
		"feedback": "O PGBL permite ao investidor acumular recursos para o futuro e obtém vantagem imediata: os depósitos anuais podem ser abatidos da base de cálculo da declaração de imposto de renda do mesmo período.",
		"options": [{
			"name": "Poupança.",
			"correct": false
		}, {
			"name": "Fundo cambial.",
			"correct": false
		}, {
			"name": "VGBL.",
			"correct": false
		}, {
			"name": "PGBL.",
			"correct": true
		}]
	}, {
		
		//53	
		"question": "Um investidor resgatou o seu PGBL 6 anos após a aplicação e o imposto retido foi de 15%. A base de cálculo e a tabela de tributação que ele escolheu foi:",
		"questionImg": "assets/img/none.png",
		"feedback": "No PGBL, a base de cálculo é o valor do resgate. A tabela progressiva é constante de fonte, com alíquota fixa de 15% independente do prazo. Nesse caso, o investidor deverá declarar o valor em sua declaração anual de imposto de renda como renda tributável, fazendo o ajuste de alíquotas com imposto a pagar ou a restituir.",
		"options": [{
			"name": "Valor do resgate – Presumida.",
			"correct": false
		}, {
			"name": "Rendimentos – Regressiva.",
			"correct": false
		}, {
			"name": "Valor do resgate – Progressiva.",
			"correct": true
		}, {
			"name": "Rendimentos – IOF.",
			"correct": false
		}]
	}, {

		//54	
		"question": "Um investidor quer aplicar em um título público que acompanhe a inflação. Sabendo que o título escolhido tem risco de reinvestimento, pode-se afirmar que ele comprou: ",
		"questionImg": "assets/img/none.png",
		"feedback": "A NTN-B acompanha a inflação e paga juros semestralmente e, por isso, apresenta risco de reinvestimento, pois terá de reaplicar os rendimentos. A NTN-B principal paga juros no final e não tem risco de reinvestimento. A NTN-F e a LTN não acompanham a inflação, pois são prefixadas. A expressão “+juros” é desnecessária, mas apareceu em algumas questões da prova (segundo depoimentos).",
		"options": [{
			"name": "LTN.",
			"correct": false
		}, {
			"name": "NTN-B + juros.",
			"correct": true
		}, {
			"name": "NTN-B + juros (principal).",
			"correct": false
		}, {
			"name": "NTN-F + juros.",
			"correct": false
		}]
	}, {

		//55	
		"question": "Um senhor aplicou em um CDB de longo prazo sem carência. O imposto de renda será de:",
		"questionImg": "assets/img/none.png",
		"feedback": "De acordo com a tabela decrescente de imposto de renda para produtos de renda fixa, a única alternativa em que o prazo está adequado à alíquota é a opção C – 22,50% em 180 dias. Para 90 dias, a alíquota é de 22,50%; para 360 dias, é de 20% e para 720 dias, é de 17,50%. Atenção para a base de corte (a alíquota muda com apenas um dia a mais no prazo).",
		"options": [{
			"name": "20%, se resgatar em 720 dias.",
			"correct": false
		}, {
			"name": "22,50%, se resgatar em 180 dias.",
			"correct": true
		}, {
			"name": "15%, se resgatar com 360 dias.",
			"correct": false
		}, {
			"name": "17,50%, se resgatar com 90 dias.",
			"correct": false
		}]
	}, {

		//56	
		"question": "A Letra Financeira do Tesouro – LFT – é um título indexado:",
		"questionImg": "assets/img/none.png",
		"feedback": "A LFT é um título pós-fixado atrelado à Selic diária. Considerada com baixíssimo risco de mercado, geralmente é negociada pelo seu preço (ao par). Pode acontecer de ser vendida com ágio ou deságio, quando o mercado exigir remuneração diferente (menor ou maior) que a taxa Selic. ",
		"options": [{
			"name": "Ao IPCA, negociada com deságio.",
			"correct": false
		}, {
			"name": "Ao IGP-M, negociada com ágio.",
			"correct": false
		}, {
			"name": "À taxa DI, negociada ao par, com ágio ou deságio.",
			"correct": false
		}, {
			"name": "À taxa Selic, negociada ao par, com ágio ou deságio.",
			"correct": true
		}]
	}, {

		//57	
		"question": "Em uma IPO, o investidor pode dar ordem de compra fixando limites de preços, em que, caso o preço de mercado fique acima do preço definido pelo investidor, a IPO não será executada. Essa ordem é chamada de:",
		"questionImg": "assets/img/none.png",
		"feedback": "Quando uma ordem de compra fixa limites de preços em que, se o preço de mercado ficar acima do preço definido pelo investidor, a IPO não será executada, ela é chamada de ordem limitada. A ordem a mercado é a ordem a ser executada a qualquer preço. Corretagem é taxa paga à corretora em cada ordem de compra ou venda. Emolumentos são a taxa cobrada pela Bolsa de Valores por negociação.",
		"options": [{
			"name": "Emolumentos.",
			"correct": false
		}, {
			"name": "Corretagem.",
			"correct": false
		}, {
			"name": "Ordem limitada.",
			"correct": true
		}, {
			"name": "Ordem a mercado.",
			"correct": false
		}]
	}, {

		//58	
		"question": "O Fundo Garantidor de Créditos (FGC) é um instrumento de mitigação de riscos. Dos produtos abaixo, quais possuem a cobertura do FGC?",
		"questionImg": "assets/img/none.png",
		"feedback": "São garantidos pelo FGC: depósitos à vista (conta corrente e conta salário) e depósitos a prazo (CDB, DPGE, poupança, LCA, LCI). Já CRI, ações e fundos não têm cobertura do FGC.",
	"options": [{
			"name": "Fundos, poupança e CDB.",
			"correct": false
		}, {
			"name": "CDB, poupança e LCA.",
			"correct": true
		}, {
			"name": "Ações, LCA e poupança.",
			"correct": false
		}, {
			"name": "CDB, CRI e LCI.",
			"correct": false
		}]
	}, {

		//59	
		"question": "Um senhor de 58 anos recebeu uma herança no valor de R$ 100.000,00. Como está desempregado, precisará desse dinheiro para a sua manutenção. Considerando as necessidades do investidor, qual produto é mais adequado ao seu objetivo?",
		"questionImg": "assets/img/none.png",
		"feedback": "Como precisa do dinheiro para a sua manutenção, o investidor tem necessidade de alta liquidez e baixo risco, e o fundo DI atende aos requisitos. Fundos de ações apresentam alto risco, fundos multimercado oferecem médio ou alto risco e COE tem baixa liquidez.",
		"options": [{
			"name": "COE.",
			"correct": false
		}, {
			"name": "Fundo multimercado.",
			"correct": false
		}, {
			"name": "Fundo RF referenciado DI.",
			"correct": true
		}, {
			"name": "Fundo de ações.",
			"correct": false
		}]
	}, {

		//60	
		"question": "Uma empresa de comércio eletrônico realizou investimentos em seu banco, compostos por ações, CDB e LCA. Ao resgatar os valores, três anos depois, ela teve, respectivamente, os ganhos de R$ 10.000,00, R$ 5.000,00 e R$ 8.000,00. O imposto de renda nos produtos será, também respectivamente:",
		"questionImg": "assets/img/none.png",
		"feedback": "As isenções ocorrem apenas para Pessoa Física. O imposto de renda em ações é de 15% sobre os ganhos. CDB e LCA para Pessoa Jurídica terão imposto de renda de 15% sobre os rendimentos em função do prazo.",
		"options": [{
			"name": "Zero (isento) para todos os produtos.",
			"correct": false
		}, {
			"name": "R$ 1.500,00, R$ 750,00, zero (isento).",
			"correct": false
		}, {
			"name": "Zero (isento), R$ 750,00, zero (isento).",
			"correct": false
		}, {
			"name": "R$ 1.500,00, R$ 750,00 e R$ 1.200,00",
			"correct": true
		}]
	}]
		};


 $scope.quizQuestions = $scope.quizData.quizQuestions;
  $scope.quizMetadata = $scope.quizData.quizMetadata;
  quizProgress.lastQuestion = $scope.quizQuestions.length;
  quizProgress.loading = false;

  $scope.startQuiz = function() {
    quizProgress.inProgress = true;
    quizProgress.currentQuestion = 0;
    quizProgress.imageToPreload = 1;
  };

  $scope.nextQuestion = function() {
    if (quizProgress.currentQuestion < quizProgress.lastQuestion) {
      quizProgress.currentQuestion = quizProgress.currentQuestion + 1;
      quizProgress.currentQuestionFriendly = quizProgress.currentQuestionFriendly + 1;
      quizProgress.imageToPreload = quizProgress.imageToPreload + 1;
    }
  };

  $scope.answerQuestion = function(data) {
    $scope.quizQuestions[quizProgress.currentQuestion].answered = true;
    angular.forEach($scope.quizQuestions[quizProgress.currentQuestion].options, function(obj) {
      if (obj.name === data.selected) {
        obj.selected = true;
      } else {
        obj.selected = false;
      }
    });
  };

  $scope.checkAnswer = function() {
    $scope.quizQuestions[quizProgress.currentQuestion].answerChecked = true;

    angular.forEach($scope.quizQuestions[quizProgress.currentQuestion].options, function(obj) {
      if (obj.selected) {
        if (obj.correct) {
          $scope.quizQuestions[quizProgress.currentQuestion].answerWasRight = true;
        } else {
          $scope.quizQuestions[quizProgress.currentQuestion].answerWasRight = false;
        }
      }
    });
  };

  $scope.getScore = function() {
    quizProgress.inProgress = false;
    quizProgress.finished = true;
    quizProgress.calculatingScore = true;
    $scope.score = scoreKeeper.calculateScore($scope.quizQuestions);
    $scope.message = scoreKeeper.getMotivationalMessage($scope.score);

    //salvando dados no SCORM
    salvaNota($scope.score);
    fl_finaliza($scope.score)

    $timeout(function() {
      quizProgress.calculatingScore = false;
    }, 1500);
  };

  $scope.startOver = function() {
    angular.forEach($scope.quizQuestions, function(obj) {
      obj.answered = false;
      obj.answerWasRight = false;
      obj.answerChecked = false;

      angular.forEach(obj.options, function(option) {
        option.selected = false;
      });
    });

    quizProgress.inProgress = true;
    quizProgress.finished = false;
    quizProgress.currentQuestion = 0;
    quizProgress.currentQuestionFriendly = 1;
  };
})

.factory('quizProgress', function() {
  return {
    currentQuestion: 0,
    imageToPreload: 0,
    currentQuestionFriendly: 1,
    lastQuestion: 0,
    loading: true,
    inProgress: false,
    finished: false,
    calculatingScore: false
  };
})

.service('scoreKeeper', function() {
  this.calculateScore = function(quizQuestions) {
    var rightAnswers = 0;
    angular.forEach(quizQuestions, function(obj) {
      if (obj.answerWasRight) {
        rightAnswers += 1;
      }
    });

    return ((rightAnswers / quizQuestions.length) * 100).toFixed();
  };
  
  this.getMotivationalMessage = function(score) {
    if (score == 70) {
      return "Você está no caminho certo e teve 70% de êxito neste simulado! Continue se preparando para o exame e busque sempre o seu melhor!";
    } else if (score >= 70) {
      return "Parabéns! Você acertou mais de 70% das questões! Se este fosse o exame real, você teria sido aprovado. Continue assim!";
    } else {
      return "Estude bastante e, se possível, refaça o treinamento e o simulado do exame! O objetivo é conseguir 70% de acertos para ser aprovado.";
    }
  };
})

.directive('progressBar', function(quizProgress) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch('quizProgress', function(newVal, oldVal) {
        if (newVal) {
          element.css('width', ((quizProgress.currentQuestionFriendly / quizProgress.lastQuestion) * 100 + '%'));
        }
      }, true);
    }
  };
})

.directive('imagePreload', function(quizProgress) {
  return {
    restrict: 'EA',
    template: "<img style='display:none;' ng-src='{{quizQuestions[quizProgress.imageToPreload].questionImg}}'/>"
  };
})

.directive('animateProgression', function(quizProgress, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch('quizProgress.currentQuestion', function(newVal, oldVal) {
        if (newVal) {
          element.addClass('question-animate');
          $timeout(function() {
            element.removeClass('question-animate');
          }, 1500);
        }
      });
    }
  };
});
