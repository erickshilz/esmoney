import { createRoot } from 'react-dom/client';
import { Model, createServer } from 'miragejs';
import App from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        // { DEPÓSITOS PRÉ-CADASTRADOS
        //   id: 1,
        //   title: 'Freelancer de Website',
        //   type: 'deposit',
        //   category: 'Desenvolvimento',
        //   amount: 6000,
        //   createdAt: new Date('2023-02-12 09:00:00'),
        // },
        // {
        //   id: 2,
        //   title: 'Aluguel',
        //   type: 'withdraw',
        //   category: 'Casa',
        //   amount: 1100,
        //   createdAt: new Date('2023-02-14 20:00:00'),
        // },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
