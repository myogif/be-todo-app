const express =require('express');
const router = express.Router();
const activitiesRouter = require('../controller/activites.controller');

router.get('/', activitiesRouter.getActivities);
router.get('/:id', activitiesRouter.getActivitiy);
router.post('/', activitiesRouter.addActivitiy);
router.patch('/:id', activitiesRouter.updateActivitiy);
router.delete('/:id', activitiesRouter.deleteActivitiy);

module.exports = router;