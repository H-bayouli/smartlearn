import express from 'express';

import {
    uploadDocument,
    getDocuments,
    getDocument,
    deleteDocument,
} from '../controllers/documentController.js';
import protect from '../middleware/auth.js';
import upload from '../config/multer.js';

const router = express.Router();

router.use(protect);

router.post('/upload', (req, res, next) => {
  upload.single('file')(req, res, function (err) {
    if (err) {
      console.error("MULTER ERROR:", err.message);
      return res.status(400).json({
        success: false,
        error: err.message
      });
    }
    next();
  });
}, uploadDocument);
router.get('/documents', getDocuments);
router.get('/:id', getDocument);
router.delete('/:id', deleteDocument);




export default router;