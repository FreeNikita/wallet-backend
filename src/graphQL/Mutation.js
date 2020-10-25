import User from './../modules/user'
import Wallet from '../modules/wallet'

export const typeDefsMutation = `
    type Mutation {
        createWallet(
            user_id: String,
            name: String,
            amount: Int,
            currency: String,
            type: String,
        ): Wallet
        
        removeWallet(
            wallet_id: String,
            user_id: String
        ): Id
        
        updateWallet(
            wallet_id: String,
            user_id: String,
            name: String,
            amount: Int,
            currency: String,
            type: String,
        ): Wallet
        
        addTransaction(
            wallet_id: String,
            user_id: String,
           
            amount: Int,
            title: String,
            category: String,
            subCategory: String,
            date: String,
            description: String,
        ): Status
        
        removeTransaction(
            wallet_id: String,
            user_id: String,
            trans_id: String,
            trans_amount: Int
        ): Status
        
        updateTransaction(
            wallet_id: String,
            user_id: String,
            trans_id: String
        ): String
    }
`

// Move to USER_MODULES

export const resolversMutation = {
    createWallet: async (_, params) => {
        try {
            const {user_id, name = '', amount = 0, currency = '', type = '' } = params;

            const wallet = await new Wallet({
                user_id,
                name,
                amount,
                currency,
                type
            })

            return await wallet.save()
        } catch (err) {
            console.log('createWallet: ', err)
        }
    },
    removeWallet: async (_, params) => {
        try {
            const { wallet_id, user_id } = params;
            await Wallet.findOneAndDelete({
                _id: wallet_id,
                user_id
            })

            return { id: wallet_id }
        } catch (err) {
            console.log('removeWallet: ', err)
        }
    },
    updateWallet: async (_, params) => {
        try {
            const { wallet_id, user_id, ...fields } = params;
            const wallet = await Wallet.findOneAndUpdate(
                {
                    _id: wallet_id,
                    user_id
                },
                {...fields},
                {
                    new: true
                })

            return wallet
        } catch (err) {
            console.log('removeWallet: ', err)
        }
    },

    addTransaction: async (_, params) => {
        try {
            const { wallet_id, user_id, amount, ...fields } = params;
            const wallet = await Wallet.findOne({
                _id: wallet_id,
                user_id
            })

            wallet.history.push({
                ...fields,
                amount
            })

            wallet.amount = wallet.amount + amount

            await wallet.save()
            return {
                status: "success"
            }
        } catch (err) {
            console.log('removeWallet: ', err)
        }
    },

    removeTransaction: async (_, params) => {
        try {
            const { wallet_id, user_id, trans_id } = params;
            const wallet = await Wallet.findOne({
                _id: wallet_id,
                user_id,
            })

            const { amount } = wallet.history.find(({id}) => id === trans_id)
            await wallet.updateOne({
                amount: wallet.amount - amount,
                $pull: {
                    history: {_id: trans_id}
                }
            })

            return {
                status: "success"
            }
        } catch (err) {
            console.log('removeWallet: ', err)
        }
    },

    updateTransaction: () => {
        return {
            status: "Is not ready"
        }
    }
}
