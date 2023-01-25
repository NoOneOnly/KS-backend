const getFormIsu = async (req, res) => {
    res.sendFile(`/FormIsuEksternaldanInternal.xlsx`, { root: '.' })
}
const getFormKebutuhan = async (req, res) => {
    res.sendFile(`/FormKebutuhan.xlsx`, { root: '.' })
}
const getFormPenilaian = async (req, res) => {
    res.sendFile(`/FormPenilaianEnergi.xlsx`, { root: '.' })
}
const getFormKriteria = async (req, res) => {
    res.sendFile(`/FormKriteriaResikoEnergi.xlsx`, { root: '.' })
}
const getFormPenggunaan = async (req, res) => {
    res.sendFile(`/FormPenggunaanEnergiSignifikan.xlsx`, { root: '.' })
}
const getFormPerencanaan = async (req, res) => {
    res.sendFile(`/FormPerencanaanPengumpulanDataEnergi.xlsx`, { root: '.' })
}
const getFormJenisAplikasi = async (req, res) => {
    res.sendFile(`/FormJenisdanAplikasiENPI.xlsx`, { root: '.' })
}

module.exports = {
    getFormIsu,
    getFormKebutuhan,
    getFormPenilaian,
    getFormKriteria,
    getFormPenggunaan,
    getFormPerencanaan,
    getFormJenisAplikasi
}