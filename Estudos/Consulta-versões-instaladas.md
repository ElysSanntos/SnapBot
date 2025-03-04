# Comandos Utilizados para Verificação e Atualização de Versões

Este documento descreve todos os comandos utilizados para verificar as versões instaladas de pacotes e as etapas realizadas para atualizar as versões de pacotes no projeto.

## 1. **Verificando Versões Instaladas**

### 1.1. Verificar as versões dos pacotes instalados no projeto
O comando a seguir exibe todas as dependências instaladas no projeto e suas versões:

```bash
npm list --depth=0

```

### Explicação:

--depth=0 exibe apenas as dependências de nível superior, sem mostrar as dependências internas de cada pacote.
1.2. Verificar a versão específica de um pacote
Para verificar a versão de um pacote específico, como o @angular/core, use o seguinte comando:
````npm ls @angular/core````

### Explicação:

Este comando exibe a versão do pacote @angular/core instalada no seu projeto, junto com a árvore de dependências.
1.3. Verificar as dependências de peer
Para verificar as dependências de peer (pacotes que são necessários para o funcionamento correto de outro pacote), utilize o comando:


npm ls --peer
### Explicação:

Esse comando mostra as dependências de peer que precisam ser compatíveis com o pacote atual, ajudando a identificar versões corretas e problemas de compatibilidade.
1.4. Verificar as versões do Node.js e npm
Para verificar a versão do Node.js e npm que você está utilizando, rode os seguintes comandos:


node -v
### Explicação:

Exibe a versão do Node.js instalada.

npm -v
### Explicação:

Exibe a versão do npm instalada.
2. Atualizando as Versões
2.1. Atualizar o Angular CLI
Para atualizar o Angular CLI globalmente para a versão mais recente, utilize o seguinte comando:


npm install -g @angular/cli@latest
### Explicação:

Este comando instala a versão mais recente do Angular CLI globalmente no seu sistema.
2.2. Atualizar o Angular no projeto
Para atualizar as dependências do Angular no seu projeto, incluindo o Angular CLI e o Angular Core, use o comando:


ng update @angular/cli @angular/core
### Explicação:

Esse comando executa a atualização das dependências principais do Angular para as versões mais recentes. O ng update verifica quais dependências estão desatualizadas e sugere atualizações.
2.3. Atualizar o Node.js
A versão do Node.js pode ser baixada do site oficial:

Baixar Node.js LTS

Após a instalação, você pode verificar a versão atual com:


node -v
### Explicação:

Esse comando exibe a versão atual do Node.js que está instalada após a atualização.
2.4. Reinstalar as dependências
Depois de garantir que as versões do Node.js e Angular foram atualizadas corretamente, execute o comando a seguir para garantir que todas as dependências do projeto sejam reinstaladas com as versões corretas:


npm install

### Explicação:

Esse comando instala todas as dependências listadas no arquivo package.json, garantindo que você tenha as versões corretas de cada pacote.
2.5. Iniciar o servidor de desenvolvimento
Após as atualizações, você pode iniciar o servidor de desenvolvimento para verificar se tudo está funcionando corretamente com o comando:


ng serve

### Explicação:

O comando ng serve inicia o servidor de desenvolvimento Angular, permitindo que você visualize o projeto localmente em um navegador.
Com esses comandos, você pode verificar as versões dos pacotes instalados, atualizar as dependências e garantir que seu ambiente de desenvolvimento esteja corretamente configurado para a versão mais recente do Angular e Node.js.



