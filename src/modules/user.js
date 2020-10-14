import { Schema, model } from 'mongoose';

const user = new Schema({
    name: String,
    surname: String,
    email: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    // wallets: {
    //     type: [],
    //
    // }
})

export default model('User', user)
