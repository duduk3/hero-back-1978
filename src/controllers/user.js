const { User } = require('../models');

const getAll = async (_req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await User.getByPk(id);
    res.status(200).json(result);
};

const create = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const users = await User.create(firstName, lastName, email);
    res.status(201).json(users);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await User.delete(id);
    res.status(204).json(result);
};

module.exports = {
    getAll,
    getById,
    create,
    remove,
};