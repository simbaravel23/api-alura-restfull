import express from "express";

const app = express();

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

app.get("/", (req,res)=>{
    res.status(200).send("Curso de node.js");
});

app.get("/livros", (req, res)=>{
    res.status(200).json(livros);
} );

app.post("/livros", (req,res)=>{
    livros.push(req.body);
})

export default app;