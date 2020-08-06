import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar uma informação do back-end
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request body): Dados de criação ou atualização de um registro.
// Route Params: Identificar qual recurso eu quero atualizar ou deletar.
// Query Params: Páginação, filtros, ordenação

// localhost:3333

app.listen(3333);