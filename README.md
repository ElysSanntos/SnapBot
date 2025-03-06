# Gerenciamento de Dispositivos Celulares

## Descrição

Este projeto é uma aplicação simples de **Gerenciamento de Dispositivos Celulares**, onde o usuário pode **cadastrar, listar, editar e excluir dispositivos**. O backend foi desenvolvido em **Laravel** e o frontend em **Angular**, seguindo boas práticas de desenvolvimento e arquitetura.

## Tecnologias Utilizadas

### Backend
- **PHP** 8.x
- **Laravel** 9.x
- **MySQL** para banco de dados
- **Composer** para gerenciamento de dependências

### Frontend
- **Angular** 12.x
- **TypeScript**
- **HTML/CSS**
- **Angular Material** para o design da interface

## Objetivo
Criar uma aplicação de **Gerenciamento de Dispositivos Celulares**, permitindo operações de CRUD (**Create, Read, Update, Delete**) de dispositivos móveis.

## Requisitos do Projeto

### Backend (Laravel)
- Criar um CRUD de dispositivos celulares (**devices**), onde cada dispositivo tem:
  - `id` (chave primária)
  - `name` (string - nome do dispositivo)
  - `location` (string - local onde está o dispositivo)
  - `purchase_date` (date - data de compra)
  - `in_use` (booleano - indica se o dispositivo está em uso)
- Criar rotas de API:
  - Criar um novo dispositivo (**POST** `/api/devices`)
  - Listar todos os dispositivos com paginação (**GET** `/api/devices?page=1`)
  - Atualizar um dispositivo (**PUT** `/api/devices/{id}`)
  - Excluir um dispositivo (**DELETE** `/api/devices/{id}`)
  - Marcar dispositivo como em uso (**PATCH** `/api/devices/{id}/use`)
- Utilizar **Eloquent ORM** para manipulação de dados.
- Implementar **validação de dados** para garantir que `name`, `location` e `purchase_date` sejam obrigatórios.
- Retornar os dados em **JSON**.
- Implementar **testes unitários** com PHPUnit.
- *(Opcional)* Implementar autenticação com **Laravel Sanctum**.

### Frontend (Angular)
- Criar uma interface para **cadastrar, listar, editar e excluir dispositivos**.
- Criar um **serviço Angular (`DeviceService`)** para consumir a API do backend.
- Implementar **Reactive Forms** para manipulação dos formulários.
- Criar um **componente `DeviceListComponent`** para exibir a lista de dispositivos com paginação.
- Criar um **componente `DeviceFormComponent`** para adicionar e editar dispositivos.
- Implementar um botão **"Marcar como Em Uso"**, que atualiza o status do dispositivo.
- Implementar **testes unitários** para componentes e serviços com **Jasmine/Karma**.
- Utilizar **Material Design** para o layout.
- *(Opcional)* Usar **NgRx** ou **Signals** para gerenciar estado global.

### Bônus (Diferencial)
- Criar um **filtro de dispositivos** (Ex: mostrar apenas os que estão em uso ou não).
- Implementar **testes de integração** para as interações entre frontend e backend.

## O que será avaliado?
✅ Organização do código (estrutura do projeto, uso correto de componentes e serviços)  
✅ Uso correto do **Angular** e **Laravel**  
✅ Boas práticas de desenvolvimento (validações, separação de responsabilidades)  
✅ Lógica de programação e resolução de problemas  
✅ Capacidade de consumir **APIs** e lidar com **estados**  
✅ **Cobertura de testes unitários**  
✅ Implementação obrigatória de **paginação**  
✅ Uso obrigatório de **Material Design** no layout  

---

## Configuração do Projeto

### Backend (Laravel)

1. Clone o repositório:

```bash
git clone https://github.com/ElysSanntos/SnapBot.git
cd SnapBot/backend
```

2. Instale as dependências do Laravel:

```bash
composer install
```

3. Copie o arquivo de configuração e gere a chave da aplicação:

```bash
cp .env.example .env
php artisan key:generate
```

4. Configure o banco de dados no arquivo `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=seu_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

5. Rode as migrações para criar as tabelas no banco de dados:

```bash
php artisan migrate
```

6. Inicie o servidor:

```bash
php artisan serve
```

### Frontend (Angular)

1. Acesse a pasta do frontend:

```bash
cd SnapBot/frontend
```

2. Instale as dependências do Angular:

```bash
npm install
```

3. Inicie o servidor Angular:

```bash
ng serve
```

---

## Estrutura do Projeto

### Backend (Laravel)
O backend está configurado corretamente para fornecer uma **API RESTful** que permite operações de CRUD sobre dispositivos. As rotas estão configuradas para manipular os dispositivos conforme especificado nos requisitos.

### Frontend (Angular)
No frontend, você tem o formulário de cadastro e edição de dispositivos. O fluxo básico segue a seguinte lógica:

#### **Formulário de Cadastro/Edição (`DeviceFormComponent`)**
- Permite inserir os dados de um dispositivo: **nome, localização, data de compra e status**.
- Utiliza **Reactive Forms** para validação e controle dos dados inseridos.
- Envia os dados ao backend via o método `cadastrar()` do `DeviceService`.

#### **Serviço `DeviceService`**
- Responsável por interagir com o backend.
- Contém métodos para listar dispositivos (com paginação) e cadastrar novos dispositivos (`cadastrar()`), utilizando **HttpClient** do Angular.

#### **Lista de Dispositivos (`DeviceListComponent`)**
- Exibe a lista de dispositivos cadastrados com paginação.
- Permite editar ou excluir dispositivos.
- Inclui um botão **"Marcar como Em Uso"**.

---

## Imagens do Sistema

*(Adicionar imagens das telas relevantes aqui)*

