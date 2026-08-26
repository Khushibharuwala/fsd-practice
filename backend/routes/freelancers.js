import express from 'express';
import {
  getFreelancers,
  getFreelancerProfile,
  updateFreelancerProfile,
  verifyFreelancer,
} from '../controllers/freelancerController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getFreelancers);
router.get('/:id', getFreelancerProfile);
router.put('/:id', authenticate, updateFreelancerProfile);
router.post('/:id/verify', verifyFreelancer);

export default router;