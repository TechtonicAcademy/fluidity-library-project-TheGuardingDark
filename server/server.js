const { sequelize } = require('./models');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes');

global.__basedir = __dirname;

const corsOptions = {
  origin: 'http://localhost:1234',
};

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.use((error, req, res, next) => {
  console.log('This is the rejected field ->', error.field);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));
}
// take out force true later
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on 'http://localhost:${PORT}'`)
  );
});
