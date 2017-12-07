const {ObjectID} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5a27f0f28a3ea162f00c8b89';


if(!ObjectID.isValid(id)){
    console.log('Id not valid');
    return;
}

Todo.find({
    _id: id
}).then(todos => {
    if (!todo) {
        console.log('id not found')
    }
    console.log(todos);
}).catch(e => {
    console.log(e);
});


Todo.findOne({
    _id: id
}).then(todo => {
    console.log(todo);
}).catch(e => {
    console.log(e);
});

Todo.findById(id).then(todo => {
    console.log(todo);
}).catch(e => {
    console.log(e);
});


