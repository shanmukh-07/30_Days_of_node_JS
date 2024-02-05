const path = require("path")

function checkFileExtention(filepath, expecting){
    const actualpath = path.extname(filepath);
    if(actualpath == expecting){
        console.log("File has the expected extention: ",expecting);
    }else{
        console.log("File does not have the expected extention. Expected: ",expecting," Actual: ",actualpath);
    }
}
checkFileExtention('file.txt','.txt');
checkFileExtention('img.png','.jpg');