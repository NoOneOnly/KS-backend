const pdf = require('html-pdf');
const pdfTemplate = require('../documents/klausul4')

var options = { format: 'Letter' };

const getAllKlausul = async (req, res) => {

    res.sendFile(`/klausul4.pdf`, { root: '.' })
}
const createNewKlausul = async (req, res) => {
    if (!req?.body?.name || !req?.body?.receiptId || !req?.body?.price1 || !req?.body?.price2 || !req?.body?.subSatu || !req?.body?.subDua || !req?.body?.subTiga || !req?.body?.subEmpat) {

        return res.status(400).json({ 'message': 'Data yang diterima tidak lengkap' });
    }



    try {
        pdf.create(pdfTemplate(req.body), options).toFile('klausul4.pdf', (err) => {
            if (err) {
                console.log(err);
                res.send(Promise.reject());
            }
            res.send(Promise.resolve());
        })
        // res.sendFile('/result.pdf', { root: '.' })
        // res.sendFile(path.join(__dirname, '..', 'result.pdf'));
        // res.sendFile(`${__dirname}/result.pdf`, { root: '.' })


        // res.status(201).json(result);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {
    getAllKlausul,
    createNewKlausul
}