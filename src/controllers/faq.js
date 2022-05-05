const Faq = require('../models/faq.js');

const addFaq = async (req, res) => {
    try {
        const latestFaq =  new Faq({
            question : req.body.question
        })

        await latestFaq.save();

        return res.status(200).json({
            success: true,
            data: latestFaq,
        });

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const addAnswer = async (req, res) => {
    try {
        const faq = await Faq.findByIdAndUpdate(req.headers._id, {
            $push: { answer: req.body.answer}
        }, {new: true});


        return res.status(200).json({
            success: true,
            data: faq
        });

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const getFAQ = async (req, res) => {
    try {
        const { page, perPage, searchQuery } = req.query;
        const options = {
          page: parseInt(page, 10) || 1,
          limit: parseInt(perPage, 50) || 50,
        };
        const data = await Faq.paginate(searchQuery, options);
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
        return res.status(500).json({
            error: "error uploading file",
            success: false,
        });
    }
}

const deleteFaq = async (req, res) => {
  const { _id } = req.headers;
  try {
    const data = await Faq.findOneAndDelete({ _id: req.headers._id });
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

module.exports = { addFaq, addAnswer, getFAQ, deleteFaq }