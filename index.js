const express = require('express');
const bodyParser = require('body-parser');

const { hallsHandler } = require('./route-handlers');

const { hallByIdHandler } = require('./route-handlers');

const { createHallsHandler } = require('./route-handlers');

const { updateHallsHandler } = require('./route-handlers');

const { deleteHallsHandler } = require('./route-handlers');

const { usersHandler } = require('./route-handlers');

const { userByIdHandler } = require('./route-handlers');

const { createUserHandler } = require('./route-handlers');

const { updateUserHandler } = require('./route-handlers');

const router = new express.Router();
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// TODO: Base routes

//halls


router.use('/halls', hallsHandler);

router.use('/halls/:id', hallByIdHandler);

router.use('/halls', createHallsHandler);

router.use('/halls', updateHallsHandler);

router.use('/halls', deleteHallsHandler);

//users 

router.use('/users', usersHandler);

router.use('/users/:id', userByIdHandler);

router.use('/users', createUserHandler);

router.use('/users', updateUserHandler);

// Test route
router.get('/', (req, res) => {
  res.send('ok');
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));