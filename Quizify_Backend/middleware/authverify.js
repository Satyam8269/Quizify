const jwt = require("jsonwebtoken");


// Creating a middleware to verify the token
const authVerify = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = { userId: decodedToken.id };
        return next();
    }catch(err) {
        console.log(` error from server ${JSON.stringify(err)} `)
    }
}


module.exports = authVerify;