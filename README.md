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
