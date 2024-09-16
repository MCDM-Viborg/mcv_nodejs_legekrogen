// Server Modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// Routes
import indexRouter from './routes/www/index.route.js';
import authRouter from './routes/auth/auth.js';
import authTokenRouter from './routes/auth/token.js';
import userRouter from './routes/users/user.route.js';
import usersRouter from './routes/users/users.route.js';
import subscriberRouter from './routes/subscribers/subscriber.route.js';
import subscribersRouter from './routes/subscribers/subscribers.route.js';
import qandasRouter from './routes/qanda/qandas.routes.js';
import reviwesRoute from './routes/reviews/reviews.route.js';
import reviewRoute from './routes/reviews/review.route.js';
import productsRoute from './routes/products/products.route.js';
import productRoute from './routes/products/product.route.js';
import orderRoute from './routes/orders/order.route.js';

const server = {};
const expressServer = express();
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));
expressServer.use(cors());
expressServer.use(cookieParser());

// Serve static files from the public and www directories.
expressServer.use(express.static('[vmc]'));
expressServer.use(express.static('public'));
expressServer.use(express.static('www'));


/*

  Routes

*/
// Index Client Frontend Route WWW
expressServer.use(indexRouter);

// Backend API Routes
expressServer.use(authRouter);
expressServer.use(authTokenRouter);

// Backend API Users Routes
expressServer.use(usersRouter);
expressServer.use(userRouter);

// Project Specific Routes.
expressServer.use(subscriberRouter);
expressServer.use(subscribersRouter);

// Project Specific Routes.
expressServer.use(qandasRouter);

// Project Specific Routes.
expressServer.use(reviewRoute);
expressServer.use(reviwesRoute);

// Project Specific Routes.
expressServer.use(productRoute);
expressServer.use(productsRoute);

// Project Specific Routes.
expressServer.use(orderRoute);


/*

  Run Server

*/
server.run = () => {

    console.log('\n\n---------------------');
    console.log('Server Started', process.env.NODE_ENV, process.env.SERVER_HOST);
    console.log('\n\n---------------------');

    expressServer.listen(process.env.SERVER_PORT, () =>
      console.log(`Running : ${process.env.SERVER_PORT}`),
    );

}

export default server;


