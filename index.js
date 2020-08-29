const fs = require('fs');
const { exec } = require('child_process');

fs.readdir(__dirname, (err, files) => {
    files.filter(x => !x.includes('.js')).forEach((file, index) => {
        exec(`cd ${file} && sh deploy.sh`, (err, stdout, stderr) => {
            if (err) {
                //some err occurred
                console.error(err)
            } else {
                // the *entire* stdout and stderr (buffered)
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            }
        });
    })
})

