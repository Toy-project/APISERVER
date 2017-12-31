// Error Handler
function errorHandler(status, errors) {
  let err = {};
  let errorObj = errors || {};

  // set statusCode
  err.status = status || 500;

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
      err.message = errorObj.errors && errorObj.errors[0].message ? errorObj.errors[0].message : 'Server Error';
      err.errno = errorObj.original && errorObj.original.errno ? errorObj.original.errno : '';
      err.sqlState = errorObj.original && errorObj.original.sqlState ? errorObj.original.sqlState : '';
      //...
      break;
  }

  // return Error
  return err;
}

module.exports = errorHandler;