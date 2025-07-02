import autor from "../models/Autor.js"; 

class AutorController {

    static async listarAutores (req, res) {
        try {
            const autor = await autor.find(); 
            res.status(200).json(autor); 
        } catch (erro) {
            
            res.status(500).json({ message: `${erro.message} - falha ao listar autores` });
        }
    };
     static async listarAutoresPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await Livro.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autores` });
        }
    }

    
    static async atualizarAutores (req, res) {
        try {
            const id = req.params.id; 
             await autor.findByIdAndUpdate(id, req.body); 
                res.status(200).json({message: "autor atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autores` });
        }
    }

  
    static async cadastrarAutores (req, res) {
        try {
            const novoAutor = await autor.create(req.body); // Cria um novo documento com os dados do corpo da requisição
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor });
        } catch (erro) {
            // Em caso de erro no cadastro, retorna um status 500 com a mensagem de erro
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    }
    static async excluirAutor (req, res) {
        try {
        const id = req.params.id;
        await autor.findByIdAndDelete(id);
        res.status(200).json({ message: "Autor excluído com sucesso" });
        } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    };
}

export default autorController;
