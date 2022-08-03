const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('activity', {
        // id: {
        //     type: DataTypes.CHAR(3),
        //     unique: true,
        //     allowNull: false,
        //     primaryKey: true,
        // },
        name: {
            type: DataTypes.STRING
        },
        dificulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: null,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
            }
        },
        season: {
            type: DataTypes.ENUM("summer", "spring", "autumn", "winter")
        }
    }, {
        timestamps: false
    })
}