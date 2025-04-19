const getInterviewSession = (req, res) => {
    const interviewId = req.params.id;
    // TODO: fetch from DB (for now just return dummy)
    res.json({ message: `Interview session for ID ${interviewId}` });
  };
  
  const createInterview = (req, res) => {
    // TODO: Save session in DB
    res.json({ message: "Interview session created" });
  };
  
  module.exports = {
    getInterviewSession,
    createInterview,
  };
  