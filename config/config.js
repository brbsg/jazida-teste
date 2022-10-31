export default {
  development: {
    username: "DesafioAdmin",
    password: "Picachu123",
    database: "Desafio-jz",
    host: "desafio-jazida.database.windows.net",
    dialect: "mssql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
