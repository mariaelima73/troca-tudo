create database troca_tudo;
use troca_tudo;

update usuarios set id = 1 where nome = 'João Silva';
update usuarios set id = 2 where nome = 'Maria Souza';

update produtos set id = 1 where nome = 'Produto 1';
update produtos set id = 2 where nome = 'Produto 2';
update produtos set id = 3 where nome = 'Produto 3';

update comentarios set id = 1 where id_produto = 1;
update comentarios set id = 2 where id_produto = 2;
update comentarios set id = 3 where id_produto = 3;

insert into comentarios (id_produto, id_usuario, comentario, cidade, estado) values
(1,1,'Ótimo produto!','São Paulo','SP'),
(2,2,'Recomendo!','Rio de Janeiro','RJ'),
(3,1,'Bom, mas pode melhorar.','Curitiba','PR');

insert into like_e_deslike (id, id_usuario, id_produto, curtida, descurtida) values
(1, 1, 1, 1, NULL), (2, 1, 2, 1, NULL), (3, 1, 3, NULL, 1), (4, 2, 1, 1, NULL), (5, 2, 2, NULL, 1), (6, 2, 3, NULL, 1);