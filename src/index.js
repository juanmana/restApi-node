const express = require('express')
const app = express()
const morgan = require('morgan')
var bodyParser = require('body-parser')



//settings

app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//routes

app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users',require('./routes/users'))

//start server


app.listen(app.get('port'),()=>{

    console.log(`Server on port ${app.get('port')}`)
})