# Script utilizado para gerar o arquivo usrs_servicein
from faker import Faker
import json, uuid, random
from random import randint
from hashlib import sha256
import numpy as np
from lorem_text import lorem

# Cria usuário fake utilizando valores randomizados e a biblioteca faker para gerar dados de usuário
def cria_usuario():
    faker = Faker("pt_BR")
    usrid = str(uuid.uuid4())
    prim_nome = faker.first_name()
    ult_nome = faker.last_name()
    complemento = ["Casa", f"Apto{randint(10, 40)}", "A", "B", "C"]
    # Retorna um "True" ou "False" (bool) de forma aleatória para informar se o usuário é prestador ou não
    prestador = bool(random.getrandbits(1))
    # Define de forma aleatória a quantidade de serviços que o usuário terá caso seja prestador (mínimo 1, máximo 3 serviços por prestador)
    quant_servicos = randint(1, 3) if prestador else None
    usuario = {"id": usrid,
            "nome": f"{prim_nome} {ult_nome}",
            "cpf": faker.cpf(),
            "registro": faker.rg(),
            "telefone": faker.phone_number(),
            "rua": faker.street_name(),
            "numero": randint(1, 200),
            "complemento": random.choice(complemento),
            "bairro": faker.bairro(),
            "cidade": faker.city(),
            "email": f"{prim_nome}.{ult_nome}@{faker.domain_name()}".lower().replace(" ", "."),
            # Todos os usuários cadastrados possuem a senha 123
            "senha": sha256(f"{usrid}123".encode("utf-8")).hexdigest
            (),
            "prestador": prestador,
            "servicosPrestados": gera_servicos(quant_servicos)}
    usr_json_string = json.dumps(usuario, ensure_ascii=False)
    return usr_json_string

# Gera e retorna uma lista com a quantidade de serviços definida para o prestador ou uma lista vazia caso o usuário não seja perstador
def gera_servicos(quant_servicos = None):
    servicos = []
    if quant_servicos:
        servicos_nome = ["Encanador", "Eletrecisita", "Frete", "Diarista", "Babá", "Bombeiro", "Marido de Aluguel", "Carregador", "Faxina"]
        for num  in range(quant_servicos):
            servico = {"nomeServPrestado": random.choice(servicos_nome),
                        "avaliacao": str(np.random.choice(np.arange(0.5, 5.5, 0.5))),
                        "descricao": lorem.words(randint(4, 25)),
                        "valor": random.randrange(50, 300, 5)}
            if servicos:
                tem_svc = False
                # Checa se o prestador ja possuí o serviço para evitar serviços duplicados no mesmo prestador
                for svc in servicos:
                    if svc["nomeServPrestado"] == servico["nomeServPrestado"]:
                        tem_svc = True
                if not tem_svc:
                    servicos.append(servico)
            else:
                servicos.append(servico)
        return servicos 
    else:
        return servicos 


# Gera o arquivo com os usuários fake para ser importado no localStorage.
def gera_arquivo_users():
    usr_txt = open("usrs_servicein", "w", encoding="utf-8")
    usr_txt.write("arrUsuarios = [")
    usr_txt.close()
    usr_txt = open("usrs_servicein", "a", encoding="utf-8")
    for i in range(40):
        if i == 39:
            usr_txt.write(f'{cria_usuario()}]')
        else:
            usr_txt.write(f'{cria_usuario()},')
    usr_txt.close()

if __name__=="__main__":
    gera_arquivo_users()


# Modelo Usuário
# {
#   "id": "3657bddf-8da3-472e-a448-1b22ba4d331a",
#   "nome": "Milton Roberto Garcia Ventura",
#   "cpf": "111",
#   "registro": "222",
#   "telefone": "31991391422",
#   "rua": "333",
#   "numero": "111",
#   "complemento": "444",
#   "bairro": "111",
#   "cidade": "Contagem",
#   "email": "miltinzin@hotmail.com",
#   "senha": "c8f4725a39e66b80a160804b04badc03dad4500c2b273049a9d72625f1d774b5",
#   "prestador": true,
#   "servicosPrestados": [
#     {
#       "nomeServPrestado": "Encanador",
#       "avaliacao": "2",
#       "descricao": "Secrtg",
#       "valor": "100"
#     }
#   ]
# }