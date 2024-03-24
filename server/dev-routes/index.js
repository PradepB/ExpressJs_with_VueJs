/* eslint-disable import/no-dynamic-require */

module.exports = (app) => {
  const mockPath = '../../src/mocks';
  app.get('/api/marketing/loyalty/v1/offers/brand/MCY', (req, res) => {
    const mock = require(`${mockPath}/loyaltyOffers/offerList.json`);
    res.json(mock);
  });
 
};
