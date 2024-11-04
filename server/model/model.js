const mongoose=require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    website: {
        type: String,
        required: false // Se o website não for obrigatório, defina como false
    },
    categories: {
        type: [String], // Array de strings para categorias
        required: false // Se não for obrigatório, defina como false
    },
    brands: {
        type: [String], // Array de strings para marcas
        required: false // Se não for obrigatório, defina como false
    },
    rating: {
        type: Number, // Para avaliações, use Number
        min: 0, // Definindo o mínimo permitido
        max: 5, // Definindo o máximo permitido
        required: false // Se não for obrigatório, defina como false
    },
    total_reviews: {
        type: Number, // Total de avaliações deve ser um número
        min: 0, // Definindo o mínimo permitido
        required: false // Se não for obrigatório, defina como false
    },
    is_verified_partner: {
        type: Boolean, // Para parceiro verificado, use Boolean
        required: false // Se não for obrigatório, defina como false
    }
});

async function getUsersFromDatabase() {
    return await Userdb.find(); // Retorna todos os usuários da coleção
}

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;