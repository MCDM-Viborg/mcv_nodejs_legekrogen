import express from 'express';
import { getSubscribers } from '../../handlers/subscriber.handler.js';
import auth from '../../middleware/auth.middleware.js';


const subscribersRouter = express.Router();

// GET -> ID / FETCH
subscribersRouter.get('/subscribers', auth, async (req, res) => {

    let result = await getSubscribers(req.params.id);

    return res.status(200).send({ ...result });

})

export default subscribersRouter;

