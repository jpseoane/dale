//Modulo Sistema operativo
const os = require('os');
//Modulo file System
const fs = require('fs');





/*console.log(os.platform());

console.log(os.release());

console.log('free mem:', os.freemem(), 'bytes');
console.log('Total mem:', os.totalmem(), 'bytes');*/

fs.writeFile('./texto.txt','linea uno', function(error){
    if (error){
        console.log(error);
    }else
    {console.log('Arhivo creado');}
    
});

console.log('Ultima linea de codigo');