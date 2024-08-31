/* eslint-disable no-console */
import app from './app';
import config from './config/config';

const server = app.listen(config.PORT);

(() => {
  try {
    console.info(`APPLICATION_STARTED`, {
      meta: {
        PORT: config.PORT,
        SERVER_URL: config.SERVER_URL,
      },
    });
  } catch (err) {
    console.error(`APPLICATION_ERROR`, {
      meta: err,
    });

    server.close((err) => {
      if (err) {
        console.error(`APPLICATION_ERROR`, {
          meta: err,
        });
      }

      process.exit(1);
    });
  }
})();
