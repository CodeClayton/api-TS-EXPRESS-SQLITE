import { initializeDatabase } from './src/core/db/db.context';
import type {Produto} from './src/core/models/produto.model';
import express,{ Request, Response} from 'express';
import { ProdutoService } from './src/services/productService';

const app = express();
app.use(express.json());    
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
initializeDatabase();

app.get('/produtos', async (req:Request,res:Response)=>{
    const produtos: Produto[] = [];
        const produtosEncontrados = await ProdutoService.getAll();
        produtos.push(...produtosEncontrados);

    res.json(produtos);
})


