// Back-end API Restful API
import Fastify from 'fastify';

const app = Fastify();

app.get('/', () =>{
  return 'Hello  world!'
})

app.listen(3333)