'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoiceSchema extends Schema {
  up () {
    this.create('invoices', (table) => {
      table.increments()
      table.string('identifier').notNullable()
      table.date('date').notNullable().defaultTo(this.fn.now())
      table.float('sum_no_VAT').notNullable()
      table.text('info')
      table.integer('supplier_id').notNullable()
      table.integer('decision_id').notNullable()
      table.integer('status_id').notNullable()

      table
        .foreign('supplier_id')
        .references('id')
        .on('suppliers')
        .onDelete('no action')
      table
        .foreign('decision_id')
        .references('id')
        .on('manager_decisions_ukrs')
        .onDelete('no action')
      table
        .foreign('status_id')
        .references('id')
        .on('invoice_status_ukrs')
        .onDelete('no action')
      table.integer('user').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('invoices')
  }
}

module.exports = InvoiceSchema
