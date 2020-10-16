import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firebase_id: String,
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

// userSchema.methods.setUser = async function(id){
//     // const user = await User.findOne({
//     //     firebase_id: id
//     // })
//
//     return "test"
// }

export default model('User', userSchema )
