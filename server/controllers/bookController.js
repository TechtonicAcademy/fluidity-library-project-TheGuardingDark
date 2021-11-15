const { Author, Book } = require('../models');
const { Op } = require('sequelize');

module.exports = {
    search: (req, res) => {
        const { query } = req.query;
        Book.findAll({
            include: [Author],
            where: {
                [Op.or]: [
                    {title: { [Op.substring]: query} },
                    {'$Author.firstName$': { [Op.substring]: query} },
                    {'$Author.lastName$': { [Op.substring]: query} }]
            }
        })
            .then((book) => res.json(book))
            .catch((err) => res.status(500).json(err));
    },
    findAll: (req, res) => {
        Book.findAll()
            .then((book) => res.json(book))
            .catch((err) => res.status(500).json(err));
    },
    findOrCreate: (req, res) => {
        const firstName = req.body.firstName;
        const lastName  = req.body.lastName;
            
        Author.findOrCreate({
            where: {
                [Op.and]: [
                    { firstName },
                    { lastName }
                ]
            },
            defaults: {
                firstName,
                lastName
            }
        }).then((author) => {
            req.body.AuthorId = author[0].dataValues.id;
            Book.create(req.body, {
                include: [Author]
            });            
        })
            .then(() => res.end())
            .catch((err) => res.status(422).json(err));
    },
    findById: (req, res) => {
        Book.findByPk(req.params.id, {
            include: [Author],
        })
            .then((book) => res.json(book))
            .catch((err) => res.status(500).json(err));
    },
    update: (req, res) => {
        Book.update(req.body, {
            where: { id: req.params.id },
        })
            .then(() => res.end())
            .catch((err) => res.status(422).json(err));
    },
    delete: (req, res) => {
        Book.destroy({
            where: { id: req.params.id },
        })
            .then(() => res.end())
            .catch((err) => res.status(500).json(err));
    }
};
