1️⃣ **Instalando o PHP**
------------------------

### 📥 **Passo 1: Baixar o PHP**

1. **Windows**:
   
   * Acesse o site oficial do PHP: [PHP para Windows](https://windows.php.net/download/).
   * Escolha a versão **Thread Safe** (geralmente a versão mais estável) e baixe o arquivo zip correspondente à sua arquitetura (x86 ou x64).
   * Descompacte em C:\tools\php-8.3.17
   * Adicione ao Path das variaveis do sistema
   * consulte:
     * C:\Users\elyss>php --version
       PHP 8.3.17 (cli) (built: Feb 11 2025 22:39:27) (NTS Visual C++ 2019 x64)
       Copyright (c) The PHP Group
       Zend Engine v4.3.17, Copyright (c) Zend Technologies
   
   

Se o PHP estiver instalado, ele exibirá a versão instalada. Caso o comando não seja reconhecido, significa que o PHP não está instalado ou não está no PATH do sistema.

2️⃣ **Instalando o Composer**
---------------------------------------

### 📥 **Passo 1: Baixar e Instalar o Composer****

1. **Windows**:
   
   * Baixe o **Composer Installer** para Windows [aqui.](https://getcomposer.org/Composer-Setup.exe)
   * Execute o instalador e siga os passos. Ele irá configurar automaticamente o PHP no PATH.
   * Após a instalação, abra o terminal (CMD ou PowerShell) e digite:
   
   
   `composer -v` ou somente composer
   
   
   C:\Users\elyss>composer
   
      ______
   
     / ____/___  ____ ___  ____  ____  ________  _____
    / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
   / /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
   \____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                       /_/
   Composer version 2.8.6 2025-02-25 13:03:50Se tudo estiver correto, o Composer vai exibir a versão instalada.
   
   
   
   # 3️⃣ **Instalando o MySQL**
   
   ### 📥 **Passo 1: Baixar o MySQL**
   
   1. **Windows**:
      
      * Baixe o **MySQL Installer** [aqui](https://dev.mysql.com/downloads/installer/).
      * Execute o instalador e siga as instruções. Durante a instalação, escolha a opção "Developer Default" para instalar o MySQL Server, Workbench e outras ferramentas.

Digite o seguinte comando:
    mysql --version

Se o MySQL estiver instalado, ele mostrará a versão. Caso o comando não seja reconhecido, você precisará instalá-lo.



4️⃣ **Instalando o Laravel**
----------------------------

Agora que você tem o PHP, o Composer e o MySQL instalados, podemos instalar o Laravel.

### 📥 **Passo 1: Instalando o Laravel via Composer**

1. Abra o terminal e execute o seguinte comando para instalar o Laravel:



`composer global require laravel/installer`

### 📍 **Passo 2: Criando um Novo Projeto Laravel**

Após a instalação, você pode criar um novo projeto Laravel com o comando:



`laravel new nome-do-projeto`

Isso criará uma nova pasta com a estrutura do Laravel.


