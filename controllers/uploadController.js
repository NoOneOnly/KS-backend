const { log } = require('console')
const path = require('path')
const Document = require('../models/Document')
const User = require('../models/User')
const fs = require('fs')

const getAllFiles = async (req, res) => {
    const documents = await Document.find().lean()

    // If no notes 
    if (!documents?.length) {
        return res.status(400).json({ message: 'No document found' })
    }

    // Add username to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    const documentsWithUser = await Promise.all(documents.map(async (document) => {
        const user = await User.findById(document.user).lean().exec()
        return { ...document, username: user.username }
    }))

    res.json(documentsWithUser)
}


const createNewDocument = async (req, res) => {
    const { docname } = req.body

    // Confirm data
    if (!docname) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Document.findOne({ docname }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate document name' })
    }

    // Create and store the new user 
    const document = await Document.create({ docname })

    if (document) { // Created 
        return res.status(201).json({ message: 'New document has been stored and saved' })
    } else {
        return res.status(400).json({ message: 'Invalid document data received' })
    }

}


const uploadFile = async (req, res) => {
    const files = req.files
    const data = req.body
    // console.log(files);

    console.log(data);

    const user = data.user
    const namafile = data.namafile
    const ekstension = data.ekstension


    const newDocname = `${user}_${namafile}.${ekstension}`

    const duplicate = await Document.findOne({ docname: newDocname })

    if (duplicate) {

        Object.keys(files).forEach(key => {


            // const docname = files[key].name
            // const newDocname = `${user}_${namafile}.${ekstension}`

            console.log(files[key]);





            fs.unlink(`./files/${newDocname}`, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('File deleted successfully and will be updated');
            });

            const filePath = path.join(__dirname, '../files', newDocname)



            files[key].mv(filePath, async (err) => {

                // Document.docname = newDocname

                const document = await Document.findOneAndUpdate(
                    { docname: newDocname },
                    { docname: newDocname, user }
                )

                if (document) { // Created 
                    return res.status(201).json({ message: 'New document has been stored and updated' })
                } else if (err) {
                    return res.status(500).json({ status: "error", message: err })
                } else {
                    return res.status(400).json({ message: 'Invalid document data received' })
                }

            })
        })

    } else {
        Object.keys(files).forEach(key => {


            // const docname = files[key].name
            const newDocname = `${user}_${namafile}.${ekstension}`

            console.log(files[key]);




            const filePath = path.join(__dirname, '../files', newDocname)



            files[key].mv(filePath, async (err) => {
                const document = await Document.create({ docname: newDocname, user })
                if (document) { // Created 
                    return res.status(201).json({ message: 'New document has been stored and saved' })
                } else if (err) {
                    return res.status(500).json({ status: "error", message: err })
                } else {
                    return res.status(400).json({ message: 'Invalid document data received' })
                }

            })
        })

    }


    // const document = await Document.create({ docname })

    // return res.json({ status: 'success', message: Object.keys[files].String() })
}

const deleteFile = async (req, res) => {
    const { docname } = req.body
    if (!docname) {
        return res.status(400).json({ message: 'All fields are required' })
    }
}

module.exports = {
    uploadFile,
    getAllFiles,
    createNewDocument,
    deleteFile
}