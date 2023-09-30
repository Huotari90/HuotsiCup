import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';  // Adjust the import path depending on where your database.ts file is located

class Tournament extends Model {
    public id!: number;
    public name!: string;
    // add other fields here
}

Tournament.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        // define other fields
    },
    {
        tableName: 'tournaments',
        sequelize, // passing the `sequelize` instance is required
    }
);

export default Tournament;
