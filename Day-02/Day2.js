const fs = require('fs');

function writeToFile(filepath,content){
    fs.writeFile(filepath,content,'utf-8',err =>{
        if(err){
            console.error('Error Writing In The File:',err);
        }else{
            console.log('Data Written to ',filepath);
        }
    });
}
writeToFile('test_files/output_file.txt',"Data is secured in the output file");
writeToFile('test_files/non_existing_files/non_existing_file.txt',"Data in a non-existing file");