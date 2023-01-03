module.exports = ({ name, price1, price2, receiptId, subSatu, subDua, subTiga }) => {
    const today = new Date();
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Klausul 9</title>
        <style>
            body{
                min-height: 1000px;
            }
    
            .container{
                /* width: 50%; */
                margin: auto;
            }
    
            table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            }
    
            .table{
                width: 100%;
            }
    
    
            .body{
                margin-top: 100px;
            }
            .body h3{
                color: #4d5bf9;
            }
    
            .body p span {
                color: red;
            }
            .body p #underline {
                color: black;
                text-decoration: underline;
            }
            .tableContainer{
                border: 1px solid #eee;
                padding: 30px;
                box-shadow: 0 0 10px rgb(0 0 0 / 15%);
            }
         
    
        </style>
    </head>
    <body>
        <div class="container" >
                <div class="tableContainer">
                    <table class="table">                    
                        <tbody>
                          <tr>
                            <th scope="row" rowspan="4" style="width: 20%;"><img  src="https://i2.wp.com/cleverlogos.co/wp-content/uploads/2018/05/reciepthound_1.jpg?fit=800%2C600&ssl=1"
                                style="width:100%; max-width:156px;"></th>
                            <td rowspan="2" style="text-align: center; width: 50%;">${name}</td>
                            <td style="width: 10%;">No. Dok</td>
                            <td>${price1}</td>
                          </tr>
                          <tr>
                           
                            
                            <td>No. Rev</td>
                            <td>${receiptId}</td>
                          </tr>
                          <tr>
                           
                            <td rowspan="2" style="text-align: center;">Pedoman Sistem Manajemen Energi</td>
                            <td>Tgl</td>
                            <td>${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</td>
                          </tr>
                          <tr>
                           
                          
                            <td>Hal</td>
                            <td>${price2}</td>
                          </tr>
                        </tbody>           
                    </table>
                    <div class="body">
                        <h3>Klausul 9. Evaluasi Kinerja</h3>
                        <p><i>Performance Evaluation</i></p>
                        <h4>9.1 Pemantauan, pengukuran, analisis dan evaluasi kinerja energi dan EnMS</h4>
                        <p>${subSatu}.</p>
    
                        <h4>9.2 Audit internal</h4>
                        <p><i>Internal Audit</i></p>
                        <p>${subDua}</p>
    
                        <h4>9.3 Tinjauan manajemen</h4>
                        <p><i>Management review</i></p>
                        <p>${subTiga}</P>
                        <ul style="list-style-type:none;">
                            <li>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;................</li>
                            <li>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;................</li>
                            
                            
                        </ul>
  
                    </div>
    
                </div>
                
            
        </div>
    </body>
    </html>
    `;
};