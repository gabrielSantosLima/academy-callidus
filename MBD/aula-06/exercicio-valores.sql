USE ge_informatica;

INSERT INTO
    USUARIOS(NOME, `LOGIN`, SENHA, TELEFONE)
VALUES (
        'Gabriel',
        'gdsl',
        '1234',
        '+55092911111111'
    ), (
        'Felipe',
        'tijolo',
        '1234',
        '+55092922222222'
    ), (
        'Sarah',
        'julha',
        '1234',
        '+55092933333333'
    ), (
        'Jorge',
        'rico',
        '1234',
        '+55092944444444'
    ), (
        'Pedro',
        'pepe',
        '1234',
        '+55092955555555'
    );

SELECT * FROM USUARIOS;

INSERT INTO
    CLIENTES(
        NOME,
        CPF,
        ENDERECO,
        CIDADE,
        TELEFONE,
        EMAIL
    )
VALUES (
        'Carlos',
        '11111111111',
        'Tancredo Neves',
        'Manaus',
        '+55092966666666',
        'carlos@gmail.com'
    ), (
        'Paulo',
        '22222222222',
        'Brooklin',
        'New York',
        '+55092977777777',
        'paulo@gmail.com'
    );

SELECT * FROM `CLIENTES`;

INSERT INTO
    `ORDENS_DE_SERVICO`(
        EQUIPAMENTO,
        DEFEITO,
        SERVICO,
        TECNICO,
        VALOR,
        ID_CLIENTE
    )
VALUES (
        'Chave de Fenda',
        'Sujeira',
        'Limpeza',
        'Jorge',
        230.0,
        3
    ), (
        'Cabo de rede',
        'Rede desconectando',
        'Reparo na rede',
        'Matheus',
        200.0,
        4
    );

SELECT * FROM `ORDENS_DE_SERVICO`;

SELECT
    C.ID as "ID",
    C.NOME as "Nome do cliente",
    C.CIDADE as "Cidade",
    OS.EQUIPAMENTO as "Equipamento",
    OS.DEFEITO as "Defeito",
    OS.SERVICO as "Serviço",
    OS.VALOR as "Valor"
FROM `CLIENTES` AS C
    INNER JOIN `ORDENS_DE_SERVICO` AS OS ON C.ID = OS.ID_CLIENTE;