const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  //Log to Console for dev
  console.log('*** Error ***', error);

  //Mongoose bad ObjectId
  if (error.name === 'CastError') {
    const message = `Bootcamp not founc with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose Duplicate key
  if (error.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  //Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
