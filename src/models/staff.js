const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema

const StaffSchema = new Schema({
    image: {
        type: String,
        default: ''
    },
    name: {
        type: String
    },
    jobtitle: {
        type: String
    },
    text: {
        type: String
    },
    link: [{
        type: String
    }]
})

StaffSchema.plugin(mongoosePaginate);

const Staff = mongoose.model('Staff', StaffSchema)

module.exports = Staff