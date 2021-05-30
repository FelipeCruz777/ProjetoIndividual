	'use strict';

	/* 
	lista e explicação dos Datatypes:
	https://codewithhugo.com/sequelize-data-types-a-practical-guide/
	*/

	module.exports = (sequelize, DataTypes) => {
	    let Cadastro = sequelize.define('Cadastro', {
	        idUsuario: {
	            field: 'idUsuario',
	            type: DataTypes.INTEGER,
	            primaryKey: true,
	            autoIncrement: true
	        },
	        nomeUsuario: {
	            field: 'nomeUsuario',
	            type: DataTypes.STRING,
	            allowNull: false
	        },
	        emailUsuario: {
	            field: 'emailUsuario',
	            type: DataTypes.STRING,
	            allowNull: false
	        },

	        senha: {
	            field: 'senha',
	            type: DataTypes.STRING,
	            allowNull: false
	        }
	    }, {
	        tableName: 'cadastro',
	        freezeTableName: true,
	        underscored: true,
	        timestamps: false,
	    });

	    return Cadastro;
	};