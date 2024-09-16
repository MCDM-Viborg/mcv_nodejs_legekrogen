import express from 'express';
import multer from 'multer';
import auth from '../../middleware/auth.middleware.js';
import { productsStorage } from '../../db/mcv/misc/mStorage.js';
import { addOrder } from '../../handlers/order.handler.js';

const orderRoute = express.Router();
const upload = multer({ storage: productsStorage });

// POST / CREATE
orderRoute.post('/order', auth, upload.single('file'), async (req, res) => {
    
    const model = {
        ...req.body
    }

    const result = await addOrder(model);

    return res.status(200).send({ ...result });
    
});

export default orderRoute;
