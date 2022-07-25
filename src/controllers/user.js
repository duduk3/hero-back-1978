const { User } = require('../models');

const getAll = async (_req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await User.findOne({ where: { id } });
    res.status(200).json(result);
};

const create = async (req, res) => {
    await User.create(req.body);
    res.status(201).json(req.body);
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