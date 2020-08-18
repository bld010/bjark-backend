exports.seed = async function (knex) {
  try {
    await knex('dogs').del()
    await knex('owners').del() 
    
    const ownerId = await knex('owners').insert({name: 'Brianna'}, 'id');

    return knex('dogs').insert({
      name: 'Dosie',
      breed: 'Hound',
      owner_id: ownerId[0]
    })


  } catch (error) {
    console.error(`Error seeding data: ${error}`)
  }
}