📌 Passo 1: Instalar o Laravel
==============================

🛠️ Pré-requisitos
------------------

Antes de instalar o Laravel, certifique-se de que seu ambiente tem:

✅ PHP 8.x (recomendado: 8.1 ou superior)  
✅ Composer (gerenciador de dependências do PHP)  
✅ MySQL (ou outro banco de dados)

* * *

🔹 Passo 1.1: Criar o Projeto Laravel
-------------------------------------

Abra o terminal e execute o seguinte comando para instalar o Laravel via Composer:
    composer create-project --prefer-dist laravel/laravel gerenciador-usuarios

Isso criará uma pasta chamada `gerenciador-usuarios` com a estrutura do Laravel.

* * *

🔹 Passo 1.2: Acessar o Projeto
-------------------------------

    cd gerenciador-usuarios



### **Explicação do comando:**

1. **`composer`**:
   
   * Este é o gerenciador de dependências para PHP, usado para instalar pacotes e dependências necessárias em um projeto PHP, como o Laravel.
   * No contexto deste comando, o **Composer** está sendo usado para criar um novo projeto Laravel.

2. **`create-project`**:
   
   * Esse é um comando do Composer que cria um novo projeto a partir de um pacote existente.
   * Ele copia o conteúdo de um pacote, neste caso o **Laravel**, e o instala no diretório especificado, configurando todas as dependências necessárias.

3. **`--prefer-dist`**:
   
   * Este parâmetro instrui o Composer a instalar os pacotes a partir da versão **distribuída (dist)**, o que significa que ele vai pegar uma versão compactada (como um arquivo `.tar` ou `.zip`) do Laravel ao invés de clonar o repositório Git.
   * A opção **`--prefer-dist`** é mais rápida, pois o Composer pode baixar uma versão compactada do Laravel, sem precisar fazer o clone completo do repositório.

4. **`laravel/laravel`**:
   
   * Este é o nome do pacote que você deseja instalar. O **`laravel/laravel`** é o repositório oficial do Laravel no GitHub. Ele contém a estrutura básica de um projeto Laravel, sem nenhum conteúdo adicional específico, como pacotes de terceiros.
   * Isso é o que você usaria para começar um novo projeto Laravel com a versão mais recente disponível.

5. **`gerenciador-usuarios`**:
   
   * Este é o **nome do diretório** onde o projeto Laravel será instalado.
   * Quando você executa esse comando, o Composer cria uma pasta chamada **`gerenciador-usuarios`** no seu diretório atual e instala o Laravel dentro dessa pasta.
   * Ou seja, o nome **`gerenciador-usuarios`** será o nome do seu novo projeto Laravel.

### **O que acontece ao executar o comando?**

* O Composer irá baixar o pacote do Laravel (especificamente do repositório `laravel/laravel`), instalar as dependências necessárias e criar uma nova pasta chamada **`gerenciador-usuarios`** no diretório onde o comando foi executado.
* Dentro dessa pasta, você encontrará todos os arquivos e estruturas padrão de um projeto Laravel.
* Depois disso, você poderá começar a desenvolver seu projeto Laravel dentro dessa pasta.

* * *

🔹 Passo 1.3: Configurar o Servidor Local
-----------------------------------------

Execute o seguinte comando para iniciar o servidor embutido do Laravel:
    php artisan serve

Isso iniciará o servidor local, e a aplicação estará acessível em:📌 [http://127.0.0.1:8000](http://127.0.0.1:8000/)

* * *

📌 Passo 2: Configurar o Banco de Dados
=======================================

Abra o arquivo `.env` na raiz do projeto e configure sua conexão com o banco de dados:
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=gerenciador_usuarios
    DB_USERNAME=root  # Altere conforme sua configuração
    DB_PASSWORD=       # Adicione a senha do MySQL se houver

Agora, execute o seguinte comando para criar o banco de dados com o Laravel:
    php artisan migrate

Isso criará as tabelas básicas no banco.


