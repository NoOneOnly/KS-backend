module.exports = ({ name, price1, price2, receiptId, subSatu, subDua, subTiga, subEmpat }) => {
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
                        <h3>Klausul 4. Konteks Organisasi</h3>
                    
                            <h4>4.1 Memahami organisasi dan konteksnya</h4>
                            <p>${subSatu}.</p>
                    
                            <h4>4.2 Memahami kebutuhan dan harapan pihak yang berkepentingan</h4>
                            <p>${subDua}. </p>
                            
                            <h4>4.3 Menentukan ruang lingkup sistem manajemen energi</h4>
                            <p>${subTiga}.</p>  
                    
                            <h4>4.4 Sistem manajemen energi</h4>
                            <p>${subEmpat}.</p>  
                   </div>
   
               </div>
               
           
       </div>
   </body>
   </html>
    `;
};