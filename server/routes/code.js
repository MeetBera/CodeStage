const express = require("express");
const { VM } = require("vm2");
const router = express.Router();

router.post("/run", (req, res) => {
  const { code } = req.body;

  try {
    const vm = new VM({
      timeout: 5000, // 1 second max execution time
      sandbox: {}
    });

    const result = vm.run(code);
    res.json({ output: String(result) });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;