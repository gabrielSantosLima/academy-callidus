from datetime import datetime

class Saque:
    def __init__(self, valor: float):
        self.valor = valor 
        self.criado_em = datetime.now()
    
    def to_string(self) -> str:
        return f"Saque no dia: {self.criado_em.strftime('%d/%m/%Y, %H:%M')}. Valor: R${self.valor:.2f}"