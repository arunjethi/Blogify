const { validToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const cookieValue = req.cookies[cookieName];
    if (!cookieValue) {
      return next();
    }
    try {
      const userPayload = validToken(cookieValue);
      req.user = userPayload;
    } catch (error) {
    }
    return next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
