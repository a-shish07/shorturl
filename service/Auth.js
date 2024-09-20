const jwt = require("jsonwebtoken")
const secret = "Ashiish._."


// This will create the tokens for the users
function setUser(user) {
    return jwt.sign({
        _id: user.id,
        email: user.email,
    }, secret);
}

// This will get the user with the required id
function getUser(token) {
    if(!token) return null; 
    return jwt.verify(token, secret);
}

module.exports = {
    setUser,
    getUser,
};