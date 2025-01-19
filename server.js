import { create, router as _router, defaults } from 'json-server';
import cors from 'cors';
const server = create();
const router = _router('./src/db/CoursesData.json'); 
const middlewares = defaults();

server.use(cors());

server.use(middlewares);

server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
