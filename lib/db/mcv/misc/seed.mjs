import { stubProducts, stubQuestions, stubReviews, stubSubscribers } from "../seed/seed.data.js"
import { seedQuestion, seedUser, seedReview, seedProduct, seedSubscriber } from "../seed/seed.helper.js";
import bcrypt from 'bcryptjs';

export const seedQuestions = async () => {

    for (let i = 0; i < stubQuestions.length; i++) {

        const questionList = await seedQuestion(stubQuestions[i]);
    }
}

export const seedUsers = async () => {
    
    // Seeding Admin User
    const user = await seedUser({
        "name" : "admin",
        "email" : "admin@mediacollege.dk",
        "role" : "admin",
        "hashedPassword" : await bcrypt.hash("admin", 10)
    })

    // Seeding Guest User
    const guest = await seedUser({
        "name" : "guest",
        "email" : "guest@mediacollege.dk",
        "role" : "guest",
        "hashedPassword" : await bcrypt.hash("guest", 10)
    })

    return true
}

export const seedReviews = async () => {

    for (let i = 0; i < stubReviews.length; i++) {
        const reviewsList = await seedReview(stubReviews[i]);
    }

    return true
}

export const seedProducts = async () => {

    for (let i = 0; i < stubProducts.length; i++) {
        const productsList = await seedProduct(stubProducts[i]);
    }

    return true
}

export const seedSubscribers = async () => {

    for (let i = 0; i < stubSubscribers.length; i++) {
        const productsList = await seedSubscriber(stubSubscribers[i]);
    }

    return true
}

// seedSubscribers();

console.log('DONE')