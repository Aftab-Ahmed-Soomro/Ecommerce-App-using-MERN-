const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(200).json({
            message : "Please login first",
            error : true,
            success : false
        })
    }

    // verify a token symmetric
    jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
      console.log(err);
      console.log("decoded",decoded);

      if (err) {
        console.log("JWT verification error:", err);
        return res.status(403).json({
          message: "Invalid or Expired Token",
          error: true,
          success: false,
        });
      }

      req.userId = decoded?.tokenData?._id;

      next()

    });

    // console.log("token", token);

  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
