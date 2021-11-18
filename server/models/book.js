module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      synopsis: {
        type: DataTypes.STRING(1234),
        allowNull: true,
      },
      published: {
        type: DataTypes.DATE,
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
          isIn: [[0, 1, 2, 3, 4, 5]],
        },
      },
      src: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      paranoid: true,
    }
  );

  Book.associate = ({ Image, Author }) => {
    Book.belongsTo(Author);
    Book.hasOne(Image);
  };
  //   Book.associate = ({ Author }) => {
  //     Book.belongsTo(Author, {
  //       onDelete: 'CASCADE',
  //     });
  //   };
  //   //   Book.associate = ({ Image }) => {
  //   //     Book.belongsTo(Image);
  //   //   };
  //   Book.associate = ({ Image }) => {
  //     Book.belongsTo(Image, {
  //       //   onDelete: 'CASCADE',
  //     });
  //   };
  return Book;
};
