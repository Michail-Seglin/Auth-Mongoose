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

async function updateUserDB(_id, user) {
    await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });
    const data = await TableUser.find();
    return data;
}

async function deleteUserDB(_id) {
    await TableUser.deleteOne({ _id: new ObjectId(_id) });

    const data = await TableUser.find();
    return data;
}

module.exports = { createUserDB, getUserByEmailDB, getUserAllDB, updateUserDB, deleteUserDB }