import express from 'express';
import {
  getServices,
  createService,
  getServiceDetails,
  updateService,
  deleteService,
} from '../controllers/serviceController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getServices);
router.post('/', authenticate, createService);
router.get('/:id', getServiceDetails);
router.put('/:id', authenticate, updateService);
router.delete('/:id', authenticate, deleteService);

export default router;