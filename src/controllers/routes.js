import express from 'express';

const router = express.Router();

// Home/Index route
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/home', (req, res) => {
  res.render('home');
});

// About route
router.get('/about', (req, res) => {
  res.render('about');
});

// Products route
router.get('/products', (req, res) => {
  res.render('products');
});

export default router;
