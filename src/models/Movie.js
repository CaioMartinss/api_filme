import mongoose from "mongoose";

//array de generos de filmes, o usuário irá somente conseguir colocar um genero de filme que tenha no array
const generos = ["ação", "aventura", "sci-fi"];


const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        minlength: 20,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
    },
    genger: {
        type: generos,
        required: true,
    }
});

export default mongoose.model('Movie', Schema);