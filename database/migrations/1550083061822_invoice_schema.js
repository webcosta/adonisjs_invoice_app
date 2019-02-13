'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoiceSchema extends Schema {
  up () {
    this.create('invoices', (table) => {
      table.increments()
      table.string('identifier').notNullable()
      table.date('date').notNullable()
      table.float('sum_no_VAT').notNullable()
      table.text('info')
      table.integer('supplier').notNullable()
      table.integer('decision').notNullable()
      table.integer('status').notNullable()
      table.integer('user').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('invoices')
  }
}

module.exports = InvoiceSchema
