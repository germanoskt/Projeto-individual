-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE ollie;

USE ollie;


CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    marca VARCHAR(50)
);
CREATE TABLE pontuacao(
idPontuacao INT PRIMARY KEY auto_increment,
pontos VARCHAR(100),
fkUsuario INT,
CONSTRAINT fkU FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);
CREATE TABLE marcaFav(
idMarca INT primary key auto_increment,
fkUsuario int,
CONSTRAINT fkUs FOREIGN KEY (fkUsuario)
	REFERENCES usuario(id)
);

SELECT * FROM pontuacao;

SELECT * FROM usuario;

SELECT * FROM marcaFav;

SELECT pontos FROM usuario JOIN pontuacao ON fkUsuario = id;


SELECT pontos, usuario.nome FROM pontuacao JOIN usuario ON fkUsuario = id;

SELECT COUNT(id) FROM usuario;

SELECT usuario.nome AS nome, usuario.marca AS MARCA_USER, SUM(pontuacao.pontos) AS total_pontos
FROM usuario
JOIN pontuacao ON usuario.id = pontuacao.fkUsuario
GROUP BY usuario.nome, usuario.marca
ORDER BY total_pontos DESC;




