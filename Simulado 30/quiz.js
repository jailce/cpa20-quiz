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

				"feedback": "Desvio padrão é uma medida de risco, que considera as oscilações de um título da sua própria média. Já a média é a soma dos algarismos dividida pela quantidade.",

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
				"question": "Pela teoria moderna de investimento, qual é o melhor indicador de diversificação de uma carteira?",

				"feedback": " A correlação dos retornos dos ativos da carteira é o indicador que mede o rendimento de um título em relação ao rendimento de outro título. Quanto mais próximo de -1 for o valor encontrado, mais diversificada é a carteira, pois os rendimentos se moverão em direção contrária. A média é a soma do valor total dividido pela quantidade. Mediana é o número do meio da série. O desvio padrão mede a oscilação de um investimento em relação à sua própria média. ",

				"options": [{

					"name": " A correlação dos retornos dos ativos da carteira.",
					"correct": false
      }, {

					"name": "O desvio padrão dos retornos dos ativos da carteira.",
					"correct": false
      }, {

					"name": "A mediana dos retornos dos ativos da carteira.",
					"correct": false
      }, {
					"name": "A média dos retornos dos ativos da carteira.",
					"correct": true
      }]
    }, {


				//03	
				"question": "O erro quadrático médio dos retornos de um fundo de investimento:",
				"feedback": " O erro quadrático médio mede a aderência de um fundo a seu benchmark. Como em sua fórmula (quadrático) o valor é elevado ao quadrado e depois extrai-se a raiz quadrada, o resultado será sempre positivo. A fórmula não é cobrada na prova, apenas o seu conceito deve ser entendido.",

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
				//04			
				"question": "Considere três fundos com as características acima:",
				"questionImg": "assets/img/tabela_q4.png",
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
				//05			
				"question": "O índice de Sharpe de um fundo de investimento é a medida da relação entre:",
				"questionImg": "assets/img/none.png",
				"feedback": "O índice de Sharpe mede a relação entre risco e retorno excedente de um ativo livre de risco. Duration modificada é a sensibilidade de um título às oscilações de taxas no mercado, complementada pela convexidade. Rating é a classificação de risco do emissor e volatilidade são as oscilações do título (desvio padrão). Risco absoluto refere-se a ele mesmo e, no risco relativo, a comparação é feita em relação a um indicador de mercado. ",
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
				//06			
				"question": "O que é suitability: ",
				"questionImg": "assets/img/none.png",
				"feedback": "Após a aplicação do API, conhecendo o perfil do investidor, o consultor fará uma recomendação de investimentos. suitability é a adequação desta recomendação dos produtos de investimento ao perfil do investidor.",
				"options": [{
					"name": "Prospecto de um fundo de investimento. ",
					"correct": false
				  }, {
					"name": "Regra dos fundos de renda fixa com concentração em créditos privados. ",
					"correct": false
				  }, {
					"name": "Regra dos fundos de renda fixa com concentração em créditos privados.",
					"correct": true
				  }, {
					"name": "Prospecto de um fundo de investimento. ",
					"correct": false
				  }]
				}, {
				//07	
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
				//08	
				"question": "O front runner é o operador que:",
				"questionImg": "assets/img/none.png",
				"feedback": "Front runner (correr na frente) é o operador que consulta as ordens de seus clientes e, antes de executá-las, realiza operações antecipadas para se beneficiar. Geralmente são operações de grandes volumes, que impactam a precificação do ativo",
				"options": [{
					"name": "Faz análise de mercado e previsões de dados econômicos.",
					"correct": false
				  }, {
					"name": "Prepara a empresa para o lançamento inicial de ações.",
					"correct": false
				  }, {
					"name": "Consulta as ordens e realiza operações antecipadas para se beneficiar. ",
					"correct": true
				  }, {
					"name": "Possui informação privilegiada sobre as companhias e a utiliza em proveito próprio ou de outro investidor.",
					"correct": false
				  }]
				}, {
				//09	
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
				//10	
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
				//11	
				"question": "Dos cotistas de fundos de renda variável, cobra-se o imposto de renda: ",
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
				//12	
				"question": "Um fundo de investimento pode comprar papéis de um mesmo emissor até o limite de:",
				"questionImg": "assets/img/none.png",
				"feedback": "Os fundos de investimentos obedecem aos seguintes limitadores por emissor: 100% para o tesouro nacional (governo); 20% para instituições financeiras, inclusive de própria emissão; 10% para companhias de capital aberto e 5% para companhias de capital fechado ou Pessoas Físicas.",
				"options": [{
					"name": "80% se o emissor for o tesouro nacional.",
					"correct": false
				  }, {
					"name": "20% se o emissor for uma instituição não-financeira de capital aberto.",
					"correct": false
				  }, {
					"name": "20% se o emissor for uma instituição financeira, inclusive de própria emissão.",
					"correct": true
				  }, {
					"name": "10% se o emissor for uma instituição financeira, inclusive de própria emissão.",
					"correct": false
				  }]
				}, {
				//13	
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
				//14	
				"question": "Um fundo de investimento tem a sua carteira composta por: 30% em ações da PETR4, 30% em ações da VALE5, 10% em ações da BBSA3 e 30% aplicados em Títulos Públicos Federais. Sobre a incidência de IOF sobre esse fundo, os seus cotistas:",
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
				//15	
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
				//16	
				"question": "Sobre o imposto de renda em fundos de investimento:",
				"questionImg": "assets/img/none.png",
				"feedback": "O imposto de renda em fundos de investimento é calculado de acordo com a classificação: curto prazo, longo prazo e ações. As alíquotas são diferenciadas em função da composição de suas carteiras. Em fundos de ações não há pagamentos periódicos de imposto de renda come-cotas. As alíquotas são diferenciadas de acordo com a classificação do investimento na Receita Federal. Os fundos CP e LP têm imposto de renda come-cotas.",
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
					"name": "De acordo com a legislação de imposto de renda, os fundos de investimento de curto prazo, de longo prazo e de ações são diferenciados em função da composição de suas carteiras.",
					"correct": true
				  }]
				}, {
				//17	
				"question": "Em um fundo de investimento de longo prazo, a alíquota do come-cotas é de:",
				"questionImg": "assets/img/none.png",
				"feedback": "Nos fundos longo prazo, a alíquota do come-cotas é de 15% (em fundos de longo prazo, a alíquota é menor e, em fundos de curto prazo, a alíquota é maior. Ou seja, a alíquota do come-cotas é inversamente proporcional ao prazo do fundo.",
				"options": [{
					"name": "15%",
					"correct": true
				  }, {
					"name": "17,5%",
					"correct": false
				  }, {
					"name": "20%.",
					"correct": false
				  }, {
					"name": "22,5%.",
					"correct": false
				  }]
				}, {
				//18	
				"question": "A expressão “toda ação equivale a 1 voto” está associada às empresas que possuem o capital composto:",
				"questionImg": "assets/img/none.png",
				"feedback": "As ações ordinárias têm direito a voto, as preferenciais, não, pois o direito de preferência aplica-se somente à distribuição de dividendos. As ações de empresas do segmento Novo Mercado têm em seu PL emissão exclusiva de ações ordinárias.",
				"options": [{
					"name": "51% por ações por ordinárias e 49% por ações preferenciais.",
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
				//19	
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
				//20	
				"question": "Em virtude da globalização e da expectativa de ganhos por meio da diversificação, investidores demonstram interesse em adquirir ações de empresas de outros países. As ADR são títulos: ",
				"questionImg": "assets/img/none.png",
				"feedback": "ADR são títulos emitidos por empresas com domicílio fora dos Estados Unidos, lastreados em suas ações e negociados nos EUA.",
				"options": [{
					"name": "Emitidos por empresas dos Estados Unidos e negociadas em outros países.",
					"correct": false
				  }, {
					"name": "Emitidos por empresas com domicílio fora dos Estados Unidos, lastreados em suas ações e negociados nos EUA.",
					"correct": true
				  }, {
					"name": "Com lastro em debêntures de uma empresa brasileira exportadora e negociados nos Estados Unidos",
					"correct": false
				  }, {
					"name": "Derivativos, com lastro em ações de uma empresa brasileira exportadora e negociados nos Estados Unidos.",
					"correct": false
				  }]
				}, {
				//21	
				"question": "O regulamento de um fundo de investimento estabelece que, no mínimo, 80% da sua carteira seja direcionada às operações vinculadas à variação da taxa de juros doméstica ou do índice de preços. Segundo a CVM, esse fundo dever ser classificado como: ",
				"questionImg": "assets/img/none.png",
				"feedback": "O fundo de renda fixa deve aplicar, no mínimo, 80% de seu PL em ativos de renda fixa, atrelados à taxa de juros do país ou ao índice de preços. O fundo referenciado aplica, no mínimo, 95% em ativos atrelados ao seu benchmark. O multimercado não admite concentração. O fundo curto prazo na CVM tem o prazo médio igual ou inferior a 60 dias.",
				"options": [{
					"name": "De renda fixa.",
					"correct": true
				  }, {
					"name": "De curto prazo.",
					"correct": false
				  }, {
					"name": "Multimercado.",
					"correct": false
				  }, {
					"name": "Referenciado.",
					"correct": false
				  }]
				}, {
				
				//22	
				"question": "Dois fundos referenciados DI, de mesma taxa de administração, obtiveram retornos conforme quadro acima. Comparando-se os fundos A e B, é correto afirmar que:",
				"questionImg": "assets/img/tabela_q22.png",
				"feedback": "O objetivo dos fundos referenciados DI é acompanhar o benchmark sem a utilização de instrumentos para alavancagem. Por isso, não podem render acima do benchmark. Assim, o fundo A está mais aderente a seu objetivo.",
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
				//23	
				"question": "Um dos direitos do administrador de fundos de investimentos, sem prévia autorização de uma assembleia de cotistas, é:",
				"questionImg": "assets/img/none.png",
				"feedback": "O administrador deverá convocar assembleia para realizar qualquer mudança no regulamento do fundo. Não precisará fazê-lo em somente três situações: para reduzir a taxa de administração, alterar dados cadastrais ou adequar exigências legais.",
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
				//24	
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
				//25	
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
					"correct": false
				  }, {
					"name": "Rendimentos – IOF.",
					"correct": true
				  }]
				}, {
				//26	
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
				//27	
				"question": "A Letra Financeira do Tesouro – LFT – é um título indexado:",
				"questionImg": "assets/img/none.png",
				"feedback": "A LFT é um título pós-fixado atrelado à Selic diária. Considerada com baixíssimo risco de mercado, geralmente é negociada pelo seu preço (ao par). Pode acontecer de ser vendida com ágio ou deságio, quando o mercado exigir remuneração diferente (menor ou maior) que a taxa Selic. ",
				"options": [{
					"name": "FAo IPCA, negociada com deságio.",
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
				//28	
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
				//29	
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


				//30	
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
    quizProgress.inProgress = true;
    quizProgress.finished = true;
    quizProgress.calculatingScore = true;
    $scope.score = scoreKeeper.calculateScore($scope.quizQuestions);
    $scope.message = scoreKeeper.getMotivationalMessage($scope.score);

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
