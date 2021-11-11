module.exports = function (sequelize, DataTypes) {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        synopsis: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
            },
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
                isIn: [[1,2,3,4,5]]
            },
        },
        published: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        paranoid: true,
    });

    Book.associate = ({ Author }) => {
        Book.belongsTo(Author, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Book;
}
