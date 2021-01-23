import express from 'express';
const router = express.Router();
import {
  authUser,
  getUSerProfile,
  registerUser,
  updateUSerProfile,
  getUsers,
  deleteUser,
  getUsersById,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUSerProfile)
  .put(protect, updateUSerProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUsersById)
  .put(protect, admin, updateUser);

export default router;
