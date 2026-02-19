export interface Produto{
    id: number,
    nome:string, 
    preco: number
}

export const ProdutoSQL = `
CREATE TABLE IF NOT EXISTS produto (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    preco Decimal(10,2)
);
`;