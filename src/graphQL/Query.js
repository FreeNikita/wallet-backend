import Wallet from "./../modules/wallet";
import User from "../modules/user";

export const typeDefsQuery = `
    type Query {
        setUser(firebase_id: String!): User
        getAllWallets(user_id: String): [Wallet]
  }
`

export const resolversQuery = {
    setUser: async (_,{firebase_id}) => {
        try {
            let user = await User.findOne({
                firebase_id
            })

            if(user) return user

            user = await new User({
                firebase_id,
            })

            return await user.save()
        } catch (err) {
            console.log('setUser: ', err)
        }
    },
    getAllWallets: async (_, params) => {
        try {
            const { user_id } = params;
            return await Wallet.find({user_id})
        }
        catch (err) {
            console.log('getAllWallet: ', err)
        }
    }
}