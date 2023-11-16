-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE ollie;

USE ollie;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
CREATE TABLE pontuacao(
idPontuacao INT auto_increment,
pontos INT,
fkUsuario INT,
CONSTRAINT fkU FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id),
PRIMARY KEY (idPontuacao, fkUsuario)
);

INSERT INTO pontuacao VALUES
(NULL, NULL, 1);

SELECT * FROM pontuacao;


SELECT * FROM usuario;