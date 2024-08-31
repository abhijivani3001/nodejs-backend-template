import DotenvFlow from 'dotenv-flow';

DotenvFlow.config();

export default {
  // General
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,

  // Database
  DATABASE_URL_LOCAL: process.env.DATABASE_URL_LOCAL,
};
