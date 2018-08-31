let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', function(req, res){

    let dogs = [
        {color:'black', breed: 'german shepherd', age:5},
        {color:'white', breed: 'border collie', age:6},
        {color:'mixed', breed: 'labrador retriever', age:8},
        {color:'brown', breed: 'irish setter', age:3},
        {color:'tri color', breed: 'bernese mountain dog', age:2}
    ];

    let addUpAllAges = function(array, prop) {
        return array.reduce(function(a,b){
            return a + b[prop];
        }, 0)
    }

    let combinedAge = addUpAllAges(dogs, 'age')


    let tagline = 'These are all my dogs';

    res.render('pages/index', {
        allMyDogs: dogs, 
        tagline: tagline,
        combinedAge: combinedAge
    });

});

app.get('/about', function(req, res){
    res.render('pages/about')
})

app.listen(3040);