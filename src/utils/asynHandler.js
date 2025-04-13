const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

/* const asyncHandler = () => {};
const asyncHandler = (fun) => () => {}; //higher order function
const asyncHandler = (fun) => async () => {}; */

//Using try-catch
/* const asyncHandler = (fn) => async (req, res, next) => {
  try {
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
}; */
