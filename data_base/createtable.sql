CREATE TABLE usuario(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE deputado(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    partidoSigla VARCHAR(10),
    estado VARCHAR(2)
);

CREATE TABLE noticias(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    link VARCHAR(220)   
);

CREATE TABLE deputadoNoticia(
	id_deputado INTEGER,
    id_noticia INTEGER,
    FOREIGN KEY (id_deputado) REFERENCES deputado(id),
    FOREIGN KEY (id_noticias) REFERENCES noticias(id)
);