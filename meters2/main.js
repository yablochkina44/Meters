let fs = require('fs');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let urlencodeParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


let file = fs.readFileSync('meters.json', 'utf8');
let jsObjectMeters = JSON.parse(file);

let form = fs.readFileSync('form.json', 'utf8');
let formObj = JSON.parse(form);

let viewform = fs.readFileSync('viewform.json', 'utf8');
let viewformObj = JSON.parse(viewform);


app.post('/add', urlencodeParser, function(req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    let jsonData = fs.readFileSync('meters.json' , 'utf8');
    let all = jsonData.substring(0, jsonData.length-1)+', '+JSON.stringify(req.body)+"]";
    console.log(all);
    fs.writeFileSync('meters.json', all);
    //res.render('add');
    //res.render('menu');
    
});




app.listen(3001);

app.get('/', function (req, res) {
    res.render('add');
});

app.get('/:name', function(req, res) {
    if(req.params.name === 'add') {
        res.render('add',{
            name: formObj['name'],
            data: formObj
        });
    } else if(req.params.name === 'view') {
        res.render('view', {data: jsObjectMeters, data_v:viewformObj});
    } else {
        res.sendFile(__dirname + '/404.html');
    }  
});