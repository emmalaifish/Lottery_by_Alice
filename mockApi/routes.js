import express from 'express';

import tasks from './data/tasks';

const router = express.Router();


// 取得 tasks list
router.get('/tasks', (req, res) => {
	// return res.status(400).end();
  return res.status(200).json(tasks).end();
});

// 新增 task
router.post('/task', (req, res) => {
  if (Math.random() < 0.3) {
    return res.status(400).end();
  }

  return res.status(200).end();
});

export default router;
