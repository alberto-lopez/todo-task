const argv = require('./config/yargs').argv;
const colors = require('colors')

const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let taskList = toDo.getList(argv.filter);

        console.log('========================='.green);
        for (let task of taskList) {
            console.log(` ${task.description} - Status: ${task.completed}`.yellow)
        }
        console.log('========================='.green);

        break;
    case 'update':
        let status = toDo.update(argv.description, argv.completed);
        if (status) console.log(`Task '${argv.description}' updated with status completed = ${argv.completed}`.green);
        else console.log(`Task '${argv.description}' couldn't be updated`.red);
        break;
    case 'deleteTask':
        let deleteTask = toDo.deleteTask(argv.description);
        console.log(deleteTask);
        break;
    default:
        console.log('Command not available'.red);
}
