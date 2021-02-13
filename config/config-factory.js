const ServerConfig = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
};

const SecurityConfig = {
    allowedHosts: JSON.parse(process.env.ALLOWED_HOSTS || '"*"')
};

/**
 driver = "com.mysql.cj.jdbc.Driver"
 jbdc = "jdbc:mysql://localhost:3306/battleship_auth?useSSL=false&allowPublicKeyRetrieval=true"
 jbdc = ${?DB_JBDC}
 user = "root"
 user = ${?DB_USER}
 password = "root"
 password = ${?DB_PW}
 */
const DBConfig = {
    name: process.env.DB_NAME || 'battleship_auth',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root'
};

module.exports = { ServerConfig, SecurityConfig, DBConfig };
