const jwt = require('jsonwebtoken');
const { User } = require('../models');

class AuthController {
  async register(req, res, next) {
    try {
      const { username, password } = req.body;
      
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(409).json({ message: 'Usuário já existe' });
      }

      const user = await User.create({ username, password });
      return res.status(201).json({ id: user.id, username: user.username });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      
      const user = await User.findOne({ where: { username } });
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Usuário ou senha inválidos' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'super-secret-key', {
        expiresIn: '1d',
      });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();