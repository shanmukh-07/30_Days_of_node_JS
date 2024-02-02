const fs = require('fs').promises
async function readFileContent(filepath){
    try{
        const data = await fs.readFile(filepath,'utf8');
        console.log('File Content:- ');
        console.log(data);
    }catch(err){
        console.log('Error reading File: ,${err}');
    }
}
readFileContent('test_files/Text_Content.txt');
readFileContent('test_files/Empty_File.txt');
readFileContent('test_files/No_File.txt');