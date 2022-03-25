<h1> API Rest desenvolvida em Node.js para a conclusão do projeto de final de módulo do curso de WebDev FullStack.
 </h1>

<h2>O projeto:</h2>

<p> Projeto desenvolvido para conclusão do módulo 4 do curso de WebDev FullStack, da Resília Educação, onde foi criada uma API Rest para um cinema, utilizando JavaScript com Node.js, Express como framework e também o SqLite3 como banco relacional.
</p>

<h2>Dependências utilizadas:</h2>

```js
"dependencies": {
    "express": "^4.17.3",
    "path": "^0.12.7",
    "sequelize": "^6.17.0",
    "sequelize-cli": "^6.4.1",
    "sqlite3": "^5.0.2"
}
```


<h2>Comando para iniciar o terminal:</h2>

```js
npm run dev
```

Configuração dos scripts utilizados no terminal. Os comandos estão disponíveis no documento package.json: </p>

```js
"scripts": {
    "start": "node ./api/index.js",
    "dev": "nodemon ./api/index.js",
    "migrate": "npx sequelize-cli db:migrate",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```


<h2>As rotas da API:</h2>

```js

salaCinemaRouter.get("/sala-cinema", SalaCinemaController.pegarSalas);
salaCinemaRouter.get("/sala-cinema/:numero", SalaCinemaController.pegarSalaPorNumero);
salaCinemaRouter.post("/sala-cinema", SalaCinemaController.criarSala);
salaCinemaRouter.put("/sala-cinema/:numero", SalaCinemaController.atualizarSala);
salaCinemaRouter.delete("/sala-cinema/:numero", SalaCinemaController.deletarSala);

```
