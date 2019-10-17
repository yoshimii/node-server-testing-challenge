
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {member_name: 'Blue'},
        {member_name: 'Mikey'},
        {member_name: 'Boo'}
      ]);
    });
};
