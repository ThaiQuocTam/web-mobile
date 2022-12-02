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
        Ten_san_pham: DataTypes.STRING,
        So_luong: DataTypes.INTEGER,
        Gia_san_pham: DataTypes.INTEGER,
        Ngay_dat: DataTypes.DATE,
        Id_nguoi_dung: DataTypes.INTEGER,
        Id_san_pham: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'anh_mo_ta',
    });
    return anh_mo_ta;
};  