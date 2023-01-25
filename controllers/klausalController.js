const User = require('../models/User')
const FormIsu = require('../models/FormIsu')

const getFormIsu = async (req, res) => {
    // Get all users from MongoDB
    const formIsu = await FormIsu.find().lean()

    // If no users 
    if (!formIsu?.length) {
        return res.status(400).json({ message: 'No form Isu found' })
    }
    const formWithUser = await Promise.all(formIsu.map(async (form) => {
        const user = await User.findById(form.user).lean().exec()
        return { ...form, username: user.username }
    }))

    res.json(formWithUser)
}

const createFormIsu = async (req, res) => {
    const { user, deskripsi, jenisisu, kegiatanOperasi, lokasiSektor, modelbisnis, ukuranStrukturWewenang, urgensiisu } = req.body



    // Confirm data
    if (!user || !deskripsi || !jenisisu || !kegiatanOperasi || !modelbisnis || !ukuranStrukturWewenang || !lokasiSektor || !urgensiisu) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title note
    // const duplicate = await FormIsu.findOne({ title }).collation({ locale: 'en', strength: 2 }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: 'Duplicate note title' })
    // }

    // Create and store the new user 
    const formIsu = await FormIsu.create({ user, deskripsi, jenisisu, kegiatanOperasi, lokasiSektor, modelbisnis, ukuranStrukturWewenang, urgensiisu })

    if (formIsu) { // Created 
        return res.status(201).json({ message: 'New Form Isu created' })
    } else {
        return res.status(400).json({ message: 'Invalid Form Isu data received' })
    }
}

const updateFormIsu = async (req, res) => {
    const { id, deskripsi, jenisisu, kegiatanOperasi, lokasiSektor, modelbisnis, ukuranStrukturWewenang, urgensiisu } = req.body
    // Confirm data
    if (!id || !deskripsi || !jenisisu || !kegiatanOperasi || !modelbisnis || !ukuranStrukturWewenang || !lokasiSektor || !urgensiisu) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // Confirm note exists to update
    const formIsu = await FormIsu.findById(id).exec()
    if (!formIsu) {
        return res.status(400).json({ message: 'Form Isu not found' })
    }


    formIsu.deskripsi = deskripsi
    formIsu.jenisisu = jenisisu
    formIsu.kegiatanOperasi = kegiatanOperasi
    formIsu.lokasiSektor = lokasiSektor
    formIsu.modelbisnis = modelbisnis
    formIsu.ukuranStrukturWewenang = ukuranStrukturWewenang
    formIsu.urgensiisu = urgensiisu

    const updatedFormIsu = await formIsu.save()

    res.json(`Form Isu milik user '${updatedFormIsu.user}' updated`)

}


module.exports = {
    getFormIsu,
    createFormIsu,
    updateFormIsu
}