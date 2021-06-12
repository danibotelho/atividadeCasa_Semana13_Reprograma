
[GET] "/filmes" lista todos os filmes cadastrados

[POST] "/:id" Cadastra um filme.

[PATCH] "/:id" Busca um filme pelo ID para alterar uma ou mais informações.

[DELETE] "/:id" Busca um filme pelo ID e o deleta da base de dados.

Schema
. title
   . type
   . required
. description
   . type
   . required
. genre
   . type
   . required
. releaseYear
   . type
   . required
. created_at
   . type
   . required
   . default
   