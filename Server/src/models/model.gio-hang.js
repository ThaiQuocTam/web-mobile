'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class gio_hang extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    gio_hang.init({
        Ten_san_pham: DataTypes.STRING,
        So_luong: DataTypes.INTEGER,
        Gia_san_pham: DataTypes.INTEGER,
        Ngay_dat: DataTypes.DATE,
        Id_nguoi_dung: DataTypes.INTEGER,
        Id_san_pham: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'gio_hang',
    });
    return gio_hang;
};  