import os
from numpy import random
from Conta import Conta

clear = lambda: os.system('cls')

def iniciar():
    opcao = -1
    print("============= BEM VINDO AO SEU SISTEMA BANCÁRIO =============\n")
    nome = input("Digite seu nome: ")
    saldo_inicial = float(input("Digite seu saldo inicial: "))
    numero = random.randint(1000, 9999)

    conta = Conta(nome, numero, saldo_inicial)

    while opcao != 0:
        opcao = exibir_menu()
        escolher_opcao(opcao, conta)
    print("\n\nAgradeçemos sua escolha! Finalizando o sistema...\n")
    print("=============================================================\n")
    
def exibir_menu():
    clear()
    print("============= BEM VINDO AO SEU SISTEMA BANCÁRIO =============\n")
    print("1. Exibir extrato")
    print("2. Sacar")
    print("3. Depositar")
    print("0. Sair")
    opcao = int(input("Escolher opção [0..3]: "))
    return opcao

def escolher_opcao(opcao: int, conta: Conta):
    if opcao == 1:
        print(f"\n{conta.to_string()}")
    elif opcao == 2:
        valor = float(input("Digite um valor: "))
        foi_realizado_saque = conta.sacar(valor)
        if not foi_realizado_saque: print("\nSaldo insuficiente ou valor inválido. Tente novamente.")
    elif opcao == 3:
        valor = float(input("Digite um valor: "))
        foi_realizado_deposito = conta.depositar(valor)
        if not foi_realizado_deposito: print("\n Saldo insuficiente ou valor inválido. Tente novamente.")
    else: return
    input("Pressione Enter para continuar...")

iniciar()