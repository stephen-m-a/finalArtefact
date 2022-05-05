const Leader = require('../models/business_leader.js');

const addLeader = async (req, res) => {
  try {
    const existingLeader = await Leader.findOne({ name: req.body.name }).exec();
    if (existingLeader) {
      return res.status(401).json({
        error: "account already exists",
        success: false,
      });
    }

    const leader = await Leader.create({
      name: req.body.name,
      image: req.file.path,
      desc: req.body.desc,
      link: req.body.link,
    });

    return res.status(200).json({
      success: true,
      data: leader,
    });
  } catch (error) {
    return res.status(500).json({
      error: "error adding business leader",
      success: false,
    });
  }
};

const getLeader = async (req, res) => {
  try {
    const { page, perPage, searchQuery } = req.query;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 50) || 50,
    };
    const data = await Leader.paginate(searchQuery, options);
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


const editLeader = async (req, res) => {
  try {
    const { _id } = req.headers;
    const image = {};

    const CompleteUpdate = await Leader.findByIdAndUpdate(
      req.headers._id,
      { $set: req.body },
      { new: true }
    );

    if (!CompleteUpdate) {
      res.status(400).json({
        message: "failed",
      });
    } else {
      res.json({
        success: true,
        data: CompleteUpdate,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteLeader = async (req, res) => {
  const { _id } = req.headers;
  try {
    const data = await Leader.findOneAndDelete({ _id: req.headers._id });
    if (!data) {
      res.status(404).json({ success: false, message: "not found" });
      return;
    }
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { addLeader, getLeader, editLeader, deleteLeader };