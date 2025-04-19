// server/controllers/userController.js

const getUserProfile = (req, res) => {
    // Dummy data for now
    res.json({ username: "monal", email: "monal@example.com" });
  };
  
  module.exports = { getUserProfile };
  