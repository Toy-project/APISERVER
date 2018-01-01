const path = require('path');
const jwt = require('jsonwebtoken');
const error = require(path.join(__dirname, './errorHandler'));

const TOKEN_SECRET = 'secret';

// Generate Token
exports.tokenGenerator = function(result) {
  const resultData = result;

  return jwt.sign(resultData, TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: 60 * 60 // 1hour
  });
};

// isAuthenticated
exports.isAuthenticated = function(token) {
  const result = jwt.verify(token, TOKEN_SECRET, (err, decode) => {
    if(err) {
      return {
        isValid: false
      };
    }
    else {
      const exp = new Date(decode.exp * 1000);
      const now = Date.now();
      
      if(now < exp) {
        return {
          isValid: true,
          userInfo: decode
        };
      }
      else {
        return {
          isValid: false
        };
      }
    }
  });

  return result;
};

// Ensure Authorized
exports.ensureAuthorized = function(req, res, next) {
  // set error
  let err = error(401);

  // request header
  const authorization = req.headers.authorization || req.headers.Authorization;
  
  if(!authorization) {
    next(err);
  }
  else {
    const authorizationToken = authorization.split(' ')[1] || null;
    const isAuthenticated = authorizationToken ? module.exports.isAuthenticated(authorizationToken) : null;

    if(isAuthenticated.isValid) {
      next();
    }
    else {
      next(err);
    }
  }
};
