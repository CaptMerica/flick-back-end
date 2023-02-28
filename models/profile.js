'use strict'
const { Model } = require('sequelize')
const song = require('./song')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {

    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' })

      Profile.hasMany(models.Song, { 
        foreignKey: 'profileId', 
        as: 'songs' 
      })
    }
  }

  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Profile',
  })
  return Profile
}
