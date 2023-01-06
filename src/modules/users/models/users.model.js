import { DataTypes } from 'sequelize'

import sequelize from '../../../../database/sqlite.conntection.js'

const tableName = 'users'

const Users = sequelize.define(
  tableName,
  {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      set (value) {
        this.setDataValue('name', value.trim().toUpperCase())
      }
    },
    phone: {
      type: DataTypes.TEXT
    },
    birthday: {
      type: DataTypes.TEXT,
      set (value) {
        this.setDataValue('birthday', new Date(value).toISOString())
      }
    },
    email: {
      type: DataTypes.TEXT,
      set (value) {
        this.setDataValue('email', value.trim().toLowerCase())
      }
    },
    gender: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      set (value) {
        if (typeof value === 'boolean') {
          this.setDataValue('status', +value)
        }
      },
      get () {
        const rawValue = this.getDataValue('status')
        return !!rawValue
      }
    }
  },
  {
    tableName,
    timestamps: false
  }
)

export default Users
