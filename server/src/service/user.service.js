const { createUserDB, getUserByEmailDB } = require('../repository/user.repository');;
const bcrypt = require('bcrypt');
const createToken = require('../helper/jwt');


const salt = 10;

async function createUser(user) {
    const findUser = await getUserByEmailDB(user);
    if (findUser.length) throw new Error('is user already exists');
    const hashPassword = await bcrypt.hash(user.password, salt);


    const data = await createUserDB({ ...user, password: hashPassword });
    if (!data.length) throw new Error('user is not created');
    return data;
}

async function authUser(user) {
    const findUser = await getUserByEmailDB(user);
    if (!findUser.length) throw new Error('this email is invalid');
    if (!(await bcrypt.compare(user.password, findUser[0].password))) throw new Error('password is invalid');
    const accessToken = createToken
    return findUser;

}
module.exports = { createUser, authUser }