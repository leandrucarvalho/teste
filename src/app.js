const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/auth', authRoutes);
app.use('/order', orderRoutes);

// Simple health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('--- Erro na API ---');
  console.error('Mensagem:', err.message);
  if (err.errors) {
    err.errors.forEach(e => console.error('Detalhe:', e.message));
  }
  console.error('Stack:', err.stack);
  console.error('-------------------');
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Erro interno do servidor';
  
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

module.exports = app;
