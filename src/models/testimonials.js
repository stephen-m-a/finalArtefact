const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema

const TestimonialSchema = new Schema({
    image: {
        type: String,
        default: ''
    },
    name: {
        type: String
    },
    text: [{
        type: String
    }]
})

TestimonialSchema.plugin(mongoosePaginate);


const Testimonial = mongoose.model('Testimonial', TestimonialSchema)

module.exports = Testimonial