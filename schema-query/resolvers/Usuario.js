const { perfis } = require("../data/db");

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    const selecionados = perfis.filter(
      (p) => p.id === Number(usuario.perfil_id)
    );
    return selecionados ? selecionados[0] : null;
  },
};
