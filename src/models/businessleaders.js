const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema

const LeaderSchema = new Schema({
    image: {
        type: String,
        default: ''
    },
    name: {
        type: String
    },
    desc: {
        type: String
    },
    link: {
        type: String
    }
})

LeaderSchema.plugin(mongoosePaginate);

const Leader = mongoose.model('Leader', LeaderSchema)

module.exports = Leader