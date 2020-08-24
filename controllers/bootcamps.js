const Bootcamp = require('../models/BootCamp');
const ErrorResponse = require('../utils/errorResponse');
// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    next(err);
  }
};

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      throw '';
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    // res.status(400).json({ success: false });
    next(err);
  }
};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

// @desc        Udpdate new bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      throw '';
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

// @desc        Delete new bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};
