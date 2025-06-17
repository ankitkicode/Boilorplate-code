const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const logUserActivity = require('./middleware/logMiddleware');
const trackEvents = require('./routes/trackEvents');

app.use(express.json());

// 👇 Automatically logs all API calls with userId
app.use(logUserActivity);

app.use('/auth', authRoutes);
app.use(trackEvents);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
