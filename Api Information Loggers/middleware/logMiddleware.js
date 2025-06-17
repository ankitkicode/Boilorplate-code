const getUserLogger = require('../logger/apisLogger');
const geoip = require('geoip-lite');

function logUserActivity(req, res, next) {
  const userId = req.body.userId || req.query.userId || 'Unknown';
  const { password, ...safeBody } = req.body;

  // Get IP
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
  if (ip.includes('::ffff:')) ip = ip.split('::ffff:')[1];

  // Get Geo Location
  const geo = geoip.lookup(ip);
  const location = geo
    ? `${geo.city || 'Unknown City'}, ${geo.region || 'Unknown Region'}, ${geo.country || 'Unknown Country'}`
    : 'Unknown Location';

  // Parse User-Agent manually
  const ua = req.headers['user-agent'] || 'Unknown';
  let os = 'Unknown OS';
  let browser = 'Unknown Browser';
  let deviceType = /mobile/i.test(ua) ? 'Mobile' : 'Desktop';

  // Basic OS detection
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
  else if (ua.includes('Linux')) os = 'Linux';

  // Basic browser detection
  if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Edg')) browser = 'Edge';
  else if (ua.includes('MSIE') || ua.includes('Trident')) browser = 'Internet Explorer';

  const logger = getUserLogger(userId);
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const statusCode = res.statusCode;

    let level = 'info';
    if (statusCode >= 500) level = 'error';
    else if (statusCode >= 400) level = 'warn';
    else if (statusCode >= 200) level = 'info';
    else level = 'debug';
    
    if (statusCode >= 400 && statusCode < 500) {
      res.locals.errorMessage = res.locals.errorMessage || 'Client Error';
    } else if (statusCode >= 500) {
      res.locals.errorMessage = res.locals.errorMessage || 'Server Error';
    }



    const reason = res.locals.errorMessage || 'N/A';

    logger.log({
      level,
      message: `API: ${req.method} ${req.originalUrl} | Status: ${statusCode} | IP: ${ip} | Location: ${location} | Device: ${deviceType} | OS: ${os} | Browser: ${browser} | Duration: ${duration}ms | Body: ${JSON.stringify(safeBody)} | Reason: ${reason}`
    });
  });

  res.on('error', (err) => {
    logger.error(`API ERROR: ${req.method} ${req.originalUrl} | IP: ${ip} | Error: ${err.message}`);
  });

  next();
}

module.exports = logUserActivity;
