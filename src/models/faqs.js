const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema

const FaqSchema = new Schema({
    question: {
        type: String,
    },
    answer: [{
        type: String,
    }],
})

FaqSchema.plugin(mongoosePaginate);

const Faq = mongoose.model('Faq', FaqSchema)

module.exports = Faq