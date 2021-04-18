const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "jsilva@email.com",
    idade: 29,
    salario_real: 3000.0,
    vip: true,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: 2,
    nome: "Rafael Junior",
    email: "rafajun@email.com",
    idade: 31,
    salario_real: 2500.0,
    vip: false,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: 3,
    nome: "Daniela SMith",
    email: "danismi@email.com",
    idade: 24,
    salario_real: 4000.0,
    vip: true,
    perfil_id: 1,
    status: "BLOQUEADO",
  },
];

const perfis = [
  {
    id: 1,
    nome: "Comum",
  },
  {
    id: 2,
    nome: "Administrador",
  },
];

module.exports = { usuarios, perfis };
