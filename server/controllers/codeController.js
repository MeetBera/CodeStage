const runCodeSecurely = (req, res) => {
    const { language, code } = req.body;
    // TODO: execute code securely (e.g., in Docker container)
    console.log(`Running ${language} code:`, code);
    res.json({ output: "Dummy output", error: null });
  };
  
  module.exports = {
    runCodeSecurely,
  };
  