# Controle de lançamentos

Projeto que faz o controle do fluxo de caixa diário com os lançamentos (débitos e créditos), diponibilizando também o saldo diário consolidado.

### 📋 Pré-requisitos

Para que o projeto consiga rodar na sua máquina, deverá ter instalado [Node](https://nodejs.org/en) e [DotNet](https://learn.microsoft.com/pt-br/dotnet/core/install/windows?tabs=net70)

### 🔧 Instalação - Backend

Siga essa série de exemplos passo-a-passo para conseguir ter um ambiente do backend de desenvolvimento em execução.

Após baixar ou clonar o projeto em sua máquina, deverá acessar até o diretório responsavel pelo backend:

```
cd [local]\POC_ControleLancamento\Poc.ControleLancamento.Backend\
```

Agora é só rodar a API pelo comando:

```
dotnet run --project ./Poc.ControleLancamento.API/Poc.ControleLancamento.API.csproj
```

Observe que a api estará rodando no endereço https://localhost:7064.

### 🔧 Instalação - Frontend

Siga essa série de exemplos passo-a-passo para conseguir ter um ambiente do frontend de desenvolvimento em execução.

Após baixar ou clonar o projeto em sua máquina, deverá acessar até o diretório responsavel pelo frontend:

```
cd [local]\POC_ControleLancamento\Poc.ControleLancamento.Frontend\
```

Feito isso, precisamos instalar todos os pacotes de dependência do projeto com o comando:

```
npm install
```

Agora é só rodar a aplicação pelo comando:

```
ng serve
```

Observe que a aplicação estará rodando no endereço https://localhost:4200.

## 🛠️ Construído com

Segue as ferramentas que foram usadas para a criação do projeto

* [Visual Studio](https://visualstudio.microsoft.com/pt-br/vs/) - Desenvolvimento da API - C#
* [Visual Code](https://code.visualstudio.com/) - Desenvolviemnto do frontend
* [Angular](https://angular.io/) - Framework js para o desenvolvimento do frontend

---
⌨️ com gratidão por [Fernando Spelling](https://gist.github.com/fspelling) 😊
