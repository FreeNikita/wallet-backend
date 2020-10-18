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
}
