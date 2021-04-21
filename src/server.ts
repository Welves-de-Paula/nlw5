import express from 'express';

import './database';
import { routes } from "./routes"

const app = express();

app.use(express.json())
app.use(routes)

app.listen(8080, () => console.log('Serve Port 8080'))