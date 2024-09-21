import productModel from "../db/models/product.model.mjs";
import reviewModel from "../db/models/review.model.mjs";
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const deleteFile = async (image) => {

    let img = image.split(process.env.SERVER_HOST)[1];

    let imgPath = path.join(__dirname, '../../public' + img);

    if(!img.indexOf('no-') === -1) {
        
        try {
            fs.unlinkSync(imgPath), {
                force: true,
            }; 
        } catch (error) {
            // console.log(error)
            
        }
    }
};

export const deleteProductImage = async (id) => {

    let old = await productModel.findById({_id: id});
    await deleteFile(old.image);

};

export const deleteReviewImage = async (id) => {

    let old = await reviewModel.findById({_id: id});
    await deleteFile(old.image);

};