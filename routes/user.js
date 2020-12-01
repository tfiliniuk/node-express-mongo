const express = require('express');
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const router = express.Router();

const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');

const { protect, authorize } = require('../middleware/auth');

// Anything it will use this middleware
router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
