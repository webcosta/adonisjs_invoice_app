'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Invoice extends Model {
    suppliers() {
        return this.belongsTo('App/Models/Supplier','supplier_id', 'id')
    }

    decision() {
        return this.belongsTo('App/Models/ManagerDecisionsUkr','decision_id','id')
    }

    status () {
        return this.belongsTo('App/Models/InvoiceStatusUkr','status_id','id')
    }
    
}

module.exports = Invoice
