import User from './../modules/user'

export const typeDefsMutation = `
    type Mutation {
        setUser(firebase_id: String): User
    }
`

// Move to USER_MODULES
export const resolversMutation = {
    setUser: async (_,{firebase_id}) => {
        try {
            let user = await User.findOne({firebase_id})

            if(user) return user

            user = await User.create({firebase_id})

            return user
        } catch (err) {
            console.log('setUser: ', err)
        }
    }
}