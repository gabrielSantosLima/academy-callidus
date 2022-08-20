USE aluno_escola;

CREATE TABLE
    IF NOT EXISTS CURSOS(
        ID INT AUTO_INCREMENT,
        NOME VARCHAR(255) NOT NULL,
        DURACAO VARCHAR(50) NOT NULL,
        PRIMARY KEY(ID)
    );

CREATE TABLE
    IF NOT EXISTS ALUNOS(
        ID INT AUTO_INCREMENT,
        NOME VARCHAR(255) NOT NULL,
        EMAIL VARCHAR(255) NOT NULL,
        DATA_NASCIMENTO DATE NOT NULL,
        PRIMARY KEY(ID)
    );

CREATE TABLE
    IF NOT EXISTS ALUNO_CURSO(
        ID INT AUTO_INCREMENT,
        ID_CURSO INT NOT NULL,
        ID_ALUNO INT NOT NULL,
        PRIMARY KEY(ID),
        FOREIGN KEY (ID_CURSO) REFERENCES CURSOS(ID),
        FOREIGN KEY (ID_ALUNO) REFERENCES ALUNOS(ID)
    );

-- RENAME TABLE aluno_curso TO ALUNOS_CURSOS;

INSERT INTO
    ALUNOS(NOME, EMAIL, DATA_NASCIMENTO)
VALUES (
        'Gabriel Lima',
        'gabriel@gmail.com',
        '2003-01-12'
    ), (
        'Guilherme Lima',
        'guilherme@gmail.com',
        '2007-05-25'
    ), (
        'Jonas Lima',
        'jonas@gmail.com',
        '1969-07-27'
    ), (
        'Felipe Muniz',
        'felipe@gmail.com',
        '2003-05-27'
    ), (
        'Melinne Diniz',
        'melinne@gmail.com',
        '2003-02-24'
    ), (
        'Sarah Júlia',
        'sarah@gmail.com',
        '2002-09-19'
    ), (
        'Nara Lima',
        'nara@gmail.com',
        '1977-10-17'
    );

INSERT INTO
    CURSOS(NOME, DURACAO)
VALUES ('MBD', '12 horas'), ('JS', '13 horas'), ('Scrum', '14 horas');

INSERT INTO
    ALUNOS_CURSOS(ID_ALUNO, ID_CURSO)
VALUES
(1, 2), (2, 2), (4, 3), (1, 1);