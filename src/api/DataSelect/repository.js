const knex = require('../../database');

const getCountries = async () => {
  const query = await knex.select().from('Countrie');
  return query;
};
//.........................................................
const getState = async (idCountrie) => {
  const query = await knex
    .select()
    .from('State')
    .where('idCountrie', idCountrie);
  return query;
};
//.........................................................
const getCitys = async (idState) => {
  const query = await knex.select().from('City').where('idState', idState);
  return query;
};

module.exports = { getCountries, getState, getCitys };
