import { openDb } from "./db.config.js";
import { ProdutoSQL } from "../models/produto.model.js";

const ArrSQL = [ProdutoSQL]; 

export async function initializeDatabase() {
  const db = await openDb();

  for (const sql of ArrSQL) {
    await db.exec(sql);
    console.log('Tabela criada com sucesso');
  }

  return db; 
}