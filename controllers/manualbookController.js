const getAllManualBook = async (req, res) => {

    res.sendFile(`/BukuPanduanAplikasi.pdf`, { root: '.' })
}

module.exports = {
    getAllManualBook
}