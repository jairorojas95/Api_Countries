const repo = require('./repository');
const { response } = require('express');

/**
 * esta funcion obtiene los paises del mundo
 * @param {}
 * @returns id y nombre del pais
 */

const getCountries = async (req, res) => {
  try {
    const data = await repo.getCountries();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ Message: error.sqlMessage });
  }
};
/**
 * esta funcion obtiene los  estados del pais seleccionado por id
 * @param {idCountrie}
 * @returns id y nombre del esatdo, fk del pais
 */
const getState = async (req, res) => {
  try {
    const { CountrieId } = req.params;
    const data = await repo.getState(CountrieId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ Message: error.sqlMessage });
  }
};
/**
 * esta funcion obtiene las coudades del esatdo seleccionado por id
 * @param {idState}
 * @returns id y nombre de la ciudad, fk del state
 */
const getCitys = async (req, res) => {
  try {
    const { StateId } = req.params;
    const data = await repo.getCitys(StateId);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ Message: error.sqlMessage });
  }
};

module.exports = { getCountries, getState, getCitys };
