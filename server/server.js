// c:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath D:\Projects\Node\mongo-db-data
const config = require('../config/config');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const _ = require('lodash');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save()
        .then(doc => {
            res.send(doc);
        },
        err => {
            res.status(400).send(err);
        });
});

app.get('/todos', (req, res) => {
    var todos = Todo.find()
        .then((todos) => {
            res.status(200).send({ todos });
        }, err => {
            res.status(400).send(err)
        });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params['id'];
    if (!ObjectID.isValid(id)) {
        res.status(404).send('Id is not valid')
    }
    Todo.findById(id).then(
        todo => {
            if (!todo) {
                res.status(404).send(null);
            }
            res.status(200).send(todo);
        }
    ).catch(err => {
        res.status(404).send(err);
    })
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params['id'];
    if (!ObjectID.isValid(id)) {
        res.status(404).send('Id is not valid');
    }

    Todo.findByIdAndRemove(id).then(todo => {
        if (!todo) {
            res.status(404).send();
        }
        res.status(200).send({ todo });
    }).catch(err => {
        res.status(404).send();
    });
});


app.patch('/todos/:id', (req, res) => {
    var id = req.params['id'];

    if (!ObjectID.isValid(id)) {
        res.status(404).send('Id is not valid');
    }

    var body = _.pick(req.body, ['text', 'completed']);

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(
        id,
        { $set: body },
        { new: true }
    ).then(todo => {
        if (!todo) {
            res.status(404).send();
        }

        res.send({ todo });
    }).catch(err => {
        res.status(400).send(err);
    });
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = { app };