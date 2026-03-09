require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Sync database models
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Em desenvolvimento, use sync() com cuidado. 
    // force: true recria as tabelas toda vez (limpa os dados)
    // alter: true tenta atualizar a estrutura sem apagar os dados
    await sequelize.sync({ alter: true });
    console.log('Database synced successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`- POST /order: Create a new order`);
      console.log(`- GET /order/:orderId: Get order by ID`);
      console.log(`- GET /order/list: List all orders`);
      console.log(`- PUT /order/:orderId: Update order by ID`);
      console.log(`- DELETE /order/:orderId: Delete order by ID`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error);
    process.exit(1);
  }
};

startServer();
