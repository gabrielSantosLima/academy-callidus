-- Active: 1660569814330@@127.0.0.1@3306@escola_curso

-- DROP DATABASE escola_curso;

-- CREATE DATABASE escola_curso;

-- USE escola_curso;

CREATE TABLE
    alunos (
        `id_aluno` INT NOT NULL AUTO_INCREMENT,
        `nome` VARCHAR(100) NOT NULL,
        `data_nascimento` DATE NOT NULL,
        `endereco` VARCHAR(255) NOT NULL,
        `estado` CHAR(2) NOT NULL,
        `municipio` VARCHAR(200) NOT NULL,
        `cpf` CHAR(11) NOT NULL,
        PRIMARY KEY (`id_aluno`)
    );

CREATE TABLE
    cursos(
        `id_curso` INT NOT NULL AUTO_INCREMENT,
        `descricao` VARCHAR(45) NOT NULL,
        `formato_curso` VARCHAR(45) NOT NULL,
        PRIMARY KEY(`id_curso`)
    );

CREATE TABLE
    alunos_cursos(
        `id_aluno_curso` INT NOT NULL AUTO_INCREMENT,
        `id_aluno` INT NOT NULL,
        `id_curso` INT NOT NULL,
        PRIMARY KEY(`id_aluno_curso`),
        FOREIGN KEY(`id_aluno`) REFERENCES alunos(`id_aluno`),
        FOREIGN KEY(`id_curso`) REFERENCES cursos(`id_curso`)
    );

CREATE TABLE
    notas(
        `id_nota` INT NOT NULL AUTO_INCREMENT,
        `id_aluno_curso` INT NOT NULL,
        `descricao_atividades` VARCHAR(100) NOT NULL,
        `valor_nota` DECIMAL(5, 2) NOT NULL,
        PRIMARY KEY (`id_nota`),
        FOREIGN KEY (`id_aluno_curso`) REFERENCES alunos_cursos(`id_aluno_curso`)
    );