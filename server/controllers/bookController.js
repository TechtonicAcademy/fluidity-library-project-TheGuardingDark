const { Author, Book } = require('../models');

module.exports = {
    findAll: (req, res) => {
        Book.findAll({
            include: [Author],
        })
            .then((book) => res.json(book))
            .catch((err) => res.status(500).json(err));
    },
    findOrCreate: (req, res) => {
        const { firstName } = req.body.firstName;
        const { lastName } = req.body.lastName;
            
        Author.findOrCreate(req.body, {
            where: {
                [Op.and]: [
                    { firstName: { [Op.substring]: firstName } },
                    { lastName: { [Op.substring]: lastName } }]
                }
        })
            .then(authorData => {
                return authorData.get();
            })
            .then(author => {
                Book.create({...req.body, insertId: author.authorId})
            })
            .then(() => res.end())
            .catch((err) => res.status(422).json);
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
    },
    search: (req, res) => {
        const { query } = req.query;
        Book.findAll({
            include: [Author],
            where: {
                [Op.or]: [{ title: { [Op.substring]: query } },
                            { firstName: { [Op.substring]: query } },
                            { lastName: { [Op.substring]: query } }]
            },
        })
            .then((books) => res.json(books))
            .catch((err) => res.status(500).json(err));
    },
};
