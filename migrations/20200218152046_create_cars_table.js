
exports.up = function(knex) {
  return knex.schema.createTable('characters', tbl => {
    // primary key
    tbl.increments();

    tbl
      .string('VIN', 17)
      .notNullable()
      .index();

    tbl
      .string('make')
      .notNullable()
      .index();

    tbl
      .string('model')
      .notNullable()

    tbl
      .integer('mileage')
      .notNullable()

    tbl 
      .string('transmission')
    
    tbl
      .string('title status')
      
  })
};

exports.down = function(knex) {
  
};
