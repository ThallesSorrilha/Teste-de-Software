const { Livro } = require("../../src/model/Livro");
const { Usuario } = require("../../src/model/Usuario");
const { EmprestimoService } = require("../../src/service/EmprestimoService");
const { constantes } = require("../../src/utils/constants");
const { mensagens } = require("../../src/utils/mensagens");
const casos = require("../../dados/emprestimo.json");

describe("Emprestimo", () => {
  /*
  test("Testa usuário e livro válido", () => {
    // Arrange
    const usuario = new Usuario({
      id: 1,
      nome: "Teste",
      ativo: true,
      emprestimosAtivos: 1,
      multaPendente: constantes.USUARIO_LIMITE_EMPRESTIMOS,
    });
    const livro = new Livro({
      id: 1,
      titulo: "Chapeuzinho Vermelho",
      disponivel: true,
    });

    // Act
    const saida = EmprestimoService.autorizarEmprestimo(usuario, livro);

    // Assert
    expect(true).toBe(saida);
  });

  test("Testa usuario e livro valido", () => {
    // Arrange
    const usuario = new Usuario({
      id: 1,
      nome: "Teste",
      ativo: true,
      emprestimosAtivos: 1,
      multaPendente: constantes.USUARIO_LIMITE_EMPRESTIMOS,
    });
    const livro = new Livro({
      id: 1,
      titulo: "Chapeuzinho Vermelho",
      disponivel: true,
    });

    // Act
    expect(() => EmprestimoService.autorizarEmprestimo(usuario, livro)).toThrow(
      mensagens.LIVRO_INDISPONÍVEL,
    );

    // Assert
  });
  */

  test.each(casos)("$descricao", (caso) => {
    const usuario = new Usuario({
      id: 1,
      nome: "Trace DeLivros",
      ativo: caso.ativo,
      emprestimosAtivos: caso.emprestimosAtivos,
      multaPendente: caso.multaPendente,
    });
    const livro = new Livro({
      id: 1,
      titulo: "Chapeuzinho Vermelho",
      disponivel: caso.livroDisponivel,
    });

    const saida = EmprestimoService.autorizarEmprestimo(usuario, livro);
    expect(saida).toBe(caso.saida);
  });
});
