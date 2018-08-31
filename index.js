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

    let cats = [
        {
            Color: 'orange',
            Breed: 'tabby'
        },
        {
            Color: 'black', 
            Breed: 'stray'
        }
    ]

    let toys = [
        {
            type:'dog toys',
            size:'medium'  
        },
        {
            type: 'cat toys', 
            size: 'small'
        }
    ]

    let foods = [
        {
            brand: 'Blue Buffalo', 
            flavor: 'fish' 
        },
        { 
            brand: 'Science Diet',
            flavor: 'chicken'
        }
    ]
    let combinedAge = addUpAllAges(dogs, 'age')


    let tagline = 'These are all my dogs';

    res.render('pages/index', {
        allMyDogs: dogs, 
        tagline: tagline,
        combinedAge: combinedAge,
        allMyCats: cats,
        toys: toys,
        foods: foods, 
    });

});

app.get('/about', function(req, res){
    res.render('pages/about')
});

app.get('/contact', function(req, res){
    res.render('pages/contact')
});

app.listen(3040);