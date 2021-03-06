module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
      id: { field: 'user_id', type: DataTypes.STRING(50), unique: true, allowNull: false, primaryKey: true },
      password: { field: 'password', type: DataTypes.STRING(30), allowNull: false },
      salt:{field:'salt', type: DataTypes.STRING(30),allowNull: false}
    }, {
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,
  
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,
  
      // define the table's name
      tableName: 'user'
    });
    return user;
  };
