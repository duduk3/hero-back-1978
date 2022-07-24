const { User } = require('../models');

const getAll = async (_req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
};

const create = async (req, res) => {
    const users = await User.create(req.body);
    res.status(201).json(users);
};

module.exports = {
    getAll,
    create,
};