//precisa ser instalado no npm
const express = require('express'); //cria um server
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'))

app.get('/', function (req, res){
    res.render('pages/index'); //mostra a pagina com o nome index
});

app.listen(8080); //roda o server na porta 8080
console.log('rodando');