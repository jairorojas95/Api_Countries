const knex = require('../../database');

const getCountries = async () => {
  const query = await knex.select().from('Countrie');
  return query;
};
const getState = async (CountrieId) => {
  const query = await knex
    .select()
    .from('State')
    .where((idCountrie = CountrieId));
  return query;
};

const getCitys = async (StateId) => {
  const query = await knex
    .select()
    .from('City')
    .where((idState = StateId));
  return query;
};

module.exports = { getCountries, getState, getCitys };
