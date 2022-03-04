const Testimonial = require('../models/testimonials.js');

const addTestimonial = async (req, res) => {
    try {
        const testimonial = new Testimonial({
            name: req.body.name,
            text: req.body.text,
            image: req.file.path
          });
      
          await testimonial.save();
      
          return res.status(200).json({
            success: true,
            data: testimonial,
          });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getTestimonials = async (req, res) => {
  try {
    const { page, perPage, searchQuery } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 50) || 50,
    };
    const data = await Testimonial.paginate(searchQuery, options);
    if (!data) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
      return;
    } else {
      res.status(200).json({
        success: true,
        data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

const editTestimonial = async (req, res) => {
    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.headers._id, {$set: req.body}, {new: true})

        if(!updatedTestimonial) {
            res.status(404).json({
                message: 'failed to update'
            });
            return
        }

        return res.status(200).json({
            success: true,
            data: updatedTestimonial
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteTestimonial = async (req, res) => {
    const { _id } = req.headers;
  try {
    const data = await Testimonial.findOneAndDelete({ _id: req.headers._id });
    if (!data) {
      res.status(404).json({ success: false, message: "not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = { addTestimonial, getTestimonials, editTestimonial, deleteTestimonial }