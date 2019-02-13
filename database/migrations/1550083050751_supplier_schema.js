'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SupplierSchema extends Schema {
  up () {
    this.create('suppliers', (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('city').notNullable()
      table.string('tel').notNullable()
      table.boolean('VAT').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('suppliers')
  }
}

module.exports = SupplierSchema
