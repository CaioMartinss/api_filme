import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
    },
    trailer: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Movie', Schema);