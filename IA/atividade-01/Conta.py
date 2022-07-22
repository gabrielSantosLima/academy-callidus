from datetime import datetime

from Saque import Saque

SAQUES_POR_DIA = 5

class Conta:
    saques: list[Saque]
    def __init__(self, nome: str, numero: int, saldo_inicial: float):
        self.nome = nome
        self.numero = numero
        self.saldo = saldo_inicial
        self.saques = []

    def sacar(self, valor: float) -> bool:
        if (self.saldo == 0) or (valor < 0) or (self.saldo - valor < 0): return False
        hoje = datetime.now()
        quantidade_saques = 0
        for saque in self.saques:
            if saque.criado_em.strftime('%d/%m/%Y') == hoje.strftime('%d/%m/%Y'):
                quantidade_saques += 1
        if quantidade_saques == SAQUES_POR_DIA:
            return False
        self.saldo -= valor
        self.saques.append(Saque(valor))
        return True
    
    def depositar(self, valor: float) -> bool:
        if valor < 0: return False
        self.saldo += valor
        return True
    
    def to_string(self) -> str:
        registro_saques = ""
        for saque in self.saques:
            registro_saques += f"\n{saque.to_string()}"
        return f"Extrato de: {self.nome}.\nNúmero da conta: {self.numero}\nSaldo: {self.saldo:.2f}\nQuantidade de saques: {len(self.saques)}\nHistórico de saques: {registro_saques}"