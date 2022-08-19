-- Active: 1660671282957@@127.0.0.1@3306
-- CREATE SCHEMA escola_curso;
-- USE escola_curso;

CREATE TABLE aluno(
    id INT AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    dataNascimento DATETIME NOT NULL,
    PRIMARY KEY (id)
);