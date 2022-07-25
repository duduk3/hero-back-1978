const { User } = require('../models');

const getAll = async (_req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
};

const getById = async (req, res) => {
    const result = await User.findByPk(req.params);
    res.status(200).json(result);
};

const create = async (req, res) => {
    const users = await User.create(req.body[0], req.body[1], req.body[2]);
    res.status(201).json(users);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await User.destroy({ where: { id } });
    res.status(204).json(result);
};

module.exports = {
    getAll,
    getById,
    create,
    remove,
};