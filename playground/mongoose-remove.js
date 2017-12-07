const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/todo');

// Todo.remove({}).then(result => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// .then(result=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5a2915cc954d20ea096518af')
    .then(todo => {
        console.log(todo);
    });

Todo.findOneAndRemove({
    _id: '5a2915cc954d20ea096518af'
})
    .then(todo => {
        console.log(todo);
    });