// c:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath D:\Projects\Node\mongo-db-data

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


// var newTodo = new Todo(
//     {
//         text: 'Edit this video    '
//     });

// newTodo.save()
//     .then((result) => {
//         console.log(result);
//     },
//     err => {
//         console.log('Unable to save todo', err);
//     });


var Users = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        require: true,
        minlength: 1
    },
    todos: {
        type: Array,
        require: false
    }
});
var newUser = new Users({email:'adrashpul@gmai.com  '});

newUser.save()
    .then((result) => {
        console.log(result);
    },
    err => {
        console.log('Unable to save User', err);
    })