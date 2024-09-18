const sessionIdToUser = new Map();    // a hash map


// This will set the session id to the user
function setUser(id , user) {
    sessionIdToUser.set(id, user);
}

// This will get the user with the required id
function getUser(id) {
    return sessionIdToUser.get(id);
}

module.exports = {
    setUser,
    getUser,
};