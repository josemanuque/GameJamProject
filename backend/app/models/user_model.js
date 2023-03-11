const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String
        }
    },
    {
        versionKey: false,
    }
)

module.exports = mongoose.model('user', UserScheme)