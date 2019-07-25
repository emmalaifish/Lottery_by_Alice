import express from 'express';

import tasks from './data/tasks';

const router = express.Router();


// 取得 person list
router.get('/tasks', (req, res) => {
  return res.status(200).json(tasks).end();
});

export default router;
