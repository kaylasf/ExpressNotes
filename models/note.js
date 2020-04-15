module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define("Note", {
    noteName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Note;
};
