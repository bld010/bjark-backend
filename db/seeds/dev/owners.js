exports.seed = async function (knex) {
  try {
    await knex('dogs').del()
    await knex('owners').del() 
    

    return knex('owners').insert([
      { name: 'Brianna' }, 
      { name: 'Bryan' }, 
      { name: 'Dorvid' }
    ]);

  } catch (error) {
    console.error(`Error seeding data: ${error}`)
  }
}