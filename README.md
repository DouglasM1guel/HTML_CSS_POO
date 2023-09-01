ATENÇÂO LEIA O ARQUIVO EM FORMATO DE CODIGO!!
SENDO CRIADO E EDITADO POR DOUGLAS MIGUEL
# Fundamentos de Lógica e Lógica de Programação 

*Lógica 
*Algoritmo
*Programação

   Objetivo: 1 - Copreender a importância de Lógica e Programação.
   Objetivo: 2 - Aprender a construir e testar algoritmos


   Algoritmo para converter real em dólar:

Informar o valor disponível em reais para comprar dólares.
Informar a cotação do dólar do dia.
Dividir o valor disponível pela cotação do dia.
Exibir o resultado do cálculo para o usuário.


pseudocodigo

   
Algoritmo Conversao_real_dolar
// rotina que converte um determinado valor em reais em dólares
	Var
	VALOR_REAL, COTACAO_DOLAR, CONVERSAO: real
		VALOR_REAL = 0
		COTACAO_DOLAR = 0
		CONVERSAO = 0
Início
	Escreva “Programa para converter reais em dólares”
	Escreva “Informe o valor disponível em reais (para comprar dólares): R$”
	Leia VALOR_REAL
	Escreva “Informe o valor do dólar em reais (cotação do dia): R$”
	Leia COTACAO_DOLAR
	CONVERSAO = VALOR_REAL / COTACAO_DOLAR 
	Escreva “Com essa quantia será possível comprar: US$”
	Escreva CONVERSAO
	Escreva “Boa viagem!”
Fim


Descrição Narrativa

Entrar no banco.
Procurar a fila do caixa eletrônico.
Entrar na fila do caixa eletrônico.
Aguardar a vez do atendimento.
Inserir o cartão eletrônico no caixa.
Informar o valor a ser retirado.
Digitar a senha.
Pegar o comprovante de saque, o cartão eletrônico e o dinheiro.
Conferir o valor em dinheiro.
Sair do banco.


Portugol

Algoritmo Saque_dinheiro_caixa_eletronico
// rotina para sacar dinheiro em um caixa eletrônico
    Var
    VALOR_SAQUE, SALDO: real
    SENHA_SAQUE, NUM_AGENCIA, NUN_CONTA: inteiro
        VALOR_SAQUE = 0
        SENHA_SAQUE = 0
        NUN_CONTA = 0
Início
    Escreva "Seja bem-vindo!"
    Escreva "Informe o número da sua agência:"
    Leia NUM_AGENCIA
    Escreva "Informe o número da sua conta:"
    Leia NUN_CONTA
// após ler os dados, o sistema deverá trazer do banco de dados o valor do saldo do usuário na variável SALDO
    Escreva "Informe o valor que você do saque:"
    Leia VALOR_SAQUE
    Se VALOR_SAQUE> 0 e VALOR_SAQUE<= SALDO Então
        SALDO = SALDO - VALOR_SAQUE
        Escreva "Saque efetuado com sucesso. Seu saldo atual é R$:"
        Escreva SALDO
// após apresentar o novo saldo o sistema deve fazer a cntagem das notas e disponibilizar a quantia sacada ao usuário
        Escreva "Retire o cartão, o dinheiro e o comprovante de saque."
    Senão
        Escreva "Saldo insuficiente. Não será possível realizar a operação."
    Fim Se
Fim


Codificando Jogo 

Programa: PSEUDO01 - Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PASSO, VALOR_BIT:inteiro
VALOR_PASSO = 0// 1 = avancar um quadro a frente
VALOR_BIT = 0// 1 = bit ligado
Inicio
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

Virando 90 graus 2 vezes 

Programa: PSEUDO02 - Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PASSO = 0// 1 = avancar um quadro a frente
VALOR_LADO = 0// +90 = virar 90 graus para direita
VALOR_BIT = 0// 1 = bit ligado
Inicio
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

Pulando e virando 90 graus 

Programa: PSEUDO03 - Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0 // 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0 // 1 = avancar um quadro a frente
VALOR_LADO = 0 // 90 = virar 90 graus para direita
VALOR_BIT = 0 // 1 = bit ligado
Inicio
VALOR_PLANO = 1
VALOR_LADO = 90
VALOR_PLANO = 1
VALOR_LADO = 90
VALOR_PLANO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

2 teste 

Algoritmo Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0// 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0// 1 = avancar um quadro a frente
VALOR_LADO = 0// 90 = virar 90 graus para direita
VALOR_BIT = 0// 1 = bit ligado
Inicio
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PLANO = 1
VALOR_PLANO = 1
VALOR_PLANO = 1
VALOR_PLANO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

3 teste 
Algoritmo Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0 // 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0 // 1 = avancar um quadro a frente
VALOR_LADO = 0 // 90 = virar 90 graus para direita
VALOR_BIT = 0 // 1 = bit ligado
Inicio
VALOR_PLANO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PLANO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim


4 teste 

Algoritmo Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0 // 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0 // 1 = avancar um quadro a frente
VALOR_LADO = 0 // 90 = virar 90 graus para direita
VALOR_BIT = 0 // 1 = bit ligado
Inicio
VALOR_PLANO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PLANO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = 90
VALOR_PLANO = 1
VALOR_PASSO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

5 teste 
Algoritmo Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0 // 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0 // 1 = avancar um quadro a frente
VALOR_LADO = 0 // 90 = virar 90 graus para direita
VALOR_BIT = 0 // 1 = bit ligado
Inicio
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PLANO = 1
VALOR_LADO = -90
VALOR_PLANO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim


Algoritmo Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0 // 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0 // 1 = avancar um quadro a frente
VALOR_LADO = 0 // 90 = virar 90 graus para direita
VALOR_BIT = 0 // 1 = bit ligado
Inicio
VALOR_PLANO = 1
VALOR_PLANO = 1
VALOR_LADO = 90
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PLANO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PLANO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

Algoritmo Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0// 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0// 1 = avancar um quadro a frente
VALOR_LADO = 0// 90 = virar 90 graus para direita
VALOR_BIT = 0// 1 = bit ligado
Inicio
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PLANO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = +90
VALOR_PLANO = 1
VALOR_LADO = +90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

Algoritmo Conducao_de_um_Elemento
// rotina de conducao de um elemento
VALOR_PLANO, VALOR_PASSO, VALOR_LADO, VALOR_BIT:inteiro
VALOR_PLANO = 0 // 1 = avançar plano (salto/pulo)
VALOR_PASSO = 0 // 1 = avancar um quadro a frente
VALOR_LADO = 0 // 90 = virar 90 graus para direita
VALOR_BIT = 0 // 1 = bit ligado
Inicio
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = 90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = 90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_LADO = -90
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_PASSO = 1
VALOR_BIT = 1
Escreva VALOR_BIT
Fim

