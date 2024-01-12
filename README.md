
## Instalação

Certifique-se de ter o Node.js e o npm instalados antes de prosseguir.

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```


2. Navegue até o diretório do projeto:

```
cd nome-do-repositorio
```

3. Instale as dependências:

```
npm install
```

Certifique-se de ter um servidor MongoDB em execução.
Crie um arquivo database.js no diretório src com o seguinte conteúdo:

```javascript
//src/db/connection.js
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://senha:usuario@cluster0.p2pjdan.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB Conectado'))
    .catch(err => {
        console.error('Erro de Conexão com o MongoDB:', err);
        process.exit(1); // Encerra o processo em caso de erro de conexão
    });


```

**ℹ️ Observação Importante:**
Certifique-se de substituir os marcadores 'senha' e 'usuario'  pelo seu usuário e senha reais do banco de dados. Isso é crucial para garantir a segurança e o correto funcionamento da sua aplicação.


Execute o seguinte comando para iniciar a API:
```
npm run dev
```


## Endpoints

### Adiciona um Novo Filme

- **Endpoint:** `/insert`
- **Método:** POST
- **Descrição:** Adiciona um novo filme.

#### Corpo da Solicitação

- **Tipo de Mídia:** `application/json`
- **Exemplo:**
  ```json
  {
      "title": "Novo Filme",
      "description": "Filme de ação",
      "trailer": "https://www.youtube.com/watch?v=1xo3af_6_Jk",
      "genero": "action"
  }

- **Sucesso (201):**
  - **Descrição: Filme adicionado com sucesso.**
  - **Tipo de Mídia: `application/json`**
  - **Exemplo:**
  ```json
  {
    "id": 3,
    "title": "Novo Filme",
    "description": "Filme de ação",
    "trailer": "https://www.youtube.com/watch?v=1xo3af_6_Jk",
    "genero": "action"
  }
  
- **Erro (400):**
  - **Descrição:Erro ao adicionar filme.**
  - **Tipo de Mídia: `application/json`**
  - **Exemplo:**
  ```json
  {
    "message": "Filme já cadastrado"
  }

### Obtém a Lista de Filmes

- **Endpoint:** `/list`
- **Método:** GET
- **Descrição:** Obtém a lista de filmes.

#### Respostas

- **Sucesso (200):**
  - **Descrição:** Lista de filmes recuperada com sucesso.
  - **Tipo de Mídia:** `application/json`
  - **Exemplo:**
   ```json
  [
        {
            "id": 1,
            "title": "Pirates of the Caribbean",
            "description": "Pirate movie",
            "trailer": "https://www.youtube.com/watch?v=1xo3af_6_Jk",
            "genero": "Adventure"
        },
        {
            "id": 2,
            "title": "The Lord of the Rings",
            "description": "A magic movie",
            "trailer": "https://www.youtube.com/watch?v=1xo3af_6_Jk",
            "gender": "Magic"
        }
  ]
  ```
### Deleta um Filme

- **Endpoint:** `/delete/{id}`
- **Método:** DELETE
- **Descrição:** Deleta um filme.

#### Parâmetros

- **ID do Filme (Obrigatório):**
  - **Nome:** `id`
  - **Tipo:** `integer`
  - **Localização:** `path`
  - **Descrição:** ID do filme a ser deletado.


### Atualiza um Filme

- **Endpoint:** `/update/{id}`
- **Método:** PUT
- **Descrição:** Atualiza um filme.

#### Parâmetros

- **ID do Filme (Obrigatório):**
  - **Nome:** `id`
  - **Tipo:** `integer`
  - **Localização:** `path`
  - **Descrição:** ID do filme a ser atualizado.

#### Corpo da Solicitação

- **Tipo de Mídia:** `application/json`
- **Exemplo:**
  ```json
  {
      "name": "Filme Atualizado"
  }
  
- **Sucesso (200):**
  - **Descrição:** Filme atualizado com sucesso..
  - **Tipo de Mídia:** `application/json`
  - **Exemplo:**
   ```json
  {
    "id": 1,
    "name": "Filme Atualizado"
  }

