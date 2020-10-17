import { Schema, model } from 'mongoose';

const walletSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    amount: {
        type: Number,
        default: ''
    },
    currency: String,
    type: String,
    history: [{
        amount: Number,
        type: String,
        categories: String,
        description: {
            type: String,
            default: ''
        }
    }]


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

export default model('Wallet', walletSchema )
