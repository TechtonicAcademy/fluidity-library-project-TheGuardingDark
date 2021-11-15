const { sequelize, Author, Book } = require('../models');
const authors = require('./authorSeeds.json');
const books = require('./bookSeeds.json');

const seedTables = async () => {
    await sequelize.sync({force: true});
    await Author.bulkCreate(authors);
    await Book.bulkCreate(books);
    console.log('seeded tables');
    process.exit(0);
};

seedTables().catch((err) => console.log(err));
