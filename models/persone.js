"use strict";

module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    creation_date : DataTypes.DATE(),
    modification_date : DataTypes.DATE(),
    national_id : DataTypes.STRING(20),
    first_name : DataTypes.STRING(150),
    father_name : DataTypes.STRING(150),
    grand_name : DataTypes.STRING(150),
    family_name : DataTypes.STRING(150),
    mother_name : DataTypes.STRING(150),
    birth_date : DataTypes.DATE(),
    gender : DataTypes.INTEGER(2),
    changed_during_exhibition : DataTypes.INTEGER(1),
    registry_number : DataTypes.STRING(10),
    deleted : DataTypes.INTEGER(1),

  } );

  return Person;
};
