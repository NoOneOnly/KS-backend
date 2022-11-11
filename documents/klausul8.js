module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
    return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Klausul 8</title>
       <style>
           body{
               min-height: 1000px;
           }
   
           .container{
              
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
                       <h3>Klausul 8. Operasi</h3>
                       <p>Operation</p>
                       <h4>8.1 Perencanaan dan pengendalian operasional</h4>
                       <p><span>Organisasi</span> merencanakan(plan), menerapkan(implement), dan mengendalikan (control) proses, terkait dengan SEU-nya, yang diperlukan untuk memenuhi persyaratan dan mengimplementasikan tindakan yang ditentukan.</p>
                      
                       <p><span>Organisasi</span> memastikan bahwa SEU atau proses yang terkait dengan SEU-nya yang dialihdayakan(outsource) harus dikendalikan.</p>
   
                       <h4>8.2 Desain</h4>
                       <p>Design</p>
                       <p><span>Organisasi</span> mempertimbangkan peluang peningkatan kinerja energi (<i>energy performance improvement opportunities</i>), dan pengendalian operasional (<i>operational control</i>) pada desain baru, modifikasi dan renovasi atas fasilitas, peralatan, sistem, dan proses yang menggunakan-energi (<i>energy-using</i>) yang dapat berdampak signifikan terhadap kinerja energi; selama masa operasi yang direncanakan atau diharapkan. </p>
                       <h4>8.3 pengadaan</h4>
                       <p><i>Procurement</i></p>
                       <p><span>Organisasi</span> menetapkan dan menerapkan kriteria untuk mengevaluasi kinerja energi selama masa operasi yang direncanakan atau diharapkan (<i>over the planned or expected operating lifetime</i>), bilamanapengadaan energi menggunakan <span id="underline">produk, peralatan, dan layanan yang diharapkan memiliki dampak signifikan</span> pada kinerja energgi organisasi.</p>
                       <p>Bila pengadaan energi menggunakan produk, peralatan, dan layanan yang memiliki, atau dapat memiliki dampak (<i>impact</i>) terhadap SEU, maka <span>organisasi</span> harus memberi tahu pemasok(<i>suppliers</i>) bahwa kinerja energi adalah salah satu kriteria evaluasi untuk pengadaan (<i>procurement</i>).</p>
   
       
   
                       
   
                   </div>
   
               </div>
               
           
       </div>
   </body>
   </html>
    `;
};