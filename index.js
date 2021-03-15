const {getAllFilePathsWithExtension, readFile} = require('./fileSystem');
const {readLine} = require('./console');

const files = getFiles();

console.log('Please, write your command!');
readLine(processCommand);

function getFiles() {
    const filePaths = getAllFilePathsWithExtension(process.cwd(), 'js');
    return filePaths.map(path => readFile(path));
}

function processCommand(command) {
    switch (command) {
        case 'exit':
            process.exit(0);
            break;
        case 'show':
            let file = getFiles()
            let result = []
            for (let f of file) {
                f = f.split('\n')
                for (let i of f) {
                    if (i.indexOf('// TODO') > -1) {
                        result.push(i)
                    }
                }
            }
            //return result
            console.log(result)
            break;

        /*case 'important':
            let imp = show()
            let re = []
            for (i of imp){
                if (i.indexOf('!') > -1){
                     re.push(i)
                }

            }*/
            console.log(re)


            break;




        default:
            console.log('wrong command');
            break;
            
    }
}

// TODO you can do it!
