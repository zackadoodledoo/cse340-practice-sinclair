import express from 'express';
import { facultyListPage, facultyDetailPage } from './faculty/faculty.js';

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

// Faculty routes
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultyId', facultyDetailPage);

export default router;
