const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const documentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        docname: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Document', documentSchema)