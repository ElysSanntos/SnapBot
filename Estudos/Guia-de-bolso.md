# Guia de Como Subir o Servidor da Sua App

Este guia irá te ajudar a subir o servidor local da sua aplicação, tanto para o backend (Laravel) quanto para o frontend (Angular). Seguindo essas etapas, você conseguirá rodar a aplicação localmente, integrar o frontend com o backend e até fazer o deploy.

---

## 1. Preparação do Backend (Laravel)

### 1.1. Instalar Dependências

No diretório do seu backend (onde está o Laravel), execute o comando abaixo para instalar as dependências necessárias do Composer:

```
composer install
```

1.2. Configuração do .env
Copie o arquivo .env.example para .env:

cp .env.example .env
Configure as variáveis do .env, como banco de dados e outras configurações necessárias.

1.3. Gerar a Key do Laravel
Gere a chave do Laravel com o comando:

```

php artisan key:generate

```

1.4. Migrar o Banco de Dados
Se você já tiver as migrações configuradas, execute:

```

php artisan migrate
```

1.5. Subir o Servidor do Backend
Para iniciar o servidor local do backend, execute:

```

php artisan serve

```

O servidor vai rodar em http://127.0.0.1:8000 (ou em outra porta, se configurado). 

---

2. Preparação do Frontend (Angular)
2.1. Instalar Dependências
No diretório do frontend (onde está o seu projeto Angular), execute o comando abaixo para instalar as dependências do Node.js:

```

npm install

```

2.2. Subir o Servidor do Frontend
Para rodar o servidor de desenvolvimento do Angular, use:

```

ng serve
```

O servidor Angular será iniciado em http://localhost:4200. Se você acessar esse link no seu navegador, verá a interface da sua aplicação frontend.

---

3. Conectar Frontend com Backend
3.1. Configurar o Backend no Frontend
Se o seu frontend precisa se comunicar com o backend (API), verifique as URLs no seu código Angular.

Geralmente, você configura as URLs das APIs em um serviço Angular, como api.service.ts. Por exemplo:

```

const API_URL = 'http://127.0.0.1:8000/api'; // URL do seu backend (Laravel)

```

3.2. Testar as Conexões
Abra o navegador e faça uma requisição para o seu backend a partir do frontend para garantir que a comunicação entre eles está funcionando. Isso pode ser feito diretamente da interface do usuário ou com o uso de ferramentas como Postman.

4. Testar Tudo Junto
4.1. Verificar se Ambos Servidores Estão Rodando
Verifique se ambos os servidores estão funcionando, o backend em http://127.0.0.1:8000 e o frontend em http://localhost:4200. Certifique-se de que o frontend pode fazer requisições para o backend (teste fazendo login ou outro processo que envolva comunicação entre ambos).



## Dicas Rápidas
Verifique Logs: Caso algo não funcione corretamente, verifique os logs do servidor backend e do navegador (frontend).

**CORS**: Se estiver fazendo requisições de frontend para backend, e estiver recebendo erro de CORS, você pode precisar configurar os cabeçalhos CORS no Laravel (com o pacote barryvdh/laravel-cors).

**Banco de Dados**: Sempre que alterar o banco de dados, execute as migrações corretamente com php ***artisan migrate***.
Desenvolvimento Local: Sempre que for rodar em desenvolvimento local, use o comando ***ng serve*** para frontend e php artisan serve para o backend.
