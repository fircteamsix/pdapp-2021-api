# API Rest do PDApp

Campanhas beneficentes de doação de sangue

## Configurações/Instalação do Node
Usando o Instalador do Node.

```bash
Acesse o link para baixar o instalador (De preferença as LTS)

https://nodejs.org/en/

```

Usando o NVM

```bash
nvm list available

nvm install 12.22.1 // Informe a versão que deseja. (De preferença as LTS)

nvm use 12.22.1 // Comando para usar a versão que foi instalada.
```

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

### Gitflow
```
git flow feature start <nome>
git add .
git commit -m "titulo do commit"
git flow feature finish <nome>
git push -u origin
```

### Ultilizando o Sequelize CLI
See [Configuring](https://sequelize.org).

### Configuração do .ENV
```
No repositorio existe o arquivo .env.exemplo
Basta renomear para: .env  e substituir os dados de acordo com seu host db.
Todas os dados sensiveis estarão nesse arquivo.
```

## Licença
[ISC]
