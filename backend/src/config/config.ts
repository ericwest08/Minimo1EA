//Configuraciones para conexion con BBDD
export default {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/minimo1', //demo es la BDD, por lo que en el ejercicio lo tenemos que cambiar
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}