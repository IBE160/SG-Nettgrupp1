
const users = [];
let nextId = 1;

export const mockApi = () => ({
  name: 'mock-api',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/users' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          const user = JSON.parse(body);
          user.id = nextId++;
          users.push(user);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(user));
        });
        return;
      }

      const deleteMatch = req.url.match(/^\/users\/(\d+)$/);
      if (deleteMatch && req.method === 'DELETE') {
        const userId = parseInt(deleteMatch[1], 10);
        const index = users.findIndex((u) => u.id === userId);
        if (index !== -1) {
          users.splice(index, 1);
          res.statusCode = 204;
          res.end();
        } else {
          res.statusCode = 404;
          res.end('User not found');
        }
        return;
      }

      next();
    });
  },
});
