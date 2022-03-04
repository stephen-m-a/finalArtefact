const Staff = require('../models/staff.js');

const addStaff = async (req, res) => {
    try {
        const staff = new Staff({
            name: req.body.name,
            jobtitile: req.body.jobtitle,
            text: req.body.text,
            link: req.body.link,
            image: req.file.path
          });
      
          await staff.save();
      
          return res.status(200).json({
            success: true,
            data: staff,
          });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getStaff = async (req, res) => {
  try {
    const { page, perPage, searchQuery } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 50) || 50,
    };
    const data = await Staff.paginate(searchQuery, options);
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

const editStaff = async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.headers._id, {$set: req.body}, {new: true})

        if(!updatedStaff) {
            res.status(404).json({
                message: 'failed to update'
            });
            return
        }

        res.status(200).json({
            success: true,
            data: updatedStaff
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteStaff = async (req, res) => {
    const { _id } = req.headers;
  try {
    const data = await Staff.findOneAndDelete({ _id: req.headers._id });
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

module.exports = { addStaff, getStaff, editStaff, deleteStaff }