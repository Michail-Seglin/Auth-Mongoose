const { TableUser, ObjectId } = require('../db')

async function createUserDB(user) {
    await TableUser.create(user);
    const data = await TableUser.find();
    return data;
}

async function getUserAllDB() {
    const data = await TableUser.find();
    return data;
}
async function getUserByEmailDB(user) {
    const data = await TableUser.find({ email: user.email });
    return data
}

module.exports = { createUserDB, getUserByEmailDB, getUserAllDB }