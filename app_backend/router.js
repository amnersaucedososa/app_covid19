// routes/items.js
const express = require('express');
const router = express.Router();
const db = require('../models/Item');

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
  db.query('SELECT * FROM items', (err, rows) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(rows);
    }
  });
});

// Ruta para crear un elemento
router.post('/', (req, res) => {
  const newItem = req.body;
  db.query('INSERT INTO items SET ?', newItem, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      newItem.id = result.insertId;
      res.json(newItem);
    }
  });
});

// Ruta para actualizar un elemento
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  db.query('UPDATE items SET ? WHERE id = ?', [updatedItem, id], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(updatedItem);
    }
  });
});

// Ruta para eliminar un elemento
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM items WHERE id = ?', id, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
