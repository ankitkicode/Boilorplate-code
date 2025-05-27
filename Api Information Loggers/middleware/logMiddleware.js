const getUserLogger = require('../logger/userLogger');
const geoip = require('geoip-lite');

function logUserActivity(req, res, next) {
  const userId = req.body.userId || req.query.userId || 'Unknown';

  // Exclude sensitive fields
  const { password, ...safeBody } = req.body;

  // Get IP
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
  if (ip.includes('::ffff:')) ip = ip.split('::ffff:')[1];

  // Get Geo Location
  const geo = geoip.lookup(ip);
  const location = geo
    ? `${geo.city || 'Unknown City'}, ${geo.region || 'Unknown Region'}, ${geo.country || 'Unknown Country'}`
    : 'Unknown Location';

  const logger = getUserLogger(userId);
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const statusCode = res.statusCode;

    let level = 'info';
    if (statusCode >= 500) level = 'error';
    else if (statusCode >= 400) level = 'warn';

    const reason = res.locals.errorMessage || 'N/A';

    logger.log({
      level,
      message: `API: ${req.method} ${req.originalUrl} | Status: ${statusCode} | IP: ${ip} | Location: ${location} | Duration: ${duration}ms | Body: ${JSON.stringify(safeBody)} | Reason: ${reason}`
    });
  });

  res.on('error', (err) => {
    logger.error(`API ERROR: ${req.method} ${req.originalUrl} | IP: ${ip} | Error: ${err.message}`);
  });

  next();
}

module.exports = logUserActivity;
