// routes/eventRoutes.js or similar
const express = require('express');
const router = express.Router();
const getEventLogger = require('../logger/eventsLogger');

router.post('/log', (req, res) => {
  const { userId = 'guest', page = '/', events = [] } = req.body;

  const logger = getEventLogger(userId);

  if (!Array.isArray(events)) {
    return res.status(400).json({ error: 'Events must be an array' });
  }

  events.forEach(event => {
    const { eventType, timestamp, ...data } = event;
    logger.info(
      `EVENT: ${eventType} | Time: ${timestamp} | Page: ${page} | Data: ${JSON.stringify(data)}`
    );
  });

  res.sendStatus(200);
});

module.exports = router;
