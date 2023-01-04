const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const winston = require('winston');

module.exports = () => {
    mongoose.connect('mongodb://localhost/LibraryDatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> winston.info('Mongo Db Connected'))
}