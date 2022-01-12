<h1 align="center">
    <p> 🎥 CRUD de Vídeos </p>
</h1>

<p align="center">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Pedro-Manoel/node-crud-videos?style=flat-square">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Pedro-Manoel/node-crud-videos?style=flat-square">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/Pedro-Manoel/node-crud-videos?style=flat-square">
    <img alt="GitHub license" src="https://img.shields.io/github/license/Pedro-Manoel/node-crud-videos?style=flat-square"><br/>
    <a href="https://insomnia.rest/run/?label=%20node-crud-videos&uri=https%3A%2F%2Fgithub.com%2FPedro-Manoel%2Fnode-crud-videos%2Fblob%2Fmain%2F.github%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 🔖 Sobre

CRUD simples de vídeos desenvolvido com [Node.js](https://nodejs.org/en/) para fins de aprendizagem. O banco de dados utilizado foi o [PostgreSQL](https://www.postgresql.org/).

## 💥 Utilização

- ### 👉 **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir um gerenciador de pacotes, como o **[Yarn](https://yarnpkg.com/)**, instalado no computador

1. Faça o clone do repositório:

	```sh
	  $ git clone https://github.com/Pedro-Manoel/node-crud-videos.git
	```

2. Entre na pasta do projeto:

	```sh
	  $ cd node-crud-videos
	```

3. Configure a conexão com o PostgreSQL no arquivo `.env`, atribuindo o devido valor as seguintes variáveis:

    ```
        TYPEORM_HOST =
        TYPEORM_USERNAME =
        TYPEORM_PASSWORD =
        TYPEORM_DATABASE =
        TYPEORM_PORT =
    ```

4. Execute o seguinte comando para fazer o download das dependências da aplicação:

    ```sh
    $ yarn
    ```

5. Execute o seguinte comando para criar as tabelas no banco:

    ```sh
    $ yarn typeorm migration:run
    ```

6. Execute o seguinte comando para executar a aplicação:

    ```sh
    $ yarn dev
    ```
## 🔰 Rotas da Aplicação

Um demostrativo do funcionamento das rotas da aplicação utilizando dados fictícios. As rotas são as seguintes:

### 🚏 `/categories`

* **POST** : rota para criar uma categoria.

    - ***Request***

        ```json
        {
	        "name": "Comédia",
	        "description": "Vídeos engraçados e divertidos"
        }
        ```

    - ***Response***

        ```json
        {
            "id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
            "name": "Comédia",
	        "description": "Vídeos engraçados e divertidos",
            "create_at": "2022-01-12T14:41:29.129Z"
        }
        ```
* **GET** : rota para listar todas as categorias cadastradas.

    - ***Response***

        ```json
        [
            {
                "id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
                "name": "Comédia",
	            "description": "Vídeos engraçados e divertidos",
                "create_at": "2022-01-12T14:41:29.129Z"
            },
            {
                "id": "b3f4471a-f3c3-4d8a-a4a3-e4483cfa3dac",
                "name": "Drama",
	            "description": "Vídeos envolventes e reflexivos",
                "create_at": "2022-01-12T14:42:23.071Z"
            },
            {
                "id": "a9cd6be4-f9b0-473e-ae3c-864f55f27e57",
                "name": "Terror",
	            "description": "Vídeos que dão medo e pavor",
                "create_at": "2022-01-12T14:43:03.644Z"
            }
        ]
        ```
### 🚏 `/categories/{id}`

* **GET** : rota para retornar uma categoria já cadastrada.

    - ***Response***

        ```json
        {
            "id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
            "name": "Comédia",
	        "description": "Vídeos engraçados e divertidos",
            "create_at": "2022-01-12T14:41:29.129Z"
        }
        ```

* **PUT** :  rota para atualizar uma categoria já cadastrada.

    - ***Request***

        ```json
        {
            "name": "Comédia romântica",
	        "description": "Vídeos engraçados e divertidos com romance"
        }
        ```

    - ***Response***

        ```json
        {
            "id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
            "name": "Comédia romântica",
	        "description": "Vídeos engraçados e divertidos com romance",
            "create_at": "2022-01-12T14:41:29.129Z"
        }
        ```

* **DELETE** : rota para remover uma categoria já cadastrada.

### 🚏 `/videos`

* **POST**: rota para criar um vídeo.

    - ***Request***

        ```json
        {
            "name": "Caindo na lama",
            "description": "Uma pessoa caindo na lama",
            "duration": 25,
            "category_id": "fe32b49a-2e13-4188-bdc4-bef512013adc"
        }
        ```

    - ***Response***

        ```json
        {
	        "id": "a190e9ef-614f-40fa-9b96-f76414e52ee8",
	        "name": "Caindo na lama",
	        "description": "Uma pessoa caindo na lama",
	        "duration": 25,
	        "category_id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
	        "create_at": "2022-01-12T14:14:14.573Z"
        }
        ```

* **GET**: rota para listar todos os vídeos cadastrados.

    - ***Response***

        ```json
        [
            {
                "id": "a190e9ef-614f-40fa-9b96-f76414e52ee8",
                "name": "Caindo na lama",
                "description": "Uma pessoa caindo na lama",
                "duration": "25",
                "category_id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
                "create_at": "2022-01-12T15:03:51.594Z",
                "category": {
                    "id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
                    "name": "Comédia",
                    "description": "Vídeos engraçados e divertidos",
                    "create_at": "2022-01-12T14:41:29.129Z"
                }
            },
            {
                "id": "2574c661-186c-4cbf-b07e-1f6466501105",
                "name": "Fantasma",
                "description": "Uma criatura estranha aparecendo a noite",
                "duration": "32",
                "category_id": "a9cd6be4-f9b0-473e-ae3c-864f55f27e57",
                "create_at": "2022-01-12T15:03:51.594Z",
                "category": {
                    "id": "a9cd6be4-f9b0-473e-ae3c-864f55f27e57",
                    "name": "Terror",
	                "description": "Vídeos que dão medo e pavor",
                    "create_at": "2022-01-12T14:43:03.644Z"
                }
            }
        ]
        ```
### 🚏 `/videos/{id}`

* **GET**: rota para retornar um vídeo já cadastrado.

    - ***Response***

        ```json
        {
            "id": "a190e9ef-614f-40fa-9b96-f76414e52ee8",
            "name": "Caindo na lama",
            "description": "Uma pessoa caindo na lama",
            "duration": "25",
            "category_id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
            "create_at": "2022-01-12T15:03:51.594Z",
            "category": {
                "id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
                "name": "Comédia",
                "description": "Vídeos engraçados e divertidos",
                "create_at": "2022-01-12T14:41:29.129Z"
            }
        }
        ```

* **PUT**: rota para atualizar um vídeo já cadastrado.

    - ***Request***

        ```json
        {
            "name": "Caindo na lama e sujando a cara",
            "description": "Uma pessoa caindo na lama e ficando com a cara toda suja",
            "duration": 25,
            "category_id": "fe32b49a-2e13-4188-bdc4-bef512013adc"
        }
        ```

    - ***Response***

        ```json
        {
            "id": "a190e9ef-614f-40fa-9b96-f76414e52ee8",
            "name": "Caindo na lama e sujando a cara",
            "description": "Uma pessoa caindo na lama e ficando com a cara toda suja",
            "duration": 25,
            "category_id": "fe32b49a-2e13-4188-bdc4-bef512013adc",
            "create_at": "2022-01-12T15:03:51.594Z"
        }
        ```

* **DELETE**: rota para remover um vídeo já cadastrado.

## 📃 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
