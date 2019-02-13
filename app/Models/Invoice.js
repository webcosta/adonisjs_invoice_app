'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Invoice extends Model {
    suppliers() {
        return this.belongsTo('App/Models/Supplier','supplier', 'id')
    }

    decision() {
        return this.belongsTo('App/Models/ManagerDecisionsUkr','decision','id')
    }

    status () {
        return this.belongsTo('App/Models/InvoiceStatusUkr','status','id')
    }
    
}

module.exports = Invoice
