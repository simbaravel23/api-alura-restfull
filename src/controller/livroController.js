import Livro from "../models/Livro.js"; 

class LivroController {

    static async listarLivros (req, res) {
        try {
            const livros = await Livro.find(); // Busca todos os documentos da coleção 'livros'
            res.status(200).json(livros); // Retorna a lista de livros em JSON
        } catch (erro) {
            // Em caso de erro na busca, retorna um status 500 com a mensagem de erro
            res.status(500).json({ message: `${erro.message} - falha ao listar livros` });
        }
    };
     static async listarLivrosPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await Livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livros` });
        }
    }

    
    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id; 
             await Livro.findByIdAndUpdate(id, req.body); 
                res.status(200).json({message: "livro atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livros` });
        }
    }

  
    static async cadastrarLivros (req, res) {
        try {
            const novoLivro = await Livro.create(req.body); // Cria um novo documento com os dados do corpo da requisição
            res.status(201).json({ message: "Livro cadastrado com sucesso", livro: novoLivro });
        } catch (erro) {
            // Em caso de erro no cadastro, retorna um status 500 com a mensagem de erro
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }
    static async excluirLivro (req, res) {
        try {
        const id = req.params.id;
        await Livro.findByIdAndDelete(id);
        res.status(200).json({ message: "livro excluído com sucesso" });
        } catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    };
}

export default LivroController;
