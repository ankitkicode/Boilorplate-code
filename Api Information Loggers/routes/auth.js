const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { userId, email, password } = req.body;
  if (!userId || !password) {
    res.locals.errorMessage = 'Missing userId or password';
    return res.status(400).send('❌ Missing userId or password');
  }
  res.locals.errorMessage = 'User LoggedIn Successfully ';
  res.send(`✅ Login attempt recorded for user: ${userId} with email: ${email}`);
});

router.post('/profile', (req, res) => {
  const { userId, email } = req.body;
  if (!userId || !email) {
    res.locals.errorMessage = 'Missing userId or email';
    return res.status(400).send('❌ Missing userId, name, or email');
  }

  res.send(`✅ Profile updated for user: ${userId}`);
});

router.post('/logout', (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.locals.errorMessage = 'Missing userId';
    return res.status(400).send('❌ Missing userId');
  }

  res.send(`✅ Logout recorded for user: ${userId}`);
});

module.exports = router;
