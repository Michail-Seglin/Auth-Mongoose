const { createUser, authUser } = require('../service/user.service');
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

        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true
        })
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404)
    }
})

module.exports = route;