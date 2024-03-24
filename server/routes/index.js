module.exports = (app) => {
  /**
   * Used by DS teams for health check tracking.
   */
  app.get('/healthcheck', (req, res) => {
    res.status(200).send('application is up and running.');
  });

  
  
  app.get('/', async (req, res, next) => {
    const metaTags = {
      title: 'Home',
    };
    next();
  });

 };
