module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.BLOB('long'),
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

  Image.associate = ({ Book }) => {
    Image.belongsTo(Book);
  };

  return Image;
};
