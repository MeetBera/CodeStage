const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  starterCode: {
    type: String,
    required: true,
  },
  testCases: [
    {
      input: { type: String, required: true },
      output: { type: String, required: true },
    },
  ],
  language: {
    type: String,
    default: "javascript",
  },
}, { timestamps: true });

module.exports = mongoose.model("Question", QuestionSchema);
