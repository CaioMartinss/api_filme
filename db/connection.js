import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@cluster0.p2pjdan.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('MongoDB Conectado'))
    .catch(err => {
        console.error('Erro de Conexão com o MongoDB:', err);
        process.exit(1); // Encerra o processo em caso de erro de conexão
    });
