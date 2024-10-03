const jwt = require("jsonwebtoken");
const user = require("../Model/Model");

const verification = async (req, res, next) => {
  try {
    const headers = req.headers["authorization"];

    if (!headers) {
      return res.status(401).send({
        status: false,
        message: "Authorization header missing",
      });
    }

    const token = headers.split(" ")[1];
    
    if (!token) {
      return res.status(401).send({
        status: false,
        message: "Token missing",
      });
    }

    const decoded = jwt.verify(token, "secret", { expiresIn: "1d" });
    console.log(decoded);

}
catch(err){
console.log("Error Fetching User",err)
}
next()

}

module.exports = { verification,user }
