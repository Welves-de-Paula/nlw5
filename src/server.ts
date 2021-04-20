import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send("teste")
});

app.post("/", (request, response) => {

})
app.listen(8080, () => console.log('Serve Port 8080'))