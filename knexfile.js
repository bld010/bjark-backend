module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bjark',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  }
};