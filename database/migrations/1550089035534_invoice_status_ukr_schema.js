'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoiceStatusUkrSchema extends Schema {
  up () {
    this.create('invoice_status_ukrs', (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('info')
      table.timestamps()
    })
  }

  down () {
    this.drop('invoice_status_ukrs')
  }
}

module.exports = InvoiceStatusUkrSchema
