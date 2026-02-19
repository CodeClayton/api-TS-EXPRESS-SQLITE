import { Produto } from "../core/models/produto.model";
import { openDb } from "../core/db/db.config";

export const ProdutoService = {
  async getAll(): Promise<Produto[]> {
    try {
      const db = await openDb();
      const produtos = await db.all<Produto[]>('SELECT * FROM produto');
      //console.log('Produtos encontrados:', produtos);
      return produtos;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return [];
    }
  }

};
