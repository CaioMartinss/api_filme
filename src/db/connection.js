import mongoose from "mongoose";
import config from "../config/config";

mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Conectado'))
    .catch(err => {
        console.error('Erro de Conexão com o MongoDB:', err);
        process.exit(1);
    });

