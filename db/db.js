const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const ConnectDb = async () => {
    await mongoose.connect('mongodb+srv://stephen:testBame@bame.qesx6.mongodb.net/bame?retryWrites=true&w=majority', options);
    console.log('Db connected.....')
}

module.exports = ConnectDb;