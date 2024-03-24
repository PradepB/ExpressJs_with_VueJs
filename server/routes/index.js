// const { logger } = require('@core/util/universal-logger/server-side-launcher');
// const { signedInUser } = require('../middlewares/signedinUser');
// const packageJson = require('../../package.json');

const cookieDomain = process.env.COOKIE_DOMAIN;

module.exports = (app) => {
  /**
   * Used by DS teams for health check tracking.
   */
  app.get('/healthcheck', (req, res) => {
    res.status(200).send('lty-offer-defination application is up and running.');
  });

  const setEnvProperties = async (req, res) => {
    // set any property based killswitch below
    const deviceType = (
      req.get('X-Bloomingdales-Device')
      || req.get('x-bloomingdales-device')
      || res.get('X-Bloomingdales-Device')
      || res.get('x-bloomingdales-device')
      || req.get('x-bloomingdales-platform')
      || 'PC'
    ).toUpperCase();
    const isMew = deviceType === 'PHONE'
      || deviceType === 'MEW'
      || deviceType === 'TABLET'
      || deviceType === 'MOBILE';

    app.envProps.set({
      assetHost: process.env.ASSET_HOST, // required for webpack_public_path
      tagMngrEnabled: process.env.TAG_MNGR_ENABLED,
      tagMngrAccount: process.env.TAG_MNGR_ACCOUNT,
      tagMngrEnv: process.env.TAG_MNGR_ENV,
      tealiumSyncEnabled: process.env.TEALIUM_SYNC_ENABLED,
      entryPoint: process.env.ENTRY_POINT,
      cookieDomain,
      isMew,
      deviceType: isMew ? 'PHONE' : 'DESKTOP',
      soasta: {},
    });
  };
  
  app.get('/', async (req, res, next) => {
    console.log("-----000000------------------------")
    const metaTags = {
      title: 'Home',
    };
    // req.locals.context = { title: metaTags.title, ...req.locals.context };
    console.log("-----000000")
    next();
  });

 };
