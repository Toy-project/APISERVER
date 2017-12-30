// Error Handler
function errorHandler(status) {
  let err = {};

  // set statusCode
  err.status = status;

  // set error detail
  switch(status) {
    // error Bad Requset
    case 400:
      err.message = 'Bad Request';
      //...
      break;

    // error Unauthorized
    case 401:
      err.message = 'Unauthorized';
      //...
      break;

    // error NotFound
    case 404:
      err.message = 'Not Found';
      //...
      break;

    // default
    default:
      err.message = 'Server Error';
      break;
  }

  // return Error
  return err;
}

module.exports = errorHandler;