const mongoose = require('mongoose')

const formIsuSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        jenisisu: {
            type: String,
            required: true
        },
        deskripsi: {
            type: String,
            required: true
        },
        kegiatanOperasi: {
            type: String,
            required: true
        },
        lokasiSektor: {
            type: String,
            required: true
        },
        modelbisnis: {
            type: String,
            required: true
        },
        ukuranStrukturWewenang: {
            type: String,
            required: true
        },
        urgensiisu: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('FormIsu', formIsuSchema)