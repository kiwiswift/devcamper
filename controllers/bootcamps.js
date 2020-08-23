// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      message: 'Display all bootcamps',
      hello: req.hello,
    });
};

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Display single bootcamps' });
};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create new bootcamps' });
};

// @desc        Udpdate new bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Update bootcamps' });
};

// @desc        Delete new bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Delete bootcamps' });
};
