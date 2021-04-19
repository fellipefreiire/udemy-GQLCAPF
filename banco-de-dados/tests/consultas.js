const db = require("../config/db");

// db("perfis")
//   .then((res) => res.map((p) => p.nome))
//   .then((nome) => console.log(nome))
//   .finally(() => db.destroy());

// db("perfis")
//   .select("nome", "id")
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

// db.select("nome", "id")
//   .from("perfis")
//   .limit(4)
//   .offset(2)
//   .then((res) => console.log(res))
//   .finally(() => db.destroy());

db("perfis")
  .select("id", "nome")
  // .where({ id: 2 })
  // .where("id", "=", 2)
  // .where("nome", "like", "%min")
  // .where("nome", "like", "ad%")
  // .where("nome", "like", "%m%")
  // .whereNot({ id: 2 })
  .whereIn("id", [1, 2, 3])
  // .first()
  .then((res) => console.log(res))
  .finally(() => db.destroy());
