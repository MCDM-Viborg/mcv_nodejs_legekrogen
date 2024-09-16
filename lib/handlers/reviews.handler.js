import dbConnect from "../db/dbConnect.js";
import reviewModel from "../db/models/review.model.mjs";

/* 

    QandAs Handler

*/

export const getReviews = async () => {

    let result = {status: 'error', message: `An Error Getting Reviews occured`, data: []};

    try {

        await dbConnect();

        await reviewModel.find({}).then((data) => {  

            result = {status: 'ok', message: "Reviews fetched successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const addReview = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();
    
        let data = await reviewModel.create(body);
        result = {status: 'ok', message: "Review created successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}

export const updateReview = async (body) => {

    let result = {status: 'error', message: "An Error Occurred", data: []};

    try {

        await dbConnect();
    
        let data = await reviewModel.findByIdAndUpdate({_id: body.id}, body, {new: true});
        result = {status: 'ok', message: "Review created successfully", data: data}

    } catch (error) {   

        console.log(error)

    }

    return result

}

export const deleteReview = async (id) => {

    let result = {status: 'error', message: `An Error Deleting review ${id} occurred`, data: []};

    try {

        await dbConnect();

        await reviewModel.findByIdAndDelete({_id: id}).then((data) => {  

            result = {status: 'ok', message: "Review deleted successfully", data: data}

        }).catch((error) => {

            console.log(error)

        });

        return result;

    } catch (error) {

        console.log(error)

    }

};