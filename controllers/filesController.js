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

const getUserFiles = async (req, res) => {
    const body = req.body
    // const documents = await Document.findOne().lean().exec()
    res.json(body)
}

const getFileByID = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'document Id required' })
    }

    const foundDocument = await Document.findById(id).exec()

    if (!foundDocument) {
        return res.status(400).json({ message: 'No document found' })
    }

    const docname = foundDocument.docname

    res.sendFile(`/files/${docname}`, { root: '.' })




}

const deleteUserFiles = async (req, res) => {
    const { id } = req.params


    if (!id) {
        return res.status(400).json({ message: 'document Id required' })
    }

    const foundDocument = await Document.findById(id).exec()
    const docname = foundDocument.docname
    console.log(docname)

    if (!foundDocument) {
        return res.status(400).json({ message: 'No document found' })
    }

    console.log(foundDocument);

    fs.unlink(`./files/${docname}`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File deleted successfully');
    });

    const result = await foundDocument.deleteOne()



    const reply = `Document name ${result.docname} with ID ${result._id} deleted`

    res.json(reply)




}

module.exports = {

    getAllFiles,
    getFileByID,
    getUserFiles,
    deleteUserFiles

}