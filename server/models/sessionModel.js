const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    codeLanguage: { type: String, default: 'javascript' },
    codeContent: { type: String, default: '' },
    messages: [{ sender: String, text: String, timestamp: Date }],
    score: { type: Number },
    feedback: { type: String }
}, {timestamps: true})

module.exports = mongoose.model('sessionModel', sessionSchema)