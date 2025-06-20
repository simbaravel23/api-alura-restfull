import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];

function buscaLivros(id){
    return livros.findIndex(livro=>{
        return livro.id === Number(id);
    })
}

app.get("/", (req,res)=>{
    res.status(200).send("Curso de node.js");
});

app.get("/livros", (req, res)=>{
    res.status(200).json(livros);
} );

app.get("/livros/:id", (req, res)=>{
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req,res)=>{
    livros.push(req.body);
    res.status(201).send("Livros cadastrado com sucesso!")
});

app.put("/livros/:id", (req, res)=>{
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req,res)=>{
   const index = buscaLivros(req.params.id);
   livros.splice(index,  1) ;
   res.status(200).send("livro removido com sucesso!");
})


export default app;