const knex = require('../database/connection');

exports.PENDING = 'pending';
exports.DONE = 'done';

exports.all = () => {
  return knex
    .select('*')
    .from('tasks');
}

exports.create = (task) => {
  return knex('tasks')
    .insert({ description: task.description });
}

exports.updateStatus = (task) => {
  return knex('tasks')
  .where( 'id', task.id)
  .update({ status: this.DONE });
}

exports.find = (id) => {
  return knex 
    .select('*')
    .from('tasks')
    .where('id', id)
    .first();
}

exports.delete = (id) => {
  return knex('tasks')
  .where('id', id)
  .del();
}