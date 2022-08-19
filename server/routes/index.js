var express = require('express');
var router = express.Router();
const UserControllers = require('../controllers/controllersUser')
/* GET home page. */
router.get('/api',(req, res, next) =>{
  res.send({"user": ["hdhkjn","qSDdd"]})
  
});

router.post('/post',UserControllers.PostUser);
router.get('/connexion/:id',UserControllers.ConnexionToken);



module.exports = router;
