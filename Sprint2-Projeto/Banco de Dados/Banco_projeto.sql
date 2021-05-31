create database projetoindi;
use projetoindi;

create table cadastro(
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
emailUsuario varchar (45),
senha varchar(40)
);

create table Publicacao (
idPublicacao int primary key auto_increment,
descricao varchar (100),
fkUsuario int,
localQuadra varchar (50),
foreign key (fkUsuario) references Cadastro(idUsuario)
);

create table Comentario (
idComentario int primary key auto_increment,
comentario varchar (100),
fkUsuario int,  
foreign key (fkUsuario) references Cadastro(idUsuario)
);

select * from Comentario;

select * from PublicacaCoo;

truncate Publicacao;



