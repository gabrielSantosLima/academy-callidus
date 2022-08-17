-- Active: 1660569814330@@127.0.0.1@3306@escola_curso

-- DROP DATABASE escola_curso;

-- CREATE DATABASE escola_curso;

USE escola_curso;

INSERT INTO
    alunos(
        `nome`,
        `data_nascimento`,
        `endereco`,
        `estado`,
        `municipio`,
        `cpf`
    )
VALUES (
        'Gabriel Lima',
        NOW(),
        'Tancredo Neves',
        'AM',
        'Manaus',
        '11111111111'
    ), (
        'Guilherme Lima',
        NOW(),
        'Tancredo Neves',
        'AM',
        'Manaus',
        '22222222222'
    ), (
        'Felipe Muniz',
        NOW(),
        'Alvorada',
        'SP',
        'São Paulo',
        '44444444444'
    ), (
        'Sarah Júlia',
        NOW(),
        'Brooklin',
        'SP',
        'São Paulo',
        '55555555555'
    ), (
        'Melinne Diniz',
        NOW(),
        'Igapô',
        'RN',
        'Natal',
        '66666666666'
    ), (
        'Nara Lima',
        NOW(),
        'Tancredo Neves',
        'AM',
        'Manaus',
        '33333333333'
    );

SELECT * FROM alunos;

INSERT INTO
    cursos(`descricao`, `formato_curso`)
VALUES ('Aulas de JS', 'ONLINE'), ('Aulas de MOO', 'PRESENCIAL'), ('Aulas de MBD', 'PRESENCIAL');

SELECT * FROM cursos;