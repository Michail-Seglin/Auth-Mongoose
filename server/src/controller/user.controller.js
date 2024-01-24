const { createUser, authUser, getUserAll, updateUser, deleteUser } = require('../service/user.service');
const route = require('express').Router();
const { buildResponse } = require('../helper/buildResponse')
const createToken = require('../helper/jwt')


route.post("/", async (req, res) => {
    try {
        const data = await createUser(req.body);
        const token = createToken(data[data.length - 1]);
        res.cookie('acccess_token', token, {
            httpOnly: false,
            secure: true
        });

        buildResponse(res, data, 200)

    } catch (er) {
        buildResponse(res, er.message, 404)
    }
})

route.post('/auth', async (req, res) => {
    try {
        const data = await authUser(req.body);
        const token = createToken(data[0]);
        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true
        })
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404)
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getUserAll();
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er, 404)
    }
})

route.put('/:_id', async (req, res) => {
    try {
        const data = await updateUser(req.params._id, req.body);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er, 404)
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUser(req.params._id);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er, 404)
    }
})

module.exports = route;