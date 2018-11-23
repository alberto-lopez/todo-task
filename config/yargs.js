const description = {
    demand: true,
    alias: 'd',
    desc: 'To do task description'
};

const completed = {
    alias: 'c',
    default: true,
    desc: 'Update task status'
};

const argv = require('yargs')
    .command('list', 'Show a tasks list', {
        filter : {
            alias: 'f',
            desc: 'Filter by status'
        }
    })
    .command('create', 'Create new task', {
        description
    })
    .command('update', 'Update existent task', {
        description,
        completed
    })
    .command('deleteTask', 'Delete an existing task', {
        description
    })
    .help()
    .argv;


module.exports = {
    argv
}