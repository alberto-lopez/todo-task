const fs = require('fs');
const colors = require('colors');


let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Task couldn\'t be saved', err);
    });
};

const readDB = () => {
    try {
        toDoList = require('../db/data.json')
    } catch (error) {
        toDoList = []
    }
};

const create = (description) => {

    readDB();

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);
    saveDB();

    return toDo;
};

const update = (description, completed = true) => {
    readDB();

    let index = toDoList.findIndex(task => task.description === description);

    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (description) => {
    readDB();

    let newToDoList = toDoList.filter(task => task.description !== description);

    if (toDoList.length === newToDoList.length) {
        return false;
    } else {
        toDoList = newToDoList;

        saveDB();

        return true;
    }
};

const getList = (filter) => {
    readDB();
    if (filter === undefined) return toDoList;
    else return toDoList.filter(task => task.completed === (filter == 'true'));
};

module.exports = {
    create,
    getList,
    update,
    deleteTask
};