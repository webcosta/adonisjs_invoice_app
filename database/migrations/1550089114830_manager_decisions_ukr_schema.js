'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManagerDecisionsUkrSchema extends Schema {
  up () {
    this.create('manager_decisions_ukrs', (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table.string('info')
      table.timestamps()
    })
  }

  down () {
    this.drop('manager_decisions_ukrs')
  }
}

module.exports = ManagerDecisionsUkrSchema
