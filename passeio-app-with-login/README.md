## Cadastro de Lugares com Login do Google

Este projeto é um sistema de cadastro e consulta de lugares e categorias, desenvolvido com Angular e estilizado com TailwindCSS. Os dados são gerenciados por meio de uma API local `json-server`, permitindo a criação, listagem e filtragem de registros. A aplicação conta com uma galeria interativa que exibe os lugares cadastrados, incluindo filtros por nome e categoria, além de avaliações em formato de estrelas. O sistema foi desenvolvido com foco em boas práticas de modularização, uso de formulários reativos e integração com serviços HTTP e autenticação com o Google `OAuth2`.

---

### Conhecimentos adquiridos

- Criação e configuração de projetos Angular via Angular CLI.
- Estruturação de módulos, componentes e rotas seguindo a arquitetura modular do Angular.
- Implementação de rotas-filhas e layout principal utilizando o TemplateModule.
- Manipulação de parâmetros de rota para edição e navegação entre componentes.
- Utilização do TailwindCSS para desenvolvimento de interfaces responsivas e modernas.
- Integração de Angular Material para uso de componentes de interface.
- Implementação de formulários reativos com `FormGroup`, `FormControl` e `Validators`.
- Aplicação de máscaras e validações customizadas em campos de formulário.
- Exibição de feedback ao usuário utilizando `MatSnackBar` e mensagens de validação dinâmicas.
- Criação de menus de navegação, footer e layout dinâmico com título e subtítulo definidos por rota.
- Utilização dos módulos ReactiveFormsModule e FormsModule para gerenciamento de formulários.
- Desenvolvimento de operações CRUD completas (Create, Read, Update, Delete).
- Criação e consumo de serviços (Services) com injeção de dependência (Dependency Injection).
- Integração com APIs locais utilizando `json-server`.
- Manipulação de parâmetros de requisição HTTP com `HttpParams` para filtros e buscas.
- Consumo de dados via HttpClient, com tratamento assíncrono baseado em Observables `Observable`.
- Integração com OAuth2 (Google) utilizando o pacote `angular-oauth2-oidc`.
- Criação da página inicial de login (Landing Page).
- Registro e configuração de app no Google Cloud.
- Implementação do serviço de autenticação `AuthgoogleService` para login, logout e gerenciamento de sessão.
- Implementação do `Guard` para proteger rotas internas.
- Redirecionamento de rotas com base no estado de login do usuário.
- Utilização do `Signals` para gerenciamento reativo de estado.

---

### Tecnologias utilizadas

- Angular CLI - v19.0.2
- Angular Material
- Angular Signals
- Angular Router
- TypeScript
- HTML
- TailwindCSS
- Reactive Forms (`FormGroup`, `FormControl`, `Validators`)
- HttpClient
- json-server como API REST local
- Router
- Observables (`RxJS`)
- LocalStorage
- OAuth2 com Google (`angular-oauth2-oidc`)
- Guards

---

### Como executar o projeto

```bash
# Clonar o repositório
git clone https://github.com/xXezi/estudo-angular-19.git

# Acessar a pasta do projeto
cd estudo-angular-19/passeio-app-with-login

# Instalar as dependências
npm install

# Executar o servidor de API
npm run server

# Em outro terminal, executar o servidor Angular
ng serve
```
Depois, abra o navegador e acesse: http://localhost:4200  
A aplicação será recarregada automaticamente sempre que você modificar os arquivos-fonte.

---

## Layout do projeto

### Tela de login

![Login](https://github.com/xXezi/estudo-angular-19/blob/main/passeio-app-with-login/src/assets/img/page_1_login.png)

### Inserir email Google

![Login](https://github.com/xXezi/estudo-angular-19/blob/main/passeio-app-with-login/src/assets/img/page_2_login.png)

### Logado com o email

![Login](https://github.com/xXezi/estudo-angular-19/blob/main/passeio-app-with-login/src/assets/img/page_3_login.png)

### Galeria

![Galeria](https://github.com/xXezi/estudo-angular-19/blob/main/passeio-app-with-login/src/assets/img/page_1_galeria.png)
![Galeria](https://github.com/xXezi/estudo-angular-19/blob/main/passeio-app-with-login/src/assets/img/page_2_galeria.png)

### Categorias

![Categoria](https://github.com/xXezi/estudo-angular-19/blob/main/passeio-app-with-login/src/assets/img/page_3_categoria.png)

### Lugares

![Categoria](https://github.com/xXezi/estudo-angular-19/blob/main/passeio-app-with-login/src/assets/img/page_4_lugares.png)

---

### Documentações úteis

[Documentação Angular](https://angular.dev/overview).

[Documentação Tailwindcss](https://tailwindcss.com/).

[Biblioteca angular-oauth2-oidc](https://www.npmjs.com/package/angular-oauth2-oidc).
