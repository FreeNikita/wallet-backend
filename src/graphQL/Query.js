import Wallet from "./../modules/wallet";

export const typeDefsQuery = `
    type Query {
        getAllWallets(user_id: String): [Wallet]
  }
`

export const resolversQuery = {
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