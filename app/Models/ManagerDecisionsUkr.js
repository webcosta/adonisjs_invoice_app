'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ManagerDecisionsUkr extends Model {
    invoices () {
        return this.hasMany('App/Models/Invoices')
    }
}

module.exports = ManagerDecisionsUkr
