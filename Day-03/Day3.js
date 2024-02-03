const {exec} = require("child_process");
const { error } = require("console");
const { stdout, stderr } = require("process");
function executeCommand(command){
    exec(command,(error,stdout,stderr)=>{
        if(error){
            console.error('error handling command : ${error.message}');
            return;
        }
        if(stderr){
            console.error('command stderr: ${stderr}');
            return;
        }
        console.log('command output :');
        console.log(stdout);
    })
}
executeCommand('dir');
executeCommand('echo "Hello, World.js!"');