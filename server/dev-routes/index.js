/* eslint-disable import/no-dynamic-require */

module.exports = (app) => {
  const mockPath = '../../src/mocks';
  app.get('/api/marketing/', (req, res) => {
    const mock = require(`${mockPath}/offerList.json`);
    res.json(mock);
  });
 
};
