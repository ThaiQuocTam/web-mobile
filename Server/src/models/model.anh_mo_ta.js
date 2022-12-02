'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class anh_mo_ta extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    anh_mo_ta.init({
        Id_SP: DataTypes.INTEGER,
        Hinh_anh1: DataTypes.TEXT('long'),
        Hinh_anh2: DataTypes.TEXT('long'),
        Hinh_anh3: DataTypes.TEXT('long'),
        Hinh_anh4: DataTypes.TEXT('long'),
        Hinh_anh5: DataTypes.TEXT('long'),

    }, {
        sequelize,
        modelName: 'anh_mo_ta',
    });
    return anh_mo_ta;
};  