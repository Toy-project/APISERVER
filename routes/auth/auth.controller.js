const jwt = require('jsonwebtoken');
const TOKEN_SECRET = 'secret';

// Generate Token
function tokenGenerator(result) {
  const resultData = result;

  return jwt.sign(resultData, TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: 60 * 60 // 1hour
  });
}

// isAuthenticated
function isAuthenticated(token) {
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
}

// Ensure Authorized
function ensureAuthorized(req, res, next) {
  // set error
  let err = new Error('Unauthorized');
  err.status = 401;

  // request header
  const Authorization = req.headers.authorization || req.headers.Authorization;
  
  if(!Authorization) {
    next(err);
  }
  else {
    const AuthorizationToken = Authorization.split(' ')[1] || null;
    const isAuthenticated = AuthorizationToken ? module.exports.isAuthenticated(AuthorizationToken) : null;

    if(isAuthenticated.isValid) {
      next();
    }
    else {
      next(err);
    }
  }
}

exports.tokenGenerator = tokenGenerator;
exports.isAuthenticated = isAuthenticated;
exports.ensureAuthorized = ensureAuthorized;
