const path = require('path');

function resolvePath(relativePath){
    const fullPath = path.resolve(relativePath);
    console.log('Resolved Path: ',fullPath);
}

resolvePath('../project/folder/file.txt');
resolvePath('nonexistant-folder/file.txt');