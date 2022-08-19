const{ request,response}= require('express');
const jsonwt = require('../middleware/jsonwebton');
const { mailer } = require('../middleware/nodemailer');
const dataUser = require('../others/RequeteUsers');



const UserControllers = class{
    static PostUser = (req=request,res=response)=>{
        console.log(req.body.email);
     let Token =   jsonwt.CreerToken(req.body)
     mailer(req.body.email,Token)
    }

    static ConnexionToken = async(req=request,res=response)=>{
       
            let id = req.params.id;
            let tokenId = jsonwt.VerifierToken(id)   
            let users = await dataUser.InsertionUser(tokenId);
            if (users.success) {
                console.log(users.success);
                res.json({user:users.success})
            } else {
                res.send(users.erreur)
            }
    }

    

    
}


module.exports = UserControllers;