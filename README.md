## 🔧 Configuração do ambiente

### Frontend

Projeto React criado com Vite, utilizando Typescript.

#### Iniciando:

1. `npm install`
2. Copie o arquivo `.env.example` para `.env` e modifique se necessário
3. `npm run dev`

### DB

Banco de dados Postgresql em docker, pronto para ser utilizado no Desafio.

#### Iniciando:

`docker compose up`

### Api:

- Essa api será usada no Desafio Fullstack de troca de plano.
- Depende de um banco de dados Postgresql.
- Essa api não tem a parte de login, para simplificar o exercício.

#### Iniciando:

1. Copie o arquivo `.env.example` para `.env` e modifique se necessário
2. `composer Install`
3. `php artisan key:generate`
4. `php artisan migrate`
5. `php artisan db:seed`
6. Executar com o comando: `php artisan serve`

### Rotas já criadas:

1. /api/- Retorna a lista de funcinarios
2. /api/ - Retorna o usuário empresas