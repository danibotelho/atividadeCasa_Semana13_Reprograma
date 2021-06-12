const { model } = require('mongoose')
const Filme = require('../Models/filme')

const criaFilme = async (req,res) => {
    const filme = new Filme({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        languages: req.body.languages,
        releaseYear: req.body.releaseYear,
        created_at: req.body.created_at
    })
    
    try {

        const novoFilme = await filme.save() 
        res.status(201).json(novoFilme) 

    }catch (err){
        res.status(400).json({message: err.message})
    }
 }

 const listaFilme = async (req,res) => {
    const filmes = await Filme.find() 
     res.status(200).json(filmes)
}



const atualizaFilme = async (req,res) => {
    try{
        const filme = await Filme.findById(req.params.id)
        if (filme == null){
            return res.status(404).json({message: 'Filme não encontrado'})
        }
   
        if (req.body.title != null){
         filme.title = req.body.title
       }
   
       if (req.body.description != null){
           filme.description = req.body.description
         }
   
       if (req.body.genre != null){
           filme.genre = req.body.genre
         }

       if (req.body.languages != null){
            filme.languages = req.body.languages
          }

       if (req.body.releaseYear != null){
          filme.releaseYear = req.body.releaseYear
          }
   
       if (req.body.created_at != null){
           filme.created_at = req.body.created_at
         }  
        
         const filmeAtualizado = await filme.save()
         res.json(filmeAtualizado)
   
        } catch (err){
           res.status(500).json({message: err.message})
   
        }
   }

   const apagaFilme = async (req,res) => {
    try{ 
        const filme = await Filme.findById(req.params.id)
        if (filme == null){
            return res.status(404).jsom({message: "Filme não encontrado"})
        }

        await filme.remove()
        res.json({message: 'Filme deletado com sucesso!'})

    } catch (err){
       return res.status(500).json({message: err.message})
    }
}


 module.exports = {
     criaFilme,
     listaFilme,
     atualizaFilme,
     apagaFilme

 }