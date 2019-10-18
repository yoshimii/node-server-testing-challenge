
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {member: 'Edward'},
        {member: 'Alphonse'},
        {member: 'Strong'}
      ]);
    });
};
