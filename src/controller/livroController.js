// controller/LivroController.js

import Livro from "../models/Livro.js"; // Certifique-se de que o caminho está correto

class LivroController {

    // Método para listar todos os livros
    // Não recebe ID no parâmetro da requisição, apenas busca todos
    static async listarLivros (req, res) {
        try {
            const livros = await Livro.find(); // Busca todos os documentos da coleção 'livros'
            res.status(200).json(livros); // Retorna a lista de livros em JSON
        } catch (erro) {
            // Em caso de erro na busca, retorna um status 500 com a mensagem de erro
            res.status(500).json({ message: `${erro.message} - falha ao listar livros` });
        }
    }

    // Método para buscar um livro por ID (adicionado para sua referência)
    // Este método espera um ID na URL (ex: /livros/:id)
    static async buscarLivroPorId (req, res) {
        try {
            const id = req.params.id; // Pega o ID da URL
            const livro = await Livro.findById(id); // Busca um livro pelo ID

            if (livro) {
                res.status(200).json(livro); // Retorna o livro encontrado
            } else {
                // Se nenhum livro for encontrado com o ID, retorna 404
                res.status(404).json({ message: "Livro não encontrado." });
            }
        } catch (erro) {
            // Em caso de erro (ex: ID inválido), retorna 500
            res.status(500).json({ message: `${erro.message} - falha ao buscar livro por ID` });
        }
    }

    // Método para cadastrar um novo livro
    static async cadastrarLivros (req, res) {
        try {
            const novoLivro = await Livro.create(req.body); // Cria um novo documento com os dados do corpo da requisição
            res.status(201).json({ message: "Livro cadastrado com sucesso", livro: novoLivro });
        } catch (erro) {
            // Em caso de erro no cadastro, retorna um status 500 com a mensagem de erro
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    // Você pode adicionar outros métodos aqui, como atualizarLivro e excluirLivro
    // static async atualizarLivro (req, res) { ... }
    // static async excluirLivro (req, res) { ... }
}

export default LivroController;
