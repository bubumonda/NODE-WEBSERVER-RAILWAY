import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv'

dotenv.config()
const dirname ='C:/Users/gians/OneDrive/Documentos/NODE/06-webserver'
const app = express()
const port = process.env.PORT

//HanddleBars
app.set('view engine', 'hbs')
hbs.registerPartials( dirname + '/views/partials')

//Contenido Estatico
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('home',
    {
        nombre: 'Sebastian',
        titulo: 'Curso Node'
    }
    )
})

app.get('/generic', (req, res)=>{
    res.render('generic',
    {
        nombre: 'Sebastian',
        titulo: 'Curso Node'
    })
})

app.get('/elements', (req, res)=>{
    res.render('elements',
    {
        nombre: 'Sebastian',
        titulo: 'Curso Node'
    })
    
})

app.get('*', (req, res)=>{
    res.sendFile(dirname+'/public/404.html')
})






app.listen(port, ()=>{
    console.log(`Corriendo en el puerto  ${port}`)
})
