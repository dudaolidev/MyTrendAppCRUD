const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.view_partner = (req, res) => {
    const partnerId = req.params.id; // Obtendo o ID do parceiro a partir dos parâmetros da URL

    // Chama a API para buscar os dados do parceiro com o ID especificado
    axios.get(`http://localhost:3000/api/users?id=${partnerId}`)
        .then(response => {
            // Renderiza a página 'view_partner.ejs' e passa os dados do parceiro
            res.render('view_partner', { partner: response.data });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ message: "Erro ao recuperar informações do parceiro" });
        });
};


exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}