// c:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath D:\Projects\Node\mongo-db-data
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');